const { parse: parseARN } = require('@aws-sdk/util-arn-parser');
const fs = require('fs/promises');
const path = require('path');
const readdir = require('recursive-readdir');

const handlebars = require('handlebars');
require('handlebars-helpers')({
    handlebars,
});


const INVALIDPATHPART_RE = /(^\.)|[/\\]/;
const TEMPLATEDIR = path.join(__dirname, 'templates');
const TEMPLATEFORMATS = [
    'email',
    'sqs',
    'lambda',
    'http',
    'https',
    'sms',
    'APNS', 'APNS_SANDBOX',
    'APNS_VOIP', 'APNS_VOIP_SANDBOX',
    'MACOS', 'MACOS_SANDBOX',
    'GCM',
    'ADM',
    'BAIDU',
    'MPNS',
    'WNS',
    '_subject_',
];

const STACKSET_NAME_RE     = /^stackset\/(?<name>.+):(?<id>.+)$/;
const STATEMACHINE_NAME_RE = /^stateMachine:(?<name>.+)$/;

const log = require('./bunyan')({ name: 'handlebars' });


/**
 * Read a template file and compile it with Handlebars. This turns off HTML
 * escaping since all SNS Publish Message formats are plain text. The template
 * file is read with UTF-8 encoding.
 *
 * The compilation results are cached the first time the template is loaded.
 *
 * @param {string} file Full path to the file to load.
 * @return {function} Compiled Handlebars template.
 */
async function compileTemplateFile(file) {
    if (!_compileTemplateFileCache[file]) {
        const template = await fs.readFile(file, 'utf8');
        _compileTemplateFileCache[file] = handlebars.compile(
            template,
            { noEscape: true }
        );
    }

    return _compileTemplateFileCache[file];
}
const _compileTemplateFileCache = {};

/**
 * Get the list of possible template files, based on the event source and
 * detail type. It will use these files, in this order, if they exist:
 *
 * - source/detail-type.format.hbs
 * - source/default.format.hbs
 * - detail-type.format.hbs
 * - default.format.hbs
 *
 * The formats are all the ones defined for SNS Publish Message, with the
 * special format `_subject_` for the Subject parameter.
 *
 * @param {string} eventSource The event `source` value.
 * @param {string} eventDetailType The event `detail-type` value.
 * @param {string} templateDir Optional template directory to use. Returned files
 *      will be relative to this value.
 * @return {object} Object where each property is the format and the value is
 *      the file to use. If a file is not found for a format then it will not
 *      have a property.
 */
async function getTemplateFiles(eventSource, eventDetailType, templateDir = TEMPLATEDIR) {
    const hasEventSource = !!eventSource && !INVALIDPATHPART_RE.test(eventSource);
    if (!hasEventSource)
        log.warn({ eventSource }, 'Invalid event source.');
    const hasEventDetailType = !!eventDetailType && !INVALIDPATHPART_RE.test(eventDetailType);
    if (!hasEventDetailType)
        log.warn({ eventDetailType }, 'Invalid event detail-type.');

    const result = {};
    for (const format of TEMPLATEFORMATS) {
        const files = [`default.${format}.hbs`];
        if (hasEventDetailType)
            files.unshift(`${eventDetailType}.${format}.hbs`);
        if (hasEventSource) {
            files.unshift(path.join(eventSource, `default.${format}.hbs`));
            if (hasEventDetailType)
                files.unshift(path.join(eventSource, `${eventDetailType}.${format}.hbs`));
        }

        for (const file of files) {
            try {
                const st = await fs.stat(path.join(templateDir, file));
                if (st.isFile()) {
                    result[format] = file;
                    break;
                }
            } catch (err) {
                if (err.code !== 'ENOENT')
                    log.error({ err, file }, 'Cannot stat the file');
            }
        }
    }

    return result;
}

/**
 * Helper to parse an ARN and return either a single property, or the entire
 * parser ARN.
 *
 * @param {string} value The value to parse.
 * @param {string} property The property to return.
 * @return {string|object} The ARN property or the whole parsed ARN.
 */
function helperARN(value, property) {
    try {
        const arn = parseARN(value);

        if (property)
            return arn[property];
        return arn;
    } catch (err) {
        log.error(err, 'Unable to parse arn value: %s', value);
        return undefined;
    }
}

/**
 * Helper to parse a StackSet ARN and get the name from it.
 *
 * @param {string} value The value to parse.
 * @return {string} The name of the StackSet.
 */
function helperStackSetName(value) {
    try {
        const arn = parseARN(value);

        const match = STACKSET_NAME_RE.exec(arn.resource);
        if (match)
            return match.groups.name;
        return arn.resource;
    } catch (err) {
        log.error(err, 'Unable to parse stacksetname value: %s', value);
        return undefined;
    }
}

/**
 * Helper to parse a State Machine ARN and get the name from it.
 *
 * @param {string} value The value to parse.
 * @return {string} The name of the State Machine.
 */
function helperStateMachineName(value) {
    try {
        const arn = parseARN(value);

        const match = STATEMACHINE_NAME_RE.exec(arn.resource);
        if (match)
            return match.groups.name;
        return arn.resource;
    } catch (err) {
        log.error(err, 'Unable to parse stepfunctionname value: %s', value);
        return undefined;
    }
}

/**
 * Initialize handlebars for use in our templates. Right now, this primarily
 * finds and registers the partials.
 *
 * @param {string} templateDir Optional template directory to use. Returned files
 *      will be relative to this value.
 * @return {object} Returns the exports of this module.
 */
async function initHandlebars({ templateDir = TEMPLATEDIR } = {}) {
    const partialFiles = await readdir(
        path.join(templateDir, 'partials'),
        [
            (f, s) => s.isFile() && !f.endsWith('.hbs'),
        ]
    );

    for (const partialFile of partialFiles) {
        const partialName = path.basename(partialFile, '.hbs');
        const partial = await fs.readFile(partialFile, 'utf8');

        log.info({ partialName, partialFile }, 'Registering partial');
        handlebars.registerPartial(partialName, partial);
    }

    handlebars.registerHelper('arn', helperARN);
    handlebars.registerHelper('stackSetName', helperStackSetName);
    handlebars.registerHelper('stateMachineName', helperStateMachineName);

    return {
        TEMPLATEDIR,
        getTemplateFiles,
        render,
    };
}

/**
 * Render an event using the best template possible using Handlebars.
 *
 * @param {object} event CloudWatch Event will a `source` and `detail-type`.
 * @param {string} templateDir Optional template directory to use. Returned files
 *      will be relative to this value.
 * @return {object} Returns a `message` and `subject` with the rendered values,
 *      ready to be passed to SNS Publish.
 */
async function render(event, templateDir = TEMPLATEDIR) {
    const files = await getTemplateFiles(event.source, event['detail-type'], templateDir);
    const message = {
        default: JSON.stringify(event),
    };
    let subject = 'CloudWatch Event';

    for (const [format, file] of Object.entries(files)) {
        const template = await compileTemplateFile(path.join(templateDir, file));

        switch (format) {
            case '_subject_':
                subject = template(event).trim();
                if (subject.length > 100)
                    subject = subject.substring(0, 97) + '...';
                break;

            default:
                message[format] = template(event);
                break;
        }
    }

    return { message, subject };
}


module.exports = initHandlebars;

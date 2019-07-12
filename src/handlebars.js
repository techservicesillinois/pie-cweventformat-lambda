const bunyan = require('bunyan');
const fs = require('fs');
const path = require('path');
const util = require('util');

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

const log = bunyan.createLogger({ name: 'cloudwatchEventFormat.handlebars' });
const fs_readFile = util.promisify(fs.readFile),
      fs_stat = util.promisify(fs.stat);


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
        const template = await fs_readFile(file, 'utf8');
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
    const hasEventDetailType = hasEventSource && !!eventDetailType && !INVALIDPATHPART_RE.test(eventDetailType);
    if (!hasEventDetailType)
        log.warn({ eventDetailType }, 'Invalid event detail-type.');

    const result = {};
    for (const format of TEMPLATEFORMATS) {
        const files = [`default.${format}.hbs`];
        if (hasEventSource)
            files.unshift(path.join(eventSource, `default.${format}.hbs`));
        if (hasEventDetailType)
            files.unshift(path.join(eventSource, `${eventDetailType}.${format}.hbs`));

        for (const file of files) {
            try {
                const st = await fs_stat(path.join(templateDir, file));
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

        if (format === '_subject_')
            subject = template(event);
        else
            message[format] = template(event);
    }

    return { message, subject };
}


module.exports = {
    TEMPLATEDIR,
    getTemplateFiles,
    render,
};

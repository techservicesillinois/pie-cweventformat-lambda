const bunyan = require('bunyan');
const fs = require('fs');
const path = require('path');
const util = require('util');

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
const fs_stat = util.promisify(fs.stat);


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


module.exports = {
    TEMPLATEDIR,
    getTemplateFiles,
};

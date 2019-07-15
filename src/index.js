const AWS = require('aws-sdk');
const bunyan = require('bunyan');

const hbs = require('handlebars');

const log = bunyan.createLogger({ name: 'cloudwatchEventFormat' });
const awsSNS = new AWS.SNS({ apiVersion: '2010-03-31' });

const TEMPLATE_DIR = process.env.TEMPLATE_DIR;
const SNS_TOPIC_ARN = process.env.SNS_TOPIC_ARN;

/**
 * Entry point for the lambda function.
 */
exports.handler = async (event, context) => {
    const { message, subject } = await hbs.render(event, TEMPLATE_DIR);

    log.info('Publishing "%s" to SNS Topic: %s', subject, SNS_TOPIC_ARN);
    await awsSNS.publish({
        Message: JSON.stringify(message),
        MessageStructure: 'json',
        Subject: subject,
        TopicArn: SNS_TOPIC_ARN,
    });
};

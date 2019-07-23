const AWS = require('aws-sdk');
const bunyan = require('bunyan');
const cacheManager = require('cache-manager');

/**
 * Formats for ARN.
 * https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html
 *
 * arn:partition:service:region:account-id:resource
 * arn:partition:service:region:account-id:resourcetype/resource
 * arn:partition:service:region:account-id:resourcetype/resource/qualifier
 * arn:partition:service:region:account-id:resourcetype/resource:qualifier
 * arn:partition:service:region:account-id:resourcetype:resource
 * arn:partition:service:region:account-id:resourcetype:resource:qualifier
 */
const ARN_SERVICE_RE = /^arn:(?<partition>[^:]*):(?<service>[^:]*):(?<region>[^:]*):(?<accountID>[^:]*):/;
const ARN_MAP_RE = {
    'autoscaling': [
        /^arn:(?<partition>[^:]*):(?<service>autoscaling):(?<region>[^:]*):(?<accountID>[^:]*):(?<resourceType>scalingPolicy|autoScalingGroup):(?<resource>[^:]+):autoScalingGroupName\/(?<asgGroupName>[^:]+)(?::policyName\/(?<asgPolicyName>.+))?$/,
        /^arn:(?<partition>[^:]*):(?<service>autoscaling):(?<region>[^:]*):(?<accountID>[^:]*):(?<resourceType>scalingPolicy|scheduledAction):(?<resource>[^:]+):resource\/(?<asResourceService>[^/:]+)\/(?<asResourceID>[^:]+):(?:(?:policyName\/(?<asPolicyName>.+))|(?:scheduledActionName\/(?<asScheduledActionName>.+)))$/,
    ],
    'cloudformation': [
        /^arn:(?<partition>[^:]*):(?<service>cloudformation):(?<region>[^:]*):(?<accountID>[^:]*):(?<resourceType>stack|changeSet)\/(?<resource>[^/]+)\/(?<cfmAdditionalID>.+)$/,
    ],
    'logs': [
        /^arn:(?<partition>[^:]*):(?<service>logs):(?<region>[^:]*):(?<accountID>[^:]*):(?<resourceType>log-group):(?<resource>[^:/]*):log-stream:(?<logStream>.+)$/,
    ],
    'dynamodb': [
        /^arn:(?<partition>[^:]*):(?<service>dynamodb):(?<region>[^:]*):(?<accountID>[^:]*):(?<resourceType>table)\/(?<resource>[^/]*)\/stream\/(?<dynamodbStream>.+)$/,
    ],
    '_default_': [
        /^arn:(?<partition>[^:]*):(?<service>[^:]*):(?<region>[^:]*):(?<accountID>[^:]*):(?<resource>[^:/]*)$/,
        /^arn:(?<partition>[^:]*):(?<service>[^:]*):(?<region>[^:]*):(?<accountID>[^:]*):(?<resourceType>[^:/]*)\/(?<resource>[^:/]*)(?:[:/](?<qualifier>.*))?$/,
        /^arn:(?<partition>[^:]*):(?<service>[^:]*):(?<region>[^:]*):(?<accountID>[^:]*):(?<resourceType>[^:/]*):(?<resource>[^:/]*)(?::(?<qualifier>.*))?$/,
    ]
}
const GETARNCONTACTS_CACHE = { store: 'memory', max: 10, ttl: 300 };
const log = bunyan.createLogger({ name: 'cweventFormat.awsUtil' });


function parseARN(arn) {
    if (!arn) {
        log.debug({ arn }, 'Empty ARN for parseARN.');
        return {};
    }

    const serviceMatch = ARN_SERVICE_RE.exec(arn);
    if (!serviceMatch || !serviceMatch.groups.service) {
        log.debug({ arn }, 'Failed to match service part.');
        return {};
    }
    const service = serviceMatch.groups.service;
    const serviceREs = [
        ...(ARN_MAP_RE[service] || []),
        ...ARN_MAP_RE._default_,
    ];

    for (const arnRE of serviceREs) {
        const m = arnRE.exec(arn);
        if (m)
            return { ...m.groups };
    }

    return {};
}

async function getARNContacts(arn) {
    if (!arn) {
        log.debug({ arn }, 'Empty ARN for getARNContacts.');
        return [];
    }
}
const _getARNContactsCache = cacheManager.caching(GETARNCONTACTS_CACHE);


module.exports = {
    getARNContacts,
    parseARN,
};

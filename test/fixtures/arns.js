module.exports = [
    {
        data: 'arn:aws:autoscaling:us-east-1:123456789012:scalingPolicy:c7a27f55-d35e-4153-b044-8ca9155fc467:autoScalingGroupName/my-test-asg1:policyName/my-scaleout-policy',
        expected: {
            partition: 'aws', service: 'autoscaling', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'scalingPolicy', resource: 'c7a27f55-d35e-4153-b044-8ca9155fc467',
            asgGroupName: 'my-test-asg1',
            asgPolicyName: 'my-scaleout-policy',
        },
    },
    {
        data: 'arn:aws:autoscaling:us-east-1:123456789012:scalingPolicy:c7a27f55-d35e-4153-b044-8ca9155fc467:resource/ec2/spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE:policyName/cpu40',
        expected: {
            partition: 'aws', service: 'autoscaling', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'scalingPolicy', resource: 'c7a27f55-d35e-4153-b044-8ca9155fc467',
            asResourceService: 'ec2',
            asResourceID: 'spot-fleet-request/sfr-73fbd2ce-aa30-494c-8788-1cee4EXAMPLE',
            asPolicyName: 'cpu40',
            asScheduledActionName: undefined,
        },
    },
    {
        data: 'arn:aws:autoscaling:us-east-1:123456789012:scheduledAction:38c84579-0f51-4adc-879b-a2cc4EXAMPLE:resource/ec2/spot-fleet-request/sfr-09d694de-4d82-4b48-a4f4-2f38fEXAMPLE:scheduledActionName/my-action',
        expected: {
            partition: 'aws', service: 'autoscaling', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'scheduledAction', resource: '38c84579-0f51-4adc-879b-a2cc4EXAMPLE',
            asResourceService: 'ec2',
            asResourceID: 'spot-fleet-request/sfr-09d694de-4d82-4b48-a4f4-2f38fEXAMPLE',
            asPolicyName: undefined,
            asScheduledActionName: 'my-action',
        },
    },
    {
        data: 'arn:aws:acm:us-east-1:123456789012:certificate/12345678-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'acm', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'certificate', resource: '12345678-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:cloudformation:us-east-1:123456789012:stack/MyProductionStack/abc9dbf0-43c2-11e3-a6e8-50fa526be49c',
        expected: {
            partition: 'aws', service: 'cloudformation', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'stack', resource: 'MyProductionStack',
            cfmAdditionalID: 'abc9dbf0-43c2-11e3-a6e8-50fa526be49c',
        },
    },
    {
        data: 'arn:aws:cloudformation:us-east-1:123456789012:changeSet/MyProductionChangeSet/abc9dbf0-43c2-11e3-a6e8-50fa526be49c',
        expected: {
            partition: 'aws', service: 'cloudformation', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'changeSet', resource: 'MyProductionChangeSet',
            cfmAdditionalID: 'abc9dbf0-43c2-11e3-a6e8-50fa526be49c',
        },
    },
    {
        data: 'arn:aws:cloudfront::123456789012:*',
        expected: {
            partition: 'aws', service: 'cloudfront', region: '', accountID: '123456789012',
            resource: '*',
        },
    },
    {
        data: 'arn:aws:cloudwatch:us-east-1:123456789012:alarm:*',
        expected: {
            partition: 'aws', service: 'cloudwatch', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'alarm', resource: '*',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:cloudwatch:us-east-1:123456789012:alarm:MyAlarmName',
        expected: {
            partition: 'aws', service: 'cloudwatch', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'alarm', resource: 'MyAlarmName',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:cloudwatch::123456789012:dashboard/MyDashboardName',
        expected: {
            partition: 'aws', service: 'cloudwatch', region: '', accountID: '123456789012',
            resourceType: 'dashboard', resource: 'MyDashboardName',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:events:us-east-1:*:*',
        expected: {
            partition: 'aws', service: 'events', region: 'us-east-1', accountID: '*',
            resource: '*',
        },
    },
    {
        data: 'arn:aws:events:us-east-1:123456789012:*',
        expected: {
            partition: 'aws', service: 'events', region: 'us-east-1', accountID: '123456789012',
            resource: '*',
        },
    },
    {
        data: 'arn:aws:events:us-east-1:123456789012:rule/my-rule',
        expected: {
            partition: 'aws', service: 'events', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'rule', resource: 'my-rule',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:logs:us-east-1:*:*',
        expected: {
            partition: 'aws', service: 'logs', region: 'us-east-1', accountID: '*',
            resource: '*',
        },
    },
    {
        data: 'arn:aws:logs:us-east-1:123456789012:*',
        expected: {
            partition: 'aws', service: 'logs', region: 'us-east-1', accountID: '123456789012',
            resource: '*',
        },
    },
    {
        data: 'arn:aws:logs:us-east-1:123456789012:log-group:my-log-group',
        expected: {
            partition: 'aws', service: 'logs', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'log-group', resource: 'my-log-group',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:logs:us-east-1:123456789012:log-group:my-log-group:*',
        expected: {
            partition: 'aws', service: 'logs', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'log-group', resource: 'my-log-group',
            qualifier: '*',
        },
    },
    {
        data: 'arn:aws:logs:us-east-1:123456789012:log-group:my-log-group*',
        expected: {
            partition: 'aws', service: 'logs', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'log-group', resource: 'my-log-group*',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:logs:us-east-1:123456789012:log-group:my-log-group:log-stream:my-log-stream',
        expected: {
            partition: 'aws', service: 'logs', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'log-group', resource: 'my-log-group',
            logStream: 'my-log-stream',
        },
    },
    {
        data: 'arn:aws:logs:us-east-1:123456789012:log-group:my-log-group:log-stream:my-log-stream*',
        expected: {
            partition: 'aws', service: 'logs', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'log-group', resource: 'my-log-group',
            logStream: 'my-log-stream*',
        },
    },
    {
        data: 'arn:aws:logs:us-east-1:123456789012:log-group:my-log-group*:log-stream:my-log-stream*',
        expected: {
            partition: 'aws', service: 'logs', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'log-group', resource: 'my-log-group*',
            logStream: 'my-log-stream*',
        },
    },
    {
        data: 'arn:aws:dynamodb:us-east-1:123456789012:table/books_table',
        expected: {
            partition: 'aws', service: 'dynamodb', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'table', resource: 'books_table',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:dynamodb:us-east-1:123456789012:table/books_table/stream/2015-05-11T21:21:33.291',
        expected: {
            partition: 'aws', service: 'dynamodb', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'table', resource: 'books_table',
            dynamodbStream: '2015-05-11T21:21:33.291',
        },
    },
    {
        data: 'arn:aws:elasticbeanstalk:us-east-1:123456789012:application/My App',
        expected: {
            partition: 'aws', service: 'elasticbeanstalk', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'application', resource: 'My App',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:elasticbeanstalk:us-east-1:123456789012:applicationversion/My App/My Version',
        expected: {
            partition: 'aws', service: 'elasticbeanstalk', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'applicationversion', resource: 'My App',
            qualifier: 'My Version',
        },
    },
    {
        data: 'arn:aws:elasticbeanstalk:us-east-1:123456789012:environment/My App/MyEnvironment',
        expected: {
            partition: 'aws', service: 'elasticbeanstalk', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'environment', resource: 'My App',
            qualifier: 'MyEnvironment',
        },
    },
    {
        data: 'arn:aws:elasticbeanstalk:us-east-1::solutionstack/32bit Amazon Linux running Tomcat 7',
        expected: {
            partition: 'aws', service: 'elasticbeanstalk', region: 'us-east-1', accountID: '',
            resourceType: 'solutionstack', resource: '32bit Amazon Linux running Tomcat 7',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:elasticbeanstalk:us-east-1:123456789012:configurationtemplate/My App/My Template',
        expected: {
            partition: 'aws', service: 'elasticbeanstalk', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'configurationtemplate', resource: 'My App',
            qualifier: 'My Template',
        },
    },
    {
        data: 'arn:aws:ec2:us-east-1::image/ami-1a2b3c4d',
        expected: {
            partition: 'aws', service: 'ec2', region: 'us-east-1', accountID: '',
            resourceType: 'image', resource: 'ami-1a2b3c4d',
            qualifier: undefined,
        }
    },
    {
        data: 'arn:aws:ec2:us-east-1:123456789012:instance/*',
        expected: {
            partition: 'aws', service: 'ec2', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'instance', resource: '*',
            qualifier: undefined,
        }
    },
    {
        data: 'arn:aws:ec2:us-east-1:123456789012:volume/*',
        expected: {
            partition: 'aws', service: 'ec2', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'volume', resource: '*',
            qualifier: undefined,
        }
    },
    {
        data: 'arn:aws:ec2:us-east-1:123456789012:volume/vol-1a2b3c4d',
        expected: {
            partition: 'aws', service: 'ec2', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'volume', resource: 'vol-1a2b3c4d',
            qualifier: undefined,
        }
    },
    {
        data: 'arn:aws:ec2:us-east-1:111122223333:vpc/vpc-12345678',
        expected: {
            partition: 'aws', service: 'ec2', region: 'us-east-1', accountID: '111122223333',
            resourceType: 'vpc', resource: 'vpc-12345678',
            qualifier: undefined,
        }
    },
    {
        data: 'arn:aws:elasticfilesystem:us-east-1:123456789012:file-system/fs12345678',
        expected: {
            partition: 'aws', service: 'elasticfilesystem', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'file-system', resource: 'fs12345678',
            qualifier: undefined,
        },
    },
];

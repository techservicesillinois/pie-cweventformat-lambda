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
    {
        data: 'arn:aws:elasticloadbalancing:us-east-1:123456789012:loadbalancer/app/my-load-balancer/50dc6c495c0c9188',
        expected: {
            partition: 'aws', service: 'elasticloadbalancing', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'loadbalancer', resource: 'my-load-balancer',
            elbv2Type: 'app',
            elbv2ResourceID: '50dc6c495c0c9188',
            elbv2ListenerID: undefined,
            elbv2RuleID: undefined,
        },
    },
    {
        data: 'arn:aws:elasticloadbalancing:us-east-1:123456789012:listener/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2',
        expected: {
            partition: 'aws', service: 'elasticloadbalancing', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'listener', resource: 'my-load-balancer',
            elbv2Type: 'app',
            elbv2ResourceID: '50dc6c495c0c9188',
            elbv2ListenerID: 'f2f7dc8efc522ab2',
            elbv2RuleID: undefined,
        },
    },
    {
        data: 'arn:aws:elasticloadbalancing:us-east-1:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee',
        expected: {
            partition: 'aws', service: 'elasticloadbalancing', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'listener-rule', resource: 'my-load-balancer',
            elbv2Type: 'app',
            elbv2ResourceID: '50dc6c495c0c9188',
            elbv2ListenerID: 'f2f7dc8efc522ab2',
            elbv2RuleID: '9683b2d02a6cabee',
        },
    },
    {
        data: 'arn:aws:elasticloadbalancing:us-east-1:123456789012:targetgroup/my-targets/73e2d6bc24d8a067',
        expected: {
            partition: 'aws', service: 'elasticloadbalancing', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'targetgroup', resource: 'my-targets',
            elbv2ResourceID: '73e2d6bc24d8a067',
        },
    },
    {
        data: 'arn:aws:elasticloadbalancing:us-east-1:123456789012:loadbalancer/net/my-load-balancer/50dc6c495c0c9188',
        expected: {
            partition: 'aws', service: 'elasticloadbalancing', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'loadbalancer', resource: 'my-load-balancer',
            elbv2Type: 'net',
            elbv2ResourceID: '50dc6c495c0c9188',
            elbv2ListenerID: undefined,
            elbv2RuleID: undefined,
        },
    },
    {
        data: 'arn:aws:elasticloadbalancing:us-east-1:123456789012:listener/net/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2',
        expected: {
            partition: 'aws', service: 'elasticloadbalancing', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'listener', resource: 'my-load-balancer',
            elbv2Type: 'net',
            elbv2ResourceID: '50dc6c495c0c9188',
            elbv2ListenerID: 'f2f7dc8efc522ab2',
            elbv2RuleID: undefined,
        },
    },
    {
        data: 'arn:aws:elasticloadbalancing:us-east-1:123456789012:listener-rule/net/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/9683b2d02a6cabee',
        expected: {
            partition: 'aws', service: 'elasticloadbalancing', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'listener-rule', resource: 'my-load-balancer',
            elbv2Type: 'net',
            elbv2ResourceID: '50dc6c495c0c9188',
            elbv2ListenerID: 'f2f7dc8efc522ab2',
            elbv2RuleID: '9683b2d02a6cabee',
        },
    },
    {
        data: 'arn:aws:elasticloadbalancing:us-east-1:123456789012:loadbalancer/my-load-balancer',
        expected: {
            partition: 'aws', service: 'elasticloadbalancing', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'loadbalancer', resource: 'my-load-balancer',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:iam::123456789012:root',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resource: 'root',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:user/JohnDoe',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'user', resource: 'JohnDoe',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/JaneDoe',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'user', resource: 'division_abc/subdivision_xyz/JaneDoe',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:group/Developers',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'group', resource: 'Developers',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:group/division_abc/subdivision_xyz/product_A/Developers',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'group', resource: 'division_abc/subdivision_xyz/product_A/Developers',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:role/S3Access',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'role', resource: 'S3Access',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:role/application_abc/component_xyz/S3Access',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'role', resource: 'application_abc/component_xyz/S3Access',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:policy/UsersManageOwnCredentials',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'policy', resource: 'UsersManageOwnCredentials',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:policy/division_abc/subdivision_xyz/UsersManageOwnCredentials',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'policy', resource: 'division_abc/subdivision_xyz/UsersManageOwnCredentials',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:instance-profile/Webserver',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'instance-profile', resource: 'Webserver',
        },
    },
    {
        data: 'arn:aws:sts::123456789012:federated-user/JohnDoe',
        expected: {
            partition: 'aws', service: 'sts', region: '', accountID: '123456789012',
            resourceType: 'federated-user', resource: 'JohnDoe',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:sts::123456789012:assumed-role/Accounting-Role/JaneDoe',
        expected: {
            partition: 'aws', service: 'sts', region: '', accountID: '123456789012',
            resourceType: 'assumed-role', resource: 'Accounting-Role',
            qualifier: 'JaneDoe',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:mfa/JaneDoeMFA',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'mfa', resource: 'JaneDoeMFA',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:u2f/user/JohnDoe/default (U2F security key)',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'u2f', resource: 'user/JohnDoe/default (U2F security key)',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:server-certificate/ProdServerCert',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'server-certificate', resource: 'ProdServerCert',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:server-certificate/division_abc/subdivision_xyz/ProdServerCert',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'server-certificate', resource: 'division_abc/subdivision_xyz/ProdServerCert',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:saml-provider/ADFSProvider',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'saml-provider', resource: 'ADFSProvider',
        },
    },
    {
        data: 'arn:aws:iam::123456789012:oidc-provider/GoogleProvider',
        expected: {
            partition: 'aws', service: 'iam', region: '', accountID: '123456789012',
            resourceType: 'oidc-provider', resource: 'GoogleProvider',
        },
    },
    {
        data: 'arn:aws:kms:us-east-1:123456789012:key/12345678-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'kms', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'key', resource: '12345678-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:kms:us-east-1:123456789012:alias/example-alias',
        expected: {
            partition: 'aws', service: 'kms', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'alias', resource: 'example-alias',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lambda:us-east-1:123456789012:function:my-function',
        expected: {
            partition: 'aws', service: 'lambda', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'function', resource: 'my-function',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lambda:us-east-1:123456789012:function:my-function:1',
        expected: {
            partition: 'aws', service: 'lambda', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'function', resource: 'my-function',
            qualifier: '1',
        },
    },
    {
        data: 'arn:aws:lambda:us-east-1:123456789012:function:my-function:PROD',
        expected: {
            partition: 'aws', service: 'lambda', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'function', resource: 'my-function',
            qualifier: 'PROD',
        },
    },
    {
        data: 'arn:aws:lambda:us-east-1:123456789012:event-source-mapping:fa123456-14a1-4fd2-9fec-83de64ad683de6d47',
        expected: {
            partition: 'aws', service: 'lambda', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'event-source-mapping', resource: 'fa123456-14a1-4fd2-9fec-83de64ad683de6d47',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lambda:us-east-1:123456789012:layer:my-layer',
        expected: {
            partition: 'aws', service: 'lambda', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'layer', resource: 'my-layer',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lambda:us-east-1:123456789012:layer:my-layer:1',
        expected: {
            partition: 'aws', service: 'lambda', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'layer', resource: 'my-layer',
            qualifier: '1',
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:Instance/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'Instance', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:RelationalDatabase/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'RelationalDatabase', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:Disk/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'Disk', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:StaticIp/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'StaticIp', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:global:123456789012:Domain/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'global', accountID: '123456789012',
            resourceType: 'Domain', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:LoadBalancer/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'LoadBalancer', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:InstanceSnapshot/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'InstanceSnapshot', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:RelationalDatabaseSnapshot/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'RelationalDatabaseSnapshot', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:DiskSnapshot/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'DiskSnapshot', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:CloudFormationStackRecord/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'CloudFormationStackRecord', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:ExportSnapshotRecord/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'ExportSnapshotRecord', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:KeyPair/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'KeyPair', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:lightsail:us-east-1:123456789012:LoadBalancerTlsCertificate/1234568-1234-1234-1234-123456789012',
        expected: {
            partition: 'aws', service: 'lightsail', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'LoadBalancerTlsCertificate', resource: '1234568-1234-1234-1234-123456789012',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:rds:us-east-1:123456789012:db:mysql-db-instance1',
        expected: {
            partition: 'aws', service: 'rds', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'db', resource: 'mysql-db-instance1',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:rds:us-east-1:123456789012:snapshot:my-snapshot2',
        expected: {
            partition: 'aws', service: 'rds', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'snapshot', resource: 'my-snapshot2',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:rds:us-east-1:123456789012:cluster:my-cluster1',
        expected: {
            partition: 'aws', service: 'rds', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'cluster', resource: 'my-cluster1',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:rds:us-east-1:123456789012:cluster-snapshot:cluster1-snapshot7',
        expected: {
            partition: 'aws', service: 'rds', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'cluster-snapshot', resource: 'cluster1-snapshot7',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:rds:us-east-1:123456789012:og:mysql-option-group1',
        expected: {
            partition: 'aws', service: 'rds', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'og', resource: 'mysql-option-group1',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:rds:us-east-1:123456789012:pg:mysql-repl-pg1',
        expected: {
            partition: 'aws', service: 'rds', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'pg', resource: 'mysql-repl-pg1',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:rds:us-east-1:123456789012:cluster-pg:aurora-pg3',
        expected: {
            partition: 'aws', service: 'rds', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'cluster-pg', resource: 'aurora-pg3',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:rds:us-east-1:123456789012:secgrp:dev-secgrp2',
        expected: {
            partition: 'aws', service: 'rds', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'secgrp', resource: 'dev-secgrp2',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:rds:us-east-1:123456789012:subgrp:prod-subgrp1',
        expected: {
            partition: 'aws', service: 'rds', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'subgrp', resource: 'prod-subgrp1',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:rds:us-east-1:123456789012:es:monitor-events2',
        expected: {
            partition: 'aws', service: 'rds', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'es', resource: 'monitor-events2',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:route53:::hostedzone/Z148QEXAMPLE8V',
        expected: {
            partition: 'aws', service: 'route53', region: '', accountID: '',
            resourceType: 'hostedzone', resource: 'Z148QEXAMPLE8V',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:route53:::change/C2RDJ5EXAMPLE2',
        expected: {
            partition: 'aws', service: 'route53', region: '', accountID: '',
            resourceType: 'change', resource: 'C2RDJ5EXAMPLE2',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:route53:::change/*',
        expected: {
            partition: 'aws', service: 'route53', region: '', accountID: '',
            resourceType: 'change', resource: '*',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:route53::123456789012:domain/example.com',
        expected: {
            partition: 'aws', service: 'route53', region: '', accountID: '123456789012',
            resourceType: 'domain', resource: 'example.com',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:route53resolver:us-west-2:123456789012:resolver-rule/rslvr-rr-5328a0899aexample',
        expected: {
            partition: 'aws', service: 'route53resolver', region: 'us-west-2', accountID: '123456789012',
            resourceType: 'resolver-rule', resource: 'rslvr-rr-5328a0899aexample',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:route53resolver:us-west-2:123456789012:resolver-endpoint/rslvr-in-60b9fd8fdbexample',
        expected: {
            partition: 'aws', service: 'route53resolver', region: 'us-west-2', accountID: '123456789012',
            resourceType: 'resolver-endpoint', resource: 'rslvr-in-60b9fd8fdbexample',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:secretsmanager:us-east-1:123456789012:secret:myfolder/MyFirstSecret-ocq1Wq',
        expected: {
            partition: 'aws', service: 'secretsmanager', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'secret', resource: 'myfolder/MyFirstSecret-ocq1Wq',
        },
    },
    {
        data: 'arn:aws:secretsmanager:us-east-1:123456789012:secret:another_secret_name-??????',
        expected: {
            partition: 'aws', service: 'secretsmanager', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'secret', resource: 'another_secret_name-??????',
        },
    },
    {
        data: 'arn:aws:sns:*:123456789012:my_corporate_topic',
        expected: {
            partition: 'aws', service: 'sns', region: '*', accountID: '123456789012',
            resource: 'my_corporate_topic',
            snsSubscriptionID: undefined,
        },
    },
    {
        data: 'arn:aws:sns:us-east-1:123456789012:my_corporate_topic:02034b43-fefa-4e07-a5eb-3be56f8c54ce',
        expected: {
            partition: 'aws', service: 'sns', region: 'us-east-1', accountID: '123456789012',
            resource: 'my_corporate_topic',
            snsSubscriptionID: '02034b43-fefa-4e07-a5eb-3be56f8c54ce',
        },
    },
    {
        data: 'arn:aws:sqs:us-east-1:123456789012:queue1',
        expected: {
            partition: 'aws', service: 'sqs', region: 'us-east-1', accountID: '123456789012',
            resource: 'queue1',
        },
    },
    {
        data: 'arn:aws:s3:::my_corporate_bucket',
        expected: {
            partition: 'aws', service: 's3', region: '', accountID: '',
            resource: 'my_corporate_bucket',
            s3Key: undefined,
        },
    },
    {
        data: 'arn:aws:s3:::my_corporate_bucket/exampleobject.png',
        expected: {
            partition: 'aws', service: 's3', region: '', accountID: '',
            resource: 'my_corporate_bucket',
            s3Key: 'exampleobject.png',
        },
    },
    {
        data: 'arn:aws:s3:::my_corporate_bucket/*',
        expected: {
            partition: 'aws', service: 's3', region: '', accountID: '',
            resource: 'my_corporate_bucket',
            s3Key: '*',
        },
    },
    {
        data: 'arn:aws:s3:::my_corporate_bucket/Development/*',
        expected: {
            partition: 'aws', service: 's3', region: '', accountID: '',
            resource: 'my_corporate_bucket',
            s3Key: 'Development/*',
        },
    },
    {
        data: 'arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12A3456B',
        expected: {
            partition: 'aws', service: 'storagegateway', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'gateway', resource: 'sgw-12A3456B',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:storagegateway:us-east-1:123456789012:share/share-17A34572',
        expected: {
            partition: 'aws', service: 'storagegateway', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'share', resource: 'share-17A34572',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12A3456B/volume/vol-1122AABB',
        expected: {
            partition: 'aws', service: 'storagegateway', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'gateway', resource: 'sgw-12A3456B',
            sgwVolumeID: 'vol-1122AABB',
        },
    },
    {
        data: 'arn:aws:storagegateway:us-east-1:123456789012:tape/AMZNC8A26D',
        expected: {
            partition: 'aws', service: 'storagegateway', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'tape', resource: 'AMZNC8A26D',
            qualifier: undefined,
        },
    },
    {
        data: 'arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12A3456B/target/iqn.1997-05.com.amazon:vol-1122AABB',
        expected: {
            partition: 'aws', service: 'storagegateway', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'gateway', resource: 'sgw-12A3456B',
            sgwTargetID: 'iqn.1997-05.com.amazon:vol-1122AABB',
        },
    },
    {
        data: 'arn:aws:storagegateway:us-east-1:123456789012:gateway/sgw-12A3456B/device/AMZN_SGW-FF22CCDD_TAPEDRIVE_00010',
        expected: {
            partition: 'aws', service: 'storagegateway', region: 'us-east-1', accountID: '123456789012',
            resourceType: 'gateway', resource: 'sgw-12A3456B',
            sgwDeviceID: 'AMZN_SGW-FF22CCDD_TAPEDRIVE_00010',
        },
    },
];

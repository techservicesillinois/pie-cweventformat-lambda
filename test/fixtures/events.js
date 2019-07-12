module.exports = [
    {
        data: {
            "version": "0",
            "id": "9bcdac79-b31f-4d3d-9410-fbd727c29fab",
            "detail-type": "ECS Task State Change",
            "source": "aws.ecs",
            "account": "111122223333",
            "time": "2016-12-06T16:41:06Z",
            "region": "us-east-1",
            "resources": [
                "arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef"
            ],
            "detail": {
                "clusterArn": "arn:aws:ecs:us-east-1:111122223333:cluster/default",
                "containerInstanceArn": "arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315",
                "containers": [
                    {
                        "containerArn": "arn:aws:ecs:us-east-1:111122223333:container/3305bea1-bd16-4217-803d-3e0482170a17",
                        "exitCode": 0,
                        "lastStatus": "STOPPED",
                        "name": "xray",
                        "taskArn": "arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef"
                    }
                ],
                "createdAt": "2016-12-06T16:41:05.702Z",
                "desiredStatus": "RUNNING",
                "group": "task-group",
                "lastStatus": "RUNNING",
                "overrides": {
                    "containerOverrides": [
                        {
                            "name": "xray"
                        }
                    ]
                },
                "startedAt": "2016-12-06T16:41:06.8Z",
                "startedBy": "ecs-svc/9223370556150183303",
                "updatedAt": "2016-12-06T16:41:06.975Z",
                "taskArn": "arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef",
                "taskDefinitionArn": "arn:aws:ecs:us-east-1:111122223333:task-definition/xray:2",
                "version": 4
            }
        },
        expected: {
            default: '{"version":"0","id":"9bcdac79-b31f-4d3d-9410-fbd727c29fab","detail-type":"ECS Task State Change","source":"aws.ecs","account":"111122223333","time":"2016-12-06T16:41:06Z","region":"us-east-1","resources":["arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef"],"detail":{"clusterArn":"arn:aws:ecs:us-east-1:111122223333:cluster/default","containerInstanceArn":"arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315","containers":[{"containerArn":"arn:aws:ecs:us-east-1:111122223333:container/3305bea1-bd16-4217-803d-3e0482170a17","exitCode":0,"lastStatus":"STOPPED","name":"xray","taskArn":"arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef"}],"createdAt":"2016-12-06T16:41:05.702Z","desiredStatus":"RUNNING","group":"task-group","lastStatus":"RUNNING","overrides":{"containerOverrides":[{"name":"xray"}]},"startedAt":"2016-12-06T16:41:06.8Z","startedBy":"ecs-svc/9223370556150183303","updatedAt":"2016-12-06T16:41:06.975Z","taskArn":"arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef","taskDefinitionArn":"arn:aws:ecs:us-east-1:111122223333:task-definition/xray:2","version":4}}',
            email: '# EVENT: 9bcdac79-b31f-4d3d-9410-fbd727c29fab\nAccount: 111122223333\nSource:  aws.ecs (us-east-1)\nTime:    2016-12-06T16:41:06Z\nResources:\n    - arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef\n\n\n## CONTAINER: xray\nLast Status: STOPPED\nExit Code:   0\n\n\n## DETAIL: ECS Task State Change\nCluster: arn:aws:ecs:us-east-1:111122223333:cluster/default\nStatus:  RUNNING\n\n\n```json\n{\n  "clusterArn": "arn:aws:ecs:us-east-1:111122223333:cluster/default",\n  "containerInstanceArn": "arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315",\n  "containers": [\n    {\n      "containerArn": "arn:aws:ecs:us-east-1:111122223333:container/3305bea1-bd16-4217-803d-3e0482170a17",\n      "exitCode": 0,\n      "lastStatus": "STOPPED",\n      "name": "xray",\n      "taskArn": "arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef"\n    }\n  ],\n  "createdAt": "2016-12-06T16:41:05.702Z",\n  "desiredStatus": "RUNNING",\n  "group": "task-group",\n  "lastStatus": "RUNNING",\n  "overrides": {\n    "containerOverrides": [\n      {\n        "name": "xray"\n      }\n    ]\n  },\n  "startedAt": "2016-12-06T16:41:06.8Z",\n  "startedBy": "ecs-svc/9223370556150183303",\n  "updatedAt": "2016-12-06T16:41:06.975Z",\n  "taskArn": "arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef",\n  "taskDefinitionArn": "arn:aws:ecs:us-east-1:111122223333:task-definition/xray:2",\n  "version": 4\n}\n```\n\n',
            _subject_: '[aws.ecs] ECS Task State Change\n'
        },
    },
    {
        data: {
            "version": "0",
            "id": "8952ba83-7be2-4ab5-9c32-6687532d15a2",
            "detail-type": "ECS Container Instance State Change",
            "source": "aws.ecs",
            "account": "111122223333",
            "time": "2016-12-06T16:41:06Z",
            "region": "us-east-1",
            "resources": [
                "arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315"
            ],
            "detail": {
                "agentConnected": true,
                "attributes": [
                    {
                        "name": "com.amazonaws.ecs.capability.logging-driver.syslog"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.task-iam-role-network-host"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.logging-driver.awslogs"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.logging-driver.json-file"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.docker-remote-api.1.17"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.privileged-container"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.docker-remote-api.1.18"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.docker-remote-api.1.19"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.ecr-auth"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.docker-remote-api.1.20"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.docker-remote-api.1.21"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.docker-remote-api.1.22"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.docker-remote-api.1.23"
                    },
                    {
                        "name": "com.amazonaws.ecs.capability.task-iam-role"
                    }
                ],
                "clusterArn": "arn:aws:ecs:us-east-1:111122223333:cluster/default",
                "containerInstanceArn": "arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315",
                "ec2InstanceId": "i-f3a8506b",
                "registeredResources": [
                    {
                        "name": "CPU",
                        "type": "INTEGER",
                        "integerValue": 2048
                    },
                    {
                        "name": "MEMORY",
                        "type": "INTEGER",
                        "integerValue": 3767
                    },
                    {
                        "name": "PORTS",
                        "type": "STRINGSET",
                        "stringSetValue": [
                            "22",
                            "2376",
                            "2375",
                            "51678",
                            "51679"
                        ]
                    },
                    {
                        "name": "PORTS_UDP",
                        "type": "STRINGSET",
                        "stringSetValue": []
                    }
                ],
                "remainingResources": [
                    {
                        "name": "CPU",
                        "type": "INTEGER",
                        "integerValue": 1988
                    },
                    {
                        "name": "MEMORY",
                        "type": "INTEGER",
                        "integerValue": 767
                    },
                    {
                        "name": "PORTS",
                        "type": "STRINGSET",
                        "stringSetValue": [
                            "22",
                            "2376",
                            "2375",
                            "51678",
                            "51679"
                        ]
                    },
                    {
                        "name": "PORTS_UDP",
                        "type": "STRINGSET",
                        "stringSetValue": []
                    }
                ],
                "status": "ACTIVE",
                "version": 14801,
                "versionInfo": {
                    "agentHash": "aebcbca",
                    "agentVersion": "1.13.0",
                    "dockerVersion": "DockerVersion: 1.11.2"
                },
                "updatedAt": "2016-12-06T16:41:06.991Z"
            }
        },
        expected: {
            default: '{"version":"0","id":"8952ba83-7be2-4ab5-9c32-6687532d15a2","detail-type":"ECS Container Instance State Change","source":"aws.ecs","account":"111122223333","time":"2016-12-06T16:41:06Z","region":"us-east-1","resources":["arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315"],"detail":{"agentConnected":true,"attributes":[{"name":"com.amazonaws.ecs.capability.logging-driver.syslog"},{"name":"com.amazonaws.ecs.capability.task-iam-role-network-host"},{"name":"com.amazonaws.ecs.capability.logging-driver.awslogs"},{"name":"com.amazonaws.ecs.capability.logging-driver.json-file"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.17"},{"name":"com.amazonaws.ecs.capability.privileged-container"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.18"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.19"},{"name":"com.amazonaws.ecs.capability.ecr-auth"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.20"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.21"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.22"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.23"},{"name":"com.amazonaws.ecs.capability.task-iam-role"}],"clusterArn":"arn:aws:ecs:us-east-1:111122223333:cluster/default","containerInstanceArn":"arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315","ec2InstanceId":"i-f3a8506b","registeredResources":[{"name":"CPU","type":"INTEGER","integerValue":2048},{"name":"MEMORY","type":"INTEGER","integerValue":3767},{"name":"PORTS","type":"STRINGSET","stringSetValue":["22","2376","2375","51678","51679"]},{"name":"PORTS_UDP","type":"STRINGSET","stringSetValue":[]}],"remainingResources":[{"name":"CPU","type":"INTEGER","integerValue":1988},{"name":"MEMORY","type":"INTEGER","integerValue":767},{"name":"PORTS","type":"STRINGSET","stringSetValue":["22","2376","2375","51678","51679"]},{"name":"PORTS_UDP","type":"STRINGSET","stringSetValue":[]}],"status":"ACTIVE","version":14801,"versionInfo":{"agentHash":"aebcbca","agentVersion":"1.13.0","dockerVersion":"DockerVersion: 1.11.2"},"updatedAt":"2016-12-06T16:41:06.991Z"}}',
            email: '# EVENT: 8952ba83-7be2-4ab5-9c32-6687532d15a2\nAccount: 111122223333\nSource:  aws.ecs (us-east-1)\nTime:    2016-12-06T16:41:06Z\nResources:\n    - arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315\n\n\n## DETAIL: ECS Container Instance State Change\nCluster: arn:aws:ecs:us-east-1:111122223333:cluster/default\n\n\n```json\n{\n  "agentConnected": true,\n  "attributes": [\n    {\n      "name": "com.amazonaws.ecs.capability.logging-driver.syslog"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.task-iam-role-network-host"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.logging-driver.awslogs"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.logging-driver.json-file"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.docker-remote-api.1.17"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.privileged-container"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.docker-remote-api.1.18"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.docker-remote-api.1.19"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.ecr-auth"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.docker-remote-api.1.20"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.docker-remote-api.1.21"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.docker-remote-api.1.22"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.docker-remote-api.1.23"\n    },\n    {\n      "name": "com.amazonaws.ecs.capability.task-iam-role"\n    }\n  ],\n  "clusterArn": "arn:aws:ecs:us-east-1:111122223333:cluster/default",\n  "containerInstanceArn": "arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315",\n  "ec2InstanceId": "i-f3a8506b",\n  "registeredResources": [\n    {\n      "name": "CPU",\n      "type": "INTEGER",\n      "integerValue": 2048\n    },\n    {\n      "name": "MEMORY",\n      "type": "INTEGER",\n      "integerValue": 3767\n    },\n    {\n      "name": "PORTS",\n      "type": "STRINGSET",\n      "stringSetValue": [\n        "22",\n        "2376",\n        "2375",\n        "51678",\n        "51679"\n      ]\n    },\n    {\n      "name": "PORTS_UDP",\n      "type": "STRINGSET",\n      "stringSetValue": []\n    }\n  ],\n  "remainingResources": [\n    {\n      "name": "CPU",\n      "type": "INTEGER",\n      "integerValue": 1988\n    },\n    {\n      "name": "MEMORY",\n      "type": "INTEGER",\n      "integerValue": 767\n    },\n    {\n      "name": "PORTS",\n      "type": "STRINGSET",\n      "stringSetValue": [\n        "22",\n        "2376",\n        "2375",\n        "51678",\n        "51679"\n      ]\n    },\n    {\n      "name": "PORTS_UDP",\n      "type": "STRINGSET",\n      "stringSetValue": []\n    }\n  ],\n  "status": "ACTIVE",\n  "version": 14801,\n  "versionInfo": {\n    "agentHash": "aebcbca",\n    "agentVersion": "1.13.0",\n    "dockerVersion": "DockerVersion: 1.11.2"\n  },\n  "updatedAt": "2016-12-06T16:41:06.991Z"\n}\n```\n\n',
            _subject_: '[aws.ecs] ECS Container Instance State Change\n'
        },
    }
];

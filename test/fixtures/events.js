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
            message: {
                default: '{"version":"0","id":"9bcdac79-b31f-4d3d-9410-fbd727c29fab","detail-type":"ECS Task State Change","source":"aws.ecs","account":"111122223333","time":"2016-12-06T16:41:06Z","region":"us-east-1","resources":["arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef"],"detail":{"clusterArn":"arn:aws:ecs:us-east-1:111122223333:cluster/default","containerInstanceArn":"arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315","containers":[{"containerArn":"arn:aws:ecs:us-east-1:111122223333:container/3305bea1-bd16-4217-803d-3e0482170a17","exitCode":0,"lastStatus":"STOPPED","name":"xray","taskArn":"arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef"}],"createdAt":"2016-12-06T16:41:05.702Z","desiredStatus":"RUNNING","group":"task-group","lastStatus":"RUNNING","overrides":{"containerOverrides":[{"name":"xray"}]},"startedAt":"2016-12-06T16:41:06.8Z","startedBy":"ecs-svc/9223370556150183303","updatedAt":"2016-12-06T16:41:06.975Z","taskArn":"arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef","taskDefinitionArn":"arn:aws:ecs:us-east-1:111122223333:task-definition/xray:2","version":4}}',
                email: "EVENT: 9bcdac79-b31f-4d3d-9410-fbd727c29fab\n==================================================\nAccount: 111122223333\nSource:  aws.ecs (us-east-1)\nTime:    Tuesday, December 6, 2016 10:41 AM -06:00\n\nResources:\n- arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef\n\n\nCONTAINERS\n--------------------------------------------------\nxray: STOPPED\n\n\nDETAIL: ECS Task State Change\n--------------------------------------------------\nCluster: arn:aws:ecs:us-east-1:111122223333:cluster/default\nStatus:  RUNNING\n\n```json\n{\n  \"clusterArn\": \"arn:aws:ecs:us-east-1:111122223333:cluster/default\",\n  \"containerInstanceArn\": \"arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315\",\n  \"containers\": [\n    {\n      \"containerArn\": \"arn:aws:ecs:us-east-1:111122223333:container/3305bea1-bd16-4217-803d-3e0482170a17\",\n      \"exitCode\": 0,\n      \"lastStatus\": \"STOPPED\",\n      \"name\": \"xray\",\n      \"taskArn\": \"arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef\"\n    }\n  ],\n  \"createdAt\": \"2016-12-06T16:41:05.702Z\",\n  \"desiredStatus\": \"RUNNING\",\n  \"group\": \"task-group\",\n  \"lastStatus\": \"RUNNING\",\n  \"overrides\": {\n    \"containerOverrides\": [\n      {\n        \"name\": \"xray\"\n      }\n    ]\n  },\n  \"startedAt\": \"2016-12-06T16:41:06.8Z\",\n  \"startedBy\": \"ecs-svc/9223370556150183303\",\n  \"updatedAt\": \"2016-12-06T16:41:06.975Z\",\n  \"taskArn\": \"arn:aws:ecs:us-east-1:111122223333:task/b99d40b3-5176-4f71-9a52-9dbd6f1cebef\",\n  \"taskDefinitionArn\": \"arn:aws:ecs:us-east-1:111122223333:task-definition/xray:2\",\n  \"version\": 4\n}\n```\n\n",
            },
            subject: '[aws.ecs] ECS Task State Change: xray:2'
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
            message: {
                default: '{"version":"0","id":"8952ba83-7be2-4ab5-9c32-6687532d15a2","detail-type":"ECS Container Instance State Change","source":"aws.ecs","account":"111122223333","time":"2016-12-06T16:41:06Z","region":"us-east-1","resources":["arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315"],"detail":{"agentConnected":true,"attributes":[{"name":"com.amazonaws.ecs.capability.logging-driver.syslog"},{"name":"com.amazonaws.ecs.capability.task-iam-role-network-host"},{"name":"com.amazonaws.ecs.capability.logging-driver.awslogs"},{"name":"com.amazonaws.ecs.capability.logging-driver.json-file"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.17"},{"name":"com.amazonaws.ecs.capability.privileged-container"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.18"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.19"},{"name":"com.amazonaws.ecs.capability.ecr-auth"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.20"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.21"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.22"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.23"},{"name":"com.amazonaws.ecs.capability.task-iam-role"}],"clusterArn":"arn:aws:ecs:us-east-1:111122223333:cluster/default","containerInstanceArn":"arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315","ec2InstanceId":"i-f3a8506b","registeredResources":[{"name":"CPU","type":"INTEGER","integerValue":2048},{"name":"MEMORY","type":"INTEGER","integerValue":3767},{"name":"PORTS","type":"STRINGSET","stringSetValue":["22","2376","2375","51678","51679"]},{"name":"PORTS_UDP","type":"STRINGSET","stringSetValue":[]}],"remainingResources":[{"name":"CPU","type":"INTEGER","integerValue":1988},{"name":"MEMORY","type":"INTEGER","integerValue":767},{"name":"PORTS","type":"STRINGSET","stringSetValue":["22","2376","2375","51678","51679"]},{"name":"PORTS_UDP","type":"STRINGSET","stringSetValue":[]}],"status":"ACTIVE","version":14801,"versionInfo":{"agentHash":"aebcbca","agentVersion":"1.13.0","dockerVersion":"DockerVersion: 1.11.2"},"updatedAt":"2016-12-06T16:41:06.991Z"}}',
                email: "EVENT: 8952ba83-7be2-4ab5-9c32-6687532d15a2\n==================================================\nAccount: 111122223333\nSource:  aws.ecs (us-east-1)\nTime:    Tuesday, December 6, 2016 10:41 AM -06:00\n\nResources:\n- arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315\n\n\nDETAIL: ECS Container Instance State Change\n--------------------------------------------------\nCluster: arn:aws:ecs:us-east-1:111122223333:cluster/default\n\n```json\n{\n  \"agentConnected\": true,\n  \"attributes\": [\n    {\n      \"name\": \"com.amazonaws.ecs.capability.logging-driver.syslog\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.task-iam-role-network-host\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.logging-driver.awslogs\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.logging-driver.json-file\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.17\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.privileged-container\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.18\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.19\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.ecr-auth\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.20\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.21\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.22\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.23\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.task-iam-role\"\n    }\n  ],\n  \"clusterArn\": \"arn:aws:ecs:us-east-1:111122223333:cluster/default\",\n  \"containerInstanceArn\": \"arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315\",\n  \"ec2InstanceId\": \"i-f3a8506b\",\n  \"registeredResources\": [\n    {\n      \"name\": \"CPU\",\n      \"type\": \"INTEGER\",\n      \"integerValue\": 2048\n    },\n    {\n      \"name\": \"MEMORY\",\n      \"type\": \"INTEGER\",\n      \"integerValue\": 3767\n    },\n    {\n      \"name\": \"PORTS\",\n      \"type\": \"STRINGSET\",\n      \"stringSetValue\": [\n        \"22\",\n        \"2376\",\n        \"2375\",\n        \"51678\",\n        \"51679\"\n      ]\n    },\n    {\n      \"name\": \"PORTS_UDP\",\n      \"type\": \"STRINGSET\",\n      \"stringSetValue\": []\n    }\n  ],\n  \"remainingResources\": [\n    {\n      \"name\": \"CPU\",\n      \"type\": \"INTEGER\",\n      \"integerValue\": 1988\n    },\n    {\n      \"name\": \"MEMORY\",\n      \"type\": \"INTEGER\",\n      \"integerValue\": 767\n    },\n    {\n      \"name\": \"PORTS\",\n      \"type\": \"STRINGSET\",\n      \"stringSetValue\": [\n        \"22\",\n        \"2376\",\n        \"2375\",\n        \"51678\",\n        \"51679\"\n      ]\n    },\n    {\n      \"name\": \"PORTS_UDP\",\n      \"type\": \"STRINGSET\",\n      \"stringSetValue\": []\n    }\n  ],\n  \"status\": \"ACTIVE\",\n  \"version\": 14801,\n  \"versionInfo\": {\n    \"agentHash\": \"aebcbca\",\n    \"agentVersion\": \"1.13.0\",\n    \"dockerVersion\": \"DockerVersion: 1.11.2\"\n  },\n  \"updatedAt\": \"2016-12-06T16:41:06.991Z\"\n}\n```\n\n",
            },
            subject: '[aws.ecs] ECS Container Instance State Change'
        },
    },
    {
        data: {
            "version": "0",
            "id": "8952ba83-7be2-4ab5-9c32-6687532d15a2",
            "detail-type": "ECS Container Instance State Change ECS Container Instance State Change ECS Container Instance State Change",
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
            message: {
                default: '{"version":"0","id":"8952ba83-7be2-4ab5-9c32-6687532d15a2","detail-type":"ECS Container Instance State Change ECS Container Instance State Change ECS Container Instance State Change","source":"aws.ecs","account":"111122223333","time":"2016-12-06T16:41:06Z","region":"us-east-1","resources":["arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315"],"detail":{"agentConnected":true,"attributes":[{"name":"com.amazonaws.ecs.capability.logging-driver.syslog"},{"name":"com.amazonaws.ecs.capability.task-iam-role-network-host"},{"name":"com.amazonaws.ecs.capability.logging-driver.awslogs"},{"name":"com.amazonaws.ecs.capability.logging-driver.json-file"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.17"},{"name":"com.amazonaws.ecs.capability.privileged-container"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.18"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.19"},{"name":"com.amazonaws.ecs.capability.ecr-auth"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.20"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.21"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.22"},{"name":"com.amazonaws.ecs.capability.docker-remote-api.1.23"},{"name":"com.amazonaws.ecs.capability.task-iam-role"}],"clusterArn":"arn:aws:ecs:us-east-1:111122223333:cluster/default","containerInstanceArn":"arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315","ec2InstanceId":"i-f3a8506b","registeredResources":[{"name":"CPU","type":"INTEGER","integerValue":2048},{"name":"MEMORY","type":"INTEGER","integerValue":3767},{"name":"PORTS","type":"STRINGSET","stringSetValue":["22","2376","2375","51678","51679"]},{"name":"PORTS_UDP","type":"STRINGSET","stringSetValue":[]}],"remainingResources":[{"name":"CPU","type":"INTEGER","integerValue":1988},{"name":"MEMORY","type":"INTEGER","integerValue":767},{"name":"PORTS","type":"STRINGSET","stringSetValue":["22","2376","2375","51678","51679"]},{"name":"PORTS_UDP","type":"STRINGSET","stringSetValue":[]}],"status":"ACTIVE","version":14801,"versionInfo":{"agentHash":"aebcbca","agentVersion":"1.13.0","dockerVersion":"DockerVersion: 1.11.2"},"updatedAt":"2016-12-06T16:41:06.991Z"}}',
                email: "EVENT: 8952ba83-7be2-4ab5-9c32-6687532d15a2\n==================================================\nAccount: 111122223333\nSource:  aws.ecs (us-east-1)\nTime:    Tuesday, December 6, 2016 10:41 AM -06:00\n\nResources:\n- arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315\n\n\nDETAIL: ECS Container Instance State Change ECS Container Instance State Change ECS Container Instance State Change\n--------------------------------------------------\nCluster: arn:aws:ecs:us-east-1:111122223333:cluster/default\n\n```json\n{\n  \"agentConnected\": true,\n  \"attributes\": [\n    {\n      \"name\": \"com.amazonaws.ecs.capability.logging-driver.syslog\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.task-iam-role-network-host\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.logging-driver.awslogs\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.logging-driver.json-file\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.17\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.privileged-container\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.18\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.19\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.ecr-auth\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.20\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.21\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.22\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.docker-remote-api.1.23\"\n    },\n    {\n      \"name\": \"com.amazonaws.ecs.capability.task-iam-role\"\n    }\n  ],\n  \"clusterArn\": \"arn:aws:ecs:us-east-1:111122223333:cluster/default\",\n  \"containerInstanceArn\": \"arn:aws:ecs:us-east-1:111122223333:container-instance/b54a2a04-046f-4331-9d74-3f6d7f6ca315\",\n  \"ec2InstanceId\": \"i-f3a8506b\",\n  \"registeredResources\": [\n    {\n      \"name\": \"CPU\",\n      \"type\": \"INTEGER\",\n      \"integerValue\": 2048\n    },\n    {\n      \"name\": \"MEMORY\",\n      \"type\": \"INTEGER\",\n      \"integerValue\": 3767\n    },\n    {\n      \"name\": \"PORTS\",\n      \"type\": \"STRINGSET\",\n      \"stringSetValue\": [\n        \"22\",\n        \"2376\",\n        \"2375\",\n        \"51678\",\n        \"51679\"\n      ]\n    },\n    {\n      \"name\": \"PORTS_UDP\",\n      \"type\": \"STRINGSET\",\n      \"stringSetValue\": []\n    }\n  ],\n  \"remainingResources\": [\n    {\n      \"name\": \"CPU\",\n      \"type\": \"INTEGER\",\n      \"integerValue\": 1988\n    },\n    {\n      \"name\": \"MEMORY\",\n      \"type\": \"INTEGER\",\n      \"integerValue\": 767\n    },\n    {\n      \"name\": \"PORTS\",\n      \"type\": \"STRINGSET\",\n      \"stringSetValue\": [\n        \"22\",\n        \"2376\",\n        \"2375\",\n        \"51678\",\n        \"51679\"\n      ]\n    },\n    {\n      \"name\": \"PORTS_UDP\",\n      \"type\": \"STRINGSET\",\n      \"stringSetValue\": []\n    }\n  ],\n  \"status\": \"ACTIVE\",\n  \"version\": 14801,\n  \"versionInfo\": {\n    \"agentHash\": \"aebcbca\",\n    \"agentVersion\": \"1.13.0\",\n    \"dockerVersion\": \"DockerVersion: 1.11.2\"\n  },\n  \"updatedAt\": \"2016-12-06T16:41:06.991Z\"\n}\n```\n\n",
            },
            subject: '[aws.ecs] ECS Container Instance State Change ECS Container Instance State Change ECS Container I...'
        },
    },
    {
        data: {
            "version": "0",
            "id": "36eb8523-97d0-4518-b33d-ee3579ff19f0",
            "detail-type": "AWS API Call via CloudTrail",
            "source": "aws.s3",
            "account": "123456789012",
            "time": "2016-02-20T01:09:13Z",
            "region": "us-east-1",
            "resources": [],
            "detail": {
                "eventVersion": "1.03",
                "userIdentity": {
                    "type": "Root",
                    "principalId": "123456789012",
                    "arn": "arn:aws:iam::123456789012:root",
                    "accountId": "123456789012",
                    "sessionContext": {
                        "attributes": {
                            "mfaAuthenticated": "false",
                            "creationDate": "2016-02-20T01:05:59Z"
                        }
                    }
                },
                "eventTime": "2016-02-20T01:09:13Z",
                "eventSource": "s3.amazonaws.com",
                "eventName": "CreateBucket",
                "awsRegion": "us-east-1",
                "sourceIPAddress": "100.100.100.100",
                "userAgent": "[S3Console/0.4]",
                "requestParameters": {
                    "bucketName": "bucket-test-iad"
                },
                "responseElements": null,
                "requestID": "9D767BCC3B4E7487",
                "eventID": "24ba271e-d595-4e66-a7fd-9c16cbf8abae",
                "eventType": "AwsApiCall"
            }
        },
        expected: {
            message: {
                default: "{\"version\":\"0\",\"id\":\"36eb8523-97d0-4518-b33d-ee3579ff19f0\",\"detail-type\":\"AWS API Call via CloudTrail\",\"source\":\"aws.s3\",\"account\":\"123456789012\",\"time\":\"2016-02-20T01:09:13Z\",\"region\":\"us-east-1\",\"resources\":[],\"detail\":{\"eventVersion\":\"1.03\",\"userIdentity\":{\"type\":\"Root\",\"principalId\":\"123456789012\",\"arn\":\"arn:aws:iam::123456789012:root\",\"accountId\":\"123456789012\",\"sessionContext\":{\"attributes\":{\"mfaAuthenticated\":\"false\",\"creationDate\":\"2016-02-20T01:05:59Z\"}}},\"eventTime\":\"2016-02-20T01:09:13Z\",\"eventSource\":\"s3.amazonaws.com\",\"eventName\":\"CreateBucket\",\"awsRegion\":\"us-east-1\",\"sourceIPAddress\":\"100.100.100.100\",\"userAgent\":\"[S3Console/0.4]\",\"requestParameters\":{\"bucketName\":\"bucket-test-iad\"},\"responseElements\":null,\"requestID\":\"9D767BCC3B4E7487\",\"eventID\":\"24ba271e-d595-4e66-a7fd-9c16cbf8abae\",\"eventType\":\"AwsApiCall\"}}",
                email: "EVENT: 36eb8523-97d0-4518-b33d-ee3579ff19f0\n==================================================\nAccount: 123456789012\nSource:  aws.s3 (us-east-1)\nTime:    Friday, February 19, 2016 7:09 PM -06:00\n\n\nUSER IDENTITY: Root\n--------------------------------------------------\nAccount:    123456789012\nARN:        arn:aws:iam::123456789012:root\nPrincipal:  123456789012\nUser:       (no alias set)\n\n\nCLOUDTRAIL: s3.amazonaws.com/CreateBucket (us-east-1)\n--------------------------------------------------\nTime:       Friday, February 19, 2016 7:09 PM -06:00\nSource IP:  100.100.100.100\nUser Agent: [S3Console/0.4]\nRequest: \n```json\n{\n  \"bucketName\": \"bucket-test-iad\"\n}\n```\n\n\n\nDETAIL: AWS API Call via CloudTrail\n--------------------------------------------------\n\n```json\n{\n  \"eventVersion\": \"1.03\",\n  \"userIdentity\": {\n    \"type\": \"Root\",\n    \"principalId\": \"123456789012\",\n    \"arn\": \"arn:aws:iam::123456789012:root\",\n    \"accountId\": \"123456789012\",\n    \"sessionContext\": {\n      \"attributes\": {\n        \"mfaAuthenticated\": \"false\",\n        \"creationDate\": \"2016-02-20T01:05:59Z\"\n      }\n    }\n  },\n  \"eventTime\": \"2016-02-20T01:09:13Z\",\n  \"eventSource\": \"s3.amazonaws.com\",\n  \"eventName\": \"CreateBucket\",\n  \"awsRegion\": \"us-east-1\",\n  \"sourceIPAddress\": \"100.100.100.100\",\n  \"userAgent\": \"[S3Console/0.4]\",\n  \"requestParameters\": {\n    \"bucketName\": \"bucket-test-iad\"\n  },\n  \"responseElements\": null,\n  \"requestID\": \"9D767BCC3B4E7487\",\n  \"eventID\": \"24ba271e-d595-4e66-a7fd-9c16cbf8abae\",\n  \"eventType\": \"AwsApiCall\"\n}\n```\n\n",
            },
            subject: '[aws.s3] AWS API Call: s3.amazonaws.com/CreateBucket',
        }
    },
    {
        data: {
            "version": "0",
            "id": "121345678-1234-1234-1234-123456789012",
            "detail-type": "AWS Health Event",
            "source": "aws.health",
            "account": "123456789012",
            "time": "2016-06-05T06:27:57Z",
            "region": "ap-southeast-2",
            "resources": [],
            "detail": {
                "eventArn": "arn:aws:health:ap-southeast-2::event/AWS_ELASTICLOADBALANCING_API_ISSUE_90353408594353980",
                "service": "ELASTICLOADBALANCING",
                "eventTypeCode": "AWS_ELASTICLOADBALANCING_API_ISSUE",
                "eventTypeCategory": "issue",
                "startTime": "Sat, 11 Jun 2016 05:01:10 GMT",
                "endTime": "Sat, 11 Jun 2016 05:30:57 GMT",
                "eventDescription": [{
                    "language": "en_US",
                    "latestDescription": "A description of the event will be provided here"
                }]
            }
        },
        expected: {
            message: {
                default: "{\"version\":\"0\",\"id\":\"121345678-1234-1234-1234-123456789012\",\"detail-type\":\"AWS Health Event\",\"source\":\"aws.health\",\"account\":\"123456789012\",\"time\":\"2016-06-05T06:27:57Z\",\"region\":\"ap-southeast-2\",\"resources\":[],\"detail\":{\"eventArn\":\"arn:aws:health:ap-southeast-2::event/AWS_ELASTICLOADBALANCING_API_ISSUE_90353408594353980\",\"service\":\"ELASTICLOADBALANCING\",\"eventTypeCode\":\"AWS_ELASTICLOADBALANCING_API_ISSUE\",\"eventTypeCategory\":\"issue\",\"startTime\":\"Sat, 11 Jun 2016 05:01:10 GMT\",\"endTime\":\"Sat, 11 Jun 2016 05:30:57 GMT\",\"eventDescription\":[{\"language\":\"en_US\",\"latestDescription\":\"A description of the event will be provided here\"}]}}",
                email: "\nA description of the event will be provided here\n\n\nEVENT: 121345678-1234-1234-1234-123456789012\n==================================================\nAccount: 123456789012\nSource:  aws.health (ap-southeast-2)\nTime:    Sunday, June 5, 2016 1:27 AM -05:00\n\n\nSERVICE: ELASTICLOADBALANCING\n--------------------------------------------------\nType Code:     AWS_ELASTICLOADBALANCING_API_ISSUE\nType Category: issue\nStart:         Sat, 11 Jun 2016 05:01:10 GMT\nEnd:           Sat, 11 Jun 2016 05:30:57 GMT\n\n\nDETAIL: AWS Health Event\n--------------------------------------------------\n\n```json\n{\n  \"eventArn\": \"arn:aws:health:ap-southeast-2::event/AWS_ELASTICLOADBALANCING_API_ISSUE_90353408594353980\",\n  \"service\": \"ELASTICLOADBALANCING\",\n  \"eventTypeCode\": \"AWS_ELASTICLOADBALANCING_API_ISSUE\",\n  \"eventTypeCategory\": \"issue\",\n  \"startTime\": \"Sat, 11 Jun 2016 05:01:10 GMT\",\n  \"endTime\": \"Sat, 11 Jun 2016 05:30:57 GMT\",\n  \"eventDescription\": [\n    {\n      \"language\": \"en_US\",\n      \"latestDescription\": \"A description of the event will be provided here\"\n    }\n  ]\n}\n```\n\n",
            },
            subject: "[aws.health] AWS_ELASTICLOADBALANCING_API_ISSUE",
        }
    },
    {
        data: {
            "version": "0",
            "id": "121345678-1234-1234-1234-123456789012",
            "detail-type": "AWS Health Event",
            "source": "aws.health",
            "account": "123456789012",
            "time": "2016-06-05T06:27:57Z",
            "region": "us-west-2",
            "resources": [
                "i-abcd1111"
            ],
            "detail": {
                "eventArn": "arn:aws:health:us-west-2::event/AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED_90353408594353980",
                "service": "EC2",
                "eventTypeCode": "AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED",
                "eventTypeCategory": "issue",
                "startTime": "Sat, 05 Jun 2016 15:10:09 GMT",
                "eventDescription": [{
                    "language": "en_US",
                    "latestDescription": "A description of the event will be provided here"
                }],
                "affectedEntities": [{
                    "entityValue": "i-abcd1111",
                    "tags": {
                        "stage": "prod",
                        "app": "my-app"
                    }
                }]
            }
        },
        expected: {
            message: {
                default: "{\"version\":\"0\",\"id\":\"121345678-1234-1234-1234-123456789012\",\"detail-type\":\"AWS Health Event\",\"source\":\"aws.health\",\"account\":\"123456789012\",\"time\":\"2016-06-05T06:27:57Z\",\"region\":\"us-west-2\",\"resources\":[\"i-abcd1111\"],\"detail\":{\"eventArn\":\"arn:aws:health:us-west-2::event/AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED_90353408594353980\",\"service\":\"EC2\",\"eventTypeCode\":\"AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED\",\"eventTypeCategory\":\"issue\",\"startTime\":\"Sat, 05 Jun 2016 15:10:09 GMT\",\"eventDescription\":[{\"language\":\"en_US\",\"latestDescription\":\"A description of the event will be provided here\"}],\"affectedEntities\":[{\"entityValue\":\"i-abcd1111\",\"tags\":{\"stage\":\"prod\",\"app\":\"my-app\"}}]}}",
                email: "\nA description of the event will be provided here\n\n\nEVENT: 121345678-1234-1234-1234-123456789012\n==================================================\nAccount: 123456789012\nSource:  aws.health (us-west-2)\nTime:    Sunday, June 5, 2016 1:27 AM -05:00\n\nResources:\n- i-abcd1111\n\n\nSERVICE: EC2\n--------------------------------------------------\nType Code:     AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED\nType Category: issue\nStart:         Sat, 05 Jun 2016 15:10:09 GMT\nEnd:           (none)\n\nAffected:\n- i-abcd1111\n\n\nDETAIL: AWS Health Event\n--------------------------------------------------\n\n```json\n{\n  \"eventArn\": \"arn:aws:health:us-west-2::event/AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED_90353408594353980\",\n  \"service\": \"EC2\",\n  \"eventTypeCode\": \"AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED\",\n  \"eventTypeCategory\": \"issue\",\n  \"startTime\": \"Sat, 05 Jun 2016 15:10:09 GMT\",\n  \"eventDescription\": [\n    {\n      \"language\": \"en_US\",\n      \"latestDescription\": \"A description of the event will be provided here\"\n    }\n  ],\n  \"affectedEntities\": [\n    {\n      \"entityValue\": \"i-abcd1111\",\n      \"tags\": {\n        \"stage\": \"prod\",\n        \"app\": \"my-app\"\n      }\n    }\n  ]\n}\n```\n\n",
            },
            subject: "[aws.health] AWS_EC2_INSTANCE_STORE_DRIVE_PERFORMANCE_DEGRADED",
        }
    },
    {
        data: {
            "version": "0",
            "id": "01234567-EXAMPLE",
            "detail-type": "CodePipeline Pipeline Execution State Change",
            "source": "aws.codepipeline",
            "account": "123456789012",
            "time": "2020-01-24T22:03:07Z",
            "region": "us-east-1",
            "resources": [
                "arn:aws:codepipeline:us-east-1:123456789012:myPipeline"
            ],
            "detail": {
                "pipeline": "myPipeline",
                "execution-id": "12345678-1234-5678-abcd-12345678abcd",
                "execution-trigger": {
                    "trigger-type": "StartPipelineExecution",
                    "trigger-detail": "arn:aws:sts::123456789012:assumed-role/Admin/my-user"
                },
                "state": "STARTED",
                "version": 1
            }
        },
        expected: {
            message: {
                default: '{"version":"0","id":"01234567-EXAMPLE","detail-type":"CodePipeline Pipeline Execution State Change","source":"aws.codepipeline","account":"123456789012","time":"2020-01-24T22:03:07Z","region":"us-east-1","resources":["arn:aws:codepipeline:us-east-1:123456789012:myPipeline"],"detail":{"pipeline":"myPipeline","execution-id":"12345678-1234-5678-abcd-12345678abcd","execution-trigger":{"trigger-type":"StartPipelineExecution","trigger-detail":"arn:aws:sts::123456789012:assumed-role/Admin/my-user"},"state":"STARTED","version":1}}',
                email: 'EXECUTION: 12345678-1234-5678-abcd-12345678abcd\n==================================================\nAccount: 123456789012\nSource:  aws.codepipeline (us-east-1)\nTime:    Friday, January 24, 2020 4:03 PM -06:00\nState:   STARTED\nVersion: 1\n\nResources:\n- arn:aws:codepipeline:us-east-1:123456789012:myPipeline\n\n\n\nDETAIL: CodePipeline Pipeline Execution State Change\n--------------------------------------------------\n\n```json\n{\n  "pipeline": "myPipeline",\n  "execution-id": "12345678-1234-5678-abcd-12345678abcd",\n  "execution-trigger": {\n    "trigger-type": "StartPipelineExecution",\n    "trigger-detail": "arn:aws:sts::123456789012:assumed-role/Admin/my-user"\n  },\n  "state": "STARTED",\n  "version": 1\n}\n```\n\n'
            },
            subject: "[aws.codepipeline] myPipeline execution: STARTED",
        }
    },
    {
        data: {
            "version": "0",
            "id": "01234567-EXAMPLE",
            "detail-type": "CodePipeline Pipeline Execution State Change",
            "source": "aws.codepipeline",
            "account": "123456789012",
            "time": "2020-01-24T22:02:20Z",
            "region": "us-west-2",
            "resources": [
                "arn:aws:codepipeline:us-west-2:123456789012:myPipeline"
            ],
            "detail": {
                "pipeline": "myPipeline",
                "execution-id": "12345678-1234-5678-abcd-12345678abcd",
                "state": "STOPPING",
                "version": 3,
                "stop-execution-comments": "Stopping the pipeline for an update"
            }
        },
        expected: {
            message: {
                default: '{"version":"0","id":"01234567-EXAMPLE","detail-type":"CodePipeline Pipeline Execution State Change","source":"aws.codepipeline","account":"123456789012","time":"2020-01-24T22:02:20Z","region":"us-west-2","resources":["arn:aws:codepipeline:us-west-2:123456789012:myPipeline"],"detail":{"pipeline":"myPipeline","execution-id":"12345678-1234-5678-abcd-12345678abcd","state":"STOPPING","version":3,"stop-execution-comments":"Stopping the pipeline for an update"}}',
                email: 'EXECUTION: 12345678-1234-5678-abcd-12345678abcd\n==================================================\nAccount: 123456789012\nSource:  aws.codepipeline (us-west-2)\nTime:    Friday, January 24, 2020 4:02 PM -06:00\nState:   STOPPING\nVersion: 3\n\nResources:\n- arn:aws:codepipeline:us-west-2:123456789012:myPipeline\n\n\n\nDETAIL: CodePipeline Pipeline Execution State Change\n--------------------------------------------------\n\n```json\n{\n  "pipeline": "myPipeline",\n  "execution-id": "12345678-1234-5678-abcd-12345678abcd",\n  "state": "STOPPING",\n  "version": 3,\n  "stop-execution-comments": "Stopping the pipeline for an update"\n}\n```\n\n',
            },
            subject: "[aws.codepipeline] myPipeline execution: STOPPING",
        }
    },
    {
        data: {
            "version": "0",
            "id": "01234567-EXAMPLE",
            "detail-type": "CodePipeline Pipeline Execution State Change",
            "source": "aws.codepipeline",
            "account": "123456789012",
            "time": "2020-01-24T22:03:44Z",
            "region": "us-east-1",
            "resources": [
                "arn:aws:codepipeline:us-east-1:123456789012:myPipeline"
            ],
            "detail": {
                "pipeline": "myPipeline",
                "execution-id": "12345678-1234-5678-abcd-12345678abcd",
                "state": "SUCCEEDED",
                "version": 3
            }
        },
        expected: {
            message: {
                default: '{"version":"0","id":"01234567-EXAMPLE","detail-type":"CodePipeline Pipeline Execution State Change","source":"aws.codepipeline","account":"123456789012","time":"2020-01-24T22:03:44Z","region":"us-east-1","resources":["arn:aws:codepipeline:us-east-1:123456789012:myPipeline"],"detail":{"pipeline":"myPipeline","execution-id":"12345678-1234-5678-abcd-12345678abcd","state":"SUCCEEDED","version":3}}',
                email: 'EXECUTION: 12345678-1234-5678-abcd-12345678abcd\n==================================================\nAccount: 123456789012\nSource:  aws.codepipeline (us-east-1)\nTime:    Friday, January 24, 2020 4:03 PM -06:00\nState:   SUCCEEDED\nVersion: 3\n\nResources:\n- arn:aws:codepipeline:us-east-1:123456789012:myPipeline\n\n\n\nDETAIL: CodePipeline Pipeline Execution State Change\n--------------------------------------------------\n\n```json\n{\n  "pipeline": "myPipeline",\n  "execution-id": "12345678-1234-5678-abcd-12345678abcd",\n  "state": "SUCCEEDED",\n  "version": 3\n}\n```\n\n',
            },
            subject: "[aws.codepipeline] myPipeline execution: SUCCEEDED",
        }
    },
    {
        data: {
            "version": "0",
            "id": "01234567-EXAMPLE",
            "detail-type": "CodePipeline Pipeline Execution State Change",
            "source": "aws.codepipeline",
            "account": "123456789012",
            "time": "2020-01-31T18:55:43Z",
            "region": "us-west-2",
            "resources": [
                "arn:aws:codepipeline:us-west-2:123456789012:myPipeline"
            ],
            "detail": {
                "pipeline": "myPipeline",
                "execution-id": "12345678-1234-5678-abcd-12345678abcd",
                "state": "FAILED",
                "version": 4
            }
        },
        expected: {
            message: {
                default: '{"version":"0","id":"01234567-EXAMPLE","detail-type":"CodePipeline Pipeline Execution State Change","source":"aws.codepipeline","account":"123456789012","time":"2020-01-31T18:55:43Z","region":"us-west-2","resources":["arn:aws:codepipeline:us-west-2:123456789012:myPipeline"],"detail":{"pipeline":"myPipeline","execution-id":"12345678-1234-5678-abcd-12345678abcd","state":"FAILED","version":4}}',
                email: 'EXECUTION: 12345678-1234-5678-abcd-12345678abcd\n==================================================\nAccount: 123456789012\nSource:  aws.codepipeline (us-west-2)\nTime:    Saturday, February 1, 2020 12:55 PM -06:00\nState:   FAILED\nVersion: 4\n\nResources:\n- arn:aws:codepipeline:us-west-2:123456789012:myPipeline\n\n\n\nDETAIL: CodePipeline Pipeline Execution State Change\n--------------------------------------------------\n\n```json\n{\n  "pipeline": "myPipeline",\n  "execution-id": "12345678-1234-5678-abcd-12345678abcd",\n  "state": "FAILED",\n  "version": 4\n}\n```\n\n',
            },
            subject: "[aws.codepipeline] myPipeline execution: FAILED",
        }
    },
];

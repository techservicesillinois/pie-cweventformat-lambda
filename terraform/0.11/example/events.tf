module "cweventFormat" {
    source = "../module"

    service = "CloudWatch Event Format"
    contact = "sbutler1@illinois.edu"
    environment = "Development"

    project = "example"

    deploy_bucket = "uiuc-sbutler1-sandbox"
    deploy_key = "cweventFormat/lambda/cweventFormat.zip"

    event_rule_patterns = {
        ec2_state_change = <<PATTERN
{
    "source": [ "aws.ec2" ],
    "detail-type": [ "EC2 Instance State-change Notification" ]
}
PATTERN

        ec2_instance_connect = <<PATTERN
{
    "detail-type": [ "AWS API Call via CloudTrail" ],
    "detail": {
        "eventSource": [ "ec2-instance-connect.amazonaws.com" ],
        "eventName": [ "SendSSHPublicKey" ]
    }
}
PATTERN
    }
}

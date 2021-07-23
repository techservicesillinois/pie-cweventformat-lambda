module "cweventFormat" {
    source = "../module"

    name_prefix = "example-"

    deploy_bucket   = "uiuc-sbutler1-sandbox"
    deploy_key      = "cweventFormat/lambda/cweventFormat.zip"
    deploy_libkey   = "cweventFormat/lambda/cweventFormat-lib.zip"
    lambda_timezone = "America/Chicago"

    event_rule_patterns = {
        aws_health = <<PATTERN
{
    "source": [ "aws.health" ],
    "detail-type": [ "AWS Health Event" ]
}
PATTERN

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

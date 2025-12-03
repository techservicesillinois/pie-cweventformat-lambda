module "cweventFormat" {
    source = "../module"

    environment = "test"
    name        = "example-cweventFormat"

    deploy_zip      = "../../../dist/cweventFormat.zip"
    timezone = "America/Chicago"

    event_rule_patterns = {
        aws_health = <<PATTERN
{
    "source": [ "aws.health" ],
    "detail-type": [ "AWS Health Event" ]
}
PATTERN

        guard_duty = <<PATTERN
{
    "source": [ "aws.guardduty" ],
    "detail-type": [ "GuardDuty Finding" ]
    "detail": {
        "severity": [ { "numeric": [ ">=", 7 ] } ]
    }
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

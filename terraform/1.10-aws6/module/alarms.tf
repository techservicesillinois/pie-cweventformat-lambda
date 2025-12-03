# =========================================================
# Resources
# =========================================================

resource "aws_cloudwatch_metric_alarm" "errors_high" {
    alarm_name        = "${var.name}-ErrorsHigh"
    alarm_description = "Notify when the ${var.name} lambda has errors."

    namespace   = "AWS/Lambda"
    dimensions  = {
        FunctionName = module.this.lambda_function_name
    }
    metric_name = "Errors"

    comparison_operator = "GreaterThanOrEqualToThreshold"
    statistic           = "Sum"
    unit                = "Count"
    threshold           = 1
    period              = 300
    evaluation_periods  = 1

    treat_missing_data = "notBreaching"
    actions_enabled    = true
    alarm_actions      = [ local.notifications_topic_arn ]
    ok_actions         = [ local.notifications_topic_arn ]

    lifecycle {
        ignore_changes = [ actions_enabled ]
    }
}

# =========================================================
# Resources
# =========================================================

resource "aws_cloudwatch_metric_alarm" "lambda_errors_hi" {
    alarm_name        = "${aws_lambda_function.lambda.function_name}-ErrorsHigh"
    alarm_description = "High number of errors occuring on the CloudWatch Event Format lambda."

    namespace  = "AWS/Lambda"
    dimensions = {
        FunctionName = aws_lambda_function.lambda.function_name
    }

    metric_name         = "Errors"
    comparison_operator = "GreaterThanOrEqualToThreshold"
    statistic           = "Sum"
    threshold           = 5
    unit                = "Count"
    evaluation_periods  = 1
    period              = 300
    treat_missing_data  = "ignore"

    alarm_actions = [
        local.notification_topic_arn,
    ]
    ok_actions = [
        local.notification_topic_arn,
    ]
}

# =========================================================
# Resources
# =========================================================

resource "aws_cloudwatch_log_subscription_filter" "lambda_logs_subscription" {
    count = var.log_subscription_arn == null ? 0 : 1

    name           = uuid()
    log_group_name = module.this.lambda_cloudwatch_log_group_name

    destination_arn = var.log_subscription_arn
    filter_pattern  = ""
    distribution    = "ByLogStream"

    lifecycle {
        ignore_changes = [ name ]
    }
}

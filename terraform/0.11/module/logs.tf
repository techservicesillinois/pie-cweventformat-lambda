# =========================================================
# Resources
# =========================================================

resource "aws_cloudwatch_log_group" "lambda" {
    name = "/aws/lambda/${var.project}${var.revision}-${var.lambda_name}"
    retention_in_days = "${var.log_retention_in_days}"

    tags {
        Service = "${var.service}"
        Contact = "${var.contact}"
        DataClassification = "Sensitive"
        Environment = "${var.environment}"
        Revision = "${var.revision}"

        Project = "${var.project}"
        NetID = "${var.contact}"

        "Splunk:sourcetype" = "pie:lambda:log"
    }
}

resource "aws_cloudwatch_log_subscription_filter" "lambda_logs_subscription" {
    count = "${length(var.log_subscription_arn) == 0 ? 0 : 1}"

    name = "${uuid()}"
    log_group_name = "${aws_cloudwatch_log_group.lambda.name}"

    destination_arn = "${var.log_subscription_arn}"
    filter_pattern = ""
    distribution = "ByLogStream"

    lifecycle {
        ignore_changes = [ "name" ]
    }
}

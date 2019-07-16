# =========================================================
# Locals
# =========================================================

locals {
    notification_topic_arn = "${var.notification_topic_arn == "" ? aws_sns_topic.notification.0.arn : var.notification_topic_arn}"
}


# =========================================================
# Resources
# =========================================================

resource "aws_sns_topic" "notification" {
    count = "${var.notification_topic_arn == "" ? 1 : 0}"

    name = "${var.project}${var.revision}-${var.lambda_name}"

    tags {
        Service = "${var.service}"
        Contact = "${var.contact}"
        DataClassification = "Sensitive"
        Environment = "${var.environment}"
        Revision = "${var.revision}"

        Project = "${var.project}"
        NetID = "${var.contact}"
    }
}

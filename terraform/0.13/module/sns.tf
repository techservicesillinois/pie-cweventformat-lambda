# =========================================================
# Locals
# =========================================================

locals {
    notification_topic_arn = var.notification_topic_arn == null ? join("", aws_sns_topic.notification[*].arn) : var.notification_topic_arn
}


# =========================================================
# Resources
# =========================================================

resource "aws_sns_topic" "notification" {
    count = var.notification_topic_arn == null ? 1 : 0

    name = local.lambda_name

    tags = {
        DataClassification = "Sensitive"
    }
}

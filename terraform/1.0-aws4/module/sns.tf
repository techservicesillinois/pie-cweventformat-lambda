# =========================================================
# Locals
# =========================================================

locals {
    notifications_topic_arn = var.notifications_topic_arn == null ? aws_sns_topic.notifications[0].arn : var.notifications_topic_arn
}

# =========================================================
# Resources
# =========================================================

resource "aws_sns_topic" "notifications" {
    count = var.notification_topic_arn == null ? 1 : 0

    name = var.name

    tags = {
        DataClassification = "Sensitive"
    }
}

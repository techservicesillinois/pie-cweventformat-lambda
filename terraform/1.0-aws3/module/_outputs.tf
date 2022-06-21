# =========================================================
# Lambda Function
# =========================================================

output "lambda" {
    value = module.this
}

output "notifications_topic_arn" {
    value = local.notification_topic_arn
}

# =========================================================
# Lambda Function
# =========================================================

output "lambda" {
    value = module.this
}

output "notifications_topic_arn" {
    value = local.notifications_topic_arn
}

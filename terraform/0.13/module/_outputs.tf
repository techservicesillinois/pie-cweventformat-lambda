# =========================================================
# Lambda Function
# =========================================================

output "lambda_role_name" {
    value = aws_iam_role.lambda.name
}

output "lambda_role_arn" {
    value = aws_iam_role.lambda.arn
}

output "lambda_function_name" {
    value = aws_lambda_function.lambda.function_name
}

output "lambda_function_arn" {
    value = aws_lambda_function.lambda.arn
}

output "notification_topic_arn" {
    value = local.notification_topic_arn
}

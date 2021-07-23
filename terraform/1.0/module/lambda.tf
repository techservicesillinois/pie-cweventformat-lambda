# =========================================================
# Data
# =========================================================

data "aws_s3_bucket_object" "lambda" {
    bucket = var.deploy_bucket
    key    = var.deploy_key
}

data "aws_s3_bucket_object" "lambda_lib" {
    bucket = var.deploy_bucket
    key    = var.deploy_libkey
}

data "aws_iam_policy_document" "lambda_assume_role" {
    statement {
        effect = "Allow"
        actions = [ "sts:AssumeRole" ]
        principals {
            type        = "Service"
            identifiers = [ "lambda.amazonaws.com" ]
        }
    }
}

data "aws_iam_policy_document" "lambda" {
    statement {
        effect    = "Allow"
        actions   = [ "sns:Publish" ]
        resources = [ local.notification_topic_arn ]
    }

    statement {
        effect  = "Allow"
        actions = [
            "logs:Describe*",
            "logs:List*",
        ]
        resources = [ "*" ]
    }

    statement {
        effect  = "Allow"
        actions = [
            "logs:CreateLogStream",
            "logs:PutLogEvents",
        ]
        resources = [ aws_cloudwatch_log_group.lambda.arn ]
    }
}

# =========================================================
# Locals
# =========================================================

locals {
    lambda_name = "${var.name_prefix}${var.lambda_name}"
}

# =========================================================
# Resources: IAM
# =========================================================

resource "aws_iam_role" "lambda" {
    name_prefix = "${var.name_prefix}lambda-"
    path        = "/service-role/"
    description = "Lambda ${local.lambda_name} role"

    assume_role_policy = data.aws_iam_policy_document.lambda_assume_role.json
}

resource "aws_iam_role_policy" "lambda" {
    name_prefix = "lambda-"

    role   = aws_iam_role.lambda.id
    policy = data.aws_iam_policy_document.lambda.json

    lifecycle {
        create_before_destroy = true
    }
}

# =========================================================
# Resources: Lambda
# =========================================================

resource "aws_lambda_layer_version" "lambda_lib" {
    layer_name        = "${local.lambda_name}-lib"
    s3_bucket         = var.deploy_bucket
    s3_key            = var.deploy_libkey
    s3_object_version = data.aws_s3_bucket_object.lambda_lib.version_id

    description         = "Library dependencies for the cweventFormat lambda function."
    compatible_runtimes = [ "nodejs14.x" ]
}

resource "aws_lambda_function" "lambda" {
    depends_on = [
        aws_iam_role_policy.lambda
    ]

    function_name     = local.lambda_name
    s3_bucket         = var.deploy_bucket
    s3_key            = var.deploy_key
    s3_object_version = data.aws_s3_bucket_object.lambda.version_id
    layers            = [ aws_lambda_layer_version.lambda_lib.arn ]

    description = "Format CloudWatch Events for email delivery."
    handler     = "src/index.handler"
    role        = aws_iam_role.lambda.arn
    runtime     = "nodejs14.x"
    timeout     = 30

    environment {
        variables = {
            SNS_TOPIC_ARN = local.notification_topic_arn
            TZ            = var.lambda_timezone
        }
    }

    dead_letter_config {
        target_arn = local.notification_topic_arn
    }
}

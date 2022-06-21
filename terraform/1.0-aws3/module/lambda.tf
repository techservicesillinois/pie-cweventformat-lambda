# =========================================================
# Data
# =========================================================

data "aws_s3_bucket_object" "this" {
    count = var.deploy_s3zip == null ?  0 : 1

    bucket = var.deploy_s3zip.bucket
    key    = "${var.deploy_s3zip.prefix}cweventFormat/${var.environment}.zip"
}

# =========================================================
# Module
# =========================================================

module "this" {
    source  = "terraform-aws-modules/lambda/aws"
    version = "2.16.0"

    function_name = var.name
    description   = var.description
    handler       = "src/index.handler"
    runtime       = "nodejs14.x"
    memory_size   = 128
    timeout       = 30

    environment_variables = {
        SNS_TOPIC_ARN = local.notifications_topic_arn
        TZ            = var.timezone
    }

    create_package = false
    local_existing_package = var.deploy_s3zip == null ? coalesce(var.deploy_localzip, "${path.module}/../../dist/cweventFormat.zip") : null
    s3_existing_package    = var.deploy_s3zip == null ? null : {
        bucket     = data.aws_s3_bucket_object.this[0].bucket
        key        = data.aws_s3_bucket_object.this[0].key
        version_id = data.aws_s3_bucket_object.this[0].version_id
    }

    cloudwatch_logs_retention_in_days = local.is_debug ? 7 : 30
    cloudwatch_logs_kms_key_id        = var.log_encryption_arn

    create_current_version_async_event_config   = false
    create_current_version_allowed_triggers     = false
    create_unqualified_alias_allowed_triggers   = true
    create_unqualified_alias_async_event_config = true

    attach_policy_json = true
    policy_json        = data.aws_iam_policy_document.this.json

    dead_letter_target_arn = local.notifications_topic_arn

    allowed_triggers = {
        for k, v in var.event_rule_patterns : "Event-${k}" => {
            principal  = "events.amazonaws.com"
            source_arn = aws_cloudwatch_event_rule.lambda_event[k].arn
        }
    }
}

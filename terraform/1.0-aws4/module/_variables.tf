# =========================================================
# General
# =========================================================

variable "environment" {
    type        = string
    description = "Deployment environment (dev, test, prod, devtest, qa)."

    validation {
        condition     = contains(["dev", "test", "prod", "devtest", "qa"], var.environment)
        error_message = "Must be one of: dev; test; prod; devtest; qa."
    }
}

# =========================================================
# Settings
# =========================================================

variable "event_rule_patterns" {
    type        = map(string)
    description = "CloudWatch Event Rules patterns in a map of NAME = PATTERN."
    default     = {}
}

variable "notifications_topic_arn" {
    type        = string
    description = "SNS Topic to send formatted notifications to."
    default     = null
}

# =========================================================
# Lambda
# =========================================================

variable "name" {
    type        = string
    description = "Unique name of the function."
    default     = "cweventFormat"
}

variable "description" {
    type        = string
    description = "Description of the function."
    default     = "Format CloudWatch Events for email delivery."
}

variable "deploy_localzip" {
    type        = string
    description = "Path to the zip file to deploy."
    default     = null
}

variable "deploy_s3zip" {
    type        = object({
                    bucket = string
                    prefix = string
                })
    description = "S3 bucket and prefix to the cweventFormat/environment.zip file to deploy."
    default     = null
}

variable "timezone" {
    type        = string
    description = "Timezone name to set when running the lambda function (America/Chicago, UTC, etc)."
    default     = "UTC"
}

# =========================================================
# Logs
# =========================================================

variable "log_encryption_arn" {
    type        = string
    description = "KMS Key ARN to encrypt to this log group."
    default     = null
}

variable "log_subscription_arn" {
    type        = string
    description = "Lambda function ARN to subscribe to this log group."
    default     = null
}

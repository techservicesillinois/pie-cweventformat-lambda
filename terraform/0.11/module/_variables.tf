# =========================================================
# Cloud First
# =========================================================

variable "service" {
    type = "string"
    description = "Service name (match Service Catalog where possible)."
}

variable "contact" {
    type = "string"
    description = "Service email address."
}

variable "environment" {
    type = "string"
    description = "Production, Test, Development, Green, Blue, etc."
    default = ""
}

variable "revision" {
    type = "string"
    description = "Revision identified for this green-blue deployment."
    default = ""
}


# =========================================================
# Common
# =========================================================

variable "project" {
    type = "string"
    description = "Name for the infrastructure project. This will be included in resource names and tags where possible."
}

variable "deploy_bucket" {
    type = "string"
    description = "Bucket name to deploy resources from."
}

variable "deploy_key" {
    type = "string"
    description = "Bucket key that specifies the zip file for the cweventFormat function."
}

variable "deploy_libkey" {
    type = "string"
    description = "Bucket key that specified the zip file for the libs of the cweventForamt function."
}

variable "notification_topic_arn" {
    type = "string"
    description = "SNS Topic to send formatted notifications to."
    default = ""
}

variable "event_rule_patterns" {
    type = "map"
    description = "CloudWatch Event Rules patterns in a map of NAME = PATTERN."
    default = {}
}


# =========================================================
# Lambda
# =========================================================

variable "lambda_name" {
    type = "string"
    description = "Base name (without the project) to use for the lambda function name."
    default = "cweventFormat"
}

variable "lambda_timezone" {
    type = "string"
    description = "Timezone name to set when running the lambda function (America/Chicago, UTC, etc)."
    default = "UTC"
}


# =========================================================
# Logs
# =========================================================

variable "log_retention_in_days" {
    type = "string"
    description = "Number of days to retain log streams."
    default = "30"
}

variable "log_subscription_arn" {
    type = "string"
    description = "Lambda function ARN to subscribe to this log group."
    default = ""
}

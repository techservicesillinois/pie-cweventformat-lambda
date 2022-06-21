# =========================================================
# Data
# =========================================================

data "aws_iam_policy_document" "this" {
    statement {
        effect    = "Allow"
        actions   = [ "sns:Publish" ]
        resources = [ local.notifications_topic_arn ]
    }
}

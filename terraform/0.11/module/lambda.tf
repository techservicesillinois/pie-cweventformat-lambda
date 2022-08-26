# =========================================================
# Data
# =========================================================

data "aws_s3_bucket_object" "lambda" {
    bucket = "${var.deploy_bucket}"
    key = "${var.deploy_key}"
}

data "aws_s3_bucket_object" "lambda_lib" {
    bucket = "${var.deploy_bucket}"
    key = "${var.deploy_libkey}"
}

data "aws_iam_policy_document" "lambda_assume_role" {
    statement {
        effect = "Allow"
        actions = [ "sts:AssumeRole" ]
        principals {
            type = "Service"
            identifiers = [ "lambda.amazonaws.com" ]
        }
    }
}

data "aws_iam_policy_document" "lambda" {
    statement {
        effect = "Allow"
        actions = [ "sns:Publish" ]
        resources = [ "${local.notification_topic_arn}" ]
    }

    statement {
        effect = "Allow"
        actions = [
            "logs:Describe*",
            "logs:List*",
        ]
        resources = [ "*" ]
    }

    statement {
        effect = "Allow"
        actions = [
            "logs:CreateLogStream",
            "logs:PutLogEvents",
        ]
        resources = [ "${aws_cloudwatch_log_group.lambda.arn}" ]
    }
}


# =========================================================
# Resources
# =========================================================

resource "aws_iam_role" "lambda" {
    name_prefix = "${var.project}${var.revision}-lambda-"
    path = "/service-role/"
    description = "Lambda ${var.project}${var.revision}-${var.lambda_name} role"

    assume_role_policy = "${data.aws_iam_policy_document.lambda_assume_role.json}"
}

resource "aws_iam_policy" "lambda" {
    name_prefix = "${var.project}${var.revision}-lambda-"
    path = "/${var.project}/"
    description = "Allow ${var.project}${var.revision}-${var.lambda_name} to use SNS Publish and create logs"

    policy = "${data.aws_iam_policy_document.lambda.json}"

    lifecycle {
        create_before_destroy = true
    }
}
resource "aws_iam_role_policy_attachment" "lambda" {
    role = "${aws_iam_role.lambda.name}"
    policy_arn = "${aws_iam_policy.lambda.arn}"

    lifecycle {
        create_before_destroy = true
    }
}


resource "null_resource" "lambda_waiton_roles" {
    depends_on = [
        "aws_iam_role_policy_attachment.lambda",
    ]

    provisioner "local-exec" {
        command = "echo 'Waiting 30 seconds for policy attachments.'; sleep 30"
    }
}
resource "aws_lambda_layer_version" "lambda_lib" {
    layer_name = "${var.project}${var.revision}-${var.lambda_name}-lib"
    s3_bucket = "${var.deploy_bucket}"
    s3_key = "${var.deploy_libkey}"
    s3_object_version = "${data.aws_s3_bucket_object.lambda_lib.version_id}"

    description = "Library dependencies for the cweventFormat lambda function."
    compatible_runtimes = [ "nodejs10.x" ]
}
resource "aws_lambda_function" "lambda" {
    depends_on = [ "null_resource.lambda_waiton_roles" ]

    function_name = "${var.project}${var.revision}-${var.lambda_name}"
    s3_bucket = "${var.deploy_bucket}"
    s3_key = "${var.deploy_key}"
    s3_object_version = "${data.aws_s3_bucket_object.lambda.version_id}"
    layers = [ "${aws_lambda_layer_version.lambda_lib.arn}" ]

    description = "Format CloudWatch Events for email delivery."
    handler = "src/index.handler"
    role = "${aws_iam_role.lambda.arn}"
    runtime = "nodejs16.x"
    timeout = 30

    environment {
        variables = {
            SNS_TOPIC_ARN = "${local.notification_topic_arn}"
            TZ = "${var.lambda_timezone}"
        }
    }

    dead_letter_config {
        target_arn = "${local.notification_topic_arn}"
    }

    tags {
        Service = "${var.service}"
        Contact = "${var.contact}"
        Environment = "${var.environment}"
        Revision = "${var.revision}"

        Project = "${var.project}"
        NetID = "${var.contact}"
    }
}

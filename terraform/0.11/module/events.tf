# =========================================================
# Resources
# =========================================================

resource "aws_cloudwatch_event_rule" "lambda_event" {
    count = "${length(var.event_rule_patterns)}"

    name = "${aws_lambda_function.lambda.function_name}-${element(keys(var.event_rule_patterns), count.index)}"
    description = "Managed event rule for ${aws_lambda_function.lambda.function_name} lambda."
    is_enabled = true

    event_pattern = "${element(values(var.event_rule_patterns), count.index)}"
}

resource "aws_lambda_permission" "lambda_event" {
    count = "${length(var.event_rule_patterns)}"

    statement_id = "${uuid()}"
    function_name = "${aws_lambda_function.lambda.function_name}"
    action = "lambda:InvokeFunction"
    principal = "events.amazonaws.com"
    source_arn = "${element(aws_cloudwatch_event_rule.lambda_event.*.arn, count.index)}"

    lifecycle {
        ignore_changes = [ "statement_id" ]
    }
}

resource "aws_cloudwatch_event_target" "lambda_event" {
    depends_on = [ "aws_lambda_permission.lambda_event" ]
    count = "${length(var.event_rule_patterns)}"

    rule = "${element(aws_cloudwatch_event_rule.lambda_event.*.name, count.index)}"
    arn = "${aws_lambda_function.lambda.arn}"
    target_id = "${uuid()}"

    lifecycle {
        ignore_changes = [ "target_id" ]
    }
}

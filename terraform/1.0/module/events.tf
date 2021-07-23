# =========================================================
# Locals
# =========================================================

locals {
    event_rule_names    = keys(var.event_rule_patterns)
    event_rule_patterns = values(var.event_rule_patterns)
}

# =========================================================
# Resources
# =========================================================

resource "aws_cloudwatch_event_rule" "lambda_event" {
    for_each = var.event_rule_patterns

    name        = "${aws_lambda_function.lambda.function_name}-${each.key}"
    description = "Managed event rule for ${aws_lambda_function.lambda.function_name} lambda."
    is_enabled  = true

    event_pattern = each.value

    lifecycle {
        ignore_changes = [ is_enabled ]
    }
}

resource "aws_lambda_permission" "lambda_event" {
    for_each = var.event_rule_patterns

    statement_id  = uuid()
    function_name = aws_lambda_function.lambda.function_name
    action        = "lambda:InvokeFunction"
    principal     = "events.amazonaws.com"
    source_arn    = aws_cloudwatch_event_rule.lambda_event[each.key].arn

    lifecycle {
        ignore_changes = [ statement_id ]
    }
}

resource "aws_cloudwatch_event_target" "lambda_event" {
    depends_on = [ aws_lambda_permission.lambda_event ]
    for_each   = var.event_rule_patterns

    rule      = aws_cloudwatch_event_rule.lambda_event[each.key].name
    arn       = aws_lambda_function.lambda.arn
    target_id = uuid()

    lifecycle {
        ignore_changes = [ target_id ]
    }
}

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

    name        = "${var.name}-${each.key}"
    description = "Managed event rule for ${var.name} lambda."
    is_enabled  = true

    event_pattern = each.value

    lifecycle {
        ignore_changes = [ is_enabled ]
    }
}

resource "aws_cloudwatch_event_target" "lambda_event" {
    for_each   = var.event_rule_patterns

    rule      = aws_cloudwatch_event_rule.lambda_event[each.key].name
    arn       = module.this.lambda_function_arn
    target_id = uuid()

    lifecycle {
        ignore_changes = [ target_id ]
    }
}

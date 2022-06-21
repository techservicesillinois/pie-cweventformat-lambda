# =========================================================
# Data
# =========================================================

data "aws_caller_identity" "current" {}

data "aws_partition" "current" {}

data "aws_region" "current" {}

# =========================================================
# Locals
# =========================================================

locals {
    account_id  = data.aws_caller_identity.current.account_id
    partition   = data.aws_partition.current.partition
    region_name = data.aws_region.current.name

    is_debug = var.environment != "prod"
}

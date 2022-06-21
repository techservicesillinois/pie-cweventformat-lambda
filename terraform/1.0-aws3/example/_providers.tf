terraform {
    required_version = "~> 1.0"
    required_providers {
        aws = {
            source  = "hashicorp/aws"
            version = "3.51.0"
        }
    }

    backend "s3" {
        bucket         = "uiuc-sbutler1-sandbox"
        key            = "cweventFormat/terraform/state"
        dynamodb_table = "terraform"

        encrypt = true
        region  = "us-east-2"
    }
}


provider "aws" {
    region              = "us-east-2"
    allowed_account_ids = [ "378517677616" ]

    default_tags {
        tags = {
            Service     = "CloudWatch Event Format"
            Contact     = "sbutler1@illinois.edu"
            Environment = "Development"
            Revision    = ""
            Project     = "example"
            NetID       = "sbutler1@illinois.edu"
        }
    }
}

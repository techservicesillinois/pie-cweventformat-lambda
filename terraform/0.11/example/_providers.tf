terraform {
    required_version = "~> 0.11"

    backend "s3" {
        bucket = "uiuc-sbutler1-sandbox"
        key = "cweventFormat/terraform/state"
        dynamodb_table = "terraform"

        encrypt = true
        region = "us-east-2"
    }
}


provider "aws" {
    version = "~> 2.0"

    region = "us-east-2"
    allowed_account_ids = [ "378517677616" ]
}

provider "template" {
    version = "~> 2.0"
}

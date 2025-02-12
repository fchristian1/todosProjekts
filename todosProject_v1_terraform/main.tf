# This is the main configuration file for Terraform. It contains the configuration for the AWS provider and the S3 bucket.
provider "aws" {
  region = "eu-central-1"

}

# This data block runs a shell script to build the frontend application. It installs the dependencies and builds the application using npm.
data "external" "build_frontend" {
  program = ["bash", "-c", <<EOT
    cd ../todosProject_v1/frontend
    npm install > /dev/null
    npm run build > /dev/null
    echo "{\"build\": \"completed\"}"
  EOT
  ]
  working_dir = "${path.module}/../todosProject_v1/frontend"
}
resource "null_resource" "delete_dist_on_destroy" {
  provisioner "local-exec" {
    when    = destroy
    command = "cd ../todosProject_v1/frontend && rm -rf dist"
  }
}
# Upload files to the S3 bucket
resource "aws_s3_object" "source_files" {
  bucket = aws_s3_bucket.website.id

  for_each = fileset("${path.module}/../todosProject_v1/frontend/dist", "**/*")

  key    = each.value
  source = "${path.module}/../todosProject_v1/frontend/dist/${each.value}"
  content_type = lookup({
    ".js"   = "application/javascript"
    ".css"  = "text/css"
    ".html" = "text/html"
  }, regex("\\.[^.]+$", each.value), "binary/octet-stream")
  depends_on = [
    data.external.build_frontend,
    aws_s3_bucket.website
  ]
}
# This resource generates a random number between 10000 and 99999 and uses it as a suffix for the S3 bucket name.
resource "random_integer" "static_number" {
  min = 10000
  max = 99999

  keepers = {
    always_same = "static_value"
  }
}

# This is the configuration for the S3 bucket. It creates a bucket with the specified name and enables public access.
resource "aws_s3_bucket" "website" {
  bucket = "todosproject-v1-${random_integer.static_number.result}"
}

# This resource configures the public access block settings for the S3 bucket.
resource "aws_s3_bucket_public_access_block" "site" {
  bucket = aws_s3_bucket.website.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# This resource configures the bucket ownership controls for the S3 bucket.
resource "aws_s3_bucket_ownership_controls" "site" {
  bucket = aws_s3_bucket.website.id

  rule {
    object_ownership = "BucketOwnerPreferred"
  }
}

# This resource configures the bucket ACL for the S3 bucket.
resource "aws_s3_bucket_acl" "site" {
  bucket = aws_s3_bucket.website.id

  acl = "public-read"

  depends_on = [
    aws_s3_bucket_ownership_controls.site,
    aws_s3_bucket_public_access_block.site
  ]
}

# This resource configures the bucket policy for the S3 bucket.
resource "aws_s3_bucket_policy" "site" {
  bucket = aws_s3_bucket.website.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          aws_s3_bucket.website.arn,
          "${aws_s3_bucket.website.arn}/*"
        ]
      },
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.site]

}

# This output block defines the output values for the Terraform configuration.
output "website_url" {
  value      = "http://${aws_s3_bucket_website_configuration.website.website_endpoint}/"
  depends_on = [aws_s3_bucket.website]
}



# Configure the S3 bucket as a static website
resource "aws_s3_bucket_website_configuration" "website" {
  bucket = aws_s3_bucket.website.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "error.html"
  }

}

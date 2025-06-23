output "bucket_name" {
  value = data.aws_s3_bucket.static_site.bucket
}

output "cloudfront_distribution_id" {
  value = aws_cloudfront_distribution.cdn.id
}

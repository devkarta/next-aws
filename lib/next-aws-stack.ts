import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";

class ImageGallery extends Construct {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    // this code creates a s3 Bucket
    new s3.Bucket(this, "OriginalSizeImagesBucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // this code creates a s3 Bucket
    new s3.Bucket(this, "ThumbnailSizeImagesBucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
  }
}

export class NextAwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // new ImageGallery(this, "firstImageGallery");
    // new ImageGallery(this, "secondImageGallery");

    // this code creates a s3 Bucket
    new s3.Bucket(this, "OriginalSizeImagesBucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // this code creates a s3 Bucket
    new s3.Bucket(this, "ThumbnailSizeImagesBucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // this code creates a s3 Bucket
    new s3.Bucket(this, "OriginalSizeImagesBucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // this code creates a s3 Bucket
    new s3.Bucket(this, "ThumbnailSizeImagesBucket", {
      versioned: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });
  }
}

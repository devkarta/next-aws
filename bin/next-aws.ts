#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { NextAwsStack } from "../lib/next-aws-stack";

const app = new cdk.App();
new NextAwsStack(app, "NextAwsStack", {});

#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkStack } from '../lib/cdk-stack';
import CONFIG from '../lib/config';


const region: string = CONFIG.region || process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "";

if (!region)
  throw Error("Region must be provided either in config.js file or as environment variable.");
const accountId: string = CONFIG.accountId || process.env.AWS_ACCOUNT || "";

if (!accountId)
  throw Error("Account ID must be provided either in config.js file or as environment variable.");

const env: cdk.Environment = {
  account: accountId,
  region:  region,
};


const app = new cdk.App();
new CdkStack(app, 'CdkStack', { 
  env:env,
  });
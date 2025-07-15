import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

export class CdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myFunction = new lambda.Function(this, "HelloWorldFunction", {
      runtime: lambda.Runtime.PYTHON_3_11,
      handler: "function.handler", // file name is function.py, function name is handler
      code: lambda.Code.fromAsset(
        path.join(__dirname, "../../src/lambda_functions/helloworld")
      ),
    });
  }
}

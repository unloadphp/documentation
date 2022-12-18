---
id: bootstrap
title: bootstrap
---

### unload bootstrap

This command generates initial manifest and deploys the required AWS infrastructure resources for app continuous integration.

This command must be run for each application to provision mandatory resources and generate initial manifest file.
Upon completion the AWS infrastructure resources will be created:
- An nat instance or nat gateway.
- An network with configured subset of availability zones.
- An role for CI/CD platform authenticated via OIDC.
- An AWS CloudFormation execution IAM role assumed by AWS CloudFormation for application resources deployment.
- An Amazon S3 bucket to hold the deployment artifacts.

### Usage

```bash
unload boostrap [--help]
```

### Flags

- [--help] Display a list of available command flags.
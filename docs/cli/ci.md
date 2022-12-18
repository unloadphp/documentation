---
id: ci
title: ci
---

### unload ci

This command deploys the required CI/CD resources for app continuous integration.

Typically not required to be used directly and being executed as part of `unload bootstrap` process.
Direct use of this command makes sense when extra environment need to be provisioned or when CI/CD stack update is required.

### Usage

```bash
unload ci [--region|--profile|--config|--app|--provider|--repository|--help]
```

### Flags

- [--region] Region where CI stack needs to be deployed.
- [--profile] AWS profile to use for stack deployment request.
- [--app] Application name, it used for stack resources naming.
- [--provider] Continuous integration provider. (Supported: github)
- [--repository] Fully qualified repository name (i.e username/reponame)
- [--config] Define environment name for which manifest file to load. For example, `--config dev` will load unload.dev.yaml
- [--help] Display a list of available flags


### Example

Deploy continuous integration stack for example application in us-east-1 using github as CI/CD provider.

```bash
unload ci --region us-east-1 --profile example --config beta --app example --provider github --repository exampleorg/exampleapp
```
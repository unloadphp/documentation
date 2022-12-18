---
id: deploy
title: deploy
---

### unload deploy

Deploy an app by updating or creating a CloudFormation stack with resources defined in the application manifest.

CloudFormation stack name will be based on manifest application name and prefixed by current environment name.
Stack names are unique to an AWS region. Changing the application name or region will create a new CloudFormation stack.

### Usage

```bash
unload deploy [--config|--help]
```

### Flags

- [--config] Define environment name for which manifest file to load. For example, `--config dev` will load unload.dev.yaml
- [--help] Display a list of available flags


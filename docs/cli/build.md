---
id: build
title: build
---

### unload build

Builds a serverless application and prepares it for next steps in your workflow, like locally testing the application or deploying it to the AWS Cloud.

The unload build command processes your manifest file, application code and dependencies. The command copies build artifacts in the format and location expected for subsequent steps in deployment workflow.
This command usually useful for debugging generated CloudFormation templates, `unload build` is being executed as a part of `unload deploy`, therefore there is no need to call it before deployment.

### Usage

```bash
unload build [--config|--help]
```

### Flags

- [--config] Define environment name for which manifest file to load. For example, `--config dev` will load unload.dev.yaml.
- [--help] Display a list of available command flags.


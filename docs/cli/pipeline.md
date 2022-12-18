---
id: pipeline
title: pipeline
---

### unload pipeline

Generate a pipeline configuration file that selected CI/CD system can use to deploy serverless application.

Typically not required to be used directly and being executed as part of `unload bootstrap` process.
Before using `unload pipeline`, the necessary resources must be provisioned. Resources provisioning can be done during initial bootstrap  `unload bootstrap` or by manually configuring a CI stack by running `unload ci`.

### Usage

```bash
unload pipeline [--provider|--stages|--help]
```

### Flags

- [--provider] Continuous integration provider (Supported: github).
- [--stages] Number of deployment stages (Supported: 1 or 2).
- [--help] Display a list of available command flags.
---
id: destroy
title: destroy
---

### unload destroy

Destroy an app by deleting CloudFormation stacks with all resources associated with a given manifest.

This action will remove application stack, continuous integration stack and all environment variables.  
Database snapshot and all bucket files will be retained to reduce potential harm and allow recover.
To free resources completely all associated buckets and database snapshots are required to be removed manually via AWS console or CLI.

### Usage

```bash
unload destroy [--config|--help]
```

### Flags

- [--config] Define environment name for which manifest file to load. For example, `--config dev` will load unload.dev.yaml
- [--help] Display a list of available flags


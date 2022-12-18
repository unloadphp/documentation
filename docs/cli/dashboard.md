---
id: dashboard
title: dashboard
---

### unload dashboard

Open AWS console with lambda application dashboard for a given environment.

This action will generate a pre-signed URL based on your manifest credentials and automatically login you to AWS Console.

### Usage

```bash
unload dashboard [--config|--help]
```

### Flags

- [--config] Define environment name for which manifest file to load. For example, `--config dev` will load unload.dev.yaml
- [--help] Display a list of available flags


---
id: log
title: log
---

### unload log

Retrieve and filter application logs stored within a CloudWatch.

Everytime deployed application log to stdout, those get saved in CloudWatch for later inspection.
In case you want to fetch those you must provide a function type and desired environment (i.e. unload --config dev log cli).

### Usage

```bash
unload log [--config|--tail|--filter|--start|--end|--help] cli|web|deploy|worker:<queue>
```

### Flags

- [--config] Define environment name for which manifest file to load. For example, `--config dev` will load unload.dev.yaml.
- [--tail] Tails the log output. This ignores the end time argument and continues to fetch logs as they become available.
- [--filter] Lets you specify an expression to quickly find logs that match terms, phrases, or values in your log events. This can be a simple keyword (for example, "error") or a pattern that's supported by [`Amazon CloudWatch Logs`](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html).
- [--start] Fetches logs starting at this time. The time can be relative values like '5mins ago', 'yesterday', or a formatted timestamp like '2018-01-01 10:10:10'. It defaults to '10mins ago'.
- [--end] Fetches logs up to this time. The time can be relative values like '5mins ago', 'tomorrow', or a formatted timestamp like '2018-01-01 10:10:10'.
- [--help] Display a list of available command flags.


---
id: warm
title: Warm
---

## Warming

After provisioning an environment, the first request received may experience a "cold start". These requests typically incur a delay of a few seconds while AWS loads the serverless container to process the request.
You can setup prewarming in your manifest to avoid a "cold start" after a new deployment.

The warm value indicates how many concurrent "prewarm" requests to make to the newly deployed application before enabling it for public access.

```yaml
warm: 10
```

Additionally, you may configure how many warm instances you need to have during a workday and at night based on your timezone.

```yaml
warm:
  day: 5
  night: 1
  timezone: Europe/Kiev
```

### Options

- [day] - Indicates how many warm lambdas to keep between 8am to 22pm.
- [night] - Indicates how many warm lambdas to keep between 22pm to 8am.
- [timezone] - Application timezone, it is used to calculate a proper time range.
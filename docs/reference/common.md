---
id: common
title: Common
---

## Global

Configure global settings for application deployment.

```yaml
version: 0.1
app: sample

profile: sample
env: production
region: eu-west-1
runtime: provided
architecture: x86_64
php: 8.1

concurrency: 1
memory: 1
tmp: 1024
timeout: 300
provision: 1
warm: yes
```

### Options

- [version] - Unload manifest version. **Required**
- [app] - Application name. It is used for query and update application stack resources. **Required**
- [profile] - AWS profile name used to obtain credentials when working with unload locally. **Required**
- [env] - Environment name for current manifest. **Required**
- [region] - Region where all infrastructure resources being deployed. **Required**
- [runtime] - Lambda runtime type. (Supported: provided). **Required**
- [php] - Php version for provided runtime. **Required**
- [architecture] - Lambda runtime architecture. (Supported: x86_64,arm64).
- [concurrency] - Maximum number of messages being processed at the same time. Default value is unlimited.
- [timeout] - The amount of time (in seconds) that worker allowed to process the message. The default is 900 seconds. The maximum allowed value is 900 seconds.
- [memory] - The amount of memory available to the worker at runtime in MB. The default value is 1024 or inherited from global setting if defined.
- [tmp] - The size of the function's /tmp directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.

## Web Function

Configure web function settings.

```yaml
web:
  provision: 100
  concurrency: 20
  memory: 1024
  timeout: 300
  tmp: 10000
```

### Options

- [concurrency] - Maximum number of messages being processed at the same time. Default value is unlimited.
- [timeout] - The amount of time (in seconds) that worker allowed to process the message. The default is 900 seconds. The maximum allowed value is 900 seconds.
- [memory] - The amount of memory available to the worker at runtime in MB. The default value is 1024 or inherited from global setting if defined.
- [tmp] - The size of the function's /tmp directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.

## CLI Function

Configure cli function settings.

```yaml
cli:
  provision: 100
  concurrency: 20
  memory: 1024
  timeout: 300
  tmp: 10000
```

### Options

- [concurrency] - Maximum number of messages being processed at the same time. Default value is unlimited.
- [timeout] - The amount of time (in seconds) that worker allowed to process the message. The default is 900 seconds. The maximum allowed value is 900 seconds.
- [memory] - The amount of memory available to the worker at runtime in MB. The default value is 1024 or inherited from global setting if defined.
- [tmp] - The size of the function's /tmp directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.

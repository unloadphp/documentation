---
id: bucket
title: Bucket
---

## Object Storage

Define a S3 object storage bucket for application media storage.

```yaml
buckets:
  sample-bucket:
    access: private
    versioning: yes
    version-expiration: 1
    expiration: 1
    expiration-prefix: '/tmp'
```

### Options

- [access] - Access policy of the bucket. (Supported: private and public-read). The default value is private.
- [versioning] - Enable versioning to keep a backup if objects change. The default value is no. (Supported: yes, no, suspended)
- [version-expiration] - Remove non-current object versions after days (set to 0 to disable). The default value is 0.
- [expiration] - Remove objects after days (set to 0 to disable). The default value is 0.
- [expiration-prefix] - Optional key prefix for expiring objects. (Example: can be set to /tmp to automatically remove objects from tmp folder). 
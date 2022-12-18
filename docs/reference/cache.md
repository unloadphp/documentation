---
id: cache
title: Cache
---

## Redis

Define a ElasticCache Redis for application caching purposes.

```yaml
cache:
  engine: redis
  size: cache.t3.micro
  shards: 1
  replicas: 0
  snapshot: 1
```

### Options

- [engine] - The ElasticCache cache database instance type. **Required**
- [size] - The compute and memory capacity of the nodes in the node group (shard). **Required**
- [shards] - The number of shards in the cluster. Default value is 1. Min value is 1.
- [replicas] - Number of replicas per shard. Default value is 1. Allowed values are between 0 and 5.
- [snapshot] - The number of days for which ElastiCache retains automatic snapshots before deleting them (set to 0 to disable backups). Default value is 35.
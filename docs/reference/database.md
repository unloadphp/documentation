---
id: database
title: Database
---

## Mysql RDS

Define a provisioned Mysql RDS instance to store application data.

```yaml
database:
  engine: mysql
  size: db.t3.micro
  version: 8.0.23
  disk: 10
  multi-az: yes
  backup-retention: 3
```

### Options

- [engine] - The Mysql RDS database instance type. **Required**
- [size] - The compute and memory capacity of the database instance. **Required**
- [version] - The database version. Default value is 8.0.23.
- [disk] - The allocated storage size, specified in GB. Default value 5.
- [multi-az] - Specifies if the database instance is deployed to multiple Availability Zones for HA. Default value no.
- [backup-retention] - The number of days to keep snapshots of the database. Default value is 30.

## Mysql Aurora

Define a serverless Mysql Aurora v1 instance to store application data.

See [supported regions](https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Concepts.Aurora_Fea_Regions_DB-eng.Feature.ServerlessV1.html) at aws docs.

```yaml
database:
  engine: aurora
  version: 5.6.10a
  min-capacity: 1
  max-capacity: 1
  backup-retention: 3
  auto-pause: 300
```

### Options

- [engine] - The Mysql RDS database instance type. **Required**
- [version] - The database version. Default value is 5.6.10a.
- [min-capacity] - The minimum capacity units for a Serverless Aurora cluster.
- [max-capacity] - The maximum capacity units for a Serverless Aurora cluster.
- [backup-retention] - The number of days to keep snapshots of the database. Default value is 30.
- [auto-pause] - The time, in seconds, before a Serverless Aurora cluster is paused. Default is pause disabled.
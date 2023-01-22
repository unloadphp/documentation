---
id: extension
title: Extensions
---

## Extensions

This is useful when you want some extra functionality not available in the base layer.
Current limit is up to 3 custom layers (build-in extensions do not count). This is because AWS has a limit of total 5 layers per lambda.

*Please note: arm64 architecture supports only build-in extensions for now.*

```yaml
exentsions:
  - intl
```

### Available extensions

| Name               | Manifest             |
|:-------------------|:---------------------|
| AMQP               | amqp                 |
| Blackfire          | blackfire            |
| Calendar           | calendar             |
| Cassandra          | cassandra            |
| Decimal            | decimal              |
| DS                 | ds                   |
| Elastic APM        | elastic-apm          |
| GD                 | gd                   |
| gnupg              | gnupg                |
| GMP                | gmp                  |
| gRPC               | grpc                 |
| Igbinary           | igbinary             |
| Imagick            | imagick              |
| IMAP               | imap                 |
| LDAP               | ldap                 |
| Mailparse          | mailparse            |
| MaxMind DB         | maxminddb            |
| Memcache           | memcache             |
| Memcached          | memcached            |
| MongoDB            | mongodb              |
| MsgPack            | msgpack              |
| Newrelic           | newrelic             |
| ODBC Snowflake     | odbc-snowflake       |
| OpenSwoole         | openswoole           |
| Oracle             | oci8-80}`                 |
| Pcov               | pcov                 |
| PostgreSQL         | pgsql                |
| RdKafka            | rdkafka              |
| Redis (phpredis)   | redis                |
| Redis-Igbinary     | redis-igbinary       |
| Scout APM          | scoutapm             |
| Scrypt             | scrypt               |
| SPX                | spx                  |
| SSH2               | ssh2                 |
| Symfony Runtime    | symfony-runtime      |
| Microsoft SQLSRV   | sqlsrv               |
| Tidy               | tidy                 |
| UUID               | uuid                 |
| Xdebug             | xdebug               |
| Xlswriter          | xlswriter            |
| Yaml               | yaml                 |
| Intl               | intl (build-in)      |
| Apcu               | apcu (build-in)      |
| PDO PgSQL          | pdo_pgsql (build-in) |
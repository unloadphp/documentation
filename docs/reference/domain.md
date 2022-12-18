---
id: domain
title: Domain
---

## Domains

Define a list of domains associated with an application. **Accepts an array of domain names.**  
All root domains must be registered in through `unload domain` before use in manifest.

```yaml
domains:
  - example.com
  - sub.example.com
```

### Limits

Default quota limit is 10 unique distinct domains. Each root domain (ie example.com) counts as 1 distinct domain.
Any number of subdomains for the same root domain counts as 1 distinct wildcard domain (ie test1.example.com and test2.example.com).

```
test1.example.com       =>  |                   => |
test2.example.com       =>  L *.example.com     => |
example.com             =>  example.com         => |
sample.com              =>  sample.com          => L Total quota used is 3
```

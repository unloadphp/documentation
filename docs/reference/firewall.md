---
id: firewall
title: Firewall
---

## Geo Whitelist

Define a whitelist of countries allowed to use an application. **Accepts an array of county ISO2 codes.**

```yaml
firewall:
  geo-whitelist:
    - US
    - CA
```

## Geo Blacklist

Define a blacklist of countries allowed to use an application. **Accepts an array of county ISO2 codes.**

```yaml
firewall:
  geo-blacklist:
    - US
    - CA
```

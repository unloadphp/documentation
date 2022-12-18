---
id: domain
title: domain
---

### unload domain

Register custom application domain with Route53 service.

Route53 DNS service is how you assign a domain name to a deployed app. This service transparently integrated with Amazon’s other cloud services.
This command output will contain Amazon's nameservers which are required to be configured within your domain vendor to allow automatic
DNS record management during CloudFormation stack deployment.

### Usage

```bash
unload domain [--help] <domain>
```

### Flags

- [--help] Display a list of available command flags.

### Examples

Register example.com 

```bash
unload domain example.com
```


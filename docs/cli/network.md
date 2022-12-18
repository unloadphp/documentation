---
id: network
title: network
---

### unload network

This command deploys network resources for an environment.

Typically not required to be used directly and being executed as part of `unload bootstrap` process.
Direct use of this command makes sense when extra environment need to be provisioned, network stack update is required or
when network topology needs to be changed (ie switching from nat instance to nat gateway).

### Usage

```bash
unload network [--vpc|--nat|--region|--profile|--config|--help]
```

### Flags

- [--vpc] Configure network size (Supported: 1az or 2az).
- [--nat] Configure nat type (Supported: instance or gateway).
- [--region] Region where network stack needs to be deployed.
- [--profile] AWS profile to use for stack deployment request.
- [--config] Environment name for which stack will be deployed.
- [--help] Display a list of available command flags.

### Examples

Deploy 2AZ network with NAT instance gateway in us-east-1 region for beta environment.

```bash
unload network --config beta --region us-east-1 --vpc 2az --nat instance --profile example 
```
---
id: exec
title: exec
---

### unload exec

Invokes a deployed cli function once and returns output after invocation completes.

The `unload exec` command is useful for running migration scripts, debugging purposes or simply for manually executing domain specific commands within remote application environment.
Anytime CLI function is deployed it is automatically points to framework specific binary, therefore there is no need to prefix command with cli command name.

### Usage

```bash
unload exec -- <command>
```

### Flags

- [--config] Define environment name for which manifest file to load. For example, `--config dev` will load unload.dev.yaml.
- [--help] Display a list of available command flags.

### Examples

Retrieve a list of Laravel application routes in development environment.

```bash
unload exec --config development -- route:list
```


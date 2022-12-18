---
id: env
title: env
---

### unload env

This command allows load, view and edut application enviroment configuration.

Environment configuration is being stored as encrypted strings in AWS System Manager. With proper permission, command fetches and decrypts variables to open them in default system editor. 
Upon save it is being encrypted and saved back to system manager.

During CI/CD they are being fetched and bundled in encrypted form to the app package, therefore credentials are never exposed in raw during deployment phase.
Secrets decryption takes place during lambda cold start where environment variable secret is used to decrypt bundled secrets.

### Usage

```bash
unload env [--config|--rotate|--help]
```

### Flags

- [--config] Define environment name for which manifest file to load. For example, `--config dev` will load unload.dev.yaml.
- [--rotate] Encrypts secrets with a new key. Do not use it in the middle of deployment to prevent possible inconsistency.
- [--help] Display a list of available command flags.
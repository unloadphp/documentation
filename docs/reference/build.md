---
id: build
title: Build
---

## Build Hook

Define a set of commands to be executed during the application build phase. **Accepts a multiline string.**

```yaml
build: |
  composer install --no-interaction --no-progress --ignore-platform-reqs --no-dev --optimize-autoloader --classmap-authoritative
  php artisan route:cache
  php artisan view:cache
  php artisan event:cache
  npm install
  npm run prod
```

## Deploy Hook

Define a set of commands to be executed during the deploy phase before traffic shift. Useful for running migrations or executing integration tests.
**Accepts a multiline string. Only commands which can be run via `unload exec` are supported.**

```yaml
deploy: |
  php artisan migrate --force
```
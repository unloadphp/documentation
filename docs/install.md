---
id: install
title: install
---

## Installation

**Requirements:**
- Operating system: MacOS or Linux
- System PHP version: >= 8.0

Download and install Unload binary from [`github releases`](https://github.com/unloadphp/unload/releases):

```bash
curl -L https://github.com/unloadphp/unload/releases/download/0.1.1/unload -o unload
chmod +x unload
sudo mv unload /usr/local/bin/unload
```

Get latest version of AWS SAM by following official [`installation guide`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html).
```bash
sam --version
SAM CLI, version 1.66.0
```

Verify installation by checking unload cli version. It should complete without any errors and output aws sam and unload cli versions.
```bash
unload --version
```
```bash
   _     _  ______   _         _____           _____   
  | |   | ||  ___ \ | |       / ___ \    /\   (____ \  
  | |   | || |   | || |      | |   | |  /  \   _   \ \ 
  | |   | || |   | || |      | |   | | / /\ \ | |   | |
  | |___| || |   | || |_____ | |___| || |__| || |__/ / 
   \______||_|   |_||_______) \_____/ |______||_____/  
                                                       

  0.1.1
  SAM CLI, version 1.66.0
```

---
id: install
title: install
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installation

**Requirements:**
- Operating system: MacOS or Linux
- System Python version: >= 3.0

For your convinience there is small bash script which will download and install all the depndencies.
It will download and configure latest version of AWS SAM from Python Pip repository (see [`AWS SAM`](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html))
and Unload CLI binary from [`github releases`](https://github.com/unloadphp/unload/releases):

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Linux">

```bash
wget https://bootstrap.pypa.io/get-pip.py && python3 get-pip.py
pip install aws-sam-cli
curl -L https://github.com/unloadphp/unload/releases/download/0.2.0/unload-0.2.0-linux -o unload
chmod +x unload
sudo mv unload /usr/local/bin/unload
```

  </TabItem>

  <TabItem value="mac" label="macOS">

```bash
wget https://bootstrap.pypa.io/get-pip.py && python3 get-pip.py
pip install aws-sam-cli
curl -L https://github.com/unloadphp/unload/releases/download/0.2.0/unload-0.2.0-macos -o unload
chmod +x unload
sudo mv unload /usr/local/bin/unload
```

  </TabItem>
</Tabs>

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


  0.2.0
  SAM CLI, version 1.66.0
```

---
id: laravel
title: Deploy your first laravel app 
---

### Step 1: Create new laravel application and open project root

```bash
composer create-project laravel/laravel example-app
cd example-app
```

### Step 2: Install laravel helper package

This package provides a number of helper scripts to run laravel application smoothly behind bref.sh environment.

```bash
composer require unload/unload-laravel
```

### Step 3: Generate manifest and bootstrap infrastructure

This is guided command which will ask a series of questions to produce the right setup. It might take a while until network and continuous integration stacks are provisioned in your aws account.

Follow the on-screen prompts until the setup is fully complete.

```bash
unload bootstrap
```

### Step 4: Deploy application stack

```bash
unload deploy
```

CloudFormation outputs from deployed stack.

```bash
-------------------------------------------------------------------------------------------------
Outputs                                                                                         
-------------------------------------------------------------------------------------------------
Key                 AppCloudfrontDomains                                                        
Description         Application cloudfront domains                                              
Value               example.com                 

Key                 AppCloudfrontURL                                                            
Description         Application cloudfront url                                                  
Value               d11pgg2y7788ng.cloudfront.net                                               

Key                 AppAssetBucketArn                                                           
Description         Application assets bucket arn                                               
Value               arn:aws:s3:::unload-production-example-app-cl-assetsbucket-f587943ataxn 
-------------------------------------------------------------------------------------------------

```

Optionally, open application dashboard to see all provisioned resources.
```bash
unload dashboard
```
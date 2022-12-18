---
id: queue
title: Queue
---

## Standard Queue

Define a standard SQS queue with background worker for processing messages.

```yaml
queues:
  default:
    delay: 1
    visibility-timeout: 1
    polling: long
    retention: 1
    tries: 3
    concurrency: 10
    memory: 1024
    timeout: 300
    tmp: 10000
```

### Options

- [delay] - The time in seconds that the delivery of all messages in the queue is delayed. The default value is 0.
- [visibility-timeout] - The length of time during which a message will be unavailable after a message is delivered from the queue. The default value is 900. 
- [retention] - The number of seconds that Amazon SQS retains a message. The default value is 345600.
- [polling] - Reduce empty responses by allowing Amazon SQS to wait until a message is available in a queue before sending a response. (Supported: long or short). Default value is long.
- [tries] - The number of times a message is delivered to the source queue before being moved to the dead-letter queue. Default value is 3.
- [concurrency] - Maximum number of messages being processed at the same time. Default value is unlimited.
- [timeout] - The amount of time (in seconds) that worker allowed to process the message. The default is 900 seconds. The maximum allowed value is 900 seconds.
- [memory] - The amount of memory available to the worker at runtime in MB. The default value is 1024 or inherited from global setting if defined.
- [tmp] - The size of the function's /tmp directory in MB. The default value is 512, but it can be any whole number between 512 and 10,240 MB.
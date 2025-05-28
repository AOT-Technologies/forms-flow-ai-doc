---
sidebar_class_name: hidden
---

# Form Access Token Cache Listener

---

**org.camunda.bpm.extension.hooks.listeners.execution.FormAccessTokenCacheListener**

This component is designed to work **exclusively** with the **formio-access-token.bpmn** process. It generates and stores a Formio access token as a variable in the global scope.

### Type

Execution Listener

### How It Works

The **formio-access-token.bpmn** process is scheduled to run daily at 10 PM. The listener generates a Formio access token and stores it as a global variable, which is then used by all running instances.

### How to Use

The following snapshot shows how the **FormAccessTokenCacheListener** is configured in the **formio-access-token.bpmn** process.

![Image](/img/formaccesstokencache-listener-snp1.jpg)
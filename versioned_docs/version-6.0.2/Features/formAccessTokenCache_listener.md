---
sidebar_class_name: hidden
---

# Form Access Token Cache Listener

---

**org.camunda.bpm.extension.hooks.listeners.execution.FormAccessTokenCacheListener**

This component is intended to run **ONLY** with the dedicated token cache process **formio-access-token.bpmn**. It generates and stores the Formio token as a variable in global scope.

### Type

Execution Listener

### How It Works

The **formio-access-token.bpmn** process is designed to run every day at 10 PM. It generates and stores the Formio token as a variable in global scope. The stored token is used by all running instances.

### How to Use

The following snapshot shows how the **FormAccessTokenCacheListener** is used in the **formio-access-token.bpmn** process.

![Image](/img/formaccesstokencache-listener-snp1.jpg)
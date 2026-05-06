---
sidebar_class_name: hidden
---

# Email Attributes Listener

---

### Java Class
 
`org.camunda.bpm.extension.hooks.listeners.execution.EmailAttributesListener`

This Listener is designed to work **exclusively** with the `notification_email.bpmn` process and the `email-template.dmn` (or similar notification processes). It replaces reserved identifiers in the email body (e.g., `@{variable}`) with their corresponding values.

### Type

Execution Listener

### How It Works

This listener has to be configured on the navigation path between the `email-template.dmn` and the email connector. During execution, it transforms the `email body` and `email subject` output from the DMN by substituting reserved identifiers with actual values.

### How to Use

The following snapshot illustrates how the `EmailAttributesListener` is used in the `notification_email.bpmn` process.

![Image](/img/emailattributes-listener-snp1.jpg)
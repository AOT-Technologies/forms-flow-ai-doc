---
sidebar_class_name: hidden
---

# Email Attributes Listener

---

**org.camunda.bpm.extension.hooks.listeners.execution.EmailAttributesListener**

This component is intended to run **ONLY** with the process **notification_email.bpmn** and **email-template.dmn** or similar notification processes. It replaces all reserved identifiers **`@{variable}`** with values in the email body.

### Type

Execution Listener

### How It Works

The listener is configured on the navigation path between **email-template.dmn** and the email connector. On execution, the email body output from the DMN is transformed with the corresponding values.

### How to Use

The following snapshot shows how the **EmailAttributesListener** is used in the **notification_email.bpmn** process.

![Image](/img/emailattributes-listener-snp1.jpg)
---
sidebar_class_name: hidden
---

# External Submission Listener

---

**org.camunda.bpm.extension.hooks.listeners.execution.ExternalSubmissionListener**

This component can be used on the navigation path of start. It allows direct integration from any external system and performs offline sync-up within formsflow.ai, i.e., creates a submission in Formio.

### Type

Execution Listener

### How It Works

This component relies on the following parameters:

- **formName** (Listener field): Should be the form name from Formio. **Mandatory = Yes**; specifies the form to which the data has to be submitted offline.

### How to Use

The following snapshot shows how to configure the **ExternalSubmissionListener** to an execution.

![Image](/img/externalsubmission-listener-snp1.jpg)
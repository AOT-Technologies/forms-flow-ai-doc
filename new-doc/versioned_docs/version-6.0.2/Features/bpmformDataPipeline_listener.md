---
sidebar_class_name: hidden
---

# BPM Form Data Pipeline Listener

---

**org.camunda.bpm.extension.hooks.listeners.BPMFormDataPipelineListener**

This component can be used on any event of task/execution listener. Upon configuration, it copies Camunda variables to form (Formio) data.

### Type

Task/Execution Listener

### How It Works

This component prepares data from Camunda variables for Formio submission and invokes the **Formio REST-based submission endpoint** for updates.

This component relies on the following parameters:

- **fields** (Listener field of type expression): Takes in Camunda variables as an array. For example, `["pid", "applicationId", "task_id"]`. It populates data from Camunda variables to the form. **Mandatory = Yes**

### How to Use

The following snapshot shows how to configure the **BPMFormDataPipelineListener** to an execution.

![Image](/img/bpmformdatapipeline-listener-snp1.jpg)
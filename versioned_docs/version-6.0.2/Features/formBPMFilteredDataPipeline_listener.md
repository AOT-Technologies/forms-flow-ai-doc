---
sidebar_class_name: hidden
---

# Form BPM Filtered Data Pipeline Listener

---

**org.camunda.bpm.extension.hooks.listeners.FormBPMFilteredDataPipelineListener**

This component can be used on any event of task/execution listener. Upon configuration, it copies specific data from form (Formio) to Camunda variables.

### Type

Task/Execution Listener

### How It Works

This component identifies the variables from the web API configuration and copies only those variables from the form (Formio) to Camunda variables.

### How to Use

The following snapshot shows how to configure the **FormBPMFilteredDataPipelineListener** to an execution.

![Image](/img/formbpmfiltereddatapipeline-listener-snp1.png)
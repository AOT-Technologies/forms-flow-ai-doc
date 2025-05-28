---
sidebar_class_name: hidden
---

# Form BPM Filtered Data Pipeline Listener

---

**org.camunda.bpm.extension.hooks.listeners.FormBPMFilteredDataPipelineListener**

This component can be used on any task or execution listener event. Upon configuration, it copies specific data from Formio forms to Camunda variables.

### Type

Task/Execution Listener

### How It Works

The listener identifies variables from the web API configuration and copies only those specified variables from Formio to Camunda variables.

### How to Use

The following snapshot shows how to configure the **FormBPMFilteredDataPipelineListener** to an execution.

![Image](/img/formbpmfiltereddatapipeline-listener-snp1.png)
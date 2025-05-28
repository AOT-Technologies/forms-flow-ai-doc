---
sidebar_class_name: hidden
---

# Form BPM Data Pipeline Listener

---

**org.camunda.bpm.extension.hooks.listeners.FormBPMDataPipelineListener**

This component can be used on any task or execution listener event. Upon configuration, it copies data from Formio forms to Camunda variables.

### Type

Task/Execution Listener

### How It Works

The listener invokes the **Formio REST-based submission endpoint** to retrieve data and creates or updates Camunda variables accordingly.

### How to Use

The following snapshot shows how to configure the **FormBPMDataPipelineListener** to an execution.

![Image](/img/formbpmdatapipeline-listener-snp1.jpg)
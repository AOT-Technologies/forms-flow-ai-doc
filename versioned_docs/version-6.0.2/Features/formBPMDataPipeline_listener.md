---
sidebar_class_name: hidden
---

# Form BPM Data Pipeline Listener

---

**org.camunda.bpm.extension.hooks.listeners.FormBPMDataPipelineListener**

This component can be used on any event of task/execution listener. Upon configuration, it copies data from form (Formio) to Camunda variables.

### Type

Task/Execution Listener

### How It Works

This component invokes the **Formio REST-based submission endpoint** to read data and create or update Camunda variables.

### How to Use

The following snapshot shows how to configure the **FormBPMDataPipelineListener** to an execution.

![Image](/img/formbpmdatapipeline-listener-snp1.jpg)
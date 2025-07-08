---
sidebar_class_name: hidden
---

# BPM Form Data Pipeline Listener

---
### Java Class
 
`org.camunda.bpm.extension.hooks.listeners.BPMFormDataPipelineListener`

This Listener can be used on any task or execution listener event. Upon configuration, it copies Camunda variables value to form fields with the same name.

### Type

Task/Execution Listener

### How It Works

The listener prepares data from Camunda variables for Formio submission and invokes the **Formio REST-based submission endpoint** to update the form data.

### Parameters

`(1)` **fields** (`name`: fields, `type`: expression, `value`: Array of variable names(s), **Mandatory = Yes** ] 
	Specifies Camunda variables as an array (e.g., `["pid","applicationId","task_id"]`). These variables are populated into the form.

### How to Use

The following snapshot shows how to configure the **BPMFormDataPipelineListener** to an execution.

![Image](/img/bpmformdatapipeline-listener-snp1.jpg)
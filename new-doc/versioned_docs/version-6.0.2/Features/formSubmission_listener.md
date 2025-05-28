---
sidebar_class_name: hidden
---

# Form Submission Listener

---

**org.camunda.bpm.extension.hooks.listeners.FormSubmissionListener**

This component can be used on any event of task/execution listener. Upon configuration, it creates a new submission from the current submission.

### Type

Task/Execution Listener

### How It Works

This component creates a new revision from the current **formUrl** and sets it as a Camunda variable. The process involves:

1. Creating a new **submissionId** using the existing form data.
2. Setting the new **formUrl** with Camunda variables.

The component depends on the following variable from the Camunda context:

- **formUrl**

### How to Use

The following snapshot shows how to configure the **FormSubmissionListener** to a task.

![Image](/img/formsubmission-listener-snp1.png)
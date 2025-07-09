---
sidebar_class_name: hidden
---

# Form Submission Listener

---
### Java Class
 
`org.camunda.bpm.extension.hooks.listeners.FormSubmissionListener`

This listener can be used on any event of a task or execution listener. Upon configuration, it creates a new submission from the current one.

### Type

Task/Execution Listener

### How it Works

This listener creates a new revision from the current `formUrl` and sets that as a flow (Camunda) variable.

* **[STEP 1]** - Create a new submissionId using the existing form data.
* **[STEP 2]** - Set the new `formUrl` with CAM variables.

The component depends on the following variable from the Camunda context:

1.  `formUrl`

### How to Use

The snapshot below shows how to configure the **FormSubmissionListener** for a task.

![Form Submission listener - Snapshot](/img/formsubmission-listener-snp1.png)
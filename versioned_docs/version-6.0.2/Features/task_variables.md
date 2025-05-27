---
sidebar_position: 16
---

# BPMN Variable

---

BPMN variables are the form fields that you added to the form. Users can select form fields that they want to display in the task list.

1. **Create a new form or edit an already created form**

   ![Image](/img/task_variables/editForm.png)

2. **Associate the form with the workflow**

   ![Image](/img/task_variables/associate_workflow.png)

3. **Ensure the workflow has included FormBPMFilteredDataPipelineListener**

   ![Image](/img/task_variables/filtered_listener.png)

4. **Add task filter variables to the form. The FormBPMFilteredDataPipelineListener copies the added task variable keys from form (formio) to Camunda variables**

   - Select all fields:

     Select the checkbox to choose all fields from the form as task variables.

     ![Image](/img/task_variables/all_variables.png)

   - Select specific fields:

     Deselect the checkbox and choose only the necessary fields from the list for task variables.

     ![Image](/img/task_variables/specific_fields.png)

5. **Click the edit label button to update the label if required**

   ![Image](/img/task_variables/edit_label.png)

6. **Submit new application with this form**

   ![Image](/img/task_variables/form_submit.png)

7. **Now these variables are displayed in user's tasklist, you can select any variables from the list**

   ![Image](/img/task_variables/taskAttr_list.png)
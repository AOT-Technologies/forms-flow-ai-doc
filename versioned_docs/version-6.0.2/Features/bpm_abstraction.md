---
sidebar_class_name: hidden
---

# Task Filters

---

The BPM Abstraction feature in formsflow.ai allows users to create task filters directly from the Task page, eliminating the need to log into Camunda. Below is a guide to creating and configuring task filters.

### Create New Filter

To create a new task filter:

1. Click the **Create new filter** button on the left-hand side of the Task page.
2. Enter a filter name, then define criteria to refine task visibility and set permissions to control access.

This intuitive system enhances task organization and promotes efficient task management.

![Image](/img/Taskfilters/filter_create.png)

### Criteria

Users can select from the following criteria to customize task filters:

1. **Show only current user assigned task**  
   Displays tasks assigned to the logged-in user, streamlining their workflow.

   ![Image](/img/Taskfilters/mytask1.png)

   ![Image](/img/Taskfilters/mytask2.png)

2. **Display authorized tasks based on user roles**  
   Visible only to users with an admin role. Admins can enable or disable this field (default: true for all users).

   ![Image](/img/Taskfilters/current_usertask1.png)

   ![Image](/img/Taskfilters/current_usertask2.png)

3. **Workflow**  
   Displays tasks associated with a specific workflow selected from a provided list.

   ![Image](/img/Taskfilters/workflow1.png)

   ![Image](/img/Taskfilters/workflow2.png)

4. **User Group**  
   Shows tasks linked to a specific user group (e.g., `formsflow/formsflow-reviewer/clerk`), useful for organizing tasks by business processes or responsibilities.

   ![Image](/img/Taskfilters/usergp1.png)

   ![Image](/img/Taskfilters/usergp2.png)

5. **Assignee**  
   Filters tasks assigned to a specific individual (e.g., `jackson`), ensuring targeted task management.

   ![Image](/img/Taskfilters/assignee.png)

   ![Image](/img/Taskfilters/assigned_preview.png)

6. **Select Form**  
   Allows selection of a form specific to the task, making associated task variables accessible in the Task Attributes section. *Note: In setups with form bundling enabled, form bundles also appear in the list.*

   ![Image](/img/Taskfilters/selectForm.png)

7. **Task Attributes**  
   Lists all task variables from the selected form and static task attributes. Selected attributes appear in the task list view.

   ![Image](/img/Taskfilters/taskAttribute1.png)

   ![Image](/img/Taskfilters/taskAttribute2.png)

   ![Image](/img/Taskfilters/taskListView.png)

### Task Variables

For details on task variables, refer to the [Task Variables documentation](task_variables).

### Permissions

Users can choose from the following permissions when creating a filter (default: Private):

1. **Accessible for all users**  
   Makes the filter available to all users.
2. **Private (Only You)**  
   Restricts access to the filter to the creator only.
3. **Specific Group**  
   Shares the filter with a predefined group of users based on group membership.
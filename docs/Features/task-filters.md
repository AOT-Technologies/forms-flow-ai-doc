---
sidebar_position: 13
slug: /task-filters
---

# Flow: Task Filters

---

**Task filters** are predefined views or configurations applied to the task list page that allow users to see only relevant tasks based on the **criteria** selected.

## Criteria

| **Criteria**                            | **Description** |
|--------------------------------------|-----------------|
| **Workflow** | Displays tasks associated with a specific workflow selected from a provided list. |
| **User Group** | Shows tasks linked to a specific user group/role (e.g., `formsflow/formsflow-reviewer/clerk`), useful for organizing tasks by business processes or responsibilities. |
| **Assignee** | Filters tasks assigned to a specific individual (e.g., `jackson`), ensuring targeted task management. |
| **Select Form** | Allows selection of a form specific to the task, making associated task variables accessible in the Task Attributes section. Note: In setups with form bundling enabled, form bundles also appear in this list. |
| **Task Attributes** | Lists all task variables from the selected form and static task attributes. Selected attributes appear in the task list view. |
| **Show only current user assigned task** | Displays tasks assigned to the logged-in user, streamlining their workflow. |
| **Display authorized tasks based on user roles** | Visible only to users with an admin role. Admins can enable or disable this field (default: true for all users). |

## Permission
User can also configure visibility for a filter by selecting one of the option under **Permission** section:
    - **Accessible for all users** : Visible to all users
    - **Private (Only You)** : Visible only to the creator
    - **Specific Group** : Visible only the roles selected.

## Default Filter
User can also select the `default filter` to be selected when user visit *Tasks* page by selecting `Set as default filter` option.
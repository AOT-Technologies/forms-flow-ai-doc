---
sidebar_class_name: hidden
---

# Camunda Filters

---

In Camunda Tasklist, filters can be created and selected to generate task lists sorted by specific criteria. To create a filter, select **Create a Filter** in the Tasklist interface.

![Image](/img/camunda_Filter1.png)

### Configuration Options

- **General**: Define the filter's name, description, and color. Set a priority to determine its display order on the dashboard.
- **Permissions**: Specify which users or groups can view the filter. Enable global access by selecting “Accessible by all users.” Permissions set here are equivalent to READ permissions, which can also be managed in Camunda Admin’s Authorizations tab.
- **Criteria**: Define which tasks appear in the filter by entering a key and value. Keys marked with an asterisk (*) accept expressions as values.

  ![Image](/img/camunda_Filter2.png)

  > **Note**: Keys marked with a * accept expressions as values.

- **Variables**: Specify which variables appear in the filter results on the dashboard. Enter a **Name** (the variable’s coded name) and a **Label** (the display name in results). This does not affect which tasks are shown.

### Common Filters

1. **My Tasks Filter**  
   Displays tasks claimed by the logged-in user.

   ![Image](/img/camunda_Filter3.png)

   ![Image](/img/camunda_Filter4.png)

   ![Image](/img/camunda_Filter5.png)

2. **All Tasks Filter**  
   Displays all tasks accessible to the logged-in user.

   ![Image](/img/camunda_Filter6.png)

   ![Image](/img/camunda_Filter7.png)

### Additional Useful Filters

The table below lists common and useful filters that can be created in Tasklist, along with setup instructions.

![Image](/img/camunda_Filter8.png)
---
sidebar_position: 22
---

# Role-Based Access Control for Formsflows

---

formsflow allows designers to set permissions for forms, providing fine-grained control over visibility for both designers and client users based on their roles.

With this feature, designers can define specific permissions for each form they create, determining which roles can view and interact with it. By configuring these permissions, designers ensure that only authorized individuals or user groups can access and work with the form.

This enhances flexibility and control within formsflow, empowering designers to manage permissions and ensure form visibility aligns with assigned roles, creating a tailored and secure environment for designers and clients.

1. **Log in as a designer and create a form, then save it.**

    ![Image](/img/RBAC/create_form.png)

2. **Attach the form to a workflow.**

    ![Image](/img/RBAC/workflow.png)

3. **Select permissions for the specific form.**

    #### For Designer Permissions

    - **Case I**: Accessible to all designers (default).

    - **Case II**: Private (Only You) - If only the current designer needs access.

        ![Image](/img/RBAC/access_for_all.png)

        **Note**: _The creator of a form will always have access to the form they designed, even if the option is set to Private (Only You)._

    - **Case III**: Specific Designer Group - Grant access to specific designer groups.

        Click on the Specific Designer Group option, then click the Add button.

        ![Image](/img/RBAC/add_btn_designer.png)

        This displays the list of available groups:

        ![Image](/img/RBAC/grp_list.png)

    **Note**: _The creator of a form will always have access to the form they designed, even if they are not a member of the specific group._

    #### Permission to Create New Submissions

    This permission grants exclusive rights to a specified user group to create new submissions for the designed form.

    - **Case I**: All reviewers and clients (default).

        ![Image](/img/RBAC/permission_all_users.png)

    - **Case II**: Specific User Group - Grant access to specific groups of clients and reviewers.

        Click on the Specific User Group option, then click the Add button to display the list of groups available.

        ![Image](/img/RBAC/add_btn_user.png)

        ![Image](/img/RBAC/add_user_list.png)

    #### Reviewer Permission to View Submissions

    This permission allows assigned reviewers to view the submission history of the designed form.

    - **Case I**: All Reviewers (default).

        ![Image](/img/RBAC/view_all_reviewers.png)

    - **Case II**: Specific Reviewers - Grant access to specific groups of reviewers.

        Click on Specific Reviewers, then click the Add button to display the list of groups available.

        ![Image](/img/RBAC/specific_reviewers.png)

        ![Image](/img/RBAC/reviewer_list.png)

    **Note**: _When choosing specific designer or client groups, the list includes all groups available in Keycloak, including designer, client, and reviewer groups. The designer must select the appropriate group._

4. **Publish and save the form for client users.**

    ![Image](/img/RBAC/publish_save.png)

**Note**: _To list existing forms for clients, you must migrate existing Camunda authorizations. Run the `migration.sh` bash script inside the FormsFlow web API. For Kubernetes or Nginx setups, access the FormsFlow web API container and execute `migration.sh`. For local setups, enter the FormsFlow web API container or activate the virtual environment (following the Makefile instructions in the FormsFlow web API) and run the script._
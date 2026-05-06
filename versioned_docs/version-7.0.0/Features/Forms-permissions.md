---
sidebar_position: 21
slug: /form-rbac
---

# Form: Role Based Access Control (RBAC)

---

formsflow.ai allows form designers to configure detailed access permissions for each form. This feature provides precise control over who can view or interact with a form based on user roles. Designers can define visibility and submission rights by assigning roles having the right permissions. This ensures that only authorized users have access to relevant forms and associated workflows.

By aligning form access with user roles, this feature improves security, simplifies user experience, and enables a more tailored and controlled environment for both internal and external users


1. Log in as a designer user and create a form (layout + flow), then save it.

   ![Image](/img/7.0.0/Screenshot-2024-11-22-095740.png)

2. Select permissions for the specific form in its settings (Top bar, right side in the Edit form screen).

   #### For designer permission

   - Case I: **Private (Only You)**: If only the current designer needs to access the form.

     ![Image](/img/7.0.0/Screenshot-2024-11-27-135022.png)

     **Note**: _The creator of a form will always have access to the form designed by him/her._

   - Case II: **You and Specific Roles**: Give access to specific groups of people.

     Select **You and specific roles** and then select appropriate groups in the selection below.

     ![Image](/img/7.0.0/Screenshot-2024-11-27-135558.png)

   #### Permission to create new submission

   This permission grants exclusive rights to a specified user group, allowing them to create new submissions for the designed form.

   - Case I: **All users registered in the system**

     ![Image](/img/7.0.0/Screenshot-2024-11-27-140501.png)

   - Case II: **All users registered + Anonymous users**

     Check the **Anonymous users** checkbox

   - Case III: **Specific roles**

     Select **Specific roles** radio box and in the field below select an appropriate group of users.

     ![Image](/img/7.0.0/Screenshot-2024-11-27-140415.png)

   #### Reviewer permission to view submissions

   With this permission, the assigned reviewer has the capability to review the submission history of the designed form.

   - Case I: **The Submitter of the form**

     ![Image](/img/7.0.0/Screenshot-2024-11-27-140619.png)

   - Case II: **The Submitter + Specific Roles**: Give access to specific groups of reviewers

     Click on the **Submitter and specific roles**, and then select the appropriate role or roles in the field below.

     ![Image](/img/7.0.0/Screenshot-2024-11-27-140821.png)

   **Note**: _When choosing specific designer groups or client groups, the list contains all the groups available in Keycloak, including the designer groups, client groups, and reviewer groups. The designer has to choose the appropriate group._

3. Publish and save the form for client users.


## Migrating Existing Camunda Authorizations for Form Visibility

To display existing forms to end users, you must migrate the associated Camunda authorizations. This is done by executing a script named `migration.sh` within the `formsflow Web API` component.

### Instructions

#### 1. Containerized Environment (e.g. Kubernetes or Nginx)

- Access the Docker container running the `formsflow Web API`.
- Run the following command inside the container:

  ```bash
  ./migration.sh
  ```

#### 2. Local Docker Setup

- Enter the `formsflow Web API` container:

  ```bash
  docker exec -it <container_name> /bin/bash
  ```

- Run the migration script:

  ```bash
  ./migration.sh
  ```

#### 3. Local Flask Development Setup

- Navigate to the `formsflow Web API` directory.
- Set up the virtual environment by following the instructions in the `Makefile`.
- Activate the virtual environment:

  ```bash
  source venv/bin/activate
  ```

- Run the migration script:

  ```bash
  ./migration.sh
  ```

> **Note**: Replace `<container_name>` with the actual name of your running container.

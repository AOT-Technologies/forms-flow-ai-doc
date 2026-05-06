---
sidebar_position: 25
---

# Multitenancy

---

Formsflow.ai supports multitenancy, enabling one installation to serve multiple tenants with logical data separation.

### Tenant Isolation

Formsflow.ai logically separates tenant data and authorization, which enables:

- **Application URL**: Each tenant gets a tenant-specific URL to access the application.
- **Authorization**: Tenant data is secured using tenant-specific authentication tokens. A user can belong to multiple tenants with different roles, and authentication is based on the tenant URL, granting access only to that tenant’s data. Each tenant can have unique roles beyond the default formsflow roles.
- **Forms**: Each tenant can create and publish their own forms.
- **BPM**: Each tenant can create and publish their own workflows. Workflows can also be deployed to be shared across all tenants. See [BPM: Tenant-based Task Assignment](#bpm-tenant-based-task-assignment) for details on tenant-based task assignment.
- **Analytics**: Each tenant gets their own analytics organization to create dashboards.

If you are interested in premium features, please [contact us](https://formsflow.ai/about-us/#contact-us).

# BPM: Tenant-based Task Assignment

---

In a tenant-based environment, user tasks are assigned to the tenant’s Reviewer/Approver group. Below is an example process demonstrating how a user task is assigned using a process variable.

### Example Process

The `candidateGroups` attribute in the user task is associated with a process variable using `${candidateGroup}`. This allows task assignment to depend on the output of the variable `candidateGroup`.

![Image](/img/user-task.png)

An inline script is added to the sequence flow before the user task to determine the candidate group.

![Image](/img/task-assignment-script.png)

The script uses the process variable `tenantKey` to determine the candidate group.

```javascript
tenantKey = execution.getVariable("tenantKey");
if (tenantKey) {
  candidateGroup = tenantKey + "-formsflow-reviewer";
} else {
  candidateGroup = "formsflow/formsflow-reviewer";
}
execution.setVariable("candidateGroup", candidateGroup);
```
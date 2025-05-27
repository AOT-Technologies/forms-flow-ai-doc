---
sidebar_position: 29
---

# Multitenancy

---

Premium Feature

formsflow.ai supports multitenancy where one installation can be served for multiple tenants with logical separation of data.

### Tenant Isolation

formsflow.ai logically separates tenant data and authorization, which enables:

- **Application URL**: Each tenant gets their own tenant-specific URL to access the application.
- **Authorization**: Each tenant's data is secured using tenant-specific authentication tokens. A user can be a member of multiple tenants with different roles, and authentication is based on the tenant URL. The issued access token grants access only to that tenant's data. Each tenant can have different sets of roles than the default formsflow.ai roles.
- **Forms**: Each tenant can create and publish their own forms.
- **BPM**: Each tenant can create and publish their own workflows. Workflows can be deployed and shared across all tenants on the platform. See [BPM: Tenant-based Task Assignment](#bpm-tenant-based-task-assignment) for information on tenant-based task assignment.
- **Analytics**: Each tenant gets their own analytics organization to create dashboards.

If you are interested in premium features, please [contact us](https://formsflow.ai/about-us/#contact-us).

# BPM: Tenant-based Task Assignment

---

In a tenant-based environment, user tasks are assigned to the tenant's Reviewer/Approver group. An example process is provided below that demonstrates how a user task is assigned using a process variable.

### Example Process

The `candidateGroups` attribute in the user task is associated with a process variable using `${candidateGroup}`. This allows task assignment to depend on the output of the variable `candidateGroup`.

![Image](/img/7.0.0/user-task.png)

An inline script is added to the sequence flow before the user task to determine the candidate group.

![Image](/img/7.0.0/task-assignment-script.png)

The script uses the process variable `tenantKey` to determine the candidate group:

```javascript
tenantKey = execution.getVariable("tenantKey");
if (tenantKey) {
  candidateGroup = tenantKey + "-formsflow-reviewer";
} else {
  candidateGroup = "formsflow/formsflow-reviewer";
}
execution.setVariable("candidateGroup", candidateGroup);
```
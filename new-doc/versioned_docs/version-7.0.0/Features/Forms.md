---
sidebar_position: 15
slug: /form-adapter
---

# Form: Adapter

---

formsflow.ai supports submission data to be stored and served using external system. This feature can be used for submission datastore to different database than MongoDB. If this feature is enabled MongoDB will be used only for form definition data. A Rest API is needed to support this where customer can add this Rest API to their choice of database and provide the required endpoints. A reference implementation can be found [here](https://github.com/AOT-Technologies/forms-flow-ai-submissions/tree/develop/forms-flow-submissions).

This feature needs to be configured during installation. Refer to [Installation Documentation](https://aot-technologies.github.io/forms-flow-installation-eks/docs/next/windows) for help..

Form Adapter uses custom submission URLs to create, submit, get and edit submissions within a form to the preferred database. These URLs follow the same URL pattern as the formio submission URL.

### Create Custom Form Submission

*POST*

`{{CUSTOM_SUBMISSION_URL}}/form/<formid>/submission`

Example of how to create a new form submission within a custom form.

`http://{your-ip-address}:6212/form/62da4ec3e44bcd4da0454ae1/submission`

##### **HEADERS**

**Authorization Bearer** `{{token}}`

**Content-Type** application/json

##### **BODY**

```json
{
  "data": {
    "name": "John",
    "age": 21,
    "applicationStatus": "",
    "applicationId": ""
  }
}
```
##### **Response**

```json
{
  "created": "2022-08-03 09:32:59.448886",
  "_id": "04016fac-8811-4762-859b-0c664c2490b5",
  "form": "62da4ec3e44bcd4da0454ae1",
  "data": {
    "name": "John",
    "age": 21,
    "applicationStatus": "",
    "applicationId": ""
  },
  "modified": "2022-08-03 09:32:59.448893"
}
```
**Note:** In the response, _id refers to the submission id and form refers to the form id.

### **Get a Submission**

*GET*

`{{CUSTOM_SUBMISSION_URL}}/form/<formid>/submission/<submission_id>`

Retrieve a single submission within a form.

*Headers*

```
Authorization Bearer {{token}}
Content-Type application/json
```

*Response*

```json
{
  "created": "2022-08-03 09:32:59.448886",
  "_id": "04016fac-8811-4762-859b-0c664c2490b5",
  "form": "62da4ec3e44bcd4da0454ae1",
  "data": {
    "name": "John",
    "age": 21,
    "applicationStatus": "",
    "applicationId": ""
  },
  "modified": "2022-08-03 09:32:59.448893"
}
```
### **Update a Submission**

*PUT*

`{{CUSTOM_SUBMISSION_URL}}/form/<formid>/submission/<submission_id>`

### **Update the whole submission.**

*HEADERS*
```
Authorization Bearer {{token}}

Content-Type application/json
```

*BODY*
```json
{
  "data": {
    "name": "John Joe",
    "age": 22,
    "applicationStatus": "",
    "applicationId": ""
  }
}
```
### **Response**
```json
{
  "created": "2022-08-03 09:32:59.448886",
  "_id": "04016fac-8811-4762-859b-0c664c2490b5",
  "form": "62da4ec3e44bcd4da0454ae1",
  "data": {
    "name": "John Joe",
    "age": 22,
    "applicationStatus": "",
    "applicationId": ""
  },
  "modified": "2022-08-03 09:32:59.448893"
}
```

### **Partially Update a Submission**

*PATCH*

`{{CUSTOM_SUBMISSION_URL}}/form/<formid>/submission/<submission_id>`

*HEADERS*
```
Authorization Bearer {{token}}

Content-Type application/json
```

*BODY*

```json
{
  "data": {
    "applicationStatus": "New",
    "applicationId": "1234"
  }
}
```

### **Response**

```json
{
  "created": "2022-08-03 09:32:59.448886",
  "_id": "04016fac-8811-4762-859b-0c664c2490b5",
  "form": "62da4ec3e44bcd4da0454ae1",
  "data": {
    "name": "John Joe",
    "age": 22,
    "applicationStatus": "New",
    "applicationId": "1234"
  },
  "modified": "2022-08-03 09:32:59.448893"
}
```
**NOTE:** In case of Reviewer actions, if submission data need to be updated directly from the form, call customSubmissionUrl instead of formio.

![Image](/img/7.0.0/formadapter1.png)

![Image](/img/7.0.0/formadapter2.png)

---
sidebar_position: 15
slug: /form-adapter
---

# Form: Adapter

---

formsflow.ai supports storing form submission data in external systems, allowing integration with databases other than MongoDB. When this feature is enabled, MongoDB is used only to store form definitions, while submission data is handled externally.

## Overview
=======
To enable this functionality, you must provide a REST API that interacts with your preferred database. This API should implement the necessary endpoints to support create, read, update, and delete operations on submission data.

A reference implementation is available here:  
[forms-flow-ai-submissions repository](https://github.com/AOT-Technologies/forms-flow-ai-submissions/tree/develop/forms-flow-submissions)

## How It Works

The Form Adapter uses custom submission URLs that follow the same pattern as Form.io submission endpoints. These URLs allow the form to:

- Create a new submission
- Submit form data
- Retrieve a submission
- Edit an existing submission

This enables flexible integration with external data stores while maintaining compatibility with the formsflow.ai platform.

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

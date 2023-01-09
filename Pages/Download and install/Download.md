---
layout: default
title: Download and Installation
nav_order: 2
---

# Download and Installation
----
In the following document, we’ll describe the different project dependencies and the installation options being supported.

### Prerequisites
 - Admin access to a local or remote server (can be local Windows PC or Mac provided it is 64-bit with at least 16GB RAM and 25GB HDD).
 - For Docker-based installation Docker (supports Docker version above 4.0.0) needs to be installed
 - For Mac, make sure the docker for mac memory allocation is set to at least 16GB.

### Download formsflow.ai
 To download and set up, follow the installation guide, where you will find step-by-step instructions to download and install.  
 Clone this github repo: [https://github.com/AOT-Technologies/forms-flow-ai](https://github.com/AOT-Technologies/forms-flow-ai).



Folder structure will look like below:
![Download installation]( ...)  

### Project Dependencies
- [Keycloak](https://www.keycloak.org/) (included under ../.forms-flow-idm/keycloak).
- [Form.io](https://www.form.io/opensource) (included under ../.forms-flow-forms).
- [Camunda](https://camunda.com/) (included under ../.forms-flow-bpm).
- [Redash](https://redash.io/) (included under ../.forms-flow-analytics).
- [Python](https://www.python.org/) (included under ../.forms-flow-api).
- Optional: nginx (included under ./deployment/nginx)  

---

  *Copyright© [formsflow.ai](https://formsflow.ai/)*   
  {: .text-center .mt-8}
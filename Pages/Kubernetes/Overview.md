---
layout: default
title: Overview 
parent: Kubernetes Installation
nav_order: 1
---

## Overview 
\
Formsflow.ai can be installed using Helm, which is a tool used to deploy applications to Kubernetes clusters. Helm allows you to define, install, and upgrade applications by using Charts. For more information about Helm please visit the [Helm website](https://helm.sh/).
\
Formsflow.ai can be installed by either using the formsflow.ai Helm Chart repository directly or by cloning the GitHub [source code](https://github.com/AOT-Technologies/forms-flow-ai-charts) and installing it from a local directory. The following install instructions are for forms-flow-ai-charts release v2.1.1 to v2.1.4.

### Prerequisites
Before installing formsflow.ai to a Kubernetes cluster there are three prerequisites required:

1. [Helm](https://helm.sh/docs/intro/quickstart/#install-helm) must be installed on your machine.
2. A Kubernetes cluster must be initialized with an associated Domain Name and Namespace.

   In the following installation examples, an OpenShift cluster has been setup with the following information:

   Domain Name: *apps.bronze.aot-technologies.com*  
   Namespace  : *forms-flow*
3. The Kubernetes cluster must have a minimum of 5.7 CPU available and a usage of 1.6 CPU

[helm-charts](https://github.com/AOT-Technologies/forms-flow-ai-charts) is maintained by [AOT-Technologies](https://github.com/AOT-Technologies).



----
  
[Next](/just-the-docs/Pages/Kubernetes/KubernetesQuick.html)
{: .btn .float-right }  

 *Copyright© [formsflow.ai](https://formsflow.ai/)*   
  {: .text-center .mt-8 .pt-8}

    
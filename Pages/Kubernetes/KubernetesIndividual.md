---
layout: default
title: Individual Service Deployment
parent: Kubernetes Installation
nav_order: 3
---

## Individual Service Deployment
\
Each service can be installed, updated, and uninstalled individually. To install the formsflow.ai application, please follow the below steps in order:

1.Log in to your Kubernetes cluster using the command line interface.  
2.Set environment variables

  export DOMAIN_NAME=apps.bronze.aot-technologies.com  
  export NAMESPACE=forms-flow  
  \
  export DIRECTORY="formsflow" // Used for an install from the forsflow helm registry
  export DIRECTORY=”../charts” // Used for local directory installation
 {: .text-grey-lt-000 .bg-grey-dk-250 .p-6 .ml-3}  
 3.Add or update the Forms Flow chart repository on to your local machine  

 helm repo add formsflow https://aot-technologies.github.io/forms-flow-ai-charts  
 helm repo update formsflow
 {: .text-grey-lt-000 .bg-grey-dk-250 .p-6 .ml-3}  

 Or update each individual service   
 

 helm dependency update $DIRECTORY/forms-flow-ai/  
 helm dependency update $DIRECTORY/forms-flow-analytics/  
 helm dependency update $DIRECTORY/forms-flow-forms/  
 helm dependency update $DIRECTORY/forms-flow-idm/  
 helm dependency update $DIRECTORY/forms-flow-admin/  
 helm dependency update $DIRECTORY/forms-flow-api/  
 helm dependency update $DIRECTORY/forms-flow-bpm/  
 helm dependency update $DIRECTORY/forms-flow-data-analysis/  
 helm dependency update $DIRECTORY/forms-flow-web/  
 helm dependency update $DIRECTORY/forms-flow-documents-api/  
 {: .text-grey-lt-000 .bg-grey-dk-250 .p-6 .ml-3} 

 4.Install Forms Flow using Helm Charts  

 Sample Helm Install Command:

 helm install [RELEASE_NAME] formsflow/[COMPONENT_NAME] [flags]
 {: .text-grey-lt-000 .bg-grey-dk-250 .p-6 .ml-3}  

 *See [helm install](https://helm.sh/docs/helm/helm_install/) for command documentation* 

 helm install forms-flow-ai formsflow/forms-flow-ai \
 --set Domain=$DOMAIN_NAME \ 
 --set forms-flow-idm.keycloak.ingress.hostname=forms-flow-idm-$NAMESPACE.$DOMAIN_NAME \
 --namespace $NAMESPACE  
\
 helm install forms-flow-analytics formsflow/forms-flow-analytics \
 --set Domain=$DOMAIN_NAME \
 --namespace $NAMESPACE   
\
 helm install forms-flow-forms formsflow/forms-flow-forms \
 --set Domain=$DOMAIN_NAME \
 --namespace $NAMESPACE   
\
 helm install forms-flow-idm formsflow/forms-flow-idm \
 --set Domain=$DOMAIN_NAME \
 --set keycloak.ingress.hostname=forms-flow-idm-$NAMESPACE.$DOMAIN_NAME \
 --namespace $NAMESPACE
\
\
 # Optional Premium Admin Service:  
 helm install forms-flow-admin formsflow/forms-flow-admin \
 --set Domain=$DOMAIN_NAME \
 --namespace $NAMESPACE   
\
 helm install forms-flow-api formsflow/forms-flow-api \
 --set Domain=$DOMAIN_NAME \
 --namespace $NAMESPACE   
\
 helm install forms-flow-bpm formsflow/forms-flow-bpm \
 --set Domain=$DOMAIN_NAME \
 --set camunda.websocket.securityOrigin=https://*.$DOMAIN_NAME \
 --namespace $NAMESPACE   
\
 helm install forms-flow-data-analysis formsflow/forms-flow-data-analysis \
 --set Domain=$DOMAIN_NAME \
 --namespace $NAMESPACE   
\
 helm install forms-flow-documents-api formsflow/forms-flow-documents-api \
 --set Domain=$DOMAIN_NAME \
 --namespace $NAMESPACE   
\                   
 helm install forms-flow-web formsflow/forms-flow-web \
 --set Domain=$DOMAIN_NAME \
 --namespace $NAMESPACE
{: .text-grey-lt-000 .bg-grey-dk-250 .p-6 .ml-3}  
5.Uninstall Forms Flow  

This removes all of the Kubernetes components associated with the chart and deletes the release.  

> *NOTE: Persistent Volume Claims are not automatically deleted from Kubernetes.*  

Sample Helm Uninstall Command:  
 
helm uninstall [RELEASE_NAME] [flags]
{: .text-grey-lt-000 .bg-grey-dk-250 .p-6 .ml-3}   

*See helm uninstall for command documentation.*  
 
helm uninstall forms-flow-admin -n $NAMESPACE
\
helm uninstall forms-flow-ai -n $NAMESP
\
helm uninstall forms-flow-api -n $NAMESPACE
\
helm uninstall forms-flow-analytics -n $NAMESPACE
\
helm uninstall forms-flow-bpm -n $NAMESPACE
\
helm uninstall forms-flow-data-analysis -n $NAMESPACE
\
helm uninstall forms-flow-forms -n $NAMESPACE
\
helm uninstall forms-flow-idm -n $NAMESPACE
\
helm uninstall forms-flow-web -n $NAMESPACE
\
helm uninstall forms-flow-documents-api -n $NAMESPACE
{: .text-grey-lt-000 .bg-grey-dk-250 .p-6 .ml-3}  

[helm-charts](https://github.com/AOT-Technologies/forms-flow-ai-charts) is maintained by [AOT-Technologies](https://github.com/AOT-Technologies).


--- 


*Copyright© [formsflow.ai](https://formsflow.ai/)*   
{: .text-center .mt-8 .pt-8}
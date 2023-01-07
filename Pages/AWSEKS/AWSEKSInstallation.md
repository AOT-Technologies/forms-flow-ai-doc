---
layout: default
title: AWS EKS Installation 
nav_order: 6
---

## AWS EKS Installation Steps 
\
### Prerequisites

1. kubectl – A command line tool for working with Kubernetes clusters. For more information, see [Installing or updating kubectl](https://docs.aws.amazon.com/eks/latest/userguide/install-kubectl.html)

2. eksctl - A command line tool for working with EKS clusters that automates many individual tasks. For more information, see [Installing or updating eksctl](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html).

3. AWS CLI - A command line tool for working with AWS services, including Amazon EKS. For more information, see [Installing, updating, and uninstalling the AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) in the AWS Command Line Interface User Guide. After installing the AWS CLI, we recommend that you also configure it. For more information, see [Quick configuration with aws configure](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config) in the AWS Command Line Interface User Guide.

4. Helm - helps to manage Kubernetes applications, For more information see [Installing and updating the Helm](https://helm.sh/docs/intro/install)

## Starting With EKS (eksctl)

This guide helps you to create all of the required resources to get started with Amazon Elastic
Kubernetes Service (Amazon EKS) using eksctl, a simple command line utility for creating and
managing Kubernetes clusters on Amazon EKS. At the end of this tutorial, you will have a running
Amazon EKS cluster that you can deploy applications to

### Prerequisites

1. kubectl
2. eksctl
3. Required IAM permissions – The IAM security principal that you're using must have permissions
to work with Amazon EKS IAM roles and service linked roles, AWS CloudFormation, and a VPC and
related resources. For more information, see [Actions, resources, and condition keys for Amazon Elastic
Container Service for Kubernetes](https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonelastickubernetesservice.html) and [Using service-linked roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/using-service-linked-roles.html) in the IAM User Guide. You must
complete all steps in this guide as the same user.

### Step 1 : Creating AWS EKS Cluster

Create your Amazon EKS cluster with the following command. You can replace my-cluster with your
own value. The name can contain only alphanumeric characters (case-sensitive) and hyphens. It must start with an alphabetic character and can't be longer than 100 characters. Replace region-code with
any AWS Region that is supported by Amazon EKS. For a list of AWS Regions, see [Amazon EKS endpoints
and quotas](https://docs.aws.amazon.com/general/latest/gr/eks.html) in the AWS General Reference guide.

```
eksctl create cluster --name my-cluster --region region-code --nodegroup-name my-node-group --node-type m5.large --nodes 2

```
Cluster creation takes several minutes. During creation you'll see several lines of output. The last line of
output is similar to the following example line.
eksctl created a kubectl config file in ~/.kube or added the new cluster's configuration within an
existing config file in ~/.kube on your computer.

After cluster creation is complete, view the AWS CloudFormation stack named eksctl-my-clustercluster in the AWS CloudFormation console at https://console.aws.amazon.com/cloudformation to
see all of the resources that were created.

### Step 2: View Kubernetes.
View your cluster nodes.

```
kubectl get nodes -o wide
```

### Step 3: Install Nginx Ingress Controller in EKS using Helm.

Add the nginx ingress helm repo in Kubernetes kops cluster, follow this Nginx ingress official page to install [latest nginx ingress helm chart](https://docs.nginx.com/nginx-ingress-controller/installation/installation-with-helm/)

```
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
```

Update the helm repo

```
helm repo update
```
Install Nginx Ingress Controller using Helm

```
helm install ingress-nginx ingress-nginx/ingress-nginx
```
To check nginx ingress controller
```
kubectl get services ingress-nginx-controller

```
### Step 4: Pointing Ingress Loadbalancer in Domain Name Provider to access the App using Domain Name.

To access your application/domain name using browser you can either access using Loadbalancer URL or you can point Loadbalancer URL by adding A record in Domain Provider. you can get the ip of the Loadbalancer URL using nslookup command

```
nslookup <Loadbalancer URL>

```
### Step 5: Configure Cert manager for Nginx Ingress.

once nginx ingress controller setup is done on your Kubernetes cluster, Lets install and configure cert manager using below kubectl command for Kubernetes version 1.16+

```
kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v1.0.1/cert-manager.yaml

```
### Step 6: Kubernetes Nginx Ingress with Letsencrypt.

To configure Kubernetes Nginx Ingress Controller LetsEncrypt , navigate to cert manager acme ingress page, go to Configure Let’s Encrypt Issuer, copy the let’s encrypt issuer yml and change as shown below.

```
sudo nano  letsencrypt-issuer.yml
```
```
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: forms-flow-idm
  namespace: default
spec:
  acme:
    # The ACME server URL
    server: https://acme-v02.api.letsencrypt.org/directory
    # Email address used for ACME registration
    email: my-email@gmail.com
    # Name of a secret used to store the ACME account private key
    privateKeySecretRef:
      name: forms-flow-idm
    # Enable the HTTP-01 challenge provider
    solvers:
    - http01:
        ingress:
          class: nginx
```

```
kubectl apply -f letsencrypt-issuer.yml
```
We have deployed let’s encrypt issuer which issues certificates.
### Step 7: Creating nginx Ingress Letsencrypt TLS Certificate

Now lets create Nginx Ingress Let’s Encrypt TLS certificate for your microservice.

```
sudo nano letsencrypt-cert.yml
```
Modify the Nginx Ingress Let’s Encrypt TLS certificate as per your micro service/domain name
```
apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: forms-flow-idm-<namespace>.aot-technologies.com
  namespace: default
spec:
  secretName: forms-flow-idm-<namespace>.aot-technologies.com-tls
  issuerRef:
    name: forms-flow-idm
    kind: ClusterIssuer
  commonName: forms-flow-idm-<namespace>.aot-technologies.com
  dnsNames:
  - forms-flow-idm-<namespace>.aot-technologies.com
```
once done, it will create a Nginx ingress letsencrypt TLS certificate for domain nginxapp.fosstechnix.info and injects into Kubernetes secrets.

Lets check the certificate is created or not

```
kubectl get certificates
```

```
Important Note:

For creating SSL for each subdomains you have to create separate issuer and certificate,
    1. Name for the certificate should be same as the chart name
    2. While creating issuer, The name should be like <chartname>-<namespace>.<domain name>, 
       Secret name should be <chartname>-<namespace>.<domain name>-tls
       Issuername should be according to the chartname.
which means we have to perform step 6 and step 7 for the charts.
    1. forms-flow-idm
    2. forms-flow-analytics
    3. forms-flow-forms
    4. forms-flow-bpm
    5. forms-flow-api
    6. forms-flow-documents-api
    7. forms-flow-web

```
### Step 8: Installing ebs-csi driver

Add the aws-ebs-csi-driver Helm repository

```
helm repo add aws-ebs-csi-driver https://kubernetes-sigs.github.io/aws-ebs-csi-driver
helm repo update
```
Then install a release of the driver using the chart

```
helm upgrade --install aws-ebs-csi-driver \
    --namespace kube-system \
    aws-ebs-csi-driver/aws-ebs-csi-driver
```

### Step 9: Starting with forms-flow components

Clone Forms-flow repository from the following command
```
git clone https://github.com/AOT-Technologies/forms-flow-ai-charts.git -b kubernetes-eks-oc-beta-1

cd forms-flow-ai-charts/charts

```
### Step 10: Deployment with each components

For deploying each components in EKS with Helm chart follow the steps.

```
1. forms-flow-ai
helm upgrade --install forms-flow-ai forms-flow-ai --set Domain=aot-technologies.com --set postgresql.primary.podSecurityContext.enabled=true --set mongodb.podSecurityContext.enabled=true

2. forms-flow-idm
helm upgrade --install forms-flow-idm forms-flow-idm  --set keycloak.ingress.hostname=forms-flow-idm-default.aot-technologies.com --set keycloak.postgresql.primary.podSecurityContext.enabled=true --set keycloak.ingress.annotations."cert-manager\.io/cluster-issuer"="forms-flow-idm"

3. forms-flow-analytics
helm upgrade --install forms-flow-analytics forms-flow-analytics --set Domain=aot-technologies.com --set ingress.annotations."cert-manager\.io/cluster-issuer"="forms-flow-analytics"

4. forms-flow-forms
helm upgrade --install forms-flow-forms forms-flow-forms --set Domain=aot-technologies.com --set ingress.annotations."cert-manager\.io/cluster-issuer"="forms-flow-forms"

5. forms-flow-bpm
helm upgrade --install forms-flow-bpm forms-flow-bpm --set Domain=aot-technologies.com --set ingress.annotations."cert-manager\.io/cluster-issuer"="forms-flow-bpm"


6. forms-flow-api
helm upgrade --install forms-flow-api forms-flow-api --set Domain=aot-technologies.com --set ingress.annotations."cert-manager\.io/cluster-issuer"="forms-flow-api"


7. forms-flow-documents-api
helm upgrade --install forms-flow-documents-api forms-flow-documents-api --set Domain=aot-technologies.com --set ingress.annotations."cert-manager\.io/cluster-issuer"="forms-flow-documents-api"

8. forms-flow-web
helm upgrade --install forms-flow-web forms-flow-web --set Domain=aot-technologies.com --set ingress.annotations."cert-manager\.io/cluster-issuer"="forms-flow-web"
```


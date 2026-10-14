# Hi, I'm Subbu 👋

**Senior Platform Engineer · DevOps · SRE** — I build the internal platforms that engineering teams ship on.

4+ years designing, automating and operating enterprise-scale platforms on **AWS, Azure and GCP**: Kubernetes (EKS/AKS), Infrastructure as Code, CI/CD, GitOps, Internal Developer Platforms and DevSecOps. Currently Senior DevOps / Platform Engineer at **ADNOC**, Abu Dhabi.

<p>
  <a href="https://www.linkedin.com/in/subbaramireddy"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
  <a href="https://medium.com/@subbaramireddyk"><img src="https://img.shields.io/badge/Medium-000000?style=flat&logo=medium&logoColor=white" alt="Medium" /></a>
  <a href="https://hashnode.com/@subbaramireddy"><img src="https://img.shields.io/badge/Hashnode-2962FF?style=flat&logo=hashnode&logoColor=white" alt="Hashnode" /></a>
  <a href="mailto:ksramireddy11@gmail.com"><img src="https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white" alt="Email" /></a>
</p>

---

## 🏗️ Platforms I've built and run

**CI/CD platform: the heart of software delivery**
- Built, operated and upgraded a **self-hosted Harness runner/delegate platform on Amazon EKS**, the engine every team's builds and deployments ran through.
- Kept the platform on **latest-1 EKS** with **zero-downtime upgrades** (v1.27 → v1.34), including VPC CNI, CoreDNS, kube-proxy and Karpenter (v0.37 → v1.x API).
- Rolled out **GitHub Actions Runner Controller (ARC)** on EKS for scalable, isolated self-hosted runners.
- Migrated and standardised **50+ pipelines** on Harness NextGen and GitHub Actions reusable templates.

**Internal Developer Platform (Backstage)**
- **Bootstrapped self-hosted Backstage** as the organisation's software catalog, with end-to-end **software inventory and maturity tracking** across teams.
- Built self-service workflows integrated with AWS, Azure, GitHub, Jira, Confluence and Grafana, cutting onboarding and access provisioning **from days to minutes**.
- Secured access across **300+ cloud accounts and 500+ users** with guardrails, reducing ticket-driven ops.

**Reliability, cost and security**
- **40–50% cloud cost reduction** through Karpenter, autoscaling and rightsizing.
- **~40% lower MTTR** with Prometheus/Grafana observability and alert tuning; **Velero DR with <15 min recovery** for critical services.
- Policy-as-code and supply-chain controls with **Kyverno, Trivy, Checkov, GitLeaks** and SBOMs.
- Led **GCP onboarding**: landing zone, governance and foundational IaC.

**Now (ADNOC)**
- Onboarding products onto an Internal Developer Platform with **shift-left SDLC**: governed project scaffolding, SAST/SCA quality gates, and multi-stage IaC pipelines to AKS and Azure Container Apps.

---

## 📌 Featured projects

| Project | What it does | Stack |
|---|---|---|
| [**eks-upgrade-planner**](https://github.com/subbaramireddyk/eks-upgrade-planner) | CLI that scans an EKS cluster, finds deprecated APIs and addon incompatibilities, scores risk and generates a step-by-step upgrade plan (Markdown/JSON/HTML) | Python · boto3 · Kubernetes API · Docker · GitHub Actions |
| [**azure-demo**](https://github.com/subbaramireddyk/azure-demo) | AKS + ACR + Key Vault platform in modular Terraform, with workload identity, Secrets Store CSI and Azure DevOps IaC pipelines | Terraform · AKS · Helm · Azure DevOps |
| [**ttms-iac-terraform**](https://github.com/subbaramireddyk/ttms-iac-terraform) → [**ttms-aws-cdk**](https://github.com/subbaramireddyk/ttms-aws-cdk) → [**ttms-eks**](https://github.com/subbaramireddyk/ttms-eks) | One application taken from raw infrastructure to CDK to containers to EKS microservices | Terraform · AWS CDK · Docker · EKS |

---

## 🧰 Toolbox

**Cloud:** AWS · Azure · GCP  
**Kubernetes:** EKS · AKS · Karpenter · Helm · Kustomize · Argo CD · Velero  
**IaC:** Terraform · OpenTofu · AWS CDK · CloudFormation · Crossplane  
**CI/CD:** Harness · GitHub Actions (ARC) · Azure DevOps · Jenkins  
**Platform:** Backstage · self-service automation · access governance  
**Observability:** Prometheus · Grafana · CloudWatch · Fluent Bit  
**Security:** Kyverno · Trivy · Checkov · GitLeaks · SBOM  
**Code:** Python · Bash · Node.js  
**Exploring:** AI for platform ops (anomaly detection, self-healing), GPU platforms (NVIDIA GPU Operator, KubeRay)

## 🎓 Certifications

Certified Kubernetes Administrator (CKA) · AWS Certified Developer – Associate · Microsoft Certified: Azure Developer Associate

---

✍️ I write about Kubernetes, platform engineering and IaC on [Medium](https://medium.com/@subbaramireddyk) and [Hashnode](https://hashnode.com/@subbaramireddy).

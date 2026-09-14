const devopsPipeline = {
  slug: "devops-ci-cd-pipeline",
  title: "DevOps CI/CD Pipeline: Docker, Ansible, Jenkins, Kubernetes",
  cardDesc: "A full CI/CD pipeline: Jenkins builds, tests, and pushes a Docker image on every git push, then deploys it via Ansible onto a Kubernetes cluster scaled across multiple replicas.",
  cardImage: null,
  tags: ["Docker", "Jenkins", "Ansible", "Kubernetes"],
  desc: "A DevOps coursework project building a real end-to-end CI/CD pipeline: Jenkins automates build and test, Docker packages the app, Ansible provisions the infrastructure, and Kubernetes runs it, scaled to multiple replicas.",
  longDesc: [
    "The Jenkins pipeline runs fully automated from a single git push: checkout, build a Docker image, run it in a temporary test container to confirm it starts correctly, then push to Docker Hub.",
    "Infrastructure is handled with Ansible playbooks: one installs kubectl, one installs Minikube, one deploys the image to Kubernetes. The final stage deploys over SSH to a remote AWS server, credentials handled by Jenkins.",
    "The deployment was scaled to 5 replicas with kubectl scale, verified against pod status.",
    "This was my first hands-on CI/CD build, not just reading about DevOps, but wiring Docker, Ansible, Jenkins, and Kubernetes together myself. I came away much more comfortable with the command line and with why infrastructure-as-code matters: scaling or redeploying became one command instead of a manual process.",
  ],
  images: [null, null, null],
  features: [
    "Jenkinsfile pipeline: checkout, build, automated test, push, and SSH deploy",
    "Docker image built, smoke-tested in a throwaway container, then pushed to Docker Hub",
    "Ansible playbooks for kubectl, Minikube, and app deployment to Kubernetes",
    "Deployment scaled to 5 replicas via kubectl, verified against pod status",
    "SSH-based deployment to a remote AWS server, credentials handled by Jenkins",
  ],
  tools: ["Docker", "Docker Hub", "Ansible", "Jenkins", "Kubernetes", "Minikube", "AWS", "GitHub"],
  liveUrl: null,
  codeUrl: "https://github.com/Abed-94t-c/devop-server",
  testNote: false,
};

export default devopsPipeline;
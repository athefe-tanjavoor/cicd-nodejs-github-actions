# 🚀 CI/CD Node.js App Deployment using GitHub Actions, Docker & AWS EC2

This project demonstrates a complete **CI/CD pipeline** for a Node.js application using **GitHub Actions**. The application is containerized using **Docker** and automatically deployed to an **AWS EC2 instance** via secure SSH on every push to the `main` branch.

---

## 📌 Features

✅ Simple Node.js Express app (with health check)  
✅ Dockerized application (`Dockerfile` included)  
✅ GitHub Actions workflow for CI/CD pipeline  
✅ Automatically deploys to AWS EC2 on push to `main`  
✅ Secure EC2 deployment using GitHub Secrets and SSH  
✅ Docker container runs on port **4000** on the EC2 instance  
✅ Easily extendable to support Docker Hub or monitoring tools

---

## 📂 Folder Structure

cicd-nodejs-github-actions/
├── index.js # Node.js Express app
├── package.json # Project dependencies
├── Dockerfile # Docker image configuration
├── .dockerignore # Prevents unneeded files in Docker build
├── .gitignore # Ignores node_modules and local files
├── .github/
│ └── workflows/
│ └── deploy.yml # GitHub Actions CI/CD workflow
└── README.md # This documentation


---

## 🔧 Technologies Used

- **Node.js + Express** – Lightweight web server
- **Docker** – Containerizing the app
- **GitHub Actions** – Automating CI/CD pipeline
- **AWS EC2** – Hosting and deploying the app
- **SSH + GitHub Secrets** – Secure automated deployment
- **Ubuntu Linux** – Environment used on EC2

---

## 🔐 GitHub Secrets (Required)

Add these secrets in your GitHub repository → `Settings > Secrets > Actions`:

| Secret Name   | Description                             |
|---------------|-----------------------------------------|
| `EC2_HOST`    | Your EC2 public IP or DNS               |
| `EC2_USER`    | SSH username (for Ubuntu, use `ubuntu`) |
| `EC2_KEY`     | Private key content of your `.pem` file |

---

## 🛠️ Setup & Usage

### Step 1: Install Dependencies

```bash
npm install

Step 2: Run Locally

node index.js
# Visit: http://localhost:4000

Step 3: Build Docker Image
docker build -t my-node-app .

Step 4: Run Docker Container
docker run -p 4000:4000 my-node-app

⚙️ CI/CD Workflow (deploy.yml)
Triggered on every push to the main branch:

Checks out the code

Logs into EC2 via SSH using secrets

Builds & pushes Docker image (optional)

Pulls image on EC2

Stops old container (if running)

Runs a fresh container on port 4000

🧪 App Output
Once deployed, visit:
http://<your-ec2-ip>:4000/

You should see:
🚀 Deployed via GitHub Actions on EC2

👨‍💻 Author
Aatif – DevOps & Cloud enthusiast working with CI/CD pipelines, automation, and AWS.

📜 License
This project is licensed under the MIT License. 
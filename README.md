# 🧠 Schizo

**Schizo** is a modern, community-powered discussion platform where users can post content, engage in nested comment threads, upvote/downvote contributions, and participate in topic-based communities. Built using **Next.js**, **Sanity**, and **Clerk**, Schizo blends Reddit-style UX with minimal modern aesthetics.

---

## 📖 Table of Contents

- [Features](#-features)  
- [Live Demo](#-live-demo)  
- [Tech Stack](#-tech-stack)  
- [Getting Started](#-getting-started)  
- [Environment Variables](#-environment-variables)  
- [Folder Structure](#-folder-structure)  
- [Screenshots](#-screenshots)  
- [Roadmap](#-roadmap)  
- [Contributing](#-contributing)  
- [License](#-license)  
- [Author](#-author)

---

## 🚀 Features

- 🧵 **Post in communities** (like subreddits)
- 💬 **Nested comment system**
- ⬆️⬇️ **Upvote/downvote posts and comments**
- 🔐 **Clerk-powered authentication**
- 🧠 **Sanity CMS** for storing posts and comment threads
- 📱 **Responsive** and mobile-friendly layout
- 🧩 **Modular and clean UI** for easy customization

---

## 🔗 Live Demo

[🌐 Try Schizo now](https://schizo-pied.vercel.app/) <!-- Replace with your actual live URL -->

---

## 🛠️ Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/)
- **CMS**: [Sanity.io](https://www.sanity.io/)
- **Auth**: [Clerk.dev](https://clerk.dev/)
- **State**: React + Context API
- **Deployment**: Vercel / Your preferred provider

---

## 🧑‍💻 Getting Started

# Home Page
![image](https://github.com/user-attachments/assets/10f44359-9a5b-476c-af3c-bff815c6961b)

# Sign In
![image](https://github.com/user-attachments/assets/3504e5ad-e603-46a1-9979-c2bb26b963c6)

# Nested Comments and Sorted Upvote and Downvote System
![image](https://github.com/user-attachments/assets/6ada0735-4ab5-4bc8-8d5a-dc2e5c077985)

# Community wise Posts
![image](https://github.com/user-attachments/assets/eca689f6-8517-465d-bfaf-b32de153a4ca)

# Dark Mode
![image](https://github.com/user-attachments/assets/3c66c768-1576-4946-8e08-8362582d27ff)


### Prerequisites

- Node.js ≥ 18
- A Clerk account
- A Sanity project

### Installation

```bash
# Clone the repo
git clone https://github.com/your-username/schizo.git

# Move into project folder
cd schizo

# Install dependencies
npm install

# Add env variables (see `.env.example`)
cp .env.example .env.local

# Start development server
npm run dev

# 🚀 LinkUp - Real-Time Social Web App

**LinkUp** is a full-stack MERN application that lets users connect in real-time via text and video. Built with modern tools, it's designed to be fast, secure, and responsive across all devices.

## 🔑 Key Features

- 🔐 **JWT Authentication** – Secure login & signup flows
- 📄 **Onboarding Flow** – Guided onboarding to personalize user experience
- 👥 **Friends System** – Add & manage friends
- 💬 **Real-Time Chat** – Instant messaging using WebSockets
- 📹 **Video Calling** – One-on-one video calls
- 🎨 **32 UI Themes** – Fully customizable UI with theme switching
- 🚨 **Protected Routes** – Role-based and auth-protected routes
- 🛠️ **Custom Hooks** – For better code reusability and cleaner logic
- 🧪 **API Testing** – All endpoints tested for reliability
- 🌐 **Deployment Ready** – Works out-of-the-box on platforms like Vercel and Render

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS, TanStack Query (React Query)
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Real-time**: Socket.io
- **Video Calling**: WebRTC
- **Testing & Tools**: Postman, REST APIs

## 🚀 Setup Instructions

```bash
# Clone the repo
git clone https://github.com/your-username/LinkUp.git
cd LinkUp

# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Setup environment variables (see .env.example)

# Run Backend
cd backend && npm start

# Run Frontend
cd frontend &&  npm run dev

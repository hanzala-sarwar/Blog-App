# 🚀 WriteSphere : AI Powered Blog App

A modern full-stack AI-powered Blog Application built with **Next.js, PostgreSQL, Prisma, ShadCN UI, Clerk Authentication, and Groq AI**. Users can create accounts, publish blogs, improve content with AI, interact with posts through likes and comments, and explore content with search and pagination.

---

## ✨ Features

* 🔐 User authentication with Clerk
* 📝 Create, edit, and delete blog posts
* 🤖 AI-powered content improvement with Groq API
* ✨ Fix grammar, spelling, and improve article clarity using AI
* ❤️ Like blog posts
* 💬 Comment on blogs
* 🔍 Search articles
* 📄 Pagination for better performance
* ☁️ Image upload & storage with Cloudinary
* ⚡ Server Actions for efficient data handling
* 🎨 Modern UI with ShadCN UI
* 🧠 Rich text editor with React Quill

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Authentication:** Clerk
* **AI Integration:** Groq API
* **UI Library:** ShadCN UI
* **Rich Text Editor:** React Quill
* **Image Storage:** Cloudinary
* **Backend Logic:** Server Actions

---

## 📦 Installation

```bash
git clone https://github.com/hanzala-sarwar/blog-app.git

cd blog-app

npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file and add:

```env
# Database
DATABASE_URL=your_postgresql_url
DIRECT_URL=your_direct_database_url

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret

# Groq AI
GROQ_API_KEY=your_groq_api_key
```

---

## 🚀 Run Locally

```bash
npm run dev
```

App runs on:

```bash
http://localhost:3000
```

---

## 📁 Project Structure

```bash
/app            → Next.js App Router
/components     → Reusable UI Components
/actions        → Server Actions
/prisma         → Database Schema & Migrations
/lib            → Utilities & Configurations
/public         → Static Assets
```

---

## 🤖 AI Content Improvement

WriteSphere includes an AI-powered writing assistant using the **Groq API**.

Users can:

* Improve grammar and spelling
* Enhance readability and clarity
* Keep original HTML formatting intact
* Generate cleaner and more professional blog content instantly

Powered by:

* `llama-3.3-70b-versatile`

---

## 🔥 Key Highlights

* Uses **Server Actions** instead of traditional REST APIs
* Fully built with **Next.js App Router**
* Optimized database queries using **Prisma ORM**
* Secure authentication with **Clerk**
* AI-assisted content writing workflow
* Clean and reusable UI components with **ShadCN UI**
* Scalable and production-ready architecture

---

## 👤 Author

**hanzala-sarwar**

* GitHub: :contentReference[oaicite:0]{index=0}

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

--- 
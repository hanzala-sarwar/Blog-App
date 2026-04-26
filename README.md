 # 🚀 WriteSphere : Blog App

A modern full-stack Blog Application built with **Next.js, PostgreSQL, Prisma, ShadCN UI, and Clerk Authentication**. Users can create accounts, publish blogs, interact with posts through likes and comments, and explore content with search and pagination.

---

## ✨ Features

* 🔐 User authentication with Clerk
* 📝 Create, edit, and delete blog posts
* ❤️ Like blog posts
* 💬 Comment on blogs
* 🔍 Search articles
* 📄 Pagination for better performance
* ☁️ Image upload & storage with Cloudinary
* ⚡ Server Actions for efficient data handling
* 🎨 Modern UI with ShadCN

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Authentication:** Clerk
* **UI:** ShadCN UI
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
DATABASE_URL=your_postgresql_url

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

---

## 🚀 Run Locally

```bash
npm run dev
```

App runs on:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
/app            → Next.js App Router
/components     → UI Components (ShadCN)
/actions        → Server Actions
/prisma         → Database schema
/lib            → Utilities & configs
```

---

## 🔥 Key Highlights

* Uses **Server Actions** instead of traditional APIs
* Optimized queries with **Prisma ORM**
* Clean and reusable UI components with **ShadCN**
* Scalable and production-ready structure

---

## 👤 Author

**hanzala-sarwar**

* GitHub: https://github.com/hanzala-sarwar

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

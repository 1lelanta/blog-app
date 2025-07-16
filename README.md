# 📝 Blog App

A modern full-stack blog application built with **React**, **Node.js**, **Express**, and **MongoDB**. Users can read, publish, and manage blog posts through a clean and responsive interface.

👉 **Live Site:** [https://blog-app-1lelanta.vercel.app](https://blog-app-1lelanta.vercel.app)

---

## 🚀 Features

- Admin authentication (login/logout)
- Create, edit, publish/unpublish, and delete blogs
- Real-time search and category filtering
- Responsive design for mobile and desktop
- Protected routes using JWT-based authentication
- Blog listing with date, title, and category display
- Framer Motion animations for UI polish

---

## 🧰 Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Framer Motion
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- dotenv

---

## 📁 Project Structure

```
blog-app/
├── client/         # React frontend
│   └── src/
├── server/         # Node.js backend
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── ...
└── .env
```

---

## ⚙️ Environment Variables

Create a `.env` file in the `server/` directory with the following content:

```
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
MONGODB_URI=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint

GEMINI_API_KEY=your_gemini_api_key
```

> ⚠️ Never share or commit your real credentials to GitHub.

---

## 🛠️ Getting Started Locally

### 1. Clone the repository

```bash
git clone https://github.com/1lelanta/blog-app.git
cd blog-app
```

### 2. Install dependencies

```bash
# Backend
cd server
npm install

# Frontend
cd ../client
npm install
```

### 3. Run the development servers

```bash
# Backend
cd server
npm run dev

# Frontend (in a new terminal)
cd client
npm run dev
```

Visit:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

## 🚀 Deployment

### Frontend
Deployed on **Vercel**  
✅ Live: [https://blog-app-1lelanta.vercel.app](https://blog-app-1lelanta.vercel.app)

### Backend
Deploy on **Render**, **Railway**, or **Cyclic**:
- Set environment variables in the hosting dashboard
- Enable CORS
- Update frontend API base URL to point to deployed backend

---

## 🧪 Admin Login

Use the credentials from your `.env` file to access the admin dashboard and manage blog posts.

---

## 👨‍💻 Author

**Lelisa Tesfaye**  
GitHub: [@1lelanta](https://github.com/1lelanta)

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

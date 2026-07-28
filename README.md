# 🎵 Music Streaming App

A full-stack Music Streaming Application built using the MERN Stack. Users can register, log in, browse songs, and play music. Admins can upload new songs.

## 🚀 Features

- User Registration & Login
- JWT Authentication using Cookies
- Browse all songs
- Music Player with Play/Pause
- Skip Forward & Skip Back
- Seek Bar (Progress Slider)
- Admin-only Music Upload
- Responsive UI

## 🛠️ Tech Stack

### Frontend

- React
- React Router
- Axios
- Tailwind CSS
- React Toastify

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- Multer

## 📂 Project Structure

```
music-app/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
└── backend/
    ├── controllers/
    ├── routes/
    ├── middleware/
    ├── models/
    └── uploads/
```

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/music-app.git
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## 🔐 Environment Variables

Create a `.env` file in the backend.

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Create a `.env` file in the frontend.

```env
VITE_API_URL=http://localhost:8000/api
```

## 📸 Screenshots

Add screenshots here.

- Home Page
- Login Page
- Register Page
- Upload Music
- Music Player

## 📌 Future Improvements

- Playlist Feature
- Like Songs
- Search Songs
- User Profile
- Dark Mode
- Recently Played

## 👨‍💻 Author

Sahil Patil

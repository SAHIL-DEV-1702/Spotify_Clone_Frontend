
import './App.css'

import Login from './pages/Login.jsx'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import UploadMusic from "./pages/UploadMusic.jsx"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from './pages/Landing.jsx'



function App() {



  return (

    <>
      <Routes>

        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<UploadMusic />} />


      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
        limit={1}
      />




    </>

  )
}

export default App


import './App.css'

import Login from './pages/Login.jsx'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'



function App() {

  return (
    <>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        

      </Routes>

      <div className="img-card-container min-h-screen w-full bg-white-40 border-2 border-black flex flex-col justify-center overflow-scroll hide-scrollbar">

        <Home />

        <div className='flex gap-8 border-black flex-wrap justify-center-safe'>


        </div>



      </div>


    </>
  )
}

export default App

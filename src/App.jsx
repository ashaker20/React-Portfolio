import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'

function App() {

  useEffect(() => {
    document.title = "Adnan's Portfolio"
  }, [])

  return (
    <Router>
      <div className='app' >
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<h1>About</h1>} />
          <Route path="/dashboard" element={<h1>Dashboard</h1>} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App

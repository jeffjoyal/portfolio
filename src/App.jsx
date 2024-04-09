import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import  { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience/>} />
          </Routes>
          <Footer />
        </Router>
      </div>
  )
}

export default App

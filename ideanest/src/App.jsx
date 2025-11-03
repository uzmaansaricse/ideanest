import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import RefundPolicy from './pages/RefundPolicy'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App

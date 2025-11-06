import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Career from './pages/Career'
import RefundPolicy from './pages/RefundPolicy'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import WebDevelopment from './pages/WebDevelopment'
import StartYourBusiness from './pages/StartBusiness'
import DigitalMarketing from './pages/DigitalMarketting'
import Funding from './pages/Funding'
import Certificates from './pages/Certificates'
import ScrollToTop from './components/ScrollToTop'
import About from './pages/About'
import Blog from './pages/Blog'
import Projects from './pages/Projects'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/start-business" element={<StartYourBusiness/>} />
        <Route path="/digital-marketing" element={<DigitalMarketing/>} />
        <Route path="/funding" element={<Funding/>} />
        <Route path="/certificates" element={<Certificates/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/*" element={<Home/>} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App

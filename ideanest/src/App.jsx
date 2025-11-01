import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    
      <Navbar/>

      

      <Home/>
      <Footer/>
    </>
  )
}

export default App
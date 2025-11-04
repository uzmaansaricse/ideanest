import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../public/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-yellow-400 shadow-lg shadow-yellow-400/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-300">
            <img 
              src={logo} 
              alt="IdeaNest Logo" 
              className="h-24 w-auto hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] transition-all duration-300"
            />
          
          </div>

          {/* Hamburger Menu Icon */}
          <div 
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={toggleMenu}
          >
            <span className={`w-7 h-0.5 bg-yellow-500 rounded transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-7 h-0.5 bg-yellow-500 rounded transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-7 h-0.5 bg-yellow-500 rounded transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex list-none gap-8 m-0 p-0">
            <li className="relative group">
              <Link
                to="/"
                className="text-gray-800 text-lg font-semibold hover:text-yellow-500 transition-colors duration-300 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Home
              </Link>
            </li>
            <li className="relative group">
              <a
                href="#services"
                className="text-gray-800 text-lg font-semibold hover:text-yellow-500 transition-colors duration-300 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Services
              </a>
            </li>
            <li className="relative group">
              <Link
                to="/career"
                className="text-gray-800 text-lg font-semibold hover:text-yellow-500 transition-colors duration-300 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Career
              </Link>
            </li>
                <li className="relative group">
              <Link
                to="/refund-policy"
                className="text-gray-800 text-lg font-semibold hover:text-yellow-500 transition-colors duration-300 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Refund Policy
              </Link>
            </li>
            <li className="relative group">
              <Link
                to="/contact"
                className="text-gray-800 text-lg font-semibold hover:text-yellow-500 transition-colors duration-300 pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-1 after:bg-gradient-to-r after:from-yellow-400 after:to-yellow-500 after:transition-all after:duration-300 group-hover:after:w-full"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-48' : 'max-h-0'}`}
        >
          <ul className="flex flex-col bg-yellow-50 border-t-2 border-yellow-400 m-0 p-0">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block w-full px-6 py-4 text-gray-800 hover:bg-yellow-100 hover:border-l-4 hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300 text-base font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="block w-full px-6 py-4 text-gray-800 hover:bg-yellow-100 hover:border-l-4 hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300 text-base font-semibold"
              >
                Services
              </a>
            </li>
            <li>
              <Link
                to="/career"
                onClick={closeMenu}
                className="block w-full px-6 py-4 text-gray-800 hover:bg-yellow-100 hover:border-l-4 hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300 text-base font-semibold"
              >
                Career
              </Link>
            </li>
                 <li>
              <Link
                to="/refund-policy"
                onClick={closeMenu}
                className="block w-full px-6 py-4 text-gray-800 hover:bg-yellow-100 hover:border-l-4 hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300 text-base font-semibold"
              >
                Refund Policy
              </Link>
            </li>


            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className="block w-full px-6 py-4 text-gray-800 hover:bg-yellow-100 hover:border-l-4 hover:border-yellow-500 hover:text-yellow-600 transition-all duration-300 text-base font-semibold"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

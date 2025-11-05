import React from 'react'
import { Mail, Phone, MapPin, Heart, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'


const Footer = () => {
  const currentYear = new Date().getFullYear()


  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/web-development' },
      { name: 'Career', href: '/career' },
      { name: 'Refund Policy', href: '/refund-policy' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Startup India Certificate', href: '#startup' },
      { name: 'MSME Certificate', href: '#msme' },
      { name: 'GST Registration', href: '#gst' },
      { name: 'ISO 9001:2015 Certification', href: '#iso' },
      { name: 'Trademark & Company Registration', href: '#trademark' },
      { name: 'Funding & Investment Support', href: '#funding' },
      { name: 'Web Design & Development', href: '#web' },
      { name: 'Digital Marketing', href: '#digital' },
    ],
  }


  return (
    <footer className="bg-white text-gray-700 relative">
      {/* Top yellow gradient border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 z-10" />


      <div className="bg-gradient-to-b from-white to-gray-50 pt-1">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Two-column Layout: Info + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column: Info & Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Brand Info */}
              <div>
                <h2 className="text-2xl font-extrabold bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-3">
                  IdeaNest
                </h2>
                <p className="text-sm leading-relaxed mb-4">
                  Empowering startups to achieve their full potential with strategic growth, certification, and tech solutions.
                </p>
              </div>


              {/* Company Links */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-yellow-500 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>


              {/* Services Links */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-yellow-500 transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


            {/* Right Column: Map & Contact */}
            <div className="space-y-8">
              {/* Embedded Map - Fixed with proper aspect ratio */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 w-full h-96">
                <iframe
                  title="IdeaNest Location"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3502.5044547049756!2d77.3877339755002!3d28.614639475674544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM2JzUyLjciTiA3N8KwMjMnMjUuMSJF!5e0!3m2!1sen!2sin!4v1762326532162!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>


              {/* Contact Information & Social */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Contact Information */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Get In Touch</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-gray-900" />
                      </div>
                      <div>
                        <a href="tel:+91 9910291753" className="text-gray-900 font-semibold hover:text-yellow-500 transition-colors text-sm">
                         +91 99102 91753
                        </a>
                      </div>
                    </div>


                     <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-gray-900" />
                      </div>
                      <div>
                        <a href="tel:+91 96709 14961" className="text-gray-900 font-semibold hover:text-yellow-500 transition-colors text-sm">
                        +91 96709 14961
                        </a>
                      </div>
                    </div>


                     <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="w-4 h-4 text-gray-900" />
                      </div>
                      <div>
                        <a href="tel: +91 80921 05492" className="text-gray-900 font-semibold hover:text-yellow-500 transition-colors text-sm">
                         +91 80921 05492
                        </a>
                      </div>
                    </div>


                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="w-4 h-4 text-gray-900" />
                      </div>
                      <div>
                        <a href="mailto:Ideanestglobalventure@gmail.com" className="text-gray-900 font-semibold hover:text-yellow-500 transition-colors text-sm">
                         Ideanestglobalventure@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mt-1 flex-shrink-0">
                        <MapPin className="w-4 h-4 text-gray-900" />
                      </div>
                      <div>
                        <p className="text-gray-900 font-semibold text-sm">
                          B128 B block <br /> 2nd floor  <br /> noida sector 63 <br /> 201031
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Social Media Links */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h4>
                  <div className="flex gap-3 flex-wrap">
                    <a
                      href="https://www.linkedin.com/company/ideanest-global-ventures/jobs/"
                      className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 group"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                    </a>
                    {/* <a
                      href="https://twitter.com"
                      className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 group"
                    >
                      <Twitter className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                    </a>
                    <a
                      href="https://www.facebook.com"
                      className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 group"
                    >
                      <Facebook className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                    </a> */}
                    <a
                      href="https://www.instagram.com/ideanest_global?igsh=MWdleHJxc2d6MndrYw=="
                      className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 group"
                    >
                      <Instagram className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent my-8"></div>


          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>
              © {currentYear}{' '}
              <span className="font-bold text-gray-900">IdeaNest</span>. All rights reserved. Made with{' '}
              <Heart className="w-4 h-4 text-red-500 inline-block animate-pulse mx-1" />
              by our team.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-yellow-500 transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-yellow-500 transition-colors font-medium">
                Terms of Service
              </a>
              <a href="/return-policy" className="hover:text-yellow-500 transition-colors font-medium">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


export default Footer

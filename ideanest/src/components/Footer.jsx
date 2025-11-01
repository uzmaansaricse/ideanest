import React, { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 


  ArrowRight,
  Heart
} from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [hoveredSocial, setHoveredSocial] = useState(null)
  const [subscribedEmail, setSubscribedEmail] = useState(null)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setSubscribedEmail(email)
      setEmail('')
      setTimeout(() => setSubscribedEmail(null), 3000)
    }
  }

  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Services', href: '#services' },
      { name: 'Blog', href: '#blog' },
      { name: 'Careers', href: '#careers' }
    ],
    services: [
      { name: 'Business Strategy', href: '#strategy' },
      { name: 'Tech Solutions', href: '#tech' },
      { name: 'Growth Hacking', href: '#growth' },
      { name: 'Consulting', href: '#consulting' }
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'FAQ', href: '#faq' },
      { name: 'Support', href: '#support' },
      { name: 'Community', href: '#community' }
    ]
  }

//   const socialLinks = [
//     { icon: Facebook, label: 'Facebook', href: '#facebook', delay: '0' },
//     { icon: Twitter, label: 'Twitter', href: '#twitter', delay: '100' },
//     { icon: LinkedIn, label: 'LinkedIn', href: '#linkedin', delay: '200' },
//     { icon: Instag label: 'Instagram', href: '#instagram', delay: '300' }
//   ]

  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="relative overflow-hidden border-b-4 border-yellow-400">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Newsletter content */}
            <div className="transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-lg">
                Get the latest insights and updates about startup growth and business enhancement strategies.
              </p>
            </div>

            {/* Newsletter form */}
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 bg-gray-100 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-yellow-400 transition-all duration-300 font-medium"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Success message */}
              {subscribedEmail && (
                <div className="absolute top-full mt-3 left-0 right-0 bg-green-100 border-l-4 border-green-500 p-3 rounded animate-pulse">
                  <p className="text-green-700 font-semibold text-sm">
                    ✓ Thanks for subscribing! Check your email.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
                <h2 className="text-2xl font-black bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent mb-2">
                  IdeaNest
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Empowering startups to achieve their full potential through strategic business enhancement.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <a 
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm">+1 (234) 567-890</span>
                </a>
                <a 
                  href="mailto:info@ideanest.com"
                  className="flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">info@ideanest.com</span>
                </a>
                <div className="flex items-start gap-2 text-gray-700">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">123 Startup Avenue, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map((column, idx) => (
              <div key={idx} className="group">
                <h4 className="text-lg font-black text-gray-900 mb-6 group-hover:text-yellow-500 transition-colors duration-300">
                  {column[0] === 'company' ? 'Company' : column[0] === 'services' ? 'Services' : 'Resources'}
                </h4>
                <ul className="space-y-3">
                  {column[1].map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-yellow-500 font-medium transition-all duration-300 flex items-center gap-2 group/link"
                      >
                        <span className="inline-block w-0 h-0.5 bg-yellow-400 group-hover/link:w-4 transition-all duration-300"></span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent my-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left text-gray-600 text-sm">
              <p>
                © {currentYear} IdeaNest. All rights reserved. Made with{' '}
                <Heart className="w-4 h-4 text-red-500 inline-block mx-1 animate-pulse" />
                by our team
              </p>
            </div>

            {/* Social Links
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon
                return (
                  <a
                    key={idx}
                    href={social.href}
                    aria-label={social.label}
                    onMouseEnter={() => setHoveredSocial(idx)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`relative w-10 h-10 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center text-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-yellow-400/50 ${
                      hoveredSocial === idx ? 'scale-110' : ''
                    }`}
                    style={{
                      transitionDelay: `${social.delay}ms`
                    }}
                  >
                    <Icon className="w-5 h-5 transition-transform duration-300" />
                  </a>
                )
              })}
            </div> */}

            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#privacy" className="hover:text-yellow-500 transition-colors duration-300 font-medium">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-yellow-500 transition-colors duration-300 font-medium">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </footer>
  )
}

export default Footer

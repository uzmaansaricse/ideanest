import React from 'react'
import { Mail, Phone, MapPin, Heart, Linkedin, Instagram } from 'lucide-react'

const WhatsappSVG = (props) => (
  <svg width="28" height="28" viewBox="0 0 32 32" {...props}>
    <circle cx="16" cy="16" r="16" fill="#25D366"/>
    <path d="M23.825 19.744c-.35-.175-2.06-1.017-2.382-1.133-.321-.117-.556-.175-.792.175-.233.35-.907 1.133-1.112 1.367-.204.233-.408.262-.758.087-.35-.175-1.477-.544-2.817-1.734-1.042-.928-1.745-2.075-1.952-2.425-.204-.35-.022-.539.154-.713.159-.158.35-.409.523-.611.175-.204.233-.35.35-.583.117-.233.058-.438-.03-.613-.088-.175-.792-1.913-1.085-2.614-.286-.675-.578-.583-.792-.593l-.672-.011c-.233 0-.614.087-.936.408-.321.321-1.221 1.192-1.221 2.908 0 1.717 1.25 3.374 1.426 3.609.175.233 2.457 3.736 5.95 5.091.832.286 1.48.457 1.987.583.835.213 1.597.184 2.198.112.67-.078 2.06-.845 2.35-1.664.288-.817.288-1.518.204-1.664-.087-.145-.318-.23-.663-.403z" fill="#fff"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/web-development' },
       { name: 'Projects', href: '/project' },
      { name: 'Blog', href: '/blog' },
      { name: 'Career', href: '/career' },
      { name: 'Refund Policy', href: '/refund-policy' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Startup India Certificate', href: '/certificates' },
      { name: 'MSME Certificate', href: '/certificates' },
      { name: 'GST Registration', href: '/certificates' },
      { name: 'All Types of ISO Certification', href: '/certificates' },
      { name: 'Trademark & Company Registration', href: '/certificates' },
      { name: 'Funding & Investment Support', href: '/funding' },
      { name: 'Web Design & Development', href: '/web-development' },
      { name: 'Digital Marketing', href: '/digital-marketing' },
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
              {/* Embedded Map */}
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
              {/* Contact Info & Social */}
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
                        <a href="tel:+91 80921 05492" className="text-gray-900 font-semibold hover:text-yellow-500 transition-colors text-sm">
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
                          B128, B-block, 2nd floor, Noida, Sector-63,PIN-201031
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
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
                    </a>
                    <a
                      href="https://www.instagram.com/ideanest_global?igsh=MWdleHJxc2d6MndrYw=="
                      className="w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-yellow-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/50 group"
                      aria-label="Instagram"
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
              <a href="/contact" className="hover:text-yellow-500 transition-colors font-medium">
                Contact Us
              </a>
              <a href="/career" className="hover:text-yellow-500 transition-colors font-medium">
                Careers
              </a>
              <a href="/return-policy" className="hover:text-yellow-500 transition-colors font-medium">
                Return Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Icon */}
      <a
        href="https://wa.me/919910291753"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed z-50 bottom-8 right-8 flex items-center justify-center  bg-green-400 rounded-full w-14 h-14 shadow-lg transition-transform hover:scale-110"
        style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
      >
        <WhatsappSVG />
      </a>
    </footer>
  )
}

export default Footer

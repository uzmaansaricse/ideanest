import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Zap, TrendingUp, Users, Code, Lightbulb, Target } from 'lucide-react'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  // Slider data
  const slides = [
    {
      title: "Transform Your Startup Vision",
      description: "We help early-stage startups turn ideas into reality with expert guidance and strategic enhancement",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
      icon: Lightbulb
    },
    {
      title: "Accelerate Business Growth",
      description: "Scale your startup with data-driven strategies and proven business methodologies",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
      icon: TrendingUp
    },
    {
      title: "Build Exceptional Teams",
      description: "Connect with talented professionals and build a team that drives innovation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
      icon: Users
    }
  ]

  // Services data
  const services = [
    {
      id: 1,
      title: "Business Strategy",
      description: "Comprehensive business planning and strategic roadmap development",
      icon: Target,
      color: "from-yellow-400 to-yellow-500"
    },
    {
      id: 2,
      title: "Tech Solutions",
      description: "Cutting-edge technology implementation for your startup ecosystem",
      icon: Code,
      color: "from-yellow-500 to-orange-400"
    },
    {
      id: 3,
      title: "Growth Hacking",
      description: "Innovative strategies to accelerate user acquisition and revenue",
      icon: Zap,
      color: "from-orange-400 to-red-400"
    }
  ]

  // Handle scroll animation
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="bg-white">
      {/* Hero Section with 3D Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 -left-40 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div 
            className="absolute top-40 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div 
            className="absolute -bottom-8 left-20 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
            style={{ transform: `translateY(${scrollY * 0.7}px)` }}
          ></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className="transform transition-all duration-700"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 bg-clip-text text-transparent">
                Empower Your Startup
              </span>
              <br />
              <span className="text-gray-800">Journey to Success</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              IdeaNest provides comprehensive business enhancement services designed specifically for ambitious startups looking to scale and succeed in today's competitive market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-500 font-bold rounded-lg hover:bg-yellow-50 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-yellow-500 text-4xl">↓</div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">IdeaNest?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how we transform startups into thriving businesses
            </p>
          </div>

          {/* Slider */}
          <div className="relative h-96 sm:h-[500px] rounded-2xl overflow-hidden bg-white shadow-2xl">
            {/* Slides */}
            {slides.map((slide, index) => {
              const Icon = slide.icon
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    {/* Image */}
                    <div 
                      className="hidden md:block relative overflow-hidden"
                      style={{
                        transform: index === currentSlide ? 'scale(1)' : 'scale(1.1)',
                        transition: 'transform 0.8s ease-out'
                      }}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20"></div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center items-start p-8 sm:p-12 bg-gradient-to-br from-white to-gray-50">
                      <div className="mb-6">
                        <Icon className="w-16 h-16 text-yellow-500" />
                      </div>
                      <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                        {slide.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {slide.description}
                      </p>
                      <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300">
                        Explore Now
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-yellow-400 hover:bg-yellow-500 text-gray-900 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-yellow-400/50"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-yellow-500 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with 3D Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored for startup success
            </p>
          </div>

          {/* Services grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.id}
                  className="group relative h-96 cursor-pointer"
                  style={{
                    transform: `perspective(1000px) rotateY(0deg)`,
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `perspective(1000px) rotateY(-5deg) rotateX(5deg)`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `perspective(1000px) rotateY(0deg)`
                  }}
                >
                  {/* Card background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-all duration-300`}></div>

                  {/* Card content */}
                  <div className="relative h-full bg-white border-2 border-gray-100 rounded-2xl p-8 hover:border-yellow-400 hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="absolute -top-6 left-8 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-gray-900" />
                    </div>

                    <div className="mt-12 h-full flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-gray-900 mb-4">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex items-center text-yellow-500 font-bold group-hover:translate-x-2 transition-transform duration-300 mb-12">
                        Learn more →
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Startups Helped" },
              { number: "$2B+", label: "Total Raised" },
              { number: "95%", label: "Success Rate" },
              { number: "50+", label: "Team Members" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 opacity-80"></div>
            <div 
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                animation: 'pulse 3s ease-in-out infinite'
              }}
            ></div>

            {/* Content */}
            <div className="relative px-8 sm:px-12 py-16 text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                Ready to Transform Your Startup?
              </h2>
              <p className="text-lg sm:text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                Join hundreds of successful startups that have partnered with IdeaNest to achieve their business goals.
              </p>
              <button className="px-10 py-4 bg-gray-900 text-white font-bold rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Start Your Journey Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add animation styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default Home

import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Zap, TrendingUp, Users, Code, Lightbulb, Target, Award, FileText, Shield, PenTool, DollarSign, Monitor, Megaphone, Star, Quote, CheckCircle, ArrowRight } from 'lucide-react'
import herovideo from '../assets/hero.mp4'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [startupsCount, setStartupsCount] = useState(0)
  const [raisedCount, setRaisedCount] = useState(0)
  const [successCount, setSuccessCount] = useState(0)
  const [teamCount, setTeamCount] = useState(0)


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
      id: 4,
      title: "Startup India Certificate",
      description: "Official recognition and benefits under the Startup India initiative",
      icon: Award,
      color: "from-red-400 to-pink-400"
    },
    {
      id: 5,
      title: "MSME Certificate",
      description: "Micro, Small and Medium Enterprises registration for government benefits",
      icon: FileText,
      color: "from-pink-400 to-purple-400"
    },
    {
      id: 6,
      title: "GST Registration",
      description: "Complete GST compliance and registration services for your business",
      icon: Shield,
      color: "from-purple-400 to-indigo-400"
    },
    {
      id: 7,
      title: "ISO 9001:2015 Certification",
      description: "Quality management system certification for international standards",
      icon: PenTool,
      color: "from-indigo-400 to-blue-400"
    },
    {
      id: 8,
      title: "Trademark & Company Registration",
      description: "Legal protection for your brand and complete company incorporation",
      icon: DollarSign,
      color: "from-blue-400 to-cyan-400"
    },
    {
      id: 9,
      title: "Funding & Investment Support",
      description: "Connect with investors and secure funding for your startup growth",
      icon: Monitor,
      color: "from-cyan-400 to-teal-400"
    },
    {
      id: 10,
      title: "Web Design & Development",
      description: "Professional website creation and digital presence enhancement",
      icon: Megaphone,
      color: "from-teal-400 to-green-400"
    },
    {
      id: 11,
      title: "Digital Marketing",
      description: "Comprehensive online marketing strategies to boost your brand visibility",
      icon: TrendingUp,
      color: "from-green-400 to-lime-400"
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


  // Animate counters
  useEffect(() => {
    const animateCounter = (setter, target, duration = 2000) => {
      const increment = target / (duration / 16) // 60fps
      let current = 0
      let timer


      const animate = () => {
        timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            setter(Math.floor(current))
            clearInterval(timer)
            // Pause for 3 seconds at target
            setTimeout(() => {
              current = 0
              setter(0)
              animate() // Restart animation
            }, 3000)
          } else {
            setter(Math.floor(current))
          }
        }, 16)
      }


      animate()
      return () => clearInterval(timer)
    }


    const timers = []


    // Start animations when component mounts
    const timeout = setTimeout(() => {
      timers.push(
        animateCounter(setStartupsCount, 500),
        animateCounter(setRaisedCount, 2000), // $2B
        animateCounter(setSuccessCount, 95),
        animateCounter(setTeamCount, 50)
      )
    }, 500) // Small delay to ensure component is rendered


    return () => {
      clearTimeout(timeout)
      timers.forEach(cleanup => cleanup && cleanup())
    }
  }, [])


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }


  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }


  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={herovideo}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop"
          style={{opacity: 0.35}}
        ></video>

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden z-5 pointer-events-none">
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
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
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
              { count: startupsCount, suffix: "+", label: "Startups Helped" },
              { count: raisedCount, suffix: "B+", prefix: "$", label: "Total Raised" },
              { count: successCount, suffix: "%", label: "Success Rate" },
              { count: teamCount, suffix: "+", label: "Team Members" }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center transform hover:scale-110 transition-transform duration-300"
              >
                <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                  {stat.prefix || ""}{stat.count}{stat.suffix}
                </div>
                <div className="text-gray-700 font-semibold text-sm sm:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-6">
                About <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">IdeaNest</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded with a vision to empower the next generation of entrepreneurs, IdeaNest has been at the forefront of startup innovation since 2018. We believe that every great business starts with a great idea, and our mission is to provide the tools, guidance, and support needed to turn those ideas into reality.
              </p>


              {/* Values */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Innovation First</h4>
                    <p className="text-gray-600">We embrace cutting-edge technologies and methodologies to deliver exceptional results.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Personalized Approach</h4>
                    <p className="text-gray-600">Every startup is unique, and we tailor our services to meet your specific needs and goals.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Proven Track Record</h4>
                    <p className="text-gray-600">With over 500 successful startups and $2B+ in funding secured, our results speak for themselves.</p>
                  </div>
                </div>
              </div>


              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
                Learn More About Us
              </button>
            </div>


            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="IdeaNest Team"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>


              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Expert Team</div>
                  </div>
                </div>
              </div>


              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center">
                    <Award className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              What Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the startups that have transformed their businesses with IdeaNest
            </p>
          </div>


          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                company: "TechFlow Solutions",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
                rating: 5,
                text: "IdeaNest helped us secure $2M in funding and scale from 5 to 50 employees in just 18 months. Their strategic guidance was invaluable."
              },
              {
                name: "Marcus Rodriguez",
                company: "GreenEnergy Corp",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
                rating: 5,
                text: "The ISO certification process was seamless thanks to IdeaNest's expertise. We've seen a 40% increase in client trust and partnerships."
              },
              {
                name: "Priya Patel",
                company: "EduTech Innovations",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
                rating: 5,
                text: "From GST registration to trademark protection, IdeaNest handled everything professionally. Their web development team created an amazing platform for us."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>


                <Quote className="w-8 h-8 text-yellow-400 mb-4" />


                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>


                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Ready to Start Your <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Journey?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Let's discuss how we can help transform your startup vision into reality
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Consultation</h3>
              <p className="text-gray-600">Get expert advice tailored to your startup needs</p>
            </div>


            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Planning</h3>
              <p className="text-gray-600">Develop a comprehensive roadmap for success</p>
            </div>


            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Continuous guidance as your business grows</p>
            </div>
          </div>


          <div className="text-center">
            <button className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105 mr-4">
              Schedule Consultation
            </button>
            <button className="px-10 py-4 border-2 border-yellow-400 text-yellow-500 font-bold rounded-lg hover:bg-yellow-50 transition-all duration-300">
              View Our Services
            </button>
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

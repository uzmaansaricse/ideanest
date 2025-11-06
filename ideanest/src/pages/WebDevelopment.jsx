import React, { useState } from 'react'
import { ArrowRight, Code, Globe, Smartphone, Zap, Users, Target, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


const WebDevelopment = () => {
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Website Development Services",
      color: "from-blue-500 to-blue-600",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=500&fit=crop",
      mainDescription: "Elevate your online presence with Ideanest cutting-edge Website Development Services. Our seasoned team of developers crafts dynamic and user-centric websites, ensuring your brand stands out in the digital landscape. We specialize in creating responsive, visually stunning, and highly functional websites tailored to meet the unique needs of your business.",
      secondDescription: "From conceptualization to deployment, Ideanest is committed to delivering a seamless website development experience. Our services encompass e-commerce platforms, content management systems, and custom web applications, all designed to enhance user engagement and drive business growth. We prioritize user experience, performance, and scalability, employing the latest technologies and industry best practices.",
      thirdDescription: "Trust Ideanest to transform your digital vision into a compelling online reality. With our Website Development Services, unlock the potential for increased visibility, customer interaction, and overall business success in the ever-evolving online landscape."
    },
    {
      id: 2,
      title: "Application Development",
      color: "from-amber-500 to-amber-600",
      image: "https://www.rishabhsoft.com/wp-content/uploads/2018/07/Android-App-Development-Process-1.jpg",
      mainDescription: "Embark on a transformative journey with Ideanest and elevate your business through our cutting-edge Application Development services. Our team of skilled professionals harnesses the latest technologies to craft bespoke applications tailored to meet your unique business requirements. Whether you're aiming to enhance user experiences, streamline operations, or expand your digital footprint, Ideanest is your dedicated partner in turning visions into reality.",
      secondDescription: "We prioritize innovation and efficiency, ensuring that each application we develop is not just functional but also aligns seamlessly with your business objectives. From concept to deployment, our robust development process guarantees a smooth and timely delivery, empowering your business with the digital tools it needs to thrive in today's dynamic landscape.",
      thirdDescription: "Choose Ideanest for Application Development that goes beyond expectations, propelling your business to new heights in the ever-evolving digital realm."
    },
    {
      id: 3,
      title: "Shopify/E-Commerce Website Development",
      color: "from-orange-500 to-orange-600",
      image: "https://raoinformationtechnology.com/wp-content/uploads/2021/03/E-commerce-company.jpg",
      mainDescription: "At Ideanest, Our expert team specializes in crafting seamless and user-friendly online platforms that amplify your brand's digital presence. Whether you're launching a new e-commerce venture or seeking to revamp your existing Shopify store, we offer bespoke solutions tailored to your unique needs.",
      secondDescription: "We understand the dynamic landscape of online retail and prioritize creating visually appealing, responsive, and feature-rich websites. From user-friendly navigation to secure payment gateways, we ensure a top-notch shopping experience for your customers. With a keen eye on design trends and e-commerce best practices, we empower businesses to thrive in the competitive online marketplace.",
      thirdDescription: "Choose Ideanest for Shopify/E-commerce Website Development, and embark on a journey of digital success for your brand."
    },
    {
      id: 4,
      title: "WordPress Website Development",
      color: "from-green-500 to-green-600",
      image: "https://www.digitalsilk.com/wp-content/uploads/2024/05/Digital-Silk-Blog-hero-image-1200x675-V2-36.jpg",
      mainDescription: "At Ideanest, we understand the significance of a compelling online presence in today's competitive landscape. Our WordPress Website Development services ensure a seamless blend of creativity and functionality, providing a user experience that captivates and converts. Whether you're establishing a new website or revamping an existing one, our experts at Ideanest are committed to delivering a visually stunning and highly functional WordPress website that reflects the essence of your brand.",
      secondDescription: "Ignite your online journey with Ideanest and unlock the full potential of your digital presence. Elevate your online presence with WordPress Website Development services from Ideanest. We specialize in crafting dynamic and user-friendly websites that empower your brand on the digital frontier.",
      thirdDescription: "Our team of skilled developers leverages the flexibility and robust features of WordPress to deliver tailor-made solutions that align with your business objectives."
    },
    {
      id: 5,
      title: "Domain And Website Hosting",
      color: "from-red-500 to-red-600",
      image: "https://techterms.com/img/xl/web_host_366.png",
      mainDescription: "With Ideanest, you get more than just a hosting service; you gain a partner committed to your online success. Our robust infrastructure ensures 24/7 accessibility, minimal downtime, and lightning-fast loading speeds. Whether you're a startup or an established business, our hosting solutions scale to meet your evolving needs.",
      secondDescription: "Benefit from our user-friendly interface, efficient customer support, and competitive pricing. Make your mark in the digital landscape with Ideanest– where your domain and website hosting needs are not just met but exceeded. Elevate your online presence with Ideanest top-notch Domain and Website Hosting services.",
      thirdDescription: "Our comprehensive offerings ensure a seamless and secure digital journey for your business. Choose from a variety of domain options that align with your brand identity, and enjoy reliable website hosting that guarantees optimal performance."
    },
    {
      id: 6,
      title: "CMS based Website",
      color: "from-purple-500 to-purple-600",
      image: "https://f1.madcapsoftware.com/blogImages/2023/IXIASOFT%20Blogs/ill-six-different-types-content-management-systems-1200x1200.png?w=1800",
      mainDescription: "At Ideanest, we recognize the significance of a robust online presence in today's digital landscape. Our CMS solutions provide you with the flexibility to control and update your website content without technical expertise, streamlining your digital operations. Whether you're a startup or an established business, our CMS-based websites offer scalability and efficiency, enabling you to stay ahead in the competitive online realm.",
      secondDescription: "Embrace the future of web management with Ideanest and unlock the full potential of your online presence. Elevate your online presence with Ideanest CMS-based website solutions. Our Content Management System (CMS) services empower businesses to effortlessly manage and update their web content, ensuring a dynamic and engaging online platform.",
      thirdDescription: "With user-friendly interfaces and customizable features, our CMS-based websites are designed to suit the unique needs of your business."
    }
  ]

  const features = [
    { icon: Zap, title: "Fast Performance", description: "Lightning-fast loading speeds" },
    { icon: Users, title: "User-Centric Design", description: "Tailored for your audience" },
    { icon: Target, title: "SEO Optimized", description: "Rank higher in search results" },
    { icon: CheckCircle, title: "Quality Assured", description: "Thoroughly tested solutions" }
  ]


  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800&fit=crop"
        >
          <source src="https://v.ftcdn.net/00/48/31/12/700_F_48311251_QBFZ12uyt4op5MORsYTYiTxn6AXu1ZhI_ST.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/70" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
            <span className="text-yellow-400 font-bold text-sm">Web Development Solutions</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Web <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Development</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting stunning, scalable, and high-performing websites that drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button onClick={() => navigate('/contact')} className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="text-yellow-400 text-4xl">↓</div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t-4 border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-gray-900" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Our Web <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Development</span> Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive web solutions tailored to your business needs
            </p>
          </div>

          {/* Service Tabs - Scrollable on Mobile */}
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 shadow-lg shadow-yellow-400/50'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {service.title.split('/')[0].split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Service Details */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-xl border-2 border-yellow-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
              {/* Content */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className={`inline-block px-4 py-2 rounded-lg mb-6 bg-gradient-to-r ${services[activeTab].color} text-white font-bold text-sm`}>
                    {services[activeTab].title}
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-6">
                    {services[activeTab].title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                    {services[activeTab].mainDescription}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed text-justify">
                    {services[activeTab].secondDescription}
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed text-justify">
                    {services[activeTab].thirdDescription}
                  </p>
                  <button onClick={() => navigate('/contact')} className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 inline-flex items-center gap-2">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-96 lg:h-full min-h-96">
                <div className={`absolute inset-0 bg-gradient-to-br ${services[activeTab].color} rounded-xl opacity-10`}></div>
                <img
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  className="relative w-full h-full object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50 border-t-4 border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Ideanest</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver excellence in every project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Expert Development Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our seasoned team of developers brings years of experience and expertise to every project, ensuring top-notch solutions tailored to your specific requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Responsive Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Every website we create is fully responsive, ensuring seamless user experience across all devices and screen sizes for maximum accessibility.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Performance Optimized</h3>
              <p className="text-gray-600 leading-relaxed">
                Lightning-fast loading speeds and optimized performance ensure your website keeps visitors engaged and reduces bounce rates.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">SEO Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                All our websites are built with SEO best practices, helping you rank higher in search results and attract more organic traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Build Your Next <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Web Project</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's collaborate to create something amazing that drives results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button onClick={() => navigate('/contact')} className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
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

export default WebDevelopment

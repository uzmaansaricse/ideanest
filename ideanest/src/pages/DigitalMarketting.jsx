import React, { useState } from 'react'
import { ArrowRight, TrendingUp, Share2, PenTool, BarChart3, Mail, Zap, Target, Users, Globe } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const DigitalMarketing = () => {
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      color: "from-blue-500 to-blue-600",
      image: "https://www.bsmtech.co.in/wp-content/uploads/2025/09/Digital-Marketing-services-1.png",
      mainDescription: "At Ideanest, we understand the dynamic nature of the digital realm and tailor our solutions to amplify your brand's visibility and engagement. From optimizing your website for search engines to creating compelling social media strategies, we employ the latest techniques to drive targeted traffic and enhance your online reach. Our experienced team of digital marketers is dedicated to delivering measurable results, ensuring a strong return on investment.",
      secondDescription: "Supercharge your online presence with Ideanest cutting-edge Digital Marketing Services. We specialize in crafting strategic digital campaigns that propel your business to the forefront of the digital landscape. Our comprehensive services encompass social media marketing, search engine optimization (SEO), content marketing, and more.",
      thirdDescription: "Ignite your brand's digital journey with Ideanest and let our Digital Marketing Services propel your business to new heights in the ever-evolving online marketplace."
    },
    {
      id: 2,
      title: "Search Engine Optimization",
      color: "from-green-500 to-green-600",
      image: "https://alreadysetup.com/wp-content/uploads/SEO-image1.jpg",
      mainDescription: "Supercharge your online visibility with Ideanest Search Engine Optimization (SEO) services. Our dedicated team of experts employs cutting-edge strategies to propel your website to the top ranks of search engine results. By optimizing key elements such as keywords, meta tags, and content, we ensure that your business stands out in the digital landscape.",
      secondDescription: "At Ideanest, we understand the critical role SEO plays in driving organic traffic and enhancing your online presence. Our comprehensive SEO services cater to businesses of all sizes, delivering tailored solutions to boost your website's performance. From on-page optimization to link building and analytics, we optimize every aspect to maximize your online impact.",
      thirdDescription: "Partner with Ideanest and let our SEO services transform your online presence, attracting the right audience and driving sustainable growth for your business. Stay ahead in the digital game with Ideanest powerful SEO strategies."
    },
    {
      id: 3,
      title: "Social Media Management",
      color: "from-purple-500 to-purple-600",
      image: "https://azbigmedia.com/wp-content/uploads/2021/05/social-media-management-software.jpeg",
      mainDescription: "Ideanest takes the reins of your social media strategy, from content creation and scheduling to engagement and analytics. We tailor our approach to align with your brand identity and business goals, ensuring a cohesive and effective online presence. With dynamic and engaging content, we captivate your audience, foster community growth, and enhance brand loyalty.",
      secondDescription: "Our Social Media Management service isn't just about posting; it's a strategic collaboration to optimize your brand's digital footprint. Let Ideanest amplify your social media impact, driving growth, and fostering meaningful connections with your audience. We handle all aspects of your social presence to ensure maximum engagement and reach.",
      thirdDescription: "Stay ahead in the digital realm with our comprehensive and results-driven Social Media Management service. From content strategy to community management, we've got your brand covered."
    },
    {
      id: 4,
      title: "PPC Marketing",
      color: "from-red-500 to-red-600",
      image: "https://www.searchenginejournal.com/wp-content/uploads/2023/10/ppc-management_sej-805.jpg",
      mainDescription: "Supercharge your digital visibility with Ideanest expert PPC Marketing services. Our Pay-Per-Click solutions are tailored to elevate your online presence, driving targeted traffic and maximizing your ROI. With a strategic approach to keyword research, ad creation, and campaign management, Ideanest ensures your brand stands out in the competitive digital landscape.",
      secondDescription: "Our PPC specialists craft compelling ad campaigns across platforms like Google Ads and social media, precisely targeting your audience and generating measurable results. Whether you're a startup looking for an initial boost or an established business aiming for enhanced online visibility, Ideanest delivers data-driven PPC strategies that align with your goals.",
      thirdDescription: "Stay ahead of the curve and amplify your online impact with Ideanest PPC Marketing services—where every click counts towards your business success."
    },
    {
      id: 5,
      title: "Content Writing",
      color: "from-amber-500 to-amber-600",
      image: "https://ebizfiling.com/wp-content/uploads/2022/05/content-writing-2.png",
      mainDescription: "Revitalize your brand's narrative with Ideanest exceptional content writing services. Our team of seasoned writers crafts compelling and tailored content that captivates your audience, elevates your brand identity, and drives meaningful engagement. Whether you need website content, blog posts, social media updates, or marketing collateral, Ideanest ensures that each word contributes to your brand's success.",
      secondDescription: "At Ideanest, we understand the power of storytelling in the digital age. Our content writing services go beyond mere words; we create narratives that resonate with your target audience, establish credibility, and enhance your online visibility. With a keen eye for detail and a commitment to excellence, Ideanest is your partner in delivering content that not only communicates but leaves a lasting impression.",
      thirdDescription: "Transform your brand's story with Ideanest content writing services and stand out in the crowded digital landscape."
    },
    {
      id: 6,
      title: "Social Media Advertising",
      color: "from-pink-500 to-pink-600",
      image: "https://www.threegirlsmedia.com/wp-content/uploads/2021/12/social-media-advertising-scaled.jpg",
      mainDescription: "Ignite your brand's presence with Ideanest Social Media Advertising services. We specialize in crafting impactful social media campaigns tailored to amplify your business reach and engagement. Our expert team harnesses the power of platforms like Facebook, Instagram, Twitter, and LinkedIn to strategically target your audience and drive conversions.",
      secondDescription: "Ideanest goes beyond mere visibility – we create compelling ad content, optimize ad spend, and monitor campaign performance to ensure maximum ROI. Whether you're launching a new product, building brand awareness, or driving website traffic, our Social Media Advertising services are designed to elevate your digital marketing game.",
      thirdDescription: "Stay ahead in the dynamic world of social media with Ideanest as your partner. From innovative ad creatives to data-driven strategies, we've got your brand covered. Let us navigate the social landscape for you, turning clicks into customers and followers into brand advocates. Ignite your social media success with Ideanest!"
    },
    {
      id: 7,
      title: "Email Marketing",
      color: "from-indigo-500 to-indigo-600",
      image: "h.png",
      mainDescription: "Revitalize your marketing strategy with Ideanest Email Marketing services. Our comprehensive email marketing solutions are tailored to catapult your business into the spotlight, fostering meaningful connections with your audience. From designing visually stunning and responsive email campaigns to crafting compelling content, we ensure your messages resonate with recipients.",
      secondDescription: "Ideanest combines cutting-edge technology with strategic insights to optimize your email campaigns, maximizing reach and engagement. Our services cover every aspect of email marketing, including list management, segmentation, and analytics, providing you with actionable insights for continuous improvement.",
      thirdDescription: "Gain a competitive edge in the digital landscape by leveraging Ideanest Email Marketing services. Whether you're nurturing leads, promoting products, or building brand loyalty, our team is dedicated to enhancing your email marketing effectiveness. Experience the impact of targeted and personalized communication – choose Ideanest for a results-driven approach to email marketing success."
    }
  ]

  const features = [
    { icon: TrendingUp, title: "Proven Results", description: "Data-driven strategies with measurable ROI" },
    { icon: Target, title: "Targeted Approach", description: "Precision targeting to reach your ideal audience" },
    { icon: Globe, title: "Omnichannel", description: "Integrated campaigns across all platforms" },
    { icon: Zap, title: "Fast Implementation", description: "Quick deployment and rapid results" }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          
        >
          <source src="https://www.pexels.com/download/video/3141208/" type="video/mp4" />
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
            <span className="text-yellow-400 font-bold text-sm">Digital Marketing Solutions</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Digital <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Marketing</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your brand's digital presence with cutting-edge marketing strategies that drive results and accelerate growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate('/contact')} className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button onClick={()=>navigate('/contact')} className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all duration-300">
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
              Our Digital <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Marketing</span> Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital marketing solutions designed to boost your online presence and drive business growth
            </p>
          </div>

          {/* Service Tabs */}
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
                {service.title.split(' ')[0]}
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
                  <button onClick={()=>navigate('/contact')} className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 inline-flex items-center gap-2">
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
              Your partner for digital success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Results-Driven Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team focuses on delivering measurable results and ROI. Every campaign is optimized and monitored to ensure maximum impact for your business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced digital marketers stay updated with the latest trends and best practices to ensure your campaigns are always ahead of the curve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Omnichannel Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                We implement integrated campaigns across all digital channels to ensure consistent messaging and maximum reach for your brand.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Transparent Reporting</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide comprehensive analytics and detailed reports so you always know how your campaigns are performing and where your budget is going.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Breakdown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Service Suite</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "SEO & SEM", description: "Boost your visibility on search engines and capture high-intent traffic" },
              { icon: Share2, title: "Social Media", description: "Build community engagement and brand loyalty across social platforms" },
              { icon: PenTool, title: "Content Marketing", description: "Create compelling content that resonates with your target audience" },
              { icon: BarChart3, title: "PPC Advertising", description: "Drive immediate traffic and conversions with targeted paid campaigns" },
              { icon: Mail, title: "Email Marketing", description: "Nurture leads and maintain customer relationships through email" },
              { icon: Target, title: "Analytics & Optimization", description: "Track performance and continuously improve your digital strategy" }
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-yellow-100">
                  <div className="w-14 h-14 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Transform Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Digital Presence</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with Ideanest to create a comprehensive digital marketing strategy that drives growth, engagement, and measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={()=>navigate('/contact')} className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button onClick={()=>navigate('/contact')} className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  )
}

export default DigitalMarketing

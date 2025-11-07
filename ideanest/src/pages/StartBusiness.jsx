import React, { useState } from 'react'
import { ArrowRight, Building2, Users, FileText, Zap, CheckCircle, Target, Globe, Briefcase } from 'lucide-react'
import agni from '../assets/agni.jpeg'
import { useNavigate } from 'react-router-dom'

const StartYourBusiness = () => {
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      title: "Private Limited Company",
      color: "from-blue-500 to-blue-600",
      image: "https://webixytech.com/admin_panel/assets/project_images/1625120256What_is_an_IT_company.jpg",
      mainDescription: "Ideanest explains that an Indian Private Limited Company represents a blend of a partnership firm and a publicly-traded entity, requiring a minimum of two individuals for registration. In this structure, participants can serve as both shareholders and directors. The company shields shareholders from personal liability and legal consequences. Each member's liability is confined to their shareholding.",
      secondDescription: "Upon receiving the Certificate of Incorporation, a Private Limited Company can commence operations, typically within 15 business days. This business structure offers credibility, ease in raising capital, and protection for owners. Private Limited Companies are ideal for entrepreneurs looking to establish a formal, legally recognized business entity with limited personal liability.",
      thirdDescription: "With Ideanest's expert guidance, setting up a Private Limited Company becomes seamless. We handle all documentation, regulatory compliance, and filing procedures, ensuring your business is registered correctly and efficiently."
    },
    {
      id: 2,
      title: "Limited Liability Partnership",
      color: "from-purple-500 to-purple-600",
      image: "https://www.hibberts.com/wp-content/uploads/2022/11/Limited-Company-vs-Partnership-blog-151122.jpg",
      mainDescription: "Ideanest explains that a Limited Liability Partnership (LLP), commonly known as an LLP, embodies features resembling both traditional partnerships and corporations. LLP registration has surged in popularity primarily due to its simplicity in formation and maintenance, offering owners protection against lawsuits. This structure presents the greatest advantage over traditional partnerships.",
      secondDescription: "LLPs combine the benefits of private limited companies and partnership firms, making them ideal for various businesses. Individual partners are shielded from joint liability resulting from another partner's misconduct. This structure is particularly favored by professionals, microbusinesses, and small businesses with a limited group of shareholders. LLP registration stands out as the easiest and most transparent process, blending the benefits of a company and a partnership firm.",
      thirdDescription: "Ideanest provides comprehensive LLP registration services, guiding you through each step of the process and ensuring complete compliance with regulatory requirements."
    },
    {
      id: 3,
      title: "Proprietorship",
      color: "from-amber-500 to-amber-600",
      image: "https://www.usemultiplier.com/wp-content/uploads/2023/03/sole-proprietorship-examples.webp",
      mainDescription: "Ideanest describes a sole proprietorship firm as a business structure where a single individual holds complete authority over management, ownership, and decision-making. The owner is titled as the Sole Proprietor of the Firm, with no legal differentiation between the promoter and the business entity itself, as it is operated by an individual. All profits accrue solely to the promoter.",
      secondDescription: "Notably, no formal registration is necessary for a Sole Proprietorship firm. The principal advantage lies in its straightforward establishment process, facilitated by minimal legal documentation and lower startup expenses. This structure is perfect for individuals starting their entrepreneurial journey with minimal investment and regulatory requirements.",
      thirdDescription: "Ideanest simplifies the proprietorship setup process, providing guidance on GST registration, tax compliance, and other essential business requirements for your sole proprietorship."
    },
    {
      id: 4,
      title: "GST Registration",
      color: "from-green-500 to-green-600",
      image: "https://www.bajajfinservmarkets.in/content/dam/bajajmarkets/blog-assets/listing-pages/60-percent-top-banner/Components%20of%20GST%20in%20India.webp",
      mainDescription: "Ideanest outlines the current scenario regarding Goods and Service Tax (GST) registration, noting that all goods and services, with the exception of petroleum products, are presently subject to GST. GST amalgamates state and central indirect taxes into a unified tax system, ensuring consistent taxation across the nation. Previously, various taxes including excise, VAT, and entertainment tax were levied differently.",
      secondDescription: "Now, businesses with a turnover up to Rs 40 lakh are exempt from GST, while those with turnovers up to Rs 1.5 crore can opt for the Composition Scheme, paying only 1% tax. The exemption limit for services remains at Rs 20 lakhs. Additionally, service providers with revenues up to 50 lakhs can utilize the composition plan, paying only 6% tax. Entities with annual sales exceeding INR 40 lakh must register for GST, enabling them to benefit from Input Tax Credit.",
      thirdDescription: "Furthermore, interstate transactions of goods or services mandate GST registration. Ideanest provides complete GST registration and compliance services, ensuring your business operates smoothly within regulatory frameworks."
    },
    {
      id: 5,
      title: "AGNIi Program",
      color: "from-red-500 to-red-600",
      image: 'https://media.assettype.com/ficl%2F2021-12%2Fddb56f07-628f-407c-a469-7bdfdb660da1%2FUntitled_design.png',
      mainDescription: "Ideanest introduces AGNIi as a program initiated by the Office of the Principal Scientific Adviser to the Government of India, operating under the Prime Minister's Science, Technology, and Innovation Advisory Council (PM-STIAC). Housed within Invest India, the National Investment Promotion Agency, AGNIi aims to expedite the commercialization of Indian technological innovations.",
      secondDescription: "It facilitates the convergence of leading technologists and their market-ready innovations, sourced from startups and research laboratories, with prominent technology adopters from domestic and international enterprises, government entities, and non-profit organizations. AGNIi bridges the gap between technology providers and users, facilitating the dissemination of technology to where it is most needed.",
      thirdDescription: "Through the AGNIi program, your innovative startup can gain access to potential investors, government support, and industry experts. Ideanest assists in AGNIi registration and compliance for technology-based startups."
    },
    {
      id: 6,
      title: "GeM Registration",
      color: "from-indigo-500 to-indigo-600",
      image: "https://tenderduniya.com/asset/img/gem.png",
      mainDescription: "Ideanest highlights the Government of India's initiative, the Government E-Marketplace (GeM), designed to bring transparency to the procurement process for government agencies. GeM aims to enhance transparency, efficiency, and swiftness in governmental procurement and employment. Through this platform, both sellers and buyers can register and engage in transactions with the government.",
      secondDescription: "GeM streamlines vendor registration, payment, and order posting processes, minimizing human intervention. As an open platform, it welcomes legitimate providers without entry barriers, ensuring fair business opportunities. SMS and email notifications are sent to purchasers, association presidents, payment authorities, and sellers at each stage of the transaction process.",
      thirdDescription: "With Ideanest's GeM registration assistance, your business can unlock opportunities to sell products and services directly to government agencies, expanding your market reach and ensuring timely payments."
    }
  ]

  const features = [
    { icon: Building2, title: "Business Registration", description: "Complete legal setup and documentation" },
    { icon: FileText, title: "Compliance Ready", description: "Full regulatory compliance assistance" },
    { icon: Target, title: "Expert Guidance", description: "Step-by-step business registration support" },
    { icon: CheckCircle, title: "Quick Processing", description: "Fast and efficient service delivery" }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Video BG */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="https://www.pexels.com/download/video/8503288/" type="video/mp4" />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/70" />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full">
            <span className="text-yellow-400 font-bold text-sm">Business Registration Solutions</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Start Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Business</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Comprehensive business registration and compliance solutions to launch your entrepreneurial journey with confidence.
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
              Business <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Registration</span> Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions to register and establish your business legally and efficiently
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
              Expert guidance for your business journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team of business registration experts provides comprehensive guidance through every step of the process, ensuring compliance with all regulatory requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">All-in-One Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                From company registration to GST compliance, we offer complete business solutions tailored to your specific needs and business structure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Fast Processing</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick and efficient service delivery ensures your business is registered and operational within the shortest possible timeframe.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Compliance Assured</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete compliance with all government regulations and requirements ensures your business operates legally and avoids penalties.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Service Offerings</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Building2, title: "Company Registration", description: "Register your Private Limited Company with complete documentation and compliance" },
              { icon: Users, title: "LLP Formation", description: "Establish a Limited Liability Partnership with minimal documentation" },
              { icon: FileText, title: "GST Registration", description: "Hassle-free GST registration and compliance management" },
              { icon: Target, title: "Business Consultation", description: "Expert advice on choosing the right business structure for your needs" },
              { icon: Globe, title: "Government Programs", description: "Registration and guidance for AGNIi and GeM programs" },
              { icon: Briefcase, title: "Legal Compliance", description: "Complete legal documentation and regulatory compliance support" }
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
            Ready to <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Start Your Business</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let Ideanest handle all your business registration needs while you focus on building your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
            </button>
            <button onClick={() => navigate('/contact')} className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all duration-300">
              Learn More
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

export default StartYourBusiness

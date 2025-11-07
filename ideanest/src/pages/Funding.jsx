import React, { useState } from 'react'
import { ArrowRight, DollarSign, TrendingUp, Building2, Zap, Target, Users, BarChart3, AlertCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Funding = () => {
  const [activeTab, setActiveTab] = useState(0)
  const navigate = useNavigate()

  const services = [
    {
      id: 1,
      title: "NIDHI PRAYAS YOJANA",
      color: "from-purple-500 to-purple-600",
      image: "https://aic.ccmb.res.in/wp-content/uploads/2023/05/DST-NIDHI_Original-Logo-V-1024x1013.jpg",
      mainDescription: "NIDHI PRAYAS represents a comprehensive incubation support program designed to nurture early-stage startups. At Ideanest, we provide a dynamic blend of expertise, collaboration, and personalized support to propel your business towards success.",
      secondDescription: "Our comprehensive scope of work includes: Understanding the Stage of the Start-up, Pitch Deck Preparation, Application Filling, Follow-Up from the Incubator, and Feedback Mechanism. We guide you through every step of the NIDHI PRAYAS journey, ensuring your startup receives the mentorship and support needed to thrive.",
      thirdDescription: "Choose Ideanest for a partnership that goes beyond traditional solutions, providing expert guidance, strategic planning, and continuous support to transform your innovative ideas into sustainable, scalable businesses."
    },
    {
      id: 2,
      title: "Venture Capitalist",
      color: "from-green-500 to-green-600",
      image: "https://www.svb.com/cdn-cgi/image/format=auto,quality=65,fit=scale-down,width=1440/contentassets/3ce69e0630bb4409931a8a98b2377683/the-venture-capital-process-v4.png",
      mainDescription: "At Ideanest, we understand the transformative impact that agribusiness ventures can have on the agricultural landscape. Emphasizing our commitment to supporting innovative projects, we are proud to introduce Venture Capital Assistance, a financial lifeline in the form of an interest-free loan offered by SFAC (Small Farmers' Agribusiness Consortium) to eligible projects.",
      secondDescription: "Key Features of our Venture Capital Program include: Deficit Coverage for project shortfalls, Agripreneur Empowerment through financial support, and Project Development Facility for comprehensive project guidance. Our program is designed to bridge the funding gap and accelerate agribusiness innovation.",
      thirdDescription: "At Ideanest, we serve as a conduit, connecting agripreneurs with the resources required to turn their agricultural visions into reality. Our platform ensures that Venture Capital Assistance becomes a catalyst for growth, innovation, and sustainable development in the agribusiness sector."
    },
    {
      id: 3,
      title: "Greenfield Loan",
      color: "from-amber-500 to-amber-600",
      image: "https://omkadvisors.com/wp-content/uploads/2024/04/prj-4-1024x1024.png",
      mainDescription: "Ignite your startup with Ideanest! Is your venture a greenfield project, just starting to bloom? At Ideanest, we specialize in providing greenfield loans tailored for businesses in their infancy – those pioneering ideas ready to take their first steps.",
      secondDescription: "Our greenfield loans are designed to fuel the dreams of startup novices, offering crucial financial support during those early stages of market establishment. For startups navigating the challenges of securing initial funding, these loans act as a vital resource, facilitating credit access to empower and propel your business forward.",
      thirdDescription: "Seize the opportunity with Ideanest and let your startup thrive! Greenfield loans provide the foundational capital needed to establish operations, build infrastructure, and bring your innovative ideas to market with confidence."
    },
    {
      id: 4,
      title: "Seed Funding",
      color: "from-red-500 to-red-600",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC0xFJTKm_72YkxOB1uB5PGmRv8Z1CEwA7Jw&s",
      mainDescription: "At Ideanest, we recognize that the early phases of entrepreneurship demand not only vision and innovation but also easy access to essential financing. We understand that startups face challenges in securing funding from traditional sources like banks, which often require tangible assets as collateral, or from angel investors and venture capital firms, which typically invest post-demonstration of a viable concept.",
      secondDescription: "Recognizing the critical role of Seed Capital, especially for firms with ground breaking ideas in need of proof of concept trials, Ideanest is committed to fostering the growth of promising entrepreneurs in the early stages of their business development. Our Seed-Fund initiative is designed to be a catalyst for qualifying entrepreneurs across India.",
      thirdDescription: "By partnering with incubators nationwide, we aim to distribute Seed Funding strategically, providing the necessary financial support for proof of concept, prototype development, product trials, market entry, and early-stage commercialization."
    },
    {
      id: 5,
      title: "MSME Loans",
      color: "from-pink-500 to-pink-600",
      image: "https://kreditbee.in/blog/content/images/2023/10/shutterstock_2257340869-1.jpg",
      mainDescription: "At Ideanest, we recognize the pivotal role that Micro, Small, and Medium Enterprises (MSMEs) play in the vibrant economic landscape of India. The Government of India, in alignment with our vision for fostering entrepreneurship, extends a helping hand to MSMEs through specialized loans, facilitating their growth and contributing to the country's booming network of small businesses.",
      secondDescription: "MSME loans come with significant market impact potential and demonstrate the strength and potential of small business sectors. Our MSME Classification system ensures that businesses receive tailored financial solutions appropriate to their specific needs and scale. We facilitate access to government-backed loans with favorable terms and minimal bureaucracy.",
      thirdDescription: "At Ideanest, we serve as the bridge connecting MSMEs with the resources they require for sustained growth. Our platform facilitates access to government loans, ensuring that businesses can thrive and contribute significantly to India's economic vitality. Join Ideanest in the journey to empower MSMEs, driving innovation, job creation, and economic resilience."
    },
    {
      id: 6,
      title: "Project Finance",
      color: "from-indigo-500 to-indigo-600",
      image: "https://fundwise.uk/wp-content/uploads/2025/03/10-Key-Stages-of-the-Project-Finance-Lifecycle-1024x683.jpg",
      mainDescription: "At Ideanest, we embrace a forward-thinking approach to financing, and Project Finance stands out as a transformative method that goes beyond traditional credit lending systems. Unlike the conventional reliance on assets and balance sheets, Project Finance leverages the promising nature of a project and its anticipated future revenues as a guarantee for the loan amount.",
      secondDescription: "Key Characteristics of our Project Finance approach include: Future-Revenue Guarantee based on project cash flows, Project-Centric Approach focusing on project viability, and suitability for Ideal Long-Term Endeavors. This financing model is perfect for infrastructure projects, technology ventures, and large-scale initiatives.",
      thirdDescription: "Join Ideanest in embracing the evolution of financing through Project Finance, where the success of your project becomes the cornerstone for a thriving and sustainable future."
    },
    {
      id: 7,
      title: "Unsecured Business Loans",
      color: "from-cyan-500 to-cyan-600",
      image: "https://d28wu8o6itv89t.cloudfront.net/images/Unsesureddebtjpg-1705908626717.jpeg",
      mainDescription: "Ease your loan worries with Ideanest! Bid farewell to collateral concerns when seeking funds for your business journey. Unsecured business loans are the lifeline for budding entrepreneurs and those navigating financial challenges without the burden of collateral.",
      secondDescription: "At Ideanest, we cater to businesses lacking the capacity for collateral, offering unsecured business loans that cover a spectrum of needs. Whether it's bolstering working capital, acquiring machinery, expanding operations, or enhancing cash flow, this loan type is tailor-made for businesses in urgent need of credit without the ability to provide collateral.",
      thirdDescription: "Secure your business's financial future with Ideanest and embrace the freedom of unsecured business loans! Our streamlined approval process and flexible terms ensure that your business gets the funding it needs quickly and efficiently."
    }
  ]

  const features = [
    { icon: DollarSign, title: "Diverse Funding Options", description: "Grants, loans, and investment opportunities" },
    { icon: TrendingUp, title: "Growth Support", description: "Tailored financing for every stage" },
    { icon: Building2, title: "Expert Guidance", description: "Navigate complex funding processes" },
    { icon: Zap, title: "Fast Processing", description: "Quick approvals and fund disbursement" }
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
          <source src="https://www.pexels.com/download/video/7414127/" type="video/mp4" />
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
            <span className="text-yellow-400 font-bold text-sm">Startup Funding Solutions</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Funding</span> Your Dreams
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Access diverse funding opportunities and financial support to fuel your startup's growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              Get Funded Now
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
              Funding <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Opportunities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore diverse funding options tailored to your startup's stage and requirements
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex flex-wrap gap-2 justify-center">
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-lg font-bold transition-all duration-300 text-xs sm:text-sm whitespace-nowrap ${
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
                    Apply Now <ArrowRight className="w-4 h-4" />
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

      {/* Disclaimer Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-orange-50 border-t-4 border-red-400 border-b-4 border-red-400">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border-l-4 border-red-400 p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-3">Important Disclaimer</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Ideanest is responsible for <span className="font-bold">paperwork and documentation</span> only. We do <span className="font-bold">NOT guarantee funding approval</span> and are <span className="font-bold">NOT responsible</span> for the final funding decision made by government agencies, financial institutions, or investors.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The approval of funding is solely at the discretion of the concerned authorities. Ideanest acts as a facilitator to help you prepare and submit your application, but the final decision rests with the funding provider. We recommend that you thoroughly review all terms and conditions before proceeding.
                </p>
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
              Your partner in accessing startup funding and financial resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <DollarSign className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Multiple Funding Channels</h3>
              <p className="text-gray-600 leading-relaxed">
                Access a diverse portfolio of funding options including government grants, loans, and investment opportunities tailored to your startup's needs.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Financial Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Our experienced financial consultants guide you through application processes and help maximize your chances of securing funding.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Tailored Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We assess your startup's specific needs and stage, recommending the most suitable funding options for your business.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600 leading-relaxed">
                From application to fund disbursement, our team provides continuous support ensuring a smooth and successful funding journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Stages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t-4 border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Funding By <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Stage</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { stage: "Ideation", funding: "Government Grants, NIDHI PRAYAS", description: "Early-stage support for concept development" },
              { stage: "Seed Stage", funding: "Seed Funding, Grants", description: "Proof of concept and initial product development" },
              { stage: "Early Growth", funding: "MSME Loans, Unsecured Loans", description: "Scaling operations and market expansion" },
              { stage: "Scaling", funding: "Project Finance, Venture Capital", description: "Large-scale growth and expansion projects" }
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-yellow-100">
                <h3 className="text-xl font-black text-gray-900 mb-2">{item.stage}</h3>
                <p className="text-sm font-bold text-yellow-600 mb-3">{item.funding}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Ready to Secure <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Startup Funding</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with Ideanest to unlock diverse funding opportunities and accelerate your startup's growth journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              Apply for Funding
            </button>
            <button onClick={() => navigate('/contact')} className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all duration-300">
              Schedule a Call
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

export default Funding

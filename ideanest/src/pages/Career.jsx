import React, { useState } from 'react'
import { Briefcase, MapPin, Clock, DollarSign, Users, Target, Heart, Zap, Award, CheckCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Career = () => {
  const [selectedJob, setSelectedJob] = useState(null)

  const navigate = useNavigate()

  const jobs = [
    {
      id: 1,
      title: "Senior React Developer",
      location: "Remote / Delhi NCR",
      type: "Full-time",
      salary: "₹8-15 LPA",
      experience: "3-5 years",
      description: "We are looking for a passionate React developer to join our growing team and help build amazing user experiences.",
      requirements: [
        "3+ years of experience with React.js",
        "Strong knowledge of JavaScript, HTML, CSS",
        "Experience with state management (Redux, Context API)",
        "Familiarity with modern frontend tools and workflows",
        "Good understanding of REST APIs and GraphQL"
      ],
      benefits: [
        "Competitive salary and equity",
        "Flexible working hours",
        "Health insurance",
        "Learning and development budget",
        "Remote work options"
      ]
    },
    {
      id: 2,
      title: "Business Development Manager",
      location: "Delhi NCR",
      type: "Full-time",
      salary: "₹6-12 LPA",
      experience: "2-4 years",
      description: "Drive business growth by identifying new opportunities and building strategic partnerships for startups.",
      requirements: [
        "2+ years in business development or sales",
        "Experience in startup ecosystem preferred",
        "Strong communication and negotiation skills",
        "Understanding of startup funding and growth strategies",
        "Network in startup community"
      ],
      benefits: [
        "Performance-based incentives",
        "Travel opportunities",
        "Professional development",
        "Dynamic work environment",
        "Work with cutting-edge startups"
      ]
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "Remote / Delhi NCR",
      type: "Full-time",
      salary: "₹5-10 LPA",
      experience: "2-4 years",
      description: "Create beautiful and intuitive user experiences for our startup clients and internal products.",
      requirements: [
        "2+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe XD, Sketch",
        "Strong portfolio showcasing design process",
        "Understanding of user-centered design principles",
        "Experience with design systems"
      ],
      benefits: [
        "Creative freedom",
        "Design tool subscriptions",
        "Flexible work arrangements",
        "Collaborative team environment",
        "Continuous learning opportunities"
      ]
    },
    {
      id: 4,
      title: "Content Marketing Specialist",
      location: "Delhi NCR",
      type: "Full-time",
      salary: "₹4-8 LPA",
      experience: "1-3 years",
      description: "Create compelling content that drives engagement and positions IdeaNest as a thought leader in startup ecosystem.",
      requirements: [
        "1+ years in content creation or marketing",
        "Excellent writing and communication skills",
        "Experience with SEO and content strategy",
        "Social media management experience",
        "Understanding of startup and business topics"
      ],
      benefits: [
        "Content creation freedom",
        "Professional development",
        "Work with industry experts",
        "Flexible work hours",
        "Performance bonuses"
      ]
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Passion for Startups",
      description: "We believe in the power of entrepreneurship and are passionate about helping startups succeed."
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and methodologies to deliver exceptional results."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "We foster a collaborative environment where everyone's voice is heard and valued."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We focus on delivering measurable results and creating lasting impact for our clients."
    },
    {
      icon: Award,
      title: "Continuous Learning",
      description: "We invest in our team's growth through continuous learning and skill development."
    }
  ]

  const perks = [
    "Flexible working hours",
    "Remote work options",
    "Health insurance coverage",
    "Professional development budget",
    "Performance-based incentives",
    "Modern office facilities",
    "Team building activities",
    "Work-life balance focus"
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Join Our <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Mission</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Be part of a team that's transforming the startup ecosystem. We're looking for passionate individuals ready to make an impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
         
            <button onClick={()=>navigate('/contact')} className="px-8 py-4 border-2 border-yellow-400 text-yellow-500 font-bold rounded-lg hover:bg-yellow-50 transition-all duration-300">
              Learn About Us
            </button>
          </div>
        </div>
      </section>




      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">IdeaNest?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what makes us the perfect partner for your entrepreneurial journey.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-6">
                  Choosing <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">IdeaNest</span>
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Choosing IdeaNest means opting for a comprehensive and tailored business support partner. Our seasoned professionals bring expertise across business registration, funding solutions, website development, certifications, and digital marketing. With a client-centric approach, we prioritize your unique needs, offering streamlined processes to simplify the complexities of entrepreneurship. Trust IdeaNest for a holistic, personalized, and efficient journey toward business success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={()=>navigate('/contact')} className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
                    Get Started Today
                  </button>
                  <button onClick={()=>navigate('/contact')} className="px-8 py-4 border-2 border-yellow-400 text-yellow-500 font-bold rounded-lg hover:bg-yellow-50 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-6">
                  
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl text-center">
                    <Target className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Tailored Solutions</h4>
                    <p className="text-sm text-gray-600">Customized services for your unique business needs</p>
                  </div>
                 
                  <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl text-center">
                    <Award className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">Proven Success</h4>
                    <p className="text-sm text-gray-600">Track record of helping startups achieve their goals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Career

import React from 'react'

const founders = [
  {
    name: 'Ankit Kumar Jha',
    role: 'Founder and CEO',
    message: `At IdeaNest, we’re building more than a company—we’re enabling a movement for entrepreneurial growth. Our commitment is to support the next generation of trailblazers by providing access, mentorship, and resources every step of the way.`
  },
  {
    name: 'Earthson Xavier',
    role: 'Co-founder and COO',
    message: `Operational excellence and innovation drive us. At IdeaNest, I ensure our platform and processes are robust, efficient, and always centered on founders’ real needs, so startups can thrive in any market.`
  },
  {
    name: 'Abhishek Chaubey',
    role: 'Co-founder and CFO',
    message: `Ideanest was started with one belief: every ambitious idea deserves the chance to take flight. Through trusted guidance, financial acumen, and a personal approach, we help dreams become sustainable businesses.`
  },
]

const About = () => (
  <div className="bg-white min-h-screen">
    {/* Hero */}
    <section className="py-20 bg-gradient-to-r from-yellow-50 to-orange-50 text-center">
      <h1 className="text-5xl font-black mb-4 text-gray-900">
        About <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">IdeaNest</span>
      </h1>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 mt-4">
        Empowering startups to reach their full potential with strategic guidance, professional certifications, tailored funding, and an all-around support ecosystem.
      </p>
    </section>

    {/* Vision & Mission */}
    <section className="max-w-4xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-12">
      <div className="bg-white border-l-4 border-yellow-400 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-yellow-600 mb-4">Our Vision</h2>
        <p className="text-gray-700">
          To be the launchpad for India’s most dynamic entrepreneurs and game-changing startups—accelerating their dreams with unwavering mentorship, smart capital, and a thriving community.
        </p>
      </div>
      <div className="bg-white border-l-4 border-orange-400 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Mission</h2>
        <p className="text-gray-700">
          To simplify every entrepreneur’s journey, IdeaNest delivers seamless access to funding, certifications, consulting, and strategic partnerships, creating a new standard for startup empowerment and growth.
        </p>
      </div>
    </section>

    {/* Founders' Message */}
    <section className="bg-gradient-to-r from-white to-yellow-50 py-16 px-4">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-black text-gray-900 mb-2">Founders' Message</h2>
        <p className="text-gray-600">
          Meet the visionaries powering IdeaNest’s journey and learn what inspires our mission.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {founders.map((f, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg border border-yellow-100 p-8 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 mb-4 flex items-center justify-center text-white text-2xl font-extrabold">
              {f.name.split(' ').map(word => word[0]).join('')}
            </div>
            <h3 className="text-xl font-bold text-gray-900">{f.name}</h3>
            <p className="mb-2 text-yellow-600 font-semibold">{f.role}</p>
            <p className="text-gray-700 text-sm">{f.message}</p>
          </div>
        ))}
      </div>
    </section>
  </div>
)

export default About

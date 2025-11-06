import React from 'react'

const blogs = [
  {
    title: "Startup Funding in India: A New Age Guide",
    author: "Team IdeaNest",
    date: "November 2025",
    summary: "A comprehensive guide to understanding various funding options available for Indian startups, with actionable steps for early-stage founders.",
    content: `
      Navigating the funding landscape can be overwhelming for new founders. From government grants like NIDHI PRAYAS to private equity and venture capital, India's ecosystem offers diverse resources. Start with a clear pitch, be persistent, and always tailor your application to the specific program guidelines. Remember, good paperwork improves your funding odds!
    `
  },
  {
    title: "How to Build a Winning Pitch Deck",
    author: "Earthson Xavier",
    date: "October 2025",
    summary: "Discover the key elements investors look for in a pitch deck, and how to craft a story that makes your startup shine.",
    content: `
      Your pitch deck is your first impression—keep it concise, focused, and visually engaging. Highlight the problem, solution, business model, market size, traction, team, and funding needs. Use real metrics and clear visuals. End with a strong call to action to move your audience.
    `
  },
  {
    title: "MSME Certifications: Why They Matter",
    author: "Abhishek Chaubey",
    date: "September 2025",
    summary: "Explore the real business benefits of MSME certifications, from gaining trust with partners to unlocking government schemes.",
    content: `
      MSME certification is more than a legal step—it's a mark of credibility, helping small and medium businesses access grants, loans, and B2B deals. The process may seem complex, but platforms like IdeaNest are built to make navigation and compliance seamless for you.
    `
  },
  {
    title: "Digital Marketing for New Startups: Where to Begin?",
    author: "Team IdeaNest",
    date: "August 2025",
    summary: "Kickstart your startup’s growth with effective digital marketing strategies tailored for bootstrapped and early-stage companies.",
    content: `
      Start with a clear value proposition. Build a basic website, establish a presence on LinkedIn and Instagram, and use email to connect with early adopters. Content is king—share your journey and success stories. Run targeted ads only after finding product-market fit.
    `
  },
  {
    title: "The Importance of Founder Resilience",
    author: "Ankit Kumar Jha",
    date: "July 2025",
    summary: "Why resilience, not just funding or a great idea, is the real secret behind successful startups.",
    content: `
      Every founder faces setbacks, rejections, and pivots. The ability to learn from failure, adapt, and keep moving forward sets apart enduring businesses. Build a support network, celebrate small wins, and trust in your vision—the journey will be worth it.
    `
  }
]

const Blog = () => (
  <div className="bg-white min-h-screen py-10 px-4">
    <section className="max-w-5xl mx-auto text-center mb-16">
      <h1 className="text-5xl font-black mb-5 text-gray-900">
        IdeaNest <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Blog</span>
      </h1>
      <p className="text-lg text-gray-700">
        Insights, guides, and stories from the IdeaNest founders and team. Here’s where your entrepreneurial journey gets new wings!
      </p>
    </section>
    <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
      {blogs.map((blog, idx) => (
        <article key={idx} className="bg-gradient-to-br from-yellow-50 to-white rounded-xl shadow-lg border border-yellow-100 p-8 flex flex-col justify-between">
          <header>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{blog.title}</h2>
            <div className="flex items-center text-sm text-gray-500 mb-3 gap-4">
              <span className="font-semibold">{blog.author}</span>
              <span className="text-xs">{blog.date}</span>
            </div>
            <p className="mb-4 text-gray-700 font-medium">{blog.summary}</p>
          </header>
          <div className="text-gray-600 text-sm">
            {blog.content}
          </div>
        </article>
      ))}
    </section>
  </div>
)

export default Blog

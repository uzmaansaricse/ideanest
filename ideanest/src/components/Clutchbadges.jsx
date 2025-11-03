import React from 'react'

const ClutchBadges = () => {
  const badges = [
    {
      id: 1,
      image: "https://acofocuss.com/wp-content/uploads/2024/12/clutch1.webp",
      alt: "Top Web Developers Clutch 2024"
    },
    {
      id: 2,
      image: "https://acofocuss.com/wp-content/uploads/2024/12/fbs_enterprise_seo_award-200x184-removebg-preview.webp",
      alt: "Enterprise SEO Company"
    },
    {
      id: 3,
      image: "https://acofocuss.com/wp-content/uploads/2024/12/clutch3.webp",
      alt: "Top SEO Companies Clutch 2024"
    },
    {
      id: 4,
      image: "https://acofocuss.com/wp-content/uploads/2024/12/seoseal-removebg-preview.webp",
      alt: "Top Rated SEO Agencies"
    },
    {
      id: 5,
      image: "https://acofocuss.com/wp-content/uploads/2024/12/clutch2.webp",
      alt: "Top Advertising & Marketing Clutch 2024"
    }
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 via-white to-gray-50 border-t-2 border-b-2 border-yellow-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">Recognized & Awarded</span>
          </h2>
          <p className="text-gray-600 text-sm mt-2">Trusted by industry leaders worldwide</p>
        </div>

        {/* Badges Container - Responsive Grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 mb-8">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300 p-3 rounded-lg hover:bg-yellow-50"
            >
              <img
                src={badge.image}
                alt={badge.alt}
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain filter hover:drop-shadow-lg transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-lg hover:bg-yellow-50 transition-colors duration-300">
            <p className="text-yellow-500 font-bold text-lg">5+ Awards</p>
            <p className="text-gray-600 text-sm">Industry Recognition</p>
          </div>
          <div className="p-4 rounded-lg hover:bg-yellow-50 transition-colors duration-300">
            <p className="text-yellow-500 font-bold text-lg">Top Rated</p>
            <p className="text-gray-600 text-sm">Clutch & Industry Reviews</p>
          </div>
          <div className="p-4 rounded-lg hover:bg-yellow-50 transition-colors duration-300">
            <p className="text-yellow-500 font-bold text-lg">Trusted Partner</p>
            <p className="text-gray-600 text-sm">500+ Successful Startups</p>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent"></div>
          <span className="text-gray-400 text-sm font-semibold">Excellence in Service</span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-yellow-200 to-transparent"></div>
        </div>
      </div>
    </section>
  )
}

export default ClutchBadges

import React from 'react'
import rathore from '../assets/rathore.png'
import cleverbaloon from '../assets/cleverbaloon.png'
import svgh from '../assets/svgh.png'

const projects = [
  {
    name: "Rathore Tour and Travels",
    url: "https://rathoretourandtravels.com/",
    image: rathore,
    description: "Providing seamless travel solutions with personalized tour packages, comfortable transportation, and expert guided tours across popular destinations. Discover the joy of stress-free travel with Rathore Tour and Travels.",
    details: [
      "Customized travel itineraries",
      "24/7 customer support",
      "Experienced local guides"
    ]
  },
  {
    name: "Clever Decorations",
    url: "https://cleverdecorations.com/?gad_source=1&gad_campaignid=21626535814&gbraid=0AAAAA9iIdtYY2TCMRruaHqlIBA3w39ptJ&gclid=Cj0KCQiAiKzIBhCOARIsAKpKLAOm79S6zeZrARKKwnkV8cSdRc9hK64u-GioyXfICq9J4YBtC-rXLJwaAmDYEALw_wcB",
    image: cleverbaloon,
    description: "Creative balloon decorations and themed party supplies that instantly transform any event venue into a magical space. Clever Decorations ensures memorable celebrations with quality products and exceptional customer service.",
    details: [
      "Vibrant custom balloon designs",
      "Party supply rentals and sales",
      "Event planning assistance"
    ]
  },
  {
    name: "SVGH Healthcare",
    url: "https://svghhealthcare.com/",
    image: svgh,
    description: "Dedicated to making healthcare accessible and affordable, SVGH Healthcare uses cutting-edge technology and compassionate care to improve patient outcomes and streamline medical services.",
    details: [
      "Affordable healthcare programs",
      "Telemedicine and digital health services",
      "Experienced medical professionals"
    ]
  }
]

const Projects = () => {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-center text-5xl font-black text-gray-900 mb-12">Our Projects</h1>
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-contain bg-white p-4"
              />
            </a>
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">{project.name}</h2>
              <p className="text-gray-700 mb-4 flex-grow">{project.description}</p>
              <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-auto px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-semibold rounded-lg hover:shadow-lg transition-shadow duration-300 text-center"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

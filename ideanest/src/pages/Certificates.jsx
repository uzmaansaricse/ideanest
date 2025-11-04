import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight, FileText, CheckCircle } from 'lucide-react'

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  const certificates = [
    {
      id: 1,
      title: "Trademark Registration",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      documents: [
        "INCORPORATION CERTIFICATE/ PARTNERSHIP DEED",
        "PAN CARD (COMPANY/ DIRECTOR)",
        "AADHAR CARD (DIRECTOR)",
        "MAIL ID AND PHONE NUMBER (FOR OTP)",
        "NATURE OF BUSINESS (ABOUT BUSINESS)",
        "LOGO MSME/ SIC GST CERTIFICATE"
      ]
    },
    {
      id: 2,
      title: "IEC Registration",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      documents: [
        "PAN CARD (COMPANY/ DIRECTOR)",
        "AADHAR CARD (DIRECTOR)",
        "MAIL ID AND PHONE NUMBER (FOR OTP)",
        "NATURE OF BUSINESS (ABOUT BUSINESS)",
        "BUSINESS ACTIVITY PROOF OF ADDRESS (ELECTRICITY BILL/ RENT AGREEMENT)",
        "PHOTO OF DIRECTOR",
        "PHOTO OF DIRECTOR MOA AND AOA OF COMPANY/ LLP AGREEMENT/ PARTNERSHIP DEED",
        "PASSPORT OF DIRECTOR PASSPORT SIZE PHOTO OF DIRECTOR"
      ]
    },
    {
      id: 3,
      title: "ISO Certification",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      documents: [
        "ISO (NON - IAF)",
        "COMPANY INCORPORATION CERTIFICATE",
        "PAN CARD COMPANY",
        "NATURE OF BUSINESS",
        "GST NO",
        "ISO (IAF)",
        "PAN CARD COMPANY",
        "COMPANY INCORPORATION CERTIFICATE",
        "NATURE OF BUSINESS",
        "TAX INVOICE"
      ]
    },
    {
      id: 4,
      title: "MSME Registration",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      documents: [
        "PAN CARD (COMPANY/ DIRECTOR)",
        "DIRECTOR KYC DOCUMENTS",
        "NATURE OF BUSINESS",
        "MAIL ID AND PHONE NO (OTP VERIFICATION)",
        "BANK ACCOUNT",
        "COMPANY DETAILS - NO. OF EMPLOYEES (MALE AND FEMALE)"
      ]
    },
    {
      id: 5,
      title: "FSSAI Registration",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      documents: [
        "PAN CARD (COMPANY/ DIRECTOR)",
        "DIRECTOR KYC DOCUMENTS",
        "NATURE OF BUSINESS",
        "MAIL ID AND PHONE NO (OTP VERIFICATION)",
        "BUSINESS ACTIVITY",
        "PROOF OF ADDRESS (ELECTRICITY BILL/ RENT AGREEMENT)"
      ]
    },
    {
      id: 6,
      title: "Startup Tax Exemption",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      documents: [
        "CREDENTIALS FOR THE START-UP",
        "PAN CARD COMPANY",
        "DIRECTOR KYC DOCUMENTS",
        "NATURE OF BUSINESS",
        "VIDEO BY DIRECTOR ABOUT COMPANY",
        "MINIMUM 3 YEAR REQUIRED OF THE COMPANY"
      ]
    },
    {
      id: 7,
      title: "Company Incorporation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      documents: [
        "DOCUMENTS REQUIRED FROM DIRECTOR AND SUBSCRIBERS",
        "PHOTOGRAPH",
        "PAN CARD AADHAR CARD PAN CARD AADHAR CARD",
        "DL/ VOTER ID/ PASSPORT (ANY ONE)",
        "BANK STATEMENT/ ELECTRICITY BILL/ PHONE BILL (WITH ENTRY NOT OLDER THEN 2 MONTH)",
        "CAPITAL WITH WHICH COMPANY WILL GET INCORPORATED",
        "RENT AGREEMENT/ NOC FROM OWNER"
      ]
    },
    {
      id: 8,
      title: "GST Registration",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      documents: [
        "INCORPORATION CERTIFICATE",
        "AADHAR AND PAN CARD OF ALL DIRECTORS CONTACT DETAILS",
        "OWNERSHIP DOCUMENTS/ RENT AGREEMENT",
        "PASSPORT SIZE PHOTO OF ALL DIRECTORS",
        "CONTACT DETAILS OF ALL DIRECTORS"
      ]
    },
    {
      id: 9,
      title: "Startup India Registration",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      documents: [
        "COMPANY INCORPORATION CERTIFICATE",
        "PAN CARD COMPANY",
        "DIRECTOR KYC",
        "AUTHORISATION LETTER",
        "GST NUMBER",
        "CURRENT ACCOUNT"
      ]
    }
  ]

  const handlePrevious = () => {
    if (selectedCertificate) {
      const currentIndex = certificates.findIndex(c => c.id === selectedCertificate.id)
      if (currentIndex > 0) {
        setSelectedCertificate(certificates[currentIndex - 1])
      }
    }
  }

  const handleNext = () => {
    if (selectedCertificate) {
      const currentIndex = certificates.findIndex(c => c.id === selectedCertificate.id)
      if (currentIndex < certificates.length - 1) {
        setSelectedCertificate(certificates[currentIndex + 1])
      }
    }
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-80 flex items-center justify-center overflow-hidden pt-20"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(17, 24, 39, 0.85) 0%, rgba(30, 41, 59, 0.85) 100%), url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1500&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Certificates</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Complete certification and registration services for your business
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 border-yellow-400"
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{cert.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm font-semibold">REQUIRED DOCUMENTS</p>
                  
                  {/* Button */}
                  <button
                    onClick={() => setSelectedCertificate(cert)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Certificate Details */}
      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-gray-800 text-white p-6 flex justify-between items-center border-b-4 border-yellow-400">
              <div className="flex items-center gap-4">
                <FileText className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-black">{selectedCertificate.title}</h2>
              </div>
              <button
                onClick={() => setSelectedCertificate(null)}
                className="text-white hover:text-yellow-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              {/* Certificate Image */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Required Documents */}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-gray-900 mb-6 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-yellow-500" />
                  Required Documents
                </h3>
                <div className="space-y-3">
                  {selectedCertificate.documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border-l-4 border-yellow-400"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 flex items-center justify-center mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 font-semibold">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg mb-8 border-2 border-yellow-200">
                <p className="text-gray-700 mb-4">Ready to get your {selectedCertificate.title}?</p>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
                  Apply Now
                </button>
              </div>
            </div>

            {/* Modal Navigation */}
            <div className="sticky bottom-0 bg-gray-50 border-t-2 border-gray-200 p-6 flex justify-between items-center">
              <button
                onClick={handlePrevious}
                disabled={selectedCertificate.id === 1}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
                  selectedCertificate.id === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Previous
              </button>

              <div className="text-center">
                <p className="text-gray-600 font-semibold">
                  {selectedCertificate.id} of {certificates.length}
                </p>
              </div>

              <button
                onClick={handleNext}
                disabled={selectedCertificate.id === certificates.length}
                className={`flex items-center gap-2 px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
                  selectedCertificate.id === certificates.length
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-black border-t-4 border-yellow-400">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            Need <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Certification Help</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Our expert team will guide you through every step of the certification and registration process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-lg hover:shadow-lg hover:shadow-yellow-400/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400/10 transition-all duration-300">
              Contact Us
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

export default Certificates

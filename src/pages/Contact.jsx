import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Cornerstone HVAC &amp; Plumbing | York, PA | (267) 300-2400</title>
        <meta name="description" content="Contact Cornerstone HVAC & Plumbing in York, PA. Call (267) 300-2400, email us, or fill out our contact form. 24/7 emergency service available." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative py-20 md:py-24 flex items-center" style={{ minHeight: '260px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://placehold.co/1920x400/1a365d/ffffff?text=Contact+Cornerstone+HVAC)' }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26, 54, 93, 0.85)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <nav className="text-blue-200 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-xl">
            We're here to help with all your HVAC &amp; plumbing needs in York, PA. Reach out anytime.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left: Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-600 mb-6">We'll respond within 2 hours during business hours. For emergencies, call <a href="tel:2673002400" className="text-orange-500 font-semibold hover:text-orange-700">(267) 300-2400</a>.</p>
              <QuoteForm />
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:2673002400" className="text-orange-500 hover:text-orange-700 text-lg font-bold transition-colors">
                        (267) 300-2400
                      </a>
                      <p className="text-gray-500 text-sm">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@cornerstonehvac.com" className="text-orange-500 hover:text-orange-700 transition-colors">
                        info@cornerstonehvac.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-700">123 Commerce Dr<br />York, PA 17401</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5">🕐</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Business Hours</p>
                      <table className="text-sm text-gray-700 w-full">
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="py-1.5 pr-6 font-medium">Emergency:</td>
                            <td className="py-1.5 text-orange-500 font-bold">24/7 — Always Available</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-1.5 pr-6 font-medium">Mon – Fri:</td>
                            <td className="py-1.5">7:00 AM – 7:00 PM</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-1.5 pr-6 font-medium">Saturday:</td>
                            <td className="py-1.5">8:00 AM – 5:00 PM</td>
                          </tr>
                          <tr>
                            <td className="py-1.5 pr-6 font-medium">Sunday:</td>
                            <td className="py-1.5">Emergency Service Only</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Service Area</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We serve York, PA and all surrounding communities including Springettsbury Township, West York, Red Lion, Dallastown, Spring Garden Township, Manchester Township, East York, Hanover, and throughout York County, Pennsylvania.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://placehold.co/800x400/cccccc/333333?text=Map+Coming+Soon"
              alt="Cornerstone HVAC & Plumbing location map - York, PA"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-3">
            123 Commerce Dr, York, PA 17401 — Serving all of York County, Pennsylvania
          </p>
        </div>
      </section>
    </>
  )
}

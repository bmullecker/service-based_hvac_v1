import { Helmet } from 'react-helmet-async'
import QuoteForm from '../components/QuoteForm'
import BoldPageHero from '../components/BoldPageHero'
import CTABanner from '../components/CTABanner'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Cornerstone HVAC &amp; Plumbing | York, PA | (267) 300-2400</title>
        <meta name="description" content="Contact Cornerstone HVAC & Plumbing in York, PA. Call (267) 300-2400, email us, or fill out our contact form. 24/7 emergency service available." />
      </Helmet>

      <BoldPageHero
        title="Contact Us"
        subtitle="We're here to help. Get a free quote or reach us directly."
        breadcrumbLabel="Contact"
      />

      {/* Main Content */}
      <section className="bg-gray-50 py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Left: Form */}
          <div>
            <h2 className="font-black text-gray-900 text-2xl mb-2">Send Us a Message</h2>
            <p className="text-gray-500 mb-6">
              We'll respond within 2 hours during business hours. For emergencies, call{' '}
              <a href="tel:2673002400" style={{ color: '#c2410c' }} className="font-bold">
                (267) 300-2400
              </a>.
            </p>
            <QuoteForm />
          </div>

          {/* Right: Contact Info */}
          <div>
            <h2 className="font-black text-gray-900 text-2xl mb-8">Contact Information</h2>

            {/* Phone */}
            <div className="flex items-start gap-4 py-5 border-b border-gray-200">
              <span className="text-2xl text-gray-400" aria-hidden="true">📞</span>
              <div>
                <p className="font-black text-gray-900 text-sm uppercase tracking-wide mb-1">Phone</p>
                <a
                  href="tel:2673002400"
                  style={{ color: '#c2410c' }}
                  className="font-black text-2xl"
                >
                  (267) 300-2400
                </a>
                <p className="text-gray-500 text-sm mt-1">24/7 Emergency Service Available</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4 py-5 border-b border-gray-200">
              <span className="text-2xl text-gray-400" aria-hidden="true">✉️</span>
              <div>
                <p className="font-black text-gray-900 text-sm uppercase tracking-wide mb-1">Email</p>
                <a
                  href="mailto:info@cornerstonehvac.com"
                  className="text-gray-700 hover:text-[#c2410c] transition-colors"
                >
                  info@cornerstonehvac.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 py-5 border-b border-gray-200">
              <span className="text-2xl text-gray-400" aria-hidden="true">📍</span>
              <div>
                <p className="font-black text-gray-900 text-sm uppercase tracking-wide mb-1">Address</p>
                <p className="text-gray-700">123 Commerce Dr<br />York, PA 17401</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 py-5 border-b border-gray-200">
              <span className="text-2xl text-gray-400" aria-hidden="true">🕐</span>
              <div>
                <p className="font-black text-gray-900 text-sm uppercase tracking-wide mb-1">Business Hours</p>
                <table className="text-sm w-full">
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <th scope="row" className="py-1.5 pr-6 font-medium text-left text-gray-700">Emergency:</th>
                      <td className="py-1.5 text-[#c2410c] font-bold">24/7 — Always Available</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <th scope="row" className="py-1.5 pr-6 font-medium text-left text-gray-700">Mon – Fri:</th>
                      <td className="py-1.5 text-gray-700">7:00 AM – 7:00 PM</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <th scope="row" className="py-1.5 pr-6 font-medium text-left text-gray-700">Saturday:</th>
                      <td className="py-1.5 text-gray-700">8:00 AM – 5:00 PM</td>
                    </tr>
                    <tr>
                      <th scope="row" className="py-1.5 pr-6 font-medium text-left text-gray-700">Sunday:</th>
                      <td className="py-1.5 text-gray-700">Emergency Service Only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-white py-12 px-6 md:px-12 text-center">
        <h2
          className="font-black text-gray-900 mb-4"
          style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
        >
          Our Service Area
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          We serve York, PA and all surrounding communities including Springettsbury Township, West York, Red Lion, Dallastown, Spring Garden Township, Manchester Township, East York, Hanover, and throughout York County, Pennsylvania.
        </p>
      </section>

      {/* Map */}
      <section className="px-6 md:px-12 pb-16 bg-white">
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

      <CTABanner />
    </>
  )
}

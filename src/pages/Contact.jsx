import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Roland Plumbing Heating &amp; Air | York, PA | (717) 246-3270</title>
        <meta name="description" content="Contact Roland Plumbing Heating & Air in York, PA. Call (717) 246-3270, email us, or fill out our contact form. 24/7 emergency service available." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative py-20 md:py-24 flex items-center" style={{ minHeight: '260px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/customer-service/1920/400)' }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26, 54, 93, 0.85)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <nav className="text-blue-200 text-sm mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">Contact</span>
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
              <p className="text-gray-600 mb-6">We'll respond within 2 hours during business hours. For emergencies, call <a href="tel:7172463270" className="text-orange-700 font-semibold hover:text-orange-700">(717) 246-3270</a>.</p>
              <QuoteForm />
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5" aria-hidden="true">📞</span>
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:7172463270" className="text-orange-700 hover:text-orange-700 text-lg font-bold transition-colors">
                        (717) 246-3270
                      </a>
                      <p className="text-gray-500 text-sm">24/7 Emergency Service Available</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5" aria-hidden="true">✉️</span>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:info@rolandplumbing.com" className="text-orange-700 hover:text-orange-700 transition-colors">
                        info@rolandplumbing.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5" aria-hidden="true">📍</span>
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-700">745 Summit Dr<br />Dallastown, PA 17313</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-2xl mt-0.5" aria-hidden="true">🕐</span>
                    <div>
                      <p className="font-semibold text-gray-900 mb-2">Business Hours</p>
                      <table className="text-sm text-gray-700 w-full">
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <th scope="row" className="py-1.5 pr-6 font-medium text-left">Emergency:</th>
                            <td className="py-1.5 text-orange-700 font-bold">24/7 — Always Available</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <th scope="row" className="py-1.5 pr-6 font-medium text-left">Mon – Fri:</th>
                            <td className="py-1.5">7:00 AM – 7:00 PM</td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <th scope="row" className="py-1.5 pr-6 font-medium text-left">Saturday:</th>
                            <td className="py-1.5">8:00 AM – 5:00 PM</td>
                          </tr>
                          <tr>
                            <th scope="row" className="py-1.5 pr-6 font-medium text-left">Sunday:</th>
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
                  We serve York, PA and all surrounding communities including Dallastown, Shrewsbury, Glen Rock, Seven Valleys, Red Lion, Felton, East Prospect, Loganville, and throughout York County, Pennsylvania.
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
              alt="Roland Plumbing Heating & Air location map - York, PA"
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-3">
            745 Summit Dr, Dallastown, PA 17313 — Serving all of York County, Pennsylvania
          </p>
        </div>
      </section>
    </>
  )
}

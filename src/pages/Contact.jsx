import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Cornerstone HVAC & Plumbing | York, PA | (267) 300-2400</title>
        <meta name="description" content="Contact Cornerstone HVAC & Plumbing in York, PA. Call (267) 300-2400, email us, or fill out our contact form. Same-day service available. 24/7 emergency line." />
        <meta name="keywords" content="contact HVAC York PA, contact plumber York PA, Cornerstone HVAC contact, schedule HVAC York Pennsylvania" />
        <meta property="og:title" content="Contact Cornerstone HVAC & Plumbing | York, PA" />
        <meta property="og:description" content="Reach Cornerstone HVAC & Plumbing in York, PA by phone, email, or online form. Same-day service available. 24/7 emergency line." />
        <link rel="canonical" href="https://www.cornerstonehvac.com/contact" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative bg-[#1a365d] py-16 md:py-20 px-4"
        style={{ backgroundImage: 'url(https://placehold.co/1920x350/1a365d/ffffff?text=Contact+Cornerstone+HVAC)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/85" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-blue-200 text-sm mb-2">
            <Link to="/" className="hover:text-white">Home</Link> / Contact Us
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Contact Cornerstone HVAC &amp; Plumbing</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            We'd love to hear from you. Fill out the form, call us directly, or stop by our York, PA office — we're here to help.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f8fafc] py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* FORM */}
          <div id="quote">
            <h2 className="text-xl font-extrabold text-[#1a365d] mb-6">Send Us a Message</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <QuoteForm />
            </div>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h2 className="text-xl font-extrabold text-[#1a365d] mb-6">Get in Touch</h2>
            <div className="bg-[#1a365d] text-white rounded-2xl p-6 shadow-sm space-y-5 mb-6">
              <div className="flex gap-4 items-start">
                <span className="text-2xl flex-shrink-0">📞</span>
                <div>
                  <div className="font-bold text-sm text-blue-200 uppercase tracking-wide mb-1">Phone</div>
                  <a href="tel:2673002400" className="text-[#f97316] font-extrabold text-xl hover:underline">(267) 300-2400</a>
                  <div className="text-blue-200 text-sm mt-1">24/7 for emergencies</div>
                </div>
              </div>
              <div className="flex gap-4 items-start border-t border-blue-800 pt-5">
                <span className="text-2xl flex-shrink-0">✉️</span>
                <div>
                  <div className="font-bold text-sm text-blue-200 uppercase tracking-wide mb-1">Email</div>
                  <a href="mailto:info@cornerstonehvac.com" className="text-white hover:text-[#f97316] transition-colors">info@cornerstonehvac.com</a>
                </div>
              </div>
              <div className="flex gap-4 items-start border-t border-blue-800 pt-5">
                <span className="text-2xl flex-shrink-0">📍</span>
                <div>
                  <div className="font-bold text-sm text-blue-200 uppercase tracking-wide mb-1">Address</div>
                  <div className="text-white">123 Commerce Dr<br />York, PA 17401</div>
                </div>
              </div>
              <div className="flex gap-4 items-start border-t border-blue-800 pt-5">
                <span className="text-2xl flex-shrink-0">🕐</span>
                <div>
                  <div className="font-bold text-sm text-blue-200 uppercase tracking-wide mb-1">Business Hours</div>
                  <table className="text-sm text-blue-100 w-full">
                    <tbody>
                      <tr><td className="pr-4">Mon – Fri</td><td>7:00 AM – 7:00 PM</td></tr>
                      <tr><td className="pr-4">Saturday</td><td>8:00 AM – 5:00 PM</td></tr>
                      <tr><td className="pr-4">Sunday</td><td className="text-[#f97316]">Emergency Only</td></tr>
                    </tbody>
                  </table>
                  <div className="text-[#f97316] font-semibold text-sm mt-2">24/7 Emergency Line Always Open</div>
                </div>
              </div>
            </div>

            {/* RESPONSE PROMISE */}
            <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-[#1a365d] mb-2">Our Response Promise</h3>
              <ul className="space-y-2 text-sm text-[#374151]">
                <li>✅ Phone calls answered within 3 rings during business hours</li>
                <li>✅ Form submissions responded to within 2 business hours</li>
                <li>✅ Emergency calls dispatched immediately, 24/7</li>
                <li>✅ Same-day appointments available for most services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="bg-white px-4 pb-14">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-extrabold text-[#1a365d] mb-4 text-center">Our Location — York, PA</h2>
          <img
            src="https://placehold.co/1200x400/e5e7eb/374151?text=Map+Coming+Soon+%7C+123+Commerce+Dr%2C+York+PA+17401"
            alt="Map of Cornerstone HVAC & Plumbing location in York, PA"
            className="w-full rounded-2xl shadow-sm"
          />
          <p className="text-center text-[#6b7280] text-sm mt-3">
            Serving York · Springettsbury · West York · Red Lion · Dallastown · Dover and all of York County, PA
          </p>
        </div>
      </section>
    </>
  )
}

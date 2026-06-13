import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Cornerstone HVAC & Plumbing</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="bg-[#f8fafc] min-h-[70vh] flex items-center py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-8xl font-extrabold text-[#e5e7eb] mb-4">404</div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-[#1a365d] mb-4">
            Page Not Found
          </h1>
          <p className="text-[#6b7280] text-base mb-8">
            Sorry, the page you're looking for doesn't exist or may have moved. Use the links below to find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              to="/"
              className="bg-[#1a365d] text-white font-bold px-8 py-3 rounded-lg hover:bg-blue-900 transition-colors"
            >
              Back to Home
            </Link>
            <a
              href="tel:2673002400"
              className="bg-[#f97316] text-white font-bold px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              📞 Call Us Now
            </a>
          </div>
          <div className="text-left bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
            <p className="font-bold text-[#1a365d] mb-3 text-sm">Helpful Links</p>
            <ul className="space-y-2">
              {[
                { to: '/heating', label: 'Heating Services' },
                { to: '/cooling', label: 'Cooling Services' },
                { to: '/plumbing', label: 'Plumbing Services' },
                { to: '/emergency', label: '24/7 Emergency Service' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact Us' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[#2563eb] hover:underline text-sm">
                    {l.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | Cornerstone HVAC &amp; Plumbing</title>
        <meta name="description" content="Thank you for contacting Cornerstone HVAC & Plumbing. We'll be in touch within 2 hours." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="flex-grow bg-[#1a365d] flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">

          {/* Checkmark */}
          <div
            className="w-24 h-24 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white font-black text-4xl mx-auto mb-8"
            aria-hidden="true"
          >
            ✓
          </div>

          <h1
            className="font-black text-white"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          >
            Thank You!
          </h1>

          <p className="text-blue-200 text-xl mt-4 mb-10">
            We received your request and will call you within 2 hours.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-white text-gray-900 font-black px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
            <a
              href="tel:2673002400"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Call Us Now
            </a>
          </div>

          {/* Trust chips */}
          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            <span className="text-blue-300 text-sm font-medium">✓ Licensed &amp; Insured</span>
            <span className="text-blue-300 text-sm font-medium">✓ 24/7 Emergency Service</span>
            <span className="text-blue-300 text-sm font-medium">✓ Free Estimates</span>
          </div>

        </div>
      </section>
    </>
  )
}

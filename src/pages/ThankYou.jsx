import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | Roland Plumbing Heating &amp; Air</title>
        <meta name="description" content="Thank you for contacting Roland Plumbing Heating & Air. We'll be in touch within 2 hours." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="flex-grow bg-gray-50 flex items-center justify-center px-4 py-24">
        <div className="max-w-lg w-full text-center">
          <div className="text-7xl mb-6">✅</div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Thank You! We'll Be in Touch Soon.
          </h1>
          <p className="text-gray-600 text-lg mb-4 leading-relaxed">
            Your request has been received. Our team will call you within <strong>2 hours during business hours</strong>.
          </p>
          <p className="text-gray-600 mb-8">
            Monday–Friday 7am–7pm | Saturday 8am–5pm
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
            <p className="text-gray-700 font-medium mb-2">For immediate help, call us now:</p>
            <a
              href="tel:7172463270"
              className="text-2xl font-bold text-orange-500 hover:text-orange-700 transition-colors"
            >
              📞 (717) 246-3270
            </a>
            <p className="text-gray-500 text-sm mt-2">Available 24/7 for emergencies</p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-navy text-white font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#1a365d' }}
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}

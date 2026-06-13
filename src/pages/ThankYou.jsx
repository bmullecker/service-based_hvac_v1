import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Thank You | Cornerstone HVAC & Plumbing | York, PA</title>
        <meta name="description" content="Thank you for contacting Cornerstone HVAC & Plumbing. We'll reach out within 2 business hours." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="bg-[#f8fafc] min-h-[70vh] flex items-center py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <div className="text-7xl mb-6">✅</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#1a365d] mb-4">
            Thank You! We'll Be in Touch Soon.
          </h1>
          <p className="text-[#374151] text-lg mb-3">
            Your request has been received. Our team will call you within <strong>2 business hours</strong>.
          </p>
          <p className="text-[#6b7280] text-base mb-8">
            If you need immediate assistance or have an emergency, please call us directly:
          </p>
          <a
            href="tel:2673002400"
            className="inline-block bg-[#f97316] text-white font-extrabold text-xl px-10 py-5 rounded-xl hover:bg-orange-600 transition-colors shadow-lg mb-8"
          >
            📞 (267) 300-2400
          </a>
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-base font-bold text-[#1a365d] mb-4">While You Wait — What to Expect</h2>
            <ol className="text-left space-y-3 text-sm text-[#374151] max-w-sm mx-auto">
              <li className="flex gap-3"><span className="text-[#f97316] font-bold flex-shrink-0">1.</span> A Cornerstone team member will review your request.</li>
              <li className="flex gap-3"><span className="text-[#f97316] font-bold flex-shrink-0">2.</span> We'll call to confirm details and schedule your appointment.</li>
              <li className="flex gap-3"><span className="text-[#f97316] font-bold flex-shrink-0">3.</span> A certified tech will arrive on time and ready to help.</li>
            </ol>
          </div>
          <div className="mt-8">
            <Link to="/" className="text-[#2563eb] hover:underline text-sm font-medium">
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

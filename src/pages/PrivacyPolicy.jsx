import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Cornerstone HVAC &amp; Plumbing | York, PA</title>
        <meta name="description" content="Privacy Policy for Cornerstone HVAC & Plumbing in York, PA. Learn how we collect, use, and protect your personal information." />
        <meta name="robots" content="noindex" />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative py-16 md:py-20 flex items-center" style={{ minHeight: '200px', backgroundColor: '#1a365d' }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <nav className="text-blue-200 text-sm mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-blue-200">Last updated: January 1, 2024</p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="flex-grow py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray">

          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Cornerstone HVAC &amp; Plumbing ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or contact us for service in York, Pennsylvania.
          </p>

          <div className="space-y-10">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We collect information you voluntarily provide when you:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-3">
                <li>Submit a quote request or contact form on our website</li>
                <li>Call us at (267) 300-2400</li>
                <li>Email us at info@cornerstonehvac.com</li>
                <li>Schedule a service appointment</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">This information may include your <strong>name, phone number, email address, service address, and a description of your HVAC or plumbing needs</strong>. We do not collect payment information through our website — payments are handled securely at the time of service.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We use the information you provide solely to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Respond to your service inquiries and quote requests</li>
                <li>Schedule and confirm HVAC and plumbing service appointments</li>
                <li>Follow up after completed service to ensure your satisfaction</li>
                <li>Send occasional service reminders (e.g., annual tune-up reminders) — you may opt out at any time</li>
                <li>Improve our website and services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. We Do Not Sell Your Information</h2>
              <p className="text-gray-700 leading-relaxed">
                Cornerstone HVAC &amp; Plumbing <strong>does not sell, rent, or trade your personal information</strong> to third parties for marketing purposes. As a local York, PA small business, we value the trust you place in us and take that responsibility seriously.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
              <p className="text-gray-700 leading-relaxed mb-3">We may use the following third-party services to operate our website and business:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Google Analytics</strong> — We may use Google Analytics to understand how visitors interact with our website. This service collects anonymized data such as pages visited, time on site, and geographic region. Google's privacy policy is available at <span className="text-orange-500">google.com/policies/privacy</span>.</li>
                <li><strong>Email / CRM Tools</strong> — We may use email and customer management software to store and manage customer records for the purpose of scheduling and service follow-up.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may use cookies — small text files stored on your device — to improve your browsing experience and help us understand how our site is used. You can disable cookies at any time through your browser settings. Disabling cookies will not affect your ability to request a quote or contact us.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We take reasonable precautions to protect your personal information from unauthorized access, loss, or misuse. Our website uses HTTPS encryption. However, no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will promptly delete it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">You have the right to:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Request a copy of the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of any marketing communications</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-3">To exercise any of these rights, contact us using the information below.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. We encourage you to review this policy periodically.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us About Privacy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have questions or concerns about this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Cornerstone HVAC &amp; Plumbing</strong></p>
                <p>123 Commerce Dr, York, PA 17401</p>
                <p>
                  Phone:{' '}
                  <a href="tel:2673002400" className="text-orange-500 font-semibold hover:text-orange-700">
                    (267) 300-2400
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a href="mailto:info@cornerstonehvac.com" className="text-orange-500 hover:text-orange-700">
                    info@cornerstonehvac.com
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

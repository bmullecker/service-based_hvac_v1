import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Roland Plumbing Heating &amp; Air</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="flex-grow bg-gray-50 flex items-center justify-center px-4 py-24">
        <div className="max-w-lg w-full text-center">
          <div className="text-8xl font-bold mb-4" style={{ color: '#1a365d' }}>404</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 text-lg mb-8">
            Sorry, we couldn't find that page. But Roland Plumbing Heating &amp; Air is still here to help with your York, PA home comfort needs!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
              style={{ backgroundColor: '#f97316' }}
            >
              Go to Home
            </Link>
            <a
              href="tel:7172463270"
              className="border-2 text-gray-900 font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              style={{ borderColor: '#1a365d', color: '#1a365d' }}
            >
              📞 Call (717) 246-3270
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

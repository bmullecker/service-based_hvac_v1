import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Cornerstone HVAC &amp; Plumbing</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section className="flex-grow bg-gray-900 flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">

          {/* 404 */}
          <div style={{ fontSize: 'clamp(6rem, 15vw, 12rem)', fontWeight: 900, lineHeight: 1, color: '#c2410c' }}>
            404
          </div>

          <h1 className="font-black text-white text-3xl md:text-4xl mt-4 mb-4">
            Page Not Found
          </h1>

          <p className="text-gray-400 text-lg mb-10">
            The page you're looking for doesn't exist. Let us help you get back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-[#c2410c] text-white font-black px-8 py-4 rounded-xl hover:opacity-90 transition-opacity"
            >
              Go Home
            </Link>
            <a
              href="tel:2673002400"
              className="border border-gray-600 text-gray-300 font-bold px-8 py-4 rounded-xl hover:border-gray-400 transition"
            >
              Call Us
            </a>
          </div>

        </div>
      </section>
    </>
  )
}

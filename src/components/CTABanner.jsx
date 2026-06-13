import { Link } from 'react-router-dom'

export default function CTABanner({ heading, subtext }) {
  return (
    <section style={{ backgroundColor: '#f97316' }} className="py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          {heading || 'Ready to Get Started? Call Us Now!'}
        </h2>
        {subtext && (
          <p className="text-orange-100 text-lg mb-6">{subtext}</p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="tel:2673002400"
            className="bg-white text-orange-600 font-bold text-xl px-8 py-4 rounded-xl hover:bg-orange-50 transition-colors duration-200 shadow-lg"
          >
            📞 (267) 300-2400
          </a>
          <Link
            to="/contact"
            className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-orange-600 transition-colors duration-200"
          >
            Get a Free Quote
          </Link>
        </div>
        <p className="text-orange-100 text-sm mt-4">24/7 Emergency Service Available • No After-Hours Surcharges</p>
      </div>
    </section>
  )
}

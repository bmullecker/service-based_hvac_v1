import { Link } from 'react-router-dom'

const trustItems = ['Licensed & Insured', 'NATE Certified', 'No Hidden Fees']

export default function StickyCallSidebar() {
  return (
    <aside className="hidden md:block px-4 pt-12">
      <div className="sticky top-24 bg-gray-900 rounded-2xl p-6 shadow-2xl">
        <p className="text-white font-black text-2xl mb-1">Need Help Now?</p>
        <p className="text-gray-400 text-sm mb-6">We answer every call.</p>
        <a
          href="tel:2673002400"
          className="block text-white text-center font-black text-xl py-4 rounded-xl mb-3 transition-colors"
          style={{ backgroundColor: '#c2410c' }}
        >
          (267) 300-2400
        </a>
        <Link
          to="/contact"
          className="block border border-gray-600 text-gray-300 text-center text-sm py-3 rounded-xl hover:border-gray-400 hover:text-white transition-colors"
        >
          Or get a free quote
        </Link>
        <div className="border-t border-gray-700 my-6" />
        {trustItems.map((item) => (
          <div key={item} className="flex items-center gap-2 text-gray-400 text-xs mb-2">
            <span className="font-bold" style={{ color: '#c2410c' }} aria-hidden="true">✓</span>
            {item}
          </div>
        ))}
      </div>
    </aside>
  )
}

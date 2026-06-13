import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/heating', label: 'Heating' },
  { to: '/cooling', label: 'Cooling' },
  { to: '/plumbing', label: 'Plumbing' },
  { to: '/emergency', label: 'Emergency', emergency: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLinkClass = ({ isActive }) =>
    isActive
      ? 'text-orange-500 font-semibold border-b-2 border-orange-500 pb-0.5'
      : 'text-gray-700 hover:text-orange-500 transition-colors duration-200'

  const getEmergencyLinkClass = ({ isActive }) =>
    isActive
      ? 'text-red-700 font-bold border-b-2 border-red-600 pb-0.5'
      : 'text-red-600 font-semibold hover:text-red-800 transition-colors duration-200'

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <img
            src="https://placehold.co/150x50/1a365d/ffffff?text=Cornerstone"
            alt="Cornerstone HVAC & Plumbing Logo"
            className="h-10 w-auto"
          />
          <span className="hidden sm:block text-navy font-bold text-lg leading-tight" style={{ color: '#1a365d' }}>
            Cornerstone<br />
            <span className="text-sm font-normal text-gray-600">HVAC &amp; Plumbing</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={link.emergency ? getEmergencyLinkClass : getLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:2673002400"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
            style={{ backgroundColor: '#f97316' }}
          >
            📞 (267) 300-2400
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 hover:text-orange-500 text-2xl p-2 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    link.emergency
                      ? isActive
                        ? 'bg-red-50 text-red-700 font-bold'
                        : 'text-red-600 hover:bg-red-50'
                      : isActive
                      ? 'bg-orange-50 text-orange-600 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:2673002400"
              className="mt-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-4 py-3 rounded-lg text-center transition-colors duration-200"
              style={{ backgroundColor: '#f97316' }}
              onClick={() => setMenuOpen(false)}
            >
              📞 Call (267) 300-2400
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

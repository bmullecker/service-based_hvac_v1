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
      ? 'text-orange-700 font-semibold border-b-2 border-orange-700 pb-0.5'
      : 'text-gray-700 hover:text-orange-700 transition-colors duration-200'

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
          <span className="font-black text-2xl" style={{ color: '#1a365d' }}>Roland</span>
          <span className="hidden sm:block font-normal text-sm text-gray-600">Plumbing Heating &amp; Air</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
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
            href="tel:7172463270"
            className="text-white font-bold px-5 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2"
            style={{ backgroundColor: '#c2410c' }}
          >
            <span aria-hidden="true">📞</span> (717) 246-3270
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 hover:text-orange-700 text-2xl p-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-700 rounded"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg" id="mobile-menu">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Mobile navigation">
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
                      ? 'bg-orange-50 text-orange-700 font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <a
              href="tel:7172463270"
              className="mt-3 text-white font-bold px-4 py-3 rounded-lg text-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2"
              style={{ backgroundColor: '#c2410c' }}
              onClick={() => setMenuOpen(false)}
            >
              <span aria-hidden="true">📞</span> Call (717) 246-3270
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a365d' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <img
              src="https://placehold.co/150x50/ffffff/1a365d?text=Cornerstone"
              alt="Cornerstone HVAC & Plumbing"
              className="h-10 w-auto mb-4"
            />
            <p className="text-blue-200 text-sm mb-4 leading-relaxed">
              York, PA's trusted HVAC &amp; Plumbing experts since 2012. Over 1,000 local families served with honest, reliable home comfort services.
            </p>
            <p className="text-blue-200 text-xs mb-4">
              <strong className="text-white">Your Trusted York, PA Home Comfort Experts</strong>
            </p>
            <div className="flex gap-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white text-sm transition-colors">
                Facebook
              </a>
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white text-sm transition-colors">
                Google
              </a>
              <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-white text-sm transition-colors">
                Yelp
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
                { to: '/contact', label: 'Careers' },
                { to: '/contact', label: 'Privacy Policy' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { to: '/heating', label: 'Heating & Furnace Repair' },
                { to: '/cooling', label: 'AC & Cooling Services' },
                { to: '/plumbing', label: 'Plumbing Services' },
                { to: '/emergency', label: '24/7 Emergency Service' },
                { to: '/heating', label: 'Preventive Maintenance' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
                  >
                    → {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-blue-200">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5">📍</span>
                <span>123 Commerce Dr<br />York, PA 17401</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">📞</span>
                <a href="tel:2673002400" className="hover:text-white transition-colors">
                  (267) 300-2400
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">✉️</span>
                <a href="mailto:info@cornerstonehvac.com" className="hover:text-white transition-colors">
                  info@cornerstonehvac.com
                </a>
              </li>
              <li className="mt-3">
                <strong className="text-white block mb-1">Hours:</strong>
                <table className="text-xs text-blue-200 w-full">
                  <tbody>
                    <tr>
                      <td className="pr-3 py-0.5">Emergency:</td>
                      <td className="text-orange-400 font-semibold">24/7</td>
                    </tr>
                    <tr>
                      <td className="pr-3 py-0.5">Mon–Fri:</td>
                      <td>7am – 7pm</td>
                    </tr>
                    <tr>
                      <td className="pr-3 py-0.5">Saturday:</td>
                      <td>8am – 5pm</td>
                    </tr>
                    <tr>
                      <td className="pr-3 py-0.5">Sunday:</td>
                      <td>Emergency only</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <p>© 2024 Cornerstone HVAC &amp; Plumbing. All rights reserved.</p>
          <p>PA License #HVAC-12345 | Plumbing #PL-67890</p>
        </div>
      </div>
    </footer>
  )
}

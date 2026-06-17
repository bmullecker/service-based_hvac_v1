import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1a365d' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <p className="text-white font-black text-2xl mb-1">Roland</p>
            <p className="text-blue-300 text-xs mb-4">Plumbing Heating &amp; Air Conditioning Inc.</p>
            <p className="text-blue-200 text-sm mb-4 leading-relaxed">
              Dallastown & York County's trusted plumbing, heating & air conditioning experts since 1998. 26 years of honest, reliable service.
            </p>
            <p className="text-blue-200 text-xs mb-4">
              <strong className="text-white">Serving All of York County, PA</strong>
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
                { to: '/privacy-policy', label: 'Privacy Policy' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
                  >
                    <span aria-hidden="true">→ </span>{link.label}
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
                { to: '/maintenance', label: 'Preventive Maintenance' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-blue-200 hover:text-white text-sm transition-colors duration-200"
                  >
                    <span aria-hidden="true">→ </span>{link.label}
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
                <span>745 Summit Dr<br />Dallastown, PA 17313</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">📞</span>
                <a href="tel:7172463270" className="hover:text-white transition-colors">
                  (717) 246-3270
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-400">✉️</span>
                <a href="mailto:info@rolandplumbing.com" className="hover:text-white transition-colors">
                  info@rolandplumbing.com
                </a>
              </li>
              <li className="mt-3">
                <strong className="text-white block mb-1">Hours:</strong>
                <table className="text-xs text-blue-200 w-full">
                  <tbody>
                    <tr>
                      <th scope="row" className="pr-3 py-0.5 font-normal text-left">Emergency:</th>
                      <td className="text-orange-400 font-semibold">24/7</td>
                    </tr>
                    <tr>
                      <th scope="row" className="pr-3 py-0.5 font-normal text-left">Mon–Fri:</th>
                      <td>7:30am – 5pm</td>
                    </tr>
                    <tr>
                      <th scope="row" className="pr-3 py-0.5 font-normal text-left">Sat–Sun:</th>
                      <td>Closed</td>
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
          <p>© 2026 Roland Plumbing Heating &amp; Air Conditioning Inc. All rights reserved.</p>
          <p>745 Summit Dr, Dallastown, PA 17313</p>
        </div>
      </div>
    </footer>
  )
}

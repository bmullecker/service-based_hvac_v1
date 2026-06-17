import { Helmet } from 'react-helmet-async'
import QuoteForm from '../components/QuoteForm'

const plumbingServices = [
  {
    icon: '🚿',
    title: 'Water Heater Repair & Replacement',
    description: 'No hot water? We repair and replace all types — tank, tankless, gas, and electric. Same-day service available throughout York County.',
  },
  {
    icon: '🔧',
    title: 'Drain Cleaning & Unclogging',
    description: 'Slow drains and stubborn clogs cleared fast. Professional drain snakes and hydro-jetting to clear any drain in your home.',
  },
  {
    icon: '💧',
    title: 'Leak Detection & Repair',
    description: 'Hidden leaks cause serious water damage. Advanced leak detection finds and fixes leaks before they become costly disasters.',
  },
  {
    icon: '🔩',
    title: 'Pipe Repair & Replacement',
    description: 'Burst pipes, corroded pipes, and aging plumbing repaired or replaced. Emergency pipe repairs handled promptly throughout York County.',
  },
  {
    icon: '🚽',
    title: 'Toilet & Faucet Repair',
    description: 'Running toilets, leaky faucets, low water pressure, and fixture replacements. Fast, affordable plumbing repairs.',
  },
  {
    icon: '⚙️',
    title: 'Sump Pump Installation & Service',
    description: 'Keep your basement dry with a properly installed and maintained sump pump. We install, repair, and replace all systems.',
  },
]

const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

export default function PlumbingDemo() {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Roland Plumbing | York County, PA | (717) 246-3270</title>
        <meta name="description" content="Licensed plumber in York County, PA. Water heater repair, drain cleaning, leak detection, pipe repair. Same-day service. Call (717) 246-3270." />
      </Helmet>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <button onClick={() => scroll('top')} className="leading-tight text-left">
            <span className="font-black text-2xl block" style={{ color: '#1a365d' }}>Roland</span>
            <span className="text-xs text-gray-500 font-normal">Plumbing</span>
          </button>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <button onClick={() => scroll('services')} className="hover:text-orange-700 transition-colors">
              Plumbing Services
            </button>
            <button onClick={() => scroll('contact')} className="hover:text-orange-700 transition-colors">
              Contact
            </button>
          </nav>
          <a
            href="tel:7172463270"
            className="text-white font-bold px-5 py-2 rounded-lg text-sm transition-colors"
            style={{ backgroundColor: '#c2410c' }}
          >
            (717) 246-3270
          </a>
        </div>
      </header>

      <main className="flex-grow">

        {/* Hero */}
        <section id="top" className="bg-[#1a365d] pt-20 pb-24 px-6 md:px-12">
          <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
            York County's Trusted Plumber
          </p>
          <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', lineHeight: 1, fontWeight: 900, color: 'white' }}>
            Fast Plumbing.<br />
            <span style={{ color: '#c2410c' }}>Done Right.</span>
          </h1>
          <p className="text-blue-200 text-xl leading-relaxed max-w-xl mt-6 mb-10">
            Licensed York County plumbers handling everything from leaky faucets to burst pipes — serving Dallastown, York, Shrewsbury, Glen Rock, Red Lion, and all of York County since 1998.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="tel:7172463270"
              className="text-white font-black px-8 py-4 rounded-xl text-lg"
              style={{ backgroundColor: '#c2410c' }}
            >
              (717) 246-3270
            </a>
            <button
              onClick={() => scroll('services')}
              className="border-2 border-blue-400 text-blue-100 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transition cursor-pointer"
            >
              Our Services ↓
            </button>
          </div>
          <div className="flex gap-8 mt-12 border-t border-blue-700 pt-8 flex-wrap">
            {[
              { value: '26+', label: 'Years Serving York County' },
              { value: 'PA Licensed', label: 'Fully Insured' },
              { value: 'Since 1998', label: '' },
            ].map((stat) => (
              <div key={stat.value}>
                <div className="text-white font-black text-3xl">{stat.value}</div>
                {stat.label && <div className="text-blue-400 text-sm">{stat.label}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 px-6 md:px-12 bg-white">
          <h2 className="font-black text-gray-900 mb-12" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Plumbing Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plumbingServices.map((service) => (
              <div key={service.title} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow duration-200">
                <div className="text-3xl mb-3" aria-hidden="true">{service.icon}</div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Roland */}
        <section className="py-20 px-6 md:px-12" style={{ backgroundColor: '#c2410c' }}>
          <h2 className="font-black text-white mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Why York County Chooses Roland
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: '📋',
                title: 'Upfront Pricing',
                description: "You get a written estimate before we start. No surprises, no hidden fees — you approve the price before we touch anything.",
              },
              {
                icon: '✅',
                title: 'PA Licensed & Insured',
                description: 'All work performed by PA-licensed plumbers with full liability insurance. We pull permits when required to protect your home.',
              },
              {
                icon: '⚡',
                title: 'Same-Day Service',
                description: "Plumbing problems can't wait. We offer same-day service throughout York County, Monday through Friday.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white bg-opacity-10 rounded-2xl p-6">
                <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                <h3 className="text-white font-black text-xl mb-2">{item.title}</h3>
                <p className="text-orange-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-900 py-20 px-6 md:px-12">
          <h2 className="text-white font-black mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
            Real York County Homeowners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Tom S.',
                location: 'York, PA',
                quote: 'Cleared a nasty drain clog same day. Called in the morning and they were at my door by noon. Professional, quick, and reasonably priced.',
              },
              {
                name: 'Maria D.',
                location: 'Dallastown, PA',
                quote: 'Fixed our water heater fast. Fair pricing and super clean work. They showed up on time and had it running same day. Will definitely use them again.',
              },
              {
                name: 'James K.',
                location: 'Shrewsbury, PA',
                quote: 'Burst pipe in the basement — they were there within the hour. Knew exactly what they were doing. Highly recommend Roland for any plumbing emergency.',
              },
            ].map((t) => (
              <div key={t.name} className="bg-gray-800 rounded-2xl p-6">
                <div className="text-yellow-400 text-lg mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 italic leading-relaxed mb-4">"{t.quote}"</p>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20 px-6 md:px-12 bg-gray-50">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-black text-gray-900 mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                Get a Free Quote
              </h2>
              <p className="text-gray-600 mb-8">Tell us about your plumbing problem and we'll get back to you within 2 hours during business hours.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden="true">📞</span>
                  <a href="tel:7172463270" className="font-bold text-orange-700 text-lg">(717) 246-3270</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden="true">📍</span>
                  <span className="text-gray-700 text-sm">745 Summit Dr, Dallastown, PA 17313</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl" aria-hidden="true">🕐</span>
                  <span className="text-gray-700 text-sm">Mon–Fri: 7:30 AM – 5:00 PM</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <QuoteForm />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a365d' }} className="text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-black text-xl">Roland Plumbing</p>
            <p className="text-blue-300 text-xs">745 Summit Dr, Dallastown, PA 17313 · Serving All of York County</p>
          </div>
          <div className="text-center">
            <a href="tel:7172463270" className="text-white font-bold text-lg hover:text-orange-400 transition-colors">(717) 246-3270</a>
            <p className="text-blue-300 text-xs mt-1">Mon–Fri 7:30am–5pm</p>
          </div>
          <p className="text-blue-400 text-xs">© 2026 Roland Plumbing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

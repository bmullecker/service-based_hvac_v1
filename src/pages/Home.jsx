import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import FAQAccordion from '../components/FAQAccordion'
import QuoteForm from '../components/QuoteForm'
import CTABanner from '../components/CTABanner'

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Cornerstone HVAC & Plumbing",
  "telephone": "(267) 300-2400",
  "email": "info@cornerstonehvac.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Commerce Dr",
    "addressLocality": "York",
    "addressRegion": "PA",
    "postalCode": "17401",
    "addressCountry": "US"
  },
  "url": "https://www.cornerstonehvac.com",
  "priceRange": "$$",
  "description": "York, PA's trusted HVAC and plumbing experts. Fast furnace repair, AC service & plumbing repairs. Over 1,000 local families served.",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:00",
      "closes": "19:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "areaServed": ["York PA", "Springettsbury PA", "West York PA", "Red Lion PA", "Dallastown PA"]
}

const services = [
  {
    title: 'Heating Services',
    description: 'Expert furnace repair, heat pump service & boiler maintenance. Stay warm all winter with our certified heating technicians.',
    image: 'https://picsum.photos/seed/heating-warmth/800/500',
    link: '/heating',
  },
  {
    title: 'Cooling Services',
    description: 'AC repair, installation & tune-ups for central air and ductless mini-split systems across York, PA.',
    image: 'https://picsum.photos/seed/cooling-comfort/800/500',
    link: '/cooling',
  },
  {
    title: 'Plumbing Services',
    description: 'Water heater repair, drain cleaning, leak detection & pipe repair. Licensed York, PA plumbers.',
    image: 'https://picsum.photos/seed/plumbing-repair/800/500',
    link: '/plumbing',
  },
  {
    title: '24/7 Emergency Service',
    description: 'No heat? Burst pipe? We answer every call — nights, weekends, and holidays. No extra charge.',
    image: 'https://picsum.photos/seed/emergency-service/800/500',
    link: '/emergency',
  },
]

const testimonials = [
  {
    name: 'Tom S.',
    location: 'York, PA',
    quote: 'Fast response, fixed our furnace on a cold night! The technician was professional, explained everything clearly, and had us warm again in no time. Highly recommend Cornerstone!',
    rating: 5,
  },
  {
    name: 'Maria D.',
    location: 'York, PA',
    quote: 'Fair pricing and super clean work. Our AC has never been better. They showed up on time, gave us an upfront price, and did a fantastic job. Will definitely use them again.',
    rating: 5,
  },
  {
    name: 'James K.',
    location: 'Springettsbury, PA',
    quote: 'Cleared a nasty drain clog same day. Highly recommend! Called in the morning and they were at my door by noon. Professional, quick, and reasonably priced.',
    rating: 5,
  },
]

const processSteps = [
  {
    number: '1',
    title: 'Honest Estimate',
    description: 'Call or submit your request. We provide a transparent, upfront quote with no hidden fees before any work begins.',
  },
  {
    number: '2',
    title: 'Technician Assigned',
    description: 'A NATE-certified, background-checked technician is dispatched to your York, PA home promptly.',
  },
  {
    number: '3',
    title: 'Diagnosis & Repair',
    description: 'Your technician diagnoses the issue, explains the solution clearly, and completes the repair efficiently.',
  },
  {
    number: '4',
    title: 'Comfort Restored',
    description: 'We leave your home clean and comfortable — and follow up to make sure you\'re 100% satisfied.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>HVAC &amp; Plumbing Repair York PA | Cornerstone HVAC &amp; Plumbing | 24/7 Service</title>
        <meta name="description" content="York, PA's trusted HVAC and plumbing experts. Fast furnace repair, AC service & plumbing repairs. Over 1,000 local families served. Licensed & insured. Call (267) 300-2400." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Hero — Text-Forward, No Image */}
      <section className="bg-white pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Label chip */}
          <span className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 text-xs font-bold px-3 py-1.5 rounded-full border border-orange-200 mb-6">
            York, PA Since 2012
          </span>

          {/* Giant headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-none tracking-tight mb-6">
            York's HVAC &amp; Plumbing Experts
          </h1>

          {/* Two-column row */}
          <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
            {/* Left: subtext */}
            <p className="text-gray-500 text-xl leading-relaxed max-w-md">
              Fast repairs, honest pricing, and 24/7 emergency service for York, PA homeowners since 2012.
            </p>

            {/* Right: action buttons */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:2673002400"
                className="inline-block text-white font-bold px-6 py-3 rounded-xl text-center"
                style={{ backgroundColor: '#c2410c' }}
              >
                Call (267) 300-2400
              </a>
              <Link
                to="/contact"
                className="inline-block border-2 border-gray-900 text-gray-900 font-bold px-6 py-3 rounded-xl text-center hover:bg-gray-900 hover:text-white transition"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="px-4 pb-12 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto">

          {/* Cell 1 — Main Hero Image: col-span-2 row-span-2 */}
          <div
            className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative"
            style={{ minHeight: '320px' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://picsum.photos/seed/hvac-york-pa/800/600)' }}
            />
            {/* Dark navy gradient overlay from bottom */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(26,54,93,0.85) 0%, transparent 60%)' }}
            />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-white font-bold text-xl">1,000+ York Families Served</p>
            </div>
          </div>

          {/* Cell 2 — Emergency CTA: col-span-2 md:col-span-1 */}
          <div
            className="col-span-2 md:col-span-1 rounded-2xl p-6 flex flex-col justify-between"
            style={{ backgroundColor: '#c2410c', minHeight: '160px' }}
          >
            <div className="text-5xl font-black text-white">24/7</div>
            <div>
              <p className="text-orange-200 text-sm font-medium mb-1">Emergency Service</p>
              <a
                href="tel:2673002400"
                className="text-white font-bold text-sm hover:underline"
              >
                Call Now →
              </a>
            </div>
          </div>

          {/* Cell 3 — Stats: col-span-1 */}
          <div className="col-span-1 bg-gray-900 rounded-2xl p-6 text-white flex flex-col justify-center">
            <div className="text-3xl font-black mb-1">Since 2012</div>
            <div className="text-gray-400 text-xs font-medium uppercase tracking-wide">NATE Certified</div>
          </div>

          {/* Cell 4 — Heating card: col-span-1 */}
          <div className="col-span-1 bg-gray-50 rounded-2xl p-5 relative overflow-hidden">
            <h3 className="font-bold text-gray-900 text-lg mb-1">Heating</h3>
            <p className="text-gray-500 text-xs mb-3 leading-relaxed">Furnace repair, heat pumps &amp; boiler service.</p>
            <Link
              to="/heating"
              className="text-orange-700 font-semibold text-sm hover:text-orange-900 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Cell 5 — Cooling card: col-span-1 */}
          <div className="col-span-1 bg-blue-50 rounded-2xl p-5 relative overflow-hidden">
            <h3 className="font-bold text-gray-900 text-lg mb-1">Cooling</h3>
            <p className="text-gray-500 text-xs mb-3 leading-relaxed">AC repair, installation &amp; tune-ups.</p>
            <Link
              to="/cooling"
              className="text-orange-700 font-semibold text-sm hover:text-orange-900 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Cell 6 — Testimonial pullquote: col-span-2 */}
          <div
            className="col-span-2 rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: '#1a365d' }}
          >
            <div className="text-6xl font-serif leading-none mb-2" style={{ color: '#93c5fd' }}>"</div>
            <p className="text-white text-xl font-medium italic mb-4">
              Fast response, fixed our furnace on a cold night!
            </p>
            <p className="text-blue-300 text-sm">— Tom S., York PA</p>
          </div>

          {/* Cell 7 — Plumbing card: col-span-1 */}
          <div className="col-span-1 bg-green-50 rounded-2xl p-5">
            <h3 className="font-bold text-gray-900 text-lg mb-1">Plumbing</h3>
            <p className="text-gray-500 text-xs mb-3 leading-relaxed">Water heaters, drains &amp; leak detection.</p>
            <Link
              to="/plumbing"
              className="text-orange-700 font-semibold text-sm hover:text-orange-900 transition-colors"
            >
              Learn More →
            </Link>
          </div>

          {/* Cell 8 — No Hidden Fees badge: col-span-1 */}
          <div className="col-span-1 bg-yellow-400 rounded-2xl p-6 flex flex-col items-center justify-center text-center">
            <p className="font-black text-gray-900 text-xl mb-1">No Hidden Fees</p>
            <p className="text-gray-700 text-xs">Upfront pricing guaranteed</p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Cornerstone?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              York, PA homeowners trust us because we deliver on our promises — every time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: '⏰',
                title: 'Punctual Guarantee',
                description: 'We show up on time — every time. If we\'re late, you get a discount on your service.',
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                description: 'Upfront quotes with no surprises. You approve the price before we start any work.',
              },
              {
                icon: '🏆',
                title: 'Certified Technicians',
                description: 'NATE-certified, background-checked technicians who treat your home with respect.',
              },
              {
                icon: '🏠',
                title: 'Local Small Business',
                description: 'York family serving York families since 2012. We live and work in this community.',
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-orange-700 pl-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What York Homeowners Are Saying</h2>
            <p className="text-gray-600 text-lg">Real reviews from real York, PA customers.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-50 rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <div className="text-yellow-400 text-xl mb-3">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-700 mb-4 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4" style={{ backgroundColor: '#1a365d' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
            <p className="text-blue-200 text-lg">Getting your home comfortable again is simple.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className="text-center relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-3/4 w-1/2 h-0.5 bg-blue-500" />
                )}
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 relative z-10"
                  style={{ backgroundColor: '#f97316' }}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section id="quote" className="py-16 px-4" style={{ backgroundColor: '#c2410c' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Get Your Free Quote Today</h2>
            <p className="text-orange-100 text-lg">
              Serving York, Springettsbury, West York, Red Lion, Dallastown &amp; surrounding areas.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  )
}

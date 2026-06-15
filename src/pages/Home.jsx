import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CTABanner from '../components/CTABanner'
import QuoteForm from '../components/QuoteForm'

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Roland Plumbing Heating & Air",
  "telephone": "(717) 246-3270",
  "email": "info@rolandplumbing.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "745 Summit Dr",
    "addressLocality": "Dallastown",
    "addressRegion": "PA",
    "postalCode": "17313",
    "addressCountry": "US"
  },
  "url": "https://www.rolandplumbing.com",
  "priceRange": "$$",
  "description": "Dallastown & York County PA's trusted plumbing, heating & air conditioning experts. 26 years serving York County families.",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "07:30",
      "closes": "17:00"
    }
  ],
  "areaServed": ["Dallastown PA", "York PA", "Shrewsbury PA", "Glen Rock PA", "Felton PA", "Seven Valleys PA"]
}

const services = [
  {
    title: 'Heating Services',
    description: 'Expert furnace repair, heat pump service & boiler maintenance. Stay warm all winter with our certified heating technicians.',
    image: 'https://placehold.co/800x500/1e3a5f/93c5fd?text=Photo+Coming+Soon',
    link: '/heating',
  },
  {
    title: 'Cooling Services',
    description: 'AC repair, installation & tune-ups for central air and ductless mini-split systems across York, PA.',
    image: 'https://placehold.co/800x500/1e3a5f/93c5fd?text=Photo+Coming+Soon',
    link: '/cooling',
  },
  {
    title: 'Plumbing Services',
    description: 'Water heater repair, drain cleaning, leak detection & pipe repair. Licensed York, PA plumbers.',
    image: 'https://placehold.co/800x500/1e3a5f/93c5fd?text=Photo+Coming+Soon',
    link: '/plumbing',
  },
  {
    title: '24/7 Emergency Service',
    description: 'No heat? Burst pipe? We answer every call — nights, weekends, and holidays. No extra charge.',
    image: 'https://placehold.co/800x500/1e3a5f/93c5fd?text=Photo+Coming+Soon',
    link: '/emergency',
  },
]

const testimonials = [
  {
    name: 'Tom S.',
    location: 'York, PA',
    quote: 'Fast response, fixed our furnace on a cold night! The technician was professional, explained everything clearly, and had us warm again in no time. Highly recommend Roland!',
    rating: 5,
  },
  {
    name: 'Maria D.',
    location: 'Dallastown, PA',
    quote: 'Fair pricing and super clean work. Our AC has never been better. They showed up on time, gave us an upfront price, and did a fantastic job. Will definitely use them again.',
    rating: 5,
  },
  {
    name: 'James K.',
    location: 'Shrewsbury, PA',
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
    description: "We leave your home clean and comfortable — and follow up to make sure you're 100% satisfied.",
  },
]

const whyChooseUs = [
  {
    icon: '⏰',
    title: 'Punctual Guarantee',
    description: "We show up on time — every time. If we're late, you get a discount on your service.",
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
    description: 'Dallastown-based, York County-focused. We\'ve been your neighbors for over 26 years.',
  },
]

const serviceLinks = ['/heating', '/cooling', '/plumbing', '/emergency']

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Plumbing Heating &amp; Air Dallastown PA | Roland | (717) 246-3270</title>
        <meta name="description" content="Dallastown & York County PA's trusted plumbing, heating & AC experts. 26 years serving local families. Licensed & insured. Call (717) 246-3270." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      {/* Page wrapper: two-column on desktop (content + sticky sidebar) */}
      <div className="md:grid md:grid-cols-[1fr_280px]">

        {/* ── Left content column ── */}
        <div>

          {/* Section 1 — Hero */}
          <section className="bg-[#1a365d] pt-20 pb-24 px-6 md:px-12">
            <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-6">
              York County's Trusted Plumbing, Heating &amp; Air
            </p>

            <h1 style={{ fontSize: 'clamp(2.8rem, 7vw, 6.5rem)', lineHeight: 1, fontWeight: 900, color: 'white' }}>
              We Fix It Right.
              <br />
              <span style={{ color: '#c2410c' }}>Every Time.</span>
            </h1>

            <p className="text-blue-200 text-xl leading-relaxed max-w-xl mt-6 mb-10">
              From furnace failures to burst pipes, Roland has served York County homeowners for over 26 years — from Dallastown to Shrewsbury and everywhere in between.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="tel:7172463270"
                className="text-white font-black px-8 py-4 rounded-xl text-lg"
                style={{ backgroundColor: '#c2410c' }}
              >
                (717) 246-3270
              </a>
              <a
                href="#services"
                onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="border-2 border-blue-400 text-blue-100 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-800 transition cursor-pointer"
              >
                Our Services ↓
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 mt-12 border-t border-blue-700 pt-8 flex-wrap">
              {[
                { value: '26+', label: 'Years Serving York County' },
                { value: 'Mon–Fri', label: '7:30 AM – 5:00 PM' },
                { value: 'Since 1998', label: '' },
              ].map((stat) => (
                <div key={stat.value}>
                  <div className="text-white font-black text-3xl">{stat.value}</div>
                  {stat.label && <div className="text-blue-400 text-sm">{stat.label}</div>}
                </div>
              ))}
            </div>
          </section>

          {/* Section 1b — Real Work Photo */}
          <section className="bg-gray-900 py-14 px-6 md:px-12">
            <p className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">Real Work. Real Results.</p>
            <h2 className="font-black text-white mb-8" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}>
              26 Years of Quality You Can See
            </h2>
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/roland-work-2.jpg"
                alt="Bathroom remodel by Roland Plumbing Heating & Air — York County PA"
                className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-500 text-xs mt-4">Custom bathroom installation — Dallastown, PA</p>
          </section>

          {/* Section 2 — Services */}
          <section id="services" className="bg-white py-20 px-6 md:px-12">
            <h2
              className="font-black text-gray-900 mb-12"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              What We Do
            </h2>

            {services.map((service, index) => (
              <div
                key={service.title}
                className="border-b border-gray-100 py-8 flex items-start gap-6 group"
              >
                {/* Large ordinal number */}
                <div className="font-black text-gray-200 text-6xl leading-none w-20 flex-shrink-0 group-hover:text-orange-100 transition select-none">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-black text-gray-900 text-2xl mb-2">{service.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="text-orange-700 font-bold hover:text-orange-900 transition"
                    aria-label={`Explore ${service.title}`}
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            ))}
          </section>

          {/* Section 3 — Why Us */}
          <section
            className="py-20 px-6 md:px-12"
            style={{ backgroundColor: '#c2410c' }}
          >
            <h2
              className="font-black text-white mb-10"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Why York County Chooses Roland
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((item) => (
                <div
                  key={item.title}
                  className="bg-white bg-opacity-10 rounded-2xl p-6"
                >
                  <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
                  <h3 className="text-white font-black text-xl mb-2">{item.title}</h3>
                  <p className="text-orange-100 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Testimonials */}
          <section className="bg-gray-900 py-20 px-6 md:px-12">
            <h2
              className="text-white font-black mb-10"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Real York County Homeowners
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="bg-gray-800 rounded-2xl p-6"
                >
                  <div className="text-yellow-400 text-lg mb-3">⭐⭐⭐⭐⭐</div>
                  <p className="text-gray-300 italic leading-relaxed mb-4">"{testimonial.quote}"</p>
                  <p className="text-white font-bold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — How It Works */}
          <section className="bg-white py-20 px-6 md:px-12">
            <h2
              className="font-black text-gray-900 mb-10"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              How It Works
            </h2>

            <div className="space-y-8">
              {processSteps.map((step) => (
                <div key={step.number} className="flex items-start gap-6">
                  <div
                    className="font-black text-4xl leading-none flex-shrink-0 w-12"
                    style={{ color: '#c2410c' }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-black text-gray-900 text-xl mb-1">{step.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — Quote Form */}
          <section id="quote" className="bg-gray-50 py-20 px-6 md:px-12">
            <h2
              className="text-gray-900 font-black mb-10"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Get Your Free Quote
            </h2>

            <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-8">
              <QuoteForm />
            </div>
          </section>

        </div>
        {/* ── End left content column ── */}

        {/* ── Sticky Sidebar (desktop only) ── */}
        <aside className="hidden md:block px-4 py-20">
          <div className="sticky top-20 self-start bg-gray-900 rounded-2xl p-6 shadow-2xl">
            <p className="text-white font-black text-2xl mb-2">Need Help Now?</p>
            <p className="text-gray-400 text-sm mb-6">We answer every call.</p>

            <a
              href="tel:7172463270"
              className="block text-white text-center font-black text-xl py-4 rounded-xl mb-3"
              style={{ backgroundColor: '#c2410c' }}
            >
              (717) 246-3270
            </a>

            <Link
              to="/contact"
              className="block border border-gray-600 text-gray-300 text-center text-sm py-3 rounded-xl hover:border-gray-400 transition"
            >
              Or get a free quote
            </Link>

            <hr className="mt-6 mb-6 border-gray-700" />

            <div className="space-y-2">
              {['Licensed & Insured', 'NATE Certified', 'No Hidden Fees'].map((line) => (
                <div key={line} className="flex items-center gap-2">
                  <span style={{ color: '#c2410c' }} aria-hidden="true">✓</span>
                  <span className="text-gray-400 text-xs">{line}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
        {/* ── End sticky sidebar ── */}

      </div>

      <CTABanner />
    </>
  )
}

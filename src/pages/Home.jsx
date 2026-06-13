import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import FAQAccordion from '../components/FAQAccordion'
import QuoteForm from '../components/QuoteForm'

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

      {/* Hero Section */}
      <section
        className="relative flex items-center"
        style={{ minHeight: '600px' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/hvac-york-pa/1920/700)' }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26, 54, 93, 0.85)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 md:py-28 text-center w-full">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            York, PA's Most Trusted{' '}<br className="hidden md:block" />
            HVAC &amp; Plumbing Experts — 24/7
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Fast, reliable heating, cooling &amp; plumbing repairs. Over 1,000 local families served. Licensed &amp; insured.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#quote"
              onClick={(e) => { e.preventDefault(); document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg cursor-pointer"
              style={{ backgroundColor: '#f97316' }}
            >
              Get a Free Quote
            </a>
            <a
              href="tel:2673002400"
              className="border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white hover:text-navy transition-colors duration-200"
              style={{ '--tw-text-opacity': '1' }}
            >
              📞 Call (267) 300-2400
            </a>
          </div>
          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 justify-center">
            {['✔ Licensed & Insured', '✔ 24/7 Emergency', '✔ Satisfaction Guarantee'].map((badge) => (
              <span
                key={badge}
                className="bg-white bg-opacity-20 border border-white border-opacity-40 text-white px-5 py-2 rounded-full text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Primary Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Primary Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From furnace repairs to emergency plumbing — Cornerstone HVAC &amp; Plumbing serves York, PA and surrounding communities including Springettsbury, West York, Red Lion, and Dallastown.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-gray-100"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-36 md:h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-3 hidden sm:block">{service.description}</p>
                  <Link
                    to={service.link}
                    className="text-orange-500 font-semibold text-sm hover:text-orange-700 transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
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
      <section id="quote" className="py-16 px-4" style={{ backgroundColor: '#f97316' }}>
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
    </>
  )
}

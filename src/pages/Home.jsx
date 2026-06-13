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

      {/* Hero — Split Screen */}
      <section className="min-h-screen flex flex-col md:flex-row">
        {/* Left half — cover image, desktop only */}
        <div
          className="hidden md:flex md:w-1/2 relative"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/hvac-york-pa/1200/900)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.15)' }}
          />
        </div>

        {/* Right half — content + form */}
        <div className="md:w-1/2 bg-white flex flex-col justify-center px-8 md:px-12 py-12">
          <p className="text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#c2410c' }}>
            York, PA's Home Comfort Experts
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Fast, Reliable HVAC &amp; Plumbing Service
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Licensed technicians. Upfront pricing. 24/7 emergency service.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-2 mb-8">
            {['✔ Licensed', '✔ NATE Certified', '✔ 24/7 Service'].map((badge) => (
              <span
                key={badge}
                className="bg-gray-100 rounded-full px-3 py-1 text-xs text-gray-700 font-medium"
              >
                {badge}
              </span>
            ))}
          </div>

          {/* Quote form */}
          <QuoteForm />

          {/* Phone CTA */}
          <div className="mt-6">
            <span className="text-gray-500 text-sm">Or call us now: </span>
            <a
              href="tel:2673002400"
              className="text-lg font-bold"
              style={{ color: '#c2410c' }}
            >
              (267) 300-2400
            </a>
          </div>
        </div>
      </section>

      {/* Primary Services — Horizontal Cards on Desktop */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Primary Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From furnace repairs to emergency plumbing — Cornerstone HVAC &amp; Plumbing serves York, PA and surrounding communities including Springettsbury, West York, Red Lion, and Dallastown.
            </p>
          </div>

          {/* Mobile: 1-col grid; Desktop: vertical stack of horizontal cards */}
          <div className="grid grid-cols-1 md:hidden gap-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-36 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                  <Link
                    to={service.link}
                    className="font-semibold text-sm hover:opacity-80 transition-opacity focus:outline-none focus:underline"
                    style={{ color: '#c2410c' }}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden md:block space-y-4">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex gap-4 items-start"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="md:w-48 h-32 object-cover rounded-xl flex-shrink-0"
                />
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
                  <Link
                    to={service.link}
                    className="font-semibold text-sm hover:opacity-80 transition-opacity focus:outline-none focus:underline"
                    style={{ color: '#c2410c' }}
                    aria-label={`Learn more about ${service.title}`}
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

      <CTABanner />
    </>
  )
}

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import BoldPageHero from '../components/BoldPageHero'
import CTABanner from '../components/CTABanner'

const emergencySituations = [
  {
    icon: '🌡️',
    title: 'No Heat',
    description: 'Furnace failure in winter is dangerous. We dispatch immediately to restore heat to your York, PA home — 24 hours a day, 7 days a week.',
  },
  {
    icon: '🥵',
    title: 'No AC',
    description: 'AC failure during a York, PA heat wave is a health risk. We prioritize cooling emergencies and respond fast — nights and weekends included.',
  },
  {
    icon: '💧',
    title: 'Burst Pipe',
    description: 'Shut off your main water valve and call us immediately. Our emergency plumbers arrive within 60–90 minutes to stop the damage and make repairs.',
  },
  {
    icon: '⚠️',
    title: 'Gas Leak',
    description: 'If you smell gas, leave immediately and call 911. Then call us. Our certified technicians handle gas line emergencies safely and swiftly.',
  },
  {
    icon: '🌊',
    title: 'Flooding / Water Backup',
    description: 'Sewer backup, basement flooding, or plumbing overflow — we respond immediately to minimize water damage in your York, PA home.',
  },
  {
    icon: '🚿',
    title: 'No Hot Water',
    description: 'Water heater failure means no hot water for showers, dishes, or laundry. We repair or replace water heaters same-day throughout York County.',
  },
]

const responseTimeline = [
  {
    step: '1',
    title: 'You Call',
    description: 'Call (267) 300-2400. A live person answers every call — no answering machines, no waiting for a callback.',
  },
  {
    step: '2',
    title: 'Dispatch',
    description: 'We immediately dispatch the nearest available technician to your York, PA location. You receive an ETA within minutes.',
  },
  {
    step: '3',
    title: 'On-Site',
    description: 'Our technician arrives in a fully-stocked truck within 60–90 minutes, ready to diagnose and repair on the spot.',
  },
  {
    step: '4',
    title: 'Resolved',
    description: 'Most emergency repairs are completed in a single visit. We restore your comfort and leave your home clean.',
  },
]

export default function Emergency() {
  return (
    <>
      <Helmet>
        <title>24/7 Emergency HVAC &amp; Plumbing York PA | Cornerstone — We Answer Every Call</title>
        <meta name="description" content="24/7 emergency HVAC and plumbing service in York, PA. Burst pipes, no heat, AC failure — we respond fast. No extra charge for nights & weekends. Call now: (267) 300-2400." />
      </Helmet>

      <BoldPageHero
        title="24/7 Emergency HVAC & Plumbing — York, PA"
        subtitle="No heat. Burst pipe. AC failure. A real person answers every call, every time."
        breadcrumbLabel="Emergency"
      />

      {/* Urgency badge chip */}
      <div className="bg-gray-900 py-4 px-6 md:px-12 flex justify-center">
        <span className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full animate-pulse motion-reduce:animate-none">
          <span aria-hidden="true">🚨</span> AVAILABLE RIGHT NOW — 24/7/365
        </span>
      </div>

      {/* Full-bleed red CTA strip */}
      <section className="bg-red-600 py-8 px-6 md:px-12 text-center">
        <a
          href="tel:2673002400"
          className="inline-block text-white font-black text-3xl md:text-4xl hover:opacity-90 transition-opacity"
        >
          📞 (267) 300-2400
        </a>
        <p className="text-red-100 mt-3 text-lg">No extra charge for nights, weekends, or holidays</p>
      </section>

      {/* Emergency situations */}
      <section className="bg-gray-900 py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-black text-white mb-12"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            We Handle Every Emergency
          </h2>
          <div className="divide-y divide-gray-700">
            {emergencySituations.map((situation, index) => (
              <div key={situation.title} className="flex gap-6 items-start py-8">
                <span
                  className="font-black flex-shrink-0 leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#991b1b' }}
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-white font-black text-xl mb-2">{situation.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{situation.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response timeline */}
      <section className="bg-red-600 py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-black text-white mb-12 text-center"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Our Response Process
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {responseTimeline.map((item) => (
              <div key={item.step} className="text-center">
                <div className="font-black text-white text-5xl mb-3">{item.step}</div>
                <h3 className="font-black text-white text-lg mb-2">{item.title}</h3>
                <p className="text-red-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us for emergencies */}
      <section className="bg-gray-900 py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-black text-white mb-12 text-center"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
          >
            Why York, PA Trusts Cornerstone for Emergencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💵',
                title: 'No After-Hours Surcharges',
                description: 'Unlike many HVAC companies that charge extra for nights, weekends, and holidays, Cornerstone charges the same fair rates 24/7. Our price is our price — no surprise fees.',
              },
              {
                icon: '🚚',
                title: 'Arrive in 60–90 Minutes',
                description: 'Our trucks are stocked with the most common HVAC and plumbing parts. We arrive fast and are often able to complete repairs in a single visit to your York, PA home.',
              },
              {
                icon: '🔧',
                title: 'Stocked Trucks, Ready to Fix',
                description: 'We stock our service vehicles with thousands of parts. In most cases, we diagnose and fix your emergency the same visit — no waiting for part orders.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white bg-opacity-10 border border-gray-700 rounded-2xl p-6"
              >
                <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="text-white font-black text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        heading="Don't Wait — Call Now"
        subtext="A real person answers every call. We're ready for your emergency in York, PA right now."
      />
    </>
  )
}

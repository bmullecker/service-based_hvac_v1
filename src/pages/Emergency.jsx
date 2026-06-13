import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

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

      {/* Emergency Hero */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-block bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6 animate-pulse">
            🚨 AVAILABLE RIGHT NOW — 24/7/365
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            24/7 Emergency HVAC &amp; Plumbing<br className="hidden md:block" />
            — York, PA
          </h1>
          <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
            No heat. No AC. Burst pipe. Flooding. We respond to every emergency — nights, weekends, holidays — with <strong className="text-white">no extra charge</strong>.
          </p>
          <a
            href="tel:2673002400"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold text-2xl md:text-3xl px-10 py-6 rounded-2xl transition-colors duration-200 shadow-2xl mb-8"
          >
            📞 (267) 300-2400
          </a>
          <p className="text-gray-400 text-lg">
            <strong className="text-white">We pick up every call.</strong> No voicemail. No waiting. A real person answers 24/7.
          </p>
        </div>
      </section>

      {/* We Pick Up Every Call */}
      <section className="py-16 px-4 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">We Pick Up Every Call — Guaranteed</h2>
          <p className="text-red-100 text-xl mb-6 leading-relaxed">
            When your furnace dies at midnight or a pipe bursts on Christmas morning, you can't afford to leave a voicemail. That's why <strong className="text-white">Cornerstone HVAC &amp; Plumbing guarantees a live person answers your call 24 hours a day, 7 days a week, 365 days a year</strong> — including every holiday.
          </p>
          <p className="text-red-100 text-lg leading-relaxed">
            We serve York, Springettsbury, West York, Red Lion, Dallastown, and all of York County, Pennsylvania. Our emergency-equipped trucks are strategically positioned across the area so we can reach your home fast.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-xl font-semibold">
              ✅ No After-Hours Surcharges
            </div>
            <div className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-xl font-semibold">
              ✅ 60–90 Minute Response
            </div>
            <div className="bg-white bg-opacity-20 text-white px-6 py-3 rounded-xl font-semibold">
              ✅ Stocked Trucks, Ready to Fix
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Situations */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">We Handle Every HVAC &amp; Plumbing Emergency</h2>
          <p className="text-gray-400 text-center text-lg mb-10">Whatever the emergency, we're ready in York, PA.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {emergencySituations.map((situation) => (
              <div
                key={situation.title}
                className="bg-gray-800 border border-gray-700 rounded-xl p-6 hover:border-red-500 transition-colors duration-200"
              >
                <div className="text-4xl mb-4">{situation.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{situation.title}</h3>
                <p className="text-gray-400 leading-relaxed">{situation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Response Timeline */}
      <section className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Our Emergency Response Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {responseTimeline.map((item, index) => (
              <div key={item.step} className="text-center relative">
                {index < responseTimeline.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-3/4 w-1/2 h-0.5 bg-red-700" />
                )}
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 relative z-10">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Emergencies */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-10">Why York, PA Trusts Cornerstone for Emergencies</h2>
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
              <div key={item.title} className="bg-gray-800 rounded-xl p-6 text-center border border-gray-700">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big CTA */}
      <section className="py-16 px-4 bg-red-600">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Wait — Call Now
          </h2>
          <p className="text-red-100 text-xl mb-8">
            A real person answers every call. We're ready for your emergency in York, PA right now.
          </p>
          <a
            href="tel:2673002400"
            className="inline-flex items-center gap-3 bg-white text-red-600 font-bold text-2xl md:text-3xl px-10 py-6 rounded-2xl hover:bg-red-50 transition-colors duration-200 shadow-2xl"
          >
            📞 (267) 300-2400
          </a>
          <p className="text-red-100 mt-6 text-lg">York, PA's 24/7 Emergency HVAC &amp; Plumbing Service</p>
        </div>
      </section>
    </>
  )
}

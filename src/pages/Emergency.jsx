import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

const emergencyTypes = [
  { icon: '🔥', title: 'No Heat', desc: 'Furnace or heating system failure — especially dangerous in winter. We prioritize no-heat calls 24/7.' },
  { icon: '❄️', title: 'AC Failure', desc: 'Air conditioning outage during a heat wave is a health risk. We respond fast to get your home cool.' },
  { icon: '💧', title: 'Burst Pipe', desc: 'A burst pipe can dump hundreds of gallons per hour. Shut your main valve and call us immediately.' },
  { icon: '⚠️', title: 'Gas Leak Suspected', desc: 'If you smell gas, leave immediately and call 911. Once safe, call us for emergency system inspection.' },
  { icon: '🏠', title: 'Basement Flooding', desc: 'Failed sump pump or backed-up drain? We dispatch quickly to stop flooding and assess damage.' },
  { icon: '🚿', title: 'No Hot Water', desc: 'Water heater failure affecting the whole household? We carry common replacement units on our trucks.' },
]

const timeline = [
  { step: '1', title: 'You Call', desc: 'Call (267) 300-2400 — a live person answers every call, day or night, 365 days a year.' },
  { step: '2', title: 'Dispatch', desc: 'We dispatch the nearest available certified technician. You\'ll receive their name and ETA immediately.' },
  { step: '3', title: 'On-Site in 60–90 Min', desc: 'Our fully stocked truck arrives fast. Most emergencies are resolved in a single visit.' },
  { step: '4', title: 'Problem Resolved', desc: 'We fix it right, clean up, and confirm everything is working before we leave your home.' },
]

export default function Emergency() {
  return (
    <>
      <Helmet>
        <title>24/7 Emergency HVAC & Plumbing York PA | Cornerstone — We Answer Every Call</title>
        <meta name="description" content="24/7 emergency HVAC and plumbing service in York, PA. Burst pipes, no heat, AC failure — we respond fast. No after-hours surcharge. Call now: (267) 300-2400." />
        <meta name="keywords" content="emergency HVAC York PA, 24/7 plumber York PA, emergency furnace repair York PA, burst pipe repair York PA, after hours HVAC York Pennsylvania" />
        <meta property="og:title" content="24/7 Emergency HVAC & Plumbing in York, PA | Cornerstone" />
        <meta property="og:description" content="Emergency heating, cooling & plumbing in York, PA. We answer every call 24/7/365. Fast response, no after-hours surcharge. Call (267) 300-2400." />
        <link rel="canonical" href="https://www.cornerstonehvac.com/emergency" />
      </Helmet>

      {/* HERO — RED URGENCY */}
      <section className="bg-[#7f1d1d] py-16 md:py-24 px-4 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#991b1b] to-[#7f1d1d]" />
        <div className="relative max-w-3xl mx-auto">
          <p className="text-red-200 text-sm mb-2">
            <Link to="/" className="hover:text-white">Home</Link> / Emergency Service
          </p>
          <div className="inline-block bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full mb-4">
            🚨 Emergency Line — Available 24/7
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            24/7 Emergency HVAC &amp; Plumbing — York, PA
          </h1>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            We answer every call. No voicemail. No runaround. Just fast, reliable help when you need it most.
          </p>
          <a
            href="tel:2673002400"
            className="inline-block bg-[#f97316] text-white font-extrabold text-2xl px-10 py-5 rounded-xl hover:bg-orange-600 transition-colors shadow-xl mb-4"
          >
            📞 (267) 300-2400
          </a>
          <p className="text-red-200 text-sm">No after-hours surcharge · Licensed &amp; Insured · 60–90 min response</p>
        </div>
      </section>

      {/* WE PICK UP EVERY CALL */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a365d] mb-4">We Pick Up Every Call</h2>
          <p className="text-[#374151] text-base leading-relaxed max-w-2xl mx-auto">
            When your heat goes out at 2 AM or a pipe bursts on a Sunday, you shouldn't have to leave a voicemail and hope. Cornerstone HVAC &amp; Plumbing maintains a 24/7 live answering service staffed by our own team — not a call center. A real person who knows our business answers your call and dispatches help immediately. We serve York, Springettsbury, Dallastown, Red Lion, West York, Dover, and all of York County.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="p-6 rounded-2xl border border-gray-100 bg-[#f8fafc]">
              <div className="text-3xl font-extrabold text-[#dc2626] mb-1">24/7</div>
              <div className="text-[#1a365d] font-semibold">Live Answering</div>
              <div className="text-[#6b7280] text-sm mt-1">No voicemail, no bots</div>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100 bg-[#f8fafc]">
              <div className="text-3xl font-extrabold text-[#dc2626] mb-1">60–90</div>
              <div className="text-[#1a365d] font-semibold">Minute Response</div>
              <div className="text-[#6b7280] text-sm mt-1">Average on-site time</div>
            </div>
            <div className="p-6 rounded-2xl border border-gray-100 bg-[#f8fafc]">
              <div className="text-3xl font-extrabold text-[#dc2626] mb-1">$0</div>
              <div className="text-[#1a365d] font-semibold">After-Hours Surcharge</div>
              <div className="text-[#6b7280] text-sm mt-1">Same price, any time</div>
            </div>
          </div>
        </div>
      </section>

      {/* EMERGENCY TYPES */}
      <section className="bg-[#f8fafc] py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a365d] text-center mb-10">What Counts as an Emergency?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyTypes.map((e) => (
              <div key={e.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                <div className="text-4xl mb-3">{e.icon}</div>
                <h3 className="font-bold text-[#1a365d] text-base mb-2">{e.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSE TIMELINE */}
      <section className="bg-[#1a365d] py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-10">What Happens When You Call</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {timeline.map((t) => (
              <div key={t.step} className="text-center">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white font-extrabold text-xl mx-auto mb-4">
                  {t.step}
                </div>
                <h3 className="text-white font-bold text-base mb-2">{t.title}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US FOR EMERGENCIES */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1a365d] text-center mb-8">Why Call Cornerstone in an Emergency</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: '✅', title: 'No After-Hours Surcharge', desc: 'The price you\'re quoted at 11 PM is the same as 11 AM. We believe you shouldn\'t be penalized for a crisis.' },
              { icon: '🚛', title: 'Fully Stocked Service Trucks', desc: 'Our trucks carry thousands of parts. We fix most problems on the spot without a return trip.' },
              { icon: '👷', title: 'Certified, Background-Checked Techs', desc: 'Every technician who comes to your home is NATE-certified and has passed a background check.' },
              { icon: '📍', title: 'Local York County Team', desc: 'We\'re not a national franchise — we\'re your neighbors. We know York, PA roads and respond faster.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl border border-gray-100">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-[#1a365d] mb-1">{item.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-red-700 py-14 px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Having an Emergency Right Now?</h2>
        <p className="text-red-100 text-lg mb-6">Don't wait. Call us — a real person will answer immediately.</p>
        <a
          href="tel:2673002400"
          className="inline-block bg-white text-red-700 font-extrabold text-2xl px-10 py-5 rounded-xl hover:bg-red-50 transition-colors shadow-xl"
        >
          📞 (267) 300-2400
        </a>
      </section>
    </>
  )
}

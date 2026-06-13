import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CTABanner from '../components/CTABanner'
import FAQAccordion from '../components/FAQAccordion'

const plumbingServices = [
  { title: 'Water Heater Repair & Replacement', desc: 'Fast water heater repair or same-day replacement. We service tank, tankless, and heat-pump water heaters throughout York County.', img: 'https://placehold.co/380x220/1a365d/f97316?text=Water+Heater+Repair' },
  { title: 'Drain Cleaning & Unclogging', desc: 'Slow drains, clogs, or backed-up sewer lines — we clear them fast with professional drain-cleaning equipment. No more chemical guesswork.', img: 'https://placehold.co/380x220/1a365d/f97316?text=Drain+Cleaning' },
  { title: 'Leak Detection & Repair', desc: 'Hidden leaks waste thousands of gallons and cause serious damage. We use non-invasive detection methods to find and fix leaks quickly.', img: 'https://placehold.co/380x220/1a365d/f97316?text=Leak+Detection' },
  { title: 'Pipe Repair & Replacement', desc: 'Burst pipes, corroded lines, pinhole leaks — we repair or replace all types of plumbing pipe with durable, code-compliant materials.', img: 'https://placehold.co/380x220/1a365d/f97316?text=Pipe+Repair' },
  { title: 'Toilet & Faucet Repair', desc: 'Running toilets waste up to 200 gallons a day. Dripping faucets add up fast. We fix or replace fixtures quickly and affordably.', img: 'https://placehold.co/380x220/1a365d/f97316?text=Toilet+%26+Faucet' },
  { title: 'Sump Pump Installation & Service', desc: 'Protect your York, PA basement from flooding with a properly sized sump pump. We install, repair, and replace sump pumps year-round.', img: 'https://placehold.co/380x220/1a365d/f97316?text=Sump+Pump' },
]

const benefits = [
  { icon: '🔍', title: 'Licensed PA Plumbers', desc: 'All of our plumbers hold active Pennsylvania plumbing licenses. Fully insured — your home is protected on every job.' },
  { icon: '🚿', title: 'Same-Day Appointments', desc: 'Most plumbing issues are addressed same day. We keep our schedule flexible so you\'re never stuck waiting.' },
  { icon: '💰', title: 'Flat-Rate Pricing', desc: 'We quote the job, not the hour. You know the full price before we pick up a single tool.' },
]

const faqs = [
  { question: 'How do I know if I have a hidden water leak?', answer: 'Signs include unexplained spikes in your water bill, the sound of running water when all fixtures are off, warm spots on floors, discoloration or mold on walls or ceilings, and a water meter that runs when all fixtures are off. If you suspect a leak, call us — early detection prevents major structural damage.' },
  { question: 'How long does a water heater last?', answer: 'Traditional tank water heaters last 8–12 years; tankless systems can last 15–20 years with proper maintenance. Annual flushing, anode rod inspection, and temperature checks extend life significantly. If yours is over 10 years old and starting to fail, replacement is usually the smarter investment.' },
  { question: 'What should I do if a pipe bursts?', answer: 'Immediately shut off the main water supply valve (usually near the water meter). Open faucets to drain remaining water and relieve pressure. Call Cornerstone at (267) 300-2400 — we offer 24/7 emergency plumbing service with fast response times across York, PA.' },
  { question: 'Can you unclog a drain without chemicals?', answer: 'Absolutely — and we recommend it. Chemical drain cleaners damage pipes over time and don\'t address the root cause. We use professional hydro-jetting and mechanical snake equipment to clear clogs completely and safely.' },
  { question: 'Do you offer emergency plumbing service?', answer: 'Yes. We provide 24/7 emergency plumbing throughout York, PA and York County. Whether it\'s a burst pipe, sewage backup, or flooding, we respond fast — with no extra charge for after-hours calls.' },
]

export default function Plumbing() {
  return (
    <>
      <Helmet>
        <title>Plumber York PA | Pipe Repair, Drain Cleaning & Water Heaters | Cornerstone</title>
        <meta name="description" content="Licensed plumbers in York, PA. Water heater repair & replacement, drain cleaning, leak detection, pipe repair. Same-day service available. Call (267) 300-2400." />
        <meta name="keywords" content="plumber York PA, plumbing repair York PA, drain cleaning York PA, water heater repair York PA, emergency plumber York Pennsylvania" />
        <meta property="og:title" content="Licensed Plumbing Services in York, PA | Cornerstone HVAC & Plumbing" />
        <meta property="og:description" content="Licensed plumbers serving York, PA. Water heater repair, drain cleaning, leak detection & more. Same-day service. Call (267) 300-2400." />
        <link rel="canonical" href="https://www.cornerstonehvac.com/plumbing" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative bg-[#1a365d] py-16 md:py-20 px-4"
        style={{ backgroundImage: 'url(https://placehold.co/1920x400/1a365d/ffffff?text=Plumbing+Services+York+PA)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/85" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-blue-200 text-sm mb-2">
            <Link to="/" className="hover:text-white">Home</Link> / Plumbing Services
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Licensed Plumbing Services in York, PA
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mb-6">
            From a dripping faucet to a burst pipe emergency, Cornerstone's licensed York, PA plumbers are ready to respond fast — with flat-rate pricing and guaranteed work.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:2673002400" className="bg-[#f97316] text-white font-bold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
              📞 Call Now: (267) 300-2400
            </a>
            <a href="#quote" className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-[#1a365d] transition-colors">
              Schedule a Plumber
            </a>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-[#374151] text-base leading-relaxed">
            Plumbing problems don't keep business hours — and neither do we. <strong>Cornerstone HVAC &amp; Plumbing</strong> provides comprehensive plumbing repair and installation services across York, Pennsylvania. Our fully licensed plumbers arrive stocked and prepared, so most repairs are completed in a single visit. We serve York, Springettsbury, Dallastown, Red Lion, West York, Dover, and all surrounding communities throughout York County.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-[#f8fafc] py-14 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a365d] text-center mb-10">Our Plumbing Services in York, PA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {plumbingServices.map((s) => (
              <div key={s.title} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-[#1a365d] text-base mb-2">{s.title}</h3>
                  <p className="text-[#6b7280] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1a365d] text-center mb-8">Why Homeowners Choose Cornerstone Plumbing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-[#f97316] transition-colors">
                <div className="text-4xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-[#1a365d] mb-2">{b.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Plumbing Issue? Don't Wait — Call Now." subtext="Licensed York, PA plumbers available same-day and 24/7 for emergencies." />

      {/* FAQ */}
      <section className="bg-[#f8fafc] py-14 px-4" id="quote">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1a365d] text-center mb-8">Frequently Asked Plumbing Questions</h2>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="bg-white py-8 px-4 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-[#6b7280]">
            <strong className="text-[#1a365d]">Plumbing service areas:</strong> York · West York · Springettsbury · Red Lion · Dallastown · Dover · Manchester · Spring Garden · Windsor · Wrightsville · Hellam · New Freedom · Jacobus
          </p>
        </div>
      </section>
    </>
  )
}

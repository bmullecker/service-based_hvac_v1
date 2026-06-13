import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'
import BoldPageHero from '../components/BoldPageHero'
import StickyCallSidebar from '../components/StickyCallSidebar'

const maintenancePlans = [
  {
    title: 'Annual HVAC Tune-Up',
    image: 'https://picsum.photos/seed/hvac-tune-up/800/500',
    description: 'A comprehensive inspection and tune-up of your heating or cooling system. Includes cleaning, lubrication, safety checks, and efficiency testing. Recommended every year before each season.',
  },
  {
    title: 'Furnace Maintenance',
    image: 'https://picsum.photos/seed/furnace-maintenance/800/500',
    description: 'Full furnace inspection covering heat exchanger, burners, igniter, blower motor, flue, and all safety controls. Keep your York, PA home warm and safe all winter.',
  },
  {
    title: 'AC Maintenance',
    image: 'https://picsum.photos/seed/ac-maintenance-plan/800/500',
    description: 'Complete air conditioner tune-up including coil cleaning, refrigerant check, capacitor test, and airflow measurement. Prevent summer breakdowns before they happen.',
  },
  {
    title: 'Plumbing Inspection',
    image: 'https://picsum.photos/seed/plumbing-inspection/800/500',
    description: 'Annual whole-home plumbing inspection covering water heater, supply lines, shut-off valves, drain health, and water pressure. Catch small issues before they become expensive repairs.',
  },
  {
    title: 'Duct Inspection & Sealing',
    image: 'https://picsum.photos/seed/duct-inspection/800/500',
    description: 'Leaky ducts waste 20–30% of your heating and cooling energy. Our duct inspection identifies leaks, blockages, and insulation gaps — then we seal and correct them for maximum efficiency.',
  },
  {
    title: 'Priority Maintenance Plan',
    image: 'https://picsum.photos/seed/priority-service-plan/800/500',
    description: 'Our annual Priority Plan covers one heating tune-up, one cooling tune-up, discounted repairs, and priority scheduling year-round. The best value for York, PA homeowners.',
  },
]

const maintenanceFaqs = [
  {
    question: 'How often should I schedule preventive HVAC maintenance in York, PA?',
    answer: 'We recommend scheduling preventive maintenance twice a year: once in the fall before heating season begins, and once in the spring before cooling season. At a minimum, have your furnace or heat pump serviced annually. Regular maintenance extends equipment life, maintains efficiency, and satisfies most manufacturer warranty requirements.',
  },
  {
    question: 'What does an HVAC tune-up include?',
    answer: 'Our comprehensive HVAC tune-up includes: inspection and cleaning of all major components, testing safety controls and sensors, checking refrigerant levels (cooling), inspecting heat exchangers (heating), lubricating moving parts, checking electrical connections and capacitors, measuring airflow, replacing or inspecting air filters, and a full written report of our findings. We give you an honest assessment — no upselling.',
  },
  {
    question: 'Can preventive maintenance really save me money?',
    answer: 'Yes — studies show that HVAC systems with annual maintenance use 15–25% less energy than neglected systems. A clean, well-tuned system also lasts years longer, avoiding premature replacement. Most importantly, routine maintenance catches small problems (a worn capacitor, a loose belt, a small refrigerant leak) before they cause a complete system failure — often at the worst possible time.',
  },
  {
    question: 'What is your Priority Maintenance Plan?',
    answer: 'Our Priority Plan is an annual maintenance agreement that covers one heating tune-up and one cooling tune-up per year, priority scheduling (you go to the front of the line for appointments), 10% discount on parts and labor for any repairs, and annual plumbing inspection. Plan members also receive reminder calls before each season so you never forget to schedule. Contact us at (267) 300-2400 for current pricing.',
  },
  {
    question: 'Will maintenance void my HVAC warranty?',
    answer: 'No — quite the opposite. Most HVAC manufacturers require annual professional maintenance to keep the warranty valid. Skipping maintenance can actually void your warranty coverage. Our technicians document all maintenance work, which you can use to substantiate warranty claims if needed.',
  },
]

const checklist = [
  'Inspect and clean burners / heat exchanger',
  'Test igniter and flame sensor',
  'Check flue and venting for obstructions',
  'Inspect blower motor and belt',
  'Test all safety controls and limits',
  'Check refrigerant charge (cooling)',
  'Clean evaporator and condenser coils',
  'Test capacitors and contactor (cooling)',
  'Inspect and tighten electrical connections',
  'Lubricate all moving parts',
  'Check and calibrate thermostat',
  'Replace standard air filter (if supplied)',
  'Measure supply and return airflow',
  'Test carbon monoxide levels',
  'Provide written inspection report',
]

export default function Maintenance() {
  return (
    <>
      <Helmet>
        <title>Preventive HVAC &amp; Plumbing Maintenance York PA | Cornerstone</title>
        <meta name="description" content="Preventive HVAC and plumbing maintenance plans in York, PA. Annual tune-ups, priority plans, and whole-home inspections. Keep your system running efficiently. Call (267) 300-2400." />
      </Helmet>

      <BoldPageHero
        title="Preventive HVAC & Plumbing Maintenance"
        subtitle="Annual tune-ups and inspection plans for York, PA homeowners. Prevent breakdowns before they happen."
        breadcrumbLabel="Preventive Maintenance"
      />

      <div className="md:grid md:grid-cols-[1fr_280px]">
        <div>

          {/* Intro */}
          <section className="bg-white py-16 px-6 md:px-12">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              The most expensive HVAC and plumbing repairs are almost always preventable. <strong>Cornerstone HVAC &amp; Plumbing</strong> offers comprehensive preventive maintenance services throughout York, Pennsylvania — helping homeowners in York, Springettsbury, West York, Red Lion, and Dallastown extend the life of their equipment, reduce energy bills, and avoid unexpected breakdowns.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our NATE-certified technicians perform thorough inspections and tune-ups with no hidden fees and no pressure to buy things you don't need. We give you an honest, written report of your system's condition — and if we find a problem, we'll explain it clearly before recommending any repairs.
            </p>
          </section>

          {/* Maintenance services — numbered blocks */}
          <section className="bg-gray-50 py-20 px-6 md:px-12">
            <h2
              className="font-black text-gray-900 mb-12"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Our Maintenance Services
            </h2>
            <div className="divide-y divide-gray-200">
              {maintenancePlans.map((plan, index) => (
                <div key={plan.title} className="flex gap-6 items-start py-8">
                  <span
                    className="font-black flex-shrink-0 leading-none"
                    style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#c2410c' }}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-black text-gray-900 text-xl mb-2">{plan.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{plan.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Checklist */}
          <section className="bg-white py-20 px-6 md:px-12">
            <h2
              className="font-black text-gray-900 mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              What's Included in Every Tune-Up
            </h2>
            <p className="text-gray-600 text-lg mb-10">No shortcuts. No upselling. Just thorough, honest maintenance.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {checklist.map((item) => (
                <div key={item} className="flex items-start gap-3 py-3 border-b border-gray-100">
                  <span className="font-black text-[#c2410c] text-lg flex-shrink-0" aria-hidden="true">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="bg-[#1a365d] py-20 px-6 md:px-12">
            <h2
              className="font-black text-white mb-12"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Why Regular Maintenance Pays Off
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: '⚡',
                  title: '15–25% Lower Energy Bills',
                  description: 'A clean, well-maintained HVAC system runs at peak efficiency — using significantly less energy to heat and cool your York, PA home.',
                },
                {
                  icon: '🔧',
                  title: 'Fewer Emergency Repairs',
                  description: 'Annual inspections catch worn parts, refrigerant leaks, and electrical issues before they cause a full system failure — especially on cold winter nights.',
                },
                {
                  icon: '📅',
                  title: '5+ Years of Extra Life',
                  description: 'Maintained HVAC systems routinely last 5–10 years longer than neglected ones. Regular tune-ups protect your investment and delay costly replacements.',
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-white bg-opacity-10 border border-blue-700 rounded-2xl p-6"
                >
                  <div className="text-4xl mb-4" aria-hidden="true">{benefit.icon}</div>
                  <h3 className="text-white font-black text-xl mb-3">{benefit.title}</h3>
                  <p className="text-blue-200 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Priority Plan CTA */}
          <section className="bg-gray-900 py-16 px-6 md:px-12 text-center">
            <h2
              className="font-black text-white mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Ask About Our Priority Maintenance Plan
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Our annual Priority Plan covers heating <em>and</em> cooling tune-ups, plus 10% off all repairs and priority scheduling year-round. It's the best value for York, PA homeowners who want worry-free home comfort.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:2673002400"
                className="text-white font-black px-8 py-4 rounded-xl transition-colors duration-200 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2"
                style={{ backgroundColor: '#c2410c' }}
              >
                <span aria-hidden="true">📞</span> Call (267) 300-2400
              </a>
              <Link
                to="/contact"
                className="border border-gray-600 text-gray-300 font-semibold px-8 py-4 rounded-xl hover:border-gray-400 hover:text-white transition-colors duration-200"
              >
                Request Plan Info
              </Link>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-gray-50 py-20 px-6 md:px-12">
            <h2
              className="font-black text-gray-900 mb-10"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Maintenance FAQ
            </h2>
            <FAQAccordion faqs={maintenanceFaqs} />
          </section>

        </div>
        <StickyCallSidebar />
      </div>

      <CTABanner
        heading="Schedule Your Maintenance Tune-Up Today"
        subtext="York, PA's trusted HVAC & plumbing maintenance team. NATE-certified, no-pressure service."
      />
    </>
  )
}

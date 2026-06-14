import { Helmet } from 'react-helmet-async'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'
import BoldPageHero from '../components/BoldPageHero'
import StickyCallSidebar from '../components/StickyCallSidebar'

const heatingServices = [
  {
    title: 'Furnace Repair & Installation',
    description: 'Fast, reliable furnace repair and new furnace installation throughout York, PA. We service all major brands including Carrier, Trane, Lennox, and Rheem.',
  },
  {
    title: 'Heat Pump Service & Repair',
    description: 'Heat pump tune-ups, repairs, and replacements. Keep your heat pump running efficiently year-round in York and surrounding communities.',
  },
  {
    title: 'Boiler Repair & Maintenance',
    description: 'Boiler diagnostics, repairs, and maintenance for hot water and steam boiler systems throughout York County, PA.',
  },
  {
    title: 'Heating System Tune-Up',
    description: 'Annual heating tune-ups to maximize efficiency, extend equipment life, and prevent costly breakdowns during Pennsylvania winters.',
  },
  {
    title: 'Ductwork Repair & Sealing',
    description: 'Leaky ducts waste up to 30% of your heating energy. Our York, PA technicians seal and repair ductwork to restore efficiency.',
  },
  {
    title: 'Thermostat Installation & Programming',
    description: 'Smart thermostat installation and programming for energy savings and better home comfort control in York, PA.',
  },
]

const heatingBenefits = [
  {
    icon: '⚡',
    title: 'Same-Day Service',
    description: 'We know a broken furnace can\'t wait. That\'s why we offer same-day heating repair appointments throughout York County, PA — including 24/7 emergency service at no extra charge.',
  },
  {
    icon: '💰',
    title: 'Upfront Pricing',
    description: 'You\'ll always know the cost before we start. Our technicians provide a detailed, written estimate before any heating repair or installation work begins. No surprises on your bill.',
  },
  {
    icon: '🛡️',
    title: '1-Year Parts Warranty',
    description: 'All heating repairs come with a 1-year parts warranty. We stand behind our work and want you to have peace of mind knowing your heating system is covered.',
  },
]

const heatingFaqs = [
  {
    question: 'How often should I have my furnace tuned up?',
    answer: 'We recommend annual furnace tune-ups, ideally in the fall before heating season begins. Regular maintenance extends the life of your system, improves efficiency, and helps catch small problems before they become expensive repairs. York, PA winters can be harsh — don\'t wait until your furnace fails.',
  },
  {
    question: 'What are signs that my furnace needs repair?',
    answer: 'Watch for these warning signs: unusual noises (banging, squealing, rattling), increased energy bills, uneven heating throughout your home, the furnace cycling on and off frequently, yellow or orange pilot light instead of blue, or age over 15 years. If you notice any of these, call Cornerstone HVAC at (267) 300-2400.',
  },
  {
    question: 'How long does a furnace last?',
    answer: 'With proper maintenance, a gas furnace typically lasts 15–20 years. Heat pumps last 10–15 years. If your system is approaching or past these ages and requires major repairs, replacement is often more cost-effective. Our technicians will give you an honest assessment.',
  },
  {
    question: 'Do you offer emergency heating service in York, PA?',
    answer: 'Yes! We offer 24/7 emergency heating service throughout York, PA and surrounding areas including Springettsbury, West York, Red Lion, and Dallastown. We answer every call — nights, weekends, and holidays — with no extra charge for after-hours emergency service.',
  },
  {
    question: 'What brands of heating equipment do you service?',
    answer: 'Our NATE-certified technicians service all major HVAC brands including Carrier, Trane, Lennox, Rheem, Goodman, York, American Standard, Bryant, and more. We also install new systems and can help you choose the right equipment for your home and budget.',
  },
]

export default function Heating() {
  return (
    <>
      <Helmet>
        <title>Furnace Repair &amp; Heating Service York PA | Cornerstone HVAC</title>
        <meta name="description" content="Expert furnace repair, heat pump service & boiler repair in York, PA. Same-day heating service available 24/7. Licensed technicians. Call (267) 300-2400." />
      </Helmet>

      <BoldPageHero
        title="Furnace Repair &amp; Heating Service in York, PA"
        subtitle="NATE-certified heating technicians serving York, Springettsbury, West York, Red Lion, Dallastown &amp; all of York County, PA."
        breadcrumbLabel="Heating Services"
      />

      <div className="md:grid md:grid-cols-[1fr_280px]">
        <div>
          {/* Intro */}
          <section className="py-16 px-6 md:px-12 bg-white">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              When your furnace breaks down in the middle of a York, PA winter, you need a trusted heating repair company that responds fast. <strong>Cornerstone HVAC &amp; Plumbing</strong> has provided expert heating service to York, Pennsylvania homeowners since 2012. Our NATE-certified technicians handle furnace repair, heat pump service, boiler repair, and full heating system replacements — all with upfront pricing and a 1-year parts warranty.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We service all of York County including Springettsbury Township, West York Borough, Red Lion, Dallastown, Spring Garden Township, and beyond. Whether you need a simple furnace tune-up or emergency heating repair at 2am, <strong>Cornerstone is your local heating expert</strong>.
            </p>
          </section>

          {/* Services */}
          <section className="py-20 px-6 md:px-12 bg-gray-50">
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900 }} className="text-gray-900 mb-12">
              Our Heating Services in York, PA
            </h2>
            <div className="space-y-0 divide-y divide-gray-200">
              {heatingServices.map((item, i) => (
                <div key={item.title} className="flex items-start gap-6 py-10 group">
                  <span
                    className="font-black text-gray-200 leading-none flex-shrink-0 group-hover:text-orange-100 transition-colors"
                    style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="pt-2">
                    <h3 className="font-black text-gray-900 text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 px-6 md:px-12" style={{ backgroundColor: '#1a365d' }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900 }} className="text-white mb-10">
              Why Choose Cornerstone for Heating?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {heatingBenefits.map(b => (
                <div key={b.title} className="bg-white bg-opacity-10 rounded-2xl p-6 border border-blue-700">
                  <div className="text-4xl mb-4" aria-hidden="true">{b.icon}</div>
                  <h3 className="text-white font-black text-xl mb-2">{b.title}</h3>
                  <p className="text-blue-200 leading-relaxed text-sm">{b.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 px-6 md:px-12 bg-gray-900">
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900 }} className="text-white mb-10">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={heatingFaqs} />
          </section>
        </div>

        <StickyCallSidebar />
      </div>

      <CTABanner
        heading="Need Heating Repair in York, PA?"
        subtext="Call now for same-day service or schedule online. We're available 24/7 for emergencies."
      />
    </>
  )
}

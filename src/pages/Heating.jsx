import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'

const heatingServices = [
  {
    title: 'Furnace Repair & Installation',
    image: 'https://placehold.co/800x500/1e3a5f/93c5fd?text=Photo+Coming+Soon',
    description: 'Fast, reliable furnace repair and new furnace installation throughout York, PA. We service all major brands including Carrier, Trane, Lennox, and Rheem.',
  },
  {
    title: 'Heat Pump Service & Repair',
    image: 'https://placehold.co/800x500/1e3a5f/93c5fd?text=Photo+Coming+Soon',
    description: 'Heat pump tune-ups, repairs, and replacements. Keep your heat pump running efficiently year-round in York and surrounding communities.',
  },
  {
    title: 'Boiler Repair & Maintenance',
    image: 'https://placehold.co/800x500/1e3a5f/93c5fd?text=Photo+Coming+Soon',
    description: 'Boiler diagnostics, repairs, and maintenance for hot water and steam boiler systems throughout York County, PA.',
  },
  {
    title: 'Heating System Tune-Up',
    image: 'https://placehold.co/800x500/1e3a5f/93c5fd?text=Photo+Coming+Soon',
    description: 'Annual heating tune-ups to maximize efficiency, extend equipment life, and prevent costly breakdowns during Pennsylvania winters.',
  },
  {
    title: 'Ductwork Repair & Sealing',
    image: 'https://placehold.co/800x500/1e3a5f/93c5fd?text=Photo+Coming+Soon',
    description: 'Leaky ducts waste up to 30% of your heating energy. Our York, PA technicians seal and repair ductwork to restore efficiency.',
  },
  {
    title: 'Thermostat Installation & Programming',
    image: 'https://placehold.co/800x500/1e3a5f/93c5fd?text=Photo+Coming+Soon',
    description: 'Smart thermostat installation and programming for energy savings and better home comfort control in York, PA.',
  },
]

const heatingFaqs = [
  {
    question: 'How often should I have my furnace tuned up?',
    answer: 'We recommend annual furnace tune-ups, ideally in the fall before heating season begins. Regular maintenance extends the life of your system, improves efficiency, and helps catch small problems before they become expensive repairs. York, PA winters can be harsh — don\'t wait until your furnace fails.',
  },
  {
    question: 'What are signs that my furnace needs repair?',
    answer: 'Watch for these warning signs: unusual noises (banging, squealing, rattling), increased energy bills, uneven heating throughout your home, the furnace cycling on and off frequently, yellow or orange pilot light instead of blue, or age over 15 years. If you notice any of these, call Roland at (717) 246-3270.',
  },
  {
    question: 'How long does a furnace last?',
    answer: 'With proper maintenance, a gas furnace typically lasts 15–20 years. Heat pumps last 10–15 years. If your system is approaching or past these ages and requires major repairs, replacement is often more cost-effective. Our technicians will give you an honest assessment.',
  },
  {
    question: 'Do you offer emergency heating service in York, PA?',
    answer: 'Yes! We offer 24/7 emergency heating service throughout York, PA and surrounding areas including Shrewsbury, West York, Red Lion, and Dallastown. We answer every call — nights, weekends, and holidays — with no extra charge for after-hours emergency service.',
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
        <title>Furnace Repair &amp; Heating Service York PA | Roland</title>
        <meta name="description" content="Expert furnace repair, heat pump service & boiler repair in York, PA. Same-day heating service available 24/7. Licensed technicians. Call (717) 246-3270." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 flex items-center bg-[#1a365d]" style={{ minHeight: '300px' }}>
        <div
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26, 54, 93, 0.85)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <nav className="text-blue-200 text-sm mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">Heating Services</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Furnace Repair &amp; Heating Service in York, PA
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            NATE-certified heating technicians serving York, Dallastown, Shrewsbury, Glen Rock, Seven Valleys &amp; all of York County, PA.
          </p>
          <a
            href="tel:7172463270"
            className="mt-6 inline-flex items-center gap-2 text-white font-bold px-7 py-3 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            style={{ backgroundColor: '#c2410c' }}
          >
            <span aria-hidden="true">📞</span> Call (717) 246-3270
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            When your furnace breaks down in the middle of a York, PA winter, you need a trusted heating repair company that responds fast. <strong>Roland Plumbing Heating &amp; Air</strong> has provided expert heating service to York, Pennsylvania homeowners for over 26 years. Our NATE-certified technicians handle furnace repair, heat pump service, boiler repair, and full heating system replacements — all with upfront pricing and a 1-year parts warranty.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We service all of York County including Springettsbury Township, West York Borough, Red Lion, Dallastown, Spring Garden Township, and beyond. Whether you need a simple furnace tune-up or emergency heating repair at 2am, <strong>Roland is your local heating expert</strong>.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Heating Services in York, PA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {heatingServices.map((service) => (
              <div key={service.title} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <img src={service.image} alt={service.title} className="w-full h-44 object-cover" />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Choose Roland for Heating?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
            ].map((benefit) => (
              <div key={benefit.title} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Heating Service FAQ</h2>
          <FAQAccordion faqs={heatingFaqs} />
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        heading="Need Heating Repair in York, PA?"
        subtext="Call now for same-day service or schedule online. We're available 24/7 for emergencies."
      />
    </>
  )
}

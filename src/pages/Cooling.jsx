import { Helmet } from 'react-helmet-async'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'
import BoldPageHero from '../components/BoldPageHero'
import StickyCallSidebar from '../components/StickyCallSidebar'

const coolingServices = [
  {
    title: 'Central AC Repair',
    description: 'Fast central air conditioner repair in York, PA. Our certified technicians diagnose and fix all AC problems — refrigerant leaks, compressor issues, frozen coils, and more.',
  },
  {
    title: 'AC Installation & Replacement',
    description: 'New air conditioner installation and full AC system replacements throughout York County. We help you choose the right system for your home and budget.',
  },
  {
    title: 'Ductless Mini-Split Systems',
    description: 'Ductless mini-split installation and repair for York, PA homes without existing ductwork, additions, sunrooms, and zones with specific comfort needs.',
  },
  {
    title: 'AC Tune-Up & Maintenance',
    description: 'Annual AC maintenance to maximize efficiency, extend equipment life, and prevent summer breakdowns. Schedule your York, PA AC tune-up today.',
  },
  {
    title: 'Air Duct Cleaning',
    description: 'Professional air duct cleaning improves indoor air quality and HVAC efficiency. Recommended every 3–5 years for York, PA homes.',
  },
  {
    title: 'Indoor Air Quality Solutions',
    description: 'Whole-home air purifiers, humidifiers, dehumidifiers, and UV germicidal systems to improve the air quality in your York, Pennsylvania home.',
  },
]

const coolingBenefits = [
  {
    icon: '⚡',
    title: 'Same-Day AC Repair',
    description: 'We know a broken AC in summer can\'t wait. Same-day cooling repair appointments are available throughout York County, PA — plus 24/7 emergency service.',
  },
  {
    icon: '💰',
    title: 'Upfront Pricing',
    description: 'Transparent quotes before any work begins. Our AC technicians explain exactly what\'s needed and what it costs — no surprises, no pressure.',
  },
  {
    icon: '🛡️',
    title: '1-Year Parts Warranty',
    description: 'Every AC repair comes with a 1-year parts warranty. We stand behind our cooling services and want you to be 100% satisfied.',
  },
]

const coolingFaqs = [
  {
    question: 'How often should I have my AC serviced in York, PA?',
    answer: 'We recommend annual AC tune-ups in the spring, before cooling season starts. Regular maintenance keeps your system running at peak efficiency, extends its lifespan, and helps us catch small problems before they cause a breakdown on the hottest day of summer. York, PA summers can be hot and humid — don\'t skip your annual tune-up.',
  },
  {
    question: 'Why is my air conditioner blowing warm air?',
    answer: 'Warm air from your AC could indicate several issues: low refrigerant (possible leak), a dirty air filter restricting airflow, a failing compressor, a frozen evaporator coil, or a malfunctioning thermostat. Our York, PA AC technicians can diagnose the problem quickly and get your cooling restored. Call (267) 300-2400 for same-day service.',
  },
  {
    question: 'How long does an air conditioner last?',
    answer: 'A well-maintained central air conditioner typically lasts 15–20 years in York, PA homes. Ductless mini-split systems can last 20+ years with proper care. If your AC is 12+ years old and needs a major repair, it\'s often more cost-effective to replace it with a newer, more energy-efficient system.',
  },
  {
    question: 'What size AC unit does my York, PA home need?',
    answer: 'AC sizing depends on your home\'s square footage, ceiling height, insulation, number of windows, and local climate. An oversized unit cools too quickly and doesn\'t remove humidity properly; an undersized unit runs constantly and can\'t keep up on hot days. Our technicians perform proper load calculations to recommend the right system for your specific home.',
  },
  {
    question: 'Do you offer financing for AC replacement in York, PA?',
    answer: 'Yes, we work with financing partners to offer affordable payment options for AC installation and replacement in York, Pennsylvania. Ask our technician or call (267) 300-2400 to discuss financing options that fit your budget.',
  },
]

export default function Cooling() {
  return (
    <>
      <Helmet>
        <title>AC Repair &amp; Air Conditioning Installation York PA | Cornerstone HVAC</title>
        <meta name="description" content="Fast AC repair and air conditioning installation in York, PA. Central air, ductless mini-splits, AC tune-ups. Same-day available. Call (267) 300-2400." />
      </Helmet>

      <BoldPageHero
        title="AC Repair &amp; Air Conditioning Service in York, PA"
        subtitle="Certified AC technicians serving York, Springettsbury, West York, Red Lion, Dallastown &amp; all of York County, PA."
        breadcrumbLabel="Cooling Services"
      />

      <div className="md:grid md:grid-cols-[1fr_280px]">
        <div>
          {/* Intro */}
          <section className="py-16 px-6 md:px-12 bg-white">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              When your AC breaks down during a York, PA summer, you need fast, reliable air conditioning repair. <strong>Cornerstone HVAC &amp; Plumbing</strong> provides expert AC repair, installation, and maintenance throughout York, Pennsylvania. Our NATE-certified cooling technicians service central air conditioners, ductless mini-splits, and heat pumps for both residential and light commercial customers.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We serve all of York County including Springettsbury Township, West York, Red Lion, Dallastown, Spring Garden Township, and surrounding areas. Same-day AC repair appointments are available — call <strong>(267) 300-2400</strong> and we'll get your home cool again fast.
            </p>
          </section>

          {/* Services */}
          <section className="py-20 px-6 md:px-12 bg-gray-50">
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900 }} className="text-gray-900 mb-12">
              Our AC &amp; Cooling Services in York, PA
            </h2>
            <div className="space-y-0 divide-y divide-gray-200">
              {coolingServices.map((item, i) => (
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
              Why York, PA Homeowners Choose Us for AC
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {coolingBenefits.map(b => (
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
            <FAQAccordion faqs={coolingFaqs} />
          </section>
        </div>

        <StickyCallSidebar />
      </div>

      <CTABanner
        heading="AC Not Cooling? Call York's #1 AC Repair Team"
        subtext="Same-day service available. 24/7 emergency AC repair with no extra charge."
      />
    </>
  )
}

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'

const coolingServices = [
  {
    title: 'Central AC Repair',
    image: 'https://picsum.photos/seed/central-air/800/500',
    description: 'Fast central air conditioner repair in York, PA. Our certified technicians diagnose and fix all AC problems — refrigerant leaks, compressor issues, frozen coils, and more.',
  },
  {
    title: 'AC Installation & Replacement',
    image: 'https://picsum.photos/seed/hvac-installation/800/500',
    description: 'New air conditioner installation and full AC system replacements throughout York County. We help you choose the right system for your home and budget.',
  },
  {
    title: 'Ductless Mini-Split Systems',
    image: 'https://picsum.photos/seed/mini-split-wall/800/500',
    description: 'Ductless mini-split installation and repair for York, PA homes without existing ductwork, additions, sunrooms, and zones with specific comfort needs.',
  },
  {
    title: 'AC Tune-Up & Maintenance',
    image: 'https://picsum.photos/seed/ac-service/800/500',
    description: 'Annual AC maintenance to maximize efficiency, extend equipment life, and prevent summer breakdowns. Schedule your York, PA AC tune-up today.',
  },
  {
    title: 'Air Duct Cleaning',
    image: 'https://picsum.photos/seed/duct-cleaning/800/500',
    description: 'Professional air duct cleaning improves indoor air quality and HVAC efficiency. Recommended every 3–5 years for York, PA homes.',
  },
  {
    title: 'Indoor Air Quality Solutions',
    image: 'https://picsum.photos/seed/indoor-air-quality/800/500',
    description: 'Whole-home air purifiers, humidifiers, dehumidifiers, and UV germicidal systems to improve the air quality in your York, Pennsylvania home.',
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

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 flex items-center" style={{ minHeight: '300px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/air-conditioning-summer/1920/400)' }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26, 54, 93, 0.85)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <nav className="text-blue-200 text-sm mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">Cooling Services</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            AC Repair &amp; Air Conditioning Service in York, PA
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Certified AC technicians serving York, Springettsbury, West York, Red Lion, Dallastown &amp; all of York County, PA.
          </p>
          <a
            href="tel:2673002400"
            className="mt-6 inline-flex items-center gap-2 text-white font-bold px-7 py-3 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-900"
            style={{ backgroundColor: '#c2410c' }}
          >
            <span aria-hidden="true">📞</span> Call (267) 300-2400
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            When your AC breaks down during a York, PA summer, you need fast, reliable air conditioning repair. <strong>Cornerstone HVAC &amp; Plumbing</strong> provides expert AC repair, installation, and maintenance throughout York, Pennsylvania. Our NATE-certified cooling technicians service central air conditioners, ductless mini-splits, and heat pumps for both residential and light commercial customers.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We serve all of York County including Springettsbury Township, West York, Red Lion, Dallastown, Spring Garden Township, and surrounding areas. Same-day AC repair appointments are available — call <strong>(267) 300-2400</strong> and we'll get your home cool again fast.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our AC &amp; Cooling Services in York, PA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {coolingServices.map((service) => (
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why York, PA Homeowners Choose Us for AC</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">AC Service FAQ</h2>
          <FAQAccordion faqs={coolingFaqs} />
        </div>
      </section>

      <CTABanner
        heading="AC Not Cooling? Call York's #1 AC Repair Team"
        subtext="Same-day service available. 24/7 emergency AC repair with no extra charge."
      />
    </>
  )
}

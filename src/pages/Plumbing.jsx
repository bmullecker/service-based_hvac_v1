import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'

const plumbingServices = [
  {
    title: 'Water Heater Repair & Replacement',
    image: 'https://picsum.photos/seed/water-heater/800/500',
    description: 'No hot water? Our licensed York, PA plumbers repair and replace all types of water heaters — tank, tankless, gas, and electric. Same-day service available.',
  },
  {
    title: 'Drain Cleaning & Unclogging',
    image: 'https://picsum.photos/seed/drain-cleaning/800/500',
    description: 'Slow drains and stubborn clogs cleared fast. We use professional drain snakes and hydro-jetting equipment to clear any drain in your York, PA home.',
  },
  {
    title: 'Leak Detection & Repair',
    image: 'https://picsum.photos/seed/water-leak/800/500',
    description: 'Hidden leaks cause serious water damage. Our York, PA plumbers use advanced leak detection equipment to find and fix leaks before they become costly disasters.',
  },
  {
    title: 'Pipe Repair & Replacement',
    image: 'https://picsum.photos/seed/pipe-plumbing/800/500',
    description: 'Burst pipes, corroded pipes, and aging plumbing repaired or replaced. We handle emergency pipe repairs 24/7 throughout York County, PA.',
  },
  {
    title: 'Toilet & Faucet Repair',
    image: 'https://picsum.photos/seed/bathroom-fixtures/800/500',
    description: 'Running toilets, leaky faucets, low water pressure, and fixture replacements. Fast, affordable plumbing repairs for York, PA homeowners.',
  },
  {
    title: 'Sump Pump Installation & Service',
    image: 'https://picsum.photos/seed/basement-water/800/500',
    description: 'Keep your York, PA basement dry with a properly installed and maintained sump pump. We install, repair, and replace all sump pump systems.',
  },
]

const plumbingFaqs = [
  {
    question: 'How quickly can you respond to a plumbing emergency in York, PA?',
    answer: 'For plumbing emergencies like burst pipes, flooding, or sewage backups, we typically arrive within 60–90 minutes anywhere in York County. We offer 24/7 emergency plumbing service throughout York, Springettsbury, West York, Red Lion, Dallastown, and surrounding communities — with no extra charge for nights or weekends.',
  },
  {
    question: 'What should I do if I have a burst pipe?',
    answer: 'If you have a burst pipe, immediately turn off the main water shut-off valve to your home (usually in the basement or utility room). Then call Cornerstone HVAC & Plumbing at (267) 300-2400. Move valuables away from water and take photos for insurance purposes while you wait. Our emergency plumbers will arrive quickly to repair the pipe and assess any damage.',
  },
  {
    question: 'Do you replace water heaters in York, PA?',
    answer: 'Yes! We install, repair, and replace all types of water heaters including traditional tank water heaters, tankless (on-demand) water heaters, gas water heaters, and electric water heaters. We carry multiple brands and can often install a new water heater same-day in York, PA. A standard water heater lasts 8–12 years, so if yours is older and failing, replacement is usually the smart choice.',
  },
  {
    question: 'Why do I have low water pressure throughout my house?',
    answer: 'Low water pressure throughout your entire home (not just one fixture) typically indicates a problem with your main water line, pressure regulator, or a significant leak somewhere in your system. It could also be a municipal water supply issue. Our York, PA plumbers can diagnose the cause and restore proper water pressure. Call (267) 300-2400 for a diagnostic visit.',
  },
  {
    question: 'Are your plumbers licensed in Pennsylvania?',
    answer: 'Yes, all of our plumbers are fully licensed in Pennsylvania (License #PL-67890) and carry comprehensive liability insurance. We\'re also background-checked and drug-tested for your safety and peace of mind. When Cornerstone sends a plumber to your York, PA home, you can trust they\'re qualified, professional, and trustworthy.',
  },
]

export default function Plumbing() {
  return (
    <>
      <Helmet>
        <title>Plumber York PA | Pipe Repair, Drain Cleaning &amp; Water Heaters | Cornerstone</title>
        <meta name="description" content="Licensed plumbers in York, PA. Water heater repair & replacement, drain cleaning, leak detection, pipe repair. Same-day service. Call (267) 300-2400." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 flex items-center" style={{ minHeight: '300px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/plumbing-water/1920/400)' }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26, 54, 93, 0.85)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <nav className="text-blue-200 text-sm mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Plumbing Services</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Licensed Plumbing Services in York, PA
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Licensed York, PA plumbers serving Springettsbury, West York, Red Lion, Dallastown &amp; all of York County.
          </p>
          <a
            href="tel:2673002400"
            className="mt-6 inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-xl transition-colors duration-200"
            style={{ backgroundColor: '#f97316' }}
          >
            📞 Call (267) 300-2400
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            When you have a plumbing problem in York, PA, you need a licensed, reliable plumber who responds fast. <strong>Cornerstone HVAC &amp; Plumbing</strong> provides comprehensive plumbing services throughout York, Pennsylvania — from routine drain cleaning and faucet repairs to emergency burst pipe repair and water heater replacement. Our PA-licensed plumbers (License #PL-67890) are background-checked, drug-tested, and trained to solve any plumbing issue.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We serve all of York County including York City, Springettsbury Township, West York, Red Lion, Dallastown, Spring Garden Township, and surrounding communities. Call <strong>(267) 300-2400</strong> for same-day plumbing service or 24/7 emergency plumbing repair.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Our Plumbing Services in York, PA</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {plumbingServices.map((service) => (
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Why Choose Cornerstone for Plumbing?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Same-Day Plumbing',
                description: 'Plumbing problems don\'t wait. We offer same-day plumbing service throughout York County, PA, with 24/7 emergency response for urgent issues like burst pipes and flooding.',
              },
              {
                icon: '📋',
                title: 'Upfront Pricing',
                description: 'You\'ll receive a written estimate before any work begins. Our York, PA plumbers explain the problem clearly and give you options — you choose what fits your budget.',
              },
              {
                icon: '✅',
                title: 'Licensed & Insured',
                description: 'All work performed by PA-licensed plumbers (License #PL-67890) with full liability insurance. We pull permits when required to protect your York, PA home.',
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Plumbing FAQ</h2>
          <FAQAccordion faqs={plumbingFaqs} />
        </div>
      </section>

      <CTABanner
        heading="Plumbing Problem? Call York's Trusted Plumbers"
        subtext="Licensed, insured, and available 24/7. Same-day service throughout York County, PA."
      />
    </>
  )
}

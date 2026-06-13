import { Helmet } from 'react-helmet-async'
import FAQAccordion from '../components/FAQAccordion'
import CTABanner from '../components/CTABanner'
import BoldPageHero from '../components/BoldPageHero'
import StickyCallSidebar from '../components/StickyCallSidebar'

const plumbingServices = [
  {
    title: 'Water Heater Repair & Replacement',
    description: 'No hot water? Our licensed York, PA plumbers repair and replace all types of water heaters — tank, tankless, gas, and electric. Same-day service available.',
  },
  {
    title: 'Drain Cleaning & Unclogging',
    description: 'Slow drains and stubborn clogs cleared fast. We use professional drain snakes and hydro-jetting equipment to clear any drain in your York, PA home.',
  },
  {
    title: 'Leak Detection & Repair',
    description: 'Hidden leaks cause serious water damage. Our York, PA plumbers use advanced leak detection equipment to find and fix leaks before they become costly disasters.',
  },
  {
    title: 'Pipe Repair & Replacement',
    description: 'Burst pipes, corroded pipes, and aging plumbing repaired or replaced. We handle emergency pipe repairs 24/7 throughout York County, PA.',
  },
  {
    title: 'Toilet & Faucet Repair',
    description: 'Running toilets, leaky faucets, low water pressure, and fixture replacements. Fast, affordable plumbing repairs for York, PA homeowners.',
  },
  {
    title: 'Sump Pump Installation & Service',
    description: 'Keep your York, PA basement dry with a properly installed and maintained sump pump. We install, repair, and replace all sump pump systems.',
  },
]

const plumbingBenefits = [
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

      <BoldPageHero
        title="Licensed Plumbing Services in York, PA"
        subtitle="Licensed York, PA plumbers serving Springettsbury, West York, Red Lion, Dallastown &amp; all of York County."
        breadcrumbLabel="Plumbing Services"
      />

      <div className="md:grid md:grid-cols-[1fr_280px]">
        <div>
          {/* Intro */}
          <section className="py-16 px-6 md:px-12 bg-white">
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              When you have a plumbing problem in York, PA, you need a licensed, reliable plumber who responds fast. <strong>Cornerstone HVAC &amp; Plumbing</strong> provides comprehensive plumbing services throughout York, Pennsylvania — from routine drain cleaning and faucet repairs to emergency burst pipe repair and water heater replacement. Our PA-licensed plumbers (License #PL-67890) are background-checked, drug-tested, and trained to solve any plumbing issue.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We serve all of York County including York City, Springettsbury Township, West York, Red Lion, Dallastown, Spring Garden Township, and surrounding communities. Call <strong>(267) 300-2400</strong> for same-day plumbing service or 24/7 emergency plumbing repair.
            </p>
          </section>

          {/* Services */}
          <section className="py-20 px-6 md:px-12 bg-gray-50">
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900 }} className="text-gray-900 mb-12">
              Our Plumbing Services in York, PA
            </h2>
            <div className="space-y-0 divide-y divide-gray-200">
              {plumbingServices.map((item, i) => (
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
              Why Choose Cornerstone for Plumbing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {plumbingBenefits.map(b => (
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
            <FAQAccordion faqs={plumbingFaqs} />
          </section>
        </div>

        <StickyCallSidebar />
      </div>

      <CTABanner
        heading="Plumbing Problem? Call York's Trusted Plumbers"
        subtext="Licensed, insured, and available 24/7. Same-day service throughout York County, PA."
      />
    </>
  )
}

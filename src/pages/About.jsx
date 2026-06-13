import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CTABanner from '../components/CTABanner'
import BoldPageHero from '../components/BoldPageHero'
import StickyCallSidebar from '../components/StickyCallSidebar'

const teamMembers = [
  {
    name: 'Mike Cornerstone',
    role: 'Founder & Master HVAC Technician',
    image: 'https://i.pravatar.cc/300?img=51',
    bio: 'Mike founded Cornerstone HVAC & Plumbing in 2012 with a simple mission: bring honest, expert HVAC service to York, PA homeowners. NATE-certified with 20+ years of experience.',
  },
  {
    name: 'Sarah Johnson',
    role: 'Licensed Master Plumber',
    image: 'https://i.pravatar.cc/300?img=25',
    bio: 'Sarah leads our plumbing division with 15 years of experience in residential and light commercial plumbing throughout York County, PA. PA Licensed Master Plumber.',
  },
  {
    name: 'Dave Reyes',
    role: 'Lead HVAC Technician',
    image: 'https://i.pravatar.cc/300?img=12',
    bio: 'Dave is NATE-certified in both heating and cooling and has served York, PA homeowners for over a decade. Known for his thoroughness and clear communication.',
  },
]

const values = [
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'We do what we say we\'ll do. Honest assessments, transparent pricing, and respectful service — every time. If a repair isn\'t necessary, we\'ll tell you.',
  },
  {
    icon: '⭐',
    title: 'Quality',
    description: 'We use quality parts, follow manufacturer specs, and never cut corners. Every job is done right — backed by our 1-year parts warranty and satisfaction guarantee.',
  },
  {
    icon: '🏘️',
    title: 'Community',
    description: 'We\'re not a franchise — we\'re York, PA neighbors serving York, PA neighbors. We sponsor local events, support local businesses, and invest in our community.',
  },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Cornerstone HVAC &amp; Plumbing | York, PA Since 2012</title>
        <meta name="description" content="Cornerstone HVAC & Plumbing has served York, PA homeowners since 2012. Local, family-owned, NATE-certified. Learn our story and meet the team." />
      </Helmet>

      <BoldPageHero
        title="About Cornerstone HVAC & Plumbing"
        subtitle="Serving York, Pennsylvania with honest, expert home comfort services since 2012."
        breadcrumbLabel="About Us"
      />

      <div className="md:grid md:grid-cols-[1fr_280px]">
        <div>

          {/* Story */}
          <section className="bg-white py-20 px-6 md:px-12">
            <h2
              className="font-black text-gray-900 mb-8"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Our Story
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Cornerstone HVAC &amp; Plumbing was founded in 2012 by Mike Cornerstone with a single service van and a commitment to doing things the right way. After watching too many York, PA homeowners get overcharged and underserved by large, impersonal HVAC companies, Mike decided to build something different — a locally-owned company that puts customers first.
              </p>
              <p className="text-lg leading-relaxed">
                Over the past 12+ years, we've grown from a one-man operation to a team of NATE-certified HVAC technicians and licensed plumbers. We've served <strong>over 1,000 York, PA families</strong> — from York City and Springettsbury Township to West York, Red Lion, Dallastown, and communities throughout York County, Pennsylvania.
              </p>
              <p className="text-lg leading-relaxed">
                We're proud to be a York, Pennsylvania small business. Our team lives in this community, our kids go to school here, and we care deeply about the neighbors we serve. When Cornerstone sends a technician to your home, you're getting a trusted neighbor — not a stranger.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
              {[
                { number: '2012', label: 'Founded in York, PA' },
                { number: '1,000+', label: 'Families Served' },
                { number: '24/7', label: 'Emergency Service' },
                { number: '100%', label: 'Satisfaction Goal' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="border-l-4 pl-4"
                  style={{ borderColor: '#c2410c' }}
                >
                  <div className="font-black text-gray-900 text-4xl leading-tight">{stat.number}</div>
                  <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission & Values */}
          <section className="bg-[#1a365d] py-20 px-6 md:px-12">
            <h2
              className="font-black text-white mb-12"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Our Mission &amp; Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="bg-white bg-opacity-10 border border-blue-700 rounded-2xl p-6"
                >
                  <div className="text-4xl mb-3" aria-hidden="true">{value.icon}</div>
                  <h3 className="text-white font-black text-xl mb-2">{value.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="bg-gray-50 py-20 px-6 md:px-12">
            <h2
              className="font-black text-gray-900 mb-12"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Meet Our Team
            </h2>
            <div className="flex flex-col gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="flex gap-6 items-start p-6 bg-white rounded-2xl shadow-sm border border-gray-100"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-black text-gray-900 text-xl">{member.name}</h3>
                    <p className="font-bold text-[#c2410c] text-sm mb-2">{member.role}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications */}
          <section className="bg-white py-20 px-6 md:px-12">
            <h2
              className="font-black text-gray-900 mb-4"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Licenses &amp; Certifications
            </h2>
            <p className="text-gray-600 text-lg mb-12">We're fully licensed, certified, and insured to serve York, PA homeowners.</p>
            <div className="flex flex-wrap gap-6">
              {[
                { label: 'NATE Certified', sub: 'HVAC Excellence' },
                { label: 'EPA 608', sub: 'Refrigerant Certified' },
                { label: 'PA HVAC License', sub: '#HVAC-12345' },
                { label: 'PA Plumbing License', sub: '#PL-67890' },
                { label: 'Fully Insured', sub: 'Liability & Workers Comp' },
              ].map((cert) => (
                <div key={cert.label} className="flex flex-col items-center gap-2">
                  <img
                    src={`https://placehold.co/120x80/1a365d/ffffff?text=${encodeURIComponent(cert.label)}`}
                    alt={cert.label}
                    className="rounded-lg shadow-sm"
                  />
                  <p className="text-xs text-gray-500 text-center">{cert.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Community */}
          <section className="bg-gray-50 py-20 px-6 md:px-12">
            <h2
              className="font-black text-gray-900 mb-6"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
            >
              Supporting York, PA
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Cornerstone HVAC &amp; Plumbing is proud to be an active part of the York, Pennsylvania community. We sponsor local youth sports teams, participate in community events, and support the York County Food Bank. When you choose Cornerstone, you're not just getting great service — you're supporting a business that gives back to York, PA.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We also believe in hiring locally. Our entire team is made up of York County, PA residents who take pride in serving their neighbors with the highest level of professionalism and care.
            </p>
          </section>

        </div>
        <StickyCallSidebar />
      </div>

      <CTABanner
        heading="Ready to Work with York's Trusted HVAC & Plumbing Team?"
        subtext="Over 1,000 York, PA families have trusted us. Let us earn your trust too."
      />
    </>
  )
}

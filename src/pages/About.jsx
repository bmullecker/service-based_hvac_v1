import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CTABanner from '../components/CTABanner'

const teamMembers = [
  {
    name: 'Mike Roland',
    role: 'Founder & Master HVAC Technician',
    image: 'https://i.pravatar.cc/300?img=51',
    bio: 'Mike founded Roland Plumbing Heating & Air in 2012 with a simple mission: bring honest, expert HVAC service to York, PA homeowners. NATE-certified with 20+ years of experience.',
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
        <title>About Roland Plumbing Heating &amp; Air | York, PA Since 2012</title>
        <meta name="description" content="Roland Plumbing Heating & Air has served York, PA homeowners for over 26 years. Local, family-owned, NATE-certified. Learn our story and meet the team." />
      </Helmet>

      {/* Hero Banner */}
      <section className="relative py-20 md:py-28 flex items-center" style={{ minHeight: '300px' }}>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(https://picsum.photos/seed/professional-team/1920/400)' }}
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(26, 54, 93, 0.85)' }} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
          <nav className="text-blue-200 text-sm mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span className="text-white" aria-current="page">About Us</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            About Roland Plumbing Heating &amp; Air
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Serving York, Pennsylvania with honest, expert home comfort services for over 26 years.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p className="text-lg leading-relaxed">
              Roland Plumbing Heating &amp; Air was founded in 2012 by Mike Roland with a single service van and a commitment to doing things the right way. After watching too many York, PA homeowners get overcharged and underserved by large, impersonal HVAC companies, Mike decided to build something different — a locally-owned company that puts customers first.
            </p>
            <p className="text-lg leading-relaxed">
              Over the past 12+ years, we've grown from a one-man operation to a team of NATE-certified HVAC technicians and licensed plumbers. We've served <strong>over 1,000 York, PA families</strong> — from York City and Springettsbury Township to West York, Red Lion, Dallastown, and communities throughout York County, Pennsylvania.
            </p>
            <p className="text-lg leading-relaxed">
              We're proud to be a York, Pennsylvania small business. Our team lives in this community, our kids go to school here, and we care deeply about the neighbors we serve. When Roland sends a technician to your home, you're getting a trusted neighbor — not a stranger.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { number: '2012', label: 'Founded in York, PA' },
              { number: '1,000+', label: 'Families Served' },
              { number: '24/7', label: 'Emergency Service' },
              { number: '100%', label: 'Satisfaction Goal' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-3xl font-bold mb-2" style={{ color: '#c2410c' }}>{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission &amp; Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything we do at Roland Plumbing Heating &amp; Air is guided by three core values.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl p-8 shadow-md text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg">NATE-certified, licensed, and background-checked professionals serving York, PA.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="text-center bg-gray-50 rounded-xl overflow-hidden shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-orange-700 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Licenses &amp; Certifications</h2>
            <p className="text-gray-600 text-lg">We're fully licensed, certified, and insured to serve York, PA homeowners.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
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
        </div>
      </section>

      {/* Community */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Supporting York, PA</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Roland Plumbing Heating &amp; Air is proud to be an active part of the York, Pennsylvania community. We sponsor local youth sports teams, participate in community events, and support the York County Food Bank. When you choose Roland, you're not just getting great service — you're supporting a business that gives back to York, PA.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We also believe in hiring locally. Our entire team is made up of York County, PA residents who take pride in serving their neighbors with the highest level of professionalism and care.
          </p>
        </div>
      </section>

      <CTABanner
        heading="Ready to Work with York's Trusted HVAC & Plumbing Team?"
        subtext="Over 1,000 York, PA families have trusted us. Let us earn your trust too."
      />
    </>
  )
}

import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import CTABanner from '../components/CTABanner'

const values = [
  { icon: '🤝', title: 'Integrity', desc: 'We tell you exactly what\'s wrong and what it will cost — no upselling, no inflated quotes. Our reputation is built on honesty.' },
  { icon: '⭐', title: 'Quality', desc: 'We use quality parts, follow manufacturer guidelines, and train our techs continuously. Every job is done right the first time.' },
  { icon: '🏘️', title: 'Community', desc: 'We live and work in York, PA. We sponsor local youth sports, support area food banks, and take pride in serving our neighbors.' },
]

const team = [
  { name: 'Mike Cornerstone', role: 'Founder & Master HVAC Tech', img: 'https://placehold.co/300x300/cccccc/555555?text=Mike+C.', bio: 'Over 20 years in HVAC. NATE-certified. Founded Cornerstone in 2012 with a simple promise: treat every customer like family.' },
  { name: 'Sarah Dellinger', role: 'Lead Plumbing Technician', img: 'https://placehold.co/300x300/cccccc/555555?text=Sarah+D.', bio: 'PA master plumber with 12 years of experience. Specializes in water heater installation and drain system diagnostics.' },
  { name: 'Carlos Rivera', role: 'HVAC Service Manager', img: 'https://placehold.co/300x300/cccccc/555555?text=Carlos+R.', bio: 'NATE-certified in heating, cooling, and heat pumps. Joined Cornerstone in 2015 and keeps our team running at peak performance.' },
]

const certs = [
  { label: 'NATE Certified', img: 'https://placehold.co/120x80/1a365d/ffffff?text=NATE' },
  { label: 'EPA 608 Certified', img: 'https://placehold.co/120x80/1a365d/ffffff?text=EPA+608' },
  { label: 'PA Licensed Contractor', img: 'https://placehold.co/120x80/1a365d/ffffff?text=PA+Licensed' },
  { label: 'Fully Insured', img: 'https://placehold.co/120x80/1a365d/ffffff?text=Fully+Insured' },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Cornerstone HVAC & Plumbing | York, PA Since 2012</title>
        <meta name="description" content="Cornerstone HVAC & Plumbing has served York, PA homeowners since 2012. Local, family-owned, NATE-certified. Over 1,000 families served. Learn our story." />
        <meta name="keywords" content="about Cornerstone HVAC, York PA HVAC company, local HVAC plumbing York PA, NATE certified York PA, family owned HVAC York Pennsylvania" />
        <meta property="og:title" content="About Cornerstone HVAC & Plumbing | York, PA Since 2012" />
        <meta property="og:description" content="Local, family-owned HVAC & plumbing company serving York, PA since 2012. NATE-certified, licensed & insured. Over 1,000 families served." />
        <link rel="canonical" href="https://www.cornerstonehvac.com/about" />
      </Helmet>

      {/* HERO */}
      <section
        className="relative bg-[#1a365d] py-16 md:py-20 px-4"
        style={{ backgroundImage: 'url(https://placehold.co/1920x400/1a365d/ffffff?text=About+Cornerstone+HVAC)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#1a365d]/85" />
        <div className="relative max-w-4xl mx-auto">
          <p className="text-blue-200 text-sm mb-2">
            <Link to="/" className="hover:text-white">Home</Link> / About Us
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            About Cornerstone HVAC &amp; Plumbing
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            York, PA's trusted home comfort experts since 2012 — local, licensed, and dedicated to doing right by every customer.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-extrabold text-[#1a365d] mb-4">Our Story</h2>
            <p className="text-[#374151] text-base leading-relaxed mb-4">
              Cornerstone HVAC &amp; Plumbing was founded in York, Pennsylvania in 2012 by Mike Cornerstone — a third-generation tradesman who believed local homeowners deserved better than overpriced, impersonal service from national chains.
            </p>
            <p className="text-[#374151] text-base leading-relaxed mb-4">
              Starting with a single service van and a commitment to showing up on time and doing the job right, Cornerstone grew one referral at a time. Today we have a team of certified technicians, two fully stocked service trucks, and over 1,000 York County families who trust us with their homes.
            </p>
            <p className="text-[#374151] text-base leading-relaxed">
              We're not a franchise and we're not a call center. We're your neighbors — and we treat every job as if it's our own home.
            </p>
          </div>
          <div>
            <img
              src="https://placehold.co/560x400/1a365d/f97316?text=Cornerstone+Team+%7C+York+PA"
              alt="Cornerstone HVAC team in York, PA"
              className="rounded-2xl w-full shadow-md"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-[#f8fafc] py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-[#1a365d] mb-2">Our Mission &amp; Values</h2>
            <p className="text-[#6b7280] max-w-xl mx-auto">To provide every York, PA homeowner with honest, expert, and timely HVAC and plumbing service — every single time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h3 className="font-bold text-[#1a365d] text-base mb-2">{v.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-extrabold text-[#1a365d] text-center mb-10">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-36 h-36 rounded-full mx-auto mb-4 object-cover shadow-md"
                />
                <h3 className="font-bold text-[#1a365d] text-base">{member.name}</h3>
                <p className="text-[#f97316] text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-[#6b7280] text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="bg-[#f8fafc] py-14 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-[#1a365d] mb-8">Our Certifications &amp; Credentials</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {certs.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-2">
                <img src={c.img} alt={c.label} className="rounded-lg shadow-sm" />
                <span className="text-xs font-semibold text-[#6b7280]">{c.label}</span>
              </div>
            ))}
          </div>
          <p className="text-[#6b7280] text-sm mt-6 max-w-xl mx-auto">
            PA HVAC License #HVAC-12345 · Plumbing License #PL-67890 · Fully insured with $2M general liability coverage
          </p>
        </div>
      </section>

      {/* COMMUNITY */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://placehold.co/500x350/f8fafc/1a365d?text=Community+Involvement"
              alt="Cornerstone giving back to York PA community"
              className="rounded-2xl w-full shadow-sm"
            />
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#1a365d] mb-4">Rooted in York, PA</h2>
            <p className="text-[#374151] text-base leading-relaxed mb-4">
              We believe a business is only as strong as the community it serves. That's why Cornerstone is an active part of York County life — sponsoring local youth baseball and soccer leagues, partnering with Habitat for Humanity on HVAC installations, and donating to the York County Food Bank each year.
            </p>
            <p className="text-[#374151] text-base leading-relaxed">
              When you choose Cornerstone, you're keeping your money local — supporting York jobs and York families.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner heading="Ready to Work With York's Best?" subtext="Join 1,000+ York County families who trust Cornerstone for all their HVAC and plumbing needs." />
    </>
  )
}

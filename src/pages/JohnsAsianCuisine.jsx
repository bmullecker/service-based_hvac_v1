import { Helmet } from 'react-helmet-async'

const GOLD = '#c9a84c'

const hours = [
  { day: 'Monday',    hours: 'Closed',              closed: true },
  { day: 'Tuesday',   hours: '11:00 AM – 9:30 PM',  closed: false },
  { day: 'Wednesday', hours: '11:00 AM – 9:30 PM',  closed: false },
  { day: 'Thursday',  hours: '11:00 AM – 9:30 PM',  closed: false },
  { day: 'Friday',    hours: '11:00 AM – 10:30 PM', closed: false },
  { day: 'Saturday',  hours: '11:00 AM – 10:30 PM', closed: false },
  { day: 'Sunday',    hours: 'Closed',              closed: true },
]

const highlights = [
  {
    label: 'BYOB',
    headline: 'Bring Your Own Bottle',
    detail: "Enjoy John's with your favorite wine or beer. No corkage fee — just great food and good company.",
  },
  {
    label: 'Dine-In & Takeout',
    headline: 'Your Choice',
    detail: 'Sit down and savor the atmosphere, or call ahead and grab a hot meal on your way home.',
  },
  {
    label: 'Business Delivery',
    headline: 'Free to Local Businesses',
    detail: 'We deliver free to businesses in Danville. Lunch for the whole team, on us.',
  },
]

export default function JohnsAsianCuisine() {
  return (
    <>
      <Helmet>
        <title>John's Asian Cuisine | Hibachi & Thai | Danville, PA</title>
        <meta name="description" content="Hibachi and Thai food in Danville, PA. Dine-in & takeout. BYOB welcome. Tue–Thu 11am–9:30pm, Fri–Sat until 10:30pm. Call (570) 275-6888." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-center" aria-label="Welcome">
        <div className="absolute inset-0" aria-hidden="true">
          <img
            src="https://picsum.photos/seed/asian-restaurant-ambiance/1920/1080"
            alt=""
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(160deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.88) 100%)' }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 text-center">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase border px-4 py-1.5 rounded-full mb-10"
            style={{ borderColor: GOLD, color: GOLD }}
          >
            BYOB Welcome · Danville, PA
          </span>

          <h1
            className="font-black text-white leading-none mb-5"
            style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)' }}
          >
            John's Asian<br />Cuisine
          </h1>

          <p className="text-lg md:text-xl mb-2" style={{ color: '#d4c9a8' }}>
            Hibachi &amp; Thai Food
          </p>
          <p className="text-sm tracking-widest uppercase mb-14" style={{ color: '#7a6f55' }}>
            Dine-In &amp; Takeout
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:5702756888"
              className="font-black text-lg px-8 py-4 rounded-xl transition-opacity hover:opacity-85"
              style={{ backgroundColor: GOLD, color: '#0d0d0d' }}
            >
              (570) 275-6888
            </a>
            <a
              href="https://maps.google.com/?q=310+Mill+St+Danville+PA+17821"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-lg px-8 py-4 rounded-xl border-2 text-white transition-colors hover:bg-white hover:bg-opacity-10"
              style={{ borderColor: 'rgba(255,255,255,0.25)' }}
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40" aria-hidden="true">
          <span className="text-white text-xs tracking-widest uppercase">Menu</span>
          <div className="w-px h-8 bg-white" />
        </div>
      </section>

      {/* ── WHAT WE SERVE ── */}
      <section style={{ backgroundColor: '#0d0d0d' }} className="py-24" aria-label="What we serve">
        <div className="max-w-6xl mx-auto px-6">
          <h2
            className="font-black text-white text-center mb-16"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
          >
            What We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {[
              {
                seed: 'hibachi-teppanyaki-grill',
                name: 'Hibachi',
                description:
                  'Savory grilled meats, crisp vegetables, and aromatic fried rice — Japanese teppanyaki tradition cooked to perfection.',
              },
              {
                seed: 'thai-food-curry-basil',
                name: 'Thai',
                description:
                  'Bold spices, fresh herbs, and that perfect balance of sweet, sour, salty, and heat that keeps you coming back.',
              },
            ].map((item) => (
              <div
                key={item.name}
                className="relative overflow-hidden group"
                style={{ minHeight: '420px' }}
              >
                <img
                  src={`https://picsum.photos/seed/${item.seed}/800/600`}
                  alt={`${item.name} at John's Asian Cuisine`}
                  className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.92) 35%, rgba(0,0,0,0.15) 100%)' }}
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="font-black text-white text-4xl mb-3">{item.name}</h3>
                  <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#c0b090' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section style={{ backgroundColor: '#111111' }} className="py-24 px-6" aria-label="Why visit us">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 text-center">
            {highlights.map((item) => (
              <div key={item.label}>
                <div
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: GOLD }}
                >
                  {item.label}
                </div>
                <h3 className="text-white font-black text-xl mb-3">{item.headline}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6a6050' }}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOURS & LOCATION ── */}
      <section style={{ backgroundColor: '#0d0d0d' }} className="py-24 px-6" aria-label="Hours and location">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            {/* Hours */}
            <div>
              <h2 className="font-black text-white text-2xl mb-8">Hours</h2>
              <table className="w-full text-sm">
                <tbody>
                  {hours.map(({ day, hours: h, closed }) => (
                    <tr key={day} className="border-b" style={{ borderColor: '#1c1c1c' }}>
                      <th
                        scope="row"
                        className="py-3 pr-6 font-medium text-left"
                        style={{ color: closed ? '#3a3530' : '#b0a890' }}
                      >
                        {day}
                      </th>
                      <td
                        className="py-3 text-right font-medium"
                        style={{ color: closed ? '#3a3530' : 'white' }}
                      >
                        {h}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Contact & Location */}
            <div>
              <h2 className="font-black text-white text-2xl mb-8">Find Us</h2>
              <div className="space-y-8">
                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: GOLD }}
                  >
                    Address
                  </p>
                  <address className="not-italic" style={{ color: '#b0a890' }}>
                    310 Mill Street<br />Danville, PA 17821
                  </address>
                  <a
                    href="https://maps.google.com/?q=310+Mill+St+Danville+PA+17821"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-xs font-bold tracking-wide underline underline-offset-2"
                    style={{ color: GOLD }}
                  >
                    Open in Maps →
                  </a>
                </div>

                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: GOLD }}
                  >
                    Phone
                  </p>
                  <a
                    href="tel:5702756888"
                    className="font-black text-white text-2xl hover:opacity-80 transition-opacity"
                  >
                    (570) 275-6888
                  </a>
                </div>

                <div>
                  <p
                    className="text-xs font-bold tracking-widest uppercase mb-2"
                    style={{ color: GOLD }}
                  >
                    We Accept
                  </p>
                  <p className="text-sm" style={{ color: '#5a5040' }}>
                    Visa · Mastercard · American Express · Apple Pay
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section
        className="py-20 px-6 text-center"
        style={{ backgroundColor: GOLD }}
        aria-label="Call to action"
      >
        <h2 className="font-black text-black mb-2" style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}>
          Ready to Order?
        </h2>
        <p className="text-black mb-10" style={{ opacity: 0.65, fontSize: '1.1rem' }}>
          Call us — we'll have it ready for pickup or dine-in.
        </p>
        <a
          href="tel:5702756888"
          className="inline-block bg-black text-white font-black text-xl px-10 py-5 rounded-2xl hover:opacity-85 transition-opacity"
        >
          (570) 275-6888
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="py-8 px-6 text-center"
        style={{ backgroundColor: '#080808' }}
      >
        <p className="text-xs" style={{ color: '#2e2a24' }}>
          © {new Date().getFullYear()} John's Asian Cuisine · 310 Mill Street, Danville PA 17821
        </p>
      </footer>
    </>
  )
}

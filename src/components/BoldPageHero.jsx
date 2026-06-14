import { Link } from 'react-router-dom'

export default function BoldPageHero({ title, subtitle, breadcrumbLabel }) {
  return (
    <section className="bg-[#1a365d] pt-16 pb-20 px-6 md:px-12">
      <nav aria-label="Breadcrumb" className="mb-6">
        <Link
          to="/"
          className="text-blue-300 text-xs font-bold tracking-widest uppercase hover:text-white transition-colors"
        >
          Home
        </Link>
        <span className="text-blue-500 mx-2 text-xs" aria-hidden="true">/</span>
        <span className="text-white text-xs font-bold tracking-widest uppercase" aria-current="page">
          {breadcrumbLabel}
        </span>
      </nav>

      <h1 style={{ fontSize: 'clamp(2.4rem, 5.5vw, 5rem)', lineHeight: 1.05, fontWeight: 900, color: 'white' }}>
        {title}
      </h1>

      {subtitle && (
        <p className="text-blue-200 text-xl leading-relaxed max-w-2xl mt-5">
          {subtitle}
        </p>
      )}
    </section>
  )
}

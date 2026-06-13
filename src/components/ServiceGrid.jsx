import { Link } from 'react-router-dom'

export default function ServiceGrid({ services, columns = 3 }) {
  const colClass =
    columns === 3
      ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
      : columns === 4
      ? 'grid-cols-2 md:grid-cols-4'
      : columns === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'

  return (
    <div className={`grid ${colClass} gap-6`}>
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border border-gray-100"
        >
          {service.image && (
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-44 object-cover"
            />
          )}
          <div className="p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
            {service.description && (
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{service.description}</p>
            )}
            {service.link && (
              <Link
                to={service.link}
                className="text-orange-500 font-semibold text-sm hover:text-orange-700 transition-colors"
              >
                Learn More →
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

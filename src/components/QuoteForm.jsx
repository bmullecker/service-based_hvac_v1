import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function QuoteForm({ darkBg = false }) {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/thank-you')
  }

  const labelClass = darkBg
    ? 'block text-white font-medium mb-1 text-sm'
    : 'block text-gray-700 font-medium mb-1 text-sm'

  const inputClass =
    'w-full px-4 py-3 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent text-gray-900 bg-white'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className={darkBg ? 'text-orange-100 text-xs' : 'text-gray-500 text-xs'}>
        Fields marked <span aria-hidden="true">*</span><span className="sr-only">with an asterisk</span> are required.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full Name <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone Number <span aria-hidden="true" className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(717) 555-0100"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address <span aria-hidden="true" className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="service" className={labelClass}>
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="">Select a service...</option>
          <option value="heating">Heating / Furnace</option>
          <option value="cooling">Cooling / AC</option>
          <option value="plumbing">Plumbing</option>
          <option value="emergency">Emergency Service</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>
          Describe Your Issue
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="Tell us about your HVAC or plumbing issue..."
          className={inputClass}
        />
      </div>
      <button
        type="submit"
        className="w-full text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2"
        style={{ backgroundColor: '#c2410c' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#9a3412' }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#c2410c' }}
      >
        Submit Request — We'll Call You Within 2 Hours
      </button>
      <p className="text-center text-sm text-gray-500">
        {darkBg ? (
          <span className="text-orange-100"><span aria-hidden="true">🔒</span> Your info is safe. No spam, ever.</span>
        ) : (
          <><span aria-hidden="true">🔒</span> Your info is safe. No spam, ever.</>
        )}
      </p>
    </form>
  )
}

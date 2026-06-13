import { useState } from 'react'

export default function FAQAccordion({ faqs, idPrefix = 'faq' }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const panelId = `${idPrefix}-panel-${index}`
        const buttonId = `${idPrefix}-btn-${index}`
        const isOpen = openIndex === index
        return (
          <div
            key={index}
            className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              id={buttonId}
              onClick={() => toggle(index)}
              className="w-full text-left px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-inset"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              <span
                aria-hidden="true"
                className="text-orange-700 text-xl font-bold flex-shrink-0 transition-transform duration-200"
                style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-6 pb-4 pt-2 bg-gray-50 border-t border-gray-100"
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

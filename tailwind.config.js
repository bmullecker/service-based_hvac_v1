/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#1a365d',
        'blue-accent': '#2563eb',
        orange: '#f97316',
        'light-bg': '#f8fafc',
        'text-dark': '#111827',
        'text-muted': '#6b7280',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sansTsuki': ['"Tsukimi Rounded"', 'sans-serif'],
        'inter': ["Inter", 'serif']
      },
    },
  },
  plugins: [
    ('tailwindcss-animated')
  ],
}


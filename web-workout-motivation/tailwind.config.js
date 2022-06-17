/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        // Complex site-specific row configuration
        layout: '50px 1fr 1fr 100px',
      },
    },
  },
  plugins: [],
};

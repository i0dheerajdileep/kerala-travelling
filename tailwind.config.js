/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#046A38', // Primary - Kerala's lush landscapes
          700: '#065f46',
          800: '#064e3b',
          900: '#022c22',
        },
        blue: {
          600: '#0F4C81', // Secondary - Kerala's backwaters
        },
        amber: {
          500: '#F5A623', // Accent - Cultural elements
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
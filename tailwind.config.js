/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#E7112D',
      },
      animation: {
        'flow-line': 'flowLine 1.5s ease-in-out infinite',
        'flow-button-line': 'flowButtonLine 3s infinite', // Continuous flowing line animation for the button
      },
      keyframes: {
        flowLine: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        flowButtonLine: {
          '0%': {
            top: '0',
            left: '-100%',
            width: '100%',
            height: '4px',
          },
          '50%': {
            top: '0',
            left: '0',
            width: '100%',
            height: '4px',
          },
          '100%': {
            top: '0',
            left: '100%',
            width: '100%',
            height: '4px',
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};

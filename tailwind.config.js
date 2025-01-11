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
            left: '0',
            width: '100%',
            height: '2px',
            transform: 'rotate(0deg)',
          },
          '25%': {
            top: '0',
            left: '0',
            width: '2px',
            height: '100%',
            transform: 'rotate(90deg)', // Right to left (vertical)
          },
          '50%': {
            top: '100%',
            left: '0',
            width: '100%',
            height: '2px',
            transform: 'rotate(180deg)', // Bottom to top (horizontal)
          },
          '75%': {
            top: '0',
            left: '100%',
            width: '2px',
            height: '100%',
            transform: 'rotate(270deg)', // Left to right (vertical)
          },
          '100%': {
            top: '0',
            left: '0',
            width: '100%',
            height: '2px',
            transform: 'rotate(360deg)', // Complete cycle
          },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};

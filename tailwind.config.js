/** @type {import('tailwindcss').Config} */
module.exports = {
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
        'flow-button-line': 'flowButtonLine 3s infinite',
        'border-flow': 'borderFlow 3s ease-in-out infinite',
        'fade-slide': 'fadeSlide 0.8s ease-out',
      },
      keyframes: {
        flowLine: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        fadeSlide: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

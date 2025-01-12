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
        'border-flow': 'borderFlow 3s ease-in-out infinite', // Updated for smoother flow
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
        borderFlow: {
          '0%': {
            borderLeftColor: 'transparent',
            borderTopColor: 'transparent',
            borderRightColor: 'transparent',
            borderBottomColor: 'transparent',
            transform: 'scale(0)', // Start small and invisible
          },
          '25%': {
            borderLeftColor: 'transparent',
            borderTopColor: 'transparent',
            borderRightColor: '#E7112D', // Red color for the right side
            borderBottomColor: 'transparent',
            transform: 'scale(1.1)', // Slightly grow, moving towards right side
          },
          '50%': {
            borderLeftColor: '#E7112D', // Red color for the left side
            borderTopColor: 'transparent',
            borderRightColor: '#E7112D', // Full red on top and right
            borderBottomColor: 'transparent',
            transform: 'scale(1)', // Normal size
          },
          '75%': {
            borderLeftColor: 'transparent',
            borderTopColor: '#F4A261', // Orange color for the top side
            borderRightColor: '#F4A261', // Orange color for the right side
            borderBottomColor: 'transparent',
            transform: 'scale(1.1)', // Slightly grow again, orange moves from left to right
          },
          '100%': {
            borderLeftColor: '#2B6CB0', // Blue color for the left side
            borderTopColor: '#2B6CB0', // Blue color for the top side
            borderRightColor: '#2B6CB0', // Blue color for the right side
            borderBottomColor: '#2B6CB0', // Full blue color
            transform: 'scale(1)', // Normal size and full border color
          },
        }
        ,
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

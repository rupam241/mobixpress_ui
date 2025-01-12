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
        customYellow: '#FFDC00', // Added a yellow color for color transition
      },
      animation: {
        'flow-line': 'flowLine 1.5s ease-in-out infinite',
        'rotate-border': 'rotateBorder 3s ease-in-out infinite', 
        'bounce-color': 'bounceColor 2s ease-in-out infinite',
        'line-flow': 'lineFlow 4s linear infinite',
        'border-flow': 'borderFlow 4s linear infinite',
      
      },
      keyframes: {
        borderFlow: {
          '0%': {
            borderTop: '2px solid #E7112D',
            borderRight: '2px solid transparent',
            borderBottom: '2px solid transparent',
            borderLeft: '2px solid transparent',
          },
          '25%': {
            borderTop: '2px solid transparent',
            borderRight: '2px solid #E7112D',
            borderBottom: '2px solid transparent',
            borderLeft: '2px solid transparent',
          },
          '50%': {
            borderTop: '2px solid transparent',
            borderRight: '2px solid transparent',
            borderBottom: '2px solid #E7112D',
            borderLeft: '2px solid transparent',
          },
          '75%': {
            borderTop: '2px solid transparent',
            borderRight: '2px solid transparent',
            borderBottom: '2px solid transparent',
            borderLeft: '2px solid #E7112D',
          },
          '100%': {
            borderTop: '2px solid #E7112D',
            borderRight: '2px solid transparent',
            borderBottom: '2px solid transparent',
            borderLeft: '2px solid transparent',
          },
        },
      
        flowLine: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        rotateBorder: {
          '0%': {
            transform: 'rotate(0deg)',
            borderWidth: '2px',
            backgroundColor: '#E7112D', // Starting with customRed
          },
          '50%': {
            transform: 'rotate(180deg)',
            borderWidth: '6px',
            backgroundColor: '#FFDC00', // Transition to customYellow
          },
          '100%': {
            transform: 'rotate(360deg)',
            borderWidth: '2px',
            backgroundColor: '#E7112D', // Back to customRed
          },
        },
        bounceColor: {
          '0%': {
            backgroundColor: '#E7112D', // Starting with customRed
            transform: 'translateY(0)',
          },
          '50%': {
            backgroundColor: '#FFDC00', // Transition to customYellow
            transform: 'translateY(-5px)', // Bounce up
          },
          '100%': {
            backgroundColor: '#E7112D', // Back to customRed
            transform: 'translateY(0)', // Return to normal position
          },
        },
        zoomFade: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.8)',
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};

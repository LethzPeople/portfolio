/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brutalist: {
          neon: '#CCFF00',
          purple: '#B967FF',
          black: '#000000',
          gray: '#1a1a1a',
          darkgray: '#2a2a2a',
          white: '#FFFFFF',
        }
      },
      fontFamily: {
        'brutalist': ['Arial Black', 'Impact', 'sans-serif'],
        'mono': ['Courier New', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'flicker': 'flicker 0.15s infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
}

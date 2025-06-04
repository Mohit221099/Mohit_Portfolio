/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7f5',
          100: '#ccefe9',
          200: '#99dfd3',
          300: '#66cfbd',
          400: '#33bfa7',
          500: '#00af91',
          600: '#008c74',
          700: '#006957',
          800: '#00463a',
          900: '#00231d',
        },
        secondary: {
          50: '#e6eeff',
          100: '#ccdcff',
          200: '#99b9ff',
          300: '#6697ff',
          400: '#3374ff',
          500: '#0051ff',
          600: '#0041cc',
          700: '#003199',
          800: '#002066',
          900: '#001033',
        },
        dark: {
          50: '#e6e8ec',
          100: '#ccd1d9',
          200: '#99a3b3',
          300: '#66758d',
          400: '#334766',
          500: '#0a192f',
          600: '#081426',
          700: '#060f1c',
          800: '#040a13',
          900: '#020509',
        },
        accent: '#64ffda',
        'accent-dark': '#00ffd5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.7s ease-in-out',
        slideUp: 'slideUp 0.5s ease-out',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};
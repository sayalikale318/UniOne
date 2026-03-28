/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#4f8ef7',
          glow: '#4f8ef740',
        },
        surface: {
          glass: 'rgba(255,255,255,0.05)',
          border: 'rgba(255,255,255,0.1)',
        },
      },
      boxShadow: {
        'accent-glow': '0 0 24px rgba(79, 142, 247, 0.45)',
        'accent-glow-sm': '0 0 12px rgba(79, 142, 247, 0.35)',
      },
    },
  },
  plugins: [],
}

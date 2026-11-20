/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#152B24',
          light: '#1D3B31',
          dark: '#0E1D18',
          deep: '#091310',
        },
        ivory: {
          DEFAULT: '#F4EFE4',
          light: '#FAF7F0',
          dark: '#E7DFC9',
          muted: '#D8CEB3',
        },
        gold: {
          DEFAULT: '#B89858',
          light: '#D4AF37',
          dark: '#8C6D37',
          warm: '#C5A059',
          burnished: '#96783B',
        },
        navy: {
          DEFAULT: '#1E2936',
          dark: '#141C25',
          light: '#2B394A',
        },
        oxblood: {
          DEFAULT: '#642E33',
          dark: '#482024',
          light: '#7F3A40',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Manrope', 'Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(184, 152, 88, 0.25)',
        'luxury': '0 20px 40px -15px rgba(14, 29, 24, 0.4)',
        'deep': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.html', './src/**/*.{js,html}'],
  theme: {
    extend: {
      colors: {
        'b-black':  '#0A0A0A',
        'b-white':  '#F0F0F0',
        'b-yellow': '#FFD102',
        'b-dim':    '#141414',
        'b-card':   '#111111',
        'b-border': '#FFFFFF',
        'b-muted':  '#555555',
      },
      fontFamily: {
        sans:  ['Space Grotesk', 'sans-serif'],
        mono:  ['Space Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(5rem, 15vw, 14rem)', { lineHeight: '0.9',  letterSpacing: '-0.04em' }],
        'display-lg': ['3rem',    { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-md': ['2rem',    { lineHeight: '1.0',  letterSpacing: '-0.02em' }],
        'display-sm': ['1.75rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-xs': ['1.25rem', { lineHeight: '1.1',  letterSpacing: '-0.01em' }],
        'label':      ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '120': '30rem',
      },
      borderColor: {
        DEFAULT: '#FFFFFF',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}

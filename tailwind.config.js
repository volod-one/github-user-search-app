const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '20rem',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'clr-section-light': 'hsl(226,100%,98%)',
        'clr-section-dark': 'hsl(220,40%,13%)',
        'clr-accent': 'hsl(212,100%,50%)',
        'clr-accent-active': 'hsl(212,100%,69%)',
        'clr-error': 'hsl(0,91%,62%)',
        'clr-content-light': 'hsl(0,0%,100%)',
        'clr-content-dark': 'hsl(222,41%,20%)',
        'clr-primary': 'hsl(217,35%,45%)',
        'clr-secondary': 'hsl(217,20%,51%)',
        'clr-heading': 'hsl(217,21%,21%)',
        'clr-body': 'hsl(220,18%,16%)',
        'clr-header-dark-active': 'hsl(222,44%,70%)',
      },
      fontFamily: {
        space: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}

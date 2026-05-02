/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary:  '#F5B3CD',
        dark:     '#A96A83',
        light:    '#FDF1F6',
        pink2:    '#FDF1F6',
        textdark: '#3C3C3B',
        textmid:  '#6B5B6B',
      },
      fontFamily: {
        body:    ['IBM Plex Sans Hebrew', 'sans-serif'],
        display: ['IBM Plex Sans Hebrew', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

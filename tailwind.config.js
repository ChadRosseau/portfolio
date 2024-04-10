/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

// Rotate X utilities
// @ts-ignore
const rotateX = plugin(({ addUtilities }) => {
  addUtilities({
    '.rotate-x-0': {
      transform: 'rotateX(0deg)',
    },
    '.rotate-x-450': {
      transform: 'rotateX(450deg)',
    },
  })
})

// Config file
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        round: ['var(--font-varela-round)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
    colors: {
      light: "#f8f8f8",
      "dark-100": "#1c1c1c",
      "dark-200": "#2d2d2d",
      "dark-400": "#7c7c7c",
      "gb-1": "#0f8",
      "gb-2": "#0fa",
      "gb-3": "#0fb",
      "gb-4": "#0fc",
      "gb-5": "#0fe",
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1300px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [rotateX],
  safelist: [
    'w-10'
  ]
};

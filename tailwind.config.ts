/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
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
  },
  plugins: [],
};

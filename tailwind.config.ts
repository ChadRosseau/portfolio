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
      light: "#fff",
      dark: "#0d0d0d",
      "gb-1": "#0f8",
      "gb-2": "#0fa",
      "gb-3": "#0fb",
      "gb-4": "#0fc",
      "gb-5": "#0fe",
    },
  },
  plugins: [],
};

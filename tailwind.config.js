const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Both are loaded and self-hosted by next/font in _app.js, which sets these two
        // CSS variables. The page previously ran entirely on the Tailwind default stack,
        // so every heading rendered in whatever UI font the visitor's OS ships — the
        // single biggest reason a well-built page still reads as a template.
        sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
        burtons: "burtons",
      },
    },
  },
  plugins: [],
}

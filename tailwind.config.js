/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#f7f78f9",
        primary: "#22222",
        accent: "# "
        
      }
    },
  },
  plugins: [],
}


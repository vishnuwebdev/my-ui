/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // playground
    "./dev/**/*.{js,ts,jsx,tsx}", // playground dev files
    "./src/**/*.{js,ts,jsx,tsx}", // library components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

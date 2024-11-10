/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': 'url(../src/assets/banner.jpg)',
        'banner': 'url(../src/assets/banner_1.jpg)'
      }
    },
  },
  plugins: [],
}
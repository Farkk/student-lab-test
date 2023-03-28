/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '360': '360px',
        '630': '630px'
      },
      maxWidth: {
        'ty': '630px',
        'ty2': '550px',
        'ty3': '686px',
        'ty4': '360px',
      },
      spacing: {
        '30': '30px',
      }
    },
  },
  plugins: [],
}

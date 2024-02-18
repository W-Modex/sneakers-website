/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"]
      },
      colors: {
        'very-dark-blue': "hsl(220, 13%, 13%)",
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
        'white': 'hsl(0, 0%, 100%)',
        'black': 'hsl(0, 0%, 0%)' // 75% opacity for lightbox bg
      }
    },
  },
  plugins: [],
}


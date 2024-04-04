/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '300': '300px'
      },
      backgroundImage: {
        'logo': "url('../public/men.jpg')",
        'whey': "url('../public/whey.jpg')",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      colors: {
        'blue': '#091559',
        'yellow': '#F7BA59',
        // 'light-gray': '#EBECF0',
        'light-gray': '#f7ba593d',
        'gray': '#4D5E80'
      }
    },
  },
  plugins: [],
}


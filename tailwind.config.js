/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.js"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)',
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
    },
  },
  },
  variants: {},
  plugins: [],
}


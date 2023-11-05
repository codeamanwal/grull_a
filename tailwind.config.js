/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.{jsx,tsx,js,ts}'],
  theme: {
    extend: {
      height: {
        maxHeight: ['var(--maxHeight, 75%)'],
      },
      screens: {
        'sm': '600px',
        'md': '800px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
    maxHeight: {
      '1/4': '350px',
      '1/2': '600px',
      '3/4': '800px',
    },
    fontFamily: {
      spaceGrotesk: ['space-grotesk', 'sans-serif'],
      GeneralSans: ['General-Sans', 'sans-serif'],
    },
  },
  plugins: [],
};

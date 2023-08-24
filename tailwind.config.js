/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['var(--font-Poppins)', 'sans-serif'],
      },
      colors: {
        'primary-400': '#FFEAEA',
        'primary-500': '#FFCCCC',
        'secundary-600': '#F5C6EC',
        text: {
          'primary-400': '#8000FF',
          'primary-500': '#9A208C',
          'secundary-500': '#d166c5',
        }
      },
    },
  },
  plugins: [],
}

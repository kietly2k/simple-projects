/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "age-calc-clr-primary": "hsl(259, 100%, 65%)",
        "age-calc-clr-light-red": "hsl(0, 100%, 67%)",

        "age-calc-white": "hsl(0, 0%, 100%)",
        "age-calc-off-white": "hsl(0, 0%, 94%)",
        "age-calc-light-grey": "hsl(0, 0%, 86%)",
        "age-calc-smokey-grey": "hsl(0, 1%, 44%)",
        "age-calc-off-black": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        'poppins': 'Poppins, san-serif',
      }
    },
  },
  plugins: [],
};

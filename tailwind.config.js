const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./features/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-Domine))']
        },
    },
},
    plugins: [],
}

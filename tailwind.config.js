/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./features/**/*.{js,ts,jsx,tsx}",
      ],
    theme: {
        extend: {
            colors: {
                'blackpule': "#000212",
                'graypule': "#090B1D",
                'sanahPurple': "#7450F0",
                'sanahBlue': '#001271'
            },
        },
    },
    plugins: [],
}
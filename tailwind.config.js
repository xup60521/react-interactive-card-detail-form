/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                grotesk: ["DM Sans", "sans-serif"]
            },
            colors: {
                c_error_red: "hsl(0, 100%, 66%)",
                c_Light_grayish_violet: "hsl(270, 3%, 87%)",
                c_Dark_grayish_violet: "hsl(279, 6%, 55%)",
                c_Very_dark_violet: "hsl(278, 68%, 11%)",
            }
        },
    },
    plugins: [],
}


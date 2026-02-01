/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
            },
            colors: {
                agri: {
                    green: '#059669', // emerald-600
                    dark: '#022c22', // emerald-950
                    light: '#d1fae5', // emerald-100
                    accent: '#f59e0b', // amber-500
                }
            }
        },
    },
    plugins: [],
}

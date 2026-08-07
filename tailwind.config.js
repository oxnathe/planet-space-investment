/** @type {import('tailwindcss').Config} */
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
 extend: {
 colors: {
 brand: {
 dark: "#0e1b14",
 gold: "#c9a24d",
 cream: "#f6f3ec",
 },
 },
 fontFamily: {
 display: ["'Playfair Display'", "serif"],
 sans: ["'Inter'", "sans-serif"],
 },
 },
 },
 plugins: [],
};

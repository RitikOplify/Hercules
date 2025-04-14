/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: "#BF8D67",
        lightblack: "#262521",
      },
      fontFamily: {
        urbanist: ["var(--font-urbanist)", ...defaultTheme.fontFamily.sans],
        gelasio: ["var(--font-gelasio)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
import forms from "@tailwindcss/forms"
import typography from "@tailwindcss/typography"
import tailwindScrollbar from "tailwind-scrollbar"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {},
  darkMode: "class",
  plugins: [forms, typography, tailwindScrollbar({ nocompatible: true })],
}

export default config

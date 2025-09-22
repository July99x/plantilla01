import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./views/**/*.{html,ejs}",              // si usas Express + EJS
    "./public/**/*.js",                     // si usas JS estático
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // si usas Next.js
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require("daisyui")], // DaisyUI aquí
}

export default config

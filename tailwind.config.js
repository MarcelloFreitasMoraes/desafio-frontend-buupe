/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [shadcnPreset],
  theme: {
    extend: {
      colors: {
        border: "var(--sidebar-border)",
        ring: "var(--sidebar-ring)",
        background: "var(--sidebar)",
        foreground: "var(--sidebar-foreground)",
      },
    },
  },
  plugins: [],
}


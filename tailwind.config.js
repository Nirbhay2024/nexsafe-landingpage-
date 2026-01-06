/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050B14", // Deeper, richer black
        foreground: "#f8fafc",
        primary: {
          DEFAULT: "#00E0FF", // Electric Cyan
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#7000FF", // Electric Purple
          foreground: "#ffffff",
        },
        accent: {
          DEFAULT: "#FF00E5", // Neon Pink/Magenta
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#1e293b",
          foreground: "#94a3b8",
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'], // Swapping to Outfit for a funkier look if possible, fallback Inter
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
    },
  },
  plugins: [],
}

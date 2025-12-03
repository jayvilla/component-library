/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(0 0% 100%)",
        foreground: "hsl(240 10% 3.9%)",

        primary: {
          DEFAULT: "hsl(222.2 47.4% 11.2%)",
          foreground: "hsl(210 40% 98%)",
        },

        secondary: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(222.2 47.4% 11.2%)",
        },

        destructive: {
          DEFAULT: "hsl(0 72% 51%)",
          foreground: "white",
        },

        muted: {
          DEFAULT: "hsl(210 40% 96.1%)",
          foreground: "hsl(215 16.3% 46.9%)",
        },

        "dark-background": "hsl(240 10% 3.9%)",
        "dark-foreground": "hsl(0 0% 98%)",
      },

      borderRadius: {
        xl: "1rem",
        lg: "0.75rem",
        md: "0.5rem",
        base: "0.375rem",
      },

      boxShadow: {
        soft: "0 4px 8px -2px rgba(0,0,0,0.03)",
        medium: "0 6px 16px -2px rgba(0,0,0,0.06)",
        strong: "0 8px 24px -2px rgba(0,0,0,0.09)",
      },

      keyframes: {
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        "scale-in": {
          from: { opacity: 0, transform: "scale(0.95)" },
          to: { opacity: 1, transform: "scale(1)" },
        },
      },

      animation: {
        "fade-in": "fade-in 150ms ease-out",
        "scale-in": "scale-in 180ms ease-out",
      },
    },
  },
  plugins: [],
};

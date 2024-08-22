import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "infinity-slide": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "irregular-move-1": {
          "0%": { transform: "translateX(0) translateY(0) rotate(0deg)" },
          "25%": {
            transform: "translateX(150%) translateY(-50%) rotate(45deg)",
          },
          "50%": {
            transform: "translateX(300%) translateY(100%) rotate(90deg)",
          },
          "75%": {
            transform: "translateX(-100%) translateY(50%) rotate(135deg)",
          },
          "100%": { transform: "translateX(0) translateY(0) rotate(180deg)" },
        },
        "irregular-move-2": {
          "0%": { transform: "translateX(0) translateY(0) rotate(0deg)" },
          "25%": {
            transform: "translateX(-150%) translateY(-50%) rotate(-45deg)",
          },
          "50%": {
            transform: "translateX(-300%) translateY(100%) rotate(-90deg)",
          },
          "75%": {
            transform: "translateX(100%) translateY(50%) rotate(-135deg)",
          },
          "100%": { transform: "translateX(0) translateY(0) rotate(-180deg)" },
        },
        "irregular-move-3": {
          "0%": { transform: "translateX(0) translateY(0) rotate(0deg)" },
          "25%": {
            transform: "translateX(-150%) translateY(50%) rotate(-45deg)",
          },
          "50%": {
            transform: "translateX(-300%) translateY(100%) rotate(-90deg)",
          },
          "75%": {
            transform: "translateX(-100%) translateY(150%) rotate(-135deg)",
          },
          "100%": {
            transform: "translateX(0) translateY(200%) rotate(-180deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "infinity-slide": "infinity-slide 20s linear infinite",
        "irregular-move-1": "irregular-move-1 40s linear infinite",
        "irregular-move-2": "irregular-move-2 40s linear infinite",
        "irregular-move-3": "irregular-move-3 40s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      transitionDuration: {
        "5000": "20000ms",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

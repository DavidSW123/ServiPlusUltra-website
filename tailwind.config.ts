import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx,mdx}",
    "./sanity/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        // ============================================
        // ServiPlusUltra — "Tech Cobalto"
        // Cobalto + cobre, geometría limpia, premium
        // ============================================
        cobalt: {
          50: "#EEF3FF",
          100: "#DEE7FF",
          200: "#C2D1FF",
          300: "#98B0FF",
          400: "#6C87FB",
          500: "#3B5EF0", // ⭐ primario
          600: "#2A46D6",
          700: "#2138AD",
          800: "#1D2F87",
          900: "#182661",
          950: "#0C1440", // navy profundo (fondos hero)
        },
        copper: {
          50: "#FBF4EE",
          100: "#F6E4D4",
          200: "#EDC7A8",
          300: "#E2A878",
          400: "#D68B4E",
          500: "#C77237", // ⭐ acento cobre
          600: "#A85A28",
          700: "#864620",
          800: "#6B3A1E",
        },
        cyan: {
          // resplandor "tech" muy puntual
          400: "#38E1FF",
          500: "#12C6EA",
        },
        ink: {
          // slate cool para texto y neutros
          50: "#F7F8FB",
          100: "#EEF1F6",
          200: "#DEE3EC",
          300: "#C3CBD9",
          400: "#94A0B4",
          500: "#657189",
          600: "#48546B",
          700: "#333D50",
          800: "#1F2736",
          900: "#111725",
          950: "#080C15",
        },
        // Aliases de compatibilidad (código aún no migrado)
        brand: {
          50: "#EEF3FF",
          100: "#DEE7FF",
          200: "#C2D1FF",
          300: "#98B0FF",
          400: "#6C87FB",
          500: "#3B5EF0",
          600: "#2A46D6",
          700: "#2138AD",
          800: "#1D2F87",
          900: "#182661",
          950: "#0C1440",
        },
        accent: {
          50: "#FBF4EE",
          100: "#F6E4D4",
          200: "#EDC7A8",
          300: "#E2A878",
          400: "#D68B4E",
          500: "#C77237",
          600: "#A85A28",
          700: "#864620",
        },
        sun: { 400: "#D68B4E", 500: "#C77237", 600: "#A85A28", 700: "#864620", 100: "#F6E4D4" },
        coral: { 100: "#F6E4D4", 500: "#C77237", 600: "#A85A28", 700: "#864620", 800: "#6B3A1E" },
        mint: { 100: "#DEE7FF", 200: "#C2D1FF", 300: "#98B0FF", 600: "#2138AD" },
        cream: { 50: "#FFFFFF", 100: "#F7F8FB", 200: "#EEF1F6", 300: "#DEE3EC" },
        night: { 900: "#111725", 950: "#080C15" },
        success: { 400: "#34D399", 500: "#10B981", 600: "#059669" },
        gold: { 400: "#D68B4E", 500: "#C77237", 600: "#A85A28" },
        spark: { 400: "#38E1FF", 500: "#12C6EA" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.75rem, 5vw + 1rem, 5rem)",
          { lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2.25rem, 3.5vw + 1rem, 3.75rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.6rem, 2vw + 1rem, 2.5rem)",
          { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
      },
      backgroundImage: {
        "cobalt-radial":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,94,240,0.55), transparent 60%)",
        "cobalt-gradient":
          "linear-gradient(160deg, #0C1440 0%, #182661 45%, #1D2F87 100%)",
        "copper-line": "linear-gradient(90deg, transparent, #C77237, transparent)",
        "cyan-line": "linear-gradient(90deg, transparent, #38E1FF, transparent)",
        "grid-tech":
          "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(to right, rgba(17,23,37,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,23,37,0.05) 1px, transparent 1px)",
        "dots-tech":
          "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
      },
      backgroundSize: { grid: "44px 44px", dots: "22px 22px" },
      boxShadow: {
        soft: "0 4px 20px -8px rgba(17,23,37,0.10)",
        card: "0 12px 34px -14px rgba(17,23,37,0.18)",
        elevate: "0 24px 60px -24px rgba(17,23,37,0.30)",
        "glow-cobalt": "0 12px 40px -10px rgba(59,94,240,0.55)",
        "glow-copper": "0 12px 40px -12px rgba(199,114,55,0.5)",
        "ring-cobalt": "0 0 0 1px rgba(59,94,240,0.35)",
        // compat
        sticker: "0 12px 34px -14px rgba(17,23,37,0.18)",
      },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.5s ease-out both",
        marquee: "marquee 38s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

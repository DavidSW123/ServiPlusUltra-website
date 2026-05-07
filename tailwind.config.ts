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
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // ============================================
        // ServiPlusUltra — "Bold & Friendly"
        // Holaluz / Oatly / Klarna inspired
        // ============================================

        // Cream warm — fondo principal cálido (papel)
        cream: {
          50: "#FFFDF8",
          100: "#FFF8EE", // base background
          200: "#FBF1DC",
          300: "#F5E6C2",
        },

        // Cobalt blue vibrante — primary brand
        brand: {
          50: "#EEF3FF",
          100: "#DCE5FF",
          200: "#B6C6FF",
          300: "#8BA4FF",
          400: "#5C7DFB",
          500: "#3D5DF7",
          600: "#2D52F5", // ⭐ cobalt principal
          700: "#1F3FD6",
          800: "#1A33A8",
          900: "#162780",
          950: "#0C1748",
        },

        // Mustard / sunshine yellow — accent alegre
        sun: {
          50: "#FFFBEB",
          100: "#FFF4C7",
          200: "#FFE88A",
          300: "#FFDA52",
          400: "#FFD43B", // ⭐ amarillo principal
          500: "#F5BC10",
          600: "#D49C04",
          700: "#A77707",
          800: "#7C5912",
        },

        // Coral — pop accent / stickers
        coral: {
          50: "#FFF1ED",
          100: "#FFE0D6",
          200: "#FFBDA8",
          300: "#FF9876",
          400: "#FF7B53",
          500: "#FF6B47", // ⭐ coral principal
          600: "#EF4D24",
          700: "#C9381B",
          800: "#A22F1A",
        },

        // Mint — soft highlight
        mint: {
          50: "#EEFBF3",
          100: "#D4F5E1", // ⭐ mint principal (badge bg)
          200: "#A8EAC2",
          300: "#74D89E",
          400: "#46BF7B",
          500: "#27A65F",
          600: "#1B854B",
        },

        // Ink — neutros para texto (charcoal NO black puro)
        ink: {
          50: "#FAFAF7",
          100: "#F2F1ED",
          200: "#E2E0D9",
          300: "#C9C6BB",
          400: "#9D998E",
          500: "#6E6A60",
          600: "#4D4A43",
          700: "#36342F",
          800: "#22211D",
          900: "#1A1A1A", // ⭐ texto principal (charcoal)
          950: "#0E0E0E",
        },

        // Aliases para mantener compat con código existente que se va sustituyendo
        accent: {
          50: "#FFF1ED",
          100: "#FFE0D6",
          200: "#FFBDA8",
          300: "#FF9876",
          400: "#FF7B53",
          500: "#FF6B47",
          600: "#EF4D24",
          700: "#C9381B",
        },
        spark: {
          50: "#FFFBEB",
          100: "#FFF4C7",
          200: "#FFE88A",
          300: "#FFDA52",
          400: "#FFD43B",
          500: "#F5BC10",
          600: "#D49C04",
          700: "#A77707",
        },
        gold: {
          400: "#FFD43B",
          500: "#F5BC10",
          600: "#D49C04",
        },
        success: {
          400: "#46BF7B",
          500: "#27A65F",
          600: "#1B854B",
        },
        night: {
          900: "#162780",
          950: "#0C1748",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-bricolage)", "var(--font-inter)", "sans-serif"],
        hand: ["var(--font-caveat)", "cursive"],
      },
      fontSize: {
        "display-xl": [
          "clamp(3rem, 6vw + 1rem, 6rem)",
          { lineHeight: "0.95", letterSpacing: "-0.035em", fontWeight: "700" },
        ],
        "display-lg": [
          "clamp(2.25rem, 4vw + 1rem, 4.25rem)",
          { lineHeight: "1.0", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-md": [
          "clamp(1.75rem, 2.5vw + 1rem, 3rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em", fontWeight: "700" },
        ],
      },
      backgroundImage: {
        "stripes-cobalt":
          "repeating-linear-gradient(-45deg, #2D52F5, #2D52F5 14px, #1F3FD6 14px, #1F3FD6 28px)",
        "stripes-sun":
          "repeating-linear-gradient(-45deg, #FFD43B, #FFD43B 14px, #F5BC10 14px, #F5BC10 28px)",
        "dots-soft":
          "radial-gradient(circle at 1px 1px, rgba(26,26,26,0.10) 1px, transparent 0)",
        "grid-cream":
          "linear-gradient(to right, rgba(26,26,26,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(26,26,26,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
        dots: "20px 20px",
      },
      boxShadow: {
        soft: "0 6px 20px -8px rgba(26,26,26,0.12)",
        card: "0 10px 30px -12px rgba(26,26,26,0.18)",
        "sticker": "4px 4px 0 0 rgba(26,26,26,1)",
        "sticker-cobalt": "4px 4px 0 0 rgba(45,82,245,1)",
        "sticker-coral": "4px 4px 0 0 rgba(255,107,71,1)",
        "sticker-sun": "4px 4px 0 0 rgba(255,212,59,1)",
        "premium": "0 14px 40px -16px rgba(45,82,245,0.35)",
        // Compat
        "glow-accent": "0 0 0 1px rgba(255,107,71,0.4), 0 8px 32px -8px rgba(255,107,71,0.5)",
        "glow-cyan": "0 0 0 1px rgba(45,82,245,0.4), 0 8px 32px -8px rgba(45,82,245,0.5)",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out",
        "fade-in": "fadeIn 0.4s ease-out",
        "marquee": "marquee 40s linear infinite",
        "wiggle": "wiggle 0.4s ease-in-out",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

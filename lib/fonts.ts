import { Inter, Space_Grotesk } from "next/font/google";

// Cuerpo — neutra, legible, profesional
export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Display — geométrica, tech, con carácter (Tech Cobalto)
export const fontDisplay = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

// Alias de compatibilidad con el código existente
export const fontBricolage = fontDisplay;
export const fontOutfit = fontDisplay;

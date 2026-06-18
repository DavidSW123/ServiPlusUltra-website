import { Inter, Bricolage_Grotesque } from "next/font/google";

export const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Display chunky pero amable — para titulares Bold & Friendly
export const fontBricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

// Compat: alias del antiguo Outfit -> Bricolage
export const fontOutfit = fontBricolage;

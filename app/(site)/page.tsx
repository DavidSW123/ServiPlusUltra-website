import { CitiesCoverage } from "@/components/home/CitiesCoverage";
import { CtaBanner } from "@/components/home/CtaBanner";
import { Differentiators } from "@/components/home/Differentiators";
import { FaqSection } from "@/components/home/FaqSection";
import { Hero } from "@/components/home/Hero";
import { ProcessSteps } from "@/components/home/ProcessSteps";
import { Sectors } from "@/components/home/Sectors";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustBar } from "@/components/home/TrustBar";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <Differentiators />
      <ProcessSteps />
      <Sectors />
      <CitiesCoverage />
      <FaqSection />
      <CtaBanner />
    </>
  );
}

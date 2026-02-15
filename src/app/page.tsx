import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <CTA />
    </div>
  );
}
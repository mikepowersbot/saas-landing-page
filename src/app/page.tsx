import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Pricing } from "@/components/pricing";
import { Cta } from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Cta />
    </>
  );
}
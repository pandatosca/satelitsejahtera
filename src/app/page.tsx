import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import SolutionsPreview from "@/components/sections/SolutionsPreview";
import WhyUs from "@/components/sections/WhyUs";
import Partners from "@/components/sections/Partners";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <SolutionsPreview />
      <WhyUs />
      <Partners />
      <CTA />
    </>
  );
}

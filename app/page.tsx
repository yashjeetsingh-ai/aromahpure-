import SwiperSlider from "@/components/sections/hero"
import Slider from "@/components/sections/Slider"
import AromaExperience from "@/components/sections/AromaExperience"
import WhatWeDo from "@/components/sections/what-we-do"
import WhyAromahpureAir from "@/components/sections/why-aromahpure-air"
import EffortlessSetup from "@/components/sections/effortless-setup"
import EffortlessToUseViaApp from "@/components/sections/effortless-to-use-via-app"
import FragranceImpactSection from "@/components/sections/fragrance-impact-section"
import CraftAtmosphere from "@/components/sections/craft-atmosphere"
import StatsSection from "@/components/sections/stats-section"
import TestimonialsSection from "@/components/sections/testimonials-section"

export default function Home() {
  return (
    <div>
      <SwiperSlider />
      <Slider />
      <AromaExperience />
      <WhatWeDo />
      <WhyAromahpureAir />
      <EffortlessSetup />
      <EffortlessToUseViaApp />
      <FragranceImpactSection />
      <CraftAtmosphere />
      <StatsSection />
      <TestimonialsSection />
    </div>
  )
}

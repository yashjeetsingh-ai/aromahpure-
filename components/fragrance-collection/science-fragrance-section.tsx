"use client"

import RevealWrapper from "@/components/animation/RevealWrapper"
import useReveal from "@/hooks/useReveal"
import CenterOutwardLine from "../animation/CenterOutwardLine";

export default function ScienceFragranceSection() {
    const { revealRef } = useReveal();

    return (
        <div
            className="font-xyz pt-12 sm:pt-14 md:pt-16 lg:pt-18  xl:pt-20 bg-[#EEE8DF] lg:bg-white"

            style={{
                backgroundImage: "url('Fragrance Collection-02.png')",
                backgroundSize: "cover",
                backgroundPosition: "center 50%",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Title with Full Width Lines */}
            {/* Title with Full Width Lines to Ends */}
            <div className="w-full flex items-center lg:items-end mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-20 2xl:mb-32">
                {/* Left line */}
                <div className="flex-1 h-[1px] bg-[#5e6e65]"></div>

                <RevealWrapper delay={0.2}>
                    <div className="text-center" >
                        <h1 className="text-[#5e6e65] font-medium leading-snug text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[48px] tracking-wide">
                            THE SCIENCE BEHIND
                            <div className="2xl:mt-3 lg:mt-2 mt-1">THE FRAGRANCE</div>
                        </h1>
                    </div>
                </RevealWrapper>

                {/* Right line */}
                <div className="flex-1 h-[1px] bg-[#5e6e65]"></div>
            </div>


            {/* Content Paragraphs */}
            <div className="lg:max-w-[1300px] max-w-[650px] mx-auto space-y-7 sm:space-y-8 md:space-y-9 lg:space-y-10">
                {/* First Paragraph */}
                <RevealWrapper delay={0.2}>
                    <p className="text-[#6f7b75] font-light text-center leading-sci text-base md:text-[18px] lg:text-[24px] xl:text-[23px] 2xl:text-[28px] px-3 sm:px-4 md:px-6 " ref={revealRef}>
                        Every fragrance goes through a meticulous in-house evaluation process led by
                        our dedicated NPD and research team. Working closely with 7 renowned
                        fragrance houses, we carefully select and test each scent for its throw, longevity,
                        and olfactive balance across real environments.
                    </p>
                </RevealWrapper>

                {/* Second Paragraph */}
                <RevealWrapper delay={0.2}>
                    <p className="text-[#6f7b75] font-light text-center leading-sci text-base md:text-[18px] lg:text-[24px] xl:text-[23px] 2xl:text-[28px] px-3 sm:px-4 md:px-6" ref={revealRef}>
                        Our technologies are designed to deliver consistent diffusion, large space
                        coverage, and effective odor neutralization, creating elevated atmospheres that
                        leave a lasting impression.
                    </p>
                </RevealWrapper>


                {/* Bottom Decorative Line */}
                {/* <div className="flex justify-center pt-8 sm:pt-10 md:pt-12 lg:pt-16">
                    <div className="h-[1.5px] bg-[#7f9088] w-full max-w-full"></div>
                </div> */}
                <div className="flex justify-center pt-8 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-10 2xl:pt-16">
                    <CenterOutwardLine className="h-[1.5px] bg-[#7f9088]" duration={1.2} delay={0.3} />
                </div>
            </div>
        </div>
    )
}

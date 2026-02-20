"use client"

import Image from "next/image"
import RevealWrapper from "@/components/animation/RevealWrapper"
import useReveal from "@/hooks/useReveal"
import { ArrowRight } from 'lucide-react' // Ensure ArrowRight is imported

export default function WhatWeDo() {
  const { revealRef } = useReveal()

  return (
    <section className="min-h-[70vh] lg:min-h-[65vh] xl:min-h-[55vh] 2xl:min-h-[70vh] flex flex-col lg:flex-row relative"> {/* Reduced min-height */}
      {/* Left Column - Image */}
      <div className="relative w-full lg:w-[46.5%] min-h-[75vh] md:min-h-[85vh] lg:min-h-[40vh] xl:min-h-[55vh]  2xl:min-h-[70vh]">
        <Image
          src="/Home page Aromahpure Air-03.png"
          alt="Humidifier emitting mist"
          layout="fill"
          objectFit="cover"
          className="object-center"
          loading="lazy"
        />
      </div>



      {/* Right Column - Content */}
      <div className="w-full lg:w-[53.5%] bg-[#d8d8d0] flex flex-col justify-center">
        {/* This div wraps all the content (title, services, know more) and controls overall vertical padding */}
        <div className="py-10 sm:py-28 md:py-32 lg:py-20 xl:py-16 2xl:py-24"> {/* Adjusted padding */}
          {/* Top section: Title and Subtitle with their own horizontal padding */}
          <div className="px-8 md:px-12 lg:px-16 xl:px-12 lg:pb-10 xl:pb-6"> {/* Tighter padding on xl */}
            <RevealWrapper delay={0.1}>
              <h2
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[32px] 2xl:text-[54px] text-[#5e6e65] font-medium 2xl:mb-3 lg:mb-4 xl:mb-0 font-xyz tracking-wide leading-snug"
                ref={revealRef}
              >
                WHAT WE DO?
              </h2>
            </RevealWrapper>
            <RevealWrapper delay={0.2}>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-lg 2xl:text-2xl text-[#7a8a7f] font-light font-xyz"
                ref={revealRef}
              >
                Complete Scenting Services
              </p>
            </RevealWrapper>
          </div>

          {/* Service Items with animated borders */}
          <div className="w-full">
            {/* Top border - only show on lg and above */}
            <RevealWrapper delay={0.25}>
              <div className="h-[1px] bg-[#47574c] opacity-60 hidden lg:block" ref={revealRef}></div>
            </RevealWrapper>

            {["Consultation", "Installation", "Maintenance"].map((service, index) => (
              <div key={service}>
                {/* Service text */}
                <div className="px-8 md:px-12 lg:px-16 xl:px-20 pt-10 pb-1.5 sm:pt-11 sm:pb-4 md:pt-6 md:pb-3 lg:pt-14 xl:pt-6 2xl:pt-14 lg:pb-5">
                  <RevealWrapper delay={0.3 + index * 0.1}>
                    <p
                      className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-xl 2xl:text-3xl text-[#5e6e65] font-medium font-xyz"
                      ref={revealRef}
                    >
                      {service}
                    </p>
                  </RevealWrapper>
                </div>

                {/* Border below each item */}
                <RevealWrapper delay={0.3 + index * 0.1 + 0.05}>
                  <div className="h-[1px] bg-[#47574c] opacity-60" ref={revealRef}></div>
                </RevealWrapper>
              </div>
            ))}
          </div>



          {/* "KNOW MORE" link with horizontal and bottom padding */}
          {/* Removed absolute positioning to keep it in flow and control spacing with padding */}
          {/* <div className="flex justify-end lg:bottom-8 md:bottom-12 bottom-9 absolute right-0  items-center  pr-8 sm:pr-12 md:pr-16 lg:pr-20 xl:pr-24">
            <RevealWrapper delay={0.6}>
              <a
                href="#"
                className="inline-flex items-center text-[#5e6e65] text-base sm:text-lg md:text-xl lg:text-2xl font-normal tracking-wider hover:underline group"
              >
                KNOW MORE
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </RevealWrapper>
          </div> */}
        </div>
      </div>
    </section>
  )
}

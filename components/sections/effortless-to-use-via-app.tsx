'use client'

import Image from 'next/image'
import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import AnimatedLine from '@/components/animation/AnimatedLine'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import Counter from '../animation/Counter'

export default function EffortlessToUseViaApp() {
  const sectionRef = useRef<HTMLElement>(null)
  const { revealRef: textRevealRef } = useReveal()

  return (
    <section
      ref={sectionRef}
      className="relative w-full flex items-center justify-center overflow-visible py-12 sm:py-16 md:py-20 lg:py-0" // Reduced overall vertical padding
    >
      {/* Background */}
      <div
        className="absolute w-full max-w-[1760px] mx-auto top-1/2 -translate-y-1/2 h-[750px] md:h-[1000px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px] mt-14 md:mt-0 z-0" // Reduced height
        style={{
          backgroundImage: "url('/Home page Aromahpure Air-20.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      {/* Content */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 gap-10 lg:gap-16 xl:gap-20">  {/* Reduced gap between columns */}
        {/* Image */}
        <div className="w-full flex justify-center lg:justify-start lg:w-1/2">
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] 2xl:w-[440px] ">
            {/* Image */}
            <Image
              src="/shared image (2) (1).png"
              alt="Mobile phone showing app interface"
              width={700}
              height={1300}
              className="w-full h-auto object-contain"
              loading="lazy"
            />

            {/* Center Text - 27 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      text-black font-medium font-xyz
      text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] 2xl:text-[56px] pt-5">
              <Counter end={27} />
            </div>

            {/* Bottom Text - 36% Remaining */}
            <div className="absolute lg:bottom-24 bottom-16  left-1/2 -translate-x-1/2 
      text-black  font-xyz
      text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]">
              <Counter end={36} />% remaining
            </div>
          </div>
        </div>

        {/* Text and CTA */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] 2xl:text-[58px] text-white font-medium tracking-wide leading-tight mb-4 font-xyz lg:max-w-xl" // Reduced font size
            ref={textRevealRef}
          >
            EFFORTLESS TO USE VIA APP
          </h2>
          <AnimatedLine
            className="w-full max-w-[180px] lg:max-w-[300px] h-[2px] bg-white opacity-50 mb-6 mx-auto lg:mx-0" // Reduced max-width and margin-bottom
            start="top bottom"
            end="center center"
            scrub={true}
            duration={1.5}
            triggerElement={sectionRef.current}
          />
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-[24px] text-white font-extralight leading-relaxed mb-10 font-xyz" // Reduced font size and margin-bottom
            ref={textRevealRef}
          >
            Monitor fragrance levels, adjust intensity, and manage your scent settings anytime through the Aromahpure Air app.
          </p>
          <RevealWrapper delay={0.2}>
            <Button
              className="bg-transparent border border-white text-white
              text-sm sm:text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-[22px]
              font-medium py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4
              rounded-xl transition-all duration-300
              hover:bg-white hover:text-[#687970] mb-5" // Reduced font size and padding
            >
              DOWNLOAD THE APP
            </Button>
          </RevealWrapper>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            {/* Google Play Link */}
            <RevealWrapper delay={0.5}>
              <a
                href="https://play.google.com/store/apps/details?id=com.yooai.scentlife"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="inline-flex items-center px-3 py-2 bg-[#4a5a52] rounded-md text-white transition-colors duration-300 hover:bg-[#3d4a44]"
              >
                <FaGooglePlay className="w-5 h-5 mr-2" />
                <div className="flex flex-col leading-none">
                  <span className="text-[8px] font-medium tracking-wide">GET IT ON</span>
                  <span className="text-sm font-semibold -mt-0.5">Google Play</span>
                </div>
              </a>
            </RevealWrapper>

            {/* App Store Link */}
            <RevealWrapper delay={0.6}>
              <a
                href="https://apps.apple.com/in/app/scent-tech/id1662466433"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="inline-flex items-center px-3 py-2 bg-[#4a5a52] rounded-md text-white transition-colors duration-300 hover:bg-[#3d4a44]"
              >
                <FaApple className="w-5 h-5 mr-2" />
                <div className="flex flex-col leading-none">
                  <span className="text-[8px] font-medium tracking-wide">Download on the</span>
                  <span className="text-sm font-semibold -mt-0.5">App Store</span>
                </div>
              </a>
            </RevealWrapper>
          </div>


        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'
import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import AnimatedLine from '../animation/AnimatedLine'
import BookDemoModal from '../common/BookDemoModal'
import ThankYouModal from '../common/ThankYouModal'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function WhyAromahpureAir() {
  const { revealRef } = useReveal()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const router = useRouter();


  const handleFormSuccess = () => {
    setIsModalOpen(false)
    setShowThankYou(true)
  }

  const handleThankYouClose = () => {
    setShowThankYou(false)
  }

  const handleClick = (href: string) => {
    if (href === "/book-demo") {
      setIsModalOpen(true)
      return
    }
    router.push(href)
  }
  const features = [
    {
      icon: '/Home page Aromahpure Air-10.png',
      title: 'END-TO-END SERVICE',
      description: 'We manage everything, from setup to maintenance.',
    },
    {
      icon: '/Home page Aromahpure Air-11.png',
      title: 'FREE CONSULTATION',
      description: 'Expert guidance to help you pick the perfect scent strategy.',
    },
    {
      icon: '/Home page Aromahpure Air-13.png',
      title: 'HVAC COMPATIBLE SOLUTIONS',
      description: 'Most diffusers integrate easily with your central air system.',
    },
    {
      icon: '/Home page Aromahpure Air-12.png',
      title: 'ISO-CERTIFIED QUALITY',
      description: 'Processes that meet global standards of safety and excellence.',
    },
    {
      icon: '/Home page Aromahpure Air-15.png',
      title: 'SMART DIFFUSER TECHNOLOGY',
      description: 'App control for intensity, oil level tracking, and scheduling.',
    },
    {
      icon: '/Home page Aromahpure Air-14.png',
      title: 'IFRA COMPLIANT FRAGRANCES',
      description: 'Fragrances crafted to meet global safety and quality standards.',
    },
  ]
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-no-repeat py-12 sm:py-16 md:py-20 lg:py-24 xl:py-20 2xl:py-24" // Reduced vertical padding
        style={{
          backgroundImage: "url('/Home page Aromahpure Air-02.png')",
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-8 lg:px-12 xl:px-16">
          {/* Title and Line */}
          <div className="w-full mb-6 md:mb-10 lg:mb-14">
            {' '}
            {/* Reduced margin-bottom */}
            <div className="flex items-end">
              {/* WHY Text with scrubbing animation */}
              <RevealWrapper delay={0.1}>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[50px] 2xl:text-[60px] text-[#5e6e65] font-abc font-normal whitespace-nowrap" // Reduced font size
                  ref={revealRef} // Apply revealRef for scrubbing
                >
                  WHY
                </h2>
              </RevealWrapper>
              {/* Animated Horizontal Line - now using AnimatedLine component with scrubbing */}
              <AnimatedLine
                className="mb-1 flex-grow h-[1.5px] bg-[#687970]" // Increased height to 3px
                start="top 85%" // Start when the top of the line is 85% from viewport top
                end="bottom 15%" // End when the bottom of the line is 15% from viewport bottom
                scrub={true} // Enable scrubbing for smooth, reversible animation
                duration={1.5}
              />
            </div>
            {/* Subheading with scrubbing animation */}
            <RevealWrapper delay={0.2}>
              <h3
                className="md:mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[38px] 2xl:text-[48px] text-[#5e6e65] font-abc font-normal tracking-wide" // Reduced font size
                ref={revealRef} // Apply revealRef for scrubbing
              >
                AROMAHPURE AIR?
              </h3>
            </RevealWrapper>
          </div>
          {/* Feature Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-10 sm:gap-y-14 md:gap-y-16 2xl:pt-16">
            {/* Reduced gaps and padding-top */}
            {features.map((feature, index) => (
              <RevealWrapper key={index} delay={0.3 + index * 0.05}>
                <div className="flex flex-col md:items-start md:text-left items-center text-center">
                  {/* Icon */}
                  <div className="flex flex-col items-start justify-start md:min-h-[100px] min-h-[80px]">
                    {/* Reduced min-height */}
                    <div className="w-14 h-14 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-start">
                      {/* Reduced size */}
                      <Image
                        src={feature.icon || '/placeholder.svg'}
                        alt={feature.title}
                        width={60} 
                        height={60} 
                        loading="lazy"
                      />
                    </div>
                    <AnimatedLine
                      className="h-[2px] md:w-[80px] w-[60px] bg-[#687970] md:-mt-[16px] md:mb-3"
                      start="top 90%"
                      end="bottom 10%"
                      scrub={true}
                      duration={1.5}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-lg 2xl:text-2xl text-[#5e6e65] font-semibold mb-1 uppercase font-xyz max-w-[60%] sm:max-w-[90%] md:max-w-[300px] lg:max-w-[300px]"
                    ref={revealRef}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[11px] sm:text-sm md:text-base lg:text-lg xl:text-sm 2xl:text-xl text-[#7a8a7f] font-normal font-xyz max-w-[80%] sm:max-w-[95%] md:max-w-[300px] lg:max-w-[360px]"
                    ref={revealRef}
                  >
                    {feature.description}
                  </p>
                </div>
              </RevealWrapper>
            ))}
          </div>

        </div>
        {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 md:hidden block">
          <button
            onClick={() => handleClick("/book-demo")}
            className="bg-[#d4cda3] text-[#43615c] font-semibold px-3 py-12 rounded-l-full border border-[#333] 
             [writing-mode:vertical-rl] hover:bg-[#c3b883] transition-colors duration-300"
          >
            BOOK A DEMO
          </button>
        </div> */}
      </section>
      <BookDemoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleFormSuccess}
      />

      <ThankYouModal
        isOpen={showThankYou}
        onClose={handleThankYouClose}
      />
      <div className="w-full  h-[2px] bg-[#4e5b53] opacity-40 mt-2 container mx-auto" />
    </>
  )
}

"use client"

import Image from "next/image"
import RevealWrapper from "@/components/animation/RevealWrapper"
import useReveal from "@/hooks/useReveal"
import useCircleScaleAnimation from "@/hooks/useCircleScaleAnimation"
import useVerticalLineGrowAnimation from "@/hooks/useVerticalLineGrowAnimation"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button" // Assuming you have a Button component
import { useRouter } from "next/navigation"
import BookDemoModal from "../common/BookDemoModal"
import ThankYouModal from "../common/ThankYouModal"

const stepsData = [
  {
    title: "CONNECT",
    description: "Call us or fill out the form, and we'll help you find the right scenting solution.",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "VISIT",
    description: "We survey your space to curate a custom scent plan.",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "INSTALL",
    description: "Hassle-free installation by our expert team.",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "MAINTAIN",
    description: "We manage everything from refills to routine checks.",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    title: "ENJOY",
    description: "A welcoming atmosphere that your guests will notice and remember.",
    icon: "/placeholder.svg?height=40&width=40",
  },
]

export default function EffortlessSetup() {
  const stepsContainerRef = useRef<HTMLDivElement>(null) // Ref for the steps container to trigger line animation
  const { revealRef: textRevealRef } = useReveal() // Destructure revealRef correctly
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)
  const router = useRouter();

  const handleClick = (href: string) => {
    if (href === "/book-demo") {
      setIsModalOpen(true)
      return
    }
    router.push(href)
  }

  const handleFormSuccess = () => {
    setIsModalOpen(false)
    setShowThankYou(true)
  }

  const handleThankYouClose = () => {
    setShowThankYou(false)
  }

  // Call useVerticalLineGrowAnimation once at the top level
  const verticalLineRef = useVerticalLineGrowAnimation({
    triggerElement: stepsContainerRef.current, // Trigger animation by the entire steps container
    start: "top 90%", // Start when container top is at viewport center
    end: "bottom center", // End when container bottom is at viewport center
    scrub: true, // Enable scrubbing
  })

  // Call useCircleScaleAnimation for each circle outside the map
  const circleRefs = stepsData.map((_, index) => useCircleScaleAnimation({ delay: 0.2 + index * 0.1 + 0.1 }))

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute xl:-bottom-[3%] bottom-0 left-0 w-full h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] xl:h-[350px] 2xl:h-[400px] z-[-1] lg:block hidden">
          <Image
            src="/Home page Aromahpure Air-17.png"
            alt="Background"
            width={1920}   // adjust to actual image dimension
            height={400}   // adjust height according to aspect ratio
            loading="lazy"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <section className="py-4 sm:py-10 md:py-12 lg:py-16 xl:py-14 2xl:py-20 font-xyz"> {/* Reduced overall section padding */}
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12 xl:gap-16"> {/* Reduced gap between columns */}
              {/* Left Column: Content */}
              <div className="w-full lg:w-[60%] flex flex-col items-start">
                <h2
                  className="w-full max-w-[30%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[90%] 
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[52px] 
                  text-[#5e6e65] font-medium font-xyz tracking-wide leading-eff lg:mb-12 mb-6 px-10 lg:px-4"
                  ref={textRevealRef}
                >
                  EFFORTLESS SETUP
                </h2>
                {/* <RevealWrapper delay={0.2}> */}
                <div className="relative w-full h-[180px] sm:h-[240px] md:h-[400px] lg:h-[380px] xl:h-[450px] 2xl:h-[500px] lg:mb-16 mb-6 overflow-hidden"> {/* Reduced image height and margin-bottom */}
                  <Image
                    src="/Home page Aromahpure Air-16.png"
                    alt="Humidifier emitting mist"
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                  />
                </div>
                {/* </RevealWrapper> */}
                <p
                  className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#7a8a7f] font-normal font-xyz mb-4 lea-eff px-10 lg:px-4"
                  ref={textRevealRef}
                >
                  We oversee the complete scenting process – from initial consultation to ongoing maintenance, ensuring a seamless experience.
                </p>
                <RevealWrapper delay={0.4}>
                  <div className="px-10 lg:px-4">
                    <Button onClick={() => handleClick("/book-demo")} className="bg-[#687970] hover:bg-[#5e6e65] text-white font-light rounded-full shadow-lg transition-all duration-300 mt-3 text-[10px] px-4 py-1 md:text-[13px] md:px-6 md:py-3 lg:text-[14px] lg:px-[18px] lg:py-[14px]">BOOK A FREE CONSULTATION</Button>

                  </div>
                </RevealWrapper>
              </div>

              {/* Right Column: Vertical Steps Timeline */}
              <div className="w-full lg:w-[40%] flex justify-start lg:mt-0 mt-6 px-10 lg:px-4">
                <div className="relative flex w-full max-w-md" ref={stepsContainerRef}>
                  {/* Vertical line behind circles */}
                  <div className="absolute left-[12px] md:left-[16px] lg:left-[19.5px] xl:left-[15.5px] 2xl:left-[19.5px] top-0 bottom-0 w-[1px] bg-[#d0c9c2] z-0">
                    <div className="absolute top-0 left-0 w-full bg-[#687970]" ref={verticalLineRef}></div>
                  </div>

                  {/* Timeline steps */}
                  <div className="flex flex-col space-y-6 sm:space-y-8 md:space-y-16 lg:space-y-18 xl:space-y-14 2xl:space-y-18 pt-12 sm:pt-16 xl:pt-8 2xl:pt-16">
                    {stepsData.map((step, index) => {
                      const circleRef = circleRefs[index];
                      return (
                        <div key={index} className="flex items-start">
                          {/* Left: Circle */}
                          <div
                            className="relative z-10 w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-8 xl:h-8 2xl:w-10 2xl:h-10 flex-shrink-0 
              rounded-full bg-[#f2ece3] border-2 border-[#687970] 
              flex items-center justify-center mt-0.5"
                            style={{ left: "-0.5px" }}
                          >
                            {/* Inner Circle */}
                            <div
                              className="w-3 h-3 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 xl:w-4 xl:h-4  2xl:w-5 2xl:h-5  rounded-full bg-[#687970]"
                              ref={circleRef}
                            ></div>
                          </div>

                          {/* Right: Title + Description */}
                          <div className="pl-4 sm:pl-6 md:pl-10 xl:pl-8 2xl:pl-10">
                            <h3
                              className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-lg 2xl:text-[28px] text-[#5e6e65] font-semibold mb-0.5 uppercase tracking-wide"
                              ref={textRevealRef}
                            >
                              {step.title}
                            </h3>
                            <p
                              className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg xl:text-sm 2xl:text-xl text-[#7a8a7f] font-light leading-relaxed"
                              ref={textRevealRef}
                            >
                              {step.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
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
      </section>
    </>
  )
}

"use client"

import Image from "next/image"
import RevealWrapper from "@/components/animation/RevealWrapper"
import useReveal from "@/hooks/useReveal"
import Counter from "@/components/animation/Counter"
import AnimatedLine from "../animation/AnimatedLine"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FragranceImpactSection() {
  const { revealRef: textRevealRef } = useReveal()
  const circleRef = useRef<HTMLDivElement>(null)
  const shadowRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    if (!circleRef.current || !shadowRef.current) return

    const circle = circleRef.current
    const shadow = shadowRef.current

    gsap.set(circle, { scale: 1, opacity: 1 })
    gsap.set(shadow, {
      opacity: 0.6,
      scale: 0.9,
      borderRadius: "50%",
      backgroundColor: "rgba(0, 100, 0, 0.9)", // darker green glow
      filter: "blur(40px)",
    })

    gsap.to(shadow, {
      scale: 1.2,
      opacity: 0.8,
      duration: 2.5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    })

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: circle,
        start: "top 80%",
        end: "center center",
        toggleActions: "play none none reverse",
      },
    })

    revealTl.fromTo(
      shadow,
      { opacity: 0, scale: 0.4 },
      { opacity: 0.6, scale: 0.9, duration: 1.2, ease: "power2.out" }
    )

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 xl:py-16 2xl:py-24 font-xyz">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-36 2xl:px-36">
        {/* Title */}
        <div className="text-left w-full max-w-3xl">
          <RevealWrapper delay={0.1}>
            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[38px] 2xl:text-[44px] text-[#425248] font-medium tracking-wide leading-fra mb-4 md:mb-6 lg:mb-8"
              ref={textRevealRef}
            >
              WHY IS FRAGRANCE IMPORTANT FOR A BUSINESS?
            </h2>
            <AnimatedLine
              className="mb-3.5 flex-grow h-[2px] w-[40%] bg-[#687970]/20"
              start="top 85%"
              end="bottom 15%"
              scrub={true}
              duration={1.5}
            />
          </RevealWrapper>
          <RevealWrapper delay={0.2}>
            <p
              className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[23px] text-[#7a8a7f] font-light w-full max-w-xl"
              ref={textRevealRef}
            >
              The sense of smell has the strongest link to memory and emotion.
            </p>
          </RevealWrapper>
        </div>
        <div className="relative w-full max-w-[1300px] mx-auto h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] 2xl:h-[1000px] xl:-mt-48 md:-mt-32 -mt-24">
          <div
            ref={shadowRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
  z-5 flex items-center justify-center rounded-full
  w-[100px] h-[100px] 
  md:w-[300px] md:h-[300px] 
  lg:w-[300px] lg:h-[300px] 
  xl:w-[400px] xl:h-[400px] 
  2xl:w-[500px] 2xl:h-[500px]"
            style={{
              background: "white", // andar nu circle pure white
              borderRadius: "50%",
              boxShadow: "0 0 60px rgba(0, 100, 0, 0.6)",// halka bahar shadow
              position: "relative",
            }}
          >
            {/* Gradient border effect */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                padding: "50px",
                background:
                  "radial-gradient(circle, white 60%, rgba(0, 100, 0, 0.7) 70%, rgba(0, 80, 0, 0.6) 80%, transparent 100%)",
                borderRadius: "50%",
                WebkitMask:
                  "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
                mask: "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
              }}


            />
          </div>



          <div
            ref={circleRef}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 
    w-[150px] h-[150px] 
    md:w-[300px] md:h-[300px] 
    lg:w-[400px] lg:h-[400px] 
    xl:w-[500px] xl:h-[500px] 
    2xl:w-[600px] 2xl:h-[600px] 
    flex items-center justify-center flex-shrink-0"
          >
            <Image
              src="/assests_circle-01_3_optimized.png"
              alt="Fragrance Impact"
              width={600}   // match with largest size (2xl:h-[600px])
              height={600}
              loading="lazy"
              className="w-full h-full object-contain rounded-full"
            />

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center">
              <p
                className="text-[#687970] 
      text-[8px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]
      font-semibold tracking-wide border-b border-[#687970] px-2 sm:px-3"
              >
                POWER OF FRAGRANCE
              </p>
            </div>
          </div>

          {/* Stat: Left */}
          <div className="absolute left-4 sm:left-0 md:left-10 lg:left-[5%] xl:left-[10%] 2xl:left-[10%] md:top-1/2 top-48 -translate-y-1/2 max-w-[70px] sm:max-w-[100px] md:max-w-[130px] lg:max-w-[160px] xl:max-w-[190px] 2xl:max-w-[220px] text-left">
            <h3 className="text-base md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#5e6e65] font-bold leading-tight">
              <Counter end={35} />%
            </h3>
            <p className="text-[7px] sm:text-[9px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[#5e6e65] font-medium pt-1 mt-1">
              35% of people remember what they smell
            </p>
            <Image
              src="/Home page Aromahpure Air-26.png"
              alt="Smell Memory"
              width={800}
              height={800}
              className="mt-1 w-full h-auto 
    max-w-[120px] 
    sm:max-w-[150px] 
    md:max-w-[190px] 
    lg:max-w-[240px] 
    xl:max-w-[300px] 
    2xl:max-w-[340px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              loading="lazy"
            />


          </div>
          {/* Stat: Top Right */}
          <div className="absolute right-10 sm:right-0 md:right-10 lg:right-[8%] xl:right-[15%] 2xl:right-[9%] top-[19%] sm:top-[8%] md:top-[20%] lg:top-[18%] xl:top-[15%] 2xl:top-[15%] max-w-[100px] sm:max-w-[100px] md:max-w-[130px] lg:max-w-[160px] xl:max-w-[190px] 2xl:max-w-[220px] text-right">
            <h3 className="text-base md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#5e6e65] font-bold leading-right">
              <Counter end={5} />%
            </h3>
            <p className="text-[7px] sm:text-[9px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[#687970] font-medium tracking-wide pt-1 mt-1 px-1 sm:px-2">
              5% of people remember what they see
            </p>
            <Image
              src="/Home page Aromahpure Air-25.png"
              alt="Visual Memory"
              width={800}
              height={800}
              className="mt-1 w-full h-auto 
              max-w-[70px] 
              sm:max-w-[100px] 
              md:max-w-[140px] 
              lg:max-w-[180px] 
              xl:max-w-[210px] 
              2xl:max-w-[240px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              loading="lazy"
            />
          </div>
          {/* Stat: Bottom Right */}
          <div className="absolute right-0 sm:right-0 md:right-10 lg:right-[8%] xl:right-[14%] 2xl:right-[9%] bottom-[40%] sm:bottom-[30%] md:bottom-[35%] lg:bottom-[35%] xl:bottom-[33%] 2xl:bottom-[30%] max-w-[100px] sm:max-w-[100px] md:max-w-[130px] lg:max-w-[160px] xl:max-w-[190px] 2xl:max-w-[220px] text-right">
            <h3 className="text-base md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-[#5e6e65] font-bold leading-tight">
              <Counter end={2} />%
            </h3>
            <p className="text-[7px] sm:text-[9px] md:text-[10px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] text-[#687970] font-medium tracking-wide pt-1 mt-1 px-1 sm:pl-8">
              2% of people remember what they hear
            </p>
            <Image
              src="/Home page Aromahpure Air-25.png"
              alt="Auditory Memory"
              width={800}
              height={800}
              className="mt-1 w-full h-auto
    max-w-[70px] 
    sm:max-w-[100px] 
    md:max-w-[140px] 
    lg:max-w-[180px] 
    xl:max-w-[210px] 
    2xl:max-w-[240px]"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

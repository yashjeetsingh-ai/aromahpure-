"use client"

import Image from "next/image"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import RevealWrapper from "@/components/animation/RevealWrapper"
import AnimatedLine from "../animation/AnimatedLine"
import useReveal from "@/hooks/useReveal"

gsap.registerPlugin(ScrollTrigger)

export default function FragranceBrandingSection() {
    const { revealRef } = useReveal();

    const outerRef = useRef<HTMLDivElement>(null)
    const middleRef = useRef<HTMLDivElement>(null)
    const inner1Ref = useRef<HTMLDivElement>(null)
    const inner2Ref = useRef<HTMLDivElement>(null)
    const inner3Ref = useRef<HTMLDivElement>(null)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (
            outerRef.current &&
            middleRef.current &&
            inner1Ref.current &&
            inner2Ref.current &&
            inner3Ref.current &&
            sectionRef.current
        ) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top end", // section top reaches 80% of viewport
                    end: "bottom 70%",
                    toggleActions: "play none none reverse",
                },
                defaults: { duration: 1, ease: "power2.out" },
            })

            tl.from(outerRef.current, { scale: 0, opacity: 0 })
                .from(middleRef.current, { scale: 0, opacity: 0 }, "-=0.5")
                .from(inner1Ref.current, { scale: 0, opacity: 0, rotation: -45 }, "-=0.5")
                .from(inner2Ref.current, { scale: 0, opacity: 0, rotation: 45 }, "-=0.5")
                .from(inner3Ref.current, { scale: 0, opacity: 0, rotation: -30 }, "-=0.5")
        }
    }, [])

    const brandingPoints = [
        {
            number: "01",
            title: "BRAND IDENTITY",
            description: "Craft a distinctive scent experience that embodies your brand's unique personality."
        },
        {
            number: "02",
            title: "REPEAT VISITS & DWELL TIME",
            description: "A familiar scent encourages customers to stay longer and return more often."
        },
        {
            number: "03",
            title: "EMOTIONAL CONNECTION",
            description: "Scents evoke feelings, making your brand more relatable and memorable."
        },
        {
            number: "04",
            title: "STRONG RECALL",
            description: "Fragrance ensures your brand is remembered, boosting loyalty and customer retention."
        },
        {
            number: "05",
            title: "CUSTOMER EXPERIENCE",
            description: "Pleasant aromas make spaces more welcoming, whether it’s a retail store, hotel, office, or showroom."
        }
    ]

    return (
        <section ref={sectionRef} className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36 -mb-[400px] overflow-hidden">
            <div className="text-center mb-14 sm:mb-16 md:mb-20 lg:mb-32 xl:mb-36 2xl:mb-40">

                <RevealWrapper delay={0.1}>
                    <h2
                        className="
                          font-normal uppercase
                          text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] 2xl:text-[52px]
                          leading-fra tracking-wide mb-4 inline-block px-4 md:px-0
                          text-[#6c7d74] sm:text-[#6c7d74] md:text-[#6c7d74] lg:text-[#4a5b53] xl:text-[#4a5b53] 2xl:text-[#4a5b53]
                        "
                        ref={revealRef}
                    >
                        WHY FRAGRANCE IS A
                        <br className="hidden sm:block" />
                        POWERFUL BRANDING TOOL?
                    </h2>

                </RevealWrapper>

                <RevealWrapper delay={0.2}>
                    <AnimatedLine
                        className="h-[1.2px] bg-[#4a5b53] w-[270px] md:w-[600px] lg:w-[800px] xl:w-[850px] 2xl:w-[900px] mx-auto mb-8 sm:mb-10 md:mb-12 lg:block hidden"
                        start="top 85%"
                        end="center center"
                        scrub={true}
                        duration={1.5}
                    />
                </RevealWrapper>

                <RevealWrapper delay={0.3}>
                    <p
                        className="
                                    text-[#76877f] font-extralight lg:font-normal
                                    text-base md:text-lg text-center md:text-center lg:text-[24px] xl:text-[26px] 2xl:text-[28px]
                                    leading-fra1
                                    mx-auto lg:mt-20 mt-10
                                    lg:max-w-6xl max-w-2xl px-4   
                                "
                        ref={revealRef}
                    >
                        The human sense of smell is deeply connected to memory and emotion, influencing how people feel, remember, and respond to a space. This makes fragrance a strategic tool for brands aiming to build meaningful and lasting connections.
                    </p>
                </RevealWrapper>
            </div>
            <div className="px-8 sm:px-6 md:px-0 lg:px-12 xl:px-16 lg:block hidden 2xl:container 2xl:mx-auto">
                <div className="relative font-xyz">
                    <RevealWrapper delay={0.4}>
                        <div className="relative w-[750px] h-[850px] md:w-[560px] md:h-[660px] lg:w-[620px] lg:h-[720px] xl:w-[900px] xl:h-[1000px]">
                            {/* Outer Circle */}
                            <div ref={outerRef} className="absolute inset-0">
                                <Image
                                    src="/Circles assest-05.png"
                                    alt="Outer Circle"
                                    width={900}
                                    height={1000}
                                    loading="lazy"
                                    className="object-contain w-full h-full"
                                />
                            </div>

                            {/* Middle Circle */}
                            <div ref={middleRef} className="absolute inset-0 flex justify-center items-center">
                                <div className="relative w-[90%] h-[90%] flex justify-center items-center bottom-5">
                                    <Image
                                        src="/Circles assest-04.png"
                                        alt="Middle Circle"
                                        width={810}
                                        height={900}
                                        loading="lazy"
                                        className="object-contain w-full h-full"
                                    />

                                    {/* Inner Circle 1 */}
                                    <div
                                        ref={inner1Ref}
                                        className="absolute inset-10 flex justify-center items-center xl:left-[120px] lg:left-[100px] left-[85px] bottom-0"
                                    >
                                        <div className="relative xl:w-[95%] xl:h-[95%] w-full h-full">
                                            <Image
                                                src="/Circles assest-03.png"
                                                alt="Inner Circle 1"
                                                width={700}
                                                height={700}
                                                loading="lazy"
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                    </div>

                                    {/* Inner Circle 2 */}
                                    <div
                                        ref={inner2Ref}
                                        className="absolute xl:top-12 top-10 xl:left-[138px] lg:left-24 left-20 flex justify-center items-center w-full h-full"
                                    >
                                        <div className="relative w-[80%] h-[80%]">
                                            <Image
                                                src="/Circles assest-02.png"
                                                alt="Inner Circle 2"
                                                width={600}
                                                height={600}
                                                loading="lazy"
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                    </div>

                                    {/* Inner Circle 3 */}
                                    <div
                                        ref={inner3Ref}
                                        className="absolute top-24 xl:top-32 xl:left-48 lg:left-32 left-28 flex justify-center items-center w-full h-full"
                                    >
                                        <div className="relative w-[80%] h-[80%]">
                                            <Image
                                                src="/Circles assest-01.png"
                                                alt="Inner Circle 3"
                                                width={600}
                                                height={600}
                                                loading="lazy"
                                                className="object-contain w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </RevealWrapper>

                    {/* 01 - Top Left */}
                    <div className="absolute top-[5%] left-[8%] sm:top-[6%] sm:left-[10%] md:left-[35%] md:-top-[17%] lg:left-[32%] lg:-top-[12%] xl:-top-[5%] 2xl:-top-[5%] xl:left-[32%] 2xl:left-[29%] xl:max-w-[180px] max-w-[220px]">
                        <h3 className="text-lg font-bold text-[#4a5b53]">01</h3>
                        <h4 className="text-sm font-bold text-[#4a5b53]">BRAND IDENTITY</h4>
                        <p className="text-xs text-[#4a5b53] mt-1">
                            Craft a distinctive scent experience that embodies your brand's unique personality.
                        </p>
                    </div>

                    {/* 02 - Top Right */}
                    <div className="absolute top-[5%] left-[8%] sm:top-[6%] sm:left-[10%] md:left-[52%] md:-top-[3%] lg:left-[48%] lg:top-[5px] xl:top-[0%] 2xl:top-[0%] xl:left-[47%] 2xl:left-[44%] xl:max-w-[180px] lg:max-w-[260px] max-w-[260px]">
                        <h3 className="text-lg font-bold text-[#4a5b53]">02</h3>
                        <h4 className="text-sm font-bold text-[#4a5b53]">REPEAT VISITS & DWELL TIME</h4>
                        <p className="text-xs text-[#4a5b53] mt-1">
                            A familiar scent encourages customers to stay longer and return more often.
                        </p>
                    </div>

                    {/* 03 - Middle Right */}
                    <div className="absolute top-[5%] left-[8%] sm:top-[6%] sm:left-[10%] md:left-[66%] md:top-[10%] lg:left-[60%] lg:top-[12%] xl:left-[62%] xl:top-[11%] 2xl:left-[57%] xl:max-w-[260px] lg:max-w-[220px] max-w-[240px]">
                        <h3 className="text-lg font-bold text-[#4a5b53]">03</h3>
                        <h4 className="text-sm font-bold text-[#4a5b53]">EMOTIONAL CONNECTION</h4>
                        <p className="text-xs text-[#4a5b53] mt-1">
                            Scents evoke feelings, making your brand more relatable and memorable.
                        </p>
                    </div>

                    {/* 04 - Bottom Right */}
                    <div className="absolute top-[5%] left-[8%] sm:top-[6%] sm:left-[10%] md:left-[75%] md:top-[27%] lg:left-[69%]  lg:top-[26%] xl:top-[26%] xl:left-[70%] 2xl:top-[25%] 2xl:left-[65%] max-w-[180px]">
                        <h3 className="text-lg font-bold text-[#4a5b53]">04</h3>
                        <h4 className="text-sm font-bold text-[#4a5b53]">STRONG RECALL</h4>
                        <p className="text-xs text-[#4a5b53] mt-1">
                            Fragrance ensures your brand is remembered, boosting loyalty and customer retention.
                        </p>
                    </div>

                    {/* 05 - Bottom Left */}
                    <div className="absolute top-[5%] left-[8%] sm:top-[6%] sm:left-[10%] md:left-[79%] md:top-[45%]  lg:left-[72%] lg:top-[45%] xl:left-[75%] xl:top-[45%] 2xl:left-[70%] max-w-[180px]">
                        <h3 className="text-lg font-bold text-[#4a5b53]">05</h3>
                        <h4 className="text-sm font-bold text-[#4a5b53]">CUSTOMER EXPERIENCE</h4>
                        <p className="text-xs text-[#4a5b53] mt-1">
                            Pleasant aromas make spaces more welcoming, whether it’s a retail store, hotel, office, or showroom.
                        </p>
                    </div>
                </div>
            </div>
            <div className="block lg:hidden px-4 sm:px-6 mb-20">
                <div className="space-y-6">
                    {brandingPoints.map((point, index) => (
                        <RevealWrapper key={point.number} delay={0.4 + index * 0.1}>
                            <div
                                className={`
                                      rounded-full md:rounded-full 
                                      p-4 sm:p-6 md:p-8 
                                      text-[#4a5b53] shadow-md
                                      ${index === 0 ? "bg-[#FCF8EA]" : ""}
                                      ${index === 1 ? "bg-[#F7EBBD]" : ""}
                                      ${index === 2 ? "bg-[#EFDF9D]" : ""}
                                      ${index === 3 ? "bg-[#E6CF77]" : ""}
                                     ${index === 4 ? "bg-[#D6AE5C]" : ""}
                                    `}
                            >
                                <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
                                    <span className="text-4xl md:text-6xl font-extrabold text-[#6b7c72]">
                                        {point.number}
                                    </span>

                                    <div className="flex-1">
                                        <h4 className="text-sm sm:text-base md:text-lg font-bold text-[#5e6e65] mb-1">
                                            {point.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm md:text-base text-[#4a5b53]/70 font-light leading-relaxed">
                                            {point.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </RevealWrapper>
                    ))}
                </div>
            </div>


        </section>
    )
}

"use client"

import Image from "next/image"
import RevealWrapper from "@/components/animation/RevealWrapper"
import useReveal from "@/hooks/useReveal"
import useCircleScaleAnimation from "@/hooks/useCircleScaleAnimation"
import useVerticalLineGrowAnimation from "@/hooks/useVerticalLineGrowAnimation"
import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import AnimatedLine from "../animation/AnimatedLine"
import CenterOutwardLine from "../animation/CenterOutwardLine"
import BookDemoModal from "../common/BookDemoModal"
import ThankYouModal from "../common/ThankYouModal"
import { useRouter } from "next/navigation"

const stepsData = [
    {
        number: "01",
        title: "Send Us A Reference",
        description: "Share what you want your space to smell like—it could be a perfume, a brand, or a mood.",
    },
    {
        number: "02",
        title: "We Analyse & Formulate",
        description: "Our team breaks down the scent structure and begins working on close matches.",
    },
    {
        number: "03",
        title: "You Receive 3 Samples",
        description: "We provide three olfactive variations based on the sample received.",
    },
    {
        number: "04",
        title: "You Select Your Scent",
        description: "Choose the one that fits, then we recreate it at scale with a diffuser-friendly formulation.",
    },
    {
        number: "05",
        title: "We Deliver It To You",
        description: "Your signature fragrance is ready to scent your space beautifully and consistently.",
    },
]

export default function FragranceProcessSection() {
    const stepsContainerRef = useRef<HTMLDivElement>(null)
    const { revealRef: textRevealRef } = useReveal()
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

    // Vertical line animation
    const verticalLineRef = useVerticalLineGrowAnimation({
        triggerElement: stepsContainerRef.current,
        start: "top 90%",
        end: "bottom center",
        scrub: true,
    })

    // Circles animation
    const circleRefs = stepsData.map((_, index) =>
        useCircleScaleAnimation({ delay: 0.2 + index * 0.1 + 0.1 })
    )

    return (
        <>
            {/* Top border line */}
            <div className="flex justify-center">
                <CenterOutwardLine
                    className="w-full h-[2px] bg-[#687970] opacity-60"
                    duration={1.2}
                    delay={0.3}
                />
            </div>


            <section className="bg-[#F6F1EB] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 font-xyz overflow-hidden">
                <div>

                    <div className="block lg:hidden w-full gap-16 mb-28">
                        {/* Full-width image */}
                        <div className="flex justify-end">
                            <div className="relative h-[280px] sm:h-[380px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
                                <Image
                                    src="/Fragrance Collection-22.png"
                                    alt="Full width display"
                                    width={1920}
                                    height={1080}
                                    className="object-cover w-full h-full"
                                    loading="lazy"
                                />
                            </div>

                        </div>
                    </div>



                    {/* Section header */}
                    <div className="container mx-auto px-8 md:px-20 lg:px-4 xl:px-16 2xl:px-0 w-full mb-14 md:mb-20 lg:mb-28">
                        <RevealWrapper delay={0.1}>
                            <h2
                                className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[45px] 2xl:text-[60px] text-[#5e6e65] font-abc font-normal whitespace-nowrap"
                                ref={textRevealRef}
                            >
                                Custome
                            </h2>
                        </RevealWrapper>
                        <div className="flex items-end mt-1">
                            <RevealWrapper delay={0.1}>
                                <h3
                                    className="xl:mt-4 text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-[45px] 2xl:text-[60px] text-[#5e6e65] font-abc font-normal whitespace-nowrap"
                                    ref={textRevealRef}
                                >
                                    Fragrance Creation
                                </h3>
                            </RevealWrapper>
                            <AnimatedLine
                                className="h-[2px] bg-[#5e6e65] ml-2 2xl:-mb-1.5 w-[20rem]"
                                start="top 85%"
                                end="center center"
                                scrub={true}
                                duration={1.5}
                            />
                        </div>
                        <RevealWrapper delay={0.3}>
                            <p
                                className="xl:mt-16 mt-8 text-lg sm:text-xl lg:text-[28px] xl:text-[24px] 2xl:text-3xl text-[#7a8a7f] font-xyz font-normal max-w-7xl leading-fra11"
                                ref={textRevealRef}
                            >
                                We offer a custom scent development service to recreate or design a fragrance
                                that aligns with your space, brand, or personal style. The process takes around
                                two weeks, ensuring precision and care throughout.
                            </p>
                        </RevealWrapper>
                    </div>

                    {/* Main content */}
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                        {/* Left Column */}
                        <div className="w-full lg:w-[50%] pl-6 sm:pl-14 md:pl-24 lg:pl-28 xl:pl-36 2xl:pl-48" ref={stepsContainerRef}>
                            <div className="relative flex">
                                {/* Vertical line */}
                                <div className="absolute md:left-[15px] left-[11px] top-0 bottom-0 w-[1px] bg-[#d0c9c2]">
                                    <div
                                        className="absolute top-0 left-0 w-full bg-[#687970]"
                                        ref={verticalLineRef}
                                    ></div>
                                </div>

                                {/* Steps */}
                                <div className="flex flex-col 2xl:space-y-4 xl:space-y-0 space-y-4 pt-4">
                                    {stepsData.map((step, index) => {
                                        const circleRef = circleRefs[index]
                                        return (
                                            <div key={index} className="flex items-start">
                                                {/* Circle */}
                                                <div
                                                    className="relative z-10 w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] rounded-full bg-[#f2ece3] border-2 border-[#687970] flex items-center justify-center mt-10 shrink-0"
                                                >
                                                    <div
                                                        className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px] rounded-full bg-[#687970]"
                                                        ref={circleRef}
                                                    ></div>
                                                </div>

                                                {/* Text */}
                                                <div className="pl-6 sm:pl-14 mt-[29px] space-y-2">
                                                    <div className="flex items-end mt-1">
                                                        <h1
                                                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl text-[#5e6e65] font-semibold"
                                                            ref={textRevealRef}
                                                        >
                                                            {step.number}
                                                        </h1>
                                                        <AnimatedLine
                                                            className="h-[1px] bg-[#5e6e65] ml-2 mb-1.5 w-[15rem]"
                                                            start="top 85%"
                                                            end="center center"
                                                            scrub={true}
                                                            duration={1.5}
                                                        />
                                                    </div>
                                                    <h3
                                                        className="text-lg sm:text-xl md:text-2xl xl:text-xl 2xl:text-2xl text-[#5e6e65] font-medium font-abc"
                                                        ref={textRevealRef}
                                                    >
                                                        {step.title}
                                                    </h3>
                                                    <p
                                                        className="mt-1 text-base sm:text-lg md:text-xl xl:text-lg 2xl:text-xl text-[#5e6e65] lg:max-w-md max-w-60"
                                                        ref={textRevealRef}
                                                    >
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-[50%] lg:flex hidden flex-col gap-16 mt-28">
                            {/* Small image */}
                            <div className="flex justify-end">
                                <div className="relative w-[260px] h-[160px] sm:w-[320px] sm:h-[200px] md:w-[390px] md:h-[240px] lg:w-[470px] lg:h-[280px] xl:w-[550px] xl:h-[340px] 2xl:w-[620px] 2xl:h-[400px] overflow-hidden">
                                    <Image
                                        src="/Fragrance Collection-21.png"
                                        alt="Small display"
                                        width={620}
                                        height={400}
                                        loading="lazy"
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                            </div>

                            {/* Full-width image */}
                            <div className="flex justify-end">

                                <div className="relative h-[260px] sm:h-[310px] md:h-[360px] lg:h-[410px] w-[90%] sm:w-[85%] md:w-[80%] overflow-hidden">
                                    <Image
                                        src="/Fragrance Collection-22.png"
                                        alt="Full width display"
                                        width={1200}   
                                        height={410}   
                                        loading="lazy"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* CTA Button */}
                    <RevealWrapper delay={0.2}>
                        <div className="flex justify-center mt-16 lg:mt-20">
                            <Button onClick={() => handleClick("/book-demo")} className="bg-[#687970] hover:bg-[#5e6e65] text-white text-sm sm:text-base font-light px-8 lg:px-16 py-4 lg:py-8 rounded-full shadow-lg transition-all duration-300">
                                Book a Free Consultation
                            </Button>
                        </div>
                    </RevealWrapper>
                </div>

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

            {/* Bottom border line */}
            {/* <div className="w-full h-[2px] bg-[#687970] opacity-60" /> */}
            <div className="lg:flex hidden justify-center">
                <CenterOutwardLine
                    className="w-full h-[2px] bg-[#687970] opacity-60"
                    duration={1.2}
                    delay={0.3}
                />
            </div>


            <div className="lg:block hidden h-[80px] bg-[#F6F1EB]"></div>
        </>
    )
}

'use client'

import Image from 'next/image'
import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import AnimatedLine from '@/components/animation/AnimatedLine'
import useVerticalLineGrowAnimation from '@/hooks/useVerticalLineGrowAnimation'
import { useRef } from 'react'

export default function QualitySafetySection() {
    const { revealRef } = useReveal()
    const sectionRef = useRef<HTMLElement>(null) 

    const certifications = [
        {
            icon: '/Fragrance Collection-14.png',
            text: 'IFRA COMPLIANT FRAGRANCES',
        },
        {
            icon: '/Fragrance Collection-15.png',
            text: 'GMO-FREE',
        },
        {
            icon: '/Fragrance Collection-16.png',
            text: 'HALAL',
        },
        {
            icon: '/Fragrance Collection-17.png',
            text: 'KOSHER',
        },
        {
            icon: '/Fragrance Collection-18.png',
            text: 'MSDS',
        },
    ]

    // Create refs for each vertical line
    certifications.forEach((_, index) => {
        useVerticalLineGrowAnimation({
            triggerElement: sectionRef.current,
            start: `top ${80 - index * 5}%`,
            end: `top ${50 - index * 5}%`,
            scrub: true,
        });
    });


    return (
        <section ref={sectionRef} className="py-20 sm:py-24 md:py-28 lg:py-32 xl:py-36 2xl:py-40 font-xyz">
            <div className="container mx-auto px-6 sm:px-10 lg:px-16">
                <div className="flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-20 xl:gap-24">
                    {/* Left Column: Title and Description */}
                    <div className="w-full lg:w-1/2">

                        <RevealWrapper delay={0.2}>
                            <AnimatedLine
                                className="block lg:hidden h-[1.2px] bg-[#4a5b53] w-full  mb-14"
                                start="top 85%"
                                end="center center"
                                scrub={true}
                                duration={1.5}
                            />
                        </RevealWrapper>

                        <RevealWrapper delay={0.1}>
                            <h2
                                className="lg:max-w-lg md:max-w-md max-w-xs text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[42px] 2xl:text-[50px] text-[#5e6e65] font-medium tracking-wide leading-qua mb-4 lg:text-left text-center mx-auto lg:mx-0"
                                ref={revealRef}
                            >
                                OUR COMMITMENT TO QUALITY & SAFETY
                            </h2>
                        </RevealWrapper>

                        <RevealWrapper delay={0.2}>
                            <AnimatedLine
                                className="lg:block hidden h-[1.5px] bg-[#4a5b53] w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300px] xl:max-w-[350px] 2xl:max-w-[400px] mb-20"
                                start="top 85%"
                                end="center center"
                                scrub={true}
                                duration={1.5}
                            />
                        </RevealWrapper>
                        <RevealWrapper delay={0.3}>
                            <p
                                className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[25px] 2xl:text-[30px] text-[#7a8a7f] font-light leading-qua1 tracking-wider max-w-full lg:max-w-[650px] lg:text-left text-center lg:mt-0 mt-10"
                                ref={revealRef}
                            >
                                At Aromahpure Air, we are committed
                                to delivering products that embody
                                quality, safety, and sustainability. Every
                                fragrance and diffuser we create is
                                designed and manufactured under
                                strict adherence to internationally
                                recognized standards and
                                certifications. These rigorous
                                standards ensure that our products
                                not only perform reliably but also
                                meet high environmental and safety
                                benchmarks.
                            </p>
                        </RevealWrapper>
                    </div>

                    {/* Right Column: Certifications List */}
                    <div className="w-full lg:w-1/2 lg:flex hidden flex-col items-start lg:items-end">
                        <div className="w-full max-w-full lg:max-w-none space-y-8 sm:space-y-10 md:space-y-12">
                            {certifications.map((cert, index) => (
                                <RevealWrapper key={index} delay={0.4 + index * 0.1}>
                                    <div className="flex items-center gap-4">
                                        {/* Icon */}
                                        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center">
                                            <Image
                                                src={cert.icon || '/placeholder.svg'}
                                                alt={cert.text}
                                                width={96}
                                                height={96}
                                                className="object-contain"
                                                loading='lazy'
                                            />
                                        </div>

                                        {/* Vertical Line — Now properly responsive and aligned */}
                                        <div className="ml-14 w-[2px] h-16 sm:h-20 md:h-24 bg-[#a9b9ad]" />

                                        {/* Text */}
                                        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-[#7a8a7f] font-medium tracking-wide">
                                            {cert.text}
                                        </p>
                                    </div>
                                </RevealWrapper>
                            ))}
                        </div>
                    </div>



                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end mt-20">
                    <div className="w-full max-w-full lg:max-w-none lg:hidden block">
                        {/* Mobile: Single column */}
                        <div className="sm:hidden flex flex-col items-center gap-8">
                            {certifications.map((cert, index) => (
                                <RevealWrapper key={index} delay={0.4 + index * 0.1}>
                                    <div className="flex flex-col items-center text-center gap-4">
                                        <div className="w-24 h-24 flex items-center justify-center">
                                            <Image
                                                src={cert.icon || "/placeholder.svg"}
                                                alt={cert.text}
                                                width={128}
                                                height={128}
                                                className="object-contain"
                                                loading='lazy'
                                            />
                                        </div>
                                        <p className="text-base text-[#7a8a7f] font-medium tracking-wide mt-4">{cert.text}</p>
                                    </div>
                                </RevealWrapper>
                            ))}
                        </div>

                        {/* Small screens: 2 columns */}
                        <div className="hidden sm:block md:hidden">
                            <div className="grid grid-cols-2 gap-8 sm:gap-10 justify-items-center">
                                {certifications.map((cert, index) => (
                                    <RevealWrapper key={index} delay={0.4 + index * 0.1}>
                                        <div className="flex flex-col items-center text-center gap-4">
                                            <div className="w-28 h-28 flex items-center justify-center">
                                                <Image
                                                    src={cert.icon || "/placeholder.svg"}
                                                    alt={cert.text}
                                                    width={128}
                                                    height={128}
                                                    className="object-contain"
                                                    loading='lazy'
                                                />
                                            </div>
                                            <p className="text-lg text-[#7a8a7f] font-medium tracking-wide mt-4">{cert.text}</p>
                                        </div>
                                    </RevealWrapper>
                                ))}
                            </div>
                        </div>

                        {/* Medium screens: Flexbox layout with centered bottom 2 items */}
                        <div className="hidden md:block">
                            <div className="flex flex-col gap-12">
                                {/* First row: 3 items */}
                                <div className="flex justify-center gap-12">
                                    {certifications.slice(0, 3).map((cert, index) => (
                                        <RevealWrapper key={index} delay={0.4 + index * 0.1}>
                                            <div className="flex flex-col items-center text-center gap-4">
                                                <div className="w-28 h-28 flex items-center justify-center">
                                                    <Image
                                                        src={cert.icon || "/placeholder.svg"}
                                                        alt={cert.text}
                                                        width={128}
                                                        height={128}
                                                        className="object-contain"
                                                        loading='lazy'
                                                    />
                                                </div>
                                                <p className="text-lg text-[#7a8a7f] font-medium tracking-wide mt-4 max-w-44">{cert.text}</p>
                                            </div>
                                        </RevealWrapper>
                                    ))}
                                </div>

                                {/* Second row: 2 items centered */}
                                <div className="flex justify-center gap-12">
                                    {certifications.slice(3, 5).map((cert, index) => (
                                        <RevealWrapper key={index + 3} delay={0.4 + (index + 3) * 0.1}>
                                            <div className="flex flex-col items-center text-center gap-4">
                                                <div className="w-28 h-28 flex items-center justify-center">
                                                    <Image
                                                        src={cert.icon || "/placeholder.svg"}
                                                        alt={cert.text}
                                                        width={128}
                                                        height={128}
                                                        className="object-contain"
                                                        loading='lazy'
                                                    />
                                                </div>
                                                <p className="text-lg text-[#7a8a7f] font-medium tracking-wide mt-4">{cert.text}</p>
                                            </div>
                                        </RevealWrapper>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}

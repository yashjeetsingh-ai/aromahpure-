'use client'

import Image from 'next/image'
import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import AnimatedLine from '@/components/animation/AnimatedLine'

export default function TheCreatorsSection() {
    const { revealRef } = useReveal()

    const creators = [
        {
            name: 'MR. AKSHIT MITTAL',
            title: 'DIRECTOR, CO-FOUNDER',
            description:
                'Oversees the brand’s journey from concept to execution, guiding the creative vision, marketing strategy, and customer experience to ensure every touchpoint reflects the essence of Aromahpure Air.',
            image: '/About Us-19.png',
        },
        {
            name: 'DR. ANIRUDH BANSAL',
            title: 'DIRECTOR, CO-FOUNDER',
            description:
                'Leads sourcing, production, and operational strategy, bringing precision and structure to every process, ensuring each product meets the brand’s promise of quality and consistency.',
            image: '/About Us-20.png',
        },
    ]

    return (
        <>

            {/* Top Bar */}
            <div className="container mx-auto  mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28 px-6 sm:px-10 lg:px-16">
                <AnimatedLine
                    className="h-[1.4px] bg-[#4a5b53] w-full block lg:hidden mb-10"
                    start="top 85%"
                    end="center center"
                    scrub={true}
                    duration={1.5}
                />
                <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-[44px] 2xl:text-[56px] text-[#7f9088] font-medium tracking-wide mb-4 lg:text-left text-center"
                >
                    THE CREATORS
                </h2>
                <AnimatedLine
                    className="h-[1.4px] bg-[#4a5b53] w-full lg:block hidden"
                    start="top 85%"
                    end="center center"
                    scrub={true}
                    duration={1.5}
                />

            </div>

            {/* Section: THE CREATORS */}
            <section
                className="font-xyz"
                style={{
                    backgroundImage: "url('/About Us-08.png')",
                    backgroundRepeat: 'repeat',
                }}
            >
                <div className="min-h-[700px] sm:min-h-[800px] md:min-h-[900px] xl:min-h-[800px] 2xl:min-h-[900px] lg:mb-0 mb-20">
                    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                        {/* Title and Line */}


                        {/* Creator Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-0 md:gap-x-16 xl:gap-x-24">
                            {creators.map((creator, index) => (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <RevealWrapper delay={0.3 + index * 0.1}>
                                        <div className="relative w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] md:w-[310px] md:h-[310px] lg:w-[330px] lg:h-[330px] xl:w-[350px] xl:h-[350px] 2xl:w-[370px] 2xl:h-[370px] rounded-lg overflow-hidden shadow-lg bg-[#B1B8B3]">
                                            <Image
                                                src={creator.image || '/placeholder.svg'}
                                                alt={creator.name}
                                                width={370}
                                                height={370}
                                                loading="lazy"
                                                className="object-cover object-center w-full h-full"
                                            />
                                        </div>

                                    </RevealWrapper>
                                    <RevealWrapper delay={0.1}>
                                        <h3
                                            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[24px] 2xl:text-[28px] text-[#5e6e65] font-semibold mt-16 tracking-wide"
                                            ref={revealRef}
                                        >
                                            {creator.name}
                                        </h3>
                                    </RevealWrapper>
                                    <RevealWrapper delay={0.2}>
                                        <p
                                            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[18px] 2xl:text-[20px] text-[#7a8a7f] font-medium lg:mt-10 mt-5"
                                            ref={revealRef}
                                        >
                                            {creator.title}
                                        </p>
                                    </RevealWrapper>
                                    <RevealWrapper delay={0.2}>
                                        <p
                                            className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-[20px] text-[#7a8a7f] font-medium leading-relaxed lg:max-w-sm max-w-lg mx-auto mt-5"
                                            ref={revealRef}
                                        >
                                            {creator.description}
                                        </p>
                                    </RevealWrapper>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Box section */}
            <section
                className="font-xyz mt-20 md:mt-0"
            >
                <div className="container mx-auto px-4">
                    <div className="bg-gradient-to-b from-[#F2EDE7] to-[#FEFEFD] lg:bg-none lg:bg-[#66756C]  text-[#66756C] lg:text-white rounded-2xl px-6 sm:px-10 md:px-16 py-14 sm:py-16 md:py-20 text-center">

                        <RevealWrapper delay={0.1}>
                            <Image
                                src="/puzzle.png"
                                alt="Philosophy Icon"
                                width={120}
                                height={120}
                                className="mx-auto md:mb-14 lg:block hidden"
                            />
                        </RevealWrapper>
                        <RevealWrapper delay={0.1}>
                            <Image
                                src="/puzzle1.png"
                                alt="Philosophy Icon"
                                width={100}   
                                height={100}  
                                className="mx-auto mb-8 block lg:hidden"
                            />
                        </RevealWrapper>



                        {/* Title */}
                        <RevealWrapper delay={0.2}>
                            <h2
                                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] 2xl:text-[52px] font-medium tracking-wide mb-12 sm:mb-14 md:mb-20"
                                ref={revealRef}
                            >
                                OUR PHILOSOPHY
                            </h2>
                        </RevealWrapper>


                        {/* Paragraph 1 */}
                        <RevealWrapper delay={0.3}>
                            <p
                                className="max-w-5xl mx-auto md:text-center text-justify text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] 2xl:text-[25px] font-light lg:font-extralight leading-creators mb-8 sm:mb-10 md:mb-14 "
                                ref={revealRef}
                            >
                                We believe exceptional scenting should feel effortless and naturally integrate into your space.
                                Our approach begins the moment you reach out, whether through a brief form or a
                                conversation. From that point forward, we take complete ownership of the process. We take
                                the time to understand your environment, brand identity, and the atmosphere you want to
                                create.
                            </p>
                        </RevealWrapper>



                        {/* Paragraph 2 */}
                        <RevealWrapper delay={0.4}>
                            <p
                                className="max-w-5xl mx-auto md:text-center text-justify text-sm sm:text-base md:text-lg lg:text-xl xl:text-[20px] 2xl:text-[25px] font-light lg:font-extralight leading-creators"
                                ref={revealRef}
                            >
                                With these insights, we recommend the most suitable diffuser and present a curated
                                fragrance selection tailored to your needs. Once approved, our technicians manage the full
                                installation, whether through standalone units or HVAC integration, with precision and care.
                                After setup, we continue to monitor and maintain the system to ensure your space remains
                                consistently and beautifully fragranced.
                            </p>
                        </RevealWrapper>
                    </div>
                </div>
            </section>
        </>
    )
}

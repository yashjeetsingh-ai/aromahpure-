"use client";
import Image from "next/image";
import RevealWrapper from "@/components/animation/RevealWrapper";
import useReveal from "@/hooks/useReveal";
import AnimatedLine from "../animation/AnimatedLine";

export default function FragranceIdentitySection() {
    const { revealRef } = useReveal();

    return (
        <div className="font-xyz overflow-hidden bg-[#EEE8DF] lg:bg-white">
            <main>
                <section className="">
                    <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-12">
                        {/* Left Column */}
                        <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start">
                            <RevealWrapper delay={0.3}>
                                <h2
                                    className="container mx-auto
                                             text-[#6b7d73] font-medium uppercase
                                               text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl
                                               tracking-wide xl:px-0 px-4 max-w-[80%]
                                               lg:max-w-[50%] leading-fragrance1
                                               lg:text-left text-center mt-12 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-20 2xl:mt-24
                                           "
                                    ref={revealRef}
                                >
                                    FIND YOUR FRAGRANCE IDENTITY
                                </h2>
                            </RevealWrapper>

                            <RevealWrapper delay={0.4}>
                                <div className="flex flex-col justify-center items-center font-abc mt-12 sm:mt-16 md:mt-20 lg:mt-28 xl:mt-30 2xl:mt-36 xl:px-0 px-4">
                                    {/* Top lines */}
                                    <div className="lg:flex items-start justify-center w-full max-w-full lg:max-w-[50%] hidden space-x-8">
                                        <AnimatedLine className="h-[2px] flex-1 bg-[#7a8a80]" duration={3.0} />
                                        <AnimatedLine className="h-[2px] w-8 sm:w-10 bg-[#7a8a80]" duration={6.0} />
                                    </div>
                                    <p
                                        className="lg:text-left text-center text-base md:text-xl lg:text-2xl xl:text-[28px] 2xl:text-[40px] 
                                                 text-[#4a5a51] font-medium leading-fragrance max-w-[80%] lg:max-w-[50%]  lg:py-8 xl:py-10 tracking-wider"
                                        ref={revealRef}
                                    >
                                        We offer a diverse
                                        catalogue of
                                        fragrances across
                                        all the families
                                        listed below, with
                                        each profile
                                        featuring carefully
                                        curated options
                                        tailored to different
                                        moods and
                                        environments.
                                    </p>

                                    {/* Bottom lines */}
                                    <div className="lg:flex items-start justify-center w-full max-w-full lg:max-w-[50%] hidden space-x-8">
                                        <AnimatedLine className="h-[2px] flex-1 bg-[#7a8a80]" duration={3.0} />
                                        <AnimatedLine className="h-[2px] w-8 sm:w-10 bg-[#7a8a80]" duration={6.0} />
                                    </div>
                                </div>
                            </RevealWrapper>
                        </div>

                        {/* Right Column */}
                        <div className="w-full lg:w-[50%] flex flex-col  lg:mt-0">


                            {/* Image */}
                            <div className="mt-8 sm:mt-10 lg:mt-24 flex justify-end">
                                <div className="relative w-full max-w-[920px] h-[800px] overflow-hidden mx-16 lg:mx-0">
                                    <Image
                                        src="/Fragrance Collection-01.png"
                                        alt="Person interacting with diffuser"
                                        width={920}   
                                        height={800}  
                                        loading="lazy"
                                        className="object-cover object-center"
                                    />
                                </div>
                            </div>

                            {/* Paragraph 3 */}
                            <RevealWrapper delay={0.3}>
                                <p
                                    className="mt-10 sm:mt-14 lg:mt-16 text-base sm:text-lg md:text-xl lg:text-[22px] xl:text-[24px] 2xl:text-[27px] 
                                            text-[#5e6e65] font-light font-xyz leading-our 
                                              lg:max-w-[620px] max-w-[620px] md:ml-40 ml-20 text-left lg:ml-0 px-4 xl:px-0 mb-20 lg:mb-0"
                                    ref={revealRef}
                                >
                                    <span className="italic font-medium">Get in touch</span> to explore the full range
                                    and select what resonates best with
                                    your space and sensibility.
                                </p>
                            </RevealWrapper>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}

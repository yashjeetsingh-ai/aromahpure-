'use client'

import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '@/components/animation/RevealWrapper'
import useReveal from '@/hooks/useReveal'
import { ArrowRight } from 'lucide-react' // For the "KNOW MORE" arrow

export default function CraftAtmosphere() {
    const { revealRef: textRevealRef } = useReveal()

    const fragranceItems = [{ src: '/Untitled-10-01_optimized.png', alt: 'Woody Fragrance', label: 'WOODY' }, { src: '/Untitled-10-02_optimized.png', alt: 'Floral Fragrance', label: 'FLORAL' }, { src: '/Untitled-10-03_optimized.png', alt: 'Fresh Fragrance', label: 'FRESH' }, { src: '/Untitled-10-04_optimized.png', alt: 'Citrus Fragrance', label: 'CITRUS' },]

    return (
        <section className="pb-16 sm:pb-20 md:pb-24 lg:pb-28 xl:pb-32 font-xyz -mt-40">
            <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                {/* Top Section: Title and Subtitle */}
                <div className="text-center mb-5 md:mb-10 lg:mb-24">
                    <RevealWrapper >
                        <h2
                            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] 2xl:text-[54px] text-[#3c4a42] font-medium tracking-wide leading-tight mb-4 container mx-auto text-center"
                            ref={textRevealRef}
                        >
                            CRAFT THE ATMOSPHERE YOU WANT
                        </h2>


                    </RevealWrapper>
                    <RevealWrapper >
                        <p
                            className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[26px] text-[#7a8a7f] font-light max-w-[58rem] mx-auto md:mt-12 mt-8"
                            ref={textRevealRef} // Apply scrubbing animation
                        >
                            From warm woods to soft florals, find the mood that perfectly matches your space.
                        </p>
                    </RevealWrapper>
                </div>

                {/* Central Strip and Feature Images */}
                <div
                    className="lg:block hidden relative w-full max-w-[90%] mx-auto h-[200px] sm:h-[250px] md:h-[300px] lg:h-[360px] xl:h-[220px] 2xl:h-[380px] mb-7 md:mb-10 lg:mb-24 bg-no-repeat bg-center bg-contain"
                    style={{ backgroundImage: "url('/Home page Aromahpure Air-28.png')" }}
                >
                    {/* Fragrance images over the strip */}
                    <div className="absolute inset-0 flex items-center justify-evenly">
                        {fragranceItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative 
        w-[140px] h-[104px] 
        sm:w-[190px] sm:h-[141px] 
        md:w-[240px] md:h-[178px] 
        lg:w-[290px] lg:h-[216px] 
        xl:w-[340px] xl:h-[253px] 
        2xl:w-[400px] 2xl:h-[297px]
        group overflow-hidden flex items-center justify-center"
                            >
                                {/* Image */}
                                <Image
                                    src={item.src || "/placeholder.svg"}
                                    alt={item.alt}
                                    width={400}   // largest width
                                    height={297}  // largest height
                                    className="w-full h-full object-contain z-10 
      transition-transform duration-500 ease-in-out 
      group-hover:scale-110"
                                    loading="lazy"
                                />

                                {/* Text - stays fixed */}
                                <span
                                    className="absolute z-20 text-white font-bold 
        text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
                                >
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="w-full mx-auto mb-7 md:mb-10 lg:mb-24 my-5">
                    {/* Mobile + md */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:gap-0 gap-0 lg:hidden sm:p-12 p-0">
                        {fragranceItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative aspect-square flex items-center justify-center"
                            >
                                {/* Larger background box */}
                                <div className="absolute bg-[#a0a49f] rounded-2xl w-32 sm:w-44 md:w-44 h-32 sm:h-44 md:h-44 shadow-lg"></div>

                                {/* Image stays full size */}

                                <Image
                                    src={item.src || "/placeholder.svg"}
                                    alt={item.alt}
                                    width={400}
                                    height={400}
                                    className="object-contain z-10 transition-transform duration-500 ease-in-out sm:scale-100 scale-125 sm:hover:scale-125 hover:scale-[1.4]"
                                    loading="lazy"
                                />

                                {/* Label */}
                                <span className="absolute z-20 text-white font-bold text-lg sm:text-xl md:text-2xl">
                                    {item.label}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>







                {/* KNOW MORE link */}
                <div className="flex lg:justify-end justify-center items-center container mx-auto ">
                    <RevealWrapper delay={0.1}>
                        <Link
                            href="/fragrance-collection"
                            className="inline-flex items-center text-black text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-wider hover:underline group"
                        >
                            KNOW MORE
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="ml-4 h-5 w-[38px] transition-transform duration-300 group-hover:translate-x-1 text-inherit"
                                fill="none"
                                viewBox="0 0 38 20"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M0 10h34m0 0l-4-4m4 4l-4 4"
                                />
                            </svg>
                        </Link>
                    </RevealWrapper>
                </div>
            </div>
        </section>
    )
}

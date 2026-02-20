"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FragranceCollectionSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const subTextRef = useRef<HTMLParagraphElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            });

            // Heading & subheading together
            tl.fromTo(
                [textRef.current, subTextRef.current],
                { opacity: 0, y: 60 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    stagger: 0,
                }
            )
                // Underline slightly after heading starts
                .fromTo(
                    lineRef.current,
                    { scaleX: 0, opacity: 0 },
                    {
                        scaleX: 1,
                        opacity: 1,
                        duration: 1,
                        ease: "power2.out",
                        transformOrigin: "left",
                    },
                    "-=0.8" // overlaps with heading animation
                );
        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <section
            ref={sectionRef}
            className="
        relative flex items-end justify-end overflow-hidden font-abc
        h-[calc(100vh-488px)] lg:h-[calc(100vh-118px)]
        bg-[url('/Fragrance-Assests-01.png')] bg-cover bg-center bg-no-repeat
      "
        >

            {/* Overlay */}
            <div className="absolute inset-0"></div>

            {/* Content */}
            <div
                className="
                relative z-10 text-left w-full xl:max-w-5xl lg:max-w-3xl max-w-2xl
                px-4 sm:px-8 md:px-12 lg:px-16
                pb-10
               "
            >
                {/* Heading group */}
                <div className="relative inline-block">
                    <h1
                        ref={textRef}
                        className="
                            relative z-10
                            text-white font-light leading-fragrance1 tracking-wider
                            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-[61px]
                            max-w-[90%] sm:max-w-[80%] md:max-w-[75%]
                        "
                    >
                        Step Into the World of Fine Fragrance
                    </h1>
                </div>

                {/* Subheading */}
                <p
                    ref={subTextRef}
                    className="
                        mt-4 sm:mt-6 md:mt-8
                        text-white font-light tracking-wide
                        text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[26px] 2xl:text-[32px]
                        max-w-[90%] sm:max-w-[80%] md:max-w-[75%]
                        leading-fragrance font-xyz
                    "
                >
                    A curated fragrance journey crafted for lasting impressions
                </p>
            </div>
        </section>
    );
}

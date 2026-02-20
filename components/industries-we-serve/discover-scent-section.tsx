"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function DiscoverScentSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!sectionRef.current || !textRef.current || !lineRef.current) return;

        const ctx = gsap.context(() => {
            // Animate text
            gsap.fromTo(
                textRef.current,
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Animate underline
            gsap.fromTo(
                lineRef.current,
                { scaleX: 0, opacity: 0 },
                {
                    scaleX: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power2.out",
                    transformOrigin: "left",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative flex items-end justify-end overflow-hidden font-abc
            h-[calc(100vh-488px)] lg:h-[calc(100vh-118px)]"
            style={{
                backgroundImage: "url('Industries we serve -05.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >

            {/* Dark overlay */}
            <div className="absolute inset-0 "></div>

            {/* Content container */}
            <div
                className="
                        relative z-10 text-left w-full xl:max-w-5xl lg:max-w-3xl max-w-xl
                        px-4 sm:px-8 md:px-12 lg:px-16
                        pb-20
                        "
            >
                {/* Heading */}
                <h1
                    ref={textRef}
                    className="
                            text-white font-light leading-snug
                            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl
                        "
                >
                    Discover how scent
                    builds unforgettable brands
                </h1>

                {/* Underline */}
                <div
                    ref={lineRef}
                    className="
                                h-[2px] bg-white mt-4 sm:mt-6 md:mt-8
                                w-[60%] sm:w-[65%] md:w-[70%] lg:w-[72%] xl:w-[75%] 2xl:w-[77%]
                            "
                />

            </div>
        </section>
    );
}

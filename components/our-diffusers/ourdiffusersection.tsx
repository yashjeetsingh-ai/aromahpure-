'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function OurdiffuUserSection() {
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
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
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
                    ease: 'power2.out',
                    transformOrigin: 'left',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none none',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full flex items-center justify-end overflow-hidden font-abc
            h-[calc(100vh-488px)] lg:h-[calc(100vh-118px)]"
        >
            {/* Background Image */}
            <Image
                src="/our_diffusers.png"
                alt="Essential oil bottles on a light background"
                fill
                className="z-0 object-cover"
                loading="lazy"
            />

            {/* Content Overlay */}
            {/* Content Overlay */}
            <div
                className="
    absolute z-10 
    pr-4 sm:pr-10 md:pr-24 lg:pr-36 xl:pr-48 2xl:pr-60
    md:top-1/2 md:-translate-y-1/2   /* Center from md and above */
    bottom-6 sm:bottom-10 md:bottom-auto /* Move near bottom for small screens */
  "
            >
                <h1
                    ref={textRef}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#4a5a51] font-medium leading-tight text-left"
                >
                    Discover our wide <br /> range of Aroma Diffusers
                </h1>

                <div
                    ref={lineRef}
                    className="h-[1px] bg-[#4a5a51] w-full max-w-[200px]  md:max-w-[300px] lg:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[600px] mt-2.5"
                />
            </div>
        </section>
    );
}

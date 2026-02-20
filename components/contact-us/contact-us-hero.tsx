'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactUsHero() {
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
            className="relative w-full flex items-center justify-end overflow-hidden font-abc -mt-4
            h-[calc(100vh-488px)] lg:h-[calc(100vh-100px)]"
        >
            {/* Background Image */}
            <Image
                src="/Untitled-10-38.png"
                alt="Essential oil bottles on a light background"
                fill
                className="z-0 object-cover"
                loading="lazy"
            />

            {/* Content Overlay */}
            <div
                className="
                 absolute z-10 
                 bottom-20
                 right-10       /* mobile screens */
                 sm:left-auto sm:pr-10 md:pr-24 lg:pr-18 xl:pr-40 2xl:pr-60
                 pr-4
               "
            >

                <h1
                    ref={textRef}
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#4a5a51] font-medium leading-tight text-left"
                >
                    Get in touch <br /> with our team
                </h1>

                <div
                    ref={lineRef}
                    className="h-[2px] bg-[#62705a] w-full max-w-[150px] sm:max-w-[190px] md:max-w-[230px] lg:max-w-[270px] xl:max-w-[310px] 2xl:max-w-[390px] mt-2.5"
                />

            </div>
        </section>
    );
}

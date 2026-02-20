'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUsHero() {
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
        src="/About Us-06.png"
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
          pr-4 sm:pr-10 md:pr-24 lg:pr-36 xl:pr-48 2xl:pr-60
        "
      >
        <h1
          ref={textRef}
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#4a5a51] font-medium text-left"
        >
          Enhancing Every <br />
          Space Through <br />
          Fragrances
        </h1>

        <div
          ref={lineRef}
          className="h-[1px] bg-[#90a197] w-full max-w-[150px] sm:max-w-[190px] md:max-w-[230px] lg:max-w-[270px] xl:max-w-[310px] 2xl:max-w-[370px] mt-2.5"
        />
      </div>
    </section>
  );
}

'use client'

import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type PhilosophyIconProps = {
  className?: string
  size?: number
  delay?: number
  duration?: number
}

const PhilosophyIcon: React.FC<PhilosophyIconProps> = ({
  className,
  size = 120,
  delay = 0,
  duration = 1.5,
}) => {
  const svgRef = useRef<SVGSVGElement>(null)
  const circleRef = useRef<SVGCircleElement>(null)
  const puzzleRef = useRef<SVGGElement>(null)

  useGSAP(
    () => {
      const circle = circleRef.current
      const puzzle = puzzleRef.current
      if (!circle || !puzzle) return

      const circleLength = circle.getTotalLength()
      gsap.set(circle, { strokeDasharray: circleLength, strokeDashoffset: circleLength })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: svgRef.current,
          start: 'top 85%',
          end: 'top 50%',
          scrub: false,
          once: true,
        },
      })

      tl.to(circle, {
        strokeDashoffset: 0,
        duration: duration,
        ease: 'power2.out',
        delay: delay,
      }).fromTo(
        puzzle,
        {
          opacity: 0,
          scale: 0.8,
          transformOrigin: 'center center',
        },
        {
          opacity: 1,
          scale: 1,
          duration: duration * 0.6,
          ease: 'back.out(1.7)',
          delay: delay + duration * 0.5,
        },
        '<'
      )
    },
    { dependencies: [delay, duration, size], scope: svgRef }
  )

  return (
    <div className={cn('flex items-center justify-center', className)} style={{ width: size, height: size }}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle */}
        <circle
          ref={circleRef}
          cx="50"
          cy="50"
          r="47"
          stroke="white"
          strokeWidth="2"
          fill="none"
        />

        {/* Puzzle Icon */}
        <g ref={puzzleRef} stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* Outer square with rounded corners */}
          <rect x="20" y="20" width="60" height="60" rx="8" ry="8" />

          {/* Horizontal and vertical dividers */}
          <path d="M20 50 H80" />
          <path d="M50 20 V80" />

          {/* Top-left (bottom connector) */}
          <path d="M35 50 C35 55, 40 55, 45 50" />

          {/* Top-right (bottom connector) */}
          <path d="M55 50 C60 55, 65 55, 65 50" />

          {/* Bottom-left (top connector) */}
          <path d="M35 50 C35 45, 40 45, 45 50" />

          {/* Bottom-right (top connector) */}
          <path d="M55 50 C60 45, 65 45, 65 50" />
        </g>
      </svg>
    </div>
  )
}

export default PhilosophyIcon

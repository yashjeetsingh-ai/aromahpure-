"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

interface CenterOutwardLineProps {
  className?: string
  duration?: number
  delay?: number
}

export default function CenterOutwardLine({ className = "", duration = 1.5, delay = 0 }: CenterOutwardLineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const leftLineRef = useRef<HTMLDivElement>(null)
  const rightLineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current || !leftLineRef.current || !rightLineRef.current) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 90%",
        once: true,
      },
    })

    tl.fromTo(
      [leftLineRef.current, rightLineRef.current],
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        duration,
        delay,
        ease: "power2.out",
      },
    )
  }, [duration, delay])

  return (
    <div ref={containerRef} className="relative w-full flex justify-center">
      {/* Left half - animates from center to left */}
      <div ref={leftLineRef} className={`w-1/2 ${className}`} style={{ transformOrigin: "right center" }} />
      {/* Right half - animates from center to right */}
      <div ref={rightLineRef} className={`w-1/2 ${className}`} style={{ transformOrigin: "left center" }} />
    </div>
  )
}

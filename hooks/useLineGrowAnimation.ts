"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type LineAnimationOptions = {
  duration?: number
  start?: string // Custom start point for ScrollTrigger
  end?: string // Custom end point for ScrollTrigger
  scrub?: boolean | number // true for scrubbing, false for play once, or a number for scrub amount
  once?: boolean // Play animation only once
  triggerElement?: HTMLElement | null // New: Optional external trigger element
}

const useLineGrowAnimation = (options: Partial<LineAnimationOptions> = {}) => {
  const elementRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const targetElement = elementRef.current
      if (!targetElement) return

      const defaultOptions = {
        duration: 1.5,
        start: "top 85%",
        end: "top 50%",
        scrub: false,
        once: true,
        triggerElement: null, // Default to null
        ...options,
      }

      gsap.fromTo(
        targetElement,
        {
          scaleX: 0, // Start with 0 width
          transformOrigin: "left center", // Grow from the left
        },
        {
          scaleX: 1, // Grow to full width
          duration: defaultOptions.duration,
          ease: defaultOptions.scrub ? "none" : "power3.out", // Use "none" for scrubbing, "power3.out" otherwise
          scrollTrigger: {
            trigger: defaultOptions.triggerElement || targetElement, // Use external trigger if provided, else self
            start: defaultOptions.start,
            end: defaultOptions.end,
            scrub: defaultOptions.scrub,
            once: defaultOptions.once,
            toggleActions: defaultOptions.scrub ? "play reverse play reverse" : "play none none none",
          },
        },
      )
    },
    {
      dependencies: [options.duration, options.start, options.end, options.scrub, options.once, options.triggerElement],
      scope: elementRef,
    },
  )

  return elementRef
}

export default useLineGrowAnimation

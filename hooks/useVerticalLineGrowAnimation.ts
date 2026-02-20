"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type VerticalLineAnimationOptions = {
  start?: string
  end?: string
  scrub?: boolean | number
  triggerElement?: HTMLElement | null // New: Optional external trigger element
}

const useVerticalLineGrowAnimation = (options: Partial<VerticalLineAnimationOptions> = {}) => {
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const line = lineRef.current
      if (!line) return

      const defaultOptions = {
        start: "top center", // Default start
        end: "bottom center", // Default end
        scrub: true, // Default to scrubbing
        triggerElement: null, // Default to null
        ...options,
      }

      gsap.fromTo(
        line,
        {
          height: 0, // Start with 0 height
        },
        {
          height: "100%", // Grow to full height
          ease: "none", // Linear ease for consistent growth
          scrollTrigger: {
            trigger: defaultOptions.triggerElement || line.parentElement, // Use external trigger if provided, else parent
            start: defaultOptions.start,
            end: defaultOptions.end,
            scrub: defaultOptions.scrub,
            toggleActions: defaultOptions.scrub ? "play reverse play reverse" : "play none none none",
          },
        },
      )
    },
    { dependencies: [options.start, options.end, options.scrub, options.triggerElement], scope: lineRef },
  )

  return lineRef
}

export default useVerticalLineGrowAnimation

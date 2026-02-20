"use client"

import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

type AnimationOptions = {
  delay?: number
  duration?: number
  start?: string // Add start option
  end?: string // Add end option
  scrub?: boolean | number // Add scrub option
  triggerElement?: HTMLElement | null // Add triggerElement option
}

const useCircleScaleAnimation = (options: Partial<AnimationOptions> = {}) => {
  const elementRef = useRef<any>(null)

  useGSAP(
    () => {
      const element = elementRef.current
      if (!element) return

      const defaultOptions = {
        duration: 0.3,
        delay: 0,
        start: "top center", // Default start for scrubbing
        end: "bottom center", // Default end for scrubbing
        scrub: true, // Set scrub to true by default for this animation
        triggerElement: null, // Default to null
        ...options,
      }

      gsap.fromTo(
        element,
        {
          scale: 0, // Start with scale 0
        },
        {
          scale: 1, // Scale to 1
          duration: defaultOptions.duration,
          delay: defaultOptions.delay,
          ease: defaultOptions.scrub ? "none" : "back.out(1.7)", // Use "none" ease for scrubbing for smoothness
          scrollTrigger: {
            trigger: defaultOptions.triggerElement || element, // Use external trigger if provided, else self
            start: defaultOptions.start,
            end: defaultOptions.end,
            scrub: defaultOptions.scrub,
            toggleActions: defaultOptions.scrub ? "play reverse play reverse" : "play none none none",
          },
        },
      )
    },
    {
      dependencies: [
        options.delay,
        options.duration,
        options.start,
        options.end,
        options.scrub,
        options.triggerElement,
      ],
      scope: elementRef,
    },
  )

  return elementRef
}

export default useCircleScaleAnimation

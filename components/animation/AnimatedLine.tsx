"use client"

import type React from "react"
import useLineGrowAnimation from "@/hooks/useLineGrowAnimation"
import { cn } from "@/lib/utils"

type AnimatedLineProps = {
  className?: string
  duration?: number
  start?: string
  end?: string
  scrub?: boolean | number
  once?: boolean
  triggerElement?: HTMLElement | null // New prop
}

const AnimatedLine: React.FC<AnimatedLineProps> = ({
  className,
  duration,
  start,
  end,
  scrub,
  once,
  triggerElement,
}) => {
  const lineRef = useLineGrowAnimation({ duration, start, end, scrub, once, triggerElement }) // Pass triggerElement

  return (
    <div
      ref={lineRef}
      className={cn("h-[1px] bg-[#687970] transform origin-left", className)} // Default line styles
    ></div>
  )
}

export default AnimatedLine

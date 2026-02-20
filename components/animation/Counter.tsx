'use client'

import React, { useEffect, useRef, useState } from 'react'

type CounterProps = {
  end: number
}

const Counter: React.FC<CounterProps> = ({ end }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false) // To ensure animation plays only once

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          let start = 0
          const duration = 1000 // milliseconds
          const increment = end / (duration / 20) // 20ms interval

          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              clearInterval(timer)
              setCount(end)
              hasAnimated.current = true
            } else {
              setCount(Math.floor(start))
            }
          }, 20)
        }
      },
      { threshold: 0.6 }, // Trigger when 60% of the element is visible
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [end])

  return <span ref={ref}>{count}</span>
}

export default Counter

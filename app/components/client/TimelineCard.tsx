"use client"

import { useEffect, useRef, useState } from "react"
import type { ReactNode } from "react"

interface PropType {
  children: ReactNode
  className?: string
}

export default function TimelineCard({ children, className = "" }: PropType) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.2 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={`timeline-card ${inView ? "in-view" : ""} ${className}`}>
      {children}
    </div>
  )
}
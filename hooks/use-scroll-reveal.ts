"use client"

import * as React from "react"

export function useScrollReveal() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const container = containerRef.current
    if (!container) return

    const elements = container.querySelectorAll<HTMLElement>("[data-reveal]")

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((el) => {
        el.setAttribute("data-revealed", "true")
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true")
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -20px 0px",
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [])

  return containerRef
}

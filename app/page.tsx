"use client"

import * as React from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ScheduleSection } from "@/components/schedule-section"
import { HallOfFame } from "@/components/hall-of-fame"
import { FeaturesSection } from "@/components/features-section"
import { TeacherSection } from "@/components/teacher-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactAdmissionSection } from "@/components/contact-admission-section"
import { MobileActionBar } from "@/components/mobile-action-bar"
import { Footer } from "@/components/footer"

export default function Home() {
  const containerRef = React.useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      // Register plugin inside hook safely
      gsap.registerPlugin(ScrollTrigger)

      const mm = gsap.matchMedia()

      // Desktop & Tablet smooth scroll reveals
      mm.add("(min-width: 768px)", () => {
        const sections = [
          "#schedule",
          "#hall-of-fame",
          "#features",
          "#faculty",
          "#reviews",
          "#contact",
        ]

        sections.forEach((selector) => {
          const el = document.querySelector(selector)
          if (!el) return

          gsap.fromTo(
            el,
            { opacity: 0.85, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
              scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          )
        })
      })

      // Mobile lightweight performance-first reveal (no layout shift)
      mm.add("(max-width: 767px)", () => {
        const sections = [
          "#schedule",
          "#hall-of-fame",
          "#features",
          "#faculty",
          "#reviews",
          "#contact",
        ]

        sections.forEach((selector) => {
          const el = document.querySelector(selector)
          if (!el) return

          gsap.fromTo(
            el,
            { opacity: 0.9, y: 12 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              ease: "power1.out",
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          )
        })
      })

      return () => mm.revert()
    },
    { scope: containerRef }
  )

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Class Schedule (Fixed Slots for HSC-2027, 2028 & Honours) */}
        <ScheduleSection />

        {/* 4. Hall of Fame (2025 Success Showcase) */}
        <HallOfFame />

        {/* 5. Core Coaching Pillars & Features */}
        <FeaturesSection />

        {/* 6. Teacher Profile - Mohamed Nayon */}
        <TeacherSection />

        {/* 7. Student & Parent Reviews */}
        <ReviewsSection />

        {/* 8. Admission & Contact Section */}
        <ContactAdmissionSection />
      </main>

      {/* Sticky Mobile Bottom Bar */}
      <MobileActionBar />

      {/* Footer */}
      <Footer />
    </div>
  )
}

"use client"

import * as React from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ScheduleSection } from "@/components/schedule-section"
import { HallOfFame } from "@/components/hall-of-fame"
import { TeacherSection } from "@/components/teacher-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactAdmissionSection } from "@/components/contact-admission-section"
import { MobileActionBar } from "@/components/mobile-action-bar"
import { Footer } from "@/components/footer"

export default function Home() {
  const containerRef = useScrollReveal()

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-hidden bg-white text-[#212121]">
      {/* Top Cohere-style Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. Hero Section & Lab Console */}
        <HeroSection />

        {/* 2. Asymmetric Bento Features */}
        <div data-reveal id="features-wrapper">
          <FeaturesSection />
        </div>

        {/* 3. Class Schedule & Routine Bento */}
        <div data-reveal id="schedule-wrapper">
          <ScheduleSection />
        </div>

        {/* 4. Hall of Fame (Cohere Research Table) */}
        <div data-reveal id="hall-of-fame-wrapper">
          <HallOfFame />
        </div>

        {/* 5. Mentor Spotlight - Mohamed Nayon */}
        <div data-reveal id="faculty-wrapper">
          <TeacherSection />
        </div>

        {/* 6. Student & Parent Editorial Reviews */}
        <div data-reveal id="reviews-wrapper">
          <ReviewsSection />
        </div>

        {/* 7. Campus Visit & Direct Call Admission Hub */}
        <div data-reveal id="contact-wrapper">
          <ContactAdmissionSection />
        </div>
      </main>

      {/* Mobile Sticky Bar */}
      <MobileActionBar />

      {/* Near-Black Editorial Footer */}
      <Footer />
    </div>
  )
}

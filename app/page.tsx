"use client"

import * as React from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { StudentSpotlightSection } from "@/components/student-spotlight-section"
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

        {/* 2. Previous Student Success Spotlight (3D Coverflow Carousel) */}
        <div data-reveal id="students-spotlight-wrapper">
          <StudentSpotlightSection />
        </div>

        {/* 3. Mentor Spotlight - Mohamed Nayon */}
        <div data-reveal id="faculty-wrapper">
          <TeacherSection />
        </div>

        {/* 4. Asymmetric Bento Features */}
        <div data-reveal id="features-wrapper">
          <FeaturesSection />
        </div>

        {/* 5. Class Schedule & Routine Bento */}
        <div data-reveal id="schedule-wrapper">
          <ScheduleSection />
        </div>

        {/* 6. Hall of Fame (Cohere Research Table) */}
        <div data-reveal id="hall-of-fame-wrapper">
          <HallOfFame />
        </div>

        {/* 7. Student & Parent Editorial Reviews */}
        <div data-reveal id="reviews-wrapper">
          <ReviewsSection />
        </div>

        {/* 8. Campus Visit & Direct Call Admission Hub */}
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

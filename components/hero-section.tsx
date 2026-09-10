"use client"

import * as React from "react"
import { NumberTicker } from "@/components/motion/number-ticker"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-36 lg:pb-24 border-b border-[#e2e8f0]"
    >
      {/* Alchemist Logo-themed ambient mesh glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Royal Blue ambient radial glow */}
        <div className="absolute -top-32 right-1/4 h-[550px] w-[550px] rounded-full bg-[#0D47A1]/8 blur-3xl" />
        {/* Flame Orange ambient radial glow */}
        <div className="absolute top-1/3 -left-20 h-[500px] w-[500px] rounded-full bg-[#F57C00]/8 blur-3xl" />
        {/* Cyan highlight glow */}
        <div className="absolute -bottom-20 right-10 h-[400px] w-[400px] rounded-full bg-[#0288D1]/6 blur-3xl" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(#0D47A1 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Top Badges Row: Admission Pill + Social Proof Rating */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB74D] bg-[#FFF3E0] px-4 py-1.5 text-xs font-bold text-[#E65100] shadow-xs">
              <span className="h-2 w-2 rounded-full bg-[#F57C00] animate-pulse" />
              <span>HSC ২০২৭ ও ২০২৮ নতুন ব্যাচে ভর্তি চলছে</span>
            </div>

            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/95 px-3.5 py-1 text-xs font-semibold text-slate-700 shadow-2xs backdrop-blur-sm">
              <span className="text-amber-400">★★★★★</span>

              <span className="text-slate-300">•</span>
              <span className="text-[#64748b]">1800+ শিক্ষার্থীর আস্থা</span>
            </div>
          </div>

          {/* Monumental Headline with Logo Gradient */}
          <h1 className="font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.14]">
            রসায়নের ভয় দূর করে{" "}
            <span className="bg-gradient-to-r from-[#0D47A1] via-[#0288D1] to-[#F57C00] bg-clip-text text-transparent">
              সফলতা নিশ্চিত করার
            </span>{" "}
            নির্ভরযোগ্য ঠিকানা
          </h1>

          {/* Mentor Philosophy Tag */}
          <div className="mt-5 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD54F] bg-[#FFF8E1] px-3.5 py-1 text-xs sm:text-sm font-bold text-[#B78103]">
              <span>&ldquo;Experiment is my passion 🔬, Teaching is my mission 🎯&rdquo;</span>
            </div>
            <p className="mx-auto text-sm sm:text-base font-medium text-[#475569] leading-relaxed max-w-2xl">
              মোহাম্মদ নয়ন স্যারের পরিচালনায় যশোরের সর্বাধুনিক ডিজিটাল ক্লাসরুমে 
               মূল বইয়ের নিখুঁত বেসিক থেকে মেডিকেল ও ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতি।
            </p>
          </div>



          {/* Cloudflare-Style Technical Blueprint Stat Strip */}
          <div className="relative mt-8 sm:mt-10 w-full">
            {/* Blueprint corner anchor nodes */}
            <span className="absolute -top-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -top-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -bottom-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -bottom-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />

            {/* Mobile center blueprint intersection node */}
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white sm:hidden pointer-events-none" />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-[#e2e8f0] bg-[#e2e8f0] text-center shadow-xs">
              <div className="bg-white p-4 sm:p-6 lg:p-7 transition-colors hover:bg-slate-50/80 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#0D47A1] whitespace-nowrap leading-tight">
                  <NumberTicker value={14} locale="bn-BD" suffix="+" duration={1.0} />
                  <span className="text-lg sm:text-2xl lg:text-3xl font-bold ml-1.5">বছর</span>
                </div>
                <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#475569] whitespace-nowrap">
                  একটানা সফল শিক্ষকতা
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 lg:p-7 transition-colors hover:bg-slate-50/80 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#E65100] whitespace-nowrap leading-tight">
                  <NumberTicker value={100} locale="bn-BD" suffix="+" duration={1.2} />
                  <span className="text-sm sm:text-lg lg:text-2xl font-bold ml-1 text-[#E65100]">জিপিএ-৫</span>
                </div>
                <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#475569] whitespace-nowrap">
                  বোর্ড পরীক্ষায় সেরা ফলাফল
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 lg:p-7 transition-colors hover:bg-slate-50/80 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#0288D1] whitespace-nowrap leading-tight">
                  <NumberTicker value={4} locale="bn-BD" suffix="টি" duration={0.8} />
                  <span className="text-lg sm:text-2xl lg:text-3xl font-bold ml-1.5">শিফট</span>
                </div>
                <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#475569] whitespace-nowrap">
                  সুবিধাজনক ব্যাচ শিডিউল
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 lg:p-7 transition-colors hover:bg-slate-50/80 flex flex-col items-center justify-center">
                <div className="flex items-center justify-center font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] whitespace-nowrap leading-tight">
                  <NumberTicker value={100} locale="bn-BD" suffix="%" duration={1.2} />
                  <span className="text-lg sm:text-2xl lg:text-3xl font-bold ml-1.5">বেসিক</span>
                </div>
                <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#475569] whitespace-nowrap">
                  বোর্ড বই লাইন বাই লাইন
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import Link from "next/link"
import {
  Phone,
  Compass,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

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
          {/* Logo-themed Flame Orange & Royal Blue Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#FFB74D] bg-[#FFF3E0] px-4 py-1.5 text-xs font-bold text-[#E65100] shadow-xs">
            <span className="h-2 w-2 rounded-full bg-[#F57C00] animate-pulse" />
            <span>HSC ২০২৭ ও ২০২৮ নতুন ব্যাচে ভর্তি চলছে</span>
          </div>

          {/* Monumental Headline with Logo Gradient */}
          <h1 className="font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl lg:text-[54px] leading-[1.12]">
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
              এনসিটিবি মূল বোর্ড বইয়ের নিখুঁত বেসিক থেকে মেডিকেল ও ইঞ্জিনিয়ারিং ভর্তি প্রস্তুতি।
            </p>
          </div>

          {/* Logo-themed Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
            <a href="tel:01780616187" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto gap-2.5 rounded-full bg-[#0D47A1] hover:bg-[#0B3D91] text-white px-8 py-3.5 text-sm font-bold shadow-lg shadow-[#0D47A1]/25 active:scale-[0.98] transition-all"
              >
                <Phone className="h-4 w-4 text-[#FFB74D]" />
                <span>সরাসরি কল করুন (০১৭৮০-৬১৬১৮৭)</span>
              </Button>
            </a>

            <Link href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto gap-2 rounded-full border-2 border-[#0D47A1]/25 bg-white text-[#0D47A1] hover:bg-[#F0F7FF] hover:border-[#0D47A1] px-6 py-3.5 text-sm font-bold transition-all"
              >
                <Compass className="h-4 w-4 text-[#F57C00]" />
                <span>ক্যাম্পাস ঠিকানা ও দিকনির্দেশনা</span>
                <ArrowRight className="h-4 w-4 text-[#0D47A1]" />
              </Button>
            </Link>
          </div>

          {/* Cloudflare-Style Technical Blueprint Stat Strip */}
          <div className="relative mt-14 w-full">
            {/* Blueprint corner anchor nodes */}
            <span className="absolute -top-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -top-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -bottom-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -bottom-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />

            <div className="grid grid-cols-2 divide-y divide-[#e2e8f0] border border-[#e2e8f0] bg-white text-center shadow-xs sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
              <div className="p-5 sm:p-6 transition-colors hover:bg-slate-50/70">
                <div className="font-display text-2xl sm:text-3xl font-black text-[#0D47A1]">১৪+ বছর</div>
                <div className="mt-1 text-xs font-semibold text-[#475569]">একটানা সফল শিক্ষকতা</div>
              </div>
              <div className="p-5 sm:p-6 transition-colors hover:bg-slate-50/70">
                <div className="font-display text-2xl sm:text-3xl font-black text-[#E65100]">১০০+ জিপিএ-৫</div>
                <div className="mt-1 text-xs font-semibold text-[#475569]">বোর্ড পরীক্ষায় সেরা ফলাফল</div>
              </div>
              <div className="p-5 sm:p-6 transition-colors hover:bg-slate-50/70">
                <div className="font-display text-2xl sm:text-3xl font-black text-[#0288D1]">৪টি শিফট</div>
                <div className="mt-1 text-xs font-semibold text-[#475569]">সুবিধাজনক ব্যাচ শিডিউল</div>
              </div>
              <div className="p-5 sm:p-6 transition-colors hover:bg-slate-50/70">
                <div className="font-display text-2xl sm:text-3xl font-black text-[#0F172A]">১০০% বেসিক</div>
                <div className="mt-1 text-xs font-semibold text-[#475569]">বোর্ড বই লাইন বাই লাইন</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

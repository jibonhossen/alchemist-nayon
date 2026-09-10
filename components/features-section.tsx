"use client"

import * as React from "react"
import {
  MonitorPlay,
  BookOpen,
  LineChart,
  Lightbulb,
  CheckCircle2,
  FileCheck,
  Atom,
  Sparkles,
} from "lucide-react"

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative bg-white py-20 md:py-28 border-b border-[#e2e8f0]"
    >
      {/* Background ambient technical grid glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-[#0D47A1]/5 blur-3xl" />
        <div className="absolute bottom-10 -left-20 h-96 w-96 rounded-full bg-[#F57C00]/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#0D47A1 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (Technical Editorial Style) */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB74D] bg-[#FFF3E0] px-3.5 py-1 text-xs font-bold text-[#E65100] mb-3.5">
            <Sparkles className="h-3.5 w-3.5 text-[#F57C00]" />
            <span>পড়ানোর বিশেষত্ব ও আর্কিটেকচার</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl leading-[1.18]">
            কেন আলকেমিস্ট নয়ন স্যারের কেমিস্ট্রি কেয়ার অন্যদের চেয়ে আলাদা?
          </h2>
          <p className="mt-4 text-base text-[#475569] leading-relaxed">
            গতানুগতিক মুখস্থ বিদ্যার পরিবর্তে বৈজ্ঞানিক বিশ্লেষণ, ডিজিটাল ভিজ্যুয়ালাইজেশন এবং ব্যক্তিগত তদারকির সমন্বয়ে সাজানো একটি আধুনিক শিক্ষা ব্যবস্থা।
          </p>
        </div>

        {/* Cloudflare-Style Technical Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Divided Feature Stack (Cloudflare Blueprint Card) - 7 cols */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Cloudflare corner anchor nodes */}
              <span className="absolute -top-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
              <span className="absolute -top-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
              <span className="absolute -bottom-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
              <span className="absolute -bottom-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />

              {/* Main Card Container with Hairline Dividers */}
              <div className="border border-[#e2e8f0] bg-white divide-y divide-[#e2e8f0] shadow-xs">
                {/* Item 1: Interactive Digital Simulation */}
                <div className="p-6 sm:p-8 transition-colors duration-150 hover:bg-[#F8FAFC]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white text-[#0D47A1] shadow-2xs">
                    <MonitorPlay className="h-5 w-5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    ইন্টারেক্টিভ ডিজিটাল ক্লাসরুম
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#475569]">
                    জটিল রাসায়নিক বিক্রিয়া, পরমাণুর ৩D অরবিটাল গঠন ও ল্যাব টেস্টগুলো বড় ইন্টারেক্টিভ স্ক্রিনে সরাসরি ভিজ্যুয়ালাইজ করা হয়। ফলে মুখস্থ ছাড়াই বিক্রিয়ার প্রতিটা ইলেকট্রন শিফট চোখের সামনে স্পষ্ট হয়।
                  </p>
                </div>

                {/* Item 2: NCTB Board Book Line by Line */}
                <div className="p-6 sm:p-8 transition-colors duration-150 hover:bg-[#F8FAFC]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white text-[#E65100] shadow-2xs">
                    <BookOpen className="h-5 w-5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    মূল বোর্ড বইয়ের গভীরতম অধ্যায়ন
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#475569]">
                    হাজারটা বাজারের গাইড বই পড়ে বিভ্রান্ত না হয়ে এনসিটিবি মূল বোর্ড বইয়ের প্রতিটি লাইন, সমীকরণ ও গাণিতিক উদাহরণ নিখুঁতভাবে বিশ্লেষণ করে পড়ানো হয়।
                  </p>
                </div>

                {/* Item 3: Continuous Evaluation & Analytics */}
                <div className="p-6 sm:p-8 transition-colors duration-150 hover:bg-[#F8FAFC]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white text-[#0288D1] shadow-2xs">
                    <LineChart className="h-5 w-5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    অধ্যায়ভিত্তিক পরীক্ষা ও রেজাল্ট মূল্যায়ন
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#475569]">
                    প্রতিটি অধ্যায় শেষে স্ট্যান্ডার্ড সৃজনশীল ও বহুনির্বাচনী পরীক্ষা গ্রহণ। প্রতিটি শিক্ষার্থীর দুর্বলতা ও ভুলের জায়গা শনাক্ত করে নিয়মিত ফিডব্যাক প্রদান।
                  </p>
                </div>

                {/* Item 4: 1-on-1 Mentorship */}
                <div className="p-6 sm:p-8 transition-colors duration-150 hover:bg-[#F8FAFC]">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white text-[#C62828] shadow-2xs">
                    <Lightbulb className="h-5 w-5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    স্পেশাল ডাউট সলভিং ও ওয়ান-টু-ওয়ান কেয়ার
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-[15px] leading-relaxed text-[#475569]">
                    কোনো পড়া বুঝতে দ্বিধা থাকলে ক্লাসের পর আলাদা বসে নয়ন স্যারের সাথে সরাসরি আলোচনা করে কনসেপ্ট একদম স্বচ্ছ করার পূর্ণ সুযোগ রয়েছে।
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Precision Simulation & Benchmark Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Widget 1: Chemical Orbital & Geometry Blueprint Card */}
            <div className="relative">
              <span className="absolute -top-1.5 -left-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
              <span className="absolute -top-1.5 -right-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
              <span className="absolute -bottom-1.5 -left-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
              <span className="absolute -bottom-1.5 -right-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />

              <div className="border border-[#e2e8f0] bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="font-bold text-[#0F172A]">3D অরবিটাল ও বন্ডিং সিমুলেশন</span>
                  </div>
                  <span className="font-mono text-[11px] font-semibold bg-[#F0F7FF] text-[#0D47A1] px-2 py-0.5 border border-[#0D47A1]/20">
                    sp³ হাইব্রিডাইজেশন
                  </span>
                </div>

                <p className="mt-4 text-xs text-[#64748b] leading-relaxed">
                  পরীক্ষায় মুখস্থ না করে প্রতিটি অণুর ত্রিমাত্রিক গঠন ও বন্ধন কোণ স্পষ্ট পর্যবেক্ষণ:
                </p>

                <div className="mt-4 grid grid-cols-3 gap-2.5 text-center text-xs">
                  <div className="border border-[#e2e8f0] bg-[#F8FAFC] p-3">
                    <div className="font-mono text-base font-black text-[#0F172A]">১০৯.৫°</div>
                    <div className="text-[10px] font-semibold text-[#64748b] mt-0.5">বন্ড অ্যাঙ্গেল</div>
                  </div>
                  <div className="border border-[#0D47A1]/20 bg-[#F0F7FF] p-3">
                    <div className="font-mono text-sm font-black text-[#0D47A1]">টেট্রাহেড্রাল</div>
                    <div className="text-[10px] font-semibold text-[#0D47A1]/80 mt-0.5">জ্যামিতিক আকৃতি</div>
                  </div>
                  <div className="border border-[#FFB74D] bg-[#FFF3E0] p-3">
                    <div className="font-mono text-sm font-black text-[#E65100]">৪টি σ বন্ধন</div>
                    <div className="text-[10px] font-semibold text-[#E65100]/80 mt-0.5">CH₄ মিথেন</div>
                  </div>
                </div>

                <div className="mt-4 border-t border-[#e2e8f0] pt-3.5 flex items-center justify-between text-[11px] text-[#475569]">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Atom className="h-3.5 w-3.5 text-[#0D47A1]" />
                    ইলেকট্রন ক্লাউড ম্যাপিং
                  </span>
                  <span className="font-mono font-semibold text-[#0D47A1]">ভিসিপিআর থিওরি</span>
                </div>
              </div>
            </div>

            {/* Widget 2: Academic Progression Roadmap Card */}
            <div className="relative">
              <span className="absolute -top-1.5 -left-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
              <span className="absolute -top-1.5 -right-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
              <span className="absolute -bottom-1.5 -left-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
              <span className="absolute -bottom-1.5 -right-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />

              <div className="border border-[#e2e8f0] bg-white p-6 shadow-xs">
                <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-3 text-xs">
                  <span className="font-bold text-[#0F172A]">বোর্ড ও ভর্তি পরীক্ষা প্রস্তুতি ধাপ</span>
                  <span className="font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                    A+ স্ট্যান্ডার্ড
                  </span>
                </div>

                <div className="mt-4 space-y-2.5">
                  <div className="flex items-center gap-3 border border-[#e2e8f0] p-3 text-xs bg-[#F8FAFC] transition-colors hover:border-[#0D47A1]/40">
                    <CheckCircle2 className="h-4 w-4 text-[#0D47A1] shrink-0" />
                    <span className="font-semibold text-[#0F172A]">বোর্ড বইয়ের প্রতিটা লাইন বাই লাইন ব্যাখ্যা</span>
                  </div>
                  <div className="flex items-center gap-3 border border-[#e2e8f0] p-3 text-xs bg-[#F8FAFC] transition-colors hover:border-[#0D47A1]/40">
                    <CheckCircle2 className="h-4 w-4 text-[#F57C00] shrink-0" />
                    <span className="font-semibold text-[#0F172A]">টাইপভিত্তিক গাণিতিক প্রবলেম ও শর্টকাট টেকনিক</span>
                  </div>
                  <div className="flex items-center gap-3 border border-[#e2e8f0] p-3 text-xs bg-[#F8FAFC] transition-colors hover:border-[#0D47A1]/40">
                    <CheckCircle2 className="h-4 w-4 text-[#0288D1] shrink-0" />
                    <span className="font-semibold text-[#0F172A]">মেডিকেল ও ইঞ্জিনিয়ারিং প্রশ্ন ব্যাংক সলভিং</span>
                  </div>
                </div>

                <div className="mt-4 border-t border-[#e2e8f0] pt-3 flex items-center justify-between text-[11px] text-[#475569]">
                  <span className="flex items-center gap-1.5">
                    <FileCheck className="h-3.5 w-3.5 text-emerald-600" />
                    ভুল চিহ্নিত করে বিশেষ রি-সলভ ক্লাস
                  </span>
                  <span className="font-bold text-[#E65100]">১০০% নিশ্চয়তা</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

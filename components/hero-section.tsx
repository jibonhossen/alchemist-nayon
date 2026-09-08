"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Users,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Atom,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* Background Decorative Alchemical Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Subtle radial gradient */}
        <div className="absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-transparent blur-3xl dark:from-blue-600/15" />
        <div className="absolute top-1/2 -left-20 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-orange-500/10 via-amber-400/5 to-transparent blur-3xl dark:from-orange-600/10" />

        {/* Floating Chemistry Formulas / Molecular Nodes */}
        <div className="absolute top-36 left-8 hidden text-xs font-mono text-slate-400/40 select-none md:block dark:text-slate-600/40">
          ΔH &lt; 0 | PV = nRT
        </div>
        <div className="absolute top-52 right-12 hidden text-xs font-mono text-slate-400/40 select-none md:block dark:text-slate-600/40">
          pH = -log[H⁺]
        </div>
        <div className="absolute bottom-20 left-1/3 hidden text-xs font-mono text-slate-400/40 select-none lg:block dark:text-slate-600/40">
          CH₃COOH + NaOH ⇌ CH₃COONa + H₂O
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Core Value Proposition */}
          <div className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left">
            {/* Top Tag Badges */}
            <div className="mb-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <Badge
                variant="alchemist"
                className="gap-1.5 px-3 py-1 text-xs font-medium"
              >
                <Sparkles className="h-3.5 w-3.5 text-orange-500" />
                <span>HSC ২০২৭ ও ২০২৮ নতুন ব্যাচে ভর্তি চলছে</span>
              </Badge>
              <Badge
                variant="navy"
                className="gap-1.5 px-3 py-1 text-xs font-medium"
              >
                <Atom className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                <span>অনার্স কেমিস্ট্রি কেয়ার</span>
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              রসায়নের ভয় দূর করে{" "}
              <span className="bg-gradient-to-r from-[#0F2C59] via-blue-700 to-orange-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-blue-400 dark:to-orange-400">
                সফলতা নিশ্চিত করার
              </span>{" "}
              নির্ভরযোগ্য ঠিকানা
            </h1>

            {/* Mission & Tagline */}
            <p className="mt-4 text-base font-medium text-slate-600 sm:text-lg dark:text-slate-300">
              <span className="font-semibold text-orange-600 dark:text-orange-400">
                &ldquo;Experiment is my passion 🔬, Teaching is my mission 🎯&rdquo;
              </span>
              <br className="hidden sm:block" />
              স্মার্ট ডিজিটাল ক্লাসরুমে বোর্ড বই ও অ্যাডমিশন ভিত্তিক পূর্ণাঙ্গ রসায়ন প্রস্তুতি।
            </p>

            {/* Key Value Points */}
            <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>বোর্ড বইয়ের প্রতিটি কনসেপ্ট ক্লিয়ারিং</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>ইন্টারেক্টিভ ডিজিটাল স্মার্ট বোর্ড ক্লাস</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>অধ্যায়ভিত্তিক প্র্যাকটিস শিট ও লেকচার নোট</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                <span>নিয়মিত পরীক্ষা ও প্রগ্রেস ট্র্যাকিং</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
              <Link href="#schedule" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full gap-2 rounded-xl bg-[#0F2C59] px-6 py-6 text-base font-semibold text-white shadow-lg shadow-blue-900/20 hover:bg-[#153e7a] active:scale-98 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  <Calendar className="h-5 w-5 text-orange-400" />
                  <span>ব্যাচের সময়সূচি দেখুন</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>

              <Link href="#hall-of-fame" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full gap-2 rounded-xl border-orange-500/40 bg-white/80 px-6 py-6 text-base font-semibold text-orange-600 shadow-sm hover:bg-orange-50 active:scale-98 dark:border-orange-500/30 dark:bg-slate-900/80 dark:text-orange-400 dark:hover:bg-slate-800"
                >
                  <Award className="h-5 w-5 text-orange-500" />
                  <span>সাফল্যের গৌরবগাথা</span>
                </Button>
              </Link>
            </div>

            {/* Location & Quick Trust Footer */}
            <div className="mt-6 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ঠিকানা: এসপি বাংলো গেটের বিপরীতে, আরবপুর, যশোর</span>
            </div>
          </div>

          {/* Right Column: Hero Teacher Visual & Impact Card */}
          <div className="relative mx-auto w-full max-w-md lg:col-span-5 lg:max-w-none">
            {/* Outer Glow Ring */}
            <div className="relative mx-auto max-w-sm rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90">
              {/* Photo Container */}
              <div className="relative aspect-[4/4.6] w-full overflow-hidden rounded-2xl bg-gradient-to-b from-blue-950 via-slate-900 to-black">
                <Image
                  src="/assets/nayonsir.png"
                  alt="Mohamed Nayon Sir - Chemistry Mentor"
                  fill
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />

                {/* Gradient Overlay for bottom text clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Floating Alchemist Badge in Top Right */}
                <div className="absolute top-3 right-3 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                  <div className="h-2 w-2 rounded-full bg-orange-500 animate-ping" />
                  <span>Alchemist Care</span>
                </div>

                {/* Teacher Info Overlay at Bottom */}
                <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur-md dark:bg-black/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">
                        মোহাম্মদ নয়ন
                      </h3>
                      <p className="text-xs font-medium text-orange-300">
                        রসায়ন প্রশিক্ষক ও প্রতিষ্ঠাতা
                      </p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-md">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                  </div>
                  <p className="mt-2 text-[11px] text-slate-200">
                    &ldquo;পরিকল্পিত পড়াশোনা, সফলতার নিশ্চয়তা&rdquo;
                  </p>
                </div>
              </div>

              {/* Floating Floating Stat Badge - Top Left */}
              <div className="absolute -top-4 -left-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 dark:text-white">
                      ১,২০০+
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      সফল শিক্ষার্থী
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge - Bottom Right */}
              <div className="absolute -right-4 -bottom-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-slate-700 dark:bg-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-[#0F2C59] dark:bg-blue-950 dark:text-blue-300">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-slate-900 dark:text-white">
                      ২০২৫ সালে
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      মেডিকেল ও কুয়েটে চান্স
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Banner Stats Row */}
        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-20">
          <div className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="text-2xl font-black text-[#0F2C59] sm:text-3xl dark:text-blue-400">
              ১০০%
            </div>
            <div className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
              বোর্ড ভিত্তিক প্রস্তুতি
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="text-2xl font-black text-orange-600 sm:text-3xl dark:text-orange-400">
              ডিজিটাল
            </div>
            <div className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
              স্মার্ট টাচ ক্লাসরুম
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="text-2xl font-black text-emerald-600 sm:text-3xl dark:text-emerald-400">
              প্র্যাকটিস
            </div>
            <div className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
              অধ্যায়ভিত্তিক স্পেশাল শিট
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-sm backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="text-2xl font-black text-purple-600 sm:text-3xl dark:text-purple-400">
              ২৪/৭
            </div>
            <div className="mt-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
              ডাউট ক্লিয়ারিং সাপোর্ট
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

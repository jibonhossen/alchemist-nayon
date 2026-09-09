"use client"

import * as React from "react"
import {
  Calendar,
  Phone,
  Sun,
  Sunset,
  Moon,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/motion/tabs"

interface TimeSlot {
  time: string
  period: "সকাল" | "বিকাল" | "সন্ধ্যা" | "রাত"
  periodEn: "Morning" | "Afternoon" | "Evening" | "Night"
  status: "ভর্তি চলছে" | "সীমিত আসন" | "নতুন ব্যাচ শুরু"
  isHot?: boolean
}

interface DayRoutine {
  id: string
  days: string
  daysEn: string
  slots: TimeSlot[]
}

interface BatchProgram {
  id: string
  tabLabel: string
  title: string
  academicYear: string
  tag: string
  description: string
  routines: DayRoutine[]
}

const batchPrograms: BatchProgram[] = [
  {
    id: "hsc-2027",
    tabLabel: "HSC 2027",
    title: "HSC - 2027 ব্যাচ",
    academicYear: "একাদশ ও দ্বাদশ শ্রেণি (২০২৫–২৭ সেশন)",
    tag: "চলমান ও নিয়মিত ব্যাচ",
    description:
      "এইচএসসি ২০২৭ ব্যাচের শিক্ষার্থীদের জন্য ১ম ও ২য় পত্রের অধ্যায়ভিত্তিক সুষম প্রস্তুতি। ব্যাচের সময়সূচি সারাবছর অপরিবর্তিত থাকে।",
    routines: [
      {
        id: "sat-mon-wed",
        days: "শনিবার • সোমবার • বুধবার",
        daysEn: "Sat • Mon • Wed",
        slots: [
          {
            time: "বিকাল ৪:০০ – ৫:০০ টা",
            period: "বিকাল",
            periodEn: "Afternoon",
            status: "ভর্তি চলছে",
          },
          {
            time: "সন্ধ্যা ৬:০০ – ৭:০০ টা",
            period: "সন্ধ্যা",
            periodEn: "Evening",
            status: "সীমিত আসন",
            isHot: true,
          },
        ],
      },
      {
        id: "sun-tue-thu",
        days: "রবিবার • মঙ্গলবার • বৃহস্পতিবার",
        daysEn: "Sun • Tue • Thu",
        slots: [
          {
            time: "সকাল ৭:০০ – ৮:০০ টা",
            period: "সকাল",
            periodEn: "Morning",
            status: "ভর্তি চলছে",
          },
          {
            time: "বিকাল ৩:০০ – ৪:০০ টা",
            period: "বিকাল",
            periodEn: "Afternoon",
            status: "নতুন ব্যাচ শুরু",
            isHot: true,
          },
          {
            time: "বিকাল ৪:০০ – ৫:০০ টা",
            period: "বিকাল",
            periodEn: "Afternoon",
            status: "ভর্তি চলছে",
          },
          {
            time: "বিকাল ৫:০০ – ৬:০০ টা",
            period: "বিকাল",
            periodEn: "Afternoon",
            status: "সীমিত আসন",
          },
        ],
      },
    ],
  },
  {
    id: "hsc-2028",
    tabLabel: "HSC 2028",
    title: "HSC - 2028 নতুন ব্যাচ",
    academicYear: "একাদশ শ্রেণি ফাউন্ডেশন (২০২৬–২৮ সেশন)",
    tag: "সম্পূর্ণ নতুন ব্যাচ",
    description:
      "নতুন শিক্ষার্থীদের জন্য রসায়নের প্রথম অধ্যায় থেকে গোছানো প্রস্তুতি। স্মার্ট ডিজিটাল বোর্ডে ভিজ্যুয়াল অ্যানিমেশন ও হ্যান্ডনোটসহ পাঠদান।",
    routines: [
      {
        id: "sat-mon-wed-28",
        days: "শনিবার • সোমবার • বুধবার",
        daysEn: "Sat • Mon • Wed",
        slots: [
          {
            time: "বিকাল ৩:০০ – ৪:০০ টা",
            period: "বিকাল",
            periodEn: "Afternoon",
            status: "নতুন ব্যাচ শুরু",
            isHot: true,
          },
          {
            time: "বিকাল ৫:০০ – ৬:০০ টা",
            period: "বিকাল",
            periodEn: "Afternoon",
            status: "ভর্তি চলছে",
          },
        ],
      },
      {
        id: "sun-tue-thu-28",
        days: "রবিবার • মঙ্গলবার • বৃহস্পতিবার",
        daysEn: "Sun • Tue • Thu",
        slots: [
          {
            time: "সন্ধ্যা ৬:০০ – ৭:০০ টা",
            period: "সন্ধ্যা",
            periodEn: "Evening",
            status: "ভর্তি চলছে",
          },
        ],
      },
    ],
  },
  {
    id: "honours",
    tabLabel: "Honours Chemistry",
    title: "অনার্স কেমিস্ট্রি কেয়ার",
    academicYear: "ডিগ্রি ও অনার্স ১ম, ২য় ও ৩য় বর্ষ",
    tag: "বিশ্ববিদ্যালয় ও কলেজ লেভেল",
    description:
      "অনার্স ফিজিক্যাল, অর্গানিক ও ইনঅর্গানিক কেমিস্ট্রির গভীর ধারণাগত পাঠ এবং বিগত বছরের বোর্ড ও জাতীয় বিশ্ববিদ্যালয়ের প্রশ্ন সমাধান।",
    routines: [
      {
        id: "weekend-honours",
        days: "শুক্রবার ও শনিবার (উইকেন্ড স্পেশাল)",
        daysEn: "Fri & Sat (Weekend Special)",
        slots: [
          {
            time: "সকাল ৯:০০ – ১১:০০ টা",
            period: "সকাল",
            periodEn: "Morning",
            status: "ভর্তি চলছে",
          },
          {
            time: "বিকাল ৩:৩০ – ৫:৩০ টা",
            period: "বিকাল",
            periodEn: "Afternoon",
            status: "ভর্তি চলছে",
          },
        ],
      },
      {
        id: "online-honours",
        days: "অনলাইন / প্রাইভেট মেন্টরশিপ",
        daysEn: "Online Evening Session",
        slots: [
          {
            time: "রাত ৮:০০ – ৯:৩০ টা",
            period: "রাত",
            periodEn: "Night",
            status: "সীমিত আসন",
            isHot: true,
          },
        ],
      },
    ],
  },
]

function getPeriodIcon(period: string) {
  switch (period) {
    case "সকাল":
      return <Sun className="h-4 w-4 text-amber-600" />
    case "বিকাল":
      return <Sunset className="h-4 w-4 text-[#ff7759]" />
    case "সন্ধ্যা":
    case "রাত":
    default:
      return <Moon className="h-4 w-4 text-[#17171c]" />
  }
}

export function ScheduleSection() {
  const [selectedBatch, setSelectedBatch] = React.useState<string>("hsc-2027")

  const currentProgram =
    batchPrograms.find((p) => p.id === selectedBatch) || batchPrograms[0]

  return (
    <section
      id="schedule"
      className="bg-[#ffffff] py-20 md:py-28 border-b border-[#e5e7eb]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header (Cohere Editorial Style) */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#d9d9dd] bg-[#eeece7] px-3 py-0.5 text-xs font-semibold text-[#17171c] mb-3">
            <Calendar className="h-3.5 w-3.5 text-[#ff7759]" />
            <span>সাপ্তাহিক রুটিন ও ব্যাচ শিডিউল</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#17171c] sm:text-4xl md:text-5xl leading-tight">
            আপনার সুবিধাজনক সময় ও ব্যাচ বেছে নিন
          </h2>
          <p className="mt-3 text-base text-[#616161] leading-relaxed">
            আলকেমিস্ট কেয়ারের প্রতিটি ব্যাচের সময়সূচি সারাবছর অপরিবর্তিত থাকে। প্রতিটি ব্যাচে নির্ধারিত সংখ্যক আসন থাকায় আগে আসলে আগে পাবেন ভিত্তিতে ভর্তি নিশ্চিত করা হয়।
          </p>
        </div>

        {/* beUI Motion Animated Pill Tabs (Centered) */}
        <div className="mb-10 flex justify-center w-full overflow-x-auto pb-2 sm:pb-0">
          <Tabs
            value={selectedBatch}
            onValueChange={setSelectedBatch}
            variant="pill"
            className="flex justify-center"
          >
            <TabsList className="bg-[#f1f5f9] border border-[#e2e8f0] p-1.5 rounded-full shadow-2xs">
              {batchPrograms.map((program) => (
                <TabsTrigger
                  key={program.id}
                  value={program.id}
                  className="px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold"
                  indicatorClassName="bg-[#0F172A] shadow-sm"
                >
                  {program.tabLabel}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Active Program Card & Overview (Cloudflare Blueprint Style) */}
        <div className="relative mb-8">
          {/* Outer Blueprint corner anchor nodes */}
          <span className="absolute -top-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
          <span className="absolute -top-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
          <span className="absolute -bottom-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
          <span className="absolute -bottom-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />

          <div className="border border-[#e2e8f0] bg-white p-4 sm:p-6 md:p-8 shadow-xs">
            {/* Header: Title, Category Tag, Academic Year, and Description */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#e2e8f0] pb-6 mb-6 sm:mb-8">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A]">
                    {currentProgram.title}
                  </h3>
                  <span className="rounded-full border border-[#FFB74D] bg-[#FFF3E0] px-2.5 py-0.5 text-xs font-bold text-[#E65100] shrink-0">
                    {currentProgram.tag}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#64748b]">
                  {currentProgram.academicYear}
                </p>
              </div>
              <p className="text-sm text-[#475569] max-w-lg leading-relaxed">
                {currentProgram.description}
              </p>
            </div>

            {/* Routine Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {currentProgram.routines.map((routine) => (
                <div
                  key={routine.id}
                  className="border border-[#e2e8f0] bg-[#F8FAFC]/50 flex flex-col justify-between transition-colors hover:border-[#0D47A1]/30"
                >
                  {/* Routine Header */}
                  <div className="border-b border-[#e2e8f0] bg-white p-3.5 sm:p-5 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <h4 className="font-display text-base sm:text-lg font-bold text-[#0F172A] leading-snug">
                        {routine.days}
                      </h4>
                      <p className="text-xs text-[#64748b] mt-0.5">
                        {routine.daysEn}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs font-bold text-[#0D47A1] bg-[#F0F7FF] border border-[#0D47A1]/15 px-2.5 py-1 rounded">
                      {routine.slots.length}টি শিফট
                    </span>
                  </div>

                  {/* Slot Rows (Divided stack) */}
                  <div className="divide-y divide-[#e2e8f0] bg-white">
                    {routine.slots.map((slot, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:p-4 flex items-center justify-between gap-2.5 sm:gap-4 hover:bg-[#F8FAFC] transition-colors"
                      >
                        {/* Time & Shift info */}
                        <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 flex-1">
                          <div className="h-8 w-8 sm:h-9 sm:w-9 bg-[#F0F7FF] border border-[#0D47A1]/20 flex items-center justify-center shrink-0 rounded-lg">
                            {getPeriodIcon(slot.period)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="font-display text-sm sm:text-base font-bold text-[#0F172A] leading-snug tabular-nums">
                              {slot.time}
                            </div>
                            <div className="text-[11px] sm:text-xs text-[#64748b] font-medium mt-0.5">
                              {slot.period} শিফট • {slot.periodEn}
                            </div>
                          </div>
                        </div>

                        {/* Status Badge */}
                        <div className="shrink-0">
                          <span
                            className={`inline-flex items-center text-[11px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border whitespace-nowrap ${
                              slot.status === "সীমিত আসন"
                                ? "bg-[#FFF3E0] border-[#FFB74D] text-[#E65100]"
                                : slot.status === "নতুন ব্যাচ শুরু"
                                ? "bg-[#E8F5E9] border-emerald-300 text-emerald-800"
                                : "bg-[#F0F7FF] border-[#0D47A1]/25 text-[#0D47A1]"
                            }`}
                          >
                            {slot.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Deduplicated Section Assurance Footer */}
            <div className="mt-6 sm:mt-8 pt-5 border-t border-[#e2e8f0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 text-xs text-[#64748b]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                <span className="font-medium text-[#0F172A]">
                  ক্লাস মিস হলে ব্যাকআপ সহায়তা, রেকর্ডেড ক্লাস ও লেকচার শিট প্রদান করা হয়।
                </span>
              </div>
              <span className="font-semibold text-[#E65100]">
                আগে আসলে আগে পাবেন ভিত্তিতে ব্যাচে আসন বরাদ্দ
              </span>
            </div>
          </div>
        </div>

        {/* Immediate Assistance Banner (Cloudflare Blueprint Style) */}
        <div className="relative">
          <span className="absolute -top-1.5 -left-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
          <span className="absolute -top-1.5 -right-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
          <span className="absolute -bottom-1.5 -left-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
          <span className="absolute -bottom-1.5 -right-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />

          <div className="border border-[#e2e8f0] bg-white p-4 sm:p-6 md:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left shadow-xs">
            <div>
              <div className="font-bold text-sm sm:text-base text-[#0F172A]">
                আপনার পছন্দের সময়ে ব্যাচের আসন খালি আছে কিনা নিশ্চিত নন?
              </div>
              <div className="text-xs text-[#64748b] mt-1">
                সরাসরি নয়ন স্যারের সাথে ফোনে কথা বলে আপনার কলেজ শিডিউলের সাথে মিলিয়ে নিন।
              </div>
            </div>
            <a href="tel:01780616187" className="w-full sm:w-auto">
              <Button
                size="sm"
                className="w-full sm:w-auto gap-2 bg-[#0D47A1] text-white hover:bg-[#0B3D91] px-5 py-2.5 text-xs font-bold shrink-0 rounded-none shadow-sm"
              >
                <Phone className="h-3.5 w-3.5 text-[#FFB74D]" />
                <span>০১৭৮০-৬১৬১৮৭ নম্বরে সরাসরি কল দিন</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

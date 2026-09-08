"use client"

import * as React from "react"
import {
  Calendar,
  Clock,
  Sparkles,
  Phone,
  MessageCircle,
  Sun,
  Sunset,
  Moon,
  GraduationCap,
  Flame,
  ArrowRight,
  ShieldAlert,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

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
  theme: "blue" | "orange" | "purple"
  slots: TimeSlot[]
}

interface BatchProgram {
  id: string
  tabLabel: string
  title: string
  academicYear: string
  tag: string
  tagVariant: "alchemist" | "success" | "navy"
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
    tagVariant: "alchemist",
    description:
      "এইচএসসি ২০২৭ ব্যাচের শিক্ষার্থীদের জন্য ১ম ও ২য় পত্রের অধ্যায়ভিত্তিক সুষম প্রস্তুতি। ব্যাচের সময়সূচি সারাবছর অপরিবর্তিত থাকে।",
    routines: [
      {
        id: "sat-mon-wed",
        days: "শনিবার • সোমবার • বুধবার",
        daysEn: "Sat • Mon • Wed",
        theme: "blue",
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
        theme: "orange",
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
    tagVariant: "success",
    description:
      "নতুন শিক্ষার্থীদের জন্য রসায়নের প্রথম অধ্যায় থেকে গোছানো প্রস্তুতি। স্মার্ট ডিজিটাল বোর্ডে ভিজ্যুয়াল অ্যানিমেশন ও হ্যান্ডনোটসহ পাঠদান।",
    routines: [
      {
        id: "sat-mon-wed-28",
        days: "শনিবার • সোমবার • বুধবার",
        daysEn: "Sat • Mon • Wed",
        theme: "blue",
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
        theme: "orange",
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
    tagVariant: "navy",
    description:
      "অনার্স ফিজিক্যাল, অর্গানিক ও ইনঅর্গানিক কেমিস্ট্রির গভীর ধারণাগত পাঠ এবং বিগত বছরের বোর্ড ও জাতীয় বিশ্ববিদ্যালয়ের প্রশ্ন সমাধান।",
    routines: [
      {
        id: "weekend-honours",
        days: "শুক্রবার ও শনিবার (উইকেন্ড স্পেশাল)",
        daysEn: "Fri & Sat (Weekend Special)",
        theme: "purple",
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
        theme: "blue",
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
      return <Sun className="h-4 w-4 text-amber-500" />
    case "বিকাল":
      return <Sunset className="h-4 w-4 text-orange-500" />
    case "সন্ধ্যা":
    case "রাত":
      return <Moon className="h-4 w-4 text-indigo-400" />
    default:
      return <Clock className="h-4 w-4 text-slate-400" />
  }
}

function getStatusBadge(status: TimeSlot["status"]) {
  switch (status) {
    case "নতুন ব্যাচ শুরু":
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 ring-1 ring-emerald-600/20 dark:bg-emerald-950/60 dark:text-emerald-300 dark:ring-emerald-500/30">
          <Sparkles className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
          {status}
        </span>
      )
    case "সীমিত আসন":
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-700 ring-1 ring-amber-600/20 dark:bg-amber-950/60 dark:text-amber-300 dark:ring-amber-500/30">
          <Flame className="h-3 w-3 text-orange-500" />
          {status}
        </span>
      )
    default:
      return (
        <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-[11px] font-semibold text-blue-700 ring-1 ring-blue-600/20 dark:bg-blue-950/60 dark:text-blue-300 dark:ring-blue-500/30">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
          {status}
        </span>
      )
  }
}

export function ScheduleSection() {
  const [activeTab, setActiveTab] = React.useState("hsc-2027")
  const activeProgram =
    batchPrograms.find((b) => b.id === activeTab) || batchPrograms[0]

  return (
    <section
      id="schedule"
      className="relative overflow-hidden bg-slate-50/70 py-16 sm:py-24 dark:bg-[#070d1e]"
    >
      {/* Background Subtle Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(249,115,22,0.06),rgba(255,255,255,0))]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <Badge
            variant="alchemist"
            className="mb-3 gap-1.5 px-3.5 py-1 text-xs font-semibold"
          >
            <Calendar className="h-3.5 w-3.5 text-orange-500" />
            <span>ফিক্সড ক্লাস শিডিউল (Fixed Timetable)</span>
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            আপনার সুবিধাজনক সময়ের ব্যাচ বেছে নিন
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-slate-600 sm:text-base dark:text-slate-300">
            ক্লাসের সময়সূচি সারাবছর নির্দিষ্ট থাকে। আপনার কলেজ বা অন্যান্য বিষয়ের সাথে মিলিয়ে সেরা স্লট বেছে নিন।
          </p>
        </div>

        {/* Premium Batch Switcher Bar */}
        <div className="mt-8 flex justify-center">
          <div className="inline-flex max-w-full gap-1 overflow-x-auto rounded-2xl border border-slate-200/90 bg-white p-1.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
            {batchPrograms.map((b) => {
              const isActive = b.id === activeTab
              return (
                <button
                  key={b.id}
                  onClick={() => setActiveTab(b.id)}
                  className={`flex items-center gap-2 whitespace-nowrap rounded-xl px-4 py-2.5 text-xs font-bold transition-[color,background-color,box-shadow,transform] duration-150 ease-out active:scale-[0.96] sm:px-6 sm:text-sm ${
                    isActive
                      ? "bg-[#0F2C59] text-white shadow-md shadow-blue-900/20 dark:bg-orange-500 dark:text-white"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
                  }`}
                >
                  <GraduationCap
                    className={`h-4 w-4 ${
                      isActive
                        ? "text-orange-400 dark:text-white"
                        : "text-slate-400"
                    }`}
                  />
                  <span>{b.tabLabel}</span>
                  {b.id === "hsc-2028" && (
                    <span className="rounded-full bg-emerald-500 px-1.5 py-0.2 text-[9px] font-extrabold text-white">
                      NEW
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Main Schedule Board Card */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
          {/* Top Header Banner */}
          <div className="border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-orange-50/40 p-5 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-orange-950/20 sm:p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-xl font-black text-slate-900 sm:text-2xl dark:text-white">
                    {activeProgram.title}
                  </h3>
                  <Badge variant={activeProgram.tagVariant} className="text-xs">
                    {activeProgram.tag}
                  </Badge>
                </div>
                <p className="mt-1 text-xs font-medium text-slate-600 sm:text-sm dark:text-slate-300">
                  {activeProgram.academicYear} • {activeProgram.description}
                </p>
              </div>

              {/* Quick WhatsApp Seat Booking for Active Program */}
              <a
                href={`https://wa.me/8801780616187?text=${encodeURIComponent(
                  `আসসালামু আলাইকুম নয়ন স্যার! আমি ${activeProgram.title} এর সিট ও ভর্তি সংক্রান্ত তথ্য জানতে চাচ্ছি।`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Button className="w-full gap-2 rounded-xl bg-emerald-600 ps-3.5 pe-4 text-xs font-bold text-white shadow-xs hover:bg-emerald-700 sm:w-auto sm:text-sm">
                  <MessageCircle className="h-4 w-4" />
                  <span>সিট নিশ্চিত করুন</span>
                </Button>
              </a>
            </div>
          </div>

          {/* Schedule Body: Timetable Routine Groups */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {activeProgram.routines.map((routine) => {
                const isBlue = routine.theme === "blue"
                const isPurple = routine.theme === "purple"

                return (
                  <div
                    key={routine.id}
                    className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/50 shadow-xs dark:border-slate-800 dark:bg-slate-950/40"
                  >
                    {/* Routine Group Header */}
                    <div
                      className={`flex items-center justify-between border-b px-4 py-3.5 sm:px-5 ${
                        isBlue
                          ? "border-blue-100 bg-blue-50/70 text-[#0F2C59] dark:border-blue-900/40 dark:bg-blue-950/40 dark:text-blue-300"
                          : isPurple
                          ? "border-purple-100 bg-purple-50/70 text-purple-900 dark:border-purple-900/40 dark:bg-purple-950/40 dark:text-purple-300"
                          : "border-orange-100 bg-orange-50/70 text-orange-900 dark:border-orange-900/40 dark:bg-orange-950/40 dark:text-orange-300"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`flex h-7 w-7 items-center justify-center rounded-lg text-white ${
                            isBlue
                              ? "bg-[#0F2C59] dark:bg-blue-600"
                              : isPurple
                              ? "bg-purple-600"
                              : "bg-orange-500"
                          }`}
                        >
                          <Calendar className="h-3.5 w-3.5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold sm:text-base">
                            {routine.days}
                          </h4>
                          <span className="text-[10px] font-medium opacity-75">
                            {routine.daysEn}
                          </span>
                        </div>
                      </div>
                      <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] font-bold shadow-2xs dark:bg-slate-900/80">
                        {routine.slots.length}টি ব্যাচ স্লট
                      </span>
                    </div>

                    {/* Routine Slots List */}
                    <div className="divide-y divide-slate-100 p-3 sm:p-4 dark:divide-slate-800/80">
                      {routine.slots.map((slot, sIdx) => {
                        const slotWaUrl = `https://wa.me/8801780616187?text=${encodeURIComponent(
                          `আসসালামু আলাইকুম নয়ন স্যার! আমি ${activeProgram.title} এর [${routine.days} - ${slot.time}] ব্যাচে ভর্তি হতে আগ্রহী।`
                        )}`

                        return (
                          <div
                            key={sIdx}
                            className="group flex flex-col gap-2.5 py-3 transition-[background-color] duration-150 ease-out first:pt-1 last:pb-1 sm:flex-row sm:items-center sm:justify-between"
                          >
                            {/* Left: Time & Period */}
                            <div className="flex items-center gap-3">
                              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-2xs ring-1 ring-slate-200/80 dark:bg-slate-900 dark:ring-slate-800">
                                {getPeriodIcon(slot.period)}
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="whitespace-nowrap text-sm font-extrabold text-slate-900 sm:text-base dark:text-white">
                                    {slot.time}
                                  </span>
                                  <span className="rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                                    {slot.periodEn}
                                  </span>
                                </div>
                                <div className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                                  <span>সপ্তাহের নির্ধারিত শিডিউল</span>
                                </div>
                              </div>
                            </div>

                            {/* Right: Status Tag & 1-Tap Booking Button */}
                            <div className="flex items-center justify-between gap-2.5 sm:justify-end">
                              {getStatusBadge(slot.status)}

                              <a
                                href={slotWaUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="shrink-0"
                              >
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 gap-1 rounded-lg border border-emerald-200 bg-white ps-2.5 pe-2 text-xs font-bold text-emerald-700 shadow-2xs hover:bg-emerald-600 hover:text-white dark:border-emerald-900/60 dark:bg-slate-900 dark:text-emerald-300 dark:hover:bg-emerald-600 dark:hover:text-white"
                                >
                                  <span>সিট বুক</span>
                                  <ArrowRight className="h-3 w-3" />
                                </Button>
                              </a>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom Informative Ribbon */}
            <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 text-xs sm:flex-row sm:items-center sm:justify-between dark:border-slate-800 dark:bg-slate-950/60">
              <div className="flex items-start gap-2.5 text-slate-600 dark:text-slate-300">
                <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />
                <span>
                  <strong className="text-slate-900 dark:text-white">
                    বিশেষ দ্রষ্টব্য:
                  </strong>{" "}
                  সিলেবাস ও অধ্যায় পরিবর্তনের সাথে ক্লাসের নির্ধারিত সময় কখনো পরিবর্তন হয় না। ফলে অন্য কোনো বিষয়ের সাথে সময়ের সংঘাত হওয়ার সম্ভাবনা নেই।
                </span>
              </div>
              <a
                href="tel:+8801780616187"
                className="flex shrink-0 items-center gap-1.5 font-bold text-[#0F2C59] hover:underline dark:text-blue-300"
              >
                <Phone className="h-3.5 w-3.5 text-orange-500" />
                <span>হটলাইন: ০১৭৮০-৬১৬১৮৭</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

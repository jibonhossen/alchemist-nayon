"use client"

import * as React from "react"
import {
  GraduationCap,
  Building2,
  Search,
  X,
  CheckCircle2,
  Stethoscope,
  Cpu,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { NumberTicker } from "@/components/motion/number-ticker"

interface Student {
  name: string
  institute: string
  category: "all" | "medical" | "engineering" | "university"
  highlight: string
  session: string
}

const students: Student[] = [
  // Medical
  {
    name: "শিফসা নাজনিন",
    institute: "যশোর মেডিকেল কলেজ (JMC)",
    category: "medical",
    highlight: "মেডিকেল ভর্তি",
    session: "সেশন ২০২৩-২৪",
  },
  {
    name: "সিজাত মোর্তজা অয়ন",
    institute: "মাগুরা মেডিকেল কলেজ",
    category: "medical",
    highlight: "মেডিকেল ভর্তি",
    session: "সেশন ২০২৩-২৪",
  },
  {
    name: "জেনিফা তামার্না স্নিগ্ধা",
    institute: "কক্সবাজার মেডিকেল কলেজ",
    category: "medical",
    highlight: "মেডিকেল ভর্তি",
    session: "সেশন ২০২৩-২৪",
  },
  {
    name: "উম্মে কুলসুম তারিন",
    institute: "পটুয়াখালী মেডিকেল কলেজ",
    category: "medical",
    highlight: "মেডিকেল ভর্তি",
    session: "সেশন ২০২৩-২৪",
  },
  // Engineering
  {
    name: "এম. এম মাহিম",
    institute: "কুয়েট (KUET) - পুরকৌশল",
    category: "engineering",
    highlight: "ইঞ্জিনিয়ারিং",
    session: "সেশন ২০২৩-২৪",
  },
  {
    name: "কুশল চন্দ্র পাল",
    institute: "শাবিপ্রবি (SUST)",
    category: "engineering",
    highlight: "বিজ্ঞান ও প্রযুক্তি",
    session: "সেশন ২০২৩-২৪",
  },
  {
    name: "পুষ্পিতা রায়",
    institute: "সরকারি টেক্সটাইল ইঞ্জিনিয়ারিং কলেজ",
    category: "engineering",
    highlight: "টেক্সটাইল ইঞ্জিনিয়ারিং",
    session: "সেশন ২০২৩-২৪",
  },
  // University
  {
    name: "মো: তাসনিম আলিফ",
    institute: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU)",
    category: "university",
    highlight: "পাবলিক বিশ্ববিদ্যালয়",
    session: "সেশন ২০২৩-২৪",
  },
  {
    name: "রিয়াজুল ইসলাম",
    institute: "খুলনা বিশ্ববিদ্যালয় (KU)",
    category: "university",
    highlight: "পাবলিক বিশ্ববিদ্যালয়",
    session: "সেশন ২০২৩-২৪",
  },
  {
    name: "ইরিনা জেরিন",
    institute: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয় (BAU)",
    category: "university",
    highlight: "কৃষি গুচ্ছ",
    session: "সেশন ২০২৩-২৪",
  },
  {
    name: "কাজী সুমাইয়া",
    institute: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয় (BAU)",
    category: "university",
    highlight: "কৃষি গুচ্ছ",
    session: "সেশন ২০২৩-২৪",
  },
  {
    name: "সুমাইয়া খাতুন",
    institute: "রাজশাহী বিশ্ববিদ্যালয় (RU)",
    category: "university",
    highlight: "পাবলিক বিশ্ববিদ্যালয়",
    session: "সেশন ২০২৩-২৪",
  },
]

export function HallOfFame() {
  const [selectedFilter, setSelectedFilter] = React.useState<string>("all")
  const [searchQuery, setSearchQuery] = React.useState("")

  const counts = React.useMemo(() => {
    return {
      all: students.length,
      medical: students.filter((s) => s.category === "medical").length,
      engineering: students.filter((s) => s.category === "engineering").length,
      university: students.filter((s) => s.category === "university").length,
    }
  }, [])

  const filteredStudents = students.filter((s) => {
    const matchesFilter =
      selectedFilter === "all" || s.category === selectedFilter
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.institute.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const filterOptions = [
    { label: "সকল কৃতি শিক্ষার্থী", shortLabel: "সকল", value: "all", count: counts.all },
    { label: "মেডিকেল ভর্তি", shortLabel: "মেডিকেল", value: "medical", count: counts.medical },
    { label: "ইঞ্জিনিয়ারিং", shortLabel: "ইঞ্জিনিয়ারিং", value: "engineering", count: counts.engineering },
    { label: "পাবলিক বিশ্ববিদ্যালয়", shortLabel: "বিশ্ববিদ্যালয়", value: "university", count: counts.university },
  ]

  return (
    <section
      id="hall-of-fame"
      className="bg-white py-12 md:py-24 pb-28 md:pb-24 border-b border-[#e5e7eb]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-8 md:mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#ffad9b] bg-[#fff4f1] px-3 py-0.5 text-xs font-semibold text-[#ff7759] mb-2.5 sm:mb-3">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>সাফল্যের ইতিহাস ও হল অব ফেম</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#17171c] leading-tight">
            আলকেমিস্ট নয়ন স্যারের কৃতী শিক্ষার্থীদের বিজয়গাথা
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#616161] leading-relaxed">
            মেডিকেল কলেজ, বুয়েট-কুয়েট এবং দেশের শীর্ষ পাবলিক বিশ্ববিদ্যালয়ের বিজ্ঞান অনুষদে চান্স পাওয়া আলকেমিস্ট শিক্ষার্থীদের একাংশ।
          </p>
        </div>

        {/* Cloudflare-Style Technical Blueprint Stat Strip (Matching Hero Section Design) */}
        <div className="relative mb-8 sm:mb-12 w-full">
          {/* Blueprint corner anchor nodes */}
          <span className="absolute -top-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
          <span className="absolute -top-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
          <span className="absolute -bottom-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
          <span className="absolute -bottom-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />

          {/* Mobile center blueprint intersection node */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white sm:hidden pointer-events-none" />

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px border border-[#e2e8f0] bg-[#e2e8f0] text-center shadow-xs">
            {/* Medical */}
            <button
              type="button"
              onClick={() => setSelectedFilter((prev) => (prev === "medical" ? "all" : "medical"))}
              className={cn(
                "w-full p-4 sm:p-6 lg:p-7 transition-all flex flex-col items-center justify-center cursor-pointer select-none text-center relative active:scale-[0.98]",
                selectedFilter === "medical"
                  ? "bg-[#0D47A1]/8 ring-2 ring-inset ring-[#0D47A1] z-10 shadow-xs"
                  : "bg-white hover:bg-slate-50/80"
              )}
              aria-label="মেডিকেল ভর্তি শিক্ষার্থীদের তালিকা ফিল্টার করুন"
            >
              <div className="flex items-center justify-center font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#0D47A1] whitespace-nowrap leading-tight">
                <NumberTicker value={4} locale="bn-BD" suffix="+" duration={0.8} />
                <span className="text-base sm:text-xl lg:text-2xl font-bold ml-1 text-[#0D47A1]">মেডিকেল</span>
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#475569] text-center">
                যশোর, মাগুরা ও কক্সবাজার
              </div>
            </button>

            {/* Engineering */}
            <button
              type="button"
              onClick={() => setSelectedFilter((prev) => (prev === "engineering" ? "all" : "engineering"))}
              className={cn(
                "w-full p-4 sm:p-6 lg:p-7 transition-all flex flex-col items-center justify-center cursor-pointer select-none text-center relative active:scale-[0.98]",
                selectedFilter === "engineering"
                  ? "bg-[#0288D1]/8 ring-2 ring-inset ring-[#0288D1] z-10 shadow-xs"
                  : "bg-white hover:bg-slate-50/80"
              )}
              aria-label="ইঞ্জিনিয়ারিং শিক্ষার্থীদের তালিকা ফিল্টার করুন"
            >
              <div className="flex items-center justify-center font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#0288D1] whitespace-nowrap leading-tight">
                <NumberTicker value={3} locale="bn-BD" suffix="+" duration={0.8} />
                <span className="text-base sm:text-xl lg:text-2xl font-bold ml-1 text-[#0288D1]">ইঞ্জিনিয়ারিং</span>
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#475569] text-center">
                কুয়েট, শাবিপ্রবি ও টেক্সটাইল
              </div>
            </button>

            {/* Public Varsity */}
            <button
              type="button"
              onClick={() => setSelectedFilter((prev) => (prev === "university" ? "all" : "university"))}
              className={cn(
                "w-full p-4 sm:p-6 lg:p-7 transition-all flex flex-col items-center justify-center cursor-pointer select-none text-center relative active:scale-[0.98]",
                selectedFilter === "university"
                  ? "bg-[#0F172A]/8 ring-2 ring-inset ring-[#0F172A] z-10 shadow-xs"
                  : "bg-white hover:bg-slate-50/80"
              )}
              aria-label="পাবলিক বিশ্ববিদ্যালয় শিক্ষার্থীদের তালিকা ফিল্টার করুন"
            >
              <div className="flex items-center justify-center font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] whitespace-nowrap leading-tight">
                <NumberTicker value={7} locale="bn-BD" suffix="+" duration={0.9} />
                <span className="text-base sm:text-xl lg:text-2xl font-bold ml-1 text-[#0F172A]">ভার্সিটি</span>
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#475569] text-center">
                জাবি, খুবি, বাকৃবি ও রাবি
              </div>
            </button>

            {/* Board Results */}
            <button
              type="button"
              onClick={() => setSelectedFilter("all")}
              className={cn(
                "w-full p-4 sm:p-6 lg:p-7 transition-all flex flex-col items-center justify-center cursor-pointer select-none text-center relative active:scale-[0.98]",
                selectedFilter === "all"
                  ? "bg-white hover:bg-slate-50/80"
                  : "bg-white hover:bg-slate-50/80"
              )}
              aria-label="সকল কৃতি শিক্ষার্থীদের তালিকা দেখুন"
            >
              <div className="flex items-center justify-center font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#E65100] whitespace-nowrap leading-tight">
                <NumberTicker value={100} locale="bn-BD" suffix="+" duration={1.2} />
                <span className="text-sm sm:text-lg lg:text-2xl font-bold ml-1 text-[#E65100]">জিপিএ-৫</span>
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-[#475569] text-center">
                রসায়ন A+
              </div>
            </button>
          </div>
        </div>

        {/* Filter Controls & Search: Horizontal Swipeable Row on Mobile */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 mb-6">
          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 py-1">
            {filterOptions.map((filter) => {
              const active = selectedFilter === filter.value
              return (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center gap-1.5 active:scale-[0.96]",
                    active
                      ? "bg-[#17171c] text-white shadow-xs"
                      : "bg-[#f6f5f3] hover:bg-[#eeece7] text-[#17171c] border border-[#d9d9dd]"
                  )}
                >
                  <span>{filter.label}</span>
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.2 rounded-full font-bold",
                      active ? "bg-white/20 text-white" : "bg-[#eeece7] text-[#75758a]"
                    )}
                  >
                    {filter.count}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#75758a]" />
            <input
              type="text"
              placeholder="শিক্ষার্থী বা প্রতিষ্ঠানের নাম খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[#d9d9dd] bg-[#f6f5f3] py-1.5 pl-9 pr-8 text-xs text-[#17171c] placeholder:text-[#93939f] focus:bg-white focus:outline-none focus:border-[#17171c] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-2.5 text-[#75758a] hover:text-[#17171c] cursor-pointer"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile View: Elite Scholar Identity List (better-interface compliant) */}
        <ul
          role="list"
          aria-label="কৃতী শিক্ষার্থীদের তালিকা"
          className="space-y-2.5 block md:hidden"
        >
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, idx) => {
              const isMedical = student.category === "medical"
              const isEngineering = student.category === "engineering"
              const isUniversity = student.category === "university"

              return (
                <li
                  key={idx}
                  className="rounded-2xl border border-[#e2e8f0] bg-white p-3 sm:p-3.5 shadow-2xs hover:border-slate-300 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-3">
                    {/* Concentric Domain Emblem */}
                    <div
                      className={cn(
                        "h-10 w-10 rounded-xl flex items-center justify-center shrink-0 border transition-transform",
                        isMedical && "bg-rose-50/90 text-rose-700 border-rose-200/70",
                        isEngineering && "bg-sky-50/90 text-[#0369a1] border-sky-200/70",
                        isUniversity && "bg-indigo-50/90 text-[#0D47A1] border-indigo-200/70"
                      )}
                      aria-hidden="true"
                    >
                      {isMedical && <Stethoscope className="h-4 w-4 text-rose-600" />}
                      {isEngineering && <Cpu className="h-4 w-4 text-[#0369a1]" />}
                      {isUniversity && <Building2 className="h-4 w-4 text-[#0D47A1]" />}
                    </div>

                    {/* Student Name, Institution & Meta */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="font-display text-[15px] sm:text-base font-bold text-[#0F172A] tracking-tight leading-snug truncate">
                          {student.name}
                        </h4>
                        <span className="text-[11px] font-medium text-[#64748b] shrink-0">
                          {student.session}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-xs text-[#475569] font-medium truncate">
                          <Building2 className="h-3 w-3 text-[#94a3b8] shrink-0" aria-hidden="true" />
                          <span className="truncate">{student.institute}</span>
                        </div>
                        <span
                          className={cn(
                            "text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0",
                            isMedical && "bg-rose-50 text-rose-700 border-rose-200/80",
                            isEngineering && "bg-sky-50 text-[#0369a1] border-sky-200/80",
                            isUniversity && "bg-indigo-50 text-[#0D47A1] border-indigo-200/80"
                          )}
                        >
                          {student.highlight}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })
          ) : (
            <li className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] py-10 text-center text-xs text-[#64748b]">
              কোনো তথ্য পাওয়া যায়নি। ফিল্টার বা সার্চ পরিবর্তন করে আবার চেষ্টা করুন।
            </li>
          )}
        </ul>

        {/* Desktop View: Cohere Research-Table Format */}
        <div className="hidden md:block rounded-[22px] border border-[#d9d9dd] bg-white overflow-hidden shadow-xs">
          {/* Table Header */}
          <div className="grid grid-cols-12 px-6 py-3.5 bg-[#eeece7]/60 border-b border-[#d9d9dd] text-xs font-bold text-[#17171c]">
            <div className="col-span-5">শিক্ষার্থীর নাম</div>
            <div className="col-span-4">ভর্তিকৃত প্রতিষ্ঠান ও অনুষদ</div>
            <div className="col-span-3 text-right">বিভাগ / ক্যাটাগরি</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-[#e5e7eb]">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-12 px-6 py-4 items-center hover:bg-[#fcfbf9] transition-colors"
                >
                  <div className="col-span-5 flex items-center gap-3">
                    <div
                      className={cn(
                        "h-8 w-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 border",
                        student.category === "medical" && "bg-rose-50 text-rose-700 border-rose-200",
                        student.category === "engineering" && "bg-emerald-50 text-emerald-800 border-emerald-200",
                        student.category === "university" && "bg-indigo-50 text-indigo-700 border-indigo-200"
                      )}
                    >
                      {student.name.slice(0, 1)}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-[#17171c]">
                        {student.name}
                      </div>
                      <div className="text-[11px] text-[#75758a]">
                        {student.session} • আলকেমিস্ট কেয়ার
                      </div>
                    </div>
                  </div>

                  <div className="col-span-4">
                    <span className="font-semibold text-xs text-[#17171c] bg-[#f6f5f3] px-2.5 py-1 rounded-md border border-[#e5e7eb]">
                      {student.institute}
                    </span>
                  </div>

                  <div className="col-span-3 text-right flex items-center justify-end gap-2">
                    <Badge
                      variant={
                        student.category === "medical"
                          ? "coral"
                          : student.category === "engineering"
                          ? "green"
                          : "navy"
                      }
                      className="text-xs"
                    >
                      {student.highlight}
                    </Badge>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-12 text-center text-xs text-[#75758a]">
                কোনো তথ্য পাওয়া যায়নি। ফিল্টার বা সার্চ পরিবর্তন করে আবার চেষ্টা করুন।
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}


"use client"

import * as React from "react"
import {
  GraduationCap,
  Stethoscope,
  Cpu,
  Building2,
  Sparkles,
  Search,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

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

  const filteredStudents = students.filter((s) => {
    const matchesFilter =
      selectedFilter === "all" || s.category === selectedFilter
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.institute.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <section
      id="hall-of-fame"
      className="bg-white py-20 md:py-28 border-b border-[#e5e7eb]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-[#ffad9b] bg-[#fff4f1] px-3 py-0.5 text-xs font-semibold text-[#ff7759] mb-3">
            <GraduationCap className="h-3.5 w-3.5" />
            <span>সাফল্যের ইতিহাস ও হল অব ফেম</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#17171c] sm:text-4xl md:text-5xl leading-tight">
            আলকেমিস্ট নয়ন স্যারের কৃতী শিক্ষার্থীদের বিজয়গাথা
          </h2>
          <p className="mt-3 text-base text-[#616161] leading-relaxed">
            মেডিকেল কলেজ, বুয়েট-কুয়েট এবং দেশের শীর্ষ পাবলিক বিশ্ববিদ্যালয়ের বিজ্ঞান অনুষদে চান্স পাওয়া আলকেমিস্ট শিক্ষার্থীদের একাংশ।
          </p>
        </div>

        {/* Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="rounded-2xl border border-[#d9d9dd] bg-[#eeece7]/50 p-5">
            <div className="flex items-center gap-2 text-rose-700 mb-1">
              <Stethoscope className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">মেডিকেল</span>
            </div>
            <div className="font-display text-2xl font-bold text-[#17171c]">৪+ শিক্ষার্থী</div>
            <div className="text-xs text-[#75758a]">যশোর, মাগুরা ও কক্সবাজার মেডিকেল</div>
          </div>

          <div className="rounded-2xl border border-[#d9d9dd] bg-[#eeece7]/50 p-5">
            <div className="flex items-center gap-2 text-[#003c33] mb-1">
              <Cpu className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">ইঞ্জিনিয়ারিং</span>
            </div>
            <div className="font-display text-2xl font-bold text-[#17171c]">৩+ শিক্ষার্থী</div>
            <div className="text-xs text-[#75758a]">কুয়েট, শাবিপ্রবি ও টেক্সটাইল</div>
          </div>

          <div className="rounded-2xl border border-[#d9d9dd] bg-[#eeece7]/50 p-5">
            <div className="flex items-center gap-2 text-indigo-700 mb-1">
              <Building2 className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">পাবলিক ভার্সিটি</span>
            </div>
            <div className="font-display text-2xl font-bold text-[#17171c]">৭+ শিক্ষার্থী</div>
            <div className="text-xs text-[#75758a]">জাবি, খুবি, বাকৃবি ও রাবি</div>
          </div>

          <div className="rounded-2xl border border-[#d9d9dd] bg-[#eeece7]/50 p-5">
            <div className="flex items-center gap-2 text-[#ff7759] mb-1">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs font-bold uppercase tracking-wider">বোর্ড ফলাফল</span>
            </div>
            <div className="font-display text-2xl font-bold text-[#17171c]">১০০+ A+</div>
            <div className="text-xs text-[#75758a]">রসায়ন ১ম ও ২য় পত্রে জিপিএ ৫.০০</div>
          </div>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {[
              { label: "সকল কৃতি শিক্ষার্থী", value: "all" },
              { label: "মেডিকেল ভর্তি", value: "medical" },
              { label: "ইঞ্জিনিয়ারিং", value: "engineering" },
              { label: "পাবলিক বিশ্ববিদ্যালয়", value: "university" },
            ].map((filter) => {
              const active = selectedFilter === filter.value
              return (
                <button
                  key={filter.value}
                  onClick={() => setSelectedFilter(filter.value)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? "bg-[#17171c] text-white"
                      : "bg-white border border-[#d9d9dd] text-[#17171c] hover:bg-[#eeece7]"
                  }`}
                >
                  {filter.label}
                </button>
              )
            })}
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-[#75758a]" />
            <input
              type="text"
              placeholder="শিক্ষার্থী বা প্রতিষ্ঠানের নাম খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-64 rounded-full border border-[#d9d9dd] bg-[#f6f5f3] py-1.5 pl-9 pr-4 text-xs text-[#17171c] placeholder:text-[#93939f] focus:bg-white focus:outline-none focus:border-[#17171c]"
            />
          </div>
        </div>

        {/* Cohere Research-Table Format */}
        <div className="rounded-[22px] border border-[#d9d9dd] bg-white overflow-hidden shadow-xs">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 px-6 py-3.5 bg-[#eeece7]/60 border-b border-[#d9d9dd] text-xs font-bold text-[#17171c]">
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
                  className="grid grid-cols-1 md:grid-cols-12 px-6 py-4 items-center hover:bg-[#fcfbf9] transition-colors gap-2 md:gap-0"
                >
                  <div className="col-span-5 flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-[#eeece7] border border-[#d9d9dd] flex items-center justify-center font-bold text-xs text-[#17171c] shrink-0">
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

                  <div className="col-span-3 md:text-right flex items-center md:justify-end gap-2">
                    <Badge
                      variant={
                        student.category === "medical"
                          ? "coral"
                          : student.category === "engineering"
                          ? "green"
                          : "stone"
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
                কোনো তথ্য পাওয়া যায়নি। ফিল্টার পরিবর্তন করে আবার চেষ্টা করুন।
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

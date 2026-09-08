"use client"

import * as React from "react"
import Image from "next/image"
import {
  GraduationCap,
  Award,
  Sparkles,
  Stethoscope,
  Cpu,
  Building2,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface Student {
  name: string
  institute: string
  category: "medical" | "engineering" | "university"
  highlight?: string
}

const students: Student[] = [
  // Medical
  {
    name: "শিফসা নাজনিন",
    institute: "যশোর মেডিকেল কলেজ",
    category: "medical",
    highlight: "মেডিকেল চান্স",
  },
  {
    name: "সিজাত মোর্তজা অয়ন",
    institute: "মাগুরা মেডিকেল কলেজ",
    category: "medical",
    highlight: "মেডিকেল চান্স",
  },
  {
    name: "জেনিফা তামার্না স্নিগ্ধা",
    institute: "কক্সবাজার মেডিকেল কলেজ",
    category: "medical",
    highlight: "মেডিকেল চান্স",
  },
  {
    name: "উম্মে কুলসুম তারিন",
    institute: "পটুয়াখালী মেডিকেল কলেজ",
    category: "medical",
    highlight: "মেডিকেল চান্স",
  },
  // Engineering
  {
    name: "এম. এম মাহিম",
    institute: "কুয়েট (KUET)",
    category: "engineering",
    highlight: "ইঞ্জিনিয়ারিং",
  },
  {
    name: "কুশল চন্দ্র পাল",
    institute: "শাবিপ্রবি (SUST)",
    category: "engineering",
    highlight: "ইঞ্জিনিয়ারিং ও বিজ্ঞান",
  },
  {
    name: "পুষ্পিতা রায়",
    institute: "সরকারি টেক্সটাইল ইঞ্জিনিয়ারিং কলেজ",
    category: "engineering",
    highlight: "টেক্সটাইল ইঞ্জিনিয়ারিং",
  },
  // Top Public & Agri
  {
    name: "মো: তাসনিম আলিফ",
    institute: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
    category: "university",
    highlight: "পাবলিক বিশ্ববিদ্যালয়",
  },
  {
    name: "রিয়াজুল ইসলাম",
    institute: "খুলনা বিশ্ববিদ্যালয়",
    category: "university",
    highlight: "পাবলিক বিশ্ববিদ্যালয়",
  },
  {
    name: "ইরিনা জেরিন",
    institute: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয়",
    category: "university",
    highlight: "কৃষি বিশ্ববিদ্যালয়",
  },
  {
    name: "কাজী সুমাইয়া",
    institute: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয়",
    category: "university",
    highlight: "কৃষি বিশ্ববিদ্যালয়",
  },
  {
    name: "মৌতথি জোবভী মিতু",
    institute: "যবিপ্রবি (JUST)",
    category: "university",
    highlight: "বিজ্ঞান ও প্রযুক্তি",
  },
  {
    name: "লামইয়া আক্তার",
    institute: "যবিপ্রবি (JUST)",
    category: "university",
    highlight: "বিজ্ঞান ও প্রযুক্তি",
  },
  {
    name: "তৈয়িবা ইয়াসমিন",
    institute: "খুলনা কৃষি বিশ্ববিদ্যালয়",
    category: "university",
    highlight: "কৃষি বিশ্ববিদ্যালয়",
  },
  {
    name: "সাইমা আক্তার",
    institute: "খুলনা কৃষি বিশ্ববিদ্যালয়",
    category: "university",
    highlight: "কৃষি বিশ্ববিদ্যালয়",
  },
  {
    name: "আফরিন আক্তার মিষ্টি",
    institute: "চট্টগ্রাম বিশ্ববিদ্যালয়",
    category: "university",
    highlight: "পাবলিক বিশ্ববিদ্যালয়",
  },
  {
    name: "সাদি আরাফাত জামান",
    institute: "বরিশাল বিশ্ববিদ্যালয়",
    category: "university",
    highlight: "পাবলিক বিশ্ববিদ্যালয়",
  },
  {
    name: "ইয়ামিন হোসেন",
    institute: "বরিশাল বিশ্ববিদ্যালয়",
    category: "university",
    highlight: "পাবলিক বিশ্ববিদ্যালয়",
  },
  {
    name: "ওয়ালিদ হুসাইন",
    institute: "পবিপ্রবি (PSTU)",
    category: "university",
    highlight: "বিজ্ঞান ও প্রযুক্তি",
  },
  {
    name: "সজনি খাতুন",
    institute: "সুবিপ্রবি",
    category: "university",
    highlight: "বিজ্ঞান ও প্রযুক্তি",
  },
  {
    name: "জাকিয়া সুলতানা",
    institute: "গুচ্ছ বিশ্ববিদ্যালয়",
    category: "university",
    highlight: "জিএসটি গুচ্ছ",
  },
  {
    name: "আফসানা",
    institute: "গোবিপ্রবি",
    category: "university",
    highlight: "বিজ্ঞান ও প্রযুক্তি",
  },
]

export function HallOfFame() {
  const [activeCategory, setActiveCategory] = React.useState<
    "all" | "medical" | "engineering" | "university"
  >("all")
  const [showBannerModal, setShowBannerModal] = React.useState(false)

  const filteredStudents =
    activeCategory === "all"
      ? students
      : students.filter((s) => s.category === activeCategory)

  return (
    <section
      id="hall-of-fame"
      className="relative overflow-hidden bg-slate-50/80 py-20 dark:bg-[#081026]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <Badge
            variant="alchemist"
            className="mb-3 gap-1.5 px-3.5 py-1 text-xs font-semibold"
          >
            <Award className="h-3.5 w-3.5 text-orange-500" />
            <span>সাফল্যের গৌরবগাথা (Hall of Fame)</span>
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            ২০২৫ সালে চান্সপ্রাপ্ত শিক্ষার্থীদের একাংশ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-slate-600 sm:text-base dark:text-slate-300">
            পরিকল্পিত পড়াশোনা ও আলকেমিস্ট কেমিস্ট্রি কেয়ারের সঠিক নির্দেশনায় আমাদের শিক্ষার্থীরা জায়গা করে নিয়েছে দেশের সেরা মেডিকেল, ইঞ্জিনিয়ারিং ও পাবলিক বিশ্ববিদ্যালয়ে।
          </p>
        </div>

        {/* Success Metrics Badges */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="flex flex-col items-center rounded-2xl border border-red-200/80 bg-red-50/60 p-4 text-center dark:border-red-950 dark:bg-red-950/30">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div className="mt-2 text-2xl font-black text-red-700 dark:text-red-400">
              ৪+
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              সরকারি মেডিকেল কলেজ
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-blue-200/80 bg-blue-50/60 p-4 text-center dark:border-blue-950 dark:bg-blue-950/30">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#0F2C59] dark:bg-blue-900/50 dark:text-blue-300">
              <Cpu className="h-5 w-5" />
            </div>
            <div className="mt-2 text-2xl font-black text-[#0F2C59] dark:text-blue-300">
              ৩+
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              কুয়েট ও ইঞ্জিনিয়ারিং
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-emerald-200/80 bg-emerald-50/60 p-4 text-center dark:border-emerald-950 dark:bg-emerald-950/30">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
              <Building2 className="h-5 w-5" />
            </div>
            <div className="mt-2 text-2xl font-black text-emerald-700 dark:text-emerald-400">
              ১৫+
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              শীর্ষ পাবলিক ও কৃষি ভার্সিটি
            </div>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-orange-200/80 bg-orange-50/60 p-4 text-center dark:border-orange-950 dark:bg-orange-950/30">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="mt-2 text-2xl font-black text-orange-600 dark:text-orange-400">
              ১০০%
            </div>
            <div className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              বোর্ড এ+ পাশের নিশ্চয়তা
            </div>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          <Button
            size="sm"
            variant={activeCategory === "all" ? "default" : "outline"}
            onClick={() => setActiveCategory("all")}
            className="rounded-full text-xs font-semibold"
          >
            সকল চান্সপ্রাপ্ত ({students.length})
          </Button>
          <Button
            size="sm"
            variant={activeCategory === "medical" ? "default" : "outline"}
            onClick={() => setActiveCategory("medical")}
            className="rounded-full text-xs font-semibold"
          >
            <Stethoscope className="mr-1 h-3.5 w-3.5 text-red-500" />
            মেডিকেল ({students.filter((s) => s.category === "medical").length})
          </Button>
          <Button
            size="sm"
            variant={activeCategory === "engineering" ? "default" : "outline"}
            onClick={() => setActiveCategory("engineering")}
            className="rounded-full text-xs font-semibold"
          >
            <Cpu className="mr-1 h-3.5 w-3.5 text-blue-500" />
            ইঞ্জিনিয়ারিং ({students.filter((s) => s.category === "engineering").length})
          </Button>
          <Button
            size="sm"
            variant={activeCategory === "university" ? "default" : "outline"}
            onClick={() => setActiveCategory("university")}
            className="rounded-full text-xs font-semibold"
          >
            <Building2 className="mr-1 h-3.5 w-3.5 text-emerald-500" />
            পাবলিক ও কৃষি ({students.filter((s) => s.category === "university").length})
          </Button>
        </div>

        {/* Students Cards Grid */}
        <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredStudents.map((student, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-4.5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-orange-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/90 dark:hover:border-orange-500/50"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-[#0F2C59] font-bold text-white shadow-xs">
                    {student.name.charAt(0)}
                  </div>
                  <Badge
                    variant={
                      student.category === "medical"
                        ? "destructive"
                        : student.category === "engineering"
                        ? "navy"
                        : "success"
                    }
                    className="text-[10.5px]"
                  >
                    {student.highlight}
                  </Badge>
                </div>

                <div className="mt-3">
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
                    {student.name}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-[#0F2C59] dark:text-blue-300">
                    {student.institute}
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[11px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <span>সেশন: ২০২৪-২০২৫</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                  সফল অ্যালকেমিস্ট
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Official Banner Visual Callout & Modal Link */}
        <div className="mt-12 rounded-3xl border border-orange-200/80 bg-gradient-to-r from-orange-50 via-amber-50 to-blue-50 p-6 sm:p-8 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900/80 dark:to-blue-950/40">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl border border-slate-300 shadow-md sm:h-24 sm:w-36">
                <Image
                  src="/assets/previousstudets.png"
                  alt="Alchemist 2025 Success Banner"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-orange-600 dark:text-orange-400">
                  অফিসিয়াল সাফল্যের ব্যানার
                </span>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                  ২০২৫ সালের পূর্ণাঙ্গ পোস্টার ও শিক্ষার্থীদের তালিকা
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300">
                  কোচিং প্রাঙ্গণে সংরক্ষিত অফিসিয়াল ফল ও ছবিসমূহ
                </p>
              </div>
            </div>

            <Button
              onClick={() => setShowBannerModal(true)}
              className="gap-2 rounded-xl bg-[#0F2C59] text-white hover:bg-blue-900"
            >
              <span>ব্যানারের পূর্ণাঙ্গ ছবি দেখুন</span>
              <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Fullscreen Banner Modal */}
        {showBannerModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setShowBannerModal(false)}
          >
            <div
              className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl bg-white p-2 shadow-2xl dark:bg-slate-900"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full max-w-4xl">
                <Image
                  src="/assets/previousstudets.png"
                  alt="Alchemist 2025 Success Banner Full"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex items-center justify-between p-3 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  ঠিকানা: এসপি বাংলো গেটের বিপরীতে, আরবপুর, যশোর।
                </span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setShowBannerModal(false)}
                >
                  বন্ধ করুন (Close)
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

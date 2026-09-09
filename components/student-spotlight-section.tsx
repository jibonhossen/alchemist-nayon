"use client"

import * as React from "react"
import { Sparkles, MoveHorizontal } from "lucide-react"
import { CoverflowCarousel, CoverflowSlide } from "@/components/ui/coverflow-carousel"

function StudentDetailsMinimal({
  slide,
}: {
  slide: CoverflowSlide
  index: number
  total: number
}) {
  const collegeMeta = slide.meta?.find((m) => m.label === "কলেজ")?.value
  const sessionMeta = slide.meta?.find((m) => m.label === "সেশন")?.value

  return (
    <div className="flex flex-col items-center text-center w-full max-w-sm mx-auto">
      {/* Student Name */}
      <h3 className="font-display text-xl sm:text-2xl font-black tracking-tight text-[#0F172A]">
        {slide.title}
      </h3>

      {/* Admitted Institution */}
      <p className="mt-1 text-sm sm:text-base font-bold text-[#0D47A1]">
        {slide.subtitle}
      </p>

      {/* Clean Definition List (Matches 21st.dev original coverflow aesthetic) */}
      <dl className="mt-5 w-full max-w-[280px] text-xs sm:text-sm">
        <div className="flex justify-between items-center py-1.5 border-b border-slate-200">
          <dt className="text-slate-500 font-medium">সেশন</dt>
          <dd className="font-bold text-slate-900">{sessionMeta || "২০২৩-২৪"}</dd>
        </div>
        <div className="flex justify-between items-center py-1.5">
          <dt className="text-slate-500 font-medium">কলেজ</dt>
          <dd className="font-bold text-slate-900 truncate max-w-[170px]" title={collegeMeta}>
            {collegeMeta || "যশোর"}
          </dd>
        </div>
      </dl>
    </div>
  )
}

const studentSlides: CoverflowSlide[] = [
  {
    src: "https://images.unsplash.com/photo-1574297500578-afae55026ff3?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "শিফসা নাজনিন - যশোর মেডিকেল কলেজ",
    title: "শিফসা নাজনিন",
    subtitle: "যশোর মেডিকেল কলেজ (JMC)",
    badge: "মেডিকেল ভর্তি",
    badgeColor: "bg-[#0D47A1] text-white",
    category: "medical",
    meta: [
      { label: "ভর্তি", value: "মেডিকেল ভর্তি পরীক্ষা" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "যশোর সরকারি মহিলা কলেজ" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1598096969068-7f52cac10c83?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "সিজাত মোর্তজা অয়ন - মাগুরা মেডিকেল কলেজ",
    title: "সিজাত মোর্তজা অয়ন",
    subtitle: "মাগুরা মেডিকেল কলেজ",
    badge: "মেডিকেল ভর্তি",
    badgeColor: "bg-[#0D47A1] text-white",
    category: "medical",
    meta: [
      { label: "ভর্তি", value: "মেডিকেল ভর্তি পরীক্ষা" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "যশোর জিলা স্কুল ও কলেজ" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1623303366639-0e330d7c3d9f?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "এম. এম মাহিম - কুয়েট",
    title: "এম. এম মাহিম",
    subtitle: "কুয়েট (KUET) - পুরকৌশল",
    badge: "ইঞ্জিনিয়ারিং",
    badgeColor: "bg-[#0288D1] text-white",
    category: "engineering",
    meta: [
      { label: "ভর্তি", value: "প্রকৌশল ও প্রযুক্তি" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "যশোর ক্যান্টনমেন্ট কলেজ" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1550546094-9835463f9f71?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "জেনিফা তামার্না স্নিগ্ধা - কক্সবাজার মেডিকেল কলেজ",
    title: "জেনিফা তামার্না স্নিগ্ধা",
    subtitle: "কক্সবাজার মেডিকেল কলেজ",
    badge: "মেডিকেল ভর্তি",
    badgeColor: "bg-[#0D47A1] text-white",
    category: "medical",
    meta: [
      { label: "ভর্তি", value: "মেডিকেল ভর্তি পরীক্ষা" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "সরকারি মাইকেল মধুসূদন কলেজ" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "কুশল চন্দ্র পাল - শাবিপ্রবি",
    title: "কুশল চন্দ্র পাল",
    subtitle: "শাবিপ্রবি (SUST) - বিজ্ঞান ও প্রযুক্তি",
    badge: "বিজ্ঞান ও প্রযুক্তি",
    badgeColor: "bg-[#0288D1] text-white",
    category: "engineering",
    meta: [
      { label: "ভর্তি", value: "ইঞ্জিনিয়ারিং ও বিজ্ঞান" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "যশোর জিলা স্কুল ও কলেজ" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "উম্মে কুলসুম তারিন - পটুয়াখালী মেডিকেল কলেজ",
    title: "উম্মে কুলসুম তারিন",
    subtitle: "পটুয়াখালী মেডিকেল কলেজ",
    badge: "মেডিকেল ভর্তি",
    badgeColor: "bg-[#0D47A1] text-white",
    category: "medical",
    meta: [
      { label: "ভর্তি", value: "মেডিকেল ভর্তি পরীক্ষা" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "যশোর ক্যান্টনমেন্ট কলেজ" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1517487313006-d80558d7a5cb?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "পুষ্পিতা রায় - সরকারি টেক্সটাইল ইঞ্জিনিয়ারিং কলেজ",
    title: "পুষ্পিতা রায়",
    subtitle: "সরকারি টেক্সটাইল ইঞ্জিনিয়ারিং কলেজ",
    badge: "টেক্সটাইল ইঞ্জিনিয়ারিং",
    badgeColor: "bg-[#0288D1] text-white",
    category: "engineering",
    meta: [
      { label: "ভর্তি", value: "টেক্সটাইল ইঞ্জিনিয়ারিং" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "যশোর সরকারি মহিলা কলেজ" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1667655861998-46fe4c29a4cf?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "মো: তাসনিম আলিফ - জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
    title: "মো: তাসনিম আলিফ",
    subtitle: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয় (JU)",
    badge: "পাবলিক বিশ্ববিদ্যালয়",
    badgeColor: "bg-[#0F172A] text-white",
    category: "university",
    meta: [
      { label: "ভর্তি", value: "পাবলিক বিশ্ববিদ্যালয়" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "যশোর জিলা স্কুল ও কলেজ" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1613447895817-e617a4093f50?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "ইরিনা জেরিন - বাংলাদেশ কৃষি বিশ্ববিদ্যালয়",
    title: "ইরিনা জেরিন",
    subtitle: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয় (BAU)",
    badge: "কৃষি গুচ্ছ",
    badgeColor: "bg-[#15803d] text-white",
    category: "university",
    meta: [
      { label: "ভর্তি", value: "কৃষি গুচ্ছ ভর্তি পরীক্ষা" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "যশোর সরকারি মহিলা কলেজ" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1632507273499-df468b359d7d?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "রিয়াজুল ইসলাম - খুলনা বিশ্ববিদ্যালয়",
    title: "রিয়াজুল ইসলাম",
    subtitle: "খুলনা বিশ্ববিদ্যালয় (KU)",
    badge: "পাবলিক বিশ্ববিদ্যালয়",
    badgeColor: "bg-[#0F172A] text-white",
    category: "university",
    meta: [
      { label: "ভর্তি", value: "পাবলিক বিশ্ববিদ্যালয়" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "যশোর ক্যান্টনমেন্ট কলেজ" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1604177091072-b7b677a077f6?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "কাজী সুমাইয়া - বাংলাদেশ কৃষি বিশ্ববিদ্যালয়",
    title: "কাজী সুমাইয়া",
    subtitle: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয় (BAU)",
    badge: "কৃষি গুচ্ছ",
    badgeColor: "bg-[#15803d] text-white",
    category: "university",
    meta: [
      { label: "ভর্তি", value: "কৃষি গুচ্ছ ভর্তি পরীক্ষা" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "যশোর সরকারি সিটি কলেজ" },
    ],
  },
  {
    src: "https://images.unsplash.com/photo-1495995424756-6a5a3f9e7543?crop=entropy&cs=tinysrgb&fit=crop&w=600&h=600&q=80",
    alt: "ইয়ামিন হোসেন - বরিশাল বিশ্ববিদ্যালয়",
    title: "ইয়ামিন হোসেন",
    subtitle: "বরিশাল বিশ্ববিদ্যালয় (BU)",
    badge: "পাবলিক বিশ্ববিদ্যালয়",
    badgeColor: "bg-[#0F172A] text-white",
    category: "university",
    meta: [
      { label: "ভর্তি", value: "পাবলিক বিশ্ববিদ্যালয়" },
      { label: "সেশন", value: "২০২৩-২৪" },
      { label: "কলেজ", value: "যশোর জিলা স্কুল ও কলেজ" },
    ],
  },
]

export function StudentSpotlightSection() {
  return (
    <section
      id="student-spotlight"
      className="relative overflow-hidden bg-slate-50/70 py-12 md:py-20 border-b border-[#e2e8f0]"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-[#0D47A1]/5 blur-3xl" />
        <div className="absolute top-10 right-10 h-[300px] w-[300px] rounded-full bg-[#F57C00]/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#0D47A1]/20 bg-[#0D47A1]/5 px-4 py-1 text-xs font-bold text-[#0D47A1] shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-[#F57C00]" />
            <span>কৃতী শিক্ষার্থীদের সাফল্য মঞ্চ • চান্সপ্রাপ্তদের একাংশ</span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight text-[#0F172A] leading-tight">
            রসায়নের প্রস্তুতি থেকে{" "}
            <span className="bg-gradient-to-r from-[#0D47A1] via-[#0288D1] to-[#F57C00] bg-clip-text text-transparent">
              শীর্ষ প্রতিষ্ঠানে চান্স
            </span>
          </h2>

          <p className="mt-2.5 max-w-2xl text-xs sm:text-sm md:text-base font-medium text-[#475569] leading-relaxed">
            আলকেমিস্ট নয়নের তত্ত্বাবধানে বেসিক ক্লিয়ার করে মেডিকেল কলেজ, কুয়েট-শাবিপ্রবি ও শীর্ষ পাবলিক বিশ্ববিদ্যালয়ে ভর্তির গৌরব অর্জনকারী শিক্ষার্থীদের একাংশ।
          </p>

          {/* Touch Swipe / Manual move hint */}
          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] sm:text-xs text-slate-400 font-medium">
            <MoveHorizontal className="h-3.5 w-3.5 animate-pulse" />
            <span>ডানে বা বামে টেনে অথবা তীর চিহ্নে ক্লিক করে ম্যানুয়ালি দেখুন</span>
          </div>
        </div>

        {/* 3D Coverflow Carousel */}
        <div className="mt-4 sm:mt-6">
          <CoverflowCarousel
            slides={studentSlides}
            showNavigation={true}
            showCaption={true}
            showPagination={true}
            cardWidth="clamp(180px, 28vw, 260px)"
            rotate={38}
            depth={0.52}
            renderCaption={(slide, index, total) => (
              <StudentDetailsMinimal slide={slide} index={index} total={total} />
            )}
          />
        </div>

        {/* Bottom Link to Full Hall of Fame Table */}
        <div className="mt-8 flex justify-center text-center">
          <a
            href="#hall-of-fame"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0D47A1] hover:underline"
          >
            <span>সকল কৃতী শিক্ষার্থীদের পূর্ণাঙ্গ তালিকা ও হল অব ফেম দেখুন</span>
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  )
}

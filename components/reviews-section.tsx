"use client"

import * as React from "react"
import { Star, MessageSquare, CheckCircle2 } from "lucide-react"

interface Review {
  name: string
  role: string
  institute: string
  comment: string
  batch: string
  avatarColor: string
}

const column1: Review[] = [
  {
    name: "শিফসা নাজনিন",
    role: "শিক্ষার্থী (যশোর মেডিকেল কলেজ)",
    institute: "যশোর সরকারি মহিলা কলেজ",
    comment:
      "নয়ন স্যারের কাছে কেমিস্ট্রি পড়ার পর রসায়নের ভয় পুরোপুরি দূর হয়ে গিয়েছিল। বিশেষ করে জৈব রসায়ন ও পরিমাণগত রসায়নের ম্যাথগুলো যেভাবে সহজে করিয়েছেন, মেডিকেল ভর্তি পরীক্ষায় রসায়নে সর্বোচ্চ নম্বর পাওয়া তার কারণেই সম্ভব হয়েছে।",
    batch: "মেডিকেল ব্যাচ",
    avatarColor: "bg-[#0D47A1] text-white",
  },
  {
    name: "মো: রফিকুল ইসলাম",
    role: "অভিভাবক (মেডিকেল শিক্ষার্থীর পিতা)",
    institute: "যশোর শহর",
    comment:
      "সন্তানের ভবিষ্যৎ নিয়ে সব অভিভাবকেরই দুশ্চিন্তা থাকে। কিন্তু আলকেমিস্ট কেয়ারে নয়ন স্যারের ক্লাসের শৃঙ্খলা, নিয়মিত পরীক্ষা এবং রেজাল্ট ট্র্যাকিং আমাকে মুগ্ধ করেছে। উনি প্রতিটি শিক্ষার্থীকে নিজের সন্তানের মতো যত্ন নিয়ে পড়ান।",
    batch: "অভিভাবক মতামত",
    avatarColor: "bg-[#F57C00] text-white",
  },
  {
    name: "কুশল চন্দ্র পাল",
    role: "শিক্ষার্থী (শাবিপ্রবি - SUST)",
    institute: "যশোর জিলা স্কুল ও কলেজ",
    comment:
      "রসায়নে মুখস্থ করার দিন শেষ! নয়ন স্যারের 'Experiment is my passion, Teaching is my mission' কথাটি প্রতিটি ক্লাসের পাঠদানে বাস্তব প্রতিফলিত হয়। আলকেমিস্টে পড়ার সিদ্ধান্ত আমার লাইফের অন্যতম সেরা সিদ্ধান্ত।",
    batch: "বিজ্ঞান ও প্রযুক্তি",
    avatarColor: "bg-[#0288D1] text-white",
  },
  {
    name: "তানভীর আহমেদ",
    role: "শিক্ষার্থী (HSC ২০২৭ ব্যাচ)",
    institute: "যশোর ক্যান্টনমেন্ট কলেজ",
    comment:
      "কলেজে কেমিস্ট্রি ক্লাস অনেক জটিল মনে হতো। নয়ন স্যারের ক্লাসে আসার পর ডিজিটাল স্মার্ট বোর্ডে অ্যানিমেশনের মাধ্যমে ৩D মলিকিউল স্ট্রাকচারগুলো দেখে সব কনসেপ্ট একদম স্বচ্ছ হয়ে গেছে।",
    batch: "HSC ২০২৭",
    avatarColor: "bg-[#003c33] text-white",
  },
]

const column2: Review[] = [
  {
    name: "এম. এম মাহিম",
    role: "শিক্ষার্থী (কুয়েট - KUET)",
    institute: "যশোর ক্যান্টনমেন্ট কলেজ",
    comment:
      "ইঞ্জিনিয়ারিং ভর্তি পরীক্ষায় রসায়নের কনসেপ্টচুয়াল প্রশ্নই মেরিট পজিশনের পার্থক্য গড়ে দেয়। নয়ন স্যারের স্মার্ট বোর্ড ক্লাস, বিভিন্ন জটিল বিক্রিয়ার মেকানিজম অ্যানিমেশন আর প্রতিদিনের প্র্যাকটিস শিট আমার প্রস্তুতিকে অনন্য উচ্চতায় নিয়েছিল।",
    batch: "ইঞ্জিনিয়ারিং ব্যাচ",
    avatarColor: "bg-[#E65100] text-white",
  },
  {
    name: "নাজমা বেগম",
    role: "অভিভাবক (HSC ২০২৭ ব্যাচ)",
    institute: "আরবপুর, যশোর",
    comment:
      "আমার মেয়ে আগে রসায়নে একদম মনোযোগ দিতে পারত না। আলকেমিস্টে ভর্তি হওয়ার পর এখন রসায়নই ওর সবচেয়ে প্রিয় বিষয়। স্যারের ডিজিটাল ক্লাসরুম ও পড়ানোর আন্তরিক ধরণ সত্যিই অনন্য।",
    batch: "অভিভাবক মতামত",
    avatarColor: "bg-[#0D47A1] text-white",
  },
  {
    name: "কাজী সুমাইয়া",
    role: "শিক্ষার্থী (বাংলাদেশ কৃষি বিশ্ববিদ্যালয় - BAU)",
    institute: "এম. এস. টি. পি স্কুল ও কলেজ",
    comment:
      "ক্লাসে না বুঝলে ক্লাসের পর আলাদা বসে ১-অন-১ বুঝিয়ে দেওয়ার যে সুযোগ নয়ন স্যার দেন, তা যশোরের আর কোথাও নেই। স্যারের দাগানো বোর্ড বই রিভিশন দিয়ে কৃষি গুচ্ছে টপ র‍্যাংক অর্জন করেছি।",
    batch: "কৃষি গুচ্ছ",
    avatarColor: "bg-[#0288D1] text-white",
  },
  {
    name: "ফাহিম ফয়সাল",
    role: "শিক্ষার্থী (HSC ২০২৮ ব্যাচ)",
    institute: "পুলিশ লাইনস স্কুল ও কলেজ",
    comment:
      "এসএসসি থেকে এইচএসসিতে ওঠার পর রসায়নের সিলেবাস দেখে ভয় লেগেছিল। নয়ন স্যারের গোছানো লেকচার ও হ্যান্ডনোট প্রথম অধ্যায় থেকেই রসায়নকে পানির মতো সহজ করে দিয়েছে।",
    batch: "HSC ২০২৮",
    avatarColor: "bg-[#E53935] text-white",
  },
]

const column3: Review[] = [
  {
    name: "জেনিফা তামার্না স্নিগ্ধা",
    role: "শিক্ষার্থী (কক্সবাজার মেডিকেল কলেজ)",
    institute: "যশোর সরকারি সিটি কলেজ",
    comment:
      "বোর্ড বই কীভাবে নিখুঁতভাবে দাগিয়ে পড়তে হয়, তা স্যার ক্লাসে লাইন বাই লাইন শিখিয়েছিলেন। কোনো প্রশ্ন না বুঝলে ক্লাসের পরেও স্যার আলাদা সময় দিয়ে বুঝিয়ে দিয়েছেন। আলকেমিস্ট নয়ন স্যার এককথায় সেরা!",
    batch: "HSC ও মেডিকেল",
    avatarColor: "bg-[#0D47A1] text-white",
  },
  {
    name: "ড. এ. কে. আজাদ",
    role: "অভিভাবক (কুয়েট শিক্ষার্থীর পিতা)",
    institute: "ঘোপ, যশোর",
    comment:
      "শিক্ষক হিসেবে নয়ন স্যারের নিষ্ঠা অসাধারণ। সময়ানুবর্তিতা, প্রতিটি মডেল টেস্টের বিস্তারিত অ্যানালাইসিস এবং পরীক্ষার খাতা নিজে দেখার যে দায়িত্ববোধ—তা প্রশংসার দাবিদার।",
    batch: "অভিভাবক মতামত",
    avatarColor: "bg-[#003c33] text-white",
  },
  {
    name: "মো: তাসনিম আলিফ",
    role: "শিক্ষার্থী (জাহাঙ্গীরনগর বিশ্ববিদ্যালয় - JU)",
    institute: "যশোর সরকারি সিটি কলেজ",
    comment:
      "জাবি ডি ইউনিটের রসায়ন অংশে যেসব গভীর কনসেপ্টচুয়াল প্রশ্ন এসেছিল, তার প্রায় প্রতিটি টাইপ নয়ন স্যারের হ্যান্ডনোট ও অধ্যায়ভিত্তিক এক্সামে আগেই সলভ করা ছিল। স্যারের প্রতি চিরকৃতজ্ঞ।",
    batch: "পাবলিক ভার্সিটি",
    avatarColor: "bg-[#F57C00] text-white",
  },
  {
    name: "নুসরাত জাহান",
    role: "শিক্ষার্থী (অনার্স কেমিস্ট্রি কেয়ার)",
    institute: "সরকারি মাইকেল মধুসূদন কলেজ (এম. এম. কলেজ)",
    comment:
      "অনার্স ফিজিক্যাল ও ইনঅর্গানিক কেমিস্ট্রির গাণিতিক প্রমাণগুলো এত সহজভাবে নয়ন স্যার বুঝিয়ে দেন যে পরীক্ষার হলে কোনো প্রশ্নের উত্তর লিখতে গিয়ে আটকায় না।",
    batch: "অনার্স ১ম বর্ষ",
    avatarColor: "bg-[#0288D1] text-white",
  },
]

function ReviewCard({ review }: { review: Review }) {
  const isGuardian = review.batch.includes("অভিভাবক")

  return (
    <article
      aria-label={`${review.name} এর মূল্যায়ন`}
      className="group/card rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_2px_12px_-3px_rgba(0,0,0,0.04)] hover:shadow-md hover:border-[#0D47A1]/35 transition-[border-color,box-shadow,transform] duration-200 ease-out flex flex-col justify-between select-text"
    >
      <div>
        {/* Header: Star Rating & Batch Pill (Visible on all viewports) */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div
            className="flex items-center gap-1 text-amber-500"
            aria-label="৫ এর মধ্যে ৫ স্টার রেটিং"
          >
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-3.5 w-3.5 fill-amber-400 text-amber-500"
                aria-hidden="true"
              />
            ))}
            <span className="text-xs font-bold text-slate-700 ml-1">৫.০</span>
          </div>

          <span
            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold border shrink-0 ${
              isGuardian
                ? "bg-[#FFF3E0] border-[#FFB74D] text-[#E65100]"
                : "bg-[#F0F7FF] border-[#0D47A1]/20 text-[#0D47A1]"
            }`}
          >
            {review.batch}
          </span>
        </div>

        {/* Testimonial Quote with high-contrast, comfortable leading */}
        <p className="text-[13.5px] sm:text-sm font-normal text-slate-800 leading-[1.7] text-wrap-pretty">
          &ldquo;{review.comment}&rdquo;
        </p>
      </div>

      {/* Author Footer */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-3">
        <div
          aria-hidden="true"
          className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-2xs ${review.avatarColor}`}
        >
          {review.name.slice(0, 1)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-xs sm:text-sm text-slate-900 leading-snug truncate">
              {review.name}
            </span>
            <CheckCircle2
              className="h-3 w-3 text-emerald-600 shrink-0"
              aria-label="যাচাইকৃত মূল্যায়ন"
            />
          </div>
          <div className="text-xs font-medium text-[#0D47A1] truncate">
            {review.role}
          </div>
          <div className="text-xs text-slate-500 truncate">
            {review.institute}
          </div>
        </div>
      </div>
    </article>
  )
}

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="bg-white py-20 md:py-28 border-b border-[#e2e8f0] relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (Matches 21st.dev style) */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB74D] bg-[#FFF3E0] px-4 py-1 text-xs font-bold text-[#E65100] mb-3 shadow-xs">
            <MessageSquare className="h-3.5 w-3.5 text-[#F57C00]" />
            <span>অভিভাবক ও শিক্ষার্থীদের মূল্যায়ন</span>
          </div>
          <h2 className="font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl leading-tight">
            যাঁরা আলকেমিস্ট কেয়ারকে বিশ্বাস করেছেন
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
            যশোরের শীর্ষ কলেজের কৃতি শিক্ষার্থী ও সচেতন অভিভাবকদের বাস্তব অভিজ্ঞতা ও অভিমত।
          </p>
        </div>

        {/* 21st.dev Testimonials Columns (Continuous Auto Infinite Moving) */}
        <div className="relative h-[620px] md:h-[680px] overflow-hidden">
          {/* Smooth Gradient Masks Top & Bottom (Optimized to h-14 sm:h-24 to prevent mobile text clipping) */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-14 sm:h-24 bg-gradient-to-b from-white via-white/80 to-transparent z-20" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 sm:h-24 bg-gradient-to-t from-white via-white/80 to-transparent z-20" />

          {/* 3 Infinite Moving Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
            {/* Column 1 (Normal Speed 34s) */}
            <div className="flex flex-col gap-5 animate-marquee-vertical [animation-duration:34s]">
              {[...column1, ...column1].map((review, idx) => (
                <ReviewCard key={`col1-${idx}`} review={review} />
              ))}
            </div>

            {/* Column 2 (Offset Speed 42s for natural asynchronous motion) */}
            <div className="hidden md:flex flex-col gap-5 animate-marquee-vertical [animation-duration:42s]">
              {[...column2, ...column2].map((review, idx) => (
                <ReviewCard key={`col2-${idx}`} review={review} />
              ))}
            </div>

            {/* Column 3 (Speed 38s) */}
            <div className="hidden lg:flex flex-col gap-5 animate-marquee-vertical [animation-duration:38s]">
              {[...column3, ...column3].map((review, idx) => (
                <ReviewCard key={`col3-${idx}`} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

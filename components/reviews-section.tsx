"use client"

import * as React from "react"
import { Star, Quote, CheckCircle2, MessageSquare, ThumbsUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Review {
  name: string
  role: string
  institute: string
  comment: string
  rating: number
  batch: string
}

const reviews: Review[] = [
  {
    name: "শিফসা নাজনিন",
    role: "শিক্ষার্থী (চান্সপ্রাপ্ত: যশোর মেডিকেল কলেজ)",
    institute: "যশোর সরকারি মহিলা কলেজ",
    comment:
      "নয়ন স্যারের কাছে কেমিস্ট্রি পড়ার পর রসায়নের ভয় পুরোপুরি কেটে গিয়েছিল। বিশেষ করে জৈব রসায়ন ও পরিমাণগত রসায়নের ম্যাথগুলো যেভাবে সহজে করিয়েছেন, মেডিকেল ভর্তি পরীক্ষায় রসায়নে ফুল মার্কস পাওয়া তার কারণেই সম্ভব হয়েছে।",
    rating: 5,
    batch: "HSC ব্যাচ ২০২৪-২৫",
  },
  {
    name: "এম. এম মাহিম",
    role: "শিক্ষার্থী (চান্সপ্রাপ্ত: কুয়েট)",
    institute: "যশোর ক্যান্টনমেন্ট কলেজ",
    comment:
      "ইঞ্জিনিয়ারিং ভর্তি পরীক্ষায় রসায়নের কনসেপ্টচুয়াল প্রশ্নই পার্থক্য গড়ে দেয়। নয়ন স্যারের স্মার্ট বোর্ড ক্লাস, বিভিন্ন জটিল বিক্রিয়ার মেকানিজম অ্যানিমেশন আর প্রতিদিনের প্র্যাকটিস শিট আমার প্রস্তুতিকে অনন্য উচ্চতায় নিয়ে গিয়েছিল।",
    rating: 5,
    batch: "ইঞ্জিনিয়ারিং ব্যাচ",
  },
  {
    name: "মো: রফিকুল ইসলাম",
    role: "অভিভাবক (মেডিকেল শিক্ষার্থীর বাবা)",
    institute: "যশোর শহর",
    comment:
      "সন্তানের ভবিষ্যৎ নিয়ে সব অভিভাবকেরই দুশ্চিন্তা থাকে। কিন্তু আলকেমিস্ট কেয়ারে নয়ন স্যারের শৃঙ্খলা, নিয়মিত পরীক্ষা এবং রেজাল্ট ট্র্যাকিং আমাকে মুগ্ধ করেছে। উনি প্রতিটি শিক্ষার্থীকে নিজের সন্তানের মতো যত্ন নিয়ে পড়ান।",
    rating: 5,
    batch: "অভিভাবক রিভিউ",
  },
  {
    name: "জেনিফা তামার্না স্নিগ্ধা",
    role: "শিক্ষার্থী (চান্সপ্রাপ্ত: কক্সবাজার মেডিকেল কলেজ)",
    institute: "যশোর সরকারি সিটি কলেজ",
    comment:
      "বোর্ড বই কীভাবে দাগিয়ে নিখুঁতভাবে পড়তে হয়, তা স্যার খুব দারুণভাবে শিখিয়েছিলেন। কোনো প্রশ্ন না বুঝলে ক্লাসের পরেও স্যার আলাদা সময় দিয়ে বুঝিয়ে দিয়েছেন। আলকেমিস্ট নয়ন স্যার এককথায় সেরা!",
    rating: 5,
    batch: "HSC ব্যাচ",
  },
  {
    name: "নাজমা বেগম",
    role: "অভিভাবক (HSC ২০২৭ ব্যাচ)",
    institute: "আরবপুর, যশোর",
    comment:
      "আমার মেয়ে আগে রসায়নে একদম মনোযোগ দিতে পারত না। আলকেমিস্টে ভর্তি হওয়ার পর এখন রসায়নই ওর সবচেয়ে প্রিয় বিষয়। স্যারের ডিজিটাল ক্লাসরুম ও পড়ানোর ধরণ সত্যিই প্রশংসনীয়।",
    rating: 5,
    batch: "অভিভাবক রিভিউ",
  },
  {
    name: "কুশল চন্দ্র পাল",
    role: "শিক্ষার্থী (চান্সপ্রাপ্ত: শাবিপ্রবি)",
    institute: "যশোর জিলা স্কুল ও কলেজ",
    comment:
      "রসায়নে মুখস্থ করার দিন শেষ! নয়ন স্যারের 'Experiment is my passion, Teaching is my mission' কথাটি প্রতিটি ক্লাসেই প্রতিফলিত হয়। আলকেমিস্টে পড়ার সিদ্ধান্ত আমার জীবনের সেরা সিদ্ধান্তগুলোর একটি।",
    rating: 5,
    batch: "অ্যাডমিশন ব্যাচ",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="relative py-20 dark:bg-[#070d1e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <Badge
            variant="alchemist"
            className="mb-3 gap-1.5 px-3.5 py-1 text-xs font-semibold"
          >
            <MessageSquare className="h-3.5 w-3.5 text-orange-500" />
            <span>শিক্ষার্থী ও অভিভাবকদের মতামত (Reviews & Testimonials)</span>
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            যাঁদের আস্থায় আলকেমিস্টের পথচলা
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-slate-600 sm:text-base dark:text-slate-300">
            শিক্ষার্থীদের সাফল্য ও অভিভাবকদের নির্ভরতাই আমাদের সবচেয়ে বড় অর্জন। দেখুন আলকেমিস্ট নয়ন সম্পর্কে তাঁদের বাস্তব অভিজ্ঞতা।
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xs transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-orange-500/40"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-7 w-7 text-slate-200 dark:text-slate-800" />
                </div>

                {/* Comment */}
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="mt-6 border-t border-slate-100 pt-4 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {rev.name}
                    </h4>
                    <p className="text-[11px] font-medium text-orange-600 dark:text-orange-400">
                      {rev.role}
                    </p>
                    <span className="text-[10.5px] text-slate-400">
                      {rev.institute}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-[10px]">
                    {rev.batch}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Page Proof Callout */}
        <div className="mt-12 rounded-2xl border border-blue-200 bg-blue-50/70 p-5 text-center dark:border-blue-950 dark:bg-blue-950/30">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2 text-sm font-bold text-blue-900 dark:text-blue-300">
              <ThumbsUp className="h-4 w-4 text-blue-600" />
              <span>ফেসবুকে ১,২০০+ অনুসারী ও নিয়মিত ক্লাস আপডেট</span>
            </div>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-orange-600 hover:underline dark:text-orange-400"
            >
              আলকেমিস্ট নয়ন অফিসিয়াল ফেসবুক পেজ দেখুন &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import {
  MonitorPlay,
  BookOpen,
  FileText,
  LineChart,
  Lightbulb,
  HeartHandshake,
  Sparkles,
  CheckCircle2,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    icon: MonitorPlay,
    title: "ডিজিটাল স্মার্ট ক্লাসরুম",
    englishTitle: "Interactive Smart Board Classes",
    description:
      "জটিল অ্যানিমেশন, রাসায়নিক গঠন ও ল্যাব বিক্রিয়াগুলো বড় ডিজিটাল স্মার্ট প্যানেলে সরাসরি চোখের সামনে জীবন্ত করে তোলা হয়।",
    color: "from-blue-600 to-cyan-600",
    badge: "আধুনিক প্রযুক্তি",
  },
  {
    icon: BookOpen,
    title: "বোর্ড বই ভিত্তিক পূর্ণাঙ্গ প্রস্তুতি",
    englishTitle: "NCTB Board Book Mastery",
    description:
      "হাজার গাইড না পড়ে মূল বোর্ড বইয়ের প্রতিটি লাইন ও রাসায়নিক সমীকরণের গভীরতম ব্যাখ্যার মাধ্যমে বেসিক স্ট্রং করা হয়।",
    color: "from-orange-500 to-amber-500",
    badge: "বেসিক ফাউন্ডেশন",
  },
  {
    icon: FileText,
    title: "এক্সক্লুসিভ প্র্যাকটিস শিট ও নোট",
    englishTitle: "Curated Sheets & Lecture Notes",
    description:
      "প্রতিটি অধ্যায়ের টাইপভিত্তিক বিগত বছরের বোর্ড ও অ্যাডমিশন প্রশ্ন সংবলিত স্পেশাল হ্যান্ডনোট এবং হোমওয়ার্ক শিট।",
    color: "from-emerald-600 to-teal-600",
    badge: "স্টাডি ম্যাটেরিয়াল",
  },
  {
    icon: LineChart,
    title: "ধারাবাহিক পরীক্ষা ও রেজাল্ট ট্র্যাকিং",
    englishTitle: "Regular Exam System & Analytics",
    description:
      "অধ্যায় শেষেই সিকিউ ও এমসিকিউ পরীক্ষা। প্রতিটি শিক্ষার্থীর মার্কস ও ভুলের কারণ নিখুঁতভাবে চিহ্নিত করে দেওয়া হয়।",
    color: "from-purple-600 to-indigo-600",
    badge: "মূল্যায়ন ব্যবস্থা",
  },
  {
    icon: Lightbulb,
    title: "স্পেশাল কনসেপ্ট ক্লিয়ারিং",
    englishTitle: "Concept Clearing Sessions",
    description:
      "কোনো পড়া বুঝতে সমস্যা হলে ক্লাসের পর আলাদা বসে নয়ন স্যারের সরাসরি তত্ত্বাবধানে শতভাগ ডাউট সলভ করার সুযোগ।",
    color: "from-rose-600 to-pink-600",
    badge: "ডাউট সলভিং",
  },
  {
    icon: HeartHandshake,
    title: "অতিরিক্ত ক্লাস ও স্পেশাল কেয়ার",
    englishTitle: "Personalized Support & Care",
    description:
      "পরীক্ষায় পিছিয়ে পড়া শিক্ষার্থীদের জন্য আলাদা ব্যাকআপ ক্লাস এবং অভিভাবকদের সাথে সার্বক্ষণিক রেজাল্ট আপডেট।",
    color: "from-amber-600 to-yellow-600",
    badge: "অভিভাবক আস্থা",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-20 dark:bg-[#070d1e]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <Badge
            variant="alchemist"
            className="mb-3 gap-1.5 px-3.5 py-1 text-xs font-semibold"
          >
            <Sparkles className="h-3.5 w-3.5 text-orange-500" />
            <span>কোচিংয়ের বৈশিষ্ট্য (Why Alchemist Nayon)</span>
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            কেন অভিভাবক ও শিক্ষার্থীদের প্রথম পছন্দ?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-slate-600 sm:text-base dark:text-slate-300">
            আমরা শুধু মুখস্থ করাই না; শিক্ষার্থীদের ভেতর রসায়নের বিজ্ঞানসম্মত কৌতূহল ও পরীক্ষায় সর্বোচ্চ নম্বর পাওয়ার কৌশল তৈরি করি।
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/80 dark:hover:border-orange-500/40"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-md transition-transform group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="outline" className="text-[11px]">
                      {feature.badge}
                    </Badge>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
                    {feature.title}
                  </h3>
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500">
                    {feature.englishTitle}
                  </span>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs font-semibold text-[#0F2C59] dark:border-slate-800 dark:text-blue-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span>আলকেমিস্টের নিয়মিত পদ্ধতি</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

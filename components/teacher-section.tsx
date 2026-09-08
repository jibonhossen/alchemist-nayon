"use client"

import * as React from "react"
import Image from "next/image"
import {
  GraduationCap,
  Sparkles,
  Award,
  BookOpen,
  FlaskConical,
  MessageCircle,
  Phone,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function TeacherSection() {
  return (
    <section
      id="faculty"
      className="relative overflow-hidden bg-slate-50/70 py-20 dark:bg-[#081026]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Teacher Image & Lab Atmosphere */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm rounded-3xl border border-slate-200 bg-white p-3.5 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
              <div className="relative aspect-[4/4.8] w-full overflow-hidden rounded-2xl bg-slate-950">
                <Image
                  src="/assets/nayonsir.png"
                  alt="Mohamed Nayon Sir"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute right-4 bottom-4 left-4 text-white">
                  <span className="text-xs font-semibold text-orange-400">
                    প্রতিষ্ঠাতা ও প্রধান প্রশিক্ষক
                  </span>
                  <h3 className="text-xl font-bold">মোহাম্মদ নয়ন</h3>
                  <p className="text-xs text-slate-300">
                    বি.এস.সি (অনার্স), এম.এস.সি (রসায়ন)
                  </p>
                </div>
              </div>

              {/* Floating Quote Badge */}
              <div className="mt-4 rounded-xl border border-orange-200/80 bg-orange-50/80 p-3.5 text-center dark:border-orange-950 dark:bg-orange-950/40">
                <p className="text-xs font-bold text-orange-800 dark:text-orange-300">
                  &ldquo;Experiment is my passion 🔬, Teaching is my mission 🎯&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Teacher Bio & Philosophy */}
          <div className="flex flex-col lg:col-span-7">
            <Badge
              variant="alchemist"
              className="w-fit gap-1.5 px-3.5 py-1 text-xs font-semibold"
            >
              <GraduationCap className="h-3.5 w-3.5 text-orange-500" />
              <span>শিক্ষক পরিচিতি ও দর্শন (Faculty Profile)</span>
            </Badge>

            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              রসায়নকে ভালোবাসার মতো সহজ করে তোলাই আমার ব্রত
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
              রসায়ন কোনো মুখস্থ করার বিষয় নয়—এটি এক অনুপম বিজ্ঞানের খেলা। সঠিক পরিকল্পনা, পরিষ্কার কনসেপ্ট এবং বাস্তবসম্মত উদাহরণের মাধ্যমে যেকোনো শিক্ষার্থী রসায়নে এ+ ও মেডিকেল/ইঞ্জিনিয়ারিং ভর্তি পরীক্ষায় সর্বোচ্চ স্থান অধিকার করতে সক্ষম।
            </p>

            {/* Core Teacher Strengths */}
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-2.5 rounded-2xl border border-slate-200/70 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-600 dark:text-orange-400" />
                <div className="text-xs">
                  <strong className="block text-slate-900 dark:text-white">
                    জৈব রসায়নের মেকানিজম সহজীকরণ
                  </strong>
                  অর্গানিক বিক্রিয়ার কৌশল ও চার্টভিত্তিক সহজ সমাধান।
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-2xl border border-slate-200/70 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-600 dark:text-orange-400" />
                <div className="text-xs">
                  <strong className="block text-slate-900 dark:text-white">
                    গাণিতিক রসায়ন শর্টকাট কৌশল
                  </strong>
                  অ্যাডমিশন ও বোর্ডে নিখুঁত ক্যালকুলেশন দক্ষতা।
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-2xl border border-slate-200/70 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-600 dark:text-orange-400" />
                <div className="text-xs">
                  <strong className="block text-slate-900 dark:text-white">
                    ডিজিটাল স্মার্ট বোর্ড অ্যানিমেশন
                  </strong>
                  ত্রিমাত্রিক আণবিক গঠন ও অরবিটাল চিত্র সরাসরি প্রদর্শন।
                </div>
              </div>

              <div className="flex items-start gap-2.5 rounded-2xl border border-slate-200/70 bg-white p-3.5 shadow-xs dark:border-slate-800 dark:bg-slate-900">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-600 dark:text-orange-400" />
                <div className="text-xs">
                  <strong className="block text-slate-900 dark:text-white">
                    ব্যক্তিগত মেন্টরশিপ ও যত্ন
                  </strong>
                  প্রত্যেক শিক্ষার্থীর দুর্বল অংশ চিহ্নিত করে সমাধান প্রদান।
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/8801780616187?text=আসসালামু%20আলাইকুম%20নয়ন%20স্যার,%20আমি%20আলকেমিস্ট%20কেমিস্ট্রি%20কেয়ারে%20ভর্তি%20সম্পর্কে%20জানতে%20চাই।"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="gap-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">
                  <MessageCircle className="h-4 w-4" />
                  <span>নয়ন স্যারের হোয়াটসঅ্যাপ (WhatsApp)</span>
                </Button>
              </a>

              <a href="tel:+8801780616187">
                <Button
                  variant="outline"
                  className="gap-2 rounded-xl border-blue-900/30 text-[#0F2C59] dark:text-blue-300"
                >
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span>ফোন: ০১৭৮০-৬১৬১৮৭</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Sparkles,
  CheckCircle2,
  Calendar,
  Building,
  Navigation,
  ArrowRight,
  ShieldCheck,
  HelpCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function ContactAdmissionSection() {
  const whatsappUrl =
    "https://wa.me/8801780616187?text=" +
    encodeURIComponent(
      "আসসালামু আলাইকুম নয়ন স্যার! আমি আলকেমিস্ট কেমিস্ট্রি কেয়ারে ব্যাচ এবং ভর্তি প্রক্রিয়া সম্পর্কে বিস্তারিত জানতে আগ্রহী।"
    )

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50/70 py-20 dark:bg-[#081026]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <Badge
            variant="alchemist"
            className="mb-3 gap-1.5 px-3.5 py-1 text-xs font-semibold"
          >
            <MapPin className="h-3.5 w-3.5 text-orange-500" />
            <span>ভর্তি ও যোগাযোগ (Admission & Contact)</span>
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            আজই আপনার পছন্দের ব্যাচে সিট নিশ্চিত করুন
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-slate-600 sm:text-base dark:text-slate-300">
            সীমিত আসন সংখ্যা। সরাসরি কোচিং সেন্টারে এসে অথবা নয়ন স্যারের অফিসিয়াল ফোন ও হোয়াটসঅ্যাপে যোগাযোগ করে আপনার সিট বুক করুন।
          </p>
        </div>

        {/* Special Discount Banner */}
        <div className="mt-8 mx-auto max-w-3xl rounded-2xl border border-orange-300 bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-center text-white shadow-lg">
          <div className="flex flex-col items-center justify-center gap-1.5 sm:flex-row sm:gap-3">
            <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-white">
              বিশেষ অফার
            </span>
            <p className="text-sm font-bold sm:text-base">
              🎉 নতুন ব্যাচে ভর্তিতে সীমিত সময়ের জন্য বিশেষ ছাড় চলছে!
            </p>
          </div>
        </div>

        {/* Contact & Admission Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          {/* Col 1: Direct Contact & Hotline (5 cols) */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            {/* Primary Hotline & WhatsApp Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    সরাসরি যোগাযোগ ও হটলাইন
                  </h3>
                  <span className="text-xs font-semibold text-orange-600 dark:text-orange-400">
                    নয়ন স্যারের অফিসিয়াল যোগাযোগ মাধ্যম
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-4 text-sm text-slate-600 dark:text-slate-300">
                {/* Phone */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 dark:border-slate-800/80 dark:bg-slate-800/50">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-[#0F2C59] dark:bg-blue-950 dark:text-blue-300">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          অফিসিয়াল হটলাইন নম্বর
                        </span>
                        <a
                          href="tel:+8801780616187"
                          className="block text-lg font-extrabold text-[#0F2C59] hover:underline dark:text-blue-300"
                        >
                          +880 1780-616187
                        </a>
                      </div>
                    </div>
                    <a href="tel:+8801780616187">
                      <Button
                        size="sm"
                        className="gap-1.5 rounded-xl bg-[#0F2C59] text-white hover:bg-[#1e3a6d]"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>কল দিন</span>
                      </Button>
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 dark:border-slate-800/80 dark:bg-slate-800/50">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                        <MessageCircle className="h-5 w-5" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          হোয়াটসঅ্যাপে সরাসরি মেসেজ
                        </span>
                        <a
                          href={whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-base font-bold text-emerald-600 hover:underline dark:text-emerald-400"
                        >
                          ০১৭৮০-৬১৬১৮৭
                        </a>
                      </div>
                    </div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="gap-1.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>চ্যাট করুন</span>
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="flex items-start gap-3 pt-2">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
                  <div>
                    <strong className="block text-slate-900 dark:text-white">
                      অফিস খোলা থাকার সময়:
                    </strong>
                    <span>সকাল ৭:০০ টা থেকে রাত ৮:০০ টা (সপ্তাহের ৭ দিনই খোলা)</span>
                  </div>
                </div>
              </div>

              {/* Big Action Buttons */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full gap-2 rounded-xl bg-emerald-600 text-sm font-bold text-white hover:bg-emerald-700">
                    <MessageCircle className="h-4 w-4" />
                    <span>WhatsApp মেসেজ</span>
                  </Button>
                </a>
                <a href="tel:+8801780616187" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full gap-2 rounded-xl border-blue-900/30 font-bold text-[#0F2C59] hover:bg-blue-50 dark:border-blue-700 dark:text-blue-300 dark:hover:bg-blue-950/40"
                  >
                    <Phone className="h-4 w-4 text-orange-500" />
                    <span>সরাসরি কল</span>
                  </Button>
                </a>
              </div>
            </div>

            {/* Address & Navigation Card */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                  <Building className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    কোচিং সেন্টারের ঠিকানা (যশোর শাখা)
                  </h4>
                  <p className="text-xs text-slate-500">
                    সরাসরি অফিসে এসে ভিজিট করুন
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-orange-500" />
                <div className="leading-relaxed">
                  <strong className="block text-slate-900 dark:text-white">
                    এসপি বাংলো গেটের বিপরীতে, আরবপুর, যশোর।
                  </strong>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    ল্যান্ডমার্ক: আরবপুর মোড় থেকে যশোর শহরমুখী রাস্তায় এসপি বাংলোর ঠিক উল্টো দিকে।
                  </span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  গুগল ম্যাপে দিকনির্দেশনা চান?
                </span>
                <a
                  href="https://maps.google.com/?q=Arabpur,Jessore,Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    variant="outline"
                    className="gap-1.5 rounded-xl border-orange-200 text-orange-600 hover:bg-orange-50 dark:border-orange-800 dark:text-orange-400"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    <span>ম্যাপ ওপেন করুন</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: How Admission Works (4 Easy Steps) & Guidelines (6 cols) */}
          <div className="flex flex-col gap-6 lg:col-span-6">
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-orange-300 text-orange-600 dark:border-orange-800 dark:text-orange-400 text-[11px]"
                  >
                    ভর্তি প্রক্রিয়া
                  </Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    সহজ ৪টি ধাপে সম্পন্ন করুন
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">
                  ভর্তি হওয়ার সহজ নিয়মাবলী
                </h3>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  আলকেমিস্ট কেমিস্ট্রি কেয়ারে প্রতিটি ব্যাচে সীমিত আসন থাকায় দ্রুত যোগাযোগ করার অনুরোধ করা হচ্ছে।
                </p>

                {/* Steps */}
                <div className="mt-6 flex flex-col gap-4">
                  {/* Step 1 */}
                  <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-800/40">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-600 font-extrabold text-white text-sm">
                      ১
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        ব্যাচ নির্বাচন ও সিট খোঁজ নিন
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                        আপনার উপযুক্ত ব্যাচ (HSC 2027 / HSC 2028 / অনার্স) নির্বাচন করুন এবং হটলাইনে ফোন দিয়ে আসন খালি আছে কিনা নিশ্চিত হন।
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-800/40">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#0F2C59] font-extrabold text-white text-sm dark:bg-blue-700">
                      ২
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        সরাসরি কোচিং অফিসে আসুন
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                        যশোরের আরবপুর এসপি বাংলো গেটের বিপরীতে আলকেমিস্ট অফিসে এসে ক্লাস রুমের পরিবেশ ও লেকচার শিট দেখে নিন।
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-800/40">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-600 font-extrabold text-white text-sm">
                      ৩
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        অফিস ফরম পূরণ ও ভর্তি নিশ্চিত
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                        অফিস থেকে ভর্তি ফরম সংগ্রহ করে প্রয়োজনীয় তথ্য দিয়ে ভর্তি ফি জমা দিন এবং আপনার রোল নম্বর বুঝে নিন।
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition-all hover:bg-slate-50 dark:border-slate-800/80 dark:bg-slate-800/40">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500 font-extrabold text-white text-sm">
                      ৪
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        ক্লাসে যোগদান ও কেমিস্ট্রিতে সেরা প্রস্তুতি
                      </h4>
                      <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">
                        শিডিউল অনুযায়ী ক্লাসে যোগদান করে নিয়মিত পরীক্ষা এবং নয়ন স্যারের নিবিড় তত্ত্বাবধানে প্রস্তুতি এগিয়ে নিন।
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Call Out Banner */}
              <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/40">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-6 w-6 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div className="text-xs text-emerald-900 dark:text-emerald-200">
                    <strong className="block font-bold">
                      অভিভাবকদের প্রতি আশ্বাস
                    </strong>
                    <span>
                      শিক্ষার্থীর নিয়মিত উপস্থিতি ও পরীক্ষার ফলাফল প্রতি মাসে অভিভাবকদের মোবাইলে অবহিত করা হয়।
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

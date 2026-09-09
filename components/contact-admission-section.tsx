"use client"

import * as React from "react"
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Navigation,
  Compass,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    q: "ক্লাস মিস হলে ব্যাকআপ ক্লাসের ব্যবস্থা আছে কি?",
    a: "হ্যাঁ, কোনো শিক্ষার্থী অসুস্থতা বা জরুরি কারণে ক্লাস মিস করলে নয়ন স্যারের সরাসরি তত্ত্বাবধানে ব্যাকআপ ক্লাস এবং ডিজিটাল স্মার্টবোর্ডের রেকর্ডেড লেকচার ও ক্লাস নোট প্রদান করা হয়।",
  },
  {
    q: "এইচএসসি ২০২৭ ও ২০২৮ ব্যাচে ভর্তির যোগ্যতা ও নিয়ম কী?",
    a: "বিজ্ঞান বিভাগের যেকোনো শিক্ষার্থী ভর্তি হতে পারবে। শুরুতে কোনো ভর্তি পরীক্ষার প্রয়োজন নেই, তবে নিয়মিত ক্লাসে উপস্থিতি ও সাপ্তাহিক অধ্যায়ভিত্তিক পরীক্ষায় অংশগ্রহণ বাধ্যতামূলক।",
  },
  {
    q: "অনার্স কেমিস্ট্রি কেয়ারে কোন কোন বর্ষের পাঠদান করা হয়?",
    a: "জাতীয় বিশ্ববিদ্যালয় ও অন্যান্য অধিভুক্ত কলেজের রসায়ন বিভাগের ডিগ্রি ও অনার্স ১ম, ২য় ও ৩য় বর্ষের ফিজিক্যাল, অর্গানিক ও ইনঅর্গানিক কেমিস্ট্রির বিশেষ ব্যাচ পরিচালিত হয়।",
  },
  {
    q: "অভিভাবকদের কীভাবে অগ্রগতি জানানো হয়?",
    a: "প্রতিটি অধ্যায়ভিত্তিক পরীক্ষা শেষে নম্বর ও ক্লাসের উপস্থিতি এসএমএস ও ফোনের মাধ্যমে সরাসরি অভিভাবকদের জানানো হয়। প্রতি মাসে অভিভাবক মতবিনিময়ের ব্যবস্থাও রয়েছে।",
  },
]

export function ContactAdmissionSection() {
  const whatsappUrl =
    "https://wa.me/8801780616187?text=" +
    encodeURIComponent(
      "আসসালামু আলাইকুম নয়ন স্যার! আমি আলকেমিস্ট কেমিস্ট্রি কেয়ারে ব্যাচ এবং ভর্তি প্রক্রিয়া সম্পর্কে জানতে আগ্রহী।"
    )

  return (
    <section
      id="contact"
      className="relative bg-white py-20 md:py-28 border-b border-[#e2e8f0]"
    >
      {/* Background ambient technical grid glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -right-24 h-96 w-96 rounded-full bg-[#0D47A1]/5 blur-3xl" />
        <div className="absolute bottom-10 -left-20 h-96 w-96 rounded-full bg-[#F57C00]/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(#0D47A1 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (Technical Editorial Style) */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB74D] bg-[#FFF3E0] px-3.5 py-1 text-xs font-bold text-[#E65100] mb-3.5">
            <MapPin className="h-3.5 w-3.5 text-[#F57C00]" />
            <span>সরাসরি যোগাযোগ ও ক্যাম্পাস পরিদর্শন</span>
          </div>
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl leading-[1.18]">
            ক্যাম্পাসে আসুন অথবা সরাসরি ফোনে কথা বলুন
          </h2>
          <p className="mt-4 text-base text-[#475569] leading-relaxed">
            সীমিত আসন সংখ্যা। সরাসরি কোচিং সেন্টারে এসে অথবা নয়ন স্যারের অফিশিয়াল নম্বরে কল করে আপনার পছন্দের ব্যাচে আসন নিশ্চিত করুন।
          </p>
        </div>

        {/* Technical Blueprint Grid (Campus & Admission Hub) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-16">
          {/* Card 1: Campus Identity & Location Architecture */}
          <div className="relative flex flex-col h-full">
            {/* Cloudflare-style corner anchor nodes */}
            <span className="absolute -top-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -top-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -bottom-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -bottom-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />

            {/* Container with Hairline Dividers */}
            <div className="border border-[#e2e8f0] bg-white divide-y divide-[#e2e8f0] shadow-xs flex-1 flex flex-col">
              {/* Header block */}
              <div className="p-6 sm:p-8 bg-[#F8FAFC]/50 flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#0D47A1] bg-[#F0F7FF] px-2.5 py-0.5 border border-[#0D47A1]/20 inline-block mb-1.5">
                    অফিসিয়াল ক্যাম্পাস
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    আলকেমিস্ট কেমিস্ট্রি কেয়ার, যশোর
                  </h3>
                </div>
                <div className="h-11 w-11 shrink-0 rounded-lg border border-[#e2e8f0] bg-white text-[#0D47A1] flex items-center justify-center shadow-2xs">
                  <MapPin className="h-5 w-5 stroke-[2.2]" />
                </div>
              </div>

              {/* Item: Campus Location */}
              <div className="p-6 sm:p-8 transition-colors duration-150 hover:bg-[#F8FAFC]">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white text-[#F57C00] shadow-2xs mt-0.5">
                    <Navigation className="h-5 w-5 stroke-[2.2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#64748b] uppercase tracking-wide">
                      ক্যাম্পাস অবস্থান ও ঠিকানা
                    </div>
                    <div className="font-display text-lg sm:text-xl font-bold text-[#0F172A] mt-1 leading-snug">
                      এসপি বাংলো গেটের বিপরীতে, আরবপুর, যশোর
                    </div>
                    <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                      মূল সড়কসংলগ্ন ভবনের ২য় তলা, আলকেমিস্ট স্মার্ট ক্লাসরুম (যশোর শহরের আরবপুর মোড়ে এসপি বাংলো গেটের ঠিক উল্টো পাশে)।
                    </p>
                  </div>
                </div>
              </div>

              {/* Item: Operating Hours */}
              <div className="p-6 sm:p-8 transition-colors duration-150 hover:bg-[#F8FAFC]">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white text-[#0288D1] shadow-2xs mt-0.5">
                    <Clock className="h-5 w-5 stroke-[2.2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="text-xs font-bold text-[#64748b] uppercase tracking-wide">
                        অফিস ও ক্লাসরুম খোলা
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 border border-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        সার্বক্ষণিক উন্মুক্ত
                      </span>
                    </div>
                    <div className="font-display text-lg sm:text-xl font-bold text-[#0F172A] mt-1">
                      প্রতিদিন সকাল ৭:০০ টা হতে রাত ৯:০০ টা পর্যন্ত
                    </div>
                    <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                      অভিভাবক ও শিক্ষার্থীরা যেকোনো দিন সরাসরি এসে ক্লাসরুম পরিবেশ পরিদর্শন ও নয়ন স্যারের সাথে আলোচনা করতে পারেন।
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer item: Navigation action */}
              <div className="p-6 sm:p-8 mt-auto bg-[#F8FAFC]/40">
                <a
                  href="https://maps.google.com/?q=Arabpur,+Jashore,+Bangladesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[#0D47A1]/20 bg-[#F0F7FF] px-4 py-3 text-sm font-bold text-[#0D47A1] hover:bg-[#0D47A1] hover:text-white transition-all duration-150 active:scale-[0.98] shadow-2xs"
                >
                  <Compass className="h-4 w-4" />
                  <span>গুগল ম্যাপে লোকেশন ও ডিরেকশন দেখুন</span>
                  <ExternalLink className="h-3.5 w-3.5 ml-1 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Direct Admission Desk & Helpline Architecture */}
          <div className="relative flex flex-col h-full">
            {/* Cloudflare-style corner anchor nodes */}
            <span className="absolute -top-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -top-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -bottom-1.5 -left-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -bottom-1.5 -right-1.5 z-10 h-2.5 w-2.5 border border-[#0D47A1]/40 bg-white" />

            {/* Container with Hairline Dividers */}
            <div className="border border-[#e2e8f0] bg-white divide-y divide-[#e2e8f0] shadow-xs flex-1 flex flex-col">
              {/* Header block */}
              <div className="p-6 sm:p-8 bg-[#F8FAFC]/50 flex items-center justify-between gap-4">
                <div>
                  <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#E65100] bg-[#FFF3E0] px-2.5 py-0.5 border border-[#FFB74D]/30 inline-block mb-1.5">
                    সরাসরি ভর্তি সহায়তা
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight">
                    ভর্তি সংক্রান্ত পরামর্শে কথা বলুন
                  </h3>
                </div>
                <div className="h-11 w-11 shrink-0 rounded-lg border border-[#e2e8f0] bg-white text-[#E65100] flex items-center justify-center shadow-2xs">
                  <Sparkles className="h-5 w-5 stroke-[2.2] text-[#F57C00]" />
                </div>
              </div>

              {/* Item: Hotline & Contact Details */}
              <div className="p-6 sm:p-8 transition-colors duration-150 hover:bg-[#F8FAFC]">
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#e2e8f0] bg-white text-[#0D47A1] shadow-2xs mt-0.5">
                    <Phone className="h-5 w-5 stroke-[2.2]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="text-xs font-bold text-[#64748b] uppercase tracking-wide">
                        অফিশিয়াল হেল্পলাইন
                      </div>
                      <span className="font-mono text-[11px] font-semibold bg-[#F0F7FF] text-[#0D47A1] px-2.5 py-0.5 border border-[#0D47A1]/20">
                        সরাসরি শিক্ষক লাইন
                      </span>
                    </div>
                    <div className="font-display text-2xl sm:text-3xl font-black text-[#0F172A] mt-1 font-mono tracking-tight">
                      ০১৭৮০-৬১৬১৮৭
                    </div>
                    <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                      ব্যাচের আসন সংখ্যা ও সময়সূচি নিশ্চিত করতে নয়ন স্যারের সাথে সরাসরি যোগাযোগ করুন।
                    </p>
                  </div>
                </div>
              </div>

              {/* Item: Tactile Action Buttons */}
              <div className="p-6 sm:p-8 space-y-3">
                <a href="tel:01780616187" className="block w-full">
                  <Button
                    size="lg"
                    className="w-full gap-2.5 rounded-lg bg-[#0D47A1] hover:bg-[#0B3D91] text-white py-3.5 text-sm font-bold shadow-xs active:scale-[0.98] transition-all"
                  >
                    <Phone className="h-4 w-4 text-[#FFB74D]" />
                    <span>সরাসরি কল দিন: ০১৭৮০-৬১৬১৮৭</span>
                  </Button>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full gap-2.5 rounded-lg border border-emerald-600/30 bg-emerald-50/50 hover:bg-emerald-100/70 text-emerald-800 hover:border-emerald-600 py-3.5 text-sm font-bold active:scale-[0.98] transition-all"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                    <span>WhatsApp-এ মেসেজ পাঠান</span>
                  </Button>
                </a>
              </div>

              {/* Footer item: Trust note */}
              <div className="p-4 sm:p-5 mt-auto bg-[#F8FAFC]/60 text-xs text-[#64748b] flex items-center justify-center gap-2 border-t border-[#e2e8f0]">
                <CheckCircle2 className="h-4 w-4 text-[#0D47A1] shrink-0" />
                <span className="font-medium">অভিভাবক ও শিক্ষার্থীদের সরাসরি নয়ন স্যারের সাথে কথা বলার নিশ্চয়তা</span>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions (Technical Blueprint Style) */}
        <div className="pt-8">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-[#F8FAFC] px-3.5 py-1 text-xs font-bold text-[#475569] mb-3">
              <HelpCircle className="h-3.5 w-3.5 text-[#F57C00]" />
              <span>সাধারণ জিজ্ঞাসা</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
              সচরাচর জানতে চাওয়া প্রশ্নসমূহ
            </h3>
            <p className="text-sm text-[#64748b] mt-1.5 leading-relaxed">
              ভর্তি ও ব্যাচ সংক্রান্ত সাধারণ প্রশ্নগুলোর স্পষ্ট উত্তর।
            </p>
          </div>

          <div className="relative">
            {/* Blueprint corner anchor nodes */}
            <span className="absolute -top-1.5 -left-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -top-1.5 -right-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -bottom-1.5 -left-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />
            <span className="absolute -bottom-1.5 -right-1.5 z-10 h-2 w-2 border border-[#0D47A1]/40 bg-white" />

            <div className="border border-[#e2e8f0] bg-white divide-y divide-[#e2e8f0] shadow-xs">
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e2e8f0]">
                {faqs.slice(0, 2).map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 transition-colors duration-150 hover:bg-[#F8FAFC]"
                  >
                    <div className="font-bold text-base text-[#0F172A] mb-2.5 flex items-start gap-2.5">
                      <HelpCircle className="h-4.5 w-4.5 text-[#F57C00] shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </div>
                    <p className="text-sm text-[#475569] leading-relaxed pl-7">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#e2e8f0]">
                {faqs.slice(2, 4).map((faq, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-7 transition-colors duration-150 hover:bg-[#F8FAFC]"
                  >
                    <div className="font-bold text-base text-[#0F172A] mb-2.5 flex items-start gap-2.5">
                      <HelpCircle className="h-4.5 w-4.5 text-[#F57C00] shrink-0 mt-0.5" />
                      <span>{faq.q}</span>
                    </div>
                    <p className="text-sm text-[#475569] leading-relaxed pl-7">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

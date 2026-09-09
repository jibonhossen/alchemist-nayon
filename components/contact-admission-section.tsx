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
      className="bg-white py-20 md:py-28 border-b border-[#e2e8f0]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FFB74D] bg-[#FFF3E0] px-4 py-1 text-xs font-bold text-[#E65100] mb-3 shadow-xs">
            <MapPin className="h-3.5 w-3.5 text-[#F57C00]" />
            <span>সরাসরি যোগাযোগ ও ক্যাম্পাস পরিদর্শন</span>
          </div>
          <h2 className="font-display text-3xl font-black tracking-tight text-[#0F172A] sm:text-4xl md:text-5xl leading-tight">
            ক্যাম্পাসে আসুন অথবা সরাসরি ফোনে কথা বলুন
          </h2>
          <p className="mt-3 text-base text-[#475569] leading-relaxed">
            সীমিত আসন সংখ্যা। সরাসরি কোচিং সেন্টারে এসে অথবা নয়ন স্যারের অফিশিয়াল নম্বরে কল করে আপনার পছন্দের ব্যাচে আসন নিশ্চিত করুন।
          </p>
        </div>

        {/* Campus Visit & Direct Contact Hub (No Web Form) */}
        <div className="rounded-[26px] border-2 border-[#0D47A1]/20 bg-gradient-to-br from-white via-[#F0F7FF] to-[#FFF3E0] p-6 md:p-10 shadow-xl shadow-[#0D47A1]/5 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Campus Landmark & Address (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between border-b border-[#0D47A1]/15 pb-4">
                <div>
                  <div className="text-xs font-black uppercase tracking-wider text-[#F57C00]">
                    অফিসিয়াল ক্যাম্পাস
                  </div>
                  <h3 className="font-display text-2xl font-black text-[#0D47A1] mt-0.5">
                    আলকেমিস্ট কেমিস্ট্রি কেয়ার, যশোর
                  </h3>
                </div>
                <div className="h-11 w-11 rounded-full bg-[#0D47A1] text-white flex items-center justify-center shrink-0 shadow-md">
                  <MapPin className="h-5 w-5 text-[#FFB74D]" />
                </div>
              </div>

              {/* Exact Location Card */}
              <div className="rounded-2xl border border-[#0D47A1]/20 bg-white p-5 shadow-xs">
                <div className="text-xs font-bold text-[#0D47A1] mb-1">ক্যাম্পাস অবস্থান:</div>
                <div className="font-display text-lg font-black text-[#0F172A]">
                  এসপি বাংলো গেটের বিপরীতে, আরবপুর, যশোর
                </div>
                <div className="text-xs font-medium text-[#64748b] mt-1">
                  (মূল সড়কসংলগ্ন ভবনের ২য় তলা, আলকেমিস্ট স্মার্ট ক্লাসরুম)
                </div>
              </div>


            </div>

            {/* Right Column: Instant Call & Hours Hub (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-5 rounded-2xl border border-[#0D47A1]/20 bg-white p-6 shadow-sm">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-[#FFF3E0] border border-[#FFB74D] px-3 py-0.5 text-xs font-bold text-[#E65100] mb-3">
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>সরাসরি ভর্তি সহায়তা</span>
                </div>
                <h4 className="font-display text-xl font-black text-[#0F172A]">
                  ভর্তি সংক্রান্ত পরামর্শে কথা বলুন
                </h4>
                <p className="text-xs text-[#64748b] mt-1.5 leading-relaxed">
                  ব্যাচের আসন সংখ্যা ও সময়সূচি নিশ্চিত করতে নয়ন স্যারের সাথে সরাসরি যোগাযোগ করুন।
                </p>
              </div>

              {/* Operating Hours Box */}
              <div className="rounded-xl bg-[#F0F7FF] border border-[#0D47A1]/15 p-4 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-[#0D47A1]">
                  <Clock className="h-4 w-4 text-[#F57C00]" />
                  <span>অফিস ও ক্লাসরুম খোলা:</span>
                </div>
                <div className="text-[#475569] pl-6 font-medium">
                  প্রতিদিন সকাল ৭:০০ টা হতে রাত ৯:০০ টা পর্যন্ত
                </div>
              </div>

              {/* Direct Action Buttons */}
              <div className="space-y-3 pt-2">
                <a href="tel:01780616187" className="block w-full">
                  <Button
                    size="lg"
                    className="w-full gap-2.5 rounded-full bg-[#0D47A1] hover:bg-[#0B3D91] text-white py-3.5 text-sm font-bold shadow-md shadow-[#0D47A1]/25 active:scale-[0.98] transition-all"
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
                    className="w-full gap-2.5 rounded-full border-2 border-emerald-600/30 bg-emerald-50/50 hover:bg-emerald-100/60 text-emerald-800 hover:border-emerald-600 py-3.5 text-sm font-bold active:scale-[0.98] transition-all"
                  >
                    <MessageCircle className="h-4 w-4 text-emerald-600" />
                    <span>WhatsApp-এ মেসেজ পাঠান</span>
                  </Button>
                </a>
              </div>

              <div className="text-[11px] text-center text-[#64748b] flex items-center justify-center gap-1.5 pt-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#0D47A1]" />
                <span>অভিভাবক ও শিক্ষার্থীদের সরাসরি কথা বলার সুযোগ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="pt-8 border-t border-[#e2e8f0]">
          <div className="max-w-2xl mb-8">
            <h3 className="font-display text-2xl font-black text-[#0F172A]">
              সাধারণ জিজ্ঞাসা (Frequently Asked Questions)
            </h3>
            <p className="text-xs text-[#64748b] mt-1">
              ভর্তি ও ব্যাচ সংক্রান্ত সাধারণ প্রশ্নগুলোর স্পষ্ট উত্তর।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-5 hover:border-[#0D47A1]/40 transition-colors"
              >
                <div className="font-bold text-sm text-[#0F172A] mb-2 flex items-start gap-2">
                  <HelpCircle className="h-4 w-4 text-[#F57C00] shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </div>
                <p className="text-xs text-[#475569] leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

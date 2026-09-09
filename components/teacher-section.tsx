"use client"

import * as React from "react"
import Image from "next/image"
import {
  GraduationCap,
  Phone,
  CheckCircle2,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function TeacherSection() {
  return (
    <section
      id="faculty"
      className="bg-[#003c33] text-white py-20 md:py-28 relative overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-[500px] w-[500px] rounded-full bg-teal-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Teacher Image & Signature Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-[22px] border border-white/15 bg-white/5 p-4 shadow-2xl backdrop-blur-sm">
              <div className="relative aspect-[4/4.8] w-full overflow-hidden rounded-xl bg-[#17171c]">
                <Image
                  src="/assets/nayonsir.png"
                  alt="Mohamed Nayon Sir"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-block rounded-full bg-[#ff7759] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white mb-1">
                    প্রতিষ্ঠাতা ও মেন্টর
                  </div>
                  <h3 className="font-display text-2xl font-bold">মোহাম্মদ নয়ন</h3>
                  <p className="text-xs text-emerald-200">
                    বি.এস.সি (অনার্স), এম.এস.সি (রসায়ন)
                  </p>
                </div>
              </div>

              {/* Mentor Motto */}
              <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-3.5 text-center">
                <p className="text-xs font-semibold text-emerald-300">
                  &ldquo;Experiment is my passion 🔬, Teaching is my mission 🎯&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Teacher Bio & Passionate Mentorship (7 cols) */}
          <div className="flex flex-col lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-300 mb-4 w-fit">
              <GraduationCap className="h-3.5 w-3.5 text-[#ff7759]" />
              <span>আপনার পথপ্রদর্শক শিক্ষক</span>
            </div>

            <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl leading-tight text-white">
              রসায়নকে ভালোবাসার মতো সহজ করে তোলাই আমার জীবনের ব্রত
            </h2>

            <p className="mt-5 text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
              রসায়ন কোনো জটিল মুখস্থের বিষয় নয়—এটি যুক্তি আর বিজ্ঞানের অপূর্ব সমন্বয়। বিগত ১৪ বছর ধরে আমি প্রতিটি শিক্ষার্থীকে কেবল পরীক্ষার জন্য নয়, বিজ্ঞানের গভীর রস উপলব্ধি করাতে শেখাই। আমার ক্লাসে কোনো প্রশ্নের উত্তর &apos;মুখস্থ করো&apos; বলা হয় না, প্রতিটি প্রশ্নের উত্তর কেন ও কীভাবে হলো তা ল্যাব ও স্মার্ট বোর্ডে প্রমাণ করে দেওয়া হয়।
            </p>

            {/* Mentor Strengths Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <CheckCircle2 className="h-4 w-4 text-[#ff7759] shrink-0" />
                  <span>জৈব রসায়নের ভয় শূন্য করা</span>
                </div>
                <p className="text-xs text-emerald-100/70">
                  শত শত বিক্রিয়া মুখস্থ না করিয়ে ৩টি মূল মেকানিজমে পুরো জৈব রসায়ন আয়ত্ত করার ফর্মুলা।
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <CheckCircle2 className="h-4 w-4 text-[#ff7759] shrink-0" />
                  <span>সবার জন্য উন্মুক্ত প্রশ্নোত্তর</span>
                </div>
                <p className="text-xs text-emerald-100/70">
                  ক্লাসে বুঝতে না পারলে ক্লাসের পর আলাদা বসে প্রতিটি দ্বিধা সমাধান না হওয়া পর্যন্ত ছুটি নয়।
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <CheckCircle2 className="h-4 w-4 text-[#ff7759] shrink-0" />
                  <span>হাতে-কলমে স্পেশাল হ্যান্ডনোট</span>
                </div>
                <p className="text-xs text-emerald-100/70">
                  বিগত বছরের যশোর বোর্ড ও শীর্ষ কলেজের প্রশ্ন বিশ্লেষণ করে তৈরি করা নিজস্ব প্র্যাকটিস শিট।
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 font-bold text-white text-sm mb-1">
                  <CheckCircle2 className="h-4 w-4 text-[#ff7759] shrink-0" />
                  <span>প্যারেন্ট-টিচার যোগাযোগ</span>
                </div>
                <p className="text-xs text-emerald-100/70">
                  শিক্ষার্থী নিয়মিত ক্লাসে উপস্থিত ও পরীক্ষায় অংশগ্রহণ করছে কিনা অভিভাবকদের সরাসরি আপডেট।
                </p>
              </div>
            </div>

            {/* Direct Phone Conversion CTA */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
              <a href="tel:01780616187" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto gap-2.5 rounded-full bg-white hover:bg-[#eeece7] text-[#17171c] font-semibold text-sm px-6 py-3"
                >
                  <Phone className="h-4 w-4 text-[#ff7759]" />
                  <span>নয়ন স্যারের সাথে ফোনে কথা বলুন: ০১৭৮০-৬১৬১৮৭</span>
                </Button>
              </a>
              <span className="text-xs text-emerald-200">
                ভর্তি ও ব্যাচ সংক্রান্ত যেকোনো পরামর্শে সরাসরি কল করুন
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

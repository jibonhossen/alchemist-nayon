"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#17171c] text-white pb-20 sm:pb-10 pt-16 border-t border-[#2a2a30]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Mantra (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/20 bg-white p-0.5 shrink-0">
                <Image
                  src="/assets/logo.png"
                  alt="Alchemist Logo"
                  width={44}
                  height={44}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight text-white">
                  ALCHEMIST NAYON
                </span>
                <p className="text-[10px] font-semibold tracking-wider text-[#ff7759]">
                  HSC & HONOURS CHEMISTRY CARE
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-[#93939f] max-w-sm">
              &ldquo;Experiment is my passion 🔬, Teaching is my mission 🎯&rdquo;
              <br />
              যশোরে রসায়নের আধুনিক ডিজিটাল স্মার্ট ক্লাসরুমে বোর্ড বই ও অ্যাডমিশন প্রস্তুতির বিশ্বস্ত একাডেমি।
            </p>

            <div className="text-xs text-white/80 font-medium">
              পরিচালনায়: <strong className="text-white">মোহাম্মদ নয়ন স্যার</strong> (বি.এস.সি অনার্স, এম.এস.সি রসায়ন)
            </div>
          </div>

          {/* Col 2: Routine & Programs (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              প্রোগ্রাম ও ব্যাচসমূহ
            </h4>
            <ul className="flex flex-col gap-2 text-xs text-[#93939f]">
              <li>
                <Link href="#schedule" className="hover:text-white transition-colors">
                  • HSC 2027 একাদশ ও দ্বাদশ ব্যাচ
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-white transition-colors">
                  • HSC 2028 নতুন ফাউন্ডেশন ব্যাচ
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-white transition-colors">
                  • অনার্স (১ম, ২য় ও ৩য় বর্ষ) কেমিস্ট্রি
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-white transition-colors">
                  • মেডিকেল ও ইঞ্জিনিয়ারিং কেয়ার
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-white transition-colors">
                  • উইকেন্ড স্পেশাল ব্যাচ (শুক্র ও শনি)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Campus & Phone (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              ক্যাম্পাস অবস্থান ও কল
            </h4>
            <div className="flex flex-col gap-3 text-xs text-[#93939f]">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#ff7759] shrink-0 mt-0.5" />
                <span>
                  এসপি বাংলো গেটের বিপরীতে, আরবপুর, যশোর
                  <br />
                  <span className="text-[11px] text-white/60">
                    (আরবপুর মোড় থেকে ১ মিনিট হাঁটার দূরত্ব)
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#ff7759] shrink-0" />
                <a
                  href="tel:01780616187"
                  className="font-bold text-white hover:text-[#ff7759] transition-colors"
                >
                  ০১৭৮০-৬১৬১৮৭ (সরাসরি কল)
                </a>
              </div>

              <div className="mt-2 text-[11px] text-white/70 bg-white/5 p-3 rounded-xl border border-white/10">
                অফিস খোলা: প্রতিদিন সকাল ৭:০০ টা হতে রাত ৯:০০ টা পর্যন্ত
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#75758a]">
          <div>
            © {new Date().getFullYear()} Alchemist Nayon. সর্বস্বত্ব সংরক্ষিত।
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <span>উপরে যান</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}

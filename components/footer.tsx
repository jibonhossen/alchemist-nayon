"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, MessageCircle, Heart, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300 pb-20 sm:pb-8 dark:border-slate-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Logo & Vision */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-orange-500/50 bg-white shadow-xs outline outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10">
                <Image
                  src="/assets/logo.png"
                  alt="Alchemist Logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight text-white">
                  ALCHEMIST
                </span>
                <p className="text-[10px] font-bold tracking-wider text-orange-400">
                  HSC & HONOURS CHEMISTRY CARE
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-slate-400">
              &ldquo;Experiment is my passion 🔬, Teaching is my mission 🎯&rdquo;
              <br />
              যশোরে রসায়নের আধুনিক ডিজিটাল লার্নিং ও বোর্ড/অ্যাডমিশন প্রস্তুতির বিশ্বস্ত ঠিকানা।
            </p>

            <span className="text-xs font-semibold text-orange-400">
              পরিকল্পিত পড়াশোনা, সফলতার নিশ্চয়তা।
            </span>
          </div>

          {/* Col 2: Batches & Programs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              চলমান ব্যাচসমূহ
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs text-slate-400">
              <li>
                <Link href="#schedule" className="hover:text-orange-400">
                  • HSC-2027 রসায়ন 1st ও 2nd পত্র
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-orange-400">
                  • HSC-2028 নতুন ব্যাচ (শুরু হচ্ছে)
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-orange-400">
                  • অনার্স (মেজর ও নন-মেজর) কেমিস্ট্রি
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-orange-400">
                  • মেডিকেল ও ইঞ্জিনিয়ারিং কেমিস্ট্রি কেয়ার
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-orange-400">
                  • উইকেন্ড স্পেশাল ব্যাচ (শুক্র ও শনি)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              নেভিগেশন (Quick Links)
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-xs text-slate-400">
              <li>
                <Link href="#home" className="hover:text-orange-400">
                  হোম (Home)
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-orange-400">
                  ক্লাস শিডিউল ও ব্যাচ (Schedule)
                </Link>
              </li>
              <li>
                <Link href="#hall-of-fame" className="hover:text-orange-400">
                  সাফল্যের গৌরবগাথা 2025 (Hall of Fame)
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-orange-400">
                  কোচিংয়ের বৈশিষ্ট্য (Special Features)
                </Link>
              </li>
              <li>
                <Link href="#faculty" className="hover:text-orange-400">
                  নয়ন স্যার পরিচিতি (Faculty)
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-orange-400">
                  ভর্তি আবেদন (Admission Form)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Center Location */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              যোগাযোগ ও শাখা
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" />
                <span>এসপি বাংলো গেটের বিপরীতে, আরবপুর, যশোর।</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone strokeWidth={1.5} className="h-4 w-4 shrink-0 text-orange-400" />
                <a
                  href="tel:+8801780616187"
                  className="font-bold text-white hover:text-orange-400"
                >
                  +880 1780-616187
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle strokeWidth={1.5} className="h-4 w-4 shrink-0 text-emerald-400" />
                <a
                  href="https://wa.me/8801780616187"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  WhatsApp: 01780-616187
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 ps-3.5 pe-4 py-2 text-xs font-semibold text-slate-200 transition-[border-color,color,transform] duration-150 ease-out active:scale-[0.96] hover:border-orange-500 hover:text-white"
            >
              <ArrowUp className="h-3.5 w-3.5 text-orange-400" />
              <span>উপরে ফিরে যান (Top)</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Alchemist Nayon. All rights reserved.</p>
          <p className="mt-2 flex items-center gap-1 sm:mt-0">
            HSC & Honours Chemistry Care • যশোর, বাংলাদেশ
          </p>
        </div>
      </div>
    </footer>
  )
}

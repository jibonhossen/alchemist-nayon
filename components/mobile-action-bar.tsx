"use client"

import * as React from "react"
import { Phone, MessageCircle, Calendar, Sparkles } from "lucide-react"

export function MobileActionBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-slate-200/80 bg-white/95 px-3 py-2 shadow-2xl backdrop-blur-lg sm:hidden dark:border-slate-800 dark:bg-[#081026]/95">
      <div className="grid grid-cols-4 gap-1.5 text-center">
        {/* Call Button */}
        <a
          href="tel:+8801780616187"
          className="flex flex-col items-center justify-center rounded-xl p-1.5 transition-colors active:bg-slate-100 dark:active:bg-slate-800"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-[#0F2C59] dark:bg-blue-950 dark:text-blue-300">
            <Phone className="h-4 w-4" />
          </div>
          <span className="mt-1 text-[10px] font-bold text-slate-800 dark:text-slate-200">
            কল করুন
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/8801780616187?text=আসসালামু%20আলাইকুম%20নয়ন%20স্যার,%20আমি%20আলকেমিস্ট%20কেমিস্ট্রি%20ব্যাচে%20ভর্তি%20হতে%20আগ্রহী।"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center rounded-xl p-1.5 transition-colors active:bg-slate-100 dark:active:bg-slate-800"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
            <MessageCircle className="h-4 w-4" />
          </div>
          <span className="mt-1 text-[10px] font-bold text-slate-800 dark:text-slate-200">
            WhatsApp
          </span>
        </a>

        {/* Schedule */}
        <a
          href="#schedule"
          className="flex flex-col items-center justify-center rounded-xl p-1.5 transition-colors active:bg-slate-100 dark:active:bg-slate-800"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
            <Calendar className="h-4 w-4" />
          </div>
          <span className="mt-1 text-[10px] font-bold text-slate-800 dark:text-slate-200">
            রুটিন
          </span>
        </a>

        {/* Admission */}
        <a
          href="#contact"
          className="flex flex-col items-center justify-center rounded-xl p-1.5 transition-colors active:bg-slate-100 dark:active:bg-slate-800"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-950 dark:text-purple-400">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="mt-1 text-[10px] font-bold text-slate-800 dark:text-slate-200">
            ভর্তি
          </span>
        </a>
      </div>
    </div>
  )
}

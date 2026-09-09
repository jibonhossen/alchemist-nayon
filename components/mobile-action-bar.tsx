"use client"

import * as React from "react"
import { Phone, Calendar, MapPin } from "lucide-react"

export function MobileActionBar() {
  return (
    <div className="fixed right-0 bottom-0 left-0 z-40 border-t border-[#e5e7eb] bg-white/95 px-4 py-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] backdrop-blur-md sm:hidden">
      <div className="flex items-center justify-between gap-3">
        {/* Direct Call Button (Dominant Action) */}
        <a
          href="tel:01780616187"
          className="flex-1 flex items-center justify-center gap-2 rounded-full bg-[#17171c] hover:bg-black text-white py-2.5 px-4 text-xs font-semibold shadow-xs active:scale-[0.98] transition-transform"
        >
          <Phone className="h-3.5 w-3.5 text-[#ff7759]" />
          <span>সরাসরি কল দিন</span>
        </a>

        {/* Schedule Link */}
        <a
          href="#schedule"
          className="flex items-center justify-center gap-1.5 rounded-full border border-[#d9d9dd] bg-[#eeece7] text-[#17171c] py-2.5 px-3 text-xs font-semibold active:scale-[0.98] transition-transform"
        >
          <Calendar className="h-3.5 w-3.5" />
          <span>রুটিন</span>
        </a>

        {/* Campus Address Link */}
        <a
          href="#contact"
          className="flex items-center justify-center gap-1.5 rounded-full border border-[#d9d9dd] bg-white text-[#17171c] py-2.5 px-3 text-xs font-semibold active:scale-[0.98] transition-transform"
        >
          <MapPin className="h-3.5 w-3.5 text-[#ff7759]" />
          <span>ঠিকানা</span>
        </a>
      </div>
    </div>
  )
}

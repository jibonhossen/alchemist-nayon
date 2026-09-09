"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  X,
  Phone,
  GraduationCap,
  Calendar,
  Sparkles,
  MapPin,
  ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "হোম", href: "#home" },
    { name: "সময়সূচি ও ব্যাচ", href: "#schedule", icon: Calendar },
    { name: "ফিচার্স", href: "#features", icon: Sparkles },
    { name: "সাফল্যের ইতিহাস", href: "#hall-of-fame", icon: GraduationCap },
    { name: "নয়ন স্যার", href: "#faculty" },
    { name: "রিভিউ", href: "#reviews" },
    { name: "ঠিকানা ও যোগাযোগ", href: "#contact", icon: MapPin },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow,padding] duration-200 ease-out ${
        scrolled
          ? "bg-white/95 py-2.5 shadow-[0_2px_10px_rgba(13,71,161,0.06)] border-b border-[#e2e8f0] backdrop-blur-md"
          : "bg-white/80 py-3.5 border-b border-transparent backdrop-blur-xs"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand & Logo with Official Colors */}
        <Link
          href="#home"
          className="group flex items-center gap-3 transition-transform duration-150 active:scale-[0.98]"
        >
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-[#0D47A1]/20 bg-[#F0F7FF] p-0.5 shadow-xs">
            <Image
              src="/assets/logo.png"
              alt="Alchemist Nayon Logo"
              width={44}
              height={44}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-display text-lg font-black tracking-tight text-[#0D47A1]">
                ALCHEMIST
              </span>
              <span className="rounded-full border border-[#FFB74D] bg-[#FFF3E0] px-2 py-0.2 text-[10px] font-bold text-[#E65100] uppercase tracking-wider">
                Nayon
              </span>
            </div>
            <span className="text-[10px] font-bold tracking-wide text-[#F57C00]">
              HSC & HONOURS CHEMISTRY CARE
            </span>
          </div>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-xs font-semibold text-[#475569] transition-colors duration-150 hover:text-[#0D47A1] hover:bg-[#F0F7FF]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Zone 3: Direct Phone CTA & Campus Scroll */}
        <div className="flex items-center gap-2.5">
          <Link
            href="#contact"
            className="hidden text-xs font-semibold text-[#475569] hover:text-[#0D47A1] hover:underline underline-offset-4 sm:inline-block px-2"
          >
            আরবপুর, যশোর
          </Link>

          {/* Primary Action Button: Logo Royal Blue Pill */}
          <a href="tel:01780616187" className="inline-flex">
            <Button
              size="sm"
              className="gap-2 rounded-full px-4 text-xs font-bold bg-[#0D47A1] hover:bg-[#0B3D91] text-white shadow-md shadow-[#0D47A1]/20"
            >
              <Phone className="h-3.5 w-3.5 text-[#FFB74D]" />
              <span className="hidden sm:inline">সরাসরি কল:</span>
              <span>০১৭৮০-৬১৬১৮৭</span>
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e8f0] text-[#0D47A1] hover:bg-[#F0F7FF] lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-[#e2e8f0] bg-white px-4 pt-3 pb-6 shadow-xl lg:hidden">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-[#1e293b] hover:bg-[#F0F7FF] hover:text-[#0D47A1]"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="h-4 w-4 text-[#94a3b8]" />
              </Link>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-[#e2e8f0] flex flex-col gap-2.5">
            <div className="text-xs font-medium text-[#64748b] px-1">
              📍 ক্যাম্পাস: আরবপুর, এসপি বাংলো গেটের বিপরীতে, যশোর
            </div>
            <a href="tel:01780616187" className="w-full">
              <Button
                className="w-full justify-center gap-2 rounded-full py-2.5 text-sm font-bold bg-[#0D47A1] hover:bg-[#0B3D91] text-white shadow-md shadow-[#0D47A1]/20"
              >
                <Phone className="h-4 w-4 text-[#FFB74D]" />
                <span>সরাসরি কল করুন (০১৭৮০-৬১৬১৮৭)</span>
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Menu,
  X,
  Phone,
  Sun,
  ChevronDown,
  ArrowUpRight,
  MapPin,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [expandedSections, setExpandedSections] = React.useState<Record<string, boolean>>({})

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  // Close on Escape key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [mobileMenuOpen])

  const toggleSection = (name: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }))
  }

  const navLinks = [
    { name: "হোম", href: "#home" },
    { name: "সাফল্য মঞ্চ", href: "#student-spotlight" },
    { name: "নয়ন স্যার", href: "#faculty" },
    {
      name: "পদ্ধতি ও ফিচার্স",
      href: "#features",
      subItems: [
        { name: "স্মার্ট ডিজিটাল ক্লাসরুম", href: "#features" },
        { name: "অধ্যায়ভিত্তিক প্রিন্টেড শিট", href: "#features" },
        { name: "স্পেশাল কেমিস্ট্রি প্র্যাকটিক্যাল ল্যাব", href: "#features" },
        { name: "অনলাইন ব্যাকআপ ও টেস্ট", href: "#features" },
      ],
    },
    {
      name: "সময়সূচি ও ব্যাচ",
      href: "#schedule",
      subItems: [
        { name: "এইচএসসি ২০২৭ ব্যাচ", href: "#schedule" },
        { name: "এইচএসসি ২০২৮ ব্যাচ", href: "#schedule" },
        { name: "অনার্স কেমিস্ট্রি ব্যাচ", href: "#schedule" },
      ],
    },
    { name: "হল অব ফেম", href: "#hall-of-fame" },
    { name: "রিভিউ", href: "#reviews" },
    { name: "ক্যাম্পাস ও ভর্তি", href: "#contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-[background-color,border-color,box-shadow,padding] duration-200 ease-out ${
          scrolled
            ? "bg-white/95 py-2.5 shadow-[0_2px_10px_rgba(13,71,161,0.06)] border-b border-[#e2e8f0] backdrop-blur-md"
            : "bg-white/80 py-3 border-b border-transparent backdrop-blur-xs"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Brand & Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-2.5 transition-transform duration-150 active:scale-[0.98] min-w-0"
          >
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-[#0D47A1]/20 bg-[#F0F7FF] p-0.5 shadow-xs">
              <Image
                src="/assets/logo.png"
                alt="Alchemist Nayon Logo"
                width={40}
                height={40}
                className="h-full w-full rounded-full object-cover"
                priority
              />
            </div>
            <div className="flex flex-col truncate">
              <div className="flex items-center gap-1.5">
                <span className="font-display text-base sm:text-lg font-black tracking-tight text-[#0D47A1]">
                  ALCHEMIST
                </span>
                <span className="rounded-full border border-[#FFB74D] bg-[#FFF3E0] px-1.5 sm:px-2 py-0.2 text-[9px] sm:text-[10px] font-bold text-[#E65100] uppercase tracking-wider">
                  Nayon
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-wide text-[#F57C00] truncate">
                HSC & HONOURS CHEMISTRY CARE
              </span>
            </div>
          </Link>

          {/* Zone 2: Desktop Navigation Links */}
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

          {/* Zone 3: Actions & Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Campus location link (desktop) */}
            <Link
              href="#contact"
              className="hidden text-xs font-semibold text-[#475569] hover:text-[#0D47A1] hover:underline underline-offset-4 sm:inline-block px-2"
            >
              আরবপুর, যশোর
            </Link>

            {/* Desktop Direct Phone CTA */}
            <a href="tel:01780616187" className="hidden sm:inline-flex">
              <Button
                size="sm"
                className="gap-2 rounded-full px-4 text-xs font-bold bg-[#0D47A1] hover:bg-[#0B3D91] text-white shadow-md shadow-[#0D47A1]/20"
              >
                <Phone className="h-3.5 w-3.5 text-[#FFB74D]" />
                <span>সরাসরি কল: ০১৭৮০-৬১৬১৮৭</span>
              </Button>
            </a>

            {/* Mobile Quick Action (Direct Call icon) */}
            <a
              href="tel:01780616187"
              aria-label="Direct Call"
              className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors sm:hidden"
            >
              <Phone className="h-4 w-4 text-[#0D47A1]" />
            </a>

            {/* Sleek Menu Button (Better-Auth inspired) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-900 hover:text-black hover:bg-zinc-100 transition-colors lg:hidden focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="h-5 w-5 stroke-[2.2]" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu (Exact Better-Auth UI Layout) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-white lg:hidden animate-in fade-in duration-200">
          {/* Header Bar inside Menu Drawer */}
          <div className="flex items-center justify-between border-b border-zinc-200/80 px-5 py-3.5 sm:px-6">
            <Link
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 transition-transform active:scale-[0.98]"
            >
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-[#0D47A1]/20 bg-[#F0F7FF] p-0.5">
                <Image
                  src="/assets/logo.png"
                  alt="Alchemist Nayon Logo"
                  width={36}
                  height={36}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display text-base font-black tracking-tight text-zinc-950">
                    ALCHEMIST
                  </span>
                  <span className="rounded-full border border-[#FFB74D] bg-[#FFF3E0] px-1.5 py-0.2 text-[9px] font-bold text-[#E65100] uppercase tracking-wider">
                    Nayon
                  </span>
                </div>
                <span className="text-[9px] font-bold tracking-wide text-[#F57C00]">
                  HSC & HONOURS CHEMISTRY CARE
                </span>
              </div>
            </Link>

            {/* Right Icons: Sun / Action + Close Icon */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Light mode"
                className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-700 hover:text-black hover:bg-zinc-100 transition-colors"
              >
                <Sun className="h-5 w-5 stroke-[1.8]" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-md text-zinc-900 hover:text-black hover:bg-zinc-100 transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5 stroke-[2]" />
              </button>
            </div>
          </div>

          {/* Middle Navigation Links (Better-Auth style rows with dividers) */}
          <div className="flex-1 overflow-y-auto px-6 py-2 divide-y divide-zinc-100">
            {navLinks.map((link) => {
              const hasSubItems = !!link.subItems?.length
              const isExpanded = !!expandedSections[link.name]

              return (
                <div key={link.name} className="py-1">
                  <div className="flex items-center justify-between py-3.5">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[15px] font-semibold tracking-wide text-zinc-900 hover:text-[#0D47A1] transition-colors"
                    >
                      {link.name}
                    </Link>

                    {hasSubItems ? (
                      <button
                        type="button"
                        onClick={() => toggleSection(link.name)}
                        className="p-1.5 text-zinc-500 hover:text-zinc-900 transition-colors"
                        aria-label={`Toggle ${link.name} sub-menu`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-zinc-900" : ""
                          }`}
                        />
                      </button>
                    ) : null}
                  </div>

                  {/* Collapsible Sub-items */}
                  {hasSubItems && isExpanded && (
                    <div className="pb-3 pl-3 pr-2 space-y-2 border-l-2 border-zinc-100 ml-1 mb-1">
                      {link.subItems?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block py-1.5 text-xs font-medium text-zinc-600 hover:text-[#0D47A1] transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Bottom Action Section (Matching Image 2 SIGN-IN button) */}
          <div className="border-t border-zinc-100 bg-white px-6 pt-4 pb-8">
            <a href="tel:01780616187" className="block w-full">
              <button
                type="button"
                className="w-full bg-black hover:bg-zinc-900 active:scale-[0.99] text-white py-3.5 px-6 font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <span>সরাসরি কল দিন</span>
                <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
              </button>
            </a>

            <div className="mt-3 flex items-center justify-center gap-1.5 text-center text-[11px] font-medium text-zinc-500">
              <MapPin className="h-3 w-3 text-[#0D47A1]" />
              <span>আরবপুর, এসপি বাংলো গেটের বিপরীতে, যশোর</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}


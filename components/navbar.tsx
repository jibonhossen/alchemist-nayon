"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Sun,
  Moon,
  FlaskConical,
  GraduationCap,
  Calendar,
  Sparkles,
  MapPin,
} from "lucide-react"
import { Button } from "@heroui/react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Schedule", href: "#schedule", icon: Calendar },
    { name: "Hall of Fame", href: "#hall-of-fame", icon: GraduationCap },
    { name: "Features", href: "#features", icon: Sparkles },
    { name: "Faculty", href: "#faculty" },
    { name: "Reviews", href: "#reviews" },
    { name: "Contact", href: "#contact", icon: MapPin },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,box-shadow] duration-300 ease-out ${
        scrolled
          ? "bg-white/95 py-2.5 shadow-md backdrop-blur-md dark:bg-[#081026]/95 dark:shadow-slate-900/50"
          : "bg-white/80 py-4 backdrop-blur-sm dark:bg-[#070d1e]/80"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo and Branding */}
        <Link
          href="#home"
          className="group flex items-center gap-3 transition-transform duration-150 ease-out active:scale-[0.96]"
        >
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border-2 border-orange-500/40 bg-white shadow-sm ring-2 ring-blue-900/10 outline outline-1 -outline-offset-1 outline-black/10 dark:bg-slate-900 dark:outline-white/10">
            <Image
              src="/assets/logo.png"
              alt="Alchemist Nayon Logo"
              width={44}
              height={44}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-sans text-xl font-black tracking-tight text-[#0F2C59] dark:text-blue-200">
                ALCHEMIST
              </span>
              <span className="rounded bg-orange-500 px-1.5 py-0.5 text-[10px] font-bold text-white uppercase">
                Nayon
              </span>
            </div>
            <span className="text-[10.5px] font-semibold tracking-wider text-orange-600 dark:text-orange-400">
              HSC & HONOURS CHEMISTRY CARE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links (English Menu) */}
        <nav className="hidden items-center gap-1 lg:flex xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-700 transition-[color,background-color] duration-150 ease-out hover:bg-slate-100 hover:text-orange-600 dark:text-slate-200 dark:hover:bg-slate-800/80 dark:hover:text-orange-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Theme Switcher */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle with Contextual Cross-fade */}
          {mounted && (
            <Button
              variant="ghost"
              isIconOnly
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="relative h-9 w-9 overflow-hidden text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
              aria-label="Toggle Theme (or press 'd')"
            >
              <div
                className={`absolute inset-0 flex items-center justify-center transition-[opacity,filter,transform] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
                  resolvedTheme === "dark"
                    ? "scale-100 opacity-100 blur-0"
                    : "scale-[0.25] opacity-0 blur-[4px] pointer-events-none"
                }`}
              >
                <Sun className="h-4 w-4 text-amber-400" />
              </div>
              <div
                className={`absolute inset-0 flex items-center justify-center transition-[opacity,filter,transform] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
                  resolvedTheme === "dark"
                    ? "scale-[0.25] opacity-0 blur-[4px] pointer-events-none"
                    : "scale-100 opacity-100 blur-0"
                }`}
              >
                <Moon className="h-4 w-4 text-slate-700" />
              </div>
              <span className="sr-only">Toggle theme</span>
            </Button>
          )}

          {/* WhatsApp Direct Link */}
          <a
            href="https://wa.me/8801780616187?text=আসসালামু%20আলাইকুম%20নয়ন%20স্যার,%20আমি%20আলকেমিস্ট%20কেমিস্ট্রি%20ব্যাচে%20ভর্তি%20হতে%20আগ্রহী।"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex"
          >
            <Button
              size="sm"
              className="gap-1.5 rounded-full bg-emerald-600 ps-3 pe-3.5 text-xs font-semibold text-white shadow-xs hover:bg-emerald-700"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </Button>
          </a>

          {/* Quick Call */}
          <a href="tel:+8801780616187" className="hidden md:inline-flex">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5 rounded-full border-blue-900/30 ps-3 pe-3.5 text-xs font-semibold text-[#0F2C59] hover:bg-blue-50 dark:border-blue-400/40 dark:text-blue-300 dark:hover:bg-blue-950/50"
            >
              <Phone className="h-3.5 w-3.5 text-orange-500" />
              <span>01780-616187</span>
            </Button>
          </a>

          {/* Mobile Menu Hamburger with Contextual Cross-fade */}
          <Button
            variant="ghost"
            isIconOnly
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative h-9 w-9 overflow-hidden text-slate-700 lg:hidden dark:text-slate-200"
            aria-label="Toggle Navigation Menu"
          >
            <div
              className={`absolute inset-0 flex items-center justify-center transition-[opacity,filter,transform] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
                mobileMenuOpen
                  ? "scale-100 opacity-100 blur-0"
                  : "scale-[0.25] opacity-0 blur-[4px] pointer-events-none"
              }`}
            >
              <X className="h-5 w-5" />
            </div>
            <div
              className={`absolute inset-0 flex items-center justify-center transition-[opacity,filter,transform] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
                mobileMenuOpen
                  ? "scale-[0.25] opacity-0 blur-[4px] pointer-events-none"
                  : "scale-100 opacity-100 blur-0"
              }`}
            >
              <Menu className="h-5 w-5" />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Drawer with Smooth Transition */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-200 ease-out lg:hidden ${
          mobileMenuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-b border-slate-200 bg-white/95 px-4 pt-3 pb-6 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-[#081026]/95">
            <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
              <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                মেনু ও নেভিগেশন (Navigation)
              </div>
              <span className="text-[11px] text-orange-600 font-medium">
                যশোর • আরবপুর
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50/80 p-2.5 text-sm font-medium text-slate-800 transition-[color,background-color,border-color] duration-150 ease-out hover:border-orange-200 hover:bg-orange-50/50 active:scale-[0.96] dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    {Icon && <Icon className="h-4 w-4 text-orange-500" />}
                    <span>{link.name}</span>
                  </Link>
                )
              })}
            </div>

            <div className="mt-4 flex flex-col gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              <a
                href="https://wa.me/8801780616187?text=আসসালামু%20আলাইকুম%20নয়ন%20স্যার,%20আমি%20আলকেমিস্ট%20কেমিস্ট্রি%20ব্যাচে%20ভর্তি%20হতে%20আগ্রহী।"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full gap-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700">
                  <MessageCircle className="h-4 w-4" />
                  <span>সরাসরি হোয়াটসঅ্যাপ (01780-616187)</span>
                </Button>
              </a>
              <a href="tel:+8801780616187" className="w-full">
                <Button
                  variant="outline"
                  className="w-full gap-2 rounded-xl border-blue-900/20 text-[#0F2C59] dark:text-blue-300"
                >
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span>সরাসরি ফোন করুন (01780-616187)</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

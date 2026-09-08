import { Hind_Siliguri, Inter } from "next/font/google"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://alchemist-nayon.com"),
  title: "Alchemist Nayon | HSC & Honours Chemistry Care, Jessore",
  description:
    "আলকেমিস্ট এইচএসসি ও অনার্স কেমিস্ট্রি কেয়ার - যশোর। মোহাম্মদ নয়ন স্যারের পরিচালনায় স্মার্ট ডিজিটাল ক্লাসরুমে রসায়নের সেরা প্রস্তুতি। এসপি বাংলো গেটের বিপরীতে, আরবপুর, যশোর।",
  keywords: [
    "Alchemist Nayon",
    "Chemistry Coaching Jessore",
    "HSC Chemistry 2027",
    "HSC Chemistry 2028",
    "Honours Chemistry Care",
    "নয়ন স্যার কেমিস্ট্রি যশোর",
    "আলকেমিস্ট",
  ],
  authors: [{ name: "Mohamed Nayon" }],
  openGraph: {
    title: "Alchemist Nayon | HSC & Honours Chemistry Care",
    description:
      "Experiment is my passion 🔬, Teaching is my mission 🎯. আলকেমিস্ট এইচএসসি ও অনার্স কেমিস্ট্রি কেয়ার, আরবপুর, যশোর।",
    images: [{ url: "/assets/logo.png" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#0f2c59",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="bn"
      suppressHydrationWarning
      className={cn("antialiased", hindSiliguri.variable, inter.variable, "font-sans")}
    >
      <body className="min-h-screen bg-slate-50/70 text-slate-900 transition-colors dark:bg-[#070d1e] dark:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

"use client"

import * as React from "react"
import {
  FlaskConical,
  Sparkles,
  RefreshCw,
  Flame,
  Info,
  CheckCircle2,
  Atom,
  Beaker,
} from "lucide-react"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface Reaction {
  id: string
  name: string
  englishName: string
  subtitle: string
  reagents: string[]
  initialColor: string
  finalColor: string
  textColor: string
  equation: string
  observation: string
  conceptTip: string
  paperTopic: string
  bubblesCount: number
  hasSmoke: boolean
}

const reactions: Reaction[] = [
  {
    id: "titration",
    name: "অ্যাসিড-ক্ষার প্রশমন ও নির্দেশক",
    englishName: "Acid-Base Titration (Phenolphthalein)",
    subtitle: "HCl দ্রবণে NaOH যোগ করলে সমাপ্তি বিন্দুতে বর্ণ পরিবর্তন",
    reagents: ["HCl (বর্ণহীন)", "NaOH (ক্ষারক)", "ফেনলফথ্যালিন"],
    initialColor: "rgba(226, 232, 240, 0.4)", // clear/water
    finalColor: "rgba(236, 72, 153, 0.85)", // bright magenta/pink
    textColor: "#db2777",
    equation: "HCl(aq) + NaOH(aq) ⟶ NaCl(aq) + H₂O(l)",
    observation:
      "প্রশমন বিন্দুতে সামান্য এক ফোঁটা ক্ষার বেশি হতেই বর্ণহীন দ্রবণ এক নিমেষে উজ্জ্বল গোলাপী (Pink) রঙে রূপান্তরিত হয়।",
    conceptTip:
      "এইচএসসি বোর্ড পরীক্ষায় নির্দেশকের বর্ণ পরিবর্তনের পিএইচ (pH) সীমা (৮.২ - ১০.০) বারবার এমসিকিউ ও সিকিউতে আসে।",
    paperTopic: "রসায়ন ২য় পত্র • অধ্যায় ৩: পরিমাণগত রসায়ন",
    bubblesCount: 6,
    hasSmoke: false,
  },
  {
    id: "zinc-acid",
    name: "জিঙ্ক ও অ্যাসিডের বিক্রিয়ায় H₂ গ্যাস",
    englishName: "Zinc + Acid Gas Effervescence",
    subtitle: "জিঙ্ক দানার উপর লঘু HCl যোগে তীব্র বুদবুদ সৃষ্টি",
    reagents: ["Zn (জিঙ্ক ধাতু)", "Dilute HCl (লঘু অ্যাসিড)"],
    initialColor: "rgba(203, 213, 225, 0.5)",
    finalColor: "rgba(148, 163, 184, 0.75)",
    textColor: "#0284c7",
    equation: "Zn(s) + 2HCl(aq) ⟶ ZnCl₂(aq) + H₂(g)↑",
    observation:
      "দ্রবণে তীব্র বুদবুদ (Effervescence) সহ বর্ণহীন, গন্ধহীন হাইড্রোজেন গ্যাস দ্রুত উৎপন্ন হয়ে পাত্রের মুখে উঠে আসে।",
    conceptTip:
      "হাইড্রোজেন গ্যাস সনাক্তকরণের জন্য জ্বলন্ত শিখা ধরলে মৃদু 'পপ' (Pop) শব্দ সহ নীল শিখায় জ্বলে ওঠে।",
    paperTopic: "রসায়ন ১ম পত্র • অধ্যায় ৩: মৌলের পর্যায়বৃত্ত ধর্ম",
    bubblesCount: 22,
    hasSmoke: true,
  },
  {
    id: "copper-iron",
    name: "লোহা ও কপার সালফেটের প্রতিস্থাপন",
    englishName: "Iron & Copper Sulfate Single Replacement",
    subtitle: "নীল বর্ণের দ্রবণে লোহার পেরেক রাখলে দ্রবণ হালকা সবুজ হওয়া",
    reagents: ["CuSO₄ দ্রবণ (নীল)", "Fe (লোহার পেরেক)"],
    initialColor: "rgba(14, 165, 233, 0.85)", // blue
    finalColor: "rgba(16, 185, 129, 0.85)", // pale green
    textColor: "#059669",
    equation: "Fe(s) + CuSO₄(aq) ⟶ FeSO₄(aq) + Cu(s)↓",
    observation:
      "নীল বর্ণের কপার সালফেট দ্রবণ ক্রমশ হালকা সবুজ Fe²⁺ আয়নে পরিবর্তিত হয় এবং পেরেকের গায়ে লালচে-বাদামী কপার জমা পড়ে।",
    conceptTip:
      "সক্রিয়তা সিরিজে কপারের চেয়ে আয়রন উপরে অবস্থিত হওয়ায় এটি কপারকে দ্রবণ থেকে প্রতিস্থাপিত করতে পারে।",
    paperTopic: "রসায়ন ২য় পত্র • অধ্যায় ৪: তড়িৎ রসায়ন",
    bubblesCount: 8,
    hasSmoke: false,
  },
  {
    id: "redox-kmno4",
    name: "পটাশিয়াম পারম্যাঙ্গানেট বর্ণহীন হওয়া",
    englishName: "Redox Decolorization (KMnO₄ + Oxalic Acid)",
    subtitle: "গাঢ় বেগুনী KMnO₄ দ্রবণে অক্সালিক অ্যাসিড যোগে বর্ণহীন হওয়া",
    reagents: ["KMnO₄ (গাঢ় বেগুনী)", "H₂C₂O₄ (অক্সালিক অ্যাসিড)", "H₂SO₄"],
    initialColor: "rgba(147, 51, 234, 0.9)", // deep purple
    finalColor: "rgba(241, 245, 249, 0.35)", // colorless
    textColor: "#9333ea",
    equation:
      "2KMnO₄ + 5H₂C₂O₄ + 3H₂SO₄ ⟶ K₂SO₄ + 2MnSO₄ + 10CO₂↑ + 8H₂O",
    observation:
      "অক্সালিক অ্যাসিডের বিজারণ ক্রিয়ায় ম্যাঙ্গানিজ (+7) থেকে (+2) অবস্থায় হ্রাস পাওয়ায় বেগুনী দ্রবণ পুরোপুরি বর্ণহীন হয়ে যায়।",
    conceptTip:
      "KMnO₄ স্বয়ং-নির্দেশক (Self-indicator) হিসেবে কাজ করে, তাই এই টাইট্রেশনে বাইরে থেকে কোনো নির্দেশক প্রয়োজন হয় না।",
    paperTopic: "রসায়ন ২য় পত্র • অধ্যায় ৩: জারণ-বিজারণ টাইট্রেশন",
    bubblesCount: 14,
    hasSmoke: true,
  },
]

export function ReactionLab() {
  const [selectedReaction, setSelectedReaction] = React.useState<Reaction>(
    reactions[0]
  )
  const [isReacting, setIsReacting] = React.useState(false)
  const [reacted, setReacted] = React.useState(false)
  const [heatLevel, setHeatLevel] = React.useState(50)

  const triggerReaction = () => {
    setIsReacting(true)
    setTimeout(() => {
      setReacted(true)
      setIsReacting(false)
      // Trigger confetti on successful lab reaction
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.7 },
          colors: ["#f97316", "#0ea5e9", "#10b981", "#ec4899"],
        })
      } catch {
        // fallback
      }
    }, 1200)
  }

  const resetReaction = () => {
    setIsReacting(false)
    setReacted(false)
  }

  const handleSelectReaction = (r: Reaction) => {
    setSelectedReaction(r)
    setIsReacting(false)
    setReacted(false)
  }

  return (
    <section
      id="lab"
      className="relative overflow-hidden bg-slate-100/70 py-20 dark:bg-[#081026]/90"
    >
      {/* Decorative chemical background graphics */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-30 dark:opacity-20">
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <Badge
            variant="alchemist"
            className="mb-3 gap-1.5 px-3.5 py-1 text-xs font-semibold"
          >
            <FlaskConical className="h-3.5 w-3.5 text-orange-500" />
            <span>অ্যালকেমিস্ট ভার্চুয়াল ল্যাব (Interactive Demo)</span>
          </Badge>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            হাতে-কলমে রসায়নের ম্যাজিক এক্সপ্লোর করুন
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-slate-600 sm:text-base dark:text-slate-300">
            নয়ন স্যারের ক্লাসে মুখস্থ নয়, রসায়নের জটিল বিক্রিয়াগুলো ঘটে চোখের সামনে।
            নিচের রিঅ্যাকশনগুলোতে ট্যাপ করে বিকারের লাইভ পরিবর্তন দেখুন!
          </p>
        </div>

        {/* Lab Workspace Grid */}
        <div className="mt-12 grid items-center gap-8 lg:grid-cols-12">
          {/* Reaction Selector (Mobile swipeable buttons / list) */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            <span className="text-xs font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
              বিক্রিয়া নির্বাচন করুন (Select Reaction):
            </span>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {reactions.map((r) => {
                const isSelected = r.id === selectedReaction.id
                return (
                  <button
                    key={r.id}
                    onClick={() => handleSelectReaction(r)}
                    className={`flex flex-col rounded-2xl border p-4 text-left transition-[color,background-color,border-color,box-shadow,transform] duration-150 ease-out active:scale-[0.96] ${
                      isSelected
                        ? "border-orange-500 bg-white shadow-md ring-2 ring-orange-500/20 dark:border-orange-500 dark:bg-slate-900"
                        : "border-slate-200 bg-white/60 hover:border-slate-300 hover:bg-white dark:border-slate-800 dark:bg-slate-900/60 dark:hover:bg-slate-900"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                        {r.name}
                      </h4>
                      {isSelected && (
                        <span className="rounded-full bg-orange-100 p-1 text-orange-600 dark:bg-orange-950 dark:text-orange-400">
                          <CheckCircle2 className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                    <span className="mt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
                      {r.englishName}
                    </span>
                    <span className="mt-2 text-[11px] text-orange-600 font-medium dark:text-orange-400">
                      {r.paperTopic}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Interactive Beaker Simulation & Observation Console */}
          <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl backdrop-blur-md lg:col-span-7 dark:border-slate-800 dark:bg-slate-900">
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              {/* Beaker Container */}
              <div className="flex flex-col items-center justify-center md:col-span-5">
                <div className="relative flex h-64 w-48 flex-col justify-end overflow-hidden rounded-b-3xl rounded-t-lg border-4 border-t-0 border-slate-400/70 bg-gradient-to-b from-white/20 via-slate-100/10 to-slate-200/40 p-1 shadow-inner backdrop-blur-sm dark:border-slate-600/70 dark:from-slate-800/20">
                  {/* Beaker Lip */}
                  <div className="absolute top-0 left-0 right-0 h-2 border-b-2 border-slate-300 dark:border-slate-700" />

                  {/* Volume Graduation Marks */}
                  <div className="pointer-events-none absolute top-6 right-2 flex flex-col gap-5 text-[9px] font-mono text-slate-400 select-none dark:text-slate-500">
                    <div>- 250ml</div>
                    <div>- 200ml</div>
                    <div>- 150ml</div>
                    <div>- 100ml</div>
                    <div>- 50ml</div>
                  </div>

                  {/* Vapor Smoke Particles */}
                  {selectedReaction.hasSmoke && (isReacting || reacted) && (
                    <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2">
                      <div className="h-10 w-16 rounded-full bg-slate-300/40 blur-md animate-ping [animation-duration:3s] dark:bg-slate-600/40" />
                    </div>
                  )}

                  {/* Dynamic Solution Liquid */}
                  <div
                    className="relative w-full rounded-b-2xl transition-[height,background-color,box-shadow] duration-1000 ease-out"
                    style={{
                      height: reacted ? "62%" : isReacting ? "58%" : "50%",
                      backgroundColor: reacted
                        ? selectedReaction.finalColor
                        : selectedReaction.initialColor,
                      boxShadow: isReacting
                        ? "0 0 25px rgba(249, 115, 22, 0.4)"
                        : "none",
                    }}
                  >
                    {/* Meniscus Wave */}
                    <div className="absolute top-0 right-0 left-0 h-3 rounded-full bg-white/30 blur-[1px]" />

                    {/* Rising Chemistry Bubbles */}
                    {(isReacting || reacted) && (
                      <div className="absolute inset-0 overflow-hidden">
                        <span className="animate-bubble-1 absolute bottom-2 left-6 h-3 w-3 rounded-full bg-white/70 shadow-sm" />
                        <span className="animate-bubble-2 absolute bottom-4 left-14 h-2.5 w-2.5 rounded-full bg-white/70 shadow-sm" />
                        <span className="animate-bubble-3 absolute bottom-3 right-8 h-3.5 w-3.5 rounded-full bg-white/70 shadow-sm" />
                        <span className="animate-bubble-1 absolute bottom-1 right-14 h-2 w-2 rounded-full bg-white/70 shadow-sm" />
                        {selectedReaction.bubblesCount > 10 && (
                          <>
                            <span className="animate-bubble-2 absolute bottom-2 left-20 h-3 w-3 rounded-full bg-white/80" />
                            <span className="animate-bubble-3 absolute bottom-5 left-10 h-2 w-2 rounded-full bg-white/80" />
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Beaker Bottom Stand / Hotplate */}
                <div className="mt-2 flex h-3 w-40 items-center justify-center rounded-full bg-slate-300 shadow-sm dark:bg-slate-700">
                  <div className="h-1.5 w-24 rounded-full bg-slate-400 dark:bg-slate-600" />
                </div>

                {/* Reaction Controls */}
                <div className="mt-5 flex items-center gap-2">
                  <Button
                    onClick={triggerReaction}
                    disabled={isReacting || reacted}
                    className="gap-2 rounded-xl bg-orange-600 ps-4 pe-4.5 text-xs font-semibold text-white shadow hover:bg-orange-700 active:scale-[0.96] disabled:opacity-50"
                  >
                    <Flame className="h-4 w-4" />
                    {isReacting
                      ? "বিক্রিয়া ঘটছে..."
                      : reacted
                      ? "বিক্রিয়া সম্পন্ন"
                      : "বিক্রিয়া ঘটান"}
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={resetResetReaction => resetReaction()}
                    title="রিসেট করুন (Reset)"
                    className="rounded-xl border-slate-300 dark:border-slate-700"
                  >
                    <RefreshCw className="h-4 w-4 text-slate-600 dark:text-slate-300" />
                  </Button>
                </div>
              </div>

              {/* Chemical Equation & Real-time Observation Box */}
              <div className="flex flex-col gap-4 md:col-span-7">
                {/* Reagent Pills */}
                <div>
                  <span className="text-[11px] font-bold text-slate-500 uppercase dark:text-slate-400">
                    বিকারের উপাদান (Reagents in Beaker):
                  </span>
                  <div className="mt-1.5 flex flex-wrap gap-1.5">
                    {selectedReaction.reagents.map((reagent, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="font-mono text-xs"
                      >
                        {reagent}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Chemical Reaction Formula */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-950">
                  <span className="text-[10px] font-bold tracking-wider text-slate-500 uppercase dark:text-slate-400">
                    ব্যালেন্সড সমীকরণ (Balanced Equation):
                  </span>
                  <div className="mt-1 font-mono text-xs font-semibold text-slate-900 sm:text-sm dark:text-orange-300">
                    {selectedReaction.equation}
                  </div>
                </div>

                {/* Observation Box */}
                <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-3.5 dark:border-blue-950 dark:bg-blue-950/40">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blue-900 dark:text-blue-300">
                    <Sparkles className="h-3.5 w-3.5 text-orange-500" />
                    <span>পর্যবেক্ষণ (Visual Observation):</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
                    {reacted
                      ? selectedReaction.observation
                      : "বিক্রিয়া শুরু করতে 'বিক্রিয়া ঘটান' বাটনে চাপ দিন। বিকারের দ্রবণের বর্ণ পরিবর্তন এবং গ্যাসের বুদবুদ লক্ষ্য করুন।"}
                  </p>
                </div>

                {/* Nayon Sir's Concept Tip */}
                <div className="rounded-xl border border-orange-200 bg-orange-50/70 p-3.5 dark:border-orange-950 dark:bg-orange-950/30">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-orange-800 dark:text-orange-300">
                    <Info className="h-3.5 w-3.5 text-orange-600" />
                    <span>নয়ন স্যারের স্পেশাল কনসেপ্ট টিপস:</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
                    {selectedReaction.conceptTip}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

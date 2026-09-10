"use client"

import { motion, MotionConfig, useReducedMotion, type Transition } from "motion/react"
import {
  createContext,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { cn } from "@/lib/utils"

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export type TabsVariant = "pill" | "underline" | "segment"

type Ctx = {
  value: string
  setValue: (v: string) => void
  layoutId: string
  variant: TabsVariant
}

const TabsCtx = createContext<Ctx | null>(null)

function useTabs() {
  const ctx = useContext(TabsCtx)
  if (!ctx) throw new Error("Tabs.* must be used inside <Tabs>")
  return ctx
}

// Weighty spring for the active-tab indicator: a touch of overshoot so it
// settles with life instead of snapping.
const transition: Transition = {
  type: "spring",
  stiffness: 170,
  damping: 24,
  mass: 1.2,
}

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  variant = "pill",
  children,
  className,
}: {
  defaultValue?: string
  value?: string
  onValueChange?: (v: string) => void
  variant?: TabsVariant
  children: ReactNode
  className?: string
}) {
  const [internal, setInternal] = useState(defaultValue ?? "")
  const layoutId = useId()
  const reduce = useReducedMotion()
  const controlled = value !== undefined
  const current = controlled ? value : internal
  const setValue = useCallback(
    (v: string) => {
      if (!controlled) setInternal(v)
      onValueChange?.(v)
    },
    [controlled, onValueChange],
  )
  const contextValue = useMemo(
    () => ({ value: current, setValue, layoutId, variant }),
    [current, layoutId, setValue, variant],
  )
  return (
    <MotionConfig transition={reduce ? { duration: 0 } : transition}>
      <TabsCtx.Provider value={contextValue}>
        {/* layoutRoot: the indicator's layoutId measures in page coordinates, so
            inside fixed/scrolled containers it would replay scroll offsets as
            movement. The pill only ever travels within the list, so scoping
            projection to the Tabs wrapper is always correct. */}
        <motion.div layoutRoot className={className}>
          {children}
        </motion.div>
      </TabsCtx.Provider>
    </MotionConfig>
  )
}

const listClasses: Record<TabsVariant, string> = {
  pill: "inline-flex items-center gap-1 rounded-full bg-slate-100/90 p-1.5 border border-slate-200/90 shadow-2xs",
  underline: "inline-flex items-center gap-1 border-b border-slate-200",
  segment: "inline-flex items-center gap-0.5 rounded-xl bg-slate-100/90 p-1 border border-slate-200/90",
}

export function TabsList({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const { variant } = useTabs()
  return (
    <div role="tablist" className={cn(listClasses[variant], className)}>
      {children}
    </div>
  )
}

export function TabsTrigger({
  value,
  children,
  className,
  indicatorClassName,
}: {
  value: string
  children: ReactNode
  className?: string
  indicatorClassName?: string
}) {
  const { value: current, setValue, layoutId, variant } = useTabs()
  const active = current === value

  if (variant === "underline") {
    return (
      <button
        type="button"
        role="tab"
        aria-selected={active}
        onClick={() => setValue(value)}
        className={cn(
          "relative isolate px-4 pb-2.5 pt-1 -mb-px text-sm font-semibold transition-colors min-h-[44px] inline-flex items-center cursor-pointer",
          active ? "text-[#0F172A]" : "text-slate-500 hover:text-[#0F172A]",
          className,
        )}
      >
        {children}
        {active ? (
          <motion.span
            layoutId={layoutId}
            layout="position"
            className={cn(
              "absolute -bottom-px left-0 right-0 h-0.5 bg-[#0D47A1]",
              indicatorClassName,
            )}
          />
        ) : null}
      </button>
    )
  }

  const radius = variant === "pill" ? "rounded-full" : "rounded-lg"

  return (
    <div className="relative">
      {active ? (
        <motion.span
          layoutId={layoutId}
          layout="position"
          style={{ borderRadius: variant === "pill" ? 9999 : 8 }}
          className={cn(
            "absolute inset-0 bg-[#0F172A] shadow-xs",
            radius,
            indicatorClassName,
          )}
        />
      ) : null}
      <button
        type="button"
        role="tab"
        aria-selected={active}
        onClick={() => setValue(value)}
        className={cn(
          "relative z-10 inline-flex items-center justify-center whitespace-nowrap bg-transparent px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold outline-none cursor-pointer",
          "transition-colors duration-150 select-none",
          active
            ? "text-white"
            : "text-[#475569] hover:text-[#0F172A]",
          radius,
          className,
        )}
      >
        {children}
      </button>
    </div>
  )
}

export function TabsContent({
  value,
  children,
  className,
}: {
  value: string
  children: ReactNode
  className?: string
}) {
  const { value: current } = useTabs()
  const reduce = useReducedMotion()
  const active = current === value

  if (!active) {
    return (
      <div hidden className={className}>
        {children}
      </div>
    )
  }
  return (
    <motion.div
      key={value}
      initial={{ opacity: 0, y: reduce ? 0 : 4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: EASE_OUT }}
      className={cn("mt-4", className)}
    >
      {children}
    </motion.div>
  )
}

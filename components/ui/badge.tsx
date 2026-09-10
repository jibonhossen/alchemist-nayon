import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-[color,background-color,border-color] duration-150 ease-out select-none",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[#17171c] text-white shadow-2xs hover:bg-black",
        secondary:
          "border-[#d9d9dd] bg-[#eeece7] text-[#212121]",
        destructive:
          "border-transparent bg-[#b30000]/10 text-[#b30000] border-[#b30000]/20",
        outline: "border-[#d9d9dd] text-[#212121] bg-[#ffffff]",
        coral:
          "border-[#ffad9b] bg-[#fff4f1] text-[#ff7759] font-semibold",
        alchemist:
          "border-[#ffad9b] bg-[#fff4f1] text-[#ff7759] font-semibold",
        green:
          "border-[#003c33]/20 bg-[#edfce9] text-[#003c33] font-semibold",
        stone:
          "border-[#d9d9dd] bg-[#eeece7] text-[#17171c]",
        navy:
          "border-[#071829]/20 bg-[#f1f5ff] text-[#071829] font-semibold",
        success:
          "border-[#003c33]/20 bg-[#edfce9] text-[#003c33] font-semibold",
        amber:
          "border-amber-400/40 bg-amber-50 text-amber-900 font-semibold",
        purple:
          "border-purple-300 bg-purple-50 text-purple-900 font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

import * as React from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] duration-150 ease-out outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 active:not-disabled:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-[#0D47A1] text-white shadow-md shadow-[#0D47A1]/20 hover:bg-[#0B3D91] active:scale-[0.98]",
        primary:
          "rounded-full bg-[#0D47A1] text-white shadow-md shadow-[#0D47A1]/20 hover:bg-[#0B3D91] active:scale-[0.98]",
        orange:
          "rounded-full bg-[#F57C00] text-white shadow-md shadow-[#F57C00]/25 hover:bg-[#E65100] active:scale-[0.98]",
        outline:
          "rounded-full border-2 border-[#0D47A1]/25 bg-transparent text-[#0D47A1] hover:bg-[#F0F7FF] hover:border-[#0D47A1] active:scale-[0.98]",
        secondary:
          "rounded-full bg-[#F0F7FF] text-[#0D47A1] hover:bg-[#E1F5FE] active:scale-[0.98]",
        ghost:
          "rounded-xl hover:bg-[#F0F7FF] hover:text-[#0D47A1]",
        destructive:
          "rounded-full bg-[#E53935] text-white shadow-xs hover:bg-[#D32F2F]",
        link: "text-[#0D47A1] underline underline-offset-4 hover:text-[#F57C00]",
        coral:
          "rounded-full bg-[#F57C00] text-white shadow-sm shadow-[#F57C00]/20 hover:bg-[#E65100] active:scale-[0.98]",
        green:
          "rounded-full bg-[#003c33] text-white shadow-sm hover:bg-[#002e27] active:scale-[0.98]",
        alchemist:
          "rounded-full bg-[#0D47A1] text-white hover:bg-[#0B3D91] active:scale-[0.98]",
        navy:
          "rounded-full bg-[#071829] text-white hover:bg-[#0b243d] active:scale-[0.98]",
      },
      size: {
        default: "h-10 gap-2 px-5 py-2",
        xs: "h-7 gap-1 rounded-full px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 rounded-full px-3.5 text-xs [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-12 gap-2.5 rounded-full px-7 text-sm sm:text-base font-bold",
        icon: "size-10 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {
  static?: boolean
}

function Button({
  className,
  variant = "default",
  size = "default",
  static: isStatic = false,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size }),
        isStatic && "active:scale-100",
        className
      )}
      {...props}
    />
  )
}

export { Button, buttonVariants }

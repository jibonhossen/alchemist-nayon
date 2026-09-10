import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const BANGLA_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"]

export function toBanglaNumber(value: number | string): string {
  return String(value).replace(/\d/g, (d) => BANGLA_DIGITS[Number(d)])
}

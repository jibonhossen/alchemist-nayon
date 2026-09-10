"use client";

import { animate, motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef } from "react";
import { EASE_OUT } from "@/lib/ease";
import { cn, toBanglaNumber } from "@/lib/utils";

export interface NumberTickerProps {
  value: number;
  /** Digits to pad to (left). */
  pad?: number;
  /** Per-digit roll duration in seconds. */
  duration?: number;
  /** Stagger between digits. */
  stagger?: number;
  /** Render only after the element enters the viewport. */
  startOnView?: boolean;
  prefix?: string;
  suffix?: string;
  /** Add a small blur during digit rolls. */
  blur?: boolean;
  className?: string;
  digitClassName?: string;
  /** Insert locale group separators (commas) or specify locale like 'bn-BD'. */
  locale?: boolean | string;
  /** Custom formatter. Client-only. */
  format?: (value: number) => string;
}

const DIGIT_HEIGHT_EM = 1.15;
const BANGLA_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
const LATIN_DIGITS = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const DIGIT_CYCLE = 10;

// Triple repeats to allow smooth continuous roll into the target digit
const REPEATED_BANGLA = [...BANGLA_DIGITS, ...BANGLA_DIGITS, ...BANGLA_DIGITS];
const REPEATED_LATIN = [...LATIN_DIGITS, ...LATIN_DIGITS, ...LATIN_DIGITS];

export function NumberTicker({
  value,
  pad,
  duration = 1.0,
  stagger = 0.08,
  startOnView = true,
  prefix,
  suffix,
  blur = false,
  className,
  digitClassName,
  locale,
  format,
}: NumberTickerProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.1 });
  const armed = !startOnView || inView;

  const text = useMemo(() => {
    const rounded = Math.round(value);
    if (format) return format(rounded);
    if (locale === "bn-BD" || locale === "bn") {
      const formattedEn = rounded.toLocaleString("en-US");
      const banglaStr = toBanglaNumber(formattedEn);
      return pad ? banglaStr.padStart(pad, "০") : banglaStr;
    }
    const formatted = typeof locale === "string"
      ? new Intl.NumberFormat(locale).format(rounded)
      : locale
        ? rounded.toLocaleString()
        : rounded.toString();
    return pad ? formatted.padStart(pad, "0") : formatted;
  }, [value, pad, format, locale]);

  const glyphs = useMemo(() => {
    const chars = text.split("");
    return chars.map((char, i) => ({ char, id: `g-${chars.length - 1 - i}`, index: i }));
  }, [text]);

  const readableText = `${prefix ?? ""}${text}${suffix ?? ""}`;

  return (
    <span
      ref={containerRef}
      className={cn("inline-flex items-center tabular-nums leading-none", className)}
    >
      <span className="sr-only">{readableText}</span>
      <span aria-hidden="true" className="inline-flex items-center">
        {prefix ? <span>{prefix}</span> : null}
        {glyphs.map(({ char, id, index }) => {
          const isLatinDigit = /[0-9]/.test(char);
          const isBanglaDigit = BANGLA_DIGITS.includes(char);

          if (!isLatinDigit && !isBanglaDigit) {
            return (
              <span key={id} className="inline-block px-0.5">
                {char}
              </span>
            );
          }

          const digitIndex = isBanglaDigit
            ? BANGLA_DIGITS.indexOf(char)
            : Number(char);

          return (
            <Digit
              key={id}
              digitIndex={digitIndex}
              isBangla={isBanglaDigit}
              armed={armed}
              delay={index * stagger}
              duration={duration}
              blur={blur}
              className={digitClassName}
            />
          );
        })}
        {suffix ? <span>{suffix}</span> : null}
      </span>
    </span>
  );
}

function Digit({
  digitIndex,
  isBangla,
  armed,
  delay,
  duration,
  blur,
  className,
}: {
  digitIndex: number;
  isBangla: boolean;
  armed: boolean;
  delay: number;
  duration: number;
  blur: boolean;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const columnRef = useRef<HTMLSpanElement>(null);
  const digitsList = isBangla ? REPEATED_BANGLA : REPEATED_LATIN;
  const targetOffset = armed ? -(DIGIT_CYCLE + digitIndex) * DIGIT_HEIGHT_EM : 0;

  useEffect(() => {
    if (reduce || !blur || !columnRef.current || !armed) {
      return;
    }

    const node = columnRef.current;
    const controls = animate(
      node,
      { filter: ["blur(4px)", "blur(0px)"] },
      {
        duration: Math.min(duration * 0.75, 0.4),
        delay,
        ease: EASE_OUT,
      },
    );

    return () => {
      controls.stop();
      node.style.filter = "blur(0px)";
    };
  }, [blur, delay, armed, duration, reduce]);

  return (
    <span
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden align-middle select-none",
        className,
      )}
      style={{
        height: `${DIGIT_HEIGHT_EM}em`,
        width: isBangla ? "0.68em" : "0.58em",
      }}
    >
      <motion.span
        ref={columnRef}
        initial={{ y: 0 }}
        animate={{ y: `${targetOffset}em` }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration, delay, ease: EASE_OUT }
        }
        className="absolute inset-x-0 top-0 flex flex-col items-center will-change-[transform,filter]"
      >
        {digitsList.map((n, i) => (
          <span
            key={i}
            className="flex items-center justify-center leading-none"
            style={{ height: `${DIGIT_HEIGHT_EM}em` }}
          >
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

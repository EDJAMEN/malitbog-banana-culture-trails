"use client";

import { useEffect, useRef, useState } from "react";

type Row = { name: string; pop: number | null };

const DURATION = 1200; // per-row bar + count time
const STAGGER = 90; // delay between rows

const easeOut = (x: number) => 1 - Math.pow(1 - x, 3);

// Bars grow and numbers count up, row by row, the first time the list is seen.
export default function PopulationBars({ rows }: { rows: Row[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const [visible, setVisible] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const max = Math.max(...rows.map((r) => r.pop ?? 0));
  const total = DURATION + STAGGER * rows.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let start = 0;
    const step = (now: number) => {
      if (!start) start = now;
      const t = reduce ? total : now - start;
      setElapsed(t);
      if (t < total) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible, total]);

  return (
    <ul ref={ref} className="mt-6 space-y-1">
      {rows.map((b, i) => {
        const raw = Math.min(1, Math.max(0, (elapsed - i * STAGGER) / DURATION));
        const p = easeOut(raw);
        const appear = Math.min(1, raw * 3);
        return (
          <li
            key={b.name}
            style={{ opacity: appear, transform: `translateX(${(1 - appear) * -12}px)` }}
            className="group grid grid-cols-[7rem_1fr_4rem] items-center gap-4 rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-white/70"
          >
            <span className="transition group-hover:text-leaf">{b.name}</span>
            <span className="h-1.5 overflow-hidden rounded-full bg-line transition-all group-hover:h-2.5">
              {b.pop !== null && (
                <span
                  className="relative block h-full rounded-full bg-linear-to-r from-leaf to-banana"
                  style={{ width: `${(b.pop / max) * 100 * p}%` }}
                >
                  {/* glowing tip while the bar is still growing */}
                  {raw > 0 && raw < 1 && (
                    <span className="absolute right-0 top-1/2 size-2.5 -translate-y-1/2 translate-x-1/2 rounded-full bg-banana shadow-[0_0_12px_2px_var(--banana)]" />
                  )}
                </span>
              )}
            </span>
            <span className="text-right font-mono tabular-nums text-muted transition group-hover:text-ink">
              {b.pop !== null ? Math.round(b.pop * p).toLocaleString("en-US") : "—"}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

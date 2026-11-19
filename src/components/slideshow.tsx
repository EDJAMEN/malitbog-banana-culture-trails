"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export type Slide = { src: string; alt: string; position?: string };

type Props = {
  slides: Slide[];
  sizes: string;
  interval?: number;
  offset?: number; // stagger start so neighbouring slideshows don't change in sync
};

// Crossfading slideshow with a slow Ken Burns drift on the active photo.
export default function Slideshow({ slides, sizes, interval = 5000, offset = 0 }: Props) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> | undefined;
    const start = setTimeout(() => {
      timer = setInterval(() => setActive((n) => (n + 1) % slides.length), interval);
    }, offset);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [slides.length, interval, offset]);

  return (
    <>
      {slides.map((s, n) => {
        const on = n === active;
        return (
          <Image
            key={s.src}
            src={s.src}
            alt={on ? s.alt : ""}
            fill
            sizes={sizes}
            style={{
              objectPosition: s.position,
              transitionProperty: "opacity, transform",
              transitionDuration: on ? `1200ms, ${interval + 2000}ms` : "1200ms, 1200ms",
            }}
            className={`object-cover ease-out motion-reduce:transition-none ${
              on ? "scale-110 opacity-100" : "scale-100 opacity-0"
            }`}
          />
        );
      })}
      <div className="absolute bottom-5 right-6 z-10 flex gap-1.5">
        {slides.map((s, n) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Show photo ${n + 1} of ${slides.length}`}
            aria-current={n === active}
            onClick={() => setActive(n)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              n === active ? "w-6 bg-banana" : "w-1.5 bg-paper/60 hover:bg-paper"
            }`}
          />
        ))}
      </div>
    </>
  );
}

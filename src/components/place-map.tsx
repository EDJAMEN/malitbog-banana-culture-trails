"use client";

import { useEffect, useRef, useState } from "react";

type Place = {
  id: string;
  kicker: string;
  name: string;
  body: string;
  query: string;
  zoom: number;
};

const places: Place[] = [
  {
    id: "town",
    kicker: "Town · Bukidnon",
    name: "Malitbog",
    body: "Poblacion, the town center, at 8.5363° N, 124.8792° E.",
    query: "Malitbog, Bukidnon, Philippines",
    zoom: 12,
  },
  {
    id: "hall",
    kicker: "Local government · Poblacion",
    name: "Municipal Hall",
    body: "Seat of the Malitbog local government, in the town center.",
    query: "Malitbog Municipal Hall, Malitbog, Bukidnon",
    zoom: 16,
  },
  {
    id: "farms",
    kicker: "Banana farming · Malitbog",
    name: "Banana farms",
    body: "Smallholder Saba, Lakatan, and Latundan farms across Malitbog’s rolling farmland.",
    query: "Banana farm, Malitbog, Bukidnon",
    zoom: 12,
  },
  {
    id: "barbeco",
    kicker: "Cooperative · Belayong",
    name: "BARBECO",
    body: "Banana plantation and on-site chip processing in Sitio Belayong, Poblacion.",
    query: "Belayong, Malitbog, Bukidnon",
    zoom: 14,
  },
  {
    id: "falls",
    kicker: "Waterfall · San Luis",
    name: "Bagyangon Falls",
    body: "A forest-side waterfall in Sitio Bagyangon, Barangay San Luis. Ask locally about current access and the route in.",
    query: "Bagyangon Falls, San Luis, Malitbog, Bukidnon",
    zoom: 14,
  },
  {
    id: "ridge",
    kicker: "Ridge · Malitbog",
    name: "Buklod Ridge",
    body: "Head toward the highlands for a mountain landscape. Confirm the best trail and permission with local guides before your visit.",
    query: "Buklod Ridge, Malitbog, Bukidnon",
    zoom: 14,
  },
];

const embedUrl = (p: Place) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(p.query)}&z=${p.zoom}&output=embed`;
const mapsUrl = (p: Place) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.query)}`;

const MIN_LOCATE_MS = 1000; // keep the locating sequence visible even on fast loads

function Pin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

function Icon({ d, className = "size-4" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden className={className}>
      <path d={d} />
    </svg>
  );
}

const ICON_EXPAND = "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7";
const ICON_CLOSE = "M18 6 6 18M6 6l12 12";
const ICON_EXTERNAL = "M14 3h7v7M21 3l-9 9M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5";

const mapButton =
  "sheen inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium shadow-lg shadow-ink/20 ring-1 transition active:scale-95 outline-none focus-visible:ring-2 focus-visible:ring-banana";

export default function PlaceMap() {
  const [active, setActive] = useState(places[0]);
  const [locating, setLocating] = useState(true);
  const [expanded, setExpanded] = useState(false);
  // Shield keeps page scroll from being captured by the map until the user opts in.
  const [interactive, setInteractive] = useState(false);
  const startedAt = useRef(0);
  const seq = useRef(0);

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setExpanded(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [expanded]);

  // Event timestamps share performance.now()'s clock.
  const select = (p: Place, at: number) => {
    if (p.id === active.id) return;
    seq.current += 1;
    startedAt.current = at;
    setLocating(true);
    setActive(p);
  };

  const onLoad = (e: React.SyntheticEvent) => {
    const mine = seq.current; // ignore stale loads after a newer selection
    const wait = Math.max(0, MIN_LOCATE_MS - (e.timeStamp - startedAt.current));
    setTimeout(() => {
      if (mine === seq.current) setLocating(false);
    }, wait);
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5 lg:items-start">
      <div className="lg:col-span-2">
        <div className="reveal">
          <p className="text-xs uppercase tracking-[0.25em] text-leaf">06 — Find your way</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
            The northern highlands of{" "}
            <em className="bg-linear-to-r from-leaf to-banana bg-clip-text text-transparent">
              Bukidnon.
            </em>
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            Malitbog is in Northern Mindanao, Philippines. It sits at the
            northern edge of Bukidnon, about 40 km from Cagayan de Oro.
          </p>
        </div>

        <ul className="mt-8 space-y-1.5">
          {places.map((p) => {
            const on = p.id === active.id;
            return (
              <li
                key={p.id}
                className={`rounded-2xl border transition duration-500 ${
                  on
                    ? "border-leaf/20 bg-white shadow-xl shadow-leaf/10"
                    : "border-transparent hover:bg-white/60"
                }`}
              >
                <button
                  type="button"
                  onClick={(e) => select(p, e.timeStamp)}
                  aria-pressed={on}
                  className="group flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left outline-none focus-visible:ring-2 focus-visible:ring-banana"
                >
                  <span
                    className={`size-2 shrink-0 rounded-full transition duration-500 ${
                      on ? "bg-banana ring-4 ring-banana/25" : "bg-line group-hover:bg-leaf"
                    }`}
                  />
                  <span className="flex-1">
                    <span className="block text-[10px] uppercase tracking-[0.25em] text-muted">
                      {p.kicker}
                    </span>
                    <span className="mt-1 block font-serif text-xl">{p.name}</span>
                  </span>
                  <span
                    className={`text-leaf transition duration-500 ${
                      on ? "" : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  >
                    →
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ${
                    on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pl-11">
                      <p className="text-sm leading-relaxed text-muted">{p.body}</p>
                      <a
                        href={mapsUrl(p)}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={on ? 0 : -1}
                        className="mt-3 inline-block border-b border-leaf/30 pb-0.5 text-sm text-leaf transition hover:border-banana"
                      >
                        Open in Google Maps ↗
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Fixed-height slot keeps the page layout steady while the map is fullscreen */}
      <div className="h-[70svh] min-h-[480px] lg:col-span-3 lg:h-[760px]">
        {expanded && (
          <div
            className="fixed inset-0 z-[70] bg-ink/60 backdrop-blur-sm"
            onClick={() => setExpanded(false)}
            aria-hidden
          />
        )}
        <div
          role={expanded ? "dialog" : undefined}
          aria-modal={expanded || undefined}
          aria-label={expanded ? `Full map of ${active.name}` : undefined}
          className={`group overflow-hidden border border-line bg-[#e8efe6] shadow-2xl shadow-ink/10 ${
            expanded
              ? "rise fixed inset-3 z-[80] rounded-2xl md:inset-8"
              : "relative size-full rounded-3xl"
          }`}
          onMouseLeave={() => setInteractive(false)}
        >
          <iframe
            key={active.id}
            src={embedUrl(active)}
            title={`Map of ${active.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            onLoad={onLoad}
            className={`absolute inset-0 size-full border-0 saturate-[.85] transition-[opacity,transform,filter] duration-[1400ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:saturate-100 ${
              locating ? "scale-125 opacity-0 blur-md" : "scale-100 opacity-100 blur-0"
            }`}
          />

          {/* Locating sequence */}
          <div
            aria-live="polite"
            className={`pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 overflow-hidden bg-paper/70 backdrop-blur-sm transition-opacity duration-700 ${
              locating ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="scan absolute inset-x-0 top-0 h-1/2 bg-linear-to-b from-transparent via-banana/25 to-transparent" />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
              }}
            />
            <div className="relative flex size-20 items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-banana/40 motion-reduce:animate-none" />
              <span className="absolute inset-4 animate-ping rounded-full bg-leaf/30 [animation-delay:400ms] motion-reduce:animate-none" />
              <Pin className="relative size-9 text-leaf drop-shadow" />
            </div>
            <p className="relative text-xs uppercase tracking-[0.25em] text-ink">
              {locating ? `Locating ${active.name}…` : ""}
            </p>
          </div>

          {/* Scroll shield: page scroll passes over the map until clicked */}
          {!interactive && !expanded && !locating && (
            <button
              type="button"
              onClick={() => setInteractive(true)}
              className="absolute inset-0 z-[5] flex cursor-pointer items-end justify-center pb-20 outline-none"
              aria-label="Click to interact with the map"
            >
              <span className="rounded-full bg-ink/80 px-4 py-2 text-xs text-paper opacity-0 shadow-lg backdrop-blur transition duration-300 group-hover:opacity-100">
                Click to explore the map
              </span>
            </button>
          )}

          {/* Place chip */}
          <div
            className={`absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full bg-paper/90 px-4 py-2 text-xs shadow-lg backdrop-blur transition duration-700 ${
              locating ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            <Pin className="size-3.5 text-banana" />
            <span className="font-medium uppercase tracking-[0.15em]">{active.name}</span>
            <span className="text-muted">Malitbog, Bukidnon</span>
          </div>

          {/* Map controls */}
          <div className="absolute right-4 top-4 z-20 flex flex-wrap justify-end gap-2">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              className={`${mapButton} bg-paper text-ink ring-ink/10 hover:bg-white`}
            >
              <Icon d={expanded ? ICON_CLOSE : ICON_EXPAND} />
              {expanded ? "Close" : "View full map"}
            </button>
            <a
              href={mapsUrl(active)}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mapButton} bg-ink text-paper ring-paper/10 hover:bg-leaf`}
            >
              <Icon d={ICON_EXTERNAL} />
              Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

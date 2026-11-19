import Image from "next/image";
import PlaceMap from "../components/place-map";
import Slideshow from "../components/slideshow";

const img = (id: string) => `/images/${id}.jpg`;

const nav = [
  { href: "#growers", label: "Growers" },
  { href: "#cycle", label: "Cultivation" },
  { href: "#products", label: "Varieties" },
  { href: "#barangays", label: "Barangays" },
  { href: "#location", label: "Map" },
];

const stats = [
  { value: "581.85", unit: "km²", label: "Total land area across 11 barangays" },
  { value: "9–12", unit: "months", label: "Planting-to-harvest cultivation cycle" },
  { value: "~40", unit: "km", label: "Distance to Cagayan de Oro for regional distribution" },
];

const growers = [
  {
    kicker: "Smallholders · Malitbog",
    title: "Higaonon Tribal and Smallholder Growers",
    slides: [
      { src: img("1246cbf3-668e-4bdd-927f-769eaa45042b"), alt: "Higaonon woman in traditional attire", position: "50% 15%" },
      { src: img("24211cca-124d-489d-af98-724ed23bd57b"), alt: "Farmer carrying a harvested banana bunch", position: "50% 35%" },
      { src: "/images/bananas-2.jpg", alt: "Ripe banana bunch on a sunlit plant", position: "50% 40%" },
    ],
    points: [
      "Local banana farmers operating across Malitbog.",
      "Grow Saba, Latundan, and Lakatan bananas.",
      "Supply fresh bananas to regional buyers, processors, and organic banana chip makers.",
      "Support local agricultural livelihoods and municipal banana production.",
    ],
  },
  {
    kicker: "Cooperative · Belayong",
    title: "Belayong Agrarian Reform Beneficiaries Cooperative (BARBECO)",
    slides: [
      { src: img("b06bc70e-aabd-43d6-be33-012c681b41f6"), alt: "Workers slicing bananas for chip processing", position: "50% 40%" },
      { src: img("392fc211-c47b-4568-906f-c845e07e98c2"), alt: "Packaged Malitbog banana chips" },
      { src: "/images/bananas-3.jpg", alt: "Green banana hands growing on the stalk", position: "50% 45%" },
    ],
    points: [
      "Operates a banana plantation and an on-site banana-processing facility.",
      "Produces banana chips.",
      "Supported through Department of Agrarian Reform (DAR) programs.",
    ],
  },
];

const steps = [
  { n: "01", title: "Planting", body: "Young banana suckers are planted in rows on rolling farmland." },
  { n: "02", title: "Growing", body: "Plants flower after several months; developing bunches are bagged for protection." },
  { n: "03", title: "Harvest", body: "Bunches are ready approximately 9–12 months after planting." },
  { n: "04", title: "Market", body: "Harvests are sold fresh or processed into products like banana chips." },
];

const products = [
  {
    name: "Saba (Cardaba)",
    tag: "Cooking banana",
    body: "Used for chips, turon, and banana cue.",
    image: img("381c4e07-6c01-4e27-8062-1521cb096d05"),
    span: "md:col-span-2",
  },
  {
    name: "Lakatan",
    tag: "Eating banana",
    body: "Sweet, fragrant eating banana sold fresh.",
    image: img("3a83f543-0984-43b3-8341-9bb5b9ae4d5b"),
    span: "",
  },
  {
    name: "Latundan",
    tag: "Table banana",
    body: "Local table banana grown by smallholder farmers in Malitbog.",
    image: null,
    span: "",
  },
  {
    name: "Malitbog Banana Chips",
    tag: "Since 2011",
    body: "Started in 2011 with the Department of Agriculture (DA) and the municipal government. Early chips tasted rancid and needed better packaging until DOST’s CEST program improved the equipment, process, and labels—making the chips crispier.",
    image: img("392fc211-c47b-4568-906f-c845e07e98c2"),
    span: "md:col-span-2 md:row-span-2",
    featured: true,
  },
  {
    name: "Banana Cue",
    tag: "Street snack",
    body: "Saba caramelized in brown sugar on a stick.",
    image: img("eb43e5e2-b8a5-41a1-9ba5-53a274a0356d"),
    span: "md:col-span-2",
  },
  {
    name: "Turon",
    tag: "Street snack",
    body: "Saba rolled in a wrapper with sugar and fried crisp.",
    image: img("0a69ccea-d0db-43a8-ba24-4c87f277bc91"),
    span: "md:col-span-2",
  },
];

const barangays = [
  { name: "San Luis", pop: 6841 },
  { name: "Poblacion", pop: 3804 },
  { name: "Kiabo", pop: 2698 },
  { name: "Mindagat", pop: 1980 },
  { name: "Kalingking", pop: 1836 },
  { name: "Santa Ines", pop: 1675 },
  { name: "Patpat", pop: 1667 },
  { name: "Omagling", pop: 1416 },
  { name: "Sampiano", pop: 1257 },
  { name: "Silo-o", pop: null },
  { name: "Sumalsag", pop: null },
];

const varieties = ["Saba", "Lakatan", "Latundan", "Banana chips", "Banana cue", "Turon"];

const hallFacts = [
  { label: "Location", value: "Poblacion" },
  { label: "Serves", value: "11 barangays" },
  { label: "Land area", value: "581.85 km²" },
  { label: "Region", value: "Northern Mindanao" },
];

const culture = [
  {
    src: "/images/culture-dancers.jpg",
    kicker: "Cultural performance",
    caption: "Dancers in traditional attire",
    position: "50% 40%",
  },
  {
    src: "/images/culture-couple.jpg",
    kicker: "Kaamulan festival",
    caption: "Traditional dress and instruments",
    position: "50% 25%",
  },
  {
    src: "/images/culture-street.jpg",
    kicker: "Kaamulan festival",
    caption: "Street dancing in Bukidnon",
    position: "50% 50%",
  },
];

const partners = [
  {
    tag: "LGU",
    name: "Municipal Government of Malitbog",
    role: "Co-launched Malitbog banana chips with the DA in 2011.",
  },
  {
    tag: "DA",
    name: "Department of Agriculture",
    role: "Partnered with the municipal government on the first banana chip production.",
  },
  {
    tag: "DOST",
    name: "DOST · CEST Program",
    role: "Improved processing equipment, method, and labels for the chips.",
  },
  {
    tag: "DAR",
    name: "DAR Bukidnon",
    role: "Supports BARBECO through agrarian reform programs.",
  },
];

const maxPop =Math.max(...barangays.map((b) => b.pop ?? 0));

const sources = [
  { name: "Provincial Government of Bukidnon", href: "https://bukidnon.gov.ph/malitbog" },
  { name: "Department of Science and Technology (DOST), 2016" },
  { name: "Department of Agrarian Reform (DAR) Bukidnon" },
  { name: "PhilAtlas (2020 Census) & OpenStreetMap", href: "https://www.philatlas.com/mindanao/r10/bukidnon/malitbog.html" },
  { name: "Group 7 – Malitbog Market Research Survey" },
];

const eyebrow = "text-xs uppercase tracking-[0.25em]";
const gradientText = "bg-linear-to-r from-leaf to-banana bg-clip-text text-transparent";

export default function Home() {
  return (
    <>
      {/* Scroll progress line */}
      <div
        aria-hidden
        className="scroll-progress fixed inset-x-0 top-0 z-[60] h-[3px] bg-linear-to-r from-leaf via-banana to-banana"
      />

      {/* Floating glass nav */}
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-white/40 bg-paper/70 pl-6 pr-2 shadow-lg shadow-ink/5 backdrop-blur-xl">
          <a href="#home" className="font-serif text-lg font-medium">
            Saging
            <span className="ml-2 font-sans text-[10px] uppercase tracking-[0.25em] text-muted">
              Malitbog
            </span>
          </a>
          <nav className="hidden gap-1 text-sm text-muted md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 transition hover:bg-ink/5 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#location"
            className="sheen rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition hover:bg-leaf"
          >
            Find the farms
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section id="home" className="relative flex min-h-svh items-end overflow-hidden px-6 pb-12 pt-28 text-paper">
          <div className="hero-bg absolute inset-0">
            <Image
              src={img("08b71e4a-b25e-48de-b580-a82a037282fd")}
              alt="Banana plantation road with bagged bunches"
              fill
              preload
              sizes="100vw"
              className="kenburns object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/55 to-ink/10" />
          <div className="glow drift absolute -bottom-40 -left-40 size-[640px] rounded-full opacity-30 blur-3xl" aria-hidden />

          <div className="hero-out relative mx-auto w-full max-w-6xl">
            <p className="rise inline-flex items-center gap-3 rounded-full border border-paper/20 bg-paper/10 py-1.5 pl-1.5 pr-4 text-[11px] font-medium uppercase tracking-[0.18em] text-paper/90 backdrop-blur-md md:text-xs">
              <span className="rounded-full bg-banana px-2.5 py-1 text-ink">Saging sa Malitbog</span>
              Banana Farming in Bukidnon’s Great North
            </p>
            <h1 className="soft-display rise mt-6 font-serif text-[clamp(4rem,13vw,10rem)] font-semibold leading-[0.9] tracking-[-0.03em] [animation-delay:120ms]">
              Malitbog
            </h1>
            <p className="soft-italic rise mt-3 font-serif text-3xl font-light italic tracking-tight [animation-delay:200ms] md:text-5xl">
              <span className="bg-linear-to-r from-banana via-[#f3dfa0] to-paper bg-clip-text text-transparent">
                Where the land is the classroom.
              </span>
            </p>
            <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-paper/75 [animation-delay:280ms]">
              Learn how bananas grow, listen to Higaonon stories shared by the
              community, and find waterfalls and ridgelines in the highlands of
              Bukidnon.
            </p>
            <div className="rise mt-10 flex flex-wrap gap-3 [animation-delay:360ms]">
              <a
                href="#guide"
                className="sheen rounded-full bg-banana px-6 py-3 text-sm font-medium text-ink shadow-lg shadow-banana/20 transition hover:bg-[#f3cd6a]"
              >
                Discover the guide
              </a>
              <a
                href="#location"
                className="rounded-full border border-paper/30 bg-paper/10 px-6 py-3 text-sm text-paper backdrop-blur-md transition hover:bg-paper/20"
              >
                Find the town
              </a>
            </div>

            <dl className="rise mt-10 grid gap-3 [animation-delay:440ms] md:grid-cols-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="spot edge rounded-2xl border border-paper/15 bg-paper/10 p-6 backdrop-blur-md transition duration-500 hover:-translate-y-1 hover:bg-paper/15"
                >
                  <dd className="relative z-10 font-serif text-4xl md:text-5xl">
                    {s.value}
                    <span className="ml-2 font-sans text-sm text-banana">{s.unit}</span>
                  </dd>
                  <dt className="relative z-10 mt-3 text-sm text-paper/65">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Field guide intro */}
        <section id="guide" className="relative overflow-hidden px-6 pt-20 md:pt-24">
          <div className="glow drift absolute -right-40 top-10 size-[520px] rounded-full opacity-20 blur-3xl" aria-hidden />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div className="reveal">
              <p className={`${eyebrow} text-leaf`}>Field guide · A place to learn</p>
              <span className="mt-5 block h-px w-16 bg-linear-to-r from-leaf to-banana" />
              <p className="mt-8 font-serif text-3xl leading-snug md:text-[2.75rem] md:leading-[1.15]">
                In Malitbog, place, people, and practice come together.{" "}
                <em className="bg-linear-to-r from-leaf to-banana bg-clip-text text-transparent">
                  Start with the harvest. Stay for the mountain air.
                </em>
              </p>
              <p className="mt-6 max-w-md leading-relaxed text-muted">
                Smallholder farms, agrarian cooperatives, and farm-to-market
                banana production in Malitbog, Bukidnon.
              </p>
            </div>

            {/* Photo collage */}
            <div className="reveal relative mx-auto h-[300px] w-full max-w-md md:h-[360px]">
              <div className="spot edge group absolute right-0 top-0 h-full w-[62%] overflow-hidden rounded-3xl shadow-2xl shadow-ink/15 transition duration-700 hover:-translate-y-1">
                <Image
                  src="/images/bananas-2.jpg"
                  alt="Ripe banana bunch on a sunlit plant"
                  fill
                  sizes="(min-width: 768px) 30vw, 60vw"
                  className="parallax object-cover transition duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="spot edge group absolute bottom-8 left-0 h-[58%] w-[48%] overflow-hidden rounded-3xl border-[6px] border-paper shadow-2xl shadow-ink/20 transition duration-700 hover:-translate-y-1 hover:-rotate-1">
                <Image
                  src="/images/bananas-3.jpg"
                  alt="Green banana hands growing on the stalk"
                  fill
                  sizes="(min-width: 768px) 24vw, 50vw"
                  className="parallax object-cover transition duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute left-[6%] top-4 rounded-full bg-paper/90 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.15em] text-leaf shadow-lg backdrop-blur">
                ● Field notes · Malitbog
              </div>
            </div>
          </div>
        </section>

        {/* Growers & Cooperatives */}
        <section id="growers" className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="reveal">
              <p className={`${eyebrow} text-leaf`}>01 — Growers & cooperatives</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                The people who <em className={gradientText}>grow it.</em>
              </h2>
            </div>

            <div className="mt-10 md:mt-12grid gap-6 md:grid-cols-2">
              {growers.map((g, idx) => (
                <article
                  key={g.title}
                  className="reveal spot edge group overflow-hidden rounded-3xl border border-line bg-white/50 transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-leaf/10"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Slideshow
                      slides={g.slides}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      offset={idx * 2500}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/80 via-ink/0 to-transparent opacity-70 transition duration-500 group-hover:opacity-100" />
                    <span className="absolute bottom-5 left-6 text-xs uppercase tracking-[0.2em] text-paper">
                      {g.kicker}
                    </span>
                  </div>
                  <div className="relative z-10 p-8">
                    <h3 className="font-serif text-2xl leading-snug">{g.title}</h3>
                    <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted">
                      {g.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-linear-to-br from-banana to-leaf" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>

            {/* BARBECO contacts */}
            <div className="reveal spot relative mt-6 grid gap-8 overflow-hidden rounded-3xl bg-ink p-8 text-paper md:grid-cols-3 md:p-10">
              <div className="glow drift absolute -right-24 -top-24 size-80 rounded-full opacity-25 blur-3xl" aria-hidden />
              <div className="relative z-10">
                <p className={`${eyebrow} text-banana`}>BARBECO · Location</p>
                <p className="mt-3 leading-relaxed text-paper/80">
                  Sitio Belayong, Poblacion (Barangay Belayong), Malitbog, Bukidnon, Region 10
                </p>
              </div>
              <div className="relative z-10">
                <p className={`${eyebrow} text-banana`}>Chairman</p>
                <p className="mt-3 text-paper/80">Venjay Capucao</p>
                <a href="tel:09976839721" className="mt-1 inline-block font-mono text-sm text-paper transition hover:text-banana">
                  0997-683-9721 ↗
                </a>
              </div>
              <div className="relative z-10">
                <p className={`${eyebrow} text-banana`}>DAR Bukidnon (DF – Malitbog)</p>
                <p className="mt-3 text-paper/80">Jamaica Beray</p>
                <a href="tel:09295745604" className="mt-1 inline-block font-mono text-sm text-paper transition hover:text-banana">
                  0929-574-5604 ↗
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* People & living culture */}
        <section id="culture" className="px-6 pb-20 md:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="reveal grid gap-6 md:grid-cols-2 md:items-end">
              <div>
                <p className={`${eyebrow} text-leaf`}>People & living culture</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                  Higaonon culture, <em className={gradientText}>shared with care.</em>
                </h2>
              </div>
              <p className="leading-relaxed text-muted">
                Malitbog is home to Higaonon people. Learning should come from
                listening to community voices, honoring what people choose to
                share, and respecting living traditions.
              </p>
            </div>

            {/* Expanding photo strip: hovered panel grows */}
            <div className="reveal mt-10 flex flex-col gap-3 md:mt-12 md:h-[440px] md:flex-row">
              {culture.map((c) => (
                <figure
                  key={c.src}
                  tabIndex={0}
                  className="group relative h-72 overflow-hidden rounded-3xl outline-none transition-[flex-grow] duration-700 ease-out focus-visible:ring-2 focus-visible:ring-banana md:h-auto md:flex-1 md:hover:flex-[2.4] md:focus-visible:flex-[2.4]"
                >
                  <Image
                    src={c.src}
                    alt={`${c.kicker}: ${c.caption}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    style={{ objectPosition: c.position }}
                    className="object-cover transition duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 z-10 p-6 text-paper">
                    <p className={`${eyebrow} text-banana`}>{c.kicker}</p>
                    <p className="mt-2 font-serif text-xl transition duration-500 md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                      {c.caption}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="reveal mt-6 font-serif text-xl italic text-leaf">
              A living culture is more than a story from the past.
            </p>
          </div>
        </section>

        {/* Farm-to-market cycle */}
        <section id="cycle" className="relative overflow-hidden bg-ink px-6 py-20 md:py-24 text-paper">
          <div className="glow drift absolute -right-60 top-20 size-[700px] rounded-full opacity-15 blur-3xl" aria-hidden />
          <div className="relative mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
            <div className="reveal">
              <p className={`${eyebrow} text-banana`}>02 — Farm-to-market cycle</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                From sucker to market,{" "}
                <em className="bg-linear-to-r from-banana to-[#f3dfa0] bg-clip-text text-transparent">
                  in about a year.
                </em>
              </h2>
              <div className="spot edge group relative mt-12 aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src={img("24211cca-124d-489d-af98-724ed23bd57b")}
                  alt="Farmer carrying a harvested banana bunch"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="parallax object-cover transition duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/60 to-transparent" />
              </div>
            </div>

            <ol className="relative space-y-2">
              <span
                className="absolute bottom-12 left-12 top-12 w-px bg-linear-to-b from-banana/70 via-paper/15 to-transparent"
                aria-hidden
              />
              {steps.map((s) => (
                <li
                  key={s.n}
                  className="reveal spot group relative flex gap-6 rounded-2xl p-6 transition duration-500 hover:translate-x-1 hover:bg-paper/5"
                >
                  <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-banana/60 bg-ink font-serif text-banana transition duration-500 group-hover:border-transparent group-hover:bg-banana group-hover:text-ink group-hover:shadow-[0_0_32px_-4px_var(--banana)]">
                    {s.n}
                  </span>
                  <div className="relative z-10 pt-2">
                    <h3 className="text-xl font-medium">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-paper/65">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Scroll-linked variety strip */}
        <div aria-hidden className="overflow-hidden border-b border-line py-8 md:py-10">
          <div className="marquee flex w-max items-center whitespace-nowrap font-serif text-5xl text-line md:text-7xl">
            {/* padding (not gap) keeps both copies the same width for a seamless loop */}
            {[...varieties, ...varieties].map((v, i) => (
              <span key={i} className="flex items-center gap-10 pr-10">
                <span className={i % 3 === 1 ? "italic text-leaf/70" : ""}>{v}</span>
                <span className="size-2.5 rounded-full bg-banana" />
              </span>
            ))}
          </div>
        </div>

        {/* Varieties & products */}
        <section id="products" className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="reveal flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className={`${eyebrow} text-leaf`}>03 — Varieties & products</p>
                <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                  What the harvest <em className={gradientText}>becomes.</em>
                </h2>
              </div>
              <p className="hidden text-sm text-muted md:block">Hover a card to read more</p>
            </div>

            <div className="mt-10 md:mt-12grid auto-rows-[340px] gap-4 md:auto-rows-[280px] md:grid-cols-4">
              {products.map((p) => (
                <article
                  key={p.name}
                  tabIndex={0}
                  className={`reveal spot edge group relative overflow-hidden rounded-3xl bg-ink outline-none ${p.span}`}
                >
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes={p.span ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 100vw"}
                      className="parallax object-cover transition duration-1000 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-linear-135 from-leaf via-ink to-ink">
                      <div className="glow drift absolute -right-16 -top-16 size-72 rounded-full opacity-40 blur-2xl" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/35 to-transparent opacity-85 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 z-10 p-6 text-paper md:p-8">
                    <p className={`${eyebrow} text-banana`}>{p.tag}</p>
                    <h3 className={`mt-2 font-serif ${p.featured ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"}`}>
                      {p.name}
                    </h3>
                    <div
                      className={`grid transition-all duration-500 ${
                        p.featured
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[1fr] md:grid-rows-[0fr] md:opacity-0 md:group-hover:grid-rows-[1fr] md:group-hover:opacity-100 md:group-focus-visible:grid-rows-[1fr] md:group-focus-visible:opacity-100"
                      }`}
                    >
                      <p className={`overflow-hidden text-sm leading-relaxed text-paper/80 ${p.featured ? "max-w-md" : ""}`}>
                        <span className="block pt-3">{p.body}</span>
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="reveal spot edge group relative mt-4 flex flex-col gap-4 overflow-hidden rounded-3xl bg-ink p-8 text-paper md:flex-row md:items-center md:justify-between md:p-12">
              <Image
                src="/images/bananas-1.jpg"
                alt=""
                fill
                sizes="(min-width: 768px) 1152px, 100vw"
                className="parallax object-cover transition duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/80 to-leaf/40" />
              <div className="glow drift absolute -left-20 -top-32 size-80 rounded-full opacity-25 blur-3xl" aria-hidden />
              <p className="relative z-10 font-serif text-3xl italic">Daily household uses</p>
              <p className="relative z-10 max-w-2xl text-sm leading-relaxed text-paper/85">
                Banana leaves are used to wrap rice and delicacies, saba serves as
                a staple <em>merienda</em>, and harvests provide steady income for
                farming families.
              </p>
            </div>
          </div>
        </section>

        {/* Institutional support */}
        <section id="support" className="px-6 pb-20 md:pb-24">
          <div className="mx-auto max-w-6xl">
            <div className="reveal">
              <p className={`${eyebrow} text-leaf`}>04 — Institutional support</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Behind the <em className={gradientText}>harvest.</em>
              </h2>
            </div>

            {/* Municipal Hall feature */}
            <article className="reveal edge group relative mt-10 grid overflow-hidden rounded-3xl border border-line bg-white/60 md:mt-12 md:grid-cols-[1.15fr_1fr]">
              <div className="relative min-h-80 overflow-hidden md:min-h-[460px]">
                <Image
                  src="/images/municipal-hall.jpg"
                  alt="Malitbog Municipal Hall in Poblacion, Malitbog, Bukidnon"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="kenburns object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/60 via-transparent to-transparent" />
                <span className="absolute bottom-5 left-5 z-10 inline-flex items-center gap-2 rounded-full bg-paper/90 px-4 py-2 text-xs font-medium text-ink shadow-lg backdrop-blur">
                  <span className="size-1.5 rounded-full bg-banana ring-4 ring-banana/25" />
                  Poblacion · Malitbog, Bukidnon
                </span>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10">
                <p className={`${eyebrow} text-leaf`}>Malitbog Municipal Hall</p>
                <h3 className="mt-3 font-serif text-3xl leading-tight md:text-4xl">
                  The seat of <em className={gradientText}>local government.</em>
                </h3>
                <p className="mt-5 leading-relaxed text-muted">
                  The Municipal Hall stands in Poblacion, Malitbog’s town center.
                  It houses the local government unit (LGU) that serves all 11
                  barangays and works with national agencies on the town’s banana
                  livelihood programs.
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line">
                  {hallFacts.map((f) => (
                    <div key={f.label} className="bg-paper p-4 transition duration-300 hover:bg-white">
                      <dt className="text-[11px] uppercase tracking-[0.18em] text-muted">{f.label}</dt>
                      <dd className="mt-1 font-serif text-lg">{f.value}</dd>
                    </div>
                  ))}
                </dl>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Malitbog+Municipal+Hall%2C+Malitbog%2C+Bukidnon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sheen mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm text-paper transition hover:bg-leaf"
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </article>

            {/* Partner agencies */}
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {partners.map((p) => (
                <li
                  key={p.name}
                  className="reveal spot edge group rounded-3xl border border-line bg-white/50 p-6 transition duration-500 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-leaf/10"
                >
                  <span className="relative z-10 inline-block rounded-full border border-leaf/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-leaf transition duration-500 group-hover:border-transparent group-hover:bg-leaf group-hover:text-paper">
                    {p.tag}
                  </span>
                  <p className="relative z-10 mt-5 font-medium transition group-hover:text-leaf">{p.name}</p>
                  <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted">{p.role}</p>
                </li>
              ))}
            </ul>

            {/* Cooperative voice */}
            <figure className="reveal spot edge group relative mt-4 grid overflow-hidden rounded-3xl bg-ink text-paper md:grid-cols-[2fr_3fr]">
              <div className="relative min-h-64 overflow-hidden">
                <Image
                  src="/images/cofcaville-quote.jpg"
                  alt="Nimfa Tolentino holding a pack of banana chips"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover object-[85%_40%] transition duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-r from-transparent to-ink/60 max-md:bg-linear-to-t" />
              </div>
              <div className="relative z-10 flex flex-col justify-center p-8 md:p-12">
                <div className="glow drift absolute -right-20 -top-20 size-72 rounded-full opacity-20 blur-3xl" aria-hidden />
                <p className={`${eyebrow} text-banana`}>Voices from banana cooperatives</p>
                <blockquote className="relative mt-5 font-serif text-xl leading-relaxed md:text-2xl">
                  “If we can process banana chips daily, cooperative members who
                  work here will be able to earn income every day. With the help of
                  the PRDP, we may be able to export banana chips abroad as we
                  produce the [required] volume.”
                </blockquote>
                <figcaption className="relative mt-6 text-sm text-paper/70">
                  <span className="font-medium text-banana">Nimfa Tolentino</span> ·
                  President, COFCAVILLE Banana Farmers Producers Cooperative
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        {/* Farming geography */}
        <section id="barangays" className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="reveal">
              <p className={`${eyebrow} text-leaf`}>05 — Farming geography</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">
                Eleven barangays, <em className={gradientText}>one great north.</em>
              </h2>
            </div>

            <div className="mt-10 md:mt-12grid gap-12 md:grid-cols-5">
              <div className="reveal md:col-span-2">
                <div className="spot edge group relative aspect-square overflow-hidden rounded-3xl border border-line bg-white">
                  <Image
                    src={img("cf74ea3d-d333-44ce-94df-672968374a1e")}
                    alt="Map of the 11 barangays of Malitbog"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="scale-[1.02] object-cover transition duration-700 group-hover:scale-[1.07]"
                  />
                </div>
                <p className="mt-6 text-sm leading-relaxed text-muted">
                  <span className="font-medium text-ink">San Luis</span> is the largest
                  barangay, covering about two-thirds of Malitbog’s land area, while{" "}
                  <span className="font-medium text-ink">Poblacion</span> is the town center.
                </p>
              </div>

              <div className="md:col-span-3">
                <p className={`${eyebrow} text-muted`}>Population · 2020 Census</p>
                <ul className="mt-6 space-y-1">
                  {barangays.map((b) => (
                    <li
                      key={b.name}
                      className="group grid grid-cols-[7rem_1fr_4rem] items-center gap-4 rounded-xl px-3 py-2.5 text-sm transition hover:bg-white/70"
                    >
                      <span className="transition group-hover:text-leaf">{b.name}</span>
                      <span className="h-1.5 overflow-hidden rounded-full bg-line transition-all group-hover:h-2.5">
                        {b.pop !== null && (
                          <span
                            className="grow block h-full rounded-full bg-linear-to-r from-leaf to-banana"
                            style={{ width: `${(b.pop / maxPop) * 100}%` }}
                          />
                        )}
                      </span>
                      <span className="text-right font-mono text-muted transition group-hover:text-ink">
                        {b.pop !== null ? b.pop.toLocaleString("en-US") : "—"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Find your way */}
        <section id="location" className="border-t border-line px-6 py-20 md:py-24">
          <PlaceMap />
        </section>
      </main>

      <footer className="overflow-hidden border-t border-line px-6 pt-16">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
          <div>
            <p className="font-serif text-2xl">Saging sa Malitbog</p>
            <p className="mt-3 text-sm text-muted">Malitbog, Bukidnon · Northern Mindanao</p>
            <a href="#home" className="mt-6 inline-block text-sm text-muted transition hover:text-ink">
              Back to top ↑
            </a>
          </div>
          <div>
            <p className={`${eyebrow} text-muted`}>Data sources</p>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {sources.map((s) => (
                <li key={s.name}>
                  {s.href ? (
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-ink">
                      {s.name} ↗
                    </a>
                  ) : (
                    s.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p
          aria-hidden
          className="mx-auto mt-12 max-w-6xl select-none bg-linear-to-b from-line to-paper bg-clip-text font-serif text-[24vw] leading-[0.8] text-transparent md:text-[16rem]"
        >
          Saging
        </p>
      </footer>
    </>
  );
}

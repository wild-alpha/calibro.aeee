
import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "26", label: "Projects Delivered" },
  { value: "28,357 m²", label: "Areas Covered" },
  { value: "18+ years", label: "Experience" },
  { value: "5–13 weeks", label: "Drawing Approval to Installation" },
];

const materials = [
  {
    title: "Shaped Timber",
    image: "/focus/focus_wood_panel.jpg",
  },
  {
    title: "Cane & Woven",
    image: "/focus/focus_cane_curve.jpg",
  },
  {
    title: "Metal Frames",
    image: "/focus/alo2.jpeg",
  },
  {
    title: "Leather Upholstery",
    image: "/focus/alo.jpeg",
  },
];

export default function Introduction() {
  return (
    <div className="w-full bg-[var(--color-section-bg,#c9d5e5)] text-[var(--color-text,#151c2a)] transition-colors duration-300">

      {/* ========================================
          1. INTRODUCTION + STATISTICS
      ======================================== */}
      <section
        id="introduction"
        aria-labelledby="introduction-heading"
        className="px-4 pb-24 pt-20 md:px-6 md:pb-28 lg:px-10"
      >
        <div className="mx-auto max-w-[1600px]">
          <h2
            id="introduction-heading"
            className="text-[clamp(28px,3.2vw,52px)] font-semibold leading-[1.2] tracking-[-0.035em]"
          >
            We are Calibro, a bespoke furniture and contract FF&amp;E
            partner for architects, interior designers, developers,
            and private clients across the UAE and the wider GCC.
            We create custom-made pieces and source, validate,
            and deliver furniture, joinery, lighting, and rugs —
            with one team accountable from brief to installation.
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-4 md:gap-x-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="border-t border-current/20 pt-3"
              >
                <p className="whitespace-nowrap text-[clamp(23px,2.9vw,47px)] leading-none tracking-[-0.04em]">
                  {stat.value}
                </p>

                <p className="mt-2 text-[10px] font-bold uppercase leading-snug tracking-[0.04em] opacity-70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          2. FEATURED COLLECTION
      ======================================== */}
      <section
        id="collection"
        aria-labelledby="collection-heading"
        className="px-4 pb-36 md:px-6 lg:px-10"
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 md:grid-cols-[36%_1fr] md:gap-[8%]">
          {/* Left */}
          <div>
            <h2
              id="collection-heading"
              className="mb-8 max-w-[440px] text-[13px] font-semibold uppercase leading-[1.6]"
            >
              We offer complete design flexibility to meet the needs
              of architects, designers, developers, and clients who
              don&apos;t settle for off-the-shelf solutions.
            </h2>

            <div className="relative aspect-[4/5] w-full max-w-[440px] overflow-hidden">
              <Image
                src="/optimized/feat5.webp"
                alt="Bespoke furniture materials and finishes by Calibro"
                fill
                sizes="(max-width: 768px) 100vw, 36vw"
                className="object-cover"
              />
            </div>

            <p className="mt-5 max-w-[440px] text-[12px] font-medium leading-[1.6] opacity-80">
              Every piece is engineered from your drawings, BOQ and
              finish schedule. Shop drawings and physical samples are
              signed off before production, and approved samples
              become the benchmark for final inspection.
            </p>

            <Link
              href="/#contact"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded bg-white px-5 text-[10px] font-bold uppercase tracking-[0.06em] text-[#151c2a] transition-colors hover:bg-gray-100"
            >
              Send your drawings
            </Link>
          </div>

          {/* Right */}
          <div>
            <div className="relative aspect-[1.38/1] w-full overflow-hidden">
              <Image
                src="/optimized/bed44444.webp"
                alt="Luxury bedroom with bespoke Calibro furniture"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>

            <p className="mt-3 text-[10px] font-bold uppercase leading-[1.5] opacity-70">
              Trusted by professionals and private clients across
              the UAE and the wider GCC.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================
          3. MATERIALS & CRAFT
      ======================================== */}
      <section
        aria-labelledby="materials-heading"
        className="px-4 pb-10 md:px-6 lg:px-10"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <h2
              id="materials-heading"
              className="text-[11px] font-bold uppercase tracking-[0.04em]"
            >
              Focus On — Materials &amp; Craft
            </h2>

            <Link
              href="/products"
              className="border-b border-current pb-1 text-[11px] font-bold uppercase tracking-[0.03em] transition-opacity hover:opacity-60"
            >
              Explore Bespoke Furniture →
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {materials.map((material) => (
              <article key={material.title}>
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={material.image}
                    alt={`${material.title} — Calibro furniture craftsmanship`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <h3 className="mt-2 text-[10px] font-bold uppercase tracking-[0.03em]">
                  {material.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

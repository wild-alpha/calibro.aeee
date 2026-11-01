
export default function Hero() {
  return (
    <section
      aria-labelledby="projects-heading"
      className="w-full px-5 pb-0 pt-[172px] md:px-8 lg:px-12"
    >
      <div className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--color-accent,#702c42)]">
        Selected Work
      </div>

      <div className="flex flex-wrap items-end gap-8 lg:gap-16">
        <h1
          id="projects-heading"
          className="m-0 text-[clamp(32px,4.6vw,60px)] font-semibold leading-none tracking-[-0.015em]"
        >
          Our Projects.
        </h1>

        <p className="mb-1 max-w-[42ch] text-base leading-[1.7] text-[var(--color-text-muted,#64748b)]">
          A selection of custom furniture manufacturing projects
          delivered across the UAE and GCC — from private residences
          to hospitality and corporate fit-outs.
        </p>
      </div>
    </section>
  );
}

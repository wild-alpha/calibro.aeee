
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="home-hero-title"
      className="relative isolate h-screen min-h-[640px] w-full overflow-hidden bg-[#111827]"
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/herobig.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/5 to-black/60" />

      {/* Hero content */}
      <div className="absolute inset-x-0 bottom-20 z-10 px-5 text-white md:bottom-24 md:px-10 lg:bottom-28">
        <div className="max-w-[1500px]">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] md:text-[13px]">
            Dubai · UAE · GCC
          </p>

          <h1
            id="home-hero-title"
            className="text-[clamp(36px,7.5vw,132px)] font-bold uppercase leading-[0.97] tracking-[-0.05em]"
          >
            Bespoke Furniture
          </h1>

          <p className="mt-4 text-lg font-normal leading-tight sm:text-xl md:text-2xl lg:text-3xl">
            &amp; Contract FF&amp;E in Dubai
          </p>

          {/* CTA buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white bg-white px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#263247] transition-colors hover:bg-gray-200"
            >
              Request a quote
            </a>

            <Link
              href="/projects"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-white bg-black/10 px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white/20"
            >
              View projects
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-5 z-10 text-xs uppercase tracking-widest text-white/75 md:left-10">
        Scroll
      </div>
    </section>
  );
}

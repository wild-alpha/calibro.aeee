import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative h-screen min-h-[640px] w-full max-[760px]:!h-[78svh] max-[760px]:!min-h-[520px]"
      aria-label="Study House"
    >
      <img
        src="/PROJECTS/VILLA/4.JPG"
        alt="Study House — cover"
        loading="eager"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover object-top max-[760px]:!bg-[#151515] max-[760px]:!object-contain"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,oklch(0.15_0.02_50_/_0.25)_0%,oklch(0.15_0.02_50_/_0.05)_40%,oklch(0.1_0.02_50_/_0.72)_100%)]"
      />
      <div className="absolute right-[6vw] bottom-[72px] left-[6vw]">
        <div className="mb-5 text-xs font-semibold tracking-[0.12em] text-[oklch(0.92_0.01_65_/_0.85)] uppercase">
          <Link href="/projects" className="text-inherit hover:text-inherit">
            Projects
          </Link>
          {" \u00a0/\u00a0 "}Residential
        </div>
        <h1 className="m-0 max-w-[18ch] text-[clamp(34px,5.4vw,72px)] leading-[1.02] font-semibold tracking-[-0.015em] text-[oklch(0.98_0.004_75)] [text-shadow:0_2px_24px_oklch(0.1_0.02_50_/_0.35)]">
          Study House
        </h1>
      </div>
    </section>
  );
}


"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Replace these paths with your actual images and video.
const media = {
  firstGallery: [
    "/1.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
   
  ],

  // Video for "Let's Talk About Your Space"
  designProcessVideo: "/vidd.mp4",

  secondGallery: [
    "/focus/f1.jpeg",
    "/focus/f2.jpeg",
    "/focus/f3.jpeg",
    "/focus/f4.jpeg",
    
  ],

  factory: "/optimized/about.webp",
};

const benefits = [
  {
    title: "Pricing",
    description:
      "Competitive, transparent pricing — no hidden margins.",
  },
  {
    title: "Quality",
    description:
      "Factory inspections and rigorous sign-off on every order.",
  },
  {
    title: "Timelines",
    description:
      "Speed and efficiency, from assembly to delivery.",
  },
];

const advantages = [
  {
    title: "Single point of accountability",
    description:
      "One team manages your entire procurement journey, start to finish.",
  },
  {
    title: "18+ years of expertise",
    description:
      "Deep experience in UAE customs, approvals, and delivery standards.",
  },
  {
    title: "Comprehensive aftercare",
    description:
      "Post-installation support and warranty handled directly by us.",
  },
];

function FocusGallery({ images, label }) {
  return (
    <div className="w-full">
      <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#172033]">
        {label}
      </p>

      <div className="grid grid-cols-2 gap-[6px] md:grid-cols-4">
        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="group relative aspect-[0.64] overflow-hidden bg-[#d5d9df] md:aspect-[0.63]"
          >
            <Image
              src={src}
              alt={`Calibro bespoke furniture detail ${index + 1}`}
              fill
              sizes="(max-width: 767px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

function FeatureColumns({ items }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
      {items.map((item) => (
        <div
          key={item.title}
          className="border-t border-[#c6cdd6] pt-4"
        >
          <h3 className="mb-1 text-[13px] font-bold text-[#222222]">
            {item.title}
          </h3>

          <p className="max-w-[360px] text-[12px] leading-[1.6] text-[#253149]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function CalibroShowcase() {
  return (
    <section
      id="calibro-showcase"
      className="w-full bg-[#e2e8f1] px-3 py-8 text-[#172033] sm:px-5 md:px-6 md:py-12"
    >
      <div className="mx-auto max-w-[1600px]">

        {/* 01 — FIRST FURNITURE GALLERY */}
        <FocusGallery
          images={media.firstGallery}
          label="FOCUS ON"
        />

        {/* 02 — LET'S TALK ABOUT YOUR SPACE */}
        <div
          id="contact"
          className="grid grid-cols-1 items-end gap-8 py-16 md:grid-cols-[38%_1fr] md:gap-8 md:py-20"
        >
          {/* Left column */}
          <div className="flex flex-col items-start justify-end gap-8 md:pb-12">
            <h2 className="max-w-[520px] text-[clamp(34px,4.5vw,76px)] font-extrabold uppercase leading-[0.98] tracking-[-0.055em]">
              LET’S TALK
              <br />
              ABOUT YOUR
              <br />
              SPACE
            </h2>

            <Link
              href="mailto:info@calibro.ae"
              className="group flex min-w-[230px] items-center justify-between gap-8 rounded bg-white px-5 py-4 text-[12px] font-bold uppercase tracking-[0.01em] transition-colors hover:bg-[#d0d9e5]"
            >
              SEND AN ENQUIRY

              <ArrowRight
                size={20}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right column */}
          <div>
            <div className="mb-5 max-w-[740px]">
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.1em]">
                TAILORED DREAMS
              </p>

              <p className="text-[13px] font-semibold leading-[1.45] md:text-[15px]">
                Time, materials, and place come together to create
                a vision where artisanal craftsmanship and
                contemporary sensibility converge, giving rise
                to products that embody the artistry of tailoring,
                blending responsibility with enduring beauty.
              </p>
            </div>

            {/* AUTOPLAY VIDEO */}
            <div className="group relative aspect-[1.75] overflow-hidden bg-[#cbd2dc]">
              <video
                src={media.designProcessVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              >
                Your browser does not support HTML5 video.
              </video>

              <Link
                href="/about"
                className="absolute bottom-4 left-4 z-10 rounded-full border border-white/80 bg-black/20 px-5 py-2 text-[10px] font-semibold text-white backdrop-blur-sm transition-colors hover:bg-black/50"
              >
                Learn more about us
              </Link>
            </div>
          </div>
        </div>

        {/* 03 — SECOND FURNITURE GALLERY */}
        <FocusGallery
          images={media.secondGallery}
          label="FOCUS ON"
        />

        {/* 04 — ABOUT CALIBRO */}
        <div className="grid grid-cols-1 items-end gap-8 pt-16 pb-10 md:grid-cols-[39%_1fr] md:gap-12 md:pt-20 md:pb-12">
          {/* Factory image */}
          <div className="relative aspect-[0.82] w-full overflow-hidden bg-[#cbd2dc] md:aspect-[0.76]">
            <Image
              src={media.factory}
              alt="Calibro bespoke furniture factory and production facility"
              fill
              sizes="(max-width: 767px) 100vw, 40vw"
              className="object-cover"
            />
          </div>

          {/* About text */}
          <div className="pb-2 md:pb-4">
            <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7c3342]">
              ABOUT CALIBRO
            </p>

            <h2 className="mb-6 max-w-[740px] text-[clamp(28px,3.3vw,54px)] font-bold uppercase leading-[1.13] tracking-[-0.045em] text-[#242424]">
              AN FF&E PARTNER,
              <br />
              NOT JUST A SUPPLIER.
            </h2>

            <p className="max-w-[630px] text-[13px] uppercase leading-[1.8] text-[#253149] md:text-[15px]">
              We manufacture bespoke furniture in Dubai and
              coordinate selected joinery, lighting, rugs and
              contract FF&E through trusted partners — with
              one team accountable from brief to installation.
            </p>
          </div>
        </div>

        {/* 05 — PRICING, QUALITY, TIMELINES */}
        <FeatureColumns items={benefits} />

        {/* 06 — WHY CHOOSE CALIBRO */}
        <div className="pt-16 md:pt-20">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#7c3342]">
            WHY CHOOSE CALIBRO
          </p>

          <h2 className="mb-10 max-w-[1050px] text-[clamp(28px,3.2vw,52px)] font-semibold leading-[1.3] tracking-[-0.04em] text-[#242424]">
            Trusted by professionals across
            <br className="hidden md:block" />
            {" "}Europe, the UAE, and the wider GCC.
          </h2>

          <FeatureColumns items={advantages} />
        </div>

      </div>
    </section>
  );
}

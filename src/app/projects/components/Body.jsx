
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// ORIGINAL CALIBRO PROJECTS
// All project data is stored directly in this file.
// No external projects.js file is required.

const PROJECTS = [
  {
    id: "Il-primo-penthouse",
    name: "Il Primo Tower Penthouse",
    category: "Residential",
    location: "Downtown Dubai",
    cover: "/PROJECTS/New folder (4)/Penthouse-26.jpg",
  },
  {
    id: "dubai-hills-fairways",
    name: "Dubai Hills Fairways",
    category: "Residential",
    location: "Dubai Hills Estate",
    cover: "/PROJECTS/duabi hills fairways/05.jpg",
  },
  {
    id: "so-uptown-tower",
    name: "SO/Uptown Tower",
    category: "Hospitality",
    location: "SO/Uptown Tower",
    cover: "/PROJECTS/New folder (3)/123.jpg",
  },
  {
    id: "emerald-hills",
    name: "Emerald Hills",
    category: "Residential",
    location: "Dubai Hills",
    cover: "/PROJECTS/dubai hills Grove/2.jpg",
  },
  {
    id: "private-office",
    name: "Private Office",
    category: "Corporate",
    location: "Vision Tower",
    cover: "/PROJECTS/New folder (6)/SADA.jpg",
  },
  {
    id: "beauport-tower",
    name: "Beauport Tower",
    category: "Residential",
    location: "Dubai Marina",
    cover: "/PROJECTS/New folder (7)/5.jpg",
  },
  {
    id: "grand-blu-tower",
    name: "Grand Blu Tower 1",
    category: "Residential",
    location: "Grand Blu Tower 1",
    cover: "/PROJECTS/New folder (8)/Bleu-17.jpg",
  },
  {
    id: "sobha-s-tower",
    name: "Sobha – The S Tower",
    category: "Residential",
    location: "Sobha – The S Tower",
    cover: "/PROJECTS/New folder (9)/3.jpg",
  },
  {
    id: "study-house",
    name: "Study House",
    category: "Residential",
    location: "Wadi Al Amardi, Al Khawaneej",
    cover: "/PROJECTS/VILLA/4.JPG",
  },
];

const CATEGORIES = [
  "All",
  "Residential",
  "Hospitality",
  "Corporate",
];

export default function Body() {
  const [active, setActive] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (project) => project.category === active
        );

  const changeCategory = (category) => {
    setActive(category);
    setHoveredId(null);
  };

  return (
    <>
      {/* CATEGORY FILTERS */}
      <section className="sticky top-0 z-20 mt-14 border-b border-[var(--color-border-soft,#e0e3e8)] bg-[var(--color-sticky-bg,#f4f5f6)]/95 backdrop-blur-md">
        <div className="flex w-full flex-wrap items-center justify-between gap-4 px-5 py-[18px] md:px-8 lg:px-12">
          <div
            role="group"
            aria-label="Filter projects by category"
            className="flex flex-wrap gap-x-8 gap-y-3"
          >
            {CATEGORIES.map((category) => {
              const isActive = active === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => changeCategory(category)}
                  aria-pressed={isActive}
                  className={`border-b pb-2 text-[13px] font-medium uppercase tracking-[0.04em] transition-colors duration-300 ${
                    isActive
                      ? "border-current text-[var(--color-text,#171717)]"
                      : "border-transparent text-[var(--color-text-faint,#87909c)] hover:text-[var(--color-text,#171717)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <span
            aria-live="polite"
            className="text-xs tracking-[0.04em] text-[var(--color-text-faint,#87909c)]"
          >
            {filtered.length}{" "}
            {filtered.length === 1 ? "project" : "projects"}
          </span>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section
        aria-label="Calibro project portfolio"
        className="mx-auto w-full max-w-[1560px] px-5 pb-10 pt-16 md:px-[6vw]"
      >
        <div
          className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-5"
          onMouseLeave={() => setHoveredId(null)}
        >
          {filtered.map((project) => {
            const isHovered = hoveredId === project.id;
            const isDimmed =
              hoveredId !== null && !isHovered;

            return (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                onMouseEnter={() =>
                  setHoveredId(project.id)
                }
                onMouseLeave={() =>
                  setHoveredId(null)
                }
                onFocus={() =>
                  setHoveredId(project.id)
                }
                onBlur={() =>
                  setHoveredId(null)
                }
                className={`group relative block min-w-0 cursor-pointer text-inherit no-underline transition-transform duration-[400ms] ease-out motion-reduce:transform-none ${
                  isHovered
                    ? "z-10 lg:scale-[1.04]"
                    : "z-0 scale-100"
                }`}
              >
                {/* PROJECT IMAGE */}
                <div
                  className={`relative aspect-[4/5] w-full overflow-hidden transition-shadow duration-[400ms] ${
                    isHovered
                      ? "shadow-[0_24px_48px_-16px_rgba(0,0,0,0.35)]"
                      : "shadow-none"
                  }`}
                >
                  <Image
                    src={project.cover}
                    alt={`${project.name} — ${project.category.toLowerCase()} furniture project`}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.06] group-focus-visible:scale-[1.06] motion-reduce:transform-none"
                  />

                  {/* DIM NON-HOVERED IMAGES */}
                  <div
                    className={`pointer-events-none absolute inset-0 bg-[var(--color-dim-overlay,rgba(245,245,245,0.55))] transition-opacity duration-[400ms] ${
                      isDimmed
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />

                  {/* SUBTLE ARROW */}
                  <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-[#171717] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    <ArrowUpRight size={19} />
                  </div>
                </div>

                {/* PROJECT INFORMATION */}
                <div className="mt-[18px]">
                  <h2 className="text-lg font-semibold leading-snug">
                    {project.name}
                  </h2>

                  <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.06em] text-[var(--color-text-faint,#87909c)]">
                    {project.category} &middot;{" "}
                    {project.location}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-[var(--color-text-muted,#64748b)]">
            No projects are available in this category.
          </p>
        )}
      </section>

      {/* PROJECT CTA */}
      <section className="px-5 pb-[170px] pt-[90px] text-center md:px-8">
        <h2 className="text-[clamp(28px,3.6vw,44px)] font-semibold leading-tight tracking-[-0.01em]">
          Have a project in mind?
        </h2>

        <p className="mx-auto mb-10 mt-4 max-w-[46ch] text-[17px] leading-[1.7] text-[var(--color-text-muted,#64748b)]">
          Tell us about your brief and timeline — we&apos;ll
          walk you through how we scope, manufacture, and
          deliver.
        </p>

        <Link
          href="/#contact"
          className="inline-flex items-center justify-center gap-3 rounded-sm bg-[var(--color-accent,#702c42)] px-8 py-4 text-[13px] font-semibold tracking-[0.02em] text-white transition-all duration-300 hover:brightness-90"
        >
          Request a quote
          <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}

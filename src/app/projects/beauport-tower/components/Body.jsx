"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Original project details and exact gallery image order, copied from projects.js.
const project = {
  "id": "beauport-tower",
  "name": "Beauport Tower",
  "category": "Residential",
  "location": "Dubai Marina",
  "size": "202.4 sqm",
  "designer": "M-Studio",
  "contractor": "Private",
  "description": [
    "Set within the prestigious Beauport Tower in Dubai Marina, this private residence was brought to life through a collection of custom-crafted furniture designed and manufactured exclusively by Calibro.",
    "A carefully curated palette of premium veneers, natural stone, rich upholstery, and precision-engineered metal details defines the collection, reflecting Calibro's commitment to exceptional craftsmanship and manufacturing excellence."
  ],
  "cover": "/PROJECTS/New folder (7)/5.jpg",
  "images": [
    "/PROJECTS/New folder (7)/1.jpg",
    "/PROJECTS/New folder (7)/2.jpg",
    "/PROJECTS/New folder (7)/3.jpg",
    "/PROJECTS/New folder (7)/4.jpg",
    "/PROJECTS/New folder (7)/5.jpg",
    "/PROJECTS/New folder (7)/6.jpg",
    "/PROJECTS/New folder (7)/7.jpg",
    "/PROJECTS/New folder (7)/8.jpg",
    "/PROJECTS/New folder (7)/9.jpg",
    "/PROJECTS/New folder (7)/10.jpg",
    "/PROJECTS/New folder (7)/11.jpg",
    "/PROJECTS/New folder (7)/12.jpg",
    "/PROJECTS/New folder (7)/13.jpg"
  ]
};

// Next project follows the original projects.js ordering.
const nextProject = {
  "id": "grand-blu-tower",
  "name": "Grand Blu Tower 1"
};

const SECTION_IDS = ["meta", "gallery", "next", "cta"];

export default function Body() {

  const [revealed, setRevealed] = useState({});
  const [galleryRevealed, setGalleryRevealed] = useState({});
  const sectionRefs = useRef({});
  const galleryRefs = useRef([]);

  // Preserve original section-level reveal behavior.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-reveal-id");
            setRevealed((current) => ({ ...current, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" }
    );

    SECTION_IDS.forEach((id) => {
      const node = sectionRefs.current[id];
      if (node) {
        node.setAttribute("data-reveal-id", id);
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  // Preserve original per-image reveals and 90ms stagger by column.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-gallery-index"));
            setGalleryRevealed((current) => ({ ...current, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );

    galleryRefs.current.forEach((node, index) => {
      if (node) {
        node.setAttribute("data-gallery-index", String(index));
        observer.observe(node);
      }
    });

    return () => observer.disconnect();
  }, []);

  const revealClass = (id) =>
    `transition-[opacity,transform] duration-[1000ms] ease-[cubic-bezier(.16,1,.3,1)] ${
      revealed[id] ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
    }`;

  const meta = [
    { label: "Category", value: project.category },
    { label: "Location", value: project.location },
    { label: "Size", value: project.size },
    ...(project.designer ? [{ label: "Interior Design", value: project.designer }] : []),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://calibro.ae/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: "https://calibro.ae/projects",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.name,
        item: "https://calibro.ae/projects/beauport-tower",
      },
    ],
  };

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    url: "https://calibro.ae/projects/beauport-tower",
    description: project.description.join(" "),
    image: `https://calibro.ae${project.cover}`,
    locationCreated: project.location,
    creator: { "@id": "https://calibro.ae/#business" },
  };

  return (
    <div
      className="
        relative min-h-screen bg-[var(--project-bg)] text-[var(--project-text)]
        [--project-bg:oklch(1_0_0)]
        [--project-text:oklch(0.22_0.01_60)]
        [--project-secondary:oklch(0.3_0.012_60)]
        [--project-muted:oklch(0.4_0.015_60)]
        [--project-faint:oklch(0.55_0.015_60)]
        [--project-border-soft:oklch(0.9_0.01_70)]
        [--project-accent:oklch(0.55_0.10_35)]
        [--project-accent-hover:oklch(0.46_0.10_35)]
        [--project-on-accent:oklch(0.98_0.004_75)]
        dark:[--project-bg:oklch(0.22_0.035_45)]
        dark:[--project-text:oklch(0.94_0.015_70)]
        dark:[--project-secondary:oklch(0.86_0.02_65)]
        dark:[--project-muted:oklch(0.74_0.03_55)]
        dark:[--project-faint:oklch(0.62_0.03_50)]
        dark:[--project-border-soft:oklch(0.36_0.04_45)]
        dark:[--project-accent:oklch(0.68_0.13_42)]
        dark:[--project-accent-hover:oklch(0.75_0.13_42)]
        dark:[--project-on-accent:oklch(0.15_0.03_45)]
      "
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />

      {/* PROJECT META AND DESCRIPTION */}
      <section
        ref={(node) => { sectionRefs.current.meta = node; }}
        className={`mx-auto max-w-[1200px] px-[6vw] pt-[90px] ${revealClass("meta")}`}
      >
        <div className="flex flex-wrap gap-14 border-b border-[var(--project-border-soft)] pb-14">
          {meta.map((item) => (
            <div key={item.label}>
              <div className="mb-2 text-[11px] font-semibold tracking-[0.1em] text-[var(--project-faint)] uppercase">
                {item.label}
              </div>
              <div className="text-[15px] text-[var(--project-text)]">
                {item.value}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-[22px] pt-12">
          {project.description.map((paragraph, index) => (
            <p
              key={index}
              className="m-0 max-w-[70ch] text-[clamp(17px,1.6vw,20px)] leading-[1.75] font-light text-[var(--project-secondary)]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* ALL GALLERY PHOTOS, IN THE ORIGINAL ORDER */}
      <section className="mx-auto max-w-[1560px] px-[6vw] pt-[110px] pb-[60px]">
        <div
          ref={(node) => { sectionRefs.current.gallery = node; }}
          className={`mb-10 text-xs font-semibold tracking-[0.12em] text-[var(--project-accent)] uppercase ${revealClass("gallery")}`}
        >
          Gallery — {project.images.length} photos
        </div>

        <div className="grid grid-cols-2 gap-[10px] max-[760px]:!grid-cols-1">
          {project.images.map((src, index) => (
            <div
              key={src}
              ref={(node) => { galleryRefs.current[index] = node; }}
              className={`
                w-full overflow-hidden aspect-[4/5]
                ${index % 5 === 0 ? "col-span-2" : "col-span-1"}
                max-[760px]:!col-span-1 max-[760px]:!aspect-auto
                transition-[opacity,transform] duration-[800ms]
                ease-[cubic-bezier(.16,1,.3,1)]
                ${index % 2 === 1 ? "delay-[90ms]" : "delay-0"}
                ${galleryRevealed[index]
                  ? "translate-y-0 opacity-100"
                  : "translate-y-9 opacity-0"}
              `}
            >
              <img
                src={src}
                alt={`${project.name} — photo ${index + 1}`}
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-cover object-top max-[760px]:!h-auto max-[760px]:!object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section
        ref={(node) => { sectionRefs.current.next = node; }}
        className={`mx-auto max-w-[1560px] border-t border-[var(--project-border-soft)] px-[6vw] pt-10 pb-[60px] ${revealClass("next")}`}
      >
        <Link
          href={`/projects/${nextProject.id}`}
          className="flex items-center justify-between gap-6 pt-14 pb-2 text-inherit no-underline hover:text-inherit"
        >
          <div>
            <div className="mb-[14px] text-[11px] font-semibold tracking-[0.1em] text-[var(--project-faint)] uppercase">
              Next Project
            </div>
            <div className="text-[clamp(26px,3.4vw,42px)] font-semibold tracking-[-0.01em]">
              {nextProject.name}
            </div>
          </div>
          <div className="text-[26px] text-[var(--project-accent)]" aria-hidden="true">
            &rarr;
          </div>
        </Link>
      </section>

      {/* PROJECT CONTACT CTA */}
      <section
        ref={(node) => { sectionRefs.current.cta = node; }}
        className={`px-[6vw] pt-5 pb-[170px] text-center ${revealClass("cta")}`}
      >
        <h2 className="m-0 text-[clamp(28px,3.6vw,44px)] font-semibold tracking-[-0.01em]">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 mb-10 max-w-[46ch] text-[17px] text-[var(--project-muted)]">
          Tell us about your brief and timeline — we’ll walk you through how we
          scope, manufacture, and deliver.
        </p>
        <Link
          href="/#contact"
          className="inline-block rounded-[2px] bg-[var(--project-accent)] px-8 py-4 text-[13px] font-semibold tracking-[0.02em] text-[var(--project-on-accent)] transition-colors duration-[250ms] hover:bg-[var(--project-accent-hover)] hover:text-[var(--project-on-accent)]"
        >
          Request a quote
        </Link>
      </section>
    </div>
  );
}

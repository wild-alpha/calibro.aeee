
"use client";

import Image from "next/image";
import { Lightbulb } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const cards = [
  {
    number: "001",
    title: "Styling",
    image: "/optimized/spot1.webp",
    background: "#541626",
    textColor: "#ffffff",
  },
  {
    number: "002",
    title: "Calibro",
    image: "/optimized/spot2.webp",
    background: "#1d3470",
    textColor: "#ffffff",
  },
  {
    number: "003",
    title: "FF&E",
    image: "/optimized/spot3.webp",
    background: "#b8b9bd",
    textColor: "#171717",
  },
  {
    number: "004",
    title: "Bespoke Furniture",
    image: "/optimized/spot44.webp",
    background: "#333333",
    textColor: "#ffffff",
  },
];

export default function ProductionSpotLight() {
  return (
    <section
      id="production-spotlight"
      aria-label="Calibro furniture spotlight"
      className="relative w-full bg-[var(--color-section-bg,#c9d5e5)]"
    >
      <ScrollStack
        useWindowScroll={true}
        itemDistance={120}
        itemScale={0.04}
        itemStackDistance={38}
        stackPosition="12%"
        scaleEndPosition="5%"
        baseScale={0.82}
        rotationAmount={0}
        blurAmount={0}
      >
        {cards.map((card, index) => (
          <ScrollStackItem
            key={card.number}
            itemClassName="!h-auto !w-full !rounded-none !p-0"
          >
            <article
              className="w-full overflow-hidden"
              style={{
                backgroundColor: card.background,
                color: card.textColor,
              }}
            >
              {/* Card Header */}
              <div className="flex h-[58px] items-center justify-between px-6 md:px-8">
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] md:text-sm">
                  {card.number} {card.title}
                </h2>

                <Lightbulb
                  size={18}
                  fill="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </div>

              {/* Card Image */}
              <div className="px-3 pb-3 md:px-6 md:pb-6">
                <div className="relative h-[72vh] min-h-[400px] overflow-hidden md:h-[82vh]">
                  <Image
                    src={card.image}
                    alt={`Calibro ${card.title} furniture collection`}
                    fill
                    priority={index === 0}
                    sizes="100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </article>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      {/* Space before the next homepage section */}
      <div
        aria-hidden="true"
        className="h-[100vh] w-full"
      />
    </section>
  );
}

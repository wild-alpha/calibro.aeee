
import Link from "next/link";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

const sections = [
  {
    title: "Brief and specification review",
    body: "We review BOQs, drawings, moodboards, quantities, material requirements and target budgets to establish a practical procurement and manufacturing plan.",
  },
  {
    title: "Bespoke manufacturing",
    body: "Custom furniture is engineered and manufactured to the approved dimensions, materials, finishes and performance requirements.",
  },
  {
    title: "Contract FF&E",
    body: "Furniture, joinery, lighting and selected FF&E can be sourced and coordinated under one project workflow for hospitality, residential and commercial schemes.",
  },
  {
    title: "Value engineering",
    body: "Equivalent materials, construction methods and sourcing options can be evaluated where necessary to protect design intent while improving cost or lead time.",
  },
  {
    title: "Logistics and delivery",
    body: "Orders can be consolidated, quality checked and coordinated for site delivery across Dubai, the UAE and the wider GCC.",
  },
  {
    title: "Installation and aftercare",
    body: "Site assembly, installation, handover support and warranty coordination complete the project delivery cycle.",
  },
];

const statistics = [
  {
    label: "Project model",
    value: "One team.",
    detail: "Brief to aftercare.",
  },
  {
    label: "Experience",
    value: "18+ years.",
    detail: "International + UAE.",
  },
  {
    label: "Coverage",
    value: "UAE + GCC.",
    detail: "Residential, hospitality, commercial.",
  },
];

export default function Body() {
  const title = "From brief to installation.";

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
        name: title,
        item: "https://calibro.ae/services",
      },
    ],
  };

  return (
    <main
      className={`
        ${sora.className}
        min-h-screen

        [--service-bg:#fff]
        [--service-surface:#fff]
        [--service-text:oklch(0.22_0.01_60)]
        [--service-secondary:oklch(0.3_0.012_60)]
        [--service-muted:oklch(0.4_0.015_60)]
        [--service-faint:oklch(0.55_0.015_60)]
        [--service-border:oklch(0.85_0.01_70)]
        [--service-border-soft:oklch(0.9_0.01_70)]
        [--service-accent:oklch(0.55_0.10_35)]
        [--service-accent-hover:oklch(0.46_0.10_35)]
        [--service-on-accent:oklch(0.98_0.004_75)]

        dark:[--service-bg:oklch(0.22_0.035_45)]
        dark:[--service-surface:oklch(0.27_0.04_42)]
        dark:[--service-text:oklch(0.94_0.015_70)]
        dark:[--service-secondary:oklch(0.86_0.02_65)]
        dark:[--service-muted:oklch(0.74_0.03_55)]
        dark:[--service-faint:oklch(0.62_0.03_50)]
        dark:[--service-border:oklch(0.4_0.045_45)]
        dark:[--service-border-soft:oklch(0.36_0.04_45)]
        dark:[--service-accent:oklch(0.68_0.13_42)]
        dark:[--service-accent-hover:oklch(0.75_0.13_42)]
        dark:[--service-on-accent:oklch(0.15_0.03_45)]

        text-[var(--service-text)]

        bg-[radial-gradient(circle_at_8%_0%,#c4d2e5d1,transparent_34%),linear-gradient(180deg,#f4f6f9_0%,var(--service-bg)_42%)]

        max-[600px]:bg-[linear-gradient(180deg,#dce4ef_0%,var(--service-bg)_28%)]
      `}
    >
      {/* BREADCRUMB SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* ========================================
          HERO
      ======================================== */}
      <section
        className="
          flex min-h-[min(880px,92vh)]
          flex-col justify-between
          border-b border-[var(--service-border-soft)]
          px-5 pt-[160px] pb-[72px]

          max-[900px]:min-h-[760px]

          max-[600px]:min-h-[680px]
          max-[600px]:pt-[124px]
        "
      >
        <div
          className="
            flex items-center justify-between gap-6
            text-[11px] font-semibold
            tracking-[0.13em] uppercase
            text-[var(--service-faint)]
          "
        >
          <span>Services</span>

          <span className="max-[600px]:hidden">
            Dubai · UAE · GCC
          </span>
        </div>

        <h1
          className="
            mt-[clamp(72px,12vh,140px)]
            mb-16
            max-w-[13ch]

            text-[clamp(52px,9.2vw,142px)]
            leading-[0.88]
            font-semibold
            tracking-[-0.058em]
            text-balance

            max-[600px]:mt-[88px]
            max-[600px]:text-[clamp(48px,15vw,76px)]
          "
        >
          {title}
        </h1>

        <div
          className="
            grid
            grid-cols-[minmax(0,1.5fr)_minmax(220px,0.5fr)]
            items-end gap-16

            max-[900px]:grid-cols-1
          "
        >
          <p
            className="
              m-0 max-w-[820px]
              text-[clamp(18px,2vw,28px)]
              leading-[1.5]
              text-[var(--service-secondary)]
            "
          >
            Calibro supports residential, hospitality and
            commercial projects with bespoke furniture
            manufacturing and contract FF&E services
            managed through one accountable team.
          </p>

          <Link
            href="/#contact"
            className="
              inline-flex min-w-[220px]
              items-center justify-between
              justify-self-end gap-9

              border-y border-[var(--service-text)]
              py-[14px]

              text-[13px] font-semibold
              tracking-[0.04em] uppercase
              text-[var(--service-text)]

              transition-colors duration-200
              hover:text-[var(--service-accent)]

              max-[900px]:justify-self-start
            "
          >
            Start a project
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>

      {/* ========================================
          STATEMENT
      ======================================== */}
      <section className="px-5 py-[clamp(90px,12vw,180px)]">
        <p
          className="
            mx-auto w-full max-w-[1180px]

            text-[clamp(30px,5.1vw,78px)]
            leading-[1.08]
            font-medium
            tracking-[-0.045em]
            text-balance
          "
        >
          The work between an approved specification and
          a finished space is where projects are won or
          lost. Our service model is built to keep that
          middle ground controlled, visible and
          accountable.
        </p>
      </section>

      {/* ========================================
          SERVICES GRID
      ======================================== */}
      <section
        aria-label="Services capabilities"
        className="
          mx-5 grid grid-cols-3
          border-t border-l
          border-[var(--service-border)]

          max-[900px]:grid-cols-2
          max-[600px]:grid-cols-1
        "
      >
        {sections.map((section, index) => (
          <article
            key={section.title}
            className="
              flex min-h-[390px] flex-col
              border-r border-b
              border-[var(--service-border)]

              px-7 pt-[30px] pb-9

              transition-[background-color,transform]
              duration-300

              hover:bg-[color-mix(in_srgb,var(--service-surface),var(--service-accent)_4%)]

              max-[600px]:min-h-[320px]
            "
          >
            <div
              className="
                text-[11px]
                tracking-[0.1em]
                text-[var(--service-faint)]
              "
            >
              {String(index + 1).padStart(2, "0")}
            </div>

            <h2
              className="
                mt-auto mb-6 max-w-[14ch]

                text-[clamp(26px,2.6vw,42px)]
                leading-[1.06]
                font-semibold
                tracking-[-0.035em]
              "
            >
              {section.title}
            </h2>

            <p
              className="
                m-0 max-w-[46ch]
                text-[14px] leading-[1.72]
                text-[var(--service-muted)]
              "
            >
              {section.body}
            </p>
          </article>
        ))}
      </section>

      {/* ========================================
          STATISTICS
      ======================================== */}
      <section
        className="
          mx-5 mt-[clamp(90px,11vw,170px)]
          grid grid-cols-3 gap-0

          border-y border-[var(--service-border)]

          max-[900px]:grid-cols-1
        "
      >
        {statistics.map((item) => (
          <div
            key={item.label}
            className="
              flex min-h-[220px] flex-col
              justify-end

              border-r border-[var(--service-border)]
              p-7

              last:border-r-0

              max-[900px]:border-r-0
              max-[900px]:border-b
              max-[900px]:last:border-b-0
            "
          >
            <span
              className="
                mb-auto
                text-[11px] font-semibold
                tracking-[0.12em] uppercase
                text-[var(--service-faint)]
              "
            >
              {item.label}
            </span>

            <strong
              className="
                mb-[6px] block

                text-[clamp(30px,3.6vw,54px)]
                leading-none
                tracking-[-0.04em]
              "
            >
              {item.value}
            </strong>

            <span
              className="
                text-[14px]
                text-[var(--service-muted)]
              "
            >
              {item.detail}
            </span>
          </div>
        ))}
      </section>

      {/* ========================================
          CTA
      ======================================== */}
      <section
        className="
          grid
          grid-cols-[minmax(0,1.5fr)_minmax(320px,0.5fr)]
          items-end gap-16

          px-5 py-[clamp(110px,13vw,190px)]

          max-[900px]:grid-cols-1
        "
      >
        <div>
          <div
            className="
              mb-[22px]
              text-[11px] font-semibold
              tracking-[0.12em] uppercase
              text-[var(--service-accent)]
            "
          >
            Talk to Calibro
          </div>

          <h2
            className="
              m-0 max-w-[16ch]

              text-[clamp(40px,6vw,84px)]
              leading-[0.98]
              font-semibold
              tracking-[-0.05em]
            "
          >
            Planning a furniture or FF&E project?
          </h2>

          <p
            className="
              mt-7 max-w-[660px]

              text-[16px] leading-[1.7]
              text-[var(--service-muted)]
            "
          >
            Share your BOQ, drawings, moodboard,
            quantities and target programme. Calibro
            can review the scope and recommend the next
            step.
          </p>
        </div>

        <div
          className="
            flex flex-col items-stretch gap-3
            max-[600px]:w-full
          "
        >
          {/* WHATSAPP */}
          <a
            href="https://wa.me/971586045588?text=Hello%20Calibro%20team%2C%20I%20would%20like%20to%20discuss%20a%20furniture%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex min-h-[54px]
              items-center justify-center

              rounded-full
              border border-[var(--service-accent)]
              bg-[var(--service-accent)]

              px-[22px] py-[14px]

              text-[13px] font-semibold
              tracking-[0.03em]
              text-[var(--service-on-accent)]

              transition-[background-color,color,border-color]
              duration-[220ms]

              hover:border-[var(--service-accent-hover)]
              hover:bg-[var(--service-accent-hover)]
              hover:text-[var(--service-on-accent)]
            "
          >
            WhatsApp Calibro
          </a>

          {/* PHONE */}
          <a
            href="tel:+971586045588"
            className="
              flex min-h-[54px]
              items-center justify-center

              rounded-full
              border border-[var(--service-text)]

              px-[22px] py-[14px]

              text-[13px] font-semibold
              tracking-[0.03em]
              text-[var(--service-text)]

              transition-[background-color,color,border-color]
              duration-[220ms]

              hover:bg-[var(--service-text)]
              hover:text-[var(--service-bg)]
            "
          >
            Call +971 58 604 5588
          </a>
        </div>
      </section>
    </main>
  );
}

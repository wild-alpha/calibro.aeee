
import Link from "next/link";

const footerLinks = [
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Our Factory", href: "/our-factory" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden bg-[#f4f5f8] pt-[90px] text-[#151c2a]">
      {/* Main Footer */}
      <div className="grid w-full grid-cols-1 gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="font-sans text-[22px] font-bold tracking-[-0.04em] text-[#201d1d]"
          >
            Calibro.
          </Link>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Footer navigation"
          className="flex flex-col items-start gap-[14px]"
        >
          {footerLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[14px] font-medium leading-[1.5] text-[#743044] transition-colors duration-200 hover:text-[#151c2a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact Information */}
        <address className="flex flex-col gap-[6px] text-[14px] leading-[1.6] not-italic text-[#405068]">
          <span>1, Jebel Ali Industrial Area</span>
          <span>47th Street, Dubai, UAE</span>

          <a
            href="tel:+971586045588"
            className="mt-2 text-[#743044] transition-colors hover:text-[#151c2a]"
          >
            +971 58 604 5588
          </a>

          <a
            href="mailto:info@calibro.ae"
            className="text-[#743044] transition-colors hover:text-[#151c2a]"
          >
            info@calibro.ae
          </a>
        </address>
      </div>

      {/* Copyright and Privacy */}
      <div className="mt-16 flex w-full flex-col justify-between gap-4 px-5 pt-6 text-[13px] text-[#405068] sm:flex-row sm:items-center">
        <p>
          © {new Date().getFullYear()} Calibro. All rights reserved.
        </p>

        <Link
          href="/privacy-policy"
          className="text-[#743044] transition-colors hover:text-[#151c2a]"
        >
          Privacy
        </Link>
      </div>

      {/* Oversized Brand Wordmark */}
      <div
        aria-hidden="true"
        className="mt-7 w-full select-none overflow-hidden text-center font-sans text-[25vw] font-bold leading-[0.78] tracking-[-0.055em] whitespace-nowrap text-[#151c2a]"
      >
        Calibro.
      </div>
    </footer>
  );
}

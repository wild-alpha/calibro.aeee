
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "About", href: "/#about" },
  { label: "Products", href: "/products" },
  { label: "Projects", href: "/projects" },
  { label: "Our Factory", href: "/our-factory" },
  { label: "Services", href: "/services" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  const closeMenu = () => setMobileOpen(false);

  // Preserve existing ScrollStack visibility behavior.
  useEffect(() => {
    let frame = null;

    const checkScrollStack = () => {
      const stack = document.querySelector(
        ".scroll-stack-scroller"
      );

      if (!stack) {
        setHideNavbar(false);
        return;
      }

      const rect = stack.getBoundingClientRect();

      const shouldHide =
        rect.top <= window.innerHeight && rect.bottom > 0;

      setHideNavbar((previous) =>
        previous === shouldHide ? previous : shouldHide
      );
    };

    const onScroll = () => {
      if (frame !== null) return;

      frame = requestAnimationFrame(() => {
        frame = null;
        checkScrollStack();
      });
    };

    checkScrollStack();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);

      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, [pathname]);

  useEffect(() => {
    if (hideNavbar) {
      setMobileOpen(false);
    }
  }, [hideNavbar]);

  return (
    <header
      className={`fixed inset-x-0 top-6 z-50 px-3 transition-all duration-500 ease-in-out sm:px-6 ${
        hideNavbar
          ? "pointer-events-none -translate-y-[150%] opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="
          relative mx-auto grid w-full max-w-[1800px]
          grid-cols-[1fr_auto] items-center
          overflow-visible rounded-full
          px-5 py-3
          lg:grid-cols-[1fr_auto_1fr] lg:px-8
        "
        style={{
          // Gray translucent glass matching the original navbar.
          background: "rgba(205, 205, 205, 0.68)",

          backdropFilter:
            "blur(16px) saturate(150%) brightness(1.04)",

          WebkitBackdropFilter:
            "blur(16px) saturate(150%) brightness(1.04)",

          border: "1px solid rgba(255,255,255,0.42)",

          boxShadow:
            "0 1px 1px rgba(17,17,26,0.04), 0 8px 24px rgba(17,17,26,0.06), inset 0 1px 0 rgba(255,255,255,0.55)",
        }}
      >
        {/* SUBTLE GLASS REFLECTION */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        >
          <div
            className="absolute inset-x-5 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.85), transparent)",
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 55%)",
            }}
          />
        </div>

        {/* LOGO */}
        <Link
          href="/"
          onClick={closeMenu}
          className="
            relative z-10 justify-self-start
            whitespace-nowrap text-[19px]
            font-bold leading-none
            tracking-[-0.01em]
            text-[#171717]
          "
        >
          Calibro.
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="relative z-10 hidden items-center justify-center gap-7 lg:flex xl:gap-[34px]">
          {navigation.map((item) => {
            const active =
              item.href !== "/#about" &&
              (pathname === item.href ||
                pathname.startsWith(`${item.href}/`));

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`
                  relative whitespace-nowrap
                  text-[13px] font-medium uppercase
                  tracking-[0.04em]
                  transition-colors duration-200
                  ${
                    active
                      ? "text-[#171717]"
                      : "text-[#171717] hover:text-[#743044]"
                  }
                `}
              >
                {item.label}

                {active && (
                  <span className="absolute -bottom-2 left-0 h-px w-full bg-[#171717]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* DESKTOP CONTACT */}
        <div className="relative z-10 hidden justify-self-end lg:flex">
          <Link
            href="/#contact"
            className="
              whitespace-nowrap text-[13px]
              font-medium uppercase
              tracking-[0.04em]
              text-[#171717]
              transition-colors duration-200
              hover:text-[#743044]
            "
          >
            Contact us
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={
            mobileOpen ? "Close navigation" : "Open navigation"
          }
          aria-expanded={mobileOpen}
          aria-controls="calibro-mobile-menu"
          onClick={() => setMobileOpen((open) => !open)}
          className="
            relative z-10 flex h-10 w-10
            items-center justify-center
            justify-self-end rounded-full
            text-[#171717]
            transition-colors hover:bg-white/30
            lg:hidden
          "
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* MOBILE DROPDOWN */}
        {mobileOpen && (
          <div
            id="calibro-mobile-menu"
            className="
              absolute left-0 right-0
              top-[calc(100%+10px)]
              overflow-hidden rounded-[24px]
              border border-white/50
              p-6 shadow-[0_15px_40px_rgba(17,17,26,0.12)]
              lg:hidden
            "
            style={{
              background: "rgba(205,205,205,0.90)",
              backdropFilter: "blur(20px) saturate(160%)",
              WebkitBackdropFilter:
                "blur(20px) saturate(160%)",
            }}
          >
            <div className="flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    border-b border-black/10 py-4
                    text-[14px] font-medium uppercase
                    tracking-[0.06em] text-[#171717]
                    transition-colors hover:text-[#743044]
                  "
                >
                  {item.label}
                </Link>
              ))}

              <Link
                href="/#contact"
                onClick={closeMenu}
                className="
                  mt-5 flex min-h-12
                  items-center justify-center
                  rounded-full bg-[#171717]
                  px-6 text-[13px] font-medium
                  uppercase tracking-[0.06em]
                  text-white transition-colors
                  hover:bg-[#743044]
                "
              >
                Contact us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

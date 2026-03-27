"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/lib/utils";
import { PrimaryCta, V3Container } from "@/components/v3/primitives";
import { localeFromPath, toLocalePath } from "@/lib/i18n-routing";

interface FooterLink {
  label: string;
  href: string;
}

interface HeaderNavChild {
  label: string;
  href: string;
  description?: string;
}

interface HeaderNavItem {
  label: string;
  href?: string;
  children?: HeaderNavChild[];
}

interface SimpleNavLink {
  label: string;
  href: string;
}

const defaultHeaderNav: HeaderNavItem[] = [
  {
    label: "Servicios",
    children: [
      { label: "Diseño web", href: "/diseno-web", description: "Sitios profesionales orientados a conversión" },
      { label: "Landing pages", href: "/landing-page-design", description: "Páginas enfocadas en campañas y leads" },
      { label: "Ecommerce", href: "/ecommerce-websites", description: "Tiendas online listas para vender" },
      { label: "Rediseño web", href: "/website-redesign", description: "Mejora de sitios existentes" },
      { label: "Soluciones personalizadas", href: "/custom-website-solutions", description: "Funcionalidades avanzadas para necesidades específicas" },
    ],
  },
  {
    label: "Industrias",
    children: [
      { label: "Real Estate & Inmobiliarias", href: "/industries/real-estate" },
      { label: "Restaurantes & Bares", href: "/industries/restaurantes" },
      { label: "Hoteles & Villas", href: "/industries/hoteles-villas" },
      { label: "Tours & Excursiones", href: "/industries/tours-excursiones" },
      { label: "Spas & Wellness", href: "/industries/spas-wellness" },
      { label: "Clínicas & Salud", href: "/industries/clinicas-salud" },
      { label: "Abogados & Servicios Premium", href: "/industries/abogados-servicios-premium" },
      { label: "Constructoras & Desarrollos", href: "/industries/constructoras-desarrollos" },
      { label: "Negocios turísticos", href: "/industries/negocios-turisticos" },
    ],
  },
  {
    label: "Ubicaciones",
    children: [
      { label: "Diseño web Punta Cana", href: "/locations/punta-cana" },
      { label: "Diseño web República Dominicana", href: "/locations/dominican-republic" },
      { label: "Diseño web Santiago", href: "/locations/santiago" },
      { label: "Web design Miami", href: "/locations/miami" },
      { label: "Web design Orlando", href: "/locations/orlando" },
      { label: "Ver todas las ubicaciones", href: "/locations" },
    ],
  },
  { label: "Sobre Nosotros", href: "/about-us" },
];

export function HomeV3Header({
  dark = false,
  homeHref = "/",
  ctaHref = "/contact",
  ctaLabel = "Solicitar cotizacion gratis",
  navItems,
  navLinks,
}: {
  dark?: boolean;
  homeHref?: string;
  ctaHref?: string;
  ctaLabel?: string;
  navItems?: HeaderNavItem[];
  navLinks?: SimpleNavLink[];
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const useWhiteHeader = isScrolled || !dark;
  const resolvedNavItems: HeaderNavItem[] = navItems
    ?? (navLinks ? navLinks.map((item) => ({ label: item.label, href: item.href })) : defaultHeaderNav);
  const topLevelTextClass = useWhiteHeader ? "text-[#1e1e1e]/85 hover:text-[#1e1e1e]" : "text-white/90 hover:text-white";
  const dropdownPanelClass = useWhiteHeader
    ? "border border-black/10 bg-[#0d0d0f] text-white"
    : "border border-white/10 bg-[#0d0d0f] text-white";
  const isDesktopDropdownOpen = (label: string) => openDesktopDropdown === label;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b py-5 transition-colors duration-300 ${
        useWhiteHeader ? "border-black/10 bg-white" : "border-white/20 bg-transparent"
      }`}
    >
      <V3Container className="flex items-center justify-between">
        <Link
          href={homeHref}
          className={`text-[24px] font-medium leading-none tracking-tight ${
            useWhiteHeader ? "text-[#1e1e1e]" : "text-white"
          }`}
          aria-label="Webuildmedia home"
        >
          webuild<span className="text-[#413df2]">media</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {resolvedNavItems.map((item) => {
            if (item.children && item.children.length > 0) {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDesktopDropdown(item.label)}
                  onMouseLeave={() => setOpenDesktopDropdown(null)}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 text-base font-medium transition-colors ${topLevelTextClass}`}
                    aria-expanded={isDesktopDropdownOpen(item.label)}
                    aria-haspopup="menu"
                    onClick={() => setOpenDesktopDropdown(isDesktopDropdownOpen(item.label) ? null : item.label)}
                  >
                    {item.label}
                    <ChevronDown size={16} className={`transition-transform ${isDesktopDropdownOpen(item.label) ? "rotate-180" : ""}`} />
                  </button>

                  {isDesktopDropdownOpen(item.label) && (
                    <div className="absolute left-0 top-full min-w-[360px] pt-3">
                      <div className={`rounded-[8px] p-3 shadow-[0_16px_32px_rgba(0,0,0,0.35)] ${dropdownPanelClass}`}>
                        <ul className="space-y-1" role="menu" aria-label={item.label}>
                          {item.children.map((child, idx) => (
                            <li key={`${item.label}-${child.label}-${idx}`} role="none">
                              <a
                                role="menuitem"
                                href={child.href}
                                className="block rounded-[6px] px-3 py-2 transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none"
                              >
                                <p className="text-sm font-medium text-white">{child.label}</p>
                                {child.description && <p className="mt-0.5 text-xs text-white/65">{child.description}</p>}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a key={item.label} href={item.href ?? "#"} className={`text-base font-medium transition-colors ${topLevelTextClass}`}>
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <PrimaryCta href={ctaHref} className="hidden lg:inline-flex">
            {ctaLabel}
          </PrimaryCta>

          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-[6px] border transition-colors lg:hidden ${
              useWhiteHeader ? "border-black/10 text-[#1e1e1e]" : "border-white/20 text-white"
            }`}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </V3Container>

      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#0d0d0f] lg:hidden">
          <V3Container className="py-4">
            <nav className="space-y-2" aria-label="Mobile principal">
              {resolvedNavItems.map((item) => {
                if (item.children && item.children.length > 0) {
                  const isOpen = openMobileGroup === item.label;
                  return (
                    <div key={item.label} className="rounded-[6px] border border-white/10 bg-white/5">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-white"
                        onClick={() => setOpenMobileGroup(isOpen ? null : item.label)}
                        aria-expanded={isOpen}
                      >
                        {item.label}
                        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <ul className="space-y-1 px-2 pb-2">
                          {item.children.map((child, idx) => (
                            <li key={`${item.label}-mobile-${child.label}-${idx}`}>
                              <a
                                href={child.href}
                                className="block rounded-[6px] px-3 py-2 text-sm text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                              >
                                <p>{child.label}</p>
                                {child.description && <p className="text-xs text-white/55">{child.description}</p>}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={`mobile-${item.label}`}
                    href={item.href ?? "#"}
                    className="block rounded-[6px] border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            <PrimaryCta href={ctaHref} className="mt-4 inline-flex w-full justify-center">
              {ctaLabel}
            </PrimaryCta>
          </V3Container>
        </div>
      )}
    </header>
  );
}

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Web Design", href: "/diseno-web" },
      { label: "Web Development", href: "/web-development" },
      { label: "Landing Page Design", href: "/landing-page-design" },
      { label: "Ecommerce Websites", href: "/ecommerce-websites" },
      { label: "Website Redesign", href: "/website-redesign" },
      { label: "Maintenance and Support", href: "/maintenance-support" },
      { label: "Custom Website Solutions", href: "/custom-website-solutions" },
    ],
  },
  {
    title: "Hubs and SEO Pages",
    links: [
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industries" },
      { label: "Locations", href: "/locations" },
      { label: "Plans", href: "/plans" },
      { label: "About Us", href: "/about-us" },
      { label: "Punta Cana", href: "/locations/punta-cana" },
      { label: "Miami", href: "/locations/miami" },
      { label: "Orlando", href: "/locations/orlando" },
    ],
  },
];

export function HomeV3Footer({
  homeHref = "/",
  description = "Conversion-focused web design and web development for businesses in Punta Cana and Orlando. Built for speed, trust, and qualified leads.",
  serviceLinks,
  extraLinks,
  whatsappLabel = "Conversar con un agente vía WhatsApp",
  locale,
}: {
  homeHref?: string;
  description?: string;
  serviceLinks?: FooterLink[];
  extraLinks?: FooterLink[];
  whatsappLabel?: string;
  locale?: "es" | "en";
}) {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname() ?? "/";
  const activeLocale = locale ?? localeFromPath(pathname);
  const esHref = toLocalePath(pathname, "es");
  const enHref = toLocalePath(pathname, "en");
  const columns = [
    {
      title: "Services",
      links: serviceLinks ?? footerColumns[0].links,
    },
    {
      title: "More SEO Pages",
      links: extraLinks ?? footerColumns[1].links,
    },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#070707] py-20 text-white md:py-24">
      <V3Container>
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="space-y-6">
            <Link href={homeHref} className="inline-block text-[24px] font-medium leading-none tracking-tight text-white">
              webuild<span className="text-[#413df2]">media</span>
            </Link>
            <p className="max-w-[520px] text-base leading-7 text-white/75">
              {description}
            </p>
            <div className="space-y-2 text-base text-white/70">
              <a href={getWhatsAppUrl("Hola, quiero una propuesta para mi negocio.")} target="_blank" rel="noopener noreferrer" className="block hover:text-[#413df2]">
                {whatsappLabel}
              </a>
              <a href="mailto:hello@webuildmedia.com" className="block hover:text-[#413df2]">
                hello@webuildmedia.com
              </a>
              <div className="pt-2">
                <p className="mb-2 text-xs uppercase tracking-[0.12em] text-white/45">
                  {activeLocale === "en" ? "Language" : "Idioma"}
                </p>
                <div className="inline-flex overflow-hidden rounded-[6px] border border-white/15">
                  <Link
                    href={esHref}
                    className={`px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeLocale === "es" ? "bg-[#413df2] text-white" : "bg-transparent text-white/70 hover:bg-white/10"
                    }`}
                  >
                    ES
                  </Link>
                  <Link
                    href={enHref}
                    className={`border-l border-white/15 px-3 py-1.5 text-xs font-medium transition-colors ${
                      activeLocale === "en" ? "bg-[#413df2] text-white" : "bg-transparent text-white/70 hover:bg-white/10"
                    }`}
                  >
                    EN
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {columns.map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="text-xs font-medium uppercase tracking-[0.12em] text-white/45">{column.title}</h3>
                <ul className="space-y-3">
                  {column.links.map((link, idx) => (
                    <li key={`${column.title}-${link.label}-${link.href}-${idx}`}>
                      <a href={link.href} className="text-base text-white/75 transition-colors hover:text-[#413df2]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/45">
          © {currentYear} Webuildmedia. All rights reserved.
        </div>
      </V3Container>
    </footer>
  );
}

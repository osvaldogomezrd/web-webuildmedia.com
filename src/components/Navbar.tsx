"use client";

import { useState } from "react";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/utils";

const navLinks = [
  { label: "Overview", href: "#benefits" },
  { label: "Pages", href: "#services", hasChevron: true },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappHref = getWhatsAppUrl("Hola, quiero solicitar servicio para mi negocio.");

  return (
    <header className="absolute inset-x-0 top-0 z-50 bg-transparent px-16 pt-5 pb-[21px]">
      <div className="mx-auto w-full max-w-[1440px]">
        <nav className="flex items-center justify-between">
          <a
            href="#"
            className="shrink-0 text-[24px] font-medium leading-none tracking-tight text-white"
            aria-label="Webuildmedia home"
          >
            webuild<span className="text-[#413df2]">media</span>
          </a>

          <ul className="hidden flex-1 items-center justify-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center gap-1.5 text-base font-medium leading-[22.4px] text-white/90 transition-opacity duration-200 hover:text-white"
                >
                  {link.label}
                  {link.hasChevron && <ChevronDown size={16} strokeWidth={2.5} />}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden shrink-0 lg:flex">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[46px] items-center justify-center gap-3 rounded-[4px] bg-[#413df2] px-6 text-base font-medium leading-4 text-white transition-opacity duration-200 hover:opacity-90"
            >
              <MessageCircle size={16} strokeWidth={2.5} />
              Solicitar servicio
            </a>
          </div>

          <button
            className="p-1 text-white transition-opacity hover:opacity-70 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className="border-t border-white/15 bg-black/80 backdrop-blur-sm lg:hidden">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="inline-flex items-center gap-1.5 py-2 text-base font-medium leading-[22.4px] text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
                {link.hasChevron && <ChevronDown size={16} strokeWidth={2.5} />}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[46px] w-full items-center justify-center gap-3 rounded-[4px] bg-[#413df2] px-6 text-base font-medium leading-4 text-white"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle size={16} strokeWidth={2.5} />
                Solicitar servicio
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

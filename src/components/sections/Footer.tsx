import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/utils";

const footerLinks = {
  Services: [
    { label: "Web Design", href: "#services" },
    { label: "Web Development", href: "#services" },
    { label: "Landing Pages", href: "#services" },
    { label: "WhatsApp Integration", href: "#services" },
    { label: "Local SEO", href: "#services" },
  ],
  Company: [
    { label: "Our Work", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  Industries: [
    { label: "Real Estate", href: "#services" },
    { label: "Vacation Rentals", href: "#services" },
    { label: "Restaurants", href: "#services" },
    { label: "Tours & Excursions", href: "#services" },
    { label: "Clinics & Spas", href: "#services" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60">
      {/* Final CTA strip */}
      <div className="border-b border-zinc-800/60">
        <Container className="py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                Ready to grow your business online?
              </h3>
              <p className="text-zinc-500 text-sm mt-1">
                Get a free proposal in 24 hours — no commitment.
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <Button
                variant="secondary"
                size="sm"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </Button>
              <Button variant="primary" size="sm" href="#contact">
                Get a Proposal
                <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main footer */}
      <Container className="py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col gap-5">
            <a href="#" className="flex items-center gap-2 w-fit" aria-label="Webuildmedia home">
              <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center">
                <span className="text-zinc-950 font-black text-sm leading-none">W</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                webuild<span className="text-amber-400">media</span>
              </span>
            </a>
            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs">
              Web design agency specializing in strategic, high-converting
              websites for businesses in Punta Cana, Dominican Republic.
            </p>
            <div className="space-y-1.5">
              <p className="text-xs text-zinc-600 font-medium uppercase tracking-wider">
                Contact
              </p>
              <a
                href="mailto:hello@webuildmedia.com"
                className="block text-sm text-zinc-500 hover:text-amber-400 transition-colors"
              >
                hello@webuildmedia.com
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-zinc-500 hover:text-amber-400 transition-colors"
              >
                +1 (849) 123-4567
              </a>
              <p className="text-sm text-zinc-600">Punta Cana, DR</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-400 hover:text-amber-400 transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-zinc-800/60 pt-6">
          <p className="text-xs text-zinc-600">
            © {currentYear} Webuildmedia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-xs text-zinc-700">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}

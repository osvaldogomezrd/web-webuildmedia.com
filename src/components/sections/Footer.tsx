import { Container } from "@/components/ui/Container";
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
    <footer className="border-t border-white/10 bg-[#070707] text-white">
      {/* Main footer */}
      <Container className="py-[112px]">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="w-fit text-[24px] font-medium leading-none tracking-tight text-white"
              aria-label="Webuildmedia home"
            >
              webuild<span className="text-[#413df2]">media</span>
            </a>
            <p className="max-w-xs text-base leading-[22.4px] text-white/70">
              Web design agency specializing in strategic, high-converting
              websites for businesses in Punta Cana, Dominican Republic.
            </p>
            <div className="space-y-1.5">
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Contact
              </p>
              <a
                href="mailto:hello@webuildmedia.com"
                className="block text-base text-white/70 transition-colors hover:text-[#413df2]"
              >
                hello@webuildmedia.com
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-base text-white/70 transition-colors hover:text-[#413df2]"
              >
                +1 (849) 123-4567
              </a>
              <p className="text-base text-white/50">Punta Cana, DR</p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 className="text-xs font-medium uppercase tracking-widest text-white/40">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-base font-medium text-white/70 transition-colors duration-200 hover:text-[#413df2]"
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
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © {currentYear} Webuildmedia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-[#413df2]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-xs text-white/50 transition-colors hover:text-[#413df2]"
            >
              Terms of Service
            </a>
          </div>
          <p className="text-xs text-white/40">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </Container>
    </footer>
  );
}

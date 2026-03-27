/* eslint-disable @next/next/no-img-element */
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const clients = [
  "Coral Real Estate",
  "Azure Villa Rentals",
  "Oceano Restaurant",
  "Glow Aesthetic Clinic",
  "Punta Cana Tours Co.",
  "Caribe Dental Studio",
  "Bavaro Property Group",
  "Sunset Beach Club",
];

const serviceImage1 =
  "https://www.figma.com/api/mcp/asset/07a7ddf7-32b7-40a5-bfc7-db64345a2e89";
const serviceImage2 =
  "https://www.figma.com/api/mcp/asset/73cbe873-bed9-4e40-bda2-3efc79e37894";
const serviceImage3 =
  "https://www.figma.com/api/mcp/asset/eca8de1f-5e3d-4c93-a819-c19f3c7ebe86";
const testimonialBg =
  "https://www.figma.com/api/mcp/asset/77e2b55e-2323-4bd7-94f8-b61e51dcc743";
const processImage1 =
  "https://www.figma.com/api/mcp/asset/dd8f1a57-9028-42af-8644-355fbab4b0bb";
const processImage2 =
  "https://www.figma.com/api/mcp/asset/2ecbeddf-f1d3-4965-98cf-15df3debbc24";
const processImage3 =
  "https://www.figma.com/api/mcp/asset/c472e3fe-94b4-499c-8dbe-a31798a076c9";
const processImage4 =
  "https://www.figma.com/api/mcp/asset/5745d4c1-5579-4671-a3f1-843fa9898398";

const exploreCards = [
  {
    image: serviceImage1,
    title: "Strategic Web Design",
    description:
      "Premium websites crafted to build trust fast and move visitors toward booking, inquiry, or purchase.",
    tags: [
      "Conversion structure",
      "Mobile-first UX",
      "Brand credibility",
      "Lead capture flow",
    ],
  },
  {
    image: serviceImage2,
    title: "Local Growth Strategy",
    description:
      "Position your business in Punta Cana with clear messaging, local relevance, and intent-driven pages.",
    tags: [
      "Business mapping",
      "Local positioning",
      "Service architecture",
      "SEO foundation",
    ],
  },
  {
    image: serviceImage3,
    title: "Technology & Integrations",
    description:
      "Fast Next.js builds with WhatsApp funnels, form automation, analytics, and scalable infrastructure.",
    tags: [
      "WhatsApp integration",
      "Analytics setup",
      "Performance optimization",
      "Scalable development",
    ],
  },
];

const processCards = [
  {
    image: processImage1,
    title: "Discover & Define",
    description: "We align goals, audience, and offer before designing.",
    bullets: [
      "Business discovery call",
      "Audience and offer mapping",
      "Competitor review",
      "Conversion goals definition",
    ],
  },
  {
    image: processImage2,
    title: "Strategy & Direction",
    description: "We turn insights into a clear website structure.",
    bullets: [
      "Sitemap and page priorities",
      "Messaging hierarchy",
      "Conversion wireframe logic",
      "Content requirements",
    ],
  },
  {
    image: processImage3,
    title: "Build & Execute",
    description: "We design and develop your site with speed and precision.",
    bullets: [
      "UI design system",
      "Next.js implementation",
      "WhatsApp and forms integration",
      "Performance optimization",
    ],
  },
  {
    image: processImage4,
    title: "Launch & Improve",
    description: "We publish, measure, and refine for better results.",
    bullets: [
      "QA and device testing",
      "Analytics setup",
      "SEO baseline checks",
      "Post-launch improvements",
    ],
  },
];

const pricingPlans = [
  {
    name: "Essential",
    price: "$49.99/mo",
    subtitle:
      "Ideal for entrepreneurs and small businesses that need a professional presence fast.",
    features: [
      "Custom website design",
      "Mobile-first build",
      "Contact form + lead capture",
      "WhatsApp integration",
      "Basic local SEO setup",
      "Performance optimization",
      "Hosting included",
    ],
    cta: "Start with Essential",
    href: "#contact",
    highlighted: false,
  },
  {
    name: "Business",
    price: "$74.99/mo",
    subtitle:
      "For businesses focused on generating consistent leads and scaling online.",
    features: [
      "Everything in Essential",
      "Advanced multi-step forms",
      "Conversion-focused structure",
      "Google Analytics integration",
      "Priority high-speed hosting",
      "Core Web Vitals optimization",
      "Up to 10 professional emails",
    ],
    cta: "Get Business Plan",
    href: "#contact",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Ecommerce",
    price: "$99.99/mo",
    subtitle:
      "For brands ready to sell online with full store setup and scalable infrastructure.",
    features: [
      "Everything in Business",
      "Full online store setup",
      "Payment gateway integration",
      "Product & inventory management",
      "Order/admin dashboard",
      "SEO-ready product pages",
      "Priority launch support",
    ],
    cta: "Talk to Sales",
    href: "#contact",
    highlighted: false,
  },
];

const testimonialsRowA = [
  {
    quote:
      "Our new site started generating qualified inquiries in the first two weeks. The structure is simple and converts.",
    author: "Carlos M.",
    role: "Owner, Coral Real Estate",
    initials: "CM",
    color: "bg-amber-500",
  },
  {
    quote:
      "They gave us clear direction, fast execution, and a website that finally reflects the level of our brand.",
    author: "Ana Rodriguez",
    role: "Manager, Azure Villa Rentals",
    initials: "AR",
    color: "bg-cyan-500",
  },
  {
    quote:
      "Reservations went up after launch. The mobile experience and WhatsApp flow made a huge difference.",
    author: "Jean-Pierre D.",
    role: "Director, Oceano Restaurant",
    initials: "JP",
    color: "bg-purple-500",
  },
];

const testimonialsRowB = [
  {
    quote:
      "Before this redesign we looked outdated. Now the site builds trust before the first conversation.",
    author: "Valentina S.",
    role: "Founder, Glow Aesthetic Clinic",
    initials: "VS",
    color: "bg-rose-500",
  },
  {
    quote:
      "The process was clear from day one. Strategy, copy and design all pointed to one goal: better leads.",
    author: "Miguel T.",
    role: "CEO, Punta Cana Tours Co.",
    initials: "MT",
    color: "bg-green-500",
  },
  {
    quote:
      "Fast delivery, clean code, and measurable business impact. Exactly what we needed for growth.",
    author: "Laura G.",
    role: "Partner, Bavaro Property Group",
    initials: "LG",
    color: "bg-indigo-500",
  },
];

const faqItems = [
  {
    q: "How long does it take to launch a website?",
    a: "Most projects are delivered in 3 to 4 weeks. Landing pages can be ready faster, while larger websites with complex integrations may require additional time.",
  },
  {
    q: "Do you work specifically with Punta Cana businesses?",
    a: "Yes. We focus on Punta Cana markets including real estate, tourism, restaurants, clinics, and premium local brands that need stronger lead generation online.",
  },
  {
    q: "Do you integrate WhatsApp and lead forms?",
    a: "Absolutely. Every build includes clear contact paths, optimized WhatsApp flows, and forms designed to increase real conversations with qualified leads.",
  },
  {
    q: "Can you redesign my current website?",
    a: "Yes. We can redesign from scratch or improve your current structure, visual identity, and conversion strategy based on your goals.",
  },
  {
    q: "What happens after launch?",
    a: "We provide post-launch support options including updates, performance checks, and ongoing optimization so your website keeps improving over time.",
  },
  {
    q: "Do you offer custom pricing for larger projects?",
    a: "Yes. If your project needs advanced integrations, multiple funnels, or ecommerce complexity, we prepare a custom proposal aligned to scope.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="bg-[#f6f6f6] py-[112px]">
      <Container>
        <div className="mx-auto flex max-w-[1162px] flex-col items-center gap-16 md:gap-20">
          <div className="grid w-full gap-2 md:grid-cols-5">
            <div className="flex items-center bg-[#ececec] px-6 py-10 md:col-span-2">
              <h2 className="below-hero-title">
                Selected Clients
              </h2>
            </div>
            {clients.map((client) => (
              <div
                key={client}
                className="flex min-h-24 items-center justify-center bg-[#ececec] px-6 py-8 text-center"
              >
                <p className="text-base font-medium text-[#3d3d3d]">{client}</p>
              </div>
            ))}
          </div>

          <div className="flex max-w-[700px] flex-col items-center gap-6 text-center">
            <h3 className="below-hero-title">
              We build websites
              <br />
              that drive real results
            </h3>
            <p className="max-w-[500px] text-base leading-6 text-[#3d3d3d]">
              Strategic design, fast development, and conversion-focused structure
              for businesses in Punta Cana that want more leads, more bookings,
              and more sales.
            </p>
          </div>

          <div className="w-full space-y-8">
            <div className="mx-auto flex max-w-[600px] flex-col items-center gap-5 text-center">
              <h4 className="below-hero-title">
                <span className="block whitespace-nowrap">Everything you need</span>
                <span className="block whitespace-nowrap">to grow online</span>
              </h4>
              <p className="text-base leading-6 text-[#3d3d3d]">
                From strategy and design to development and launch. We handle the
                complete process so your website performs like a true sales asset.
              </p>
            </div>

            <div className="relative left-1/2 w-screen -translate-x-1/2 bg-white px-16 py-[112px]">
              <div className="mx-auto w-full max-w-[1162px] space-y-8">
                <div className="flex flex-col gap-6 md:max-w-[450px]">
                  <h5 className="text-[48px] leading-[70.4px] tracking-[-2.6px] font-medium text-[#1e1e1e]">
                    Explore what
                    <br />
                    we do best
                  </h5>
                  <p className="text-base leading-[22.4px] text-[#3d3d3d]">
                    Explore solutions built for businesses in Punta Cana to scale
                    smarter, operate efficiently, and stay ahead of change.
                  </p>
                  <a
                    href="#services"
                    className="inline-flex w-fit items-center gap-3 rounded-[4px] bg-[#413df2] h-[46px] px-6 text-base font-medium leading-4 text-white transition-opacity duration-200 hover:opacity-90"
                  >
                    Explore Services
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </a>
                </div>

                <div className="grid gap-8 xl:grid-cols-3">
                  {exploreCards.map((card) => (
                    <article key={card.title} className="space-y-5">
                      <div className="overflow-hidden rounded-[8px]">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="h-[280px] w-full object-cover"
                        />
                      </div>
                      <div className="space-y-3">
                        <h6 className="text-[28px] leading-[40px] tracking-[-1.6px] font-medium text-[#1e1e1e]">
                          {card.title}
                        </h6>
                        <p className="text-base leading-[22.4px] text-[#3d3d3d]">
                          {card.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {card.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex rounded-full border border-black/20 px-[19px] pb-[9px] pt-[8px] text-base leading-[22.4px] text-[#3d3d3d]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href="#services"
                        className="inline-flex items-center gap-2 text-base font-medium leading-[22.4px] text-[#413df2]"
                      >
                        Learn More
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </a>
                    </article>
                  ))}
                </div>

                <div className="relative mt-[160px] overflow-hidden rounded-[8px] p-8 md:p-14">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${testimonialBg})` }}
                    aria-hidden="true"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/25"
                    aria-hidden="true"
                  />
                  <div className="relative max-w-[715px] space-y-10">
                    <div className="space-y-6">
                      <p className="text-white/80 text-2xl tracking-[0.2em]">★★★★☆</p>
                      <blockquote className="text-white text-[28px] leading-[42px] tracking-[-1.2px] font-medium">
                        &ldquo;Webuildmedia helped us turn our website into a real
                        sales channel. The strategy was clear, execution fast, and
                        the impact on qualified leads was immediate.&rdquo;
                      </blockquote>
                      <div>
                        <p className="text-white text-base font-medium leading-[22.4px]">
                          Carlos M.
                        </p>
                        <p className="text-white/60 text-base font-medium leading-[22.4px]">
                          Owner, Coral Real Estate
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="size-[55px] rounded-lg bg-white shadow-[0_0_5px_rgba(0,0,0,0.12)] flex items-center justify-center">
                        <span className="size-7 rounded-md bg-[#5925dc]" />
                      </div>
                      <div>
                        <p className="text-white text-xl tracking-[0.2em]">★★★★★</p>
                        <p className="text-white text-base font-medium leading-[22.4px]">
                          4.9 Rate by 30+ Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[#f6f6f6] px-16 py-[112px]">
                  <div className="mx-auto w-full max-w-[1162px] space-y-10 pb-[150px]">
                  <div className="mx-auto max-w-[500px] text-center">
                    <h6 className="below-hero-title">
                      <span className="block whitespace-nowrap">Simple steps for</span>
                      <span className="block whitespace-nowrap">lasting impact</span>
                    </h6>
                    <p className="mt-4 text-base leading-[22.4px] text-[#3d3d3d]">
                      From discovery to launch, we follow a proven process that
                      creates clarity, execution speed, and measurable growth.
                    </p>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                    {processCards.map((card) => (
                      <article key={card.title} className="space-y-5">
                        <div className="overflow-hidden rounded-[8px]">
                          <img
                            src={card.image}
                            alt={card.title}
                            className="h-[221px] w-full object-cover"
                          />
                        </div>
                        <div className="space-y-3">
                          <h6 className="text-[28px] leading-[40px] tracking-[-1.6px] font-medium text-[#1e1e1e]">
                            {card.title}
                          </h6>
                          <p className="max-w-[250px] text-base leading-[22.4px] text-[#3d3d3d]">
                            {card.description}
                          </p>
                        </div>
                        <ul className="space-y-2.5">
                          {card.bullets.map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <span className="inline-flex size-[16px] items-center justify-center rounded-full bg-[#413df2] text-[10px] font-bold text-white">
                                ✓
                              </span>
                              <span className="text-base leading-[22.4px] text-[#3d3d3d]">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>

                <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[#070707] px-16 py-[112px]">
                  <div className="mx-auto w-full max-w-[1300px] space-y-12">
                    <div className="mx-auto max-w-[600px] text-center">
                      <h6 className="text-white text-[48px] leading-[70.4px] tracking-[-2.6px] font-medium">
                        <span className="block">Flexible pricing that</span>
                        <span className="block">scales with you</span>
                      </h6>
                      <p className="mt-4 text-base leading-[22.4px] text-white/90">
                        Choose the plan that matches your stage and goals. From
                        launching fast to scaling lead generation at full speed.
                      </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-3">
                      {pricingPlans.map((plan) => (
                        <article
                          key={plan.name}
                          className={`rounded-[4px] border p-10 ${
                            plan.highlighted
                              ? "bg-[#413df2] border-[#413df2]"
                              : "bg-white/10 border-white/5"
                          }`}
                        >
                          <div className="space-y-6">
                            <div className="space-y-3">
                              <div className="flex items-center justify-between gap-3">
                                <p
                                  className={`text-[20px] leading-[28px] tracking-[-0.4px] ${
                                    plan.highlighted ? "text-white/80" : "text-white/70"
                                  }`}
                                >
                                  {plan.name}
                                </p>
                                {plan.badge && (
                                  <span className="rounded bg-[#f74c3c] px-3 py-1 text-xs font-semibold text-white">
                                    {plan.badge}
                                  </span>
                                )}
                              </div>
                              <p className="text-white text-[54px] leading-[56px] tracking-[-1.8px] font-medium">
                                {plan.price}
                              </p>
                              <p className="max-w-[280px] text-[14px] leading-[19.6px] tracking-[0.2px] text-white/50">
                                {plan.subtitle}
                              </p>
                            </div>

                            <div className="h-px bg-white/10" />

                            <ul className="space-y-2.5">
                              {plan.features.map((feature) => (
                                <li key={feature} className="flex items-center gap-2">
                                  <span className="text-[#22c55e] text-sm">✓</span>
                                  <span className="text-base leading-[22.4px] text-white">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>

                            <a
                              href={plan.href}
                              className="inline-flex w-full items-center justify-center gap-3 rounded-[4px] bg-white h-[46px] px-6 text-base font-medium leading-4 text-[#1e1e1e] transition-opacity duration-200 hover:opacity-90"
                            >
                              {plan.cta}
                              <ArrowRight size={16} strokeWidth={2.5} />
                            </a>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#f6f6f6] py-[112px]">
                  <div className="mx-auto mb-12 w-full max-w-[1400px] px-16 text-center">
                    <h6 className="below-hero-title">What our clients say</h6>
                    <p className="mx-auto mt-4 max-w-[430px] text-base leading-[22.4px] text-[#3d3d3d]">
                      Trusted by businesses in Punta Cana and beyond. Real feedback
                      from teams who transformed their websites into growth assets.
                    </p>
                  </div>

                  <div className="relative space-y-6">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#f6f6f6] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#f6f6f6] to-transparent" />

                    <div className="ticker-left flex w-max gap-6">
                      {[...testimonialsRowA, ...testimonialsRowA].map((item, idx) => (
                        <article
                          key={`${item.author}-a-${idx}`}
                          className="w-[430px] rounded-[4px] bg-white p-8 shadow-sm"
                        >
                          <p className="text-xl tracking-[0.2em] text-[#a3a3a3]">★★★★★</p>
                          <p className="mt-6 text-[24px] leading-[40px] tracking-[-1px] text-[#3d3d3d]">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                          <div className="mt-8 flex items-center gap-4">
                            <div
                              className={`size-[50px] rounded-[4px] ${item.color} flex items-center justify-center text-sm font-bold text-white`}
                            >
                              {item.initials}
                            </div>
                            <div>
                              <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                                {item.author}
                              </p>
                              <p className="text-base leading-[22.4px] text-black/50">
                                {item.role}
                              </p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>

                    <div className="ticker-right flex w-max gap-6">
                      {[...testimonialsRowB, ...testimonialsRowB].map((item, idx) => (
                        <article
                          key={`${item.author}-b-${idx}`}
                          className="w-[430px] rounded-[4px] bg-white p-8 shadow-sm"
                        >
                          <p className="text-xl tracking-[0.2em] text-[#a3a3a3]">★★★★★</p>
                          <p className="mt-6 text-[24px] leading-[40px] tracking-[-1px] text-[#3d3d3d]">
                            &ldquo;{item.quote}&rdquo;
                          </p>
                          <div className="mt-8 flex items-center gap-4">
                            <div
                              className={`size-[50px] rounded-[4px] ${item.color} flex items-center justify-center text-sm font-bold text-white`}
                            >
                              {item.initials}
                            </div>
                            <div>
                              <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                                {item.author}
                              </p>
                              <p className="text-base leading-[22.4px] text-black/50">
                                {item.role}
                              </p>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[#f6f6f6] px-16 py-[112px]">
                  <div className="mx-auto grid w-full max-w-[1400px] gap-8 lg:grid-cols-2">
                    <div className="space-y-8 lg:pr-8">
                      <h6 className="below-hero-title">
                        <span className="block">Frequently</span>
                        <span className="block">asked questions</span>
                      </h6>
                      <p className="max-w-[310px] text-base leading-[22.4px] text-[#3d3d3d]">
                        Answers to common questions about our web design process,
                        delivery, and growth-focused services.
                      </p>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-3 rounded-[4px] bg-[#413df2] h-[46px] px-6 text-base font-medium leading-4 text-white transition-opacity duration-200 hover:opacity-90"
                      >
                        Ask a question
                        <ArrowRight size={16} strokeWidth={2.5} />
                      </a>
                    </div>

                    <div className="space-y-3">
                      {faqItems.map((item, idx) => (
                        <details
                          key={item.q}
                          className={`rounded-[4px] border p-6 ${
                            idx === 0
                              ? "border-[#413df2] bg-[#f3f5ff] shadow-[0_0_10px_rgba(0,0,0,0.16)]"
                              : "border-black/10 bg-white"
                          }`}
                          open={idx === 0}
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[24px] leading-[40px] tracking-[-1px] font-medium text-[#1e1e1e]">
                            <span className={idx === 0 ? "text-[#413df2]" : ""}>{item.q}</span>
                            <span className="text-xl text-[#1e1e1e]">⌄</span>
                          </summary>
                          <p className="mt-5 max-w-[539px] text-base leading-[22.4px] text-[#3d3d3d]">
                            {item.a}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          </div>
        </div>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "Most projects are completed within 3–4 weeks. A simple landing page can be ready in 7–10 business days. Larger sites with custom features may take 4–6 weeks. We'll give you a precise timeline after your initial consultation.",
  },
  {
    question: "Do you work with businesses based in Punta Cana?",
    answer:
      "Absolutely — that's our primary focus. We understand the local market, the types of clients businesses here attract, and what it takes to convert them. We work remotely with clients anywhere in the Dominican Republic and internationally.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. If you have an existing website that doesn't convert, looks outdated, or loads slowly, we can redesign it from scratch or significantly improve it. We'll analyze what's not working and build a better version.",
  },
  {
    question: "Do you integrate WhatsApp into the website?",
    answer:
      "Yes, always. WhatsApp is the most effective conversion tool for businesses in Latin America and the Caribbean. We integrate floating buttons, page-specific CTAs, and pre-filled message links to make it easy for visitors to contact you instantly.",
  },
  {
    question: "Will my website show up on Google?",
    answer:
      "Every website we build includes a solid SEO foundation: proper metadata, semantic HTML, Open Graph tags, fast load times, and local keywords. For more advanced Google ranking, we offer SEO as an add-on service.",
  },
  {
    question: "What do I need to get started?",
    answer:
      "Just fill out the contact form or write us on WhatsApp. We'll schedule a discovery call to understand your business and goals. Then we send you a detailed proposal with scope, timeline, and pricing. No commitment until you're ready.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Every project is different, so we provide custom quotes based on scope. A focused landing page starts from $800 USD. A full website with multiple pages, custom design, and integrations typically ranges from $1,500 to $4,500 USD. Contact us for a free estimate.",
  },
  {
    question: "Do you offer ongoing maintenance or support?",
    answer:
      "Yes. After launch, we offer monthly maintenance plans that include content updates, security patches, performance monitoring, and priority support. Ask us about our care plans during your consultation.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We build with Next.js, React, TypeScript, and Tailwind CSS — modern, industry-standard tools that result in fast, scalable, and maintainable websites. We host on Vercel for optimal performance and reliability.",
  },
];

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div className="border-b border-zinc-800 last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left gap-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 rounded-lg"
        aria-expanded={isOpen}
        id={`faq-${index}`}
      >
        <span
          className={cn(
            "text-sm sm:text-base font-semibold transition-colors duration-200",
            isOpen ? "text-amber-400" : "text-white group-hover:text-amber-300"
          )}
        >
          {question}
        </span>
        <ChevronDown
          size={18}
          className={cn(
            "text-zinc-500 shrink-0 transition-transform duration-300",
            isOpen && "rotate-180 text-amber-400"
          )}
          aria-hidden="true"
        />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-5" : "max-h-0"
        )}
        role="region"
        aria-labelledby={`faq-${index}`}
      >
        <p className="text-sm text-zinc-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-zinc-950">
      <Container size="md">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <SectionLabel>FAQ</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight text-balance">
            Frequently asked{" "}
            <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl text-balance">
            Everything you need to know before getting started. Still have
            questions? Write to us on WhatsApp.
          </p>
        </div>

        {/* FAQ list */}
        <div className="card-dark rounded-2xl px-6 sm:px-8 divide-y divide-zinc-800">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              index={index}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

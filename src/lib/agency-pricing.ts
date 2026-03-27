import type { PricingItem } from "@/components/v3/sections";

const basePlans: PricingItem[] = [
  {
    plan: "Essential",
    price: "$49.99 / month",
    audience: "$350 registration fee · For businesses that need a professional website and clear lead capture",
    features: [
      "Modern, professional, responsive website design and development",
      ".com domain and basic hosting included",
      "100% design customized to your brand",
      "Basic contact form",
      "Social media integration",
      "Unique WhatsApp button",
      "SSL security certificate",
      "Self-managed blog to share content",
      "2 professional email accounts with your domain",
      "Technical support via Helpdesk",
      "10 GB of web space",
    ],
  },
  {
    plan: "Business",
    price: "$74.99 USD / month",
    audience: "$450 registration fee · Built for teams that need stronger lead flow and better conversion support",
    highlight: true,
    features: [
      "Everything in the Essential Plan",
      "Product or service catalog",
      "Smart contact forms with dynamic fields, validations, and automatic responses",
      "Multiple WhatsApp buttons or live floating chat",
      "Up to 10 professional email accounts",
      "Faster hosting",
      "25 GB of web space",
    ],
  },
  {
    plan: "Ecommerce",
    price: "$99.99 USD / month",
    audience: "$550 registration fee · For businesses ready to sell online with a complete conversion-focused store",
    features: [
      "Everything in the Business Plan",
      "Complete online store",
      "Payment gateway integration: Stripe, Cardnet, Azul, Visanet, PayPal, and others",
      "Self-management admin panel",
      "Ultra-fast hosting",
      "More than 10 email accounts (additional cost per account)",
      "More than 25 GB of web space (additional cost per GB)",
    ],
  },
];

export function getAgencyPricingPlans(recommended?: string): PricingItem[] {
  return basePlans.map((plan) => ({
    ...plan,
    highlight: (recommended ? plan.plan.toLowerCase() === recommended.toLowerCase() : plan.plan === "Business"),
  }));
}

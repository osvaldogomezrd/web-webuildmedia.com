import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://webuildmedia.com"
  ),
  title: {
    default:
      "Webuildmedia — Web Design Agency in Punta Cana | Websites That Convert",
    template: "%s | Webuildmedia",
  },
  description:
    "We design and build strategic websites for businesses in Punta Cana. Turn your website into a lead-generation machine. More visits, more contacts, more sales.",
  keywords: [
    "web design Punta Cana",
    "Punta Cana web design agency",
    "websites for Punta Cana businesses",
    "lead generation web design",
    "diseño web Punta Cana",
    "agencia web Punta Cana",
    "landing page Punta Cana",
    "real estate website Punta Cana",
    "tourism website Dominican Republic",
  ],
  authors: [{ name: "Webuildmedia", url: "https://webuildmedia.com" }],
  creator: "Webuildmedia",
  publisher: "Webuildmedia",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "es_DO",
    url: "https://webuildmedia.com",
    siteName: "Webuildmedia",
    title: "Webuildmedia — Websites That Turn Visits Into Clients",
    description:
      "Strategic web design for businesses in Punta Cana. We build websites focused on leads, conversions, and growth — not just looks.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Webuildmedia — Web Design Agency in Punta Cana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webuildmedia — Websites That Turn Visits Into Clients",
    description:
      "Strategic web design for businesses in Punta Cana. We build websites focused on leads, conversions, and growth.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

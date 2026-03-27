import type { Metadata } from "next";
import { headers } from "next/headers";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://webuildmedia.com"
  ),
  title: {
    default:
      "Webuildmedia — Web Design & Web Development in Punta Cana, Miami, and Orlando",
    template: "%s | Webuildmedia",
  },
  description:
    "Conversion-focused web design and web development for businesses in Punta Cana, Miami, and Orlando. Request Proposal, Request Free Quote, or chat on WhatsApp.",
  keywords: [
    "web design Punta Cana",
    "web design Dominican Republic",
    "web design Santiago",
    "web development Punta Cana",
    "Punta Cana web design agency",
    "web design Orlando",
    "web development Orlando",
    "Orlando web design agency",
    "web design Miami",
    "web development Miami",
    "Miami web design agency",
    "conversion-focused website design",
    "websites that generate leads",
    "SEO-friendly business websites",
    "website design for real estate",
    "website design for restaurants",
    "web design for tourism businesses",
    "website design for lawyers",
    "web design for clinics",
    "ecommerce website design",
    "landing page design",
    "website design agency in Punta Cana",
    "professional website for businesses in Punta Cana",
  ],
  authors: [{ name: "Webuildmedia", url: "https://webuildmedia.com" }],
  creator: "Webuildmedia",
  publisher: "Webuildmedia",
  openGraph: {
    type: "website",
    locale: "es_DO",
    alternateLocale: "en_US",
    url: "https://webuildmedia.com",
    siteName: "Webuildmedia",
    title: "Webuildmedia — Conversion-Focused Websites for Punta Cana, Miami, and Orlando",
    description:
      "Strategic web design and web development focused on qualified leads for Punta Cana, Miami, and Orlando businesses.",
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
    title: "Webuildmedia — Conversion-Focused Websites for Punta Cana, Miami, and Orlando",
    description:
      "Strategic web design and web development for Punta Cana, Miami, and Orlando businesses focused on leads and conversion.",
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
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: "/icon.png",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const htmlLang = requestHeaders.get("x-html-lang") === "en" ? "en" : "es";

  return (
    <html lang={htmlLang} className={`scroll-smooth ${poppins.variable}`}>
      <body className="antialiased">
        {children}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NBBJ9LPQG5"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NBBJ9LPQG5');
          `}
        </Script>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "w1xvojs12k");
          `}
        </Script>
      </body>
    </html>
  );
}

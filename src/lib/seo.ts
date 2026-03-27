import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://webuildmedia.com";

export function makePageMetadata({
  title,
  description,
  path,
  languages,
}: {
  title: string;
  description: string;
  path: string;
  languages?: Record<string, string>;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      siteName: "Webuildmedia",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}

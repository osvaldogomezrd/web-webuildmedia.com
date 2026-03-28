"use client";

import { useEffect, useRef } from "react";
import { PrimaryCta } from "@/components/v3/primitives";

export function Hero7ClientSection({
  id,
  eyebrow,
  titleLineOne,
  titleLineTwo,
  subtitleLineOne,
  subtitleLineTwo,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  overviewImage,
  fullHeight = false,
}: {
  id: string;
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitleLineOne: string;
  subtitleLineTwo: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  overviewImage: string;
  fullHeight?: boolean;
}) {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const image = imageRef.current;
    const heading = headingRef.current;
    if (!image || !heading) return;

    const imageStart = window.innerWidth < 768 ? 30 : 52;

    image.style.willChange = "transform";
    heading.style.willChange = "transform";
    image.style.transform = `translateY(${imageStart}%)`;
    heading.style.transform = "translateY(9%)";

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / 350, 1);
      image.style.transform = `translateY(${imageStart * (1 - progress)}%)`;
      heading.style.transform = `translateY(${9 * (1 - progress)}%)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id={id}
      className={`${fullHeight ? "min-h-screen min-h-[100svh] max-h-none" : "hero-max-h"} overflow-hidden bg-[linear-gradient(180deg,_#1A1750_0%,_#5506CE_100%)] px-6 text-white md:px-10 lg:px-[74px] ${fullHeight ? "flex flex-col pb-0 pt-[206px]" : "pb-[206px] pt-[206px]"}`}
    >
      <div ref={headingRef} className={`mx-auto flex max-w-[1280px] flex-col items-center text-center ${fullHeight ? "pb-10 md:pb-12" : ""}`}>
        <p className="text-base font-medium leading-[22.4px] text-white">{eyebrow}</p>

        <h2 className="site-hero-title mt-8 max-w-[950px] ds-h2 text-white">
          <span className="block">{titleLineOne}</span>
          <span className="block">{titleLineTwo}</span>
        </h2>

        <p className="mt-8 max-w-[1140px] text-[20px] font-medium leading-7 tracking-[-0.4px] text-white">
          <span className="block">{subtitleLineOne}</span>
          <span className="block">{subtitleLineTwo}</span>
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          <PrimaryCta href={primaryHref}>{primaryLabel}</PrimaryCta>
          <a href={secondaryHref} className="inline-flex h-[46px] items-center text-base font-medium leading-[22.4px] text-white hover:opacity-80">
            {secondaryLabel}
          </a>
        </div>
      </div>

      <div ref={imageRef} className={`${fullHeight ? "mx-auto mt-auto w-full max-w-[1600px]" : "mx-auto mt-[127px] max-w-[1600px]"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={overviewImage} alt="Hero 7 overview" className="w-full object-cover" />
      </div>
    </section>
  );
}

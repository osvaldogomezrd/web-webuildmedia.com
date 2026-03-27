"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { PrimaryCta, V3Section, WhatsAppCta } from "@/components/v3/primitives";

const STEPPER_IMAGE_FALLBACK =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80";

interface StepperItem {
  step: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
}

interface StepperSixItem extends StepperItem {
  imageOnTop?: boolean;
}

interface ProcessScrollCardItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export function ScrollStepperSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  ctaHref,
  ctaLabel,
  whatsappLabel,
  whatsappMessage,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: StepperItem[];
  ctaHref: string;
  ctaLabel: string;
  whatsappLabel: string;
  whatsappMessage: string;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      const start = viewportHeight * 0.2;
      const end = rect.height + viewportHeight * 0.2;
      const distance = start - rect.top;
      const rawProgress = distance / end;
      const clamped = Math.min(1, Math.max(0, rawProgress));

      setProgress(clamped);
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <V3Section id={id} tone="soft" className="py-20 md:py-24 lg:py-28">
      <section ref={sectionRef} className="space-y-14">
        <div className="mx-auto max-w-[900px] space-y-6 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#5a5a5a]">{eyebrow}</p>
          <h2 className="whitespace-pre-line ds-h2 text-[#1e1e1e]">{title}</h2>
          <p className="mx-auto max-w-[680px] text-base leading-7 text-[#3d3d3d]">{subtitle}</p>
        </div>

        <div className="space-y-10 md:space-y-12">
          <div className="space-y-10 md:space-y-14">
            {items.map((item, idx) => {
              const total = Math.max(1, items.length);
              const segmentStart = idx / total;
              const segmentEnd = (idx + 1) / total;
              const segmentProgress = Math.min(1, Math.max(0, (progress - segmentStart) / (segmentEnd - segmentStart)));
              const active = segmentProgress > 0.02;
              const isLast = idx === items.length - 1;
              const imageLeft = idx % 2 === 0;
              const imagePlacement = imageLeft ? "lg:col-start-1 lg:justify-self-end" : "lg:col-start-3 lg:justify-self-start";
              const contentPlacement = imageLeft
                ? "lg:col-start-3 lg:items-start lg:text-left"
                : "lg:col-start-1 lg:items-start lg:text-left";

              return (
                <article
                  key={`${item.step}-${idx}`}
                  className={`grid gap-3 lg:mx-auto lg:w-fit lg:grid-cols-[300.45px_48px_300.45px] lg:items-start ${
                    isLast ? "lg:h-[220px] lg:grid-rows-[220px]" : "lg:h-[390px] lg:grid-rows-[390px]"
                  }`}
                >
                  <div className={`order-2 ${imagePlacement} lg:row-start-1`}>
                    <div className="w-fit overflow-hidden rounded-[8px] border border-black/10 bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="h-[200.28px] w-[300.42px] max-w-full object-cover"
                        onError={(event) => {
                          event.currentTarget.onerror = null;
                          event.currentTarget.src = STEPPER_IMAGE_FALLBACK;
                        }}
                      />
                    </div>
                  </div>

                  <div className="hidden lg:flex lg:col-start-2 lg:row-start-1 lg:h-full lg:flex-col lg:items-center lg:gap-2 lg:justify-self-stretch">
                    <span
                      className="inline-flex h-[12px] w-[12px] rounded-full border transition-colors duration-200"
                      style={{
                        backgroundColor: active ? "#413df2" : "#ffffff",
                        borderColor: active ? "#413df2" : "rgba(0,0,0,0.2)",
                      }}
                    />
                    {!isLast && (
                      <div className="relative h-[370px] w-[4px] overflow-hidden bg-[#d1d1d1]">
                        <div
                          className="absolute left-0 top-0 w-[4px] bg-[#413df2] transition-[height] duration-200 ease-out"
                          style={{ height: `${Math.round(segmentProgress * 100)}%` }}
                        />
                      </div>
                    )}
                  </div>

                  <div className={`order-1 flex w-[300.45px] max-w-full flex-col gap-[38.99px] ${contentPlacement} lg:row-start-1`}>
                    <div className="flex flex-col gap-[15px]">
                      <p className="text-[16px] font-medium leading-[22.4px] text-[#3d3d3d]">{item.step}</p>
                      <h3 className="ds-h6 text-[#1e1e1e]">{item.title}</h3>
                      <p className="max-w-[253px] text-[16px] font-medium leading-[22.4px] text-[#3d3d3d]">{item.description}</p>
                    </div>
                    <ul className="space-y-[11px]">
                      {item.bullets.map((bullet, bulletIdx) => (
                        <li key={`${item.step}-bullet-${bulletIdx}`} className="flex items-center gap-2 text-[16px] font-medium leading-[22.4px] text-[#3d3d3d]">
                          <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#413df2] text-white">
                            <Check size={12} strokeWidth={3} />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-24 flex flex-wrap items-center justify-center gap-4">
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
            <WhatsAppCta label={whatsappLabel} message={whatsappMessage} />
          </div>
        </div>
      </section>
    </V3Section>
  );
}

export function ScrollStepperVerticalTimelineSection({
  id,
  eyebrow,
  title,
  subtitle,
  items,
  ctaHref,
  ctaLabel,
  whatsappLabel,
  whatsappMessage,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  items: StepperItem[];
  ctaHref: string;
  ctaLabel: string;
  whatsappLabel: string;
  whatsappMessage: string;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    const updateProgress = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const stickyTop = window.matchMedia("(min-width: 768px)").matches ? 96 : 80;
      const totalScrollable = Math.max(1, rect.height - viewportHeight + stickyTop);
      const scrolled = stickyTop - rect.top;
      setProgress(clamp(scrolled / totalScrollable));
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const totalSteps = Math.max(1, items.length);
  const stepProgressRaw = progress * totalSteps;
  const activeIndex = Math.min(totalSteps - 1, Math.floor(stepProgressRaw));
  const activeStep = items[activeIndex] ?? items[0];
  const activeSegmentProgress = Math.min(1, Math.max(0, stepProgressRaw - activeIndex));
  const timelineHeightVh = Math.max(totalSteps * 95, 260);

  return (
    <V3Section id={id} tone="soft" className="py-16 md:py-24 lg:py-28">
      <section
        ref={sectionRef}
        className="relative"
        style={{ height: `${timelineHeightVh}vh` }}
      >
        <div className="sticky top-20 space-y-8 md:top-24 md:space-y-10">
          <div className="mx-auto max-w-[900px] space-y-6 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#5a5a5a]">{eyebrow}</p>
            <h2 className="whitespace-pre-line ds-h2 text-[#1e1e1e]">{title}</h2>
            <p className="mx-auto max-w-[680px] text-base leading-7 text-[#3d3d3d]">{subtitle}</p>
          </div>

          <div className="mx-auto max-w-[1080px] space-y-8 rounded-[8px] border border-black/10 bg-white p-5 md:p-6">
            <div className="space-y-2">
              <p className="text-center text-xs font-medium uppercase tracking-[0.1em] text-[#5a5a5a] md:hidden">
                Step {activeIndex + 1} of {totalSteps}
              </p>
              <div className="relative h-[20px]">
                <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#d1d1d1]" />
                <div
                  className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-[#413df2] transition-[width] duration-200 ease-out"
                  style={{ width: `${Math.max(4, progress * 100)}%` }}
                />
                <div className="relative flex items-center justify-between">
                  {items.map((item, idx) => {
                    const isPassed = idx < activeIndex;
                    const isActive = idx === activeIndex;
                    return (
                      <span
                        key={`${item.step}-dot-${idx}`}
                        className="inline-flex h-[12px] w-[12px] rounded-full border transition-colors duration-200"
                        style={{
                          backgroundColor: isPassed || isActive ? "#413df2" : "#ffffff",
                          borderColor: isPassed || isActive ? "#413df2" : "rgba(0,0,0,0.2)",
                        }}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="hidden justify-between gap-3 md:flex">
                {items.map((item, idx) => (
                  <p
                    key={`${item.step}-label-${idx}`}
                    className={`text-[11px] font-medium uppercase tracking-[0.08em] ${
                      idx === activeIndex ? "text-[#413df2]" : "text-[#8a8a8a]"
                    }`}
                  >
                    {item.step}
                  </p>
                ))}
              </div>
            </div>

            <article key={activeStep?.step} className="grid gap-5 transition-all duration-300 md:grid-cols-[minmax(0,1fr)_320px] md:items-start">
              <div className="space-y-4">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#413df2]">{activeStep?.step}</p>
                <h3 className="ds-h6 text-[#1e1e1e]">
                  {activeStep?.title}
                </h3>
                <p className="max-w-[560px] text-[16px] font-medium leading-[22.4px] text-[#3d3d3d]">
                  {activeStep?.description}
                </p>
                <ul className="space-y-[11px]">
                  {(activeStep?.bullets ?? []).map((bullet, bulletIdx) => (
                    <li
                      key={`${activeStep?.step}-horizontal-bullet-${bulletIdx}`}
                      className="flex items-center gap-2 text-[16px] font-medium leading-[22.4px] text-[#3d3d3d]"
                    >
                      <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#413df2] text-white">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-1">
                  <div className="h-[4px] w-full max-w-[260px] overflow-hidden rounded-full bg-[#e2e2e2]">
                    <div
                      className="h-full bg-[#413df2] transition-[width] duration-200 ease-out"
                      style={{ width: `${Math.max(6, activeSegmentProgress * 100)}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[8px] border border-black/10 bg-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={activeStep?.image}
                  alt={activeStep?.imageAlt ?? "Timeline item image"}
                  className="h-[220px] w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = STEPPER_IMAGE_FALLBACK;
                  }}
                />
              </div>
            </article>
          </div>

          <div className="mt-24 flex flex-wrap items-center justify-center gap-4">
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
            <WhatsAppCta label={whatsappLabel} message={whatsappMessage} />
          </div>
        </div>
      </section>
    </V3Section>
  );
}

export function ScrollStepperSixSection({
  id,
  eyebrow,
  titleLineOne,
  titleLineTwo,
  subtitleLineOne,
  subtitleLineTwo,
  items,
}: {
  id: string;
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitleLineOne: string;
  subtitleLineTwo: string;
  items: StepperSixItem[];
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [targetProgress, setTargetProgress] = useState(0);
  const [progress, setProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const dragStartProgressRef = useRef(0);

  useEffect(() => {
    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    const updateProgress = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const stickyTop = window.matchMedia("(min-width: 1024px)").matches ? 96 : 80;
      const totalScrollable = Math.max(1, rect.height - viewportHeight + stickyTop);
      const scrolled = stickyTop - rect.top;
      setTargetProgress(clamp(scrolled / totalScrollable));
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    let rafId = 0;

    const animate = () => {
      setProgress((current) => {
        const next = current + (targetProgress - current) * 0.14;
        if (Math.abs(targetProgress - next) < 0.0015) {
          return targetProgress;
        }
        return next;
      });
      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(rafId);
  }, [targetProgress]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateSize = () => {
      setViewportWidth(viewport.clientWidth);
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(viewport);
    window.addEventListener("resize", updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const totalSteps = Math.max(1, items.length);
  const stepProgressRaw = progress * totalSteps;
  const activeIndex = Math.min(totalSteps - 1, Math.floor(stepProgressRaw));
  const timelineHeightVh = Math.max(totalSteps * 180, 720);
  const cardWidth = 320;
  const cardGap = 260;
  const dotY = 236;
  const desktopTrackWidth = totalSteps * cardWidth + (totalSteps - 1) * cardGap;
  const maxShift = Math.max(0, desktopTrackWidth - Math.max(viewportWidth, cardWidth));
  const offsetX = progress * maxShift;
  const firstDotX = cardWidth / 2;
  const lastDotX = desktopTrackWidth - cardWidth / 2;
  const baseLineWidth = Math.max(0, lastDotX - firstDotX);
  const fillLineWidth = Math.max(0, baseLineWidth * progress);
  const activeItem = items[activeIndex] ?? items[0];

  return (
    <V3Section id={id} tone="light" className="py-0">
      <section ref={sectionRef} className="relative" style={{ height: `${timelineHeightVh}vh` }}>
        <div className="sticky top-20 min-h-[calc(100vh-80px)] md:top-24 md:min-h-[calc(100vh-96px)]">
          <div className="relative left-1/2 w-screen -translate-x-1/2 bg-[#f4f4f4] px-6 py-10 md:px-10 md:py-12 lg:px-[74px] lg:py-14">
            <div className="mx-auto max-w-[1600px] space-y-10">
              <div className="max-w-[620px] space-y-6">
                <p className="text-[20px] font-medium leading-7 tracking-[-0.02em] text-black/50">{eyebrow}</p>
                <h2 className="ds-h2 text-[#1e1e1e]">
                  <span className="block">{titleLineOne}</span>
                  <span className="block text-black/50">{titleLineTwo}</span>
                </h2>
                <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                  <span className="block">{subtitleLineOne}</span>
                  <span className="block">{subtitleLineTwo}</span>
                </p>
              </div>

              <div ref={viewportRef} className="hidden overflow-hidden px-5 py-8 lg:block">
                <div className="relative h-[560px]">
                  <div
                    className="absolute h-[4px] bg-[#d1d1d1]"
                    style={{
                      left: `${firstDotX - offsetX}px`,
                      top: `${dotY}px`,
                      width: `${baseLineWidth}px`,
                    }}
                  />
                  <div
                    className="absolute h-[4px] bg-[#413df2] transition-[width] duration-150 ease-out"
                    style={{
                      left: `${firstDotX - offsetX}px`,
                      top: `${dotY}px`,
                      width: `${fillLineWidth}px`,
                    }}
                  />

                  {items.map((item, idx) => {
                    const reached = stepProgressRaw >= idx + 0.05;
                    const isActive = idx === activeIndex;
                    const imageOnTop = item.imageOnTop ?? idx % 2 === 0;
                    const left = idx * (cardWidth + cardGap) - offsetX;

                    return (
                      <article
                        key={`${item.step}-${idx}`}
                        className="absolute top-0 h-[540px] w-[320px]"
                        style={{ left: `${left}px` }}
                      >
                        <span
                          className="absolute left-1/2 z-20 inline-flex h-[12px] w-[12px] -translate-x-1/2 rounded-full border transition-colors duration-200"
                          style={{
                            top: `${dotY - 4}px`,
                            backgroundColor: reached || isActive ? "#413df2" : "#ffffff",
                            borderColor: reached || isActive ? "#413df2" : "#d1d1d1",
                          }}
                        />

                        {imageOnTop ? (
                          <div className={`space-y-6 transition-opacity duration-200 ${reached || isActive ? "opacity-100" : "opacity-45"}`}>
                            <div className="overflow-hidden border border-black/10 bg-white">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={item.image}
                                alt={item.imageAlt}
                                className="h-[200px] w-[320px] object-cover"
                                onError={(event) => {
                                  event.currentTarget.onerror = null;
                                  event.currentTarget.src = STEPPER_IMAGE_FALLBACK;
                                }}
                              />
                            </div>
                            <div className="space-y-3 pt-5">
                              <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">{item.step}</p>
                              <h3 className="ds-h5 text-[#1e1e1e]">{item.title}</h3>
                              <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">{item.description}</p>
                              <ul className="space-y-2">
                                {item.bullets.map((bullet, bulletIdx) => (
                                  <li key={`${item.step}-six-bottom-bullet-${bulletIdx}`} className="flex items-center gap-2 text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                                    <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#413df2] text-white">
                                      <Check size={12} strokeWidth={3} />
                                    </span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          <div className={`space-y-6 transition-opacity duration-200 ${reached || isActive ? "opacity-100" : "opacity-45"}`}>
                            <div className="space-y-3 pb-5">
                              <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">{item.step}</p>
                              <h3 className="ds-h5 text-[#1e1e1e]">{item.title}</h3>
                              <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">{item.description}</p>
                              <ul className="space-y-2">
                                {item.bullets.map((bullet, bulletIdx) => (
                                  <li key={`${item.step}-six-top-bullet-${bulletIdx}`} className="flex items-center gap-2 text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                                    <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#413df2] text-white">
                                      <Check size={12} strokeWidth={3} />
                                    </span>
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="overflow-hidden border border-black/10 bg-white">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={item.image}
                                alt={item.imageAlt}
                                className="h-[200px] w-[320px] object-cover"
                                onError={(event) => {
                                  event.currentTarget.onerror = null;
                                  event.currentTarget.src = STEPPER_IMAGE_FALLBACK;
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-6 lg:hidden">
                <div className="space-y-3">
                  <div className="relative h-[12px]">
                    <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 bg-[#d1d1d1]" />
                    <div
                      className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 bg-[#413df2] transition-[width] duration-200 ease-out"
                      style={{ width: `${Math.max(4, progress * 100)}%` }}
                    />
                    <div className="relative flex items-center justify-between">
                      {items.map((item, idx) => {
                        const reached = idx <= activeIndex;
                        return (
                          <span
                            key={`${item.step}-six-mobile-dot-${idx}`}
                            className="inline-flex h-[10px] w-[10px] rounded-full border"
                            style={{
                              backgroundColor: reached ? "#413df2" : "#f4f4f4",
                              borderColor: reached ? "#413df2" : "#d1d1d1",
                            }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-[0.08em] text-[#5a5a5a]">
                    Step {activeIndex + 1} of {totalSteps}
                  </p>
                </div>

                <article className="space-y-4">
                  <div className="overflow-hidden border border-black/10 bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={activeItem.image}
                      alt={activeItem.imageAlt}
                      className="h-[200px] w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = STEPPER_IMAGE_FALLBACK;
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium leading-[22.4px] text-[#3d3d3d]">{activeItem.step}</p>
                    <h3 className="ds-h5 text-[#1e1e1e]">{activeItem.title}</h3>
                    <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">{activeItem.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {activeItem.bullets.map((bullet, bulletIdx) => (
                      <li key={`${activeItem.step}-six-mobile-bullet-${bulletIdx}`} className="flex items-center gap-2 text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                        <span className="inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-[#413df2] text-white">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </V3Section>
  );
}

export function OurProcessScrollCardsSection({
  id,
  eyebrow,
  titleLineOne,
  titleLineTwo,
  subtitleLineOne,
  subtitleLineTwo,
  items,
  ctaLabel,
  ctaHref,
}: {
  id: string;
  eyebrow: string;
  titleLineOne: string;
  titleLineTwo: string;
  subtitleLineOne: string;
  subtitleLineTwo: string;
  items: ProcessScrollCardItem[];
  ctaLabel: string;
  ctaHref: string;
}) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [targetProgress, setTargetProgress] = useState(0);
  const [progress, setProgress] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef(0);
  const dragStartProgressRef = useRef(0);

  useEffect(() => {
    const clamp = (value: number) => Math.min(1, Math.max(0, value));

    const updateProgress = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const stickyTop = window.matchMedia("(min-width: 1024px)").matches ? 96 : 80;
      const totalScrollable = Math.max(1, rect.height - viewportHeight + stickyTop);
      const scrolled = stickyTop - rect.top;
      setTargetProgress(clamp(scrolled / totalScrollable));
    };

    const onScroll = () => {
      window.requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    let rafId = 0;

    const animate = () => {
      setProgress((current) => {
        const next = current + (targetProgress - current) * 0.12;
        if (Math.abs(targetProgress - next) < 0.0015) return targetProgress;
        return next;
      });
      rafId = window.requestAnimationFrame(animate);
    };

    rafId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(rafId);
  }, [targetProgress]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateSize = () => setViewportWidth(viewport.clientWidth);
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(viewport);
    window.addEventListener("resize", updateSize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  const cardWidth = 599;
  const cardGap = 14;
  const totalCards = Math.max(1, items.length);
  const timelineHeightVh = Math.max(totalCards * 85, 420);
  const trackWidth = totalCards * cardWidth + (totalCards - 1) * cardGap;
  const maxShift = Math.max(0, trackWidth - Math.max(viewportWidth, cardWidth));
  const offsetX = progress * maxShift;
  const progressToOffset = (value: number) => value * maxShift;
  const offsetToProgress = (value: number) => (maxShift <= 0 ? 0 : Math.min(1, Math.max(0, value / maxShift)));

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (maxShift <= 0) return;
    setIsDragging(true);
    dragStartXRef.current = event.clientX;
    dragStartProgressRef.current = progress;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || maxShift <= 0) return;
    const deltaX = event.clientX - dragStartXRef.current;
    const startOffset = progressToOffset(dragStartProgressRef.current);
    const nextOffset = startOffset - deltaX;
    const nextProgress = offsetToProgress(nextOffset);
    setTargetProgress(nextProgress);
    setProgress(nextProgress);
  };

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setIsDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <V3Section id={id} tone="light">
      <section ref={sectionRef} className="relative" style={{ height: `${timelineHeightVh}vh` }}>
        <div className="sticky top-20 space-y-8 md:top-24 md:space-y-10">
          <div className="mx-auto max-w-[620px] space-y-5 text-center">
            <p className="text-[20px] font-medium leading-7 tracking-[-0.02em] text-black/50">{eyebrow}</p>
            <h2 className="ds-h2 text-[#1e1e1e]">
              <span className="text-[#1e1e1e]">{titleLineOne} </span>
              <span className="text-black/50">{titleLineTwo}</span>
            </h2>
            <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">
              <span className="block">{subtitleLineOne}</span>
              <span className="block">{subtitleLineTwo}</span>
            </p>
          </div>

          <div
            ref={viewportRef}
            className={`overflow-hidden ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            <div
              className="flex gap-[14px] transition-transform duration-150 ease-out will-change-transform"
              style={{ transform: `translate3d(${-offsetX}px, 0, 0)` }}
            >
              {items.map((item, idx) => (
                <article key={`${item.title}-${idx}`} className="relative h-[470px] w-[599px] shrink-0 overflow-hidden rounded-[8px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = STEPPER_IMAGE_FALLBACK;
                    }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(26deg,rgba(25,23,79,1)_10%,rgba(25,23,79,0)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                    <span className="mb-4 inline-flex h-10 min-w-10 items-center justify-center rounded-[4px] bg-[#413df2] px-3 text-[14px] font-medium leading-none text-white">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <h3 className="ds-h6">{item.title}</h3>
                    <p className="mt-2 max-w-[420px] text-[16px] font-medium leading-[22.4px] text-white/70">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <PrimaryCta href={ctaHref}>{ctaLabel}</PrimaryCta>
          </div>
        </div>
      </section>
    </V3Section>
  );
}

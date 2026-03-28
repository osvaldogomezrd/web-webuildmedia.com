"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CheckCircle2,
  Gem,
  Globe2,
  LucideIcon,
  Network,
  Puzzle,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface BelowFoldFeatureItem {
  icon?: "framework" | "seo" | "integrations" | "design" | "management" | "performance" | "mobile";
  title: string;
  lineOne: string;
  lineTwo: string;
}

const belowFoldFeatureIconMap: Record<NonNullable<BelowFoldFeatureItem["icon"]>, LucideIcon> = {
  framework: Network,
  seo: Target,
  integrations: Puzzle,
  design: Sparkles,
  management: CheckCircle2,
  performance: ShieldCheck,
  mobile: Globe2,
};

function resolveItemsPerView(width: number) {
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 3;
}

export function BelowFoldCarousel({
  features,
  initialDot = 0,
  pauseOnHover = true,
  autoplayMs = 3200,
  transitionMs = 750,
}: {
  features: BelowFoldFeatureItem[];
  initialDot?: number;
  pauseOnHover?: boolean;
  autoplayMs?: number;
  transitionMs?: number;
}) {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

  const safeInitialDot = Math.max(0, Math.min(initialDot, Math.max(0, features.length - 1)));

  useEffect(() => {
    const handleResize = () => setItemsPerView(resolveItemsPerView(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(safeInitialDot);
    setIsTransitionEnabled(false);
    const frame = window.requestAnimationFrame(() => setIsTransitionEnabled(true));
    return () => window.cancelAnimationFrame(frame);
  }, [safeInitialDot, itemsPerView, features.length]);

  const loopedFeatures = useMemo(() => {
    if (features.length === 0) return [];
    return [...features, ...features.slice(0, itemsPerView)];
  }, [features, itemsPerView]);

  useEffect(() => {
    if (features.length <= 1 || isPaused) return;
    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [autoplayMs, features.length, isPaused]);

  useEffect(() => {
    if (features.length === 0) return;
    if (currentIndex < features.length) return;

    const timer = window.setTimeout(() => {
      setIsTransitionEnabled(false);
      setCurrentIndex(0);
      const frame = window.requestAnimationFrame(() => setIsTransitionEnabled(true));
      return () => window.cancelAnimationFrame(frame);
    }, transitionMs);

    return () => window.clearTimeout(timer);
  }, [currentIndex, features.length, transitionMs]);

  const activeDot = features.length === 0 ? 0 : currentIndex % features.length;

  return (
    <div className="w-full space-y-8">
      <div
        className="-mx-2 overflow-hidden md:-mx-3 lg:-mx-4"
        onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
        onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
      >
        <div
          className={cn(
            "flex",
            isTransitionEnabled ? "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" : "transition-none"
          )}
          style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)` }}
        >
          {loopedFeatures.map((feature, idx) => {
            const Icon = feature.icon ? belowFoldFeatureIconMap[feature.icon] ?? Gem : Gem;

            return (
              <div
                key={`${feature.title}-${idx}`}
                className="shrink-0 px-2 md:px-3 lg:px-4"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <article className="h-full rounded-[8px] border border-black/10 bg-white p-8 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.12)]">
                  <div className="mb-[15px] flex h-[45px] w-[45px] items-center justify-center text-[#413df2]">
                    <Icon size={30} strokeWidth={1.8} />
                  </div>
                  <h3 className="mb-4 text-[clamp(22px,2.5vw,24px)] font-medium leading-[1.2] tracking-[-0.02em] text-[#1e1e1e]">
                    {feature.title}
                  </h3>
                  <p className="text-base font-medium leading-[22.4px] text-[#3d3d3d]">
                    <span className="block">{feature.lineOne}</span>
                    <span className="block">{feature.lineTwo}</span>
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-1 pt-1">
        {features.map((feature, idx) => (
          <button
            key={`${feature.title}-dot-${idx}`}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            onClick={() => {
              setIsTransitionEnabled(true);
              setCurrentIndex(idx);
            }}
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#413df2]",
              idx === activeDot ? "bg-[#1e1e1e]" : "bg-black/15 hover:bg-black/30"
            )}
          />
        ))}
      </div>
    </div>
  );
}

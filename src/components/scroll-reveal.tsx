"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const TARGET_SELECTOR = [
  "section h1",
  "section h2",
  "section h3",
  "section p",
  "section article",
  "section [data-reveal]",
].join(", ");

function isRevealTarget(node: HTMLElement) {
  if (node.matches("[data-reveal-ignore]")) return false;
  if (node.closest("header, nav, footer, [data-reveal-ignore]")) return false;
  if (node.matches("a p, button p, summary p, label p")) return false;
  return true;
}

function applyStaggerByParentAndTag(nodes: HTMLElement[]) {
  const groups = new Map<string, HTMLElement[]>();

  for (const node of nodes) {
    const parent = node.parentElement;
    if (!parent) continue;
    const key = `${parent.tagName}-${parent.className}-${node.tagName}`;
    const existing = groups.get(key);
    if (existing) {
      existing.push(node);
    } else {
      groups.set(key, [node]);
    }
  }

  groups.forEach((group) => {
    if (group.length < 2) return;
    group.forEach((node, index) => {
      const delayMs = Math.min(index * 80, 320);
      node.style.setProperty("--reveal-delay", `${delayMs}ms`);
    });
  });
}

function isInViewport(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  const verticalVisible = rect.top <= window.innerHeight * 0.92 && rect.bottom >= 0;
  const horizontalVisible = rect.left <= window.innerWidth && rect.right >= 0;
  return verticalVisible && horizontalVisible;
}

export function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.documentElement.classList.remove("reveal-enabled");
      return;
    }

    document.documentElement.classList.add("reveal-enabled");

    let observer: IntersectionObserver | undefined;
    let rafOne = 0;
    let rafTwo = 0;

    rafOne = window.requestAnimationFrame(() => {
      rafTwo = window.requestAnimationFrame(() => {
        const targets = Array.from(document.querySelectorAll<HTMLElement>(TARGET_SELECTOR)).filter(isRevealTarget);

        if (targets.length === 0) return;

        targets.forEach((node) => node.classList.add("reveal-item"));
        applyStaggerByParentAndTag(targets);

        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("reveal-item--visible");
              observer?.unobserve(entry.target);
            });
          },
          {
            threshold: 0.15,
            rootMargin: "0px 0px -10% 0px",
          }
        );

        targets.forEach((target) => {
          if (isInViewport(target)) {
            target.classList.add("reveal-item--visible");
            return;
          }
          observer?.observe(target);
        });
      });
    });

    return () => {
      window.cancelAnimationFrame(rafOne);
      window.cancelAnimationFrame(rafTwo);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}


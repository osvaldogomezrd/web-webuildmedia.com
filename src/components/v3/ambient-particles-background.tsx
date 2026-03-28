"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type Particle = {
  x: number;
  y: number;
  radius: number;
  alpha: number;
  vx: number;
  vy: number;
  phase: number;
  twinkleSpeed: number;
  accent: boolean;
};

export type AmbientParticlesConfig = {
  particleCount?: number;
  speed?: number;
  opacity?: number;
  minSize?: number;
  maxSize?: number;
  baseColor?: string;
  accentColor?: string;
  accentRatio?: number;
  mobileDensity?: number;
  className?: string;
};

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function AmbientParticlesBackground({
  particleCount = 56,
  speed = 0.14,
  opacity = 0.2,
  minSize = 0.8,
  maxSize = 2.2,
  baseColor = "255,255,255",
  accentColor = "65,61,242",
  accentRatio = 0.08,
  mobileDensity = 0.62,
  className,
}: AmbientParticlesConfig) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let width = 0;
    let height = 0;
    let rafId = 0;
    let lastTs = 0;
    let particles: Particle[] = [];

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = clamp(window.devicePixelRatio || 1, 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const areaFactor = clamp((width * height) / (1440 * 900), 0.45, 1.15);
      const densityFactor = width < 768 ? mobileDensity : 1;
      const total = Math.round(particleCount * areaFactor * densityFactor);
      const safeCount = clamp(total, 12, 96);

      particles = Array.from({ length: safeCount }, () => {
        const accent = Math.random() < accentRatio;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: minSize + Math.random() * (maxSize - minSize),
          alpha: 0.25 + Math.random() * 0.75,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.18,
          phase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.35 + Math.random() * 0.85,
          accent,
        };
      });
    };

    const draw = (timestamp: number) => {
      const delta = lastTs ? Math.min(34, timestamp - lastTs) : 16.67;
      lastTs = timestamp;
      const dt = delta / 16.67;
      const speedFactor = speed * dt;

      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x += particle.vx * speedFactor;
        particle.y += particle.vy * speedFactor;

        if (particle.x < -12) particle.x = width + 12;
        if (particle.x > width + 12) particle.x = -12;
        if (particle.y < -12) particle.y = height + 12;
        if (particle.y > height + 12) particle.y = -12;

        const twinkle = 0.82 + Math.sin(timestamp * 0.0012 * particle.twinkleSpeed + particle.phase) * 0.18;
        const alpha = clamp(opacity * particle.alpha * twinkle, 0, 1);
        const color = particle.accent
          ? `rgba(${accentColor}, ${alpha * 0.48})`
          : `rgba(${baseColor}, ${alpha})`;

        if (particle.accent) {
          context.shadowColor = `rgba(${accentColor}, 0.2)`;
          context.shadowBlur = 8;
        } else {
          context.shadowColor = "transparent";
          context.shadowBlur = 0;
        }

        context.fillStyle = color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();
      });

      context.shadowBlur = 0;

      if (!prefersReducedMotion) {
        rafId = window.requestAnimationFrame(draw);
      }
    };

    resize();
    if (prefersReducedMotion) {
      draw(0);
    } else {
      rafId = window.requestAnimationFrame(draw);
    }

    window.addEventListener("resize", resize, { passive: true });

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(rafId);
    };
  }, [accentColor, accentRatio, baseColor, maxSize, minSize, mobileDensity, opacity, particleCount, speed]);

  return <canvas ref={canvasRef} aria-hidden="true" className={cn("pointer-events-none absolute inset-0 h-full w-full", className)} />;
}


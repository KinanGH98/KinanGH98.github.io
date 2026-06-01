"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  getFeaturedProjects,
  getThumbnail,
  type Project,
} from "@/lib/projects";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SelectedWork() {
  const featured = getFeaturedProjects();
  const [hovered, setHovered] = useState<Project | null>(null);
  const root = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const showPreview = Boolean(hovered && hovered.images.length > 0);

  const handleMove = (e: React.MouseEvent) => {
    if (!previewRef.current) return;
    previewRef.current.style.left = `${e.clientX + 24}px`;
    previewRef.current.style.top = `${e.clientY + 24}px`;
  };

  useGSAP(
    () => {
      gsap.set(".work-header > *", { y: 16, autoAlpha: 0 });
      gsap.set(".work-row", { y: 28, autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: ".work-header",
        start: "top 88%",
        once: true,
        onEnter: () => {
          gsap.to(".work-header > *", {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: "expo.out",
            stagger: 0.08,
          });
        },
      });

      ScrollTrigger.batch(".work-row", {
        start: "top 88%",
        once: true,
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "expo.out",
            stagger: 0.09,
            overwrite: true,
          });
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="work"
      ref={root}
      className="px-gutter py-space-7 lg:py-space-8 scroll-mt-space-5"
      onMouseMove={handleMove}
    >
      <header className="work-header flex items-baseline justify-between mb-space-5">
        <p className="label-small">Selected Work · 2024–2026</p>
        <p className="label-small">{featured.length} projects</p>
      </header>

      <ul className="border-t border-b border-hairline divide-y divide-hairline">
        {featured.map((p) => (
          <li key={p.id} className="work-row">
            <Link
              href={`/projects/${p.id}`}
              className="group flex items-baseline justify-between gap-space-5 py-space-5 sm:py-space-6"
              onMouseEnter={() => setHovered(p)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(p)}
              onBlur={() => setHovered(null)}
            >
              <div className="flex-1 min-w-0">
                <h2 className="font-display font-extrabold text-h1 text-ink leading-[0.95] tracking-[-0.02em] transition-colors duration-200 group-hover:text-purple-loud group-focus-visible:text-purple-loud">
                  <span className="underline-draw-bold">{p.title}</span>
                </h2>
                <p className="mt-space-3 font-body text-body text-ink-muted max-w-[44rem]">
                  {p.oneLiner}
                  <span className="mx-2 text-ink-muted/50">·</span>
                  {p.role}
                </p>
              </div>
              <span className="label-small shrink-0 mt-space-3">{p.year}</span>
            </Link>
          </li>
        ))}
      </ul>

      {/* Cursor-following preview, desktop only */}
      <div
        ref={previewRef}
        aria-hidden
        className={`fixed pointer-events-none z-50 w-56 h-40 border border-hairline overflow-hidden bg-bg hidden lg:block transition-opacity duration-200 ${
          showPreview ? "opacity-100" : "opacity-0"
        }`}
      >
        {hovered && (
          <Image
            src={getThumbnail(hovered)}
            alt=""
            fill
            sizes="14rem"
            className="object-cover grayscale-[0.2]"
          />
        )}
      </div>
    </section>
  );
}

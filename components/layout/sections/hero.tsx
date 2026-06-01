"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { profile, nav } from "@/lib/content";

gsap.registerPlugin(useGSAP, SplitText);

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const periodRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!nameRef.current) return;

      SplitText.create(nameRef.current, {
        type: "lines",
        mask: "lines",
        linesClass: "hero-line",
        autoSplit: true,
        onSplit(self) {
          const tl = gsap.timeline({
            defaults: { duration: 0.7, ease: "expo.out" },
          });

          tl.from(
            ".hero-corner-item",
            { y: -8, autoAlpha: 0, stagger: 0.05 },
            0,
          )
            .from(self.lines, { yPercent: 110, stagger: 0.08 }, 0.15)
            .from(".hero-role", { y: 12, autoAlpha: 0 }, "<0.3")
            .from(
              ".hero-portrait",
              { autoAlpha: 0, scale: 1.04, duration: 0.9 },
              0.3,
            )
            .from(
              ".hero-caption",
              { y: 8, autoAlpha: 0, stagger: 0.06 },
              "<0.2",
            )
            .fromTo(
              periodRef.current,
              { scale: 1 },
              {
                scale: 1.25,
                duration: 0.22,
                ease: "back.out(2)",
                yoyo: true,
                repeat: 1,
                transformOrigin: "50% 100%",
              },
              0.6,
            );

          return tl;
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="home"
      ref={root}
      className="relative min-h-svh w-full px-gutter pt-space-4 pb-space-5 flex flex-col"
    >
      {/* Corner nav */}
      <header className="flex items-start justify-between">
        <Link
          href="#home"
          aria-label="Top"
          className="hero-corner-item font-display text-small text-ink tracking-tight"
        >
          {profile.initials}
          <span className="text-lime">.</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex gap-space-4 sm:gap-space-5">
            {nav.map((item) => (
              <li key={item.href} className="hero-corner-item">
                <Link
                  href={item.href}
                  className="underline-draw label-small hover:text-ink transition-colors duration-200"
                >
                  <span className="mr-1 text-ink-muted/70">↳</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Main stage */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-space-5 items-center py-space-5">
        {/* Name + role */}
        <div className="lg:col-span-8">
          <h1
            ref={nameRef}
            className="font-display text-hero text-ink leading-[0.9] tracking-[-0.02em] font-extrabold"
          >
            <span className="block">Ahmed</span>
            <span className="block">Kinan</span>
            <span className="block">
              Ghbash
              <span ref={periodRef} className="text-lime inline-block">
                .
              </span>
            </span>
          </h1>
          <p className="hero-role mt-space-4 font-body text-body text-ink-muted max-w-xl">
            {profile.role}
            <span className="mx-2 text-ink-muted/50">·</span>
            {profile.roleStack.join(" · ")}
          </p>
        </div>

        {/* Portrait */}
        <div className="hero-portrait lg:col-span-4">
          <div className="relative w-full max-w-[18rem] mx-auto lg:max-w-none aspect-[3/4] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]">
            <Image
              src="/images/photo.png"
              alt="Portrait of Ahmed Kinan Ghbash"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 33vw"
              className="object-contain grayscale brightness-[0.85] contrast-[1.02]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-purple-deep mix-blend-color opacity-40 pointer-events-none [mask-image:url(/images/photo.png)] [mask-size:contain] [mask-position:center] [mask-repeat:no-repeat] [-webkit-mask-image:url(/images/photo.png)] [-webkit-mask-size:contain] [-webkit-mask-position:center] [-webkit-mask-repeat:no-repeat]"
            />
          </div>
        </div>
      </div>

      {/* Bottom caption */}
      <footer className="flex items-end justify-between">
        <p className="hero-caption label-small">Based in {profile.location}</p>
        <p className="hero-caption label-small hidden sm:flex items-center">
          <span className="text-ink-muted/60 mr-2">scroll</span>
          <span className="animate-bounce block">↓</span>
        </p>
      </footer>
    </section>
  );
}

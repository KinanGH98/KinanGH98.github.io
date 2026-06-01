"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile, socials } from "@/lib/content";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Footer() {
  const year = new Date().getFullYear();
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.set(".footer-header > *", { y: 12, autoAlpha: 0 });
      gsap.set(".footer-email", { y: 24, autoAlpha: 0 });
      gsap.set(".footer-meta", { y: 14, autoAlpha: 0 });

      ScrollTrigger.create({
        trigger: ".footer-header",
        start: "top 90%",
        once: true,
        onEnter: () => {
          gsap.to(".footer-header > *", {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
            ease: "expo.out",
            stagger: 0.08,
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".footer-email",
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(".footer-email", {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "expo.out",
          });
        },
      });

      ScrollTrigger.create({
        trigger: ".footer-email",
        start: "top 80%",
        once: true,
        onEnter: () => {
          gsap.to(".footer-meta", {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: "expo.out",
            stagger: 0.12,
            overwrite: true,
          });
        },
      });
    },
    { scope: root },
  );

  return (
    <footer
      id="contact"
      ref={root}
      className="px-gutter pt-space-8 pb-space-5 scroll-mt-space-5"
    >
      <header className="footer-header flex items-baseline justify-between mb-space-6">
        <p className="label-small">Contact</p>
        <p className="label-small">Open to senior frontend roles</p>
      </header>

      <a
        href={`mailto:${profile.email}`}
        className="footer-email group inline-block font-display font-extrabold text-[clamp(2rem,7vw,5rem)] text-ink leading-[0.95] tracking-[-0.02em] transition-colors duration-200 hover:text-purple-loud focus-visible:text-purple-loud break-words"
      >
        <span className="underline-draw-bold">{profile.email}</span>
      </a>

      <p className="footer-meta mt-space-5 font-body text-body text-ink-muted max-w-[40rem]">
        The fastest way to reach me — replies usually within a day.
      </p>

      <div className="footer-meta mt-space-6 flex flex-wrap items-baseline gap-x-space-4 gap-y-space-2">
        <p className="label-small mr-2">Elsewhere</p>
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group label-small hover:text-ink transition-colors duration-200"
          >
            <span className="underline-draw">{s.label}</span>
          </a>
        ))}
      </div>

      <div className="footer-meta mt-space-7 pt-space-4 border-t border-hairline flex items-end justify-between gap-space-4">
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.svg"
            alt=""
            aria-hidden
            className="h-10 w-auto"
          />
          <p className="label-small">
            © {year} {profile.name}
          </p>
        </div>
        <p className="label-small">{profile.location}</p>
      </div>
    </footer>
  );
}

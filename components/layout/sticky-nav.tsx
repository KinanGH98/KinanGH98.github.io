"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { profile, nav } from "@/lib/content";

export default function StickyNav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-40 bg-bg/90 backdrop-blur-sm border-b border-hairline transition-all duration-300 ease-editorial ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
      aria-hidden={!show}
      inert={!show ? true : undefined}
    >
      <div className="px-gutter h-space-6 flex items-center justify-between">
        <Link
          href="/#home"
          aria-label="Top"
          className="font-display text-small text-ink tracking-tight font-bold"
        >
          {profile.initials}
          <span className="text-lime">.</span>
        </Link>
        <nav aria-label="Sticky">
          <ul className="flex gap-space-4 sm:gap-space-5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group label-small hover:text-ink transition-colors duration-200"
                >
                  <span className="underline-draw">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

'use client';

import {useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText} from "gsap/SplitText";
import {profile, nav} from "@/lib/content";

gsap.registerPlugin(useGSAP, SplitText);

export default function Hero()
{
    const root = useRef<HTMLElement>(null);
    const nameRef = useRef<HTMLHeadingElement>(null);

    useGSAP(
        () => {
            if (!nameRef.current) return;

            // Recreated on every (re)split so the loop always targets the live
            // wave node — autoSplit rebuilds the DOM on resize / font-load.
            let waveTweens: ReturnType<typeof gsap.to>[] = [];

            SplitText.create(nameRef.current, {
                type: 'lines',
                mask: 'lines',
                linesClass: 'hero-line',
                autoSplit: true,
                onSplit(self) {
                    const tl = gsap.timeline({
                        defaults: {duration: 0.7, ease: 'expo.out'},
                        // Unclip the line masks once revealed, so the dot's
                        // gooey drip isn't clipped by the overflow:hidden wrappers.
                        onComplete: () => {
                            self.lines.forEach((line) => {
                                const wrap = (line as HTMLElement).parentElement;
                                if (wrap) wrap.style.overflow = 'visible';
                            });
                        },
                    });

                    tl.from(
                        '.hero-corner-item',
                        {y: -8, autoAlpha: 0, stagger: 0.05},
                        0,
                    )
                        .from(self.lines, {yPercent: 110, stagger: 0.08}, 0.15)
                        .from('.hero-role', {y: 12, autoAlpha: 0}, '<0.3')
                        .from(
                            '.hero-portrait',
                            {autoAlpha: 0, scale: 1.04, duration: 0.9},
                            0.3,
                        )
                        .from(
                            '.hero-caption',
                            {y: 8, autoAlpha: 0, stagger: 0.06},
                            '<0.2',
                        );

                    // (Re)start the liquid loop on the current wave node: a wide
                    // wave path travels sideways (the slosh, period 100 so x:-100
                    // loops seamlessly) while the shape rises and falls (the level).
                    waveTweens.forEach((t) => t.kill());
                    const wave = root.current?.querySelector<SVGGElement>(
                        '.liquid-wave',
                    );
                    if (wave) {
                        waveTweens = [
                            gsap.to(wave, {
                                x: -100,
                                duration: 2.5,
                                ease: 'none',
                                repeat: -1,
                            }),
                            gsap.to(wave, {
                                y: 60,
                                duration: 3,
                                ease: 'sine.inOut',
                                yoyo: true,
                                repeat: -1,
                                delay: 1,
                            }),
                        ];
                    }

                    return tl;
                },
            });
        },
        {scope: root},
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
                        <span className="block whitespace-nowrap">
                            Ghbash
                            {/* Lime "period" as a little vessel: an SVG wave
                                sloshes sideways while the level rises and falls.
                                align-[] seats it on the baseline. */}
                            <span
                                aria-hidden
                                className="relative ml-[0.05em] inline-block overflow-hidden rounded-full text-lime align-baseline [width:0.18em] [height:0.18em]"
                            >
                                {/* faint 'glass' so the unfilled cap stays visible */}
                                <span className="absolute inset-0 bg-lime opacity-25"/>
                                <svg
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                    className="absolute inset-0 h-full w-full"
                                    aria-hidden
                                >
                                    {/* path spans x 0..200 (two wave periods) and
                                        down to y 400, so it always covers the dot
                                        as it travels and the level drops */}
                                    <g className="liquid-wave" fill="currentColor">
                                        <path d="M0,10 Q25,4 50,10 T100,10 T150,10 T200,10 L200,400 L0,400 Z"/>
                                    </g>
                                </svg>
                            </span>
                        </span>
                    </h1>
                    <p className="hero-role mt-space-4 font-body text-body text-ink-muted max-w-xl">
                        {profile.role}
                        <span className="mx-2 text-ink-muted/50">·</span>
                        {profile.roleStack.join(' · ')}
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
                            fetchPriority="high"
                            loading="eager"
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

'use client';

import {useRef} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import {aboutCopy} from "@/lib/content";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

export default function About()
{
    const root = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);

    useGSAP(
        () => {
            gsap.set('.about-header > *', {y: 12, autoAlpha: 0});
            gsap.set('.about-paragraph', {y: 16, autoAlpha: 0});
            gsap.set('.about-meta', {y: 12, autoAlpha: 0});

            ScrollTrigger.create({
                trigger: '.about-header',
                start: 'top 88%',
                once: true,
                onEnter: () => {
                    gsap.to('.about-header > *', {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.6,
                        ease: 'expo.out',
                        stagger: 0.08,
                    });
                },
            });

            if (headlineRef.current) {
                SplitText.create(headlineRef.current, {
                    type: 'lines',
                    mask: 'lines',
                    linesClass: 'about-headline-line',
                    autoSplit: true,
                    onSplit(self) {
                        return gsap.from(self.lines, {
                            yPercent: 110,
                            duration: 0.8,
                            ease: 'expo.out',
                            stagger: 0.1,
                            scrollTrigger: {
                                trigger: headlineRef.current,
                                start: 'top 82%',
                                once: true,
                            },
                        });
                    },
                });
            }

            ScrollTrigger.batch('.about-paragraph', {
                start: 'top 82%',
                once: true,
                onEnter: (batch) => {
                    gsap.to(batch, {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.8,
                        ease: 'expo.out',
                        stagger: 0.15,
                        overwrite: true,
                    });
                },
            });

            ScrollTrigger.batch('.about-meta', {
                start: 'top 88%',
                once: true,
                onEnter: (batch) => {
                    gsap.to(batch, {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.7,
                        ease: 'expo.out',
                        stagger: 0.1,
                        overwrite: true,
                    });
                },
            });

            gsap.fromTo(
                '.about-numeral',
                {yPercent: -20, xPercent: -2},
                {
                    yPercent: 20,
                    xPercent: 2,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: root.current,
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1,
                    },
                },
            );
        },
        {scope: root},
    );

    return (
        <section
            id="about"
            ref={root}
            className="px-gutter py-space-7 lg:py-space-8 scroll-mt-space-5 relative overflow-hidden"
        >
            {/* Giant background numeral, parallax-drifts as section scrolls */}
            <div
                aria-hidden
                className="absolute inset-0 flex items-center justify-end pointer-events-none select-none"
            >
                <span
                    className="about-numeral font-display font-black text-purple-deep opacity-[0.12] leading-none tracking-[-0.06em] -mr-[6vw]"
                    style={{fontSize: 'clamp(18rem, 55vw, 44rem)'}}
                >
                    07
                </span>
            </div>

            <div className="relative z-10">
                <header className="about-header flex items-baseline justify-between mb-space-5">
                    <p className="label-small">About</p>
                    <p className="label-small">~7 years engineering</p>
                </header>

                <div className="max-w-[44rem]">
                    <h2
                        ref={headlineRef}
                        className="font-display font-extrabold text-h2 text-ink leading-[1.05] tracking-[-0.02em] mb-space-5"
                    >
                        From building games to building production platforms.
                    </h2>

                    <div className="space-y-space-4 font-body text-body text-ink">
                        <p className="about-paragraph">
                            I&apos;m a senior frontend engineer based in Aleppo, Syria,
                            focused on scalable web architecture with React, Next.js, and
                            TypeScript. Over the past two years I&apos;ve shipped{" "}
                            <span className="text-purple-loud font-semibold">
                                12 production systems
                            </span>{" "}
                            — government platforms, enterprise ERPs, and developer-facing
                            SaaS — often driving the architecture as the sole frontend lead,
                            and most recently managing a team of five.
                        </p>
                        <p className="about-paragraph">
                            My background in{" "}
                            <span className="text-purple-loud font-semibold">
                                game development
                            </span>{" "}
                            shapes how I approach the web: performance, complex state, and
                            tight interactions matter from day one. For five years I founded
                            and led a studio of four, building a 2D platformer in Unity and
                            C#; our playable demo released on Steam to positive reception
                            from players and content creators alike. That same care now goes
                            into custom RBAC and access-control systems, real-time data flow,
                            and multilingual platforms with native RTL. I own DevOps
                            end-to-end — from server provisioning and CI/CD pipelines to the
                            infrastructure that keeps every project I ship online.
                        </p>
                    </div>

                    <p className="about-meta mt-space-5 font-body text-body text-ink-muted">
                        <span className="label-small mr-3">Currently —</span>
                        {aboutCopy.currently}
                    </p>

                    <div className="about-meta mt-space-5">
                        <p className="label-small mb-space-3">Stack</p>
                        <p className="font-body text-small text-ink-muted leading-relaxed">
                            {aboutCopy.stack.join('  ·  ')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

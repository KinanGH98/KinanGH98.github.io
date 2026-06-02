'use client';

import {useEffect, useRef} from "react";
import gsap from "gsap";

export default function Cursor()
{
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ring = ringRef.current;
        if (!ring) return;

        // Fine-pointer devices only — touch / coarse pointers keep the native
        // cursor and never see the ring.
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            return;
        }

        // Hide the native cursor everywhere while the ring is active.
        const style = document.createElement('style');
        style.textContent = '*{cursor:none !important;}';
        document.head.appendChild(style);

        gsap.set(ring, {xPercent: -50, yPercent: -50});
        const xTo = gsap.quickTo(ring, 'x', {duration: 0.35, ease: 'power3'});
        const yTo = gsap.quickTo(ring, 'y', {duration: 0.35, ease: 'power3'});

        let shown = false;
        const onMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
            if (!shown) {
                shown = true;
                gsap.to(ring, {autoAlpha: 1, duration: 0.2});
            }
        };

        const onOver = (e: MouseEvent) => {
            const target = e.target;
            const interactive =
                target instanceof Element &&
                target.closest('a, button, [data-cursor]');
            gsap.to(ring, {scale: interactive ? 1.8 : 1, duration: 0.3, ease: 'power3'});
        };

        const onEnter = () => gsap.to(ring, {autoAlpha: 1, duration: 0.2});
        const onLeave = () => gsap.to(ring, {autoAlpha: 0, duration: 0.2});

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseover', onOver);
        document.addEventListener('mouseenter', onEnter);
        document.addEventListener('mouseleave', onLeave);

        return () => {
            style.remove();
            window.removeEventListener('mousemove', onMove);
            window.removeEventListener('mouseover', onOver);
            document.removeEventListener('mouseenter', onEnter);
            document.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    return (
        <div
            ref={ringRef}
            aria-hidden
            className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border-[1.5px] border-ink opacity-0 mix-blend-difference"
        />
    );
}

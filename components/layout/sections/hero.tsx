import Image from "next/image";
import Link from "next/link";
import { profile, nav } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh w-full px-gutter pt-space-4 pb-space-5 flex flex-col"
    >
      {/* Corner nav */}
      <header className="flex items-start justify-between">
        <Link
          href="#home"
          aria-label="Top"
          className="font-display text-small text-ink tracking-tight"
        >
          {profile.initials}
          <span className="text-lime">.</span>
        </Link>

        <nav aria-label="Primary">
          <ul className="flex gap-space-4 sm:gap-space-5">
            {nav.map((item) => (
              <li key={item.href}>
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
        <div className="lg:col-span-8 animate-hero-rise">
          <h1 className="font-display text-hero text-ink leading-[0.9] tracking-[-0.02em] font-extrabold">
            <span className="block">Ahmed</span>
            <span className="block">Kinan</span>
            <span className="block">
              Ghbash<span className="text-lime">.</span>
            </span>
          </h1>
          <p className="mt-space-4 font-body text-body text-ink-muted max-w-xl">
            {profile.role}
            <span className="mx-2 text-ink-muted/50">·</span>
            {profile.roleStack.join(" · ")}
          </p>
        </div>

        {/* Portrait */}
        <div className="lg:col-span-4 animate-hero-fade">
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
        <p className="label-small">Based in {profile.location}</p>
        <p className="label-small hidden sm:flex items-center">
          <span className="text-ink-muted/60 mr-2">scroll</span>
          <span className="animate-bounce block">↓</span>
        </p>
      </footer>
    </section>
  );
}

import { profile, socials } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="px-gutter pt-space-8 pb-space-5 scroll-mt-space-5"
    >
      <header className="flex items-baseline justify-between mb-space-6">
        <p className="label-small">Contact</p>
        <p className="label-small">Open to senior frontend roles</p>
      </header>

      <a
        href={`mailto:${profile.email}`}
        className="group inline-block font-display font-extrabold text-[clamp(2rem,7vw,5rem)] text-ink leading-[0.95] tracking-[-0.02em] transition-colors duration-200 hover:text-purple-loud focus-visible:text-purple-loud break-words"
      >
        <span className="underline-draw-bold">{profile.email}</span>
      </a>

      <p className="mt-space-5 font-body text-body text-ink-muted max-w-[40rem]">
        The fastest way to reach me — replies usually within a day.
      </p>

      <div className="mt-space-6 flex flex-wrap items-baseline gap-x-space-4 gap-y-space-2">
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

      <div className="mt-space-7 pt-space-4 border-t border-hairline flex items-end justify-between gap-space-4">
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

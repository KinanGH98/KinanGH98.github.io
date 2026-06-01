import Image from "next/image";
import Link from "next/link";
import {
  IconArrowLeft,
  IconArrowUpRight,
  IconBrandGooglePlay,
  IconBrandApple,
} from "@tabler/icons-react";
import type { Project } from "@/lib/projects";
import { projects } from "@/lib/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  const related = projects
    .filter((p) => p.featured && p.id !== project.id)
    .slice(0, 3);

  const links = [
    project.liveUrl && {
      label: "Live site",
      href: project.liveUrl,
      icon: IconArrowUpRight,
    },
    project.googlePlayUrl && {
      label: "Google Play",
      href: project.googlePlayUrl,
      icon: IconBrandGooglePlay,
    },
    project.appStoreUrl && {
      label: "App Store",
      href: project.appStoreUrl,
      icon: IconBrandApple,
    },
  ].filter(Boolean) as {
    label: string;
    href: string;
    icon: typeof IconArrowUpRight;
  }[];

  return (
    <main className="px-gutter pt-space-7 pb-space-8 scroll-mt-space-5">
      <Link
        href="/#work"
        className="group inline-flex items-center gap-2 label-small hover:text-ink transition-colors duration-200"
      >
        <IconArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
        Selected Work
      </Link>

      <header className="mt-space-6">
        <h1 className="font-display font-extrabold text-hero text-ink leading-[0.9] tracking-[-0.02em] break-words">
          {project.title}
        </h1>
        <div className="mt-space-4 flex flex-wrap items-baseline gap-x-space-4 gap-y-2">
          <p className="label-small">{project.year}</p>
          <p className="label-small">{project.role}</p>
        </div>
      </header>

      <div className="mt-space-6 grid grid-cols-1 lg:grid-cols-12 gap-space-5">
        <div className="lg:col-span-7">
          <p className="font-display font-extrabold text-h2 text-ink leading-[1.1] tracking-[-0.01em] mb-space-4">
            {project.oneLiner}
          </p>
          <p className="font-body text-body text-ink leading-[1.6] max-w-[44rem]">
            {project.blurb}
          </p>

          {links.length > 0 && (
            <div className="mt-space-5 flex flex-wrap gap-x-space-4 gap-y-space-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 label-small hover:text-ink transition-colors duration-200"
                >
                  <l.icon className="w-4 h-4" />
                  <span className="underline-draw">{l.label}</span>
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="lg:col-span-5">
          <p className="label-small mb-space-3">Stack</p>
          <ul className="flex flex-wrap gap-x-3 gap-y-2 font-body text-small text-ink-muted">
            {project.stack.map((t) => (
              <li key={t} className="border border-hairline px-2 py-1">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {project.images.length > 0 && (
        <section className="mt-space-7">
          <p className="label-small mb-space-4">Gallery</p>
          <div className="grid grid-cols-1 gap-space-4">
            {project.images.map((src, i) => (
              <div
                key={src}
                className="relative w-full aspect-[16/10] overflow-hidden border border-hairline bg-surface"
              >
                <Image
                  src={src}
                  alt={`${project.title} — screenshot ${i + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 80vw"
                  className="object-contain"
                  loading={i === 0 ? "eager" : "lazy"}
                  priority={i === 0}
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mt-space-8">
          <header className="flex items-baseline justify-between mb-space-4">
            <p className="label-small">More work</p>
            <Link
              href="/#work"
              className="group label-small hover:text-ink transition-colors duration-200"
            >
              <span className="underline-draw">All projects ↗</span>
            </Link>
          </header>
          <ul className="border-t border-b border-hairline divide-y divide-hairline">
            {related.map((p) => (
              <li key={p.id}>
                <Link
                  href={`/projects/${p.id}`}
                  className="group flex items-baseline justify-between gap-space-4 py-space-4 sm:py-space-5"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-extrabold text-h2 text-ink leading-[0.95] tracking-[-0.02em] transition-colors duration-200 group-hover:text-purple-loud">
                      <span className="underline-draw-bold">{p.title}</span>
                    </h3>
                    <p className="mt-2 font-body text-small text-ink-muted">
                      {p.oneLiner}
                    </p>
                  </div>
                  <span className="label-small shrink-0 mt-2">{p.year}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}

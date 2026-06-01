import { aboutCopy } from "@/lib/content";

export default function About() {
  return (
    <section
      id="about"
      className="px-gutter py-space-7 lg:py-space-8 scroll-mt-space-5"
    >
      <header className="flex items-baseline justify-between mb-space-5">
        <p className="label-small">About</p>
        <p className="label-small">~7 years engineering</p>
      </header>

      <div className="max-w-[44rem]">
        <h2 className="font-display font-extrabold text-h2 text-ink leading-[1.05] tracking-[-0.02em] mb-space-5">
          From building games to building production platforms.
        </h2>

        <div className="space-y-space-4 font-body text-body text-ink">
          <p>
            I&apos;m a senior frontend engineer based in Aleppo, Syria, focused
            on scalable web architecture with React, Next.js, and TypeScript.
            Over the past two years I&apos;ve shipped{" "}
            <span className="text-purple-loud font-semibold">
              12 production systems
            </span>{" "}
            — government platforms, enterprise ERPs, and developer-facing SaaS
            — often driving the architecture as the sole frontend lead, and
            most recently managing a team of five.
          </p>
          <p>
            My background in{" "}
            <span className="text-purple-loud font-semibold">
              game development
            </span>{" "}
            shapes how I approach the web: performance, complex state, and
            tight interactions matter from day one. For five years I founded
            and led a studio of four, building a 2D platformer in Unity and C#;
            our playable demo released on Steam to positive reception from
            players and content creators alike. That same care now goes into
            custom RBAC and access-control systems, real-time data flow, and
            multilingual platforms with native RTL. I own DevOps end-to-end —
            from server provisioning and CI/CD pipelines to the infrastructure
            that keeps every project I ship online.
          </p>
        </div>

        <p className="mt-space-5 font-body text-body text-ink-muted">
          <span className="label-small mr-3">Currently —</span>
          {aboutCopy.currently}
        </p>

        <div className="mt-space-5">
          <p className="label-small mb-space-3">Stack</p>
          <p className="font-body text-small text-ink-muted leading-relaxed">
            {aboutCopy.stack.join("  ·  ")}
          </p>
        </div>
      </div>
    </section>
  );
}

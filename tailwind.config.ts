import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        hairline: "var(--hairline)",
        ink: "var(--ink)",
        "ink-muted": "var(--ink-muted)",
        purple: {
          DEFAULT: "var(--purple)",
          loud: "var(--purple-loud)",
          deep: "var(--purple-deep)",
        },
        lime: {
          DEFAULT: "var(--lime)",
          deep: "var(--lime-deep)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: "var(--text-hero)",
        h1: "var(--text-h1)",
        h2: "var(--text-h2)",
        body: "var(--text-body)",
        small: "var(--text-small)",
      },
      spacing: {
        "space-1": "4px",
        "space-2": "8px",
        "space-3": "16px",
        "space-4": "24px",
        "space-5": "40px",
        "space-6": "64px",
        "space-7": "96px",
        "space-8": "160px",
        gutter: "clamp(1.5rem, 6vw, 8rem)",
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "0",
        md: "2px",
        lg: "4px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

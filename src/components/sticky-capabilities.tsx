"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, DatabaseZap, ShieldCheck } from "lucide-react";

const capabilities = [
  {
    title: "Agent Orchestrator",
    description:
      "Acts as the definitive interface for managing agent dynamics and AI workflows across your development workspace.",
    icon: Bot,
  },
  {
    title: "Context Governance",
    description:
      "Allows teams to set custom context rules and manage risk when deploying agentic AI inside real engineering flows.",
    icon: ShieldCheck,
  },
  {
    title: "Terminal-First Telemetry",
    description:
      "Captures prompts, commits, and LLM calls with local SQLite storage and zero cloud dependency required for specific developer metrics.",
    icon: DatabaseZap,
  },
];

export function StickyCapabilities() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const active = capabilities[activeIndex];
  const Icon = active.icon;

  useEffect(() => {
    function handleScroll() {
      const section = sectionRef.current;

      if (!section) {
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollable, 0), 0.999);
      setActiveIndex(Math.floor(progress * capabilities.length));
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[300vh] px-6 sm:px-10 lg:px-12">
      <div className="sticky top-0 mx-auto flex min-h-screen w-full max-w-7xl items-center py-20">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              Capacidades clave
            </p>
            <div className="mt-6 min-h-[240px]">
              {capabilities.map((capability, index) => (
                <div
                  key={capability.title}
                  className={`transition-all duration-500 ${
                    activeIndex === index
                      ? "translate-y-0 opacity-100 blur-0"
                      : "pointer-events-none absolute translate-y-6 opacity-0 blur-sm"
                  }`}
                >
                  <h2 className="text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-6xl">
                    {capability.title}
                  </h2>
                  <p className="mt-6 max-w-xl text-lg leading-8 text-text-muted">
                    {capability.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-2">
              {capabilities.map((capability, index) => (
                <button
                  key={capability.title}
                  type="button"
                  aria-label={`Ver ${capability.title}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    activeIndex === index ? "w-12 bg-primary" : "w-6 bg-surface-subtle"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-border-subtle bg-surface/80 p-6 shadow-2xl shadow-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,_color-mix(in_srgb,var(--color-primary)_22%,transparent),_transparent_34%)]" />
            <div className="relative flex h-full min-h-[370px] flex-col justify-between rounded-[2rem] border border-border-subtle bg-canvas/70 p-6">
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-border-active bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  0{activeIndex + 1} / 03
                </span>
                <Icon className="size-7 text-primary" />
              </div>

              <div className="grid place-items-center py-12">
                <div className="grid size-40 place-items-center rounded-[2rem] border border-border-active bg-primary/10 text-primary shadow-[0_0_80px_color-mix(in_srgb,var(--color-primary)_18%,transparent)]">
                  <Icon className="size-16" strokeWidth={1.6} />
                </div>
              </div>

              <div className="grid gap-3">
                {["Context rules", "Agent events", "Local metrics"].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-2xl border border-border-subtle bg-surface-elevated px-4 py-3 text-sm"
                  >
                    <span className="text-text-muted">{item}</span>
                    <span className={index === activeIndex ? "text-primary" : "text-text-dim"}>
                      active
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

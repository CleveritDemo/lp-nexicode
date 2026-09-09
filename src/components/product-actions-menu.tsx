"use client";

import { useState } from "react";
import {
  Bot,
  Database,
  Globe,
  MonitorUp,
  Plus,
  SquareDashedMousePointer,
  Terminal,
} from "lucide-react";

type ProductActionsMenuProps = {
  actions: readonly (readonly [string, string])[];
};

export function ProductActionsMenu({ actions }: ProductActionsMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const icons = {
    Browser: Globe,
    Database,
    Canvas: SquareDashedMousePointer,
    "New terminal": Terminal,
    "New agent": Bot,
  };

  return (
    <div className="absolute bottom-5 right-5 z-10">
      <div
        className={`absolute bottom-16 right-0 w-44 space-y-2 transition-all duration-300 ease-out ${
          isOpen
            ? "translate-y-0 opacity-100 blur-0"
            : "pointer-events-none translate-y-3 opacity-0 blur-sm"
        }`}
      >
        {actions.map(([label, shortcut]) => {
          const Icon = icons[label as keyof typeof icons] ?? MonitorUp;
          return (
            <button
              key={label}
              type="button"
              className="flex w-full items-center justify-between rounded-md border border-border-subtle bg-surface/95 px-3 py-2 text-left text-xs text-text-muted shadow-lg shadow-black/20 transition hover:border-border-active hover:text-text-primary"
            >
              <span className="flex items-center gap-2">
                <Icon className="size-3.5" />
                {label}
              </span>
              <span className="rounded bg-surface-subtle px-1.5 py-0.5 text-[10px] font-semibold text-text-dim">
                {shortcut}
              </span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        aria-label="Abrir acciones del workspace"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
        className={`grid size-12 place-items-center rounded-lg border border-border-active bg-surface text-3xl text-primary transition hover:bg-surface-subtle ${
          isOpen ? "rotate-45 shadow-[0_0_24px_color-mix(in_srgb,var(--color-primary)_35%,transparent)]" : ""
        }`}
      >
        <Plus className="size-6" strokeWidth={2.4} />
      </button>
    </div>
  );
}

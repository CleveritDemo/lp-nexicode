"use client";

import { Languages } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Cambiar idioma"
      className="inline-flex h-10 items-center gap-2 rounded-full border border-border-subtle bg-surface-elevated/70 px-3 text-xs font-semibold text-text-muted transition hover:border-border-active hover:text-primary"
    >
      <Languages className="size-4" />
      <span>{language === "es" ? "ES" : "EN"}</span>
    </button>
  );
}

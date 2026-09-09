"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Cookie, X } from "lucide-react";

type CookieCategory = {
  id: string;
  label: string;
  description: string;
  locked?: boolean;
};

const cookieCategories: CookieCategory[] = [
  {
    id: "necessary",
    label: "Necesarias",
    description:
      "Imprescindibles para la navegación, la seguridad y el recuerdo de tus preferencias. No se pueden desactivar.",
    locked: true,
  },
  {
    id: "analytics",
    label: "Analíticas",
    description:
      "Nos permiten entender qué contenidos son útiles y cómo mejorar el sitio. Datos agregados, nunca identificables.",
  },
  {
    id: "marketing",
    label: "Marketing",
    description:
      "Miden la efectividad de nuestras campañas de búsqueda y permiten mostrarte contenido relevante fuera del sitio.",
  },
];

type CookiesModalProps = {
  children: ReactNode;
  onSave?: () => void;
};

export function CookiesModal({ children, onSave }: CookiesModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [toggled, setToggled] = useState<Record<string, boolean>>({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function handleToggle(id: string) {
    setToggled((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  function handleSave() {
    setIsOpen(false);
    onSave?.();
  }

  function handleAcceptAll() {
    setToggled({ necessary: true, analytics: true, marketing: true });
    setIsOpen(false);
    onSave?.();
  }

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className="contents">
        {children}
      </button>

      {isOpen && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-50 grid place-items-center bg-black/70 px-4 py-8 backdrop-blur-md"
              role="dialog"
              aria-modal="true"
              aria-labelledby="cookies-modal-title"
            >
              <button
                type="button"
                className="absolute inset-0 cursor-default"
                aria-label="Cerrar modal"
                onClick={() => setIsOpen(false)}
              />

              <div className="border-glow relative w-full max-w-xl overflow-hidden rounded-[2rem] border border-border-subtle bg-surface p-6 shadow-2xl shadow-black/60 sm:p-8">
                {/* Close button */}
                <button
                  type="button"
                  aria-label="Cerrar modal"
                  onClick={() => setIsOpen(false)}
                  className="absolute right-5 top-5 grid size-9 place-items-center rounded-full border border-border-subtle text-text-muted transition hover:border-border-active hover:text-text-primary"
                >
                  <X className="size-4" />
                </button>

                {/* Header */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    Legal
                  </p>
                  <h2
                    id="cookies-modal-title"
                    className="mt-2 text-2xl font-semibold text-text-primary sm:text-3xl"
                  >
                    Preferencias de{" "}
                    <span className="rounded-lg bg-primary px-2 py-0.5 text-primary-fg">
                      cookies
                    </span>
                  </h2>
                </div>

                <p className="mb-6 text-sm leading-6 text-text-muted">
                  Usamos cookies necesarias para que el sitio funcione y, solo
                  con tu permiso, cookies analíticas y de marketing. Puedes
                  cambiar tu decisión cuando quieras desde el pie de página.
                </p>

                {/* Cookie categories */}
                <div className="space-y-3">
                  {cookieCategories.map((category) => (
                    <div
                      key={category.id}
                      className="rounded-2xl border border-border-subtle bg-canvas p-5 transition hover:border-border-active"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="font-semibold text-text-primary">
                            {category.label}
                          </p>
                          <p className="mt-1.5 text-sm leading-6 text-text-muted">
                            {category.description}
                          </p>
                        </div>

                        {/* Toggle switch */}
                        <button
                          type="button"
                          role="switch"
                          aria-checked={toggled[category.id]}
                          aria-label={`${category.label} cookies`}
                          disabled={category.locked}
                          onClick={() => handleToggle(category.id)}
                          className={`relative mt-1 inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 ${
                            toggled[category.id]
                              ? "bg-primary"
                              : "bg-surface-subtle"
                          } ${category.locked ? "cursor-not-allowed opacity-70" : ""}`}
                        >
                          <span
                            className={`inline-block size-5 rounded-full bg-white shadow-md transition-transform duration-200 ${
                              toggled[category.id]
                                ? "translate-x-6"
                                : "translate-x-1"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-primary-fg transition hover:bg-primary-hover"
                  >
                    <Cookie className="size-4" />
                    Guardar preferencias
                  </button>
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="inline-flex h-12 flex-1 items-center justify-center rounded-full border border-border-subtle px-6 text-sm font-semibold text-text-muted transition hover:border-border-active hover:text-text-primary"
                  >
                    Aceptar todas
                  </button>
                </div>

                {/* Compliance note */}
                <p className="mt-5 text-xs leading-5 text-text-dim">
                  Conforme al RGPD y a la Directiva ePrivacy: ninguna cookie
                  opcional se activa antes de tu consentimiento explícito.
                </p>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}

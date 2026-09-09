"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ContactModal } from "@/components/contact-modal";
import { assetPath } from "@/lib/asset-path";

const navLinks = [
  { label: "Capacidades", href: "#capacidades" },
  { label: "Integraciones", href: "#integraciones" },
  { label: "Contexto", href: "#contexto" },
];

export function SiteNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-5 z-50 px-4 sm:px-10 lg:px-12">
      <nav className="mx-auto max-w-7xl rounded-[1.75rem] border border-border-subtle bg-surface/70 shadow-2xl shadow-black/20 backdrop-blur-xl md:rounded-full">
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4">
          <a href="#" className="flex items-center" aria-label="Nexi code">
            <Image
              src={assetPath("/brand/logotipo-nexicode.svg")}
              alt="Nexi code"
              width={630}
              height={124}
              priority
              className="h-7 w-auto sm:h-8"
            />
          </a>

          <div className="hidden items-center gap-6 text-sm font-medium text-text-muted md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-primary">
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden sm:block">
            <ContactModal>
              <span className="inline-flex rounded-full border border-border-subtle px-5 py-2.5 text-sm font-medium text-text-muted transition hover:border-border-active hover:text-text-primary">
                Agenda una demo
              </span>
            </ContactModal>
          </div>

          <button
            type="button"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-full border border-border-subtle text-text-primary transition hover:border-border-active hover:text-primary md:hidden"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={`grid transition-all duration-300 md:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-border-subtle px-4 pb-4 pt-2">
              <div className="flex flex-col gap-1 text-sm font-medium text-text-muted">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl px-4 py-3 transition hover:bg-surface-subtle hover:text-primary"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="mt-3 sm:hidden">
                <ContactModal>
                  <span className="inline-flex h-12 w-full items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-fg transition hover:bg-primary-hover">
                    Agenda una demo
                  </span>
                </ContactModal>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

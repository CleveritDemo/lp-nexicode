import Image from "next/image";
import {
  BookOpen,
  Boxes,
  CloudCog,
  FileCode2,
  FileText,
  FolderTree,
  GitBranch,
  Languages,
  NotebookPen,
  Ticket,
  Workflow,
} from "lucide-react";
import { ContactModal } from "@/components/contact-modal";
import { ProductMockup } from "@/components/product-mockup";
import { ScrollReveal } from "@/components/scroll-reveal";
import { StickyCapabilities } from "@/components/sticky-capabilities";
import { assetPath } from "@/lib/asset-path";

const workspaceFeatures = [
  "Pestañas persistentes con hasta cuatro paneles redimensionables y reordenables.",
  "Terminales reales mediante node-pty con restauración de cwd, scrollback e historial.",
  "Explorador de archivos con búsqueda, operaciones rápidas y editor CodeMirror integrado.",
  "Panel Git para revisar cambios, stage, unstage, commit, pull y push sin cambiar de app.",
];

const agentFeatures = [
  "Paneles para Claude Code y Cursor Agent ejecutados con CLIs instaladas localmente.",
  "Modos Ask, Auto y Plan para controlar permisos según el nivel de autonomía requerido.",
  "Selector de modelo, cancelación de tareas y reanudación de conversaciones.",
  "Contextos reutilizables por pestaña para que cada agente entienda el trabajo activo.",
];

const contextItems = [
  { title: "Árbol de carpetas", icon: FolderTree },
  { title: "Archivos", icon: FileText },
  { title: "Símbolos", icon: FileCode2 },
  { title: "Notas", icon: NotebookPen },
  { title: "Estado de Git", icon: GitBranch },
  { title: "Dependencias", icon: Boxes },
  { title: "README", icon: BookOpen },
  { title: "Issues de Jira", icon: Ticket },
];

const integrationCards = [
  {
    title: "Jira Cloud nativo",
    icon: CloudCog,
    description:
      "Menciona una issue en el composer y su ficha viaja como contexto del turno para que el agente trabaje con la historia completa.",
  },
  {
    title: "GitHub Actions visible",
    icon: Workflow,
    description:
      "Consulta el estado de pipelines con token, variable de entorno o credenciales de Git sin romper tu flujo de desarrollo.",
  },
  {
    title: "Experiencia configurable",
    icon: Languages,
    description:
      "Temas, tamaño de fuente, interfaz en español o inglés y controles opcionales de Spotify en la barra de título.",
  },
];

const footerColumns = [
  {
    title: "Producto",
    links: ["Funcionalidades", "Integraciones", "Agentes", "Demo"],
  },
  {
    title: "Empresa",
    links: ["Sobre nosotros", "Contacto", "Soporte"],
  },
  {
    title: "Legal",
    links: ["Privacidad", "Términos", "Seguridad"],
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-canvas text-text-primary">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_color-mix(in_srgb,var(--color-primary)_22%,transparent),_transparent_34%),radial-gradient(circle_at_80%_20%,_color-mix(in_srgb,var(--color-border-active)_34%,transparent),_transparent_30%),linear-gradient(135deg,_var(--color-surface),_var(--color-canvas))]" />
      <div className="pointer-events-none absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 sm:px-10 lg:px-12">
        <ScrollReveal>
        <nav className="flex items-center justify-between rounded-full border border-border-subtle bg-surface/80 px-5 py-4 backdrop-blur">
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
          <ContactModal>
            <span className="hidden rounded-full border border-border-subtle px-5 py-2.5 text-sm font-medium text-text-muted transition hover:border-border-active hover:text-text-primary sm:inline-flex">
              Agenda una demo
            </span>
          </ContactModal>
        </nav>
        </ScrollReveal>

        <div className="flex flex-1 items-center justify-center py-20 lg:py-24">
          <ScrollReveal className="mx-auto w-full text-center" delay={100}>
            <div className="mx-auto max-w-5xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-border-active bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="size-2 rounded-full bg-primary shadow-[0_0_22px_var(--color-primary)]" />
              Terminal de escritorio para macOS
            </div>

            <h1 className="mx-auto max-w-5xl text-balance text-5xl font-semibold tracking-[-0.05em] text-text-primary sm:text-6xl lg:text-7xl">
              Todo tu flujo de desarrollo en un solo workspace inteligente.
            </h1>

            <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-text-muted sm:text-xl">
              Nexi code reúne shells, archivos, Git y agentes de programación en
              una terminal visual diseñada para equipos que necesitan moverse más
              rápido sin perder control.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <ContactModal>
                <span className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-7 text-base font-semibold text-primary-fg transition hover:bg-primary-hover">
                  Contactar a un agente
                </span>
              </ContactModal>
              <a
                href="#funcionalidades"
                className="inline-flex h-14 items-center justify-center rounded-full border border-white px-7 text-base font-semibold text-white transition hover:bg-white hover:text-primary-fg"
              >
                Explorar funcionalidades
              </a>
            </div>
            </div>

            <div className="mt-16">
              <ProductMockup variant="hero" />
            </div>
          </ScrollReveal>

        </div>
      </section>

      <StickyCapabilities />

      <section
        id="funcionalidades"
        className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <ScrollReveal className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Funcionalidades
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
            Una terminal que entiende el proyecto, no solo comandos.
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-muted">
            Nexi code reduce el cambio de contexto entre consola, editor,
            repositorio, issues y agentes. Todo vive en pestañas persistentes
            preparadas para trabajos largos y sesiones que puedes retomar.
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <ScrollReveal
            className="rounded-[2rem] border border-border-subtle bg-surface/80 p-6 sm:p-8"
            delay={100}
          >
            <span className="text-sm font-medium text-primary">Workspace</span>
            <h3 className="mt-3 text-2xl font-semibold text-text-primary">
              Shells, archivos y Git en el mismo lugar
            </h3>
            <div className="mt-6 space-y-4">
              {workspaceFeatures.map((feature) => (
                <div key={feature} className="flex gap-3 text-text-muted">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal
            className="rounded-[2rem] border border-border-subtle bg-surface/80 p-6 sm:p-8"
            delay={200}
          >
            <span className="text-sm font-medium text-primary">Agentes</span>
            <h3 className="mt-3 text-2xl font-semibold text-text-primary">
              Programación asistida con control real
            </h3>
            <div className="mt-6 space-y-4">
              {agentFeatures.map((feature) => (
                <div key={feature} className="flex gap-3 text-text-muted">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-primary" />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Contexto reutilizable
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
            Dale al agente exactamente lo que necesita.
          </h2>
          <p className="mt-5 text-lg leading-8 text-text-muted">
            Cada pestaña puede acumular contexto propio para que una conversación
            continúe con la información correcta: código, notas, estado del repo
            y dependencias relevantes.
          </p>
        </ScrollReveal>

        <div className="grid gap-3 sm:grid-cols-2">
          {contextItems.map(({ title, icon: Icon }, index) => (
            <ScrollReveal
              key={title}
              className={`group rounded-3xl border border-border-subtle bg-surface-elevated p-5 transition duration-300 [transform-style:preserve-3d] hover:scale-[1.025] hover:rotate-x-2 hover:-rotate-y-2 hover:border-border-active hover:bg-surface-subtle hover:shadow-2xl hover:shadow-black/40 ${
                index % 2 === 0 ? "sm:-translate-y-8" : "sm:translate-y-14"
              }`}
              delay={index * 60}
            >
              <Icon className="size-6 text-text-dim transition group-hover:translate-z-4 group-hover:text-primary" />
              <p className="mt-4 text-lg font-semibold text-text-primary transition group-hover:text-primary">
                {title}
              </p>
              <p className="mt-2 text-sm leading-6 text-text-muted">
                Disponible como señal de trabajo para terminales, agentes y
                decisiones dentro del workspace.
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <ScrollReveal className="rounded-[2.5rem] border border-border-subtle bg-surface/80 p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
                Integraciones
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
                Conecta el trabajo real de tu equipo.
              </h2>
            </div>

            <div className="grid gap-4">
              {integrationCards.map(({ title, icon: Icon, description }, index) => (
                <ScrollReveal
                  key={title}
                  className="group rounded-3xl border border-border-subtle bg-surface-elevated p-6 transition duration-300 [transform-style:preserve-3d] hover:scale-[1.025] hover:rotate-x-2 hover:-rotate-y-2 hover:border-border-active hover:bg-surface-subtle hover:shadow-2xl hover:shadow-black/40"
                  delay={index * 80}
                >
                  <Icon className="size-6 text-text-dim transition group-hover:translate-z-4 group-hover:text-primary" />
                  <h3 className="mt-4 text-xl font-semibold text-text-primary transition group-hover:text-primary">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-text-muted">{description}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              Producto
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-text-primary sm:text-5xl">
              Una interfaz real para coordinar agentes, terminales y contexto.
            </h2>
            <p className="mt-5 text-lg leading-8 text-text-muted">
              El workspace de Nexi code mantiene el foco en el flujo activo: agentes
              a la izquierda, acciones rápidas a la derecha y un composer inferior
              para conversar con el contexto correcto.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={160} className="mt-12">
          <ProductMockup variant="product" />
        </ScrollReveal>
      </section>

      <section
        id="contacto"
        className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12"
      >
        <ScrollReveal className="overflow-hidden rounded-[2.5rem] border border-border-active bg-primary p-8 text-primary-fg sm:p-12 lg:p-16">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.35em] opacity-70">
              Solicita una demo
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">
              Habla con un agente y ve Nexi code aplicado a tu flujo.
            </h2>
            <p className="mt-6 text-lg leading-8 opacity-80">
              Cuéntanos cómo trabaja tu equipo hoy y te mostraremos una demo
              orientada a terminales, Git, Jira, agentes de programación y
              contexto reutilizable.
            </p>
            <ContactModal>
              <span className="mt-10 inline-flex h-14 items-center justify-center rounded-full bg-primary-fg px-7 text-base font-semibold text-primary transition hover:opacity-90">
                Contactar a un agente
              </span>
            </ContactModal>
          </div>
        </ScrollReveal>
      </section>

      <footer className="relative border-t border-border-subtle bg-canvas px-6 py-14 sm:px-10 lg:px-12">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="max-w-md">
            <a href="#" className="inline-flex" aria-label="Nexi code">
              <Image
                src={assetPath("/brand/logotipo-nexicode-footer.svg")}
                alt="Nexi code"
                width={630}
                height={124}
                className="h-9 w-auto"
              />
            </a>
            <p className="mt-3 max-w-md text-sm leading-6 text-text-muted">
              Terminal inteligente para equipos que trabajan con código, agentes,
              Git e integraciones en un solo espacio.
            </p>
            <p className="mt-5 text-sm text-text-dim">
              Diseñado para equipos que quieren acelerar su desarrollo sin perder
              visibilidad, contexto ni control operativo.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold text-text-primary">
                  {column.title}
                </h2>
                <div className="mt-4 flex flex-col gap-3 text-sm text-text-muted">
                  {column.links.map((link) => (
                    <a
                      key={link}
                      href={link === "Demo" || link === "Contacto" ? "#contacto" : "#funcionalidades"}
                      className="transition hover:text-primary"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-border-subtle pt-6 text-center text-sm text-text-dim lg:col-span-2">
            <p>
              © {new Date().getFullYear()} Nexi code. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Speaking() {
  return (
    <section id="palestras" className="bg-navy py-24 md:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <SectionLabel index="009" label="Palestras" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance mt-6 font-display text-3xl font-medium leading-tight text-paper md:text-4xl">
              Palestras que conectam vendas, comportamento, experiência e
              resultado.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-mist md:text-lg">
              Jorge Porto ministra palestras, treinamentos e encontros
              estratégicos para clínicas, empresas, congressos, eventos,
              equipes comerciais e profissionais da saúde.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center border border-gold px-7 py-4 text-sm font-semibold tracking-wide text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Consultar disponibilidade para eventos
            </a>
          </Reveal>
        </div>

        <Reveal direction="scale" duration={0.9}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute inset-0 border border-gold-line/70" />
            <div className="absolute inset-3 overflow-hidden border border-gold-line/40 bg-ink">
              <Image
                src="/images/palestras.png"
                alt="Jorge Porto palestrando em evento para profissionais"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
                style={{ objectPosition: "78% 35%" }}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

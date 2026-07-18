import Image from "next/image";
import { CONTACT, HOW_IT_WORKS } from "@/lib/constants";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel index="008" label="Como funciona" light />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance mt-6 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
              Antes de propor qualquer solução, é preciso entender a
              operação.
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="relative mt-12 aspect-[21/9] w-full overflow-hidden border border-ink/15">
            <Image
              src="/images/como-funciona.png"
              alt="Equipe de clínica em reunião de planejamento comercial com Jorge Porto"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "50% 38%" }}
            />
          </div>
        </Reveal>

        <RevealGroup
          stagger={0.1}
          className="relative mt-16 grid gap-x-6 gap-y-12 border-t border-ink/15 pt-14 md:grid-cols-5"
        >
          {HOW_IT_WORKS.map((step) => (
            <RevealItem key={step.number}>
              <div className="relative pl-6 md:pl-0 md:pt-8">
                <span className="absolute left-0 top-0 h-full w-px bg-ink/10 md:left-0 md:top-0 md:h-px md:w-full" />
                <span className="font-display text-sm text-gold-deep">
                  {step.number}
                </span>
                <h3 className="mt-3 font-display text-lg text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {step.description}
                </p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal delay={0.1}>
          <div className="mt-16 text-center">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-ink px-8 py-4 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-gold-deep"
            >
              Quero solicitar um diagnóstico
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

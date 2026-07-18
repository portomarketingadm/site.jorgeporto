import { DIAGNOSIS_SYMPTOMS } from "@/lib/constants";
import { CoverVideo } from "@/components/ui/CoverVideo";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Diagnosis() {
  return (
    <section id="diagnostico" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <div className="relative mb-8 aspect-[4/3] w-full overflow-hidden border border-ink/15">
                <CoverVideo
                  src="/videos/diagnostico.mp4"
                  poster="/images/diagnostico.png"
                  className="absolute inset-0 h-full w-full object-cover"
                  objectPosition="38% 35%"
                />
              </div>
            </Reveal>
            <Reveal>
              <SectionLabel index="002" label="O diagnóstico" light />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-balance mt-6 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                O problema nem sempre está na quantidade de leads.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink/70">
                Muitas clínicas investem em divulgação, recebem contatos
                diariamente e, ainda assim, continuam sem previsibilidade. O
                lead demora para ser atendido, o follow-up não acontece, as
                faltas aumentam, os indicadores não são acompanhados e todo o
                resultado depende do esforço individual de uma secretária.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-6 max-w-md font-display text-xl italic text-ink">
                Não é falta de oportunidade. É falta de estrutura comercial.
              </p>
            </Reveal>
          </div>

          <div>
            <RevealGroup
              stagger={0.06}
              className="grid grid-cols-1 gap-x-8 gap-y-1 xs:grid-cols-2"
            >
              {DIAGNOSIS_SYMPTOMS.map((symptom) => (
                <RevealItem key={symptom}>
                  <div className="flex items-start gap-3 border-b border-ink/10 py-4">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 bg-gold-deep" />
                    <p className="text-sm leading-relaxed text-ink/80 md:text-base">
                      {symptom}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal delay={0.1}>
              <p className="mt-10 border-l-2 border-gold-deep pl-5 font-display text-lg leading-snug text-ink md:text-xl">
                Gerar mais demanda para uma operação desorganizada não
                resolve o problema. Apenas acelera o desperdício.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

import { AUDIENCE_FIT, AUDIENCE_NOT_FIT } from "@/lib/constants";
import { CoverVideo } from "@/components/ui/CoverVideo";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Audience() {
  return (
    <section id="publico" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <CoverVideo
        src="/videos/publico.mp4"
        poster="/images/publico.png"
        className="absolute inset-0 h-full w-full object-cover"
        objectPosition="85% 30%"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ink/60"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,7,10,0.94) 0%, rgba(5,7,10,0.85) 45%, rgba(5,7,10,0.55) 100%)",
        }}
      />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel index="007" label="Para quem é" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance mt-6 font-display text-3xl font-medium leading-tight text-paper md:text-4xl">
              Para clínicas que não querem continuar crescendo no improviso.
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-x-14 gap-y-14 border-t border-gold-line/50 pt-14 md:grid-cols-2">
          <div>
            <Reveal>
              <p className="font-display text-xl text-gold">
                Este trabalho é para clínicas que:
              </p>
            </Reveal>
            <RevealGroup stagger={0.06} className="mt-6 space-y-4">
              {AUDIENCE_FIT.map((item) => (
                <RevealItem key={item}>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                    <p className="text-sm leading-relaxed text-paper/85 md:text-base">
                      {item}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>

          <div>
            <Reveal>
              <p className="font-display text-xl text-mist">
                Não é para clínicas que:
              </p>
            </Reveal>
            <RevealGroup stagger={0.06} className="mt-6 space-y-4">
              {AUDIENCE_NOT_FIT.map((item) => (
                <RevealItem key={item}>
                  <div className="flex items-start gap-3">
                    <span className="mt-2.5 h-px w-3 shrink-0 bg-mist-dark" />
                    <p className="text-sm leading-relaxed text-mist md:text-base">
                      {item}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

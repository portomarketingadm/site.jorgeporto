import Image from "next/image";
import { SOLUTION_PILLARS } from "@/lib/constants";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Solution() {
  return (
    <section
      id="solucoes"
      className="relative bg-ink py-24 md:py-32 lg:flex lg:items-center"
    >
      {/* Text column */}
      <div className="relative z-10 min-w-0 px-6 md:px-12 lg:w-1/2 lg:pl-12 lg:pr-14 xl:pl-16">
        <div className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
          <Reveal>
            <SectionLabel index="003" label="A solução" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance mt-6 font-display text-3xl font-medium leading-tight text-paper md:text-4xl">
              Uma operação comercial estruturada do primeiro contato ao
              pós-venda.
            </h2>
          </Reveal>

          <RevealGroup
            stagger={0.08}
            className="mt-10 grid gap-x-8 gap-y-0 border-t border-gold-line/50 sm:grid-cols-2"
          >
            {SOLUTION_PILLARS.map((pillar) => (
              <RevealItem key={pillar.number}>
                <div className="border-b border-gold-line/50 py-6">
                  <span className="font-display text-sm text-gold">
                    {pillar.number}
                  </span>
                  <h3 className="mt-2 font-display text-lg text-paper">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {pillar.description}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>

      {/* Full-width image, right half on large screens. Fixed aspect
          ratio so the photo stays proportional regardless of how tall
          the six-pillar list beside it is. */}
      <Reveal
        direction="right"
        duration={0.9}
        className="relative z-10 mt-12 hidden min-w-0 lg:mt-0 lg:block lg:w-1/2"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src="/images/solucao.png"
            alt="Jorge Porto apresentando o funil comercial para a equipe de uma clínica"
            fill
            sizes="50vw"
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(5,7,10,0.5) 0%, rgba(5,7,10,0) 18%)",
            }}
          />
          <div className="absolute inset-y-0 left-0 w-px bg-gold-line/60" />
        </div>
      </Reveal>

      {/* Contained image for smaller screens */}
      <Reveal
        direction="scale"
        duration={0.9}
        className="relative z-10 mt-12 px-6 md:px-12 lg:hidden"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-gold-line/40">
          <Image
            src="/images/solucao.png"
            alt="Jorge Porto apresentando o funil comercial para a equipe de uma clínica"
            fill
            sizes="90vw"
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
          />
        </div>
      </Reveal>
    </section>
  );
}

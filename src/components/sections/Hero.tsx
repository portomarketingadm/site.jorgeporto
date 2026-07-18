import Image from "next/image";
import { AUTHORITY_STATS, CONTACT } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-ink pt-28 pb-16 md:pt-32 lg:flex lg:items-center lg:pb-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(45% 55% at 8% 15%, rgba(184,149,90,0.08) 0%, rgba(5,7,10,0) 60%)",
        }}
      />
      <div className="noise-overlay z-10" aria-hidden="true" />

      {/* Text column */}
      <div className="relative z-10 min-w-0 px-6 md:px-12 lg:w-1/2 lg:pl-12 lg:pr-14 xl:pl-16">
        <RevealGroup stagger={0.14} className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
          <RevealItem>
            <span className="eyebrow">Estratégia &amp; consultoria comercial para clínicas</span>
          </RevealItem>

          <RevealItem>
            <h1 className="text-balance mt-6 font-display text-[2.2rem] font-medium leading-[1.1] text-paper xs:text-4xl md:text-5xl lg:text-[2.6rem]">
              Clínicas não crescem apenas com mais demanda de leads. Crescem
              quando possuem{" "}
              <span className="text-gold">
                uma estrutura comercial preparada
              </span>{" "}
              para transformar essa demanda em faturamento.
            </h1>
          </RevealItem>

          <RevealItem>
            <p className="text-balance mt-6 max-w-xl text-base leading-relaxed text-mist">
              Jorge Porto estrutura operações comerciais, treina equipes e
              desenvolve estratégias para clínicas que desejam transformar
              oportunidades em agendamentos, comparecimentos, fechamentos e
              faturamento previsível.
            </p>
          </RevealItem>

          <RevealItem>
            <p className="mt-5 border-l-2 border-gold pl-4 font-display text-base italic text-paper/90 md:text-lg">
              Mais de R$ 57 milhões gerados para clínicas e clientes em todo o
              Brasil.
            </p>
          </RevealItem>

          <RevealItem>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-gold px-7 py-4 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.02]"
              >
                Solicitar uma análise comercial
              </a>
              <a
                href="#metodos"
                className="inline-flex items-center justify-center border border-paper/25 px-7 py-4 text-sm font-semibold tracking-wide text-paper transition-colors hover:border-paper"
              >
                Conhecer os métodos
              </a>
            </div>
          </RevealItem>

          <RevealItem>
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gold-line/50 pt-7">
              {AUTHORITY_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-gold md:text-3xl">
                    <AnimatedCounter
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </p>
                  <p className="mt-1 text-xs leading-snug text-mist md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </RevealItem>
        </RevealGroup>
      </div>

      {/* Full-width portrait, right half on large screens. Fixed aspect
          ratio so the photo stays proportional regardless of how tall
          the copy beside it is. */}
      <Reveal
        direction="scale"
        duration={0.9}
        className="relative z-10 mt-12 hidden min-w-0 px-0 lg:mt-0 lg:block lg:w-1/2"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src="/images/hero.png"
            alt="Jorge Porto, estrategista e consultor comercial para clínicas"
            fill
            priority
            sizes="50vw"
            className="object-cover"
            style={{ objectPosition: "62% 22%" }}
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

      {/* Contained image for smaller screens, below the text */}
      <Reveal
        direction="scale"
        duration={0.9}
        className="relative z-10 mt-12 px-6 md:px-12 lg:hidden"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden border border-gold-line/40">
          <Image
            src="/images/hero.png"
            alt="Jorge Porto, estrategista e consultor comercial para clínicas"
            fill
            sizes="90vw"
            className="object-cover"
            style={{ objectPosition: "62% 22%" }}
          />
        </div>
      </Reveal>
    </section>
  );
}

import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Numbers() {
  return (
    <section id="resultados" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <Image
        src="/images/numeros.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ink/95"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45% 65% at 50% 0%, rgba(184,149,90,0.10) 0%, rgba(5,7,10,0) 60%)",
        }}
      />
      <div className="container-page relative">
        <Reveal>
          <span className="eyebrow">005 / Números e autoridade</span>
        </Reveal>

        <RevealGroup
          stagger={0.1}
          className="mt-14 grid gap-y-14 border-t border-gold-line/50 pt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8"
        >
          <RevealItem>
            <p className="font-display text-5xl text-gold md:text-6xl">
              <AnimatedCounter value={57} prefix="+R$ " suffix=" mi" />
            </p>
            <p className="mt-3 max-w-[16ch] text-sm leading-snug text-mist md:text-base">
              gerados para clínicas e clientes em todo o Brasil
            </p>
          </RevealItem>

          <RevealItem>
            <p className="font-display text-5xl text-gold md:text-6xl">
              <AnimatedCounter value={1000} prefix="+" />
            </p>
            <p className="mt-3 max-w-[16ch] text-sm leading-snug text-mist md:text-base">
              vendedores treinados
            </p>
          </RevealItem>

          <RevealItem>
            <p className="font-display text-5xl text-gold md:text-6xl">
              <AnimatedCounter value={500} prefix="+" />
            </p>
            <p className="mt-3 max-w-[16ch] text-sm leading-snug text-mist md:text-base">
              aulas de mentoria realizadas
            </p>
          </RevealItem>

          <RevealItem>
            <p className="font-display text-3xl leading-tight text-gold md:text-4xl">
              Atuação nacional
            </p>
            <p className="mt-3 max-w-[20ch] text-sm leading-snug text-mist md:text-base">
              com clínicas de diferentes regiões do Brasil
            </p>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

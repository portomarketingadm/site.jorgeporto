import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function About() {
  return (
    <section id="sobre" className="bg-navy py-24 md:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <Reveal direction="left" duration={0.9}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md">
            <div className="absolute inset-0 border border-gold-line/70" />
            <div className="absolute inset-3 overflow-hidden border border-gold-line/40 bg-ink">
              <Image
                src="/images/sobre.png"
                alt="Jorge Porto escrevendo em seu caderno de anotações"
                fill
                sizes="(min-width: 1024px) 35vw, 90vw"
                className="object-cover"
                style={{ objectPosition: "32% 30%" }}
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionLabel index="004" label="Sobre Jorge Porto" />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-balance mt-6 font-display text-3xl font-medium leading-tight text-paper md:text-4xl">
              Vendas não começaram para mim com um curso. Começaram na
              prática.
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-7 max-w-xl space-y-5 text-base leading-relaxed text-mist">
              <p>
                Jorge Porto começou a vender aos 12 anos e construiu sua
                trajetória atuando diretamente com atendimento, negociação,
                gestão comercial, treinamento e desenvolvimento de equipes.
              </p>
              <p>
                Ao longo dos anos, passou a aplicar essa experiência no
                mercado de clínicas médicas, odontológicas e de harmonização
                facial, identificando que muitas operações investiam em
                marketing, estrutura física e tecnologia, mas continuavam
                perdendo pacientes por falhas básicas no processo comercial.
              </p>
              <p>
                Desde então, passou a desenvolver metodologias, treinamentos,
                mentorias e processos voltados para transformar recepções e
                equipes comerciais em operações organizadas, acompanháveis e
                orientadas por resultados.
              </p>
              <p>
                Hoje, já treinou mais de 1.000 vendedores, realizou mais de
                500 aulas de mentoria e participou da geração de mais de R$
                57 milhões para clínicas e clientes em diferentes regiões do
                Brasil.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-8 max-w-xl border-l-2 border-gold pl-5 font-display text-lg italic leading-snug text-paper md:text-xl">
              Eu não ensino vendas a partir de teorias isoladas. Ensino a
              partir do que acontece todos os dias entre um lead, uma equipe
              e uma decisão de compra.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center border border-gold px-7 py-4 text-sm font-semibold tracking-wide text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              Falar com Jorge Porto
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

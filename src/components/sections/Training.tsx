import Image from "next/image";
import { COMMERCIAL_TRAINING, TRAINING_TOPICS } from "@/lib/constants";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Training() {
  return (
    <section id="metodos" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="max-w-2xl">
          <Reveal>
            <SectionLabel index="006" label="Métodos e programas" light />
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-10 grid overflow-hidden border border-ink/15 md:grid-cols-2">
            <div className="relative aspect-[4/3] md:aspect-auto">
              <Image
                src="/images/treinamentos.png"
                alt="Jorge Porto gravando conteúdo de treinamento comercial"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "50% 30%" }}
              />
            </div>

            <div className="flex flex-col justify-center px-6 py-12 text-center md:px-12 md:py-16 md:text-left">
              <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">
                {COMMERCIAL_TRAINING.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-ink/70 md:text-lg">
                {COMMERCIAL_TRAINING.description}
              </p>

              <RevealGroup
                stagger={0.04}
                className="mt-9 flex flex-wrap justify-center gap-2.5 md:justify-start"
              >
                {TRAINING_TOPICS.map((topic) => (
                  <RevealItem key={topic}>
                    <span className="inline-block border border-gold-deep/40 px-3.5 py-1.5 text-xs font-medium tracking-wide text-gold-deep">
                      {topic}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>

              <a
                href={COMMERCIAL_TRAINING.href}
                className="mt-10 inline-flex items-center justify-center self-center bg-ink px-8 py-4 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-gold-deep md:self-start"
              >
                {COMMERCIAL_TRAINING.cta}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

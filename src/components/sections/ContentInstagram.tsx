import Image from "next/image";
import { CONTACT, CONTENT_TOPICS } from "@/lib/constants";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ContentInstagram() {
  return (
    <section id="conteudos" className="bg-paper py-24 md:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Reveal>
            <SectionLabel index="010" label="Conteúdos" light />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="text-balance mt-6 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
              Conteúdo para quem entende que crescimento exige mais do que
              divulgação.
            </h2>
          </Reveal>

          <RevealGroup
            stagger={0.04}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {CONTENT_TOPICS.map((topic) => (
              <RevealItem key={topic}>
                <span className="inline-block border border-ink/15 px-3.5 py-1.5 text-xs font-medium tracking-wide text-ink/70">
                  {topic}
                </span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal delay={0.16}>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center justify-center bg-ink px-8 py-4 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-gold-deep"
            >
              Acompanhar no Instagram
            </a>
          </Reveal>
        </div>

        <Reveal direction="right" duration={0.9}>
          <a
            href={CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden border border-ink/15"
          >
            <Image
              src="/images/conteudos.png"
              alt="Jorge Porto gravando conteúdo para o Instagram"
              fill
              sizes="(min-width: 1024px) 35vw, 90vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: "45% 35%" }}
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-ink/55 transition-colors group-hover:bg-ink/65"
            />
            <div className="relative text-center">
              <p className="font-display text-2xl text-paper">
                {CONTACT.instagramHandle}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.22em] text-mist transition-colors group-hover:text-gold">
                Ver perfil no Instagram
              </p>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

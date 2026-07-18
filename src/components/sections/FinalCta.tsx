import Image from "next/image";
import { CONTACT } from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 md:py-32">
      <Image
        src="/images/cta-final.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: "68% 30%" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(5,7,10,0.9) 0%, rgba(5,7,10,0.82) 45%, rgba(5,7,10,0.9) 100%), radial-gradient(55% 70% at 50% 100%, rgba(184,149,90,0.14) 0%, rgba(5,7,10,0) 60%)",
        }}
      />
      <div className="container-page relative text-center">
        <Reveal>
          <h2 className="text-balance mx-auto max-w-3xl font-display text-3xl font-medium leading-tight text-paper md:text-5xl">
            Sua clínica não precisa de mais tentativas isoladas. Precisa de
            uma operação comercial que funcione todos os dias.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-mist md:text-lg">
            Solicite uma conversa de diagnóstico e entenda quais gargalos
            estão impedindo sua clínica de transformar mais oportunidades em
            agendamentos, pacientes e faturamento.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center justify-center bg-gold px-9 py-4 text-sm font-semibold tracking-wide text-ink transition-transform hover:scale-[1.02]"
          >
            Solicitar diagnóstico pelo WhatsApp
          </a>
          <p className="mt-4 text-xs text-mist-dark">
            Você será direcionado para o WhatsApp da equipe de Jorge Porto.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

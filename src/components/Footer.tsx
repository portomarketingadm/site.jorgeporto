import Image from "next/image";
import { CONTACT, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gold-line/50 bg-ink pt-16 pb-8">
      <Image
        src="/images/rodape-bg.png"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ink/70"
      />
      <div className="container-page relative">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl text-paper">Jorge Porto</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-mist">
              Estrategista, consultor comercial, mentor e treinador de vendas.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4">Contatos</p>
            <ul className="space-y-2 text-sm text-mist">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-paper"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  WhatsApp: {CONTACT.phoneSecondaryDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phonePrimaryTel}`}
                  className="transition-colors hover:text-paper"
                >
                  Telefone: {CONTACT.phonePrimaryDisplay}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-paper"
                >
                  Instagram: {CONTACT.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4">Links</p>
            <ul className="space-y-2 text-sm text-mist">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-paper"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="text-mist-dark">Política de Privacidade</li>
              <li className="text-mist-dark">Termos de Uso</li>
            </ul>
          </div>
        </div>

        <div className="hairline my-10" />

        <div className="flex flex-col gap-4 text-xs text-mist-dark md:flex-row md:items-center md:justify-between">
          <p>© {year} Jorge Porto. Todos os direitos reservados.</p>
          <p className="max-w-2xl md:text-right">
            Este site não representa promessa ou garantia de resultados. Os
            resultados apresentados dependem de fatores como mercado, equipe,
            investimento, execução e estrutura de cada negócio.
          </p>
        </div>
      </div>
    </footer>
  );
}

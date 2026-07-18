import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Script from "next/script";
import { CONTACT, SITE_URL } from "@/lib/constants";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const TITLE = "Jorge Porto | Estratégia e Consultoria Comercial para Clínicas";
const DESCRIPTION =
  "Jorge Porto ajuda clínicas médicas, odontológicas e de harmonização a estruturarem equipes, processos comerciais, atendimento, vendas, captação e previsibilidade de faturamento.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Jorge Porto",
  },
  description: DESCRIPTION,
  keywords: [
    "consultoria comercial para clínicas",
    "treinamento de vendas para clínicas",
    "estruturação comercial para clínicas",
    "consultor comercial para clínicas",
    "treinamento para secretárias de clínicas",
    "gestão comercial para clínicas",
    "vendas para clínicas de harmonização",
    "mentor para profissionais de harmonização",
    "consultoria para clínicas odontológicas",
    "fechamento de tratamentos",
    "treinamento de recepção para clínicas",
    "Jorge Porto",
    "Método Diamante",
    "Harmony Black",
    "A Tríade da HOF",
  ],
  authors: [{ name: "Jorge Porto" }],
  creator: "Jorge Porto",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE_URL,
    siteName: "Jorge Porto",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Jorge Porto",
      jobTitle: "Estrategista e Consultor Comercial para Clínicas",
      description: DESCRIPTION,
      url: SITE_URL,
      email: `mailto:${CONTACT.email}`,
      sameAs: [CONTACT.instagramUrl],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#service`,
      name: "Jorge Porto — Estratégia e Consultoria Comercial",
      description: DESCRIPTION,
      url: SITE_URL,
      email: CONTACT.email,
      telephone: CONTACT.phoneSecondaryTel,
      areaServed: "BR",
      founder: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${manrope.variable}`}
    >
      <body className="bg-ink text-paper antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {children}

        {gtmId ? (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}

        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}

        {metaPixelId ? (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${metaPixelId}');fbq('track','PageView');`}
          </Script>
        ) : null}
      </body>
    </html>
  );
}

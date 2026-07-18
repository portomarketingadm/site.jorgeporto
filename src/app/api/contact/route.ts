import { NextResponse } from "next/server";

type ContactPayload = {
  nome: string;
  telefone: string;
  email: string;
  clinica: string;
  cidade: string;
  segmento: string;
  faturamento: string;
  equipe: string;
  desafio: string;
};

const REQUIRED_FIELDS: (keyof ContactPayload)[] = [
  "nome",
  "telefone",
  "email",
  "clinica",
  "cidade",
  "segmento",
  "faturamento",
  "equipe",
  "desafio",
];

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Payload inválido." },
      { status: 400 }
    );
  }

  const missing = REQUIRED_FIELDS.filter((field) => !body[field]?.trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, message: "Preencha todos os campos obrigatórios.", missing },
      { status: 422 }
    );
  }

  if (!EMAIL_REGEX.test(body.email!.trim())) {
    return NextResponse.json(
      { ok: false, message: "E-mail inválido." },
      { status: 422 }
    );
  }

  const payload = body as ContactPayload;
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...payload,
          source: "jorgeporto.com.br",
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch (error) {
      console.error("Falha ao enviar lead para o webhook/CRM:", error);
      return NextResponse.json(
        {
          ok: false,
          message:
            "Não foi possível concluir o envio agora. Tente novamente em instantes.",
        },
        { status: 502 }
      );
    }
  } else {
    console.info("Novo lead recebido (CONTACT_WEBHOOK_URL não configurada):", payload);
  }

  return NextResponse.json({ ok: true });
}

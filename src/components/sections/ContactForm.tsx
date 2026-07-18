"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";
import {
  REVENUE_OPTIONS,
  SEGMENT_OPTIONS,
  TEAM_SIZE_OPTIONS,
} from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

type FormState = {
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

const INITIAL_STATE: FormState = {
  nome: "",
  telefone: "",
  email: "",
  clinica: "",
  cidade: "",
  segmento: "",
  faturamento: "",
  equipe: "",
  desafio: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const FIELD_LABELS: Record<keyof FormState, string> = {
  nome: "Nome",
  telefone: "Telefone",
  email: "E-mail",
  clinica: "Nome da clínica ou empresa",
  cidade: "Cidade",
  segmento: "Segmento",
  faturamento: "Faturamento médio mensal",
  equipe: "Quantidade de pessoas na equipe",
  desafio: "Principal desafio comercial",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState<string | null>(null);

  function update<K extends keyof FormState>(field: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function validate(): boolean {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    (Object.keys(FIELD_LABELS) as (keyof FormState)[]).forEach((field) => {
      if (!form[field].trim()) {
        nextErrors[field] = "Campo obrigatório.";
      }
    });

    if (form.email && !EMAIL_REGEX.test(form.email.trim())) {
      nextErrors.email = "Informe um e-mail válido.";
    }

    if (form.telefone && form.telefone.replace(/\D/g, "").length < 10) {
      nextErrors.telefone = "Informe um telefone válido com DDD.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validate()) {
      setStatus("error");
      setFeedback("Revise os campos destacados antes de enviar.");
      return;
    }

    setStatus("submitting");
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Falha no envio");
      }

      setStatus("success");
      setFeedback(
        "Recebemos sua solicitação. A equipe de Jorge Porto vai entrar em contato em breve."
      );
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
      setFeedback(
        "Não foi possível enviar agora. Tente novamente em instantes ou fale pelo WhatsApp."
      );
    }
  }

  const inputClass =
    "w-full border border-ink/20 bg-paper px-4 py-3.5 text-sm text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-gold-deep";
  const errorClass = "mt-1.5 text-xs text-red-700";

  return (
    <section id="contato" className="bg-paper py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.75fr] lg:items-center">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel index="011" label="Solicitar diagnóstico" light />
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="text-balance mt-6 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
                Conte o momento atual da sua clínica.
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-ink/70">
                Preencha os campos abaixo para que a equipe de Jorge Porto
                entenda seu cenário antes da conversa de diagnóstico.
              </p>
            </Reveal>
          </div>

          <Reveal direction="right" duration={0.9}>
            <div className="relative hidden aspect-[4/3] w-full overflow-hidden border border-ink/15 lg:block">
              <Image
                src="/images/contato.png"
                alt="Jorge Porto em conversa de diagnóstico com uma cliente"
                fill
                sizes="30vw"
                className="object-cover"
                style={{ objectPosition: "62% 35%" }}
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="mt-12 grid max-w-3xl gap-6 md:grid-cols-2"
          >
            <div>
              <label htmlFor="nome" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                {FIELD_LABELS.nome}
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                className={inputClass}
                value={form.nome}
                onChange={(e) => update("nome", e.target.value)}
              />
              {errors.nome && <p className={errorClass}>{errors.nome}</p>}
            </div>

            <div>
              <label htmlFor="telefone" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                {FIELD_LABELS.telefone}
              </label>
              <input
                id="telefone"
                name="telefone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="(21) 99999-9999"
                className={inputClass}
                value={form.telefone}
                onChange={(e) => update("telefone", e.target.value)}
              />
              {errors.telefone && <p className={errorClass}>{errors.telefone}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                {FIELD_LABELS.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={inputClass}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
              />
              {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="clinica" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                {FIELD_LABELS.clinica}
              </label>
              <input
                id="clinica"
                name="clinica"
                type="text"
                className={inputClass}
                value={form.clinica}
                onChange={(e) => update("clinica", e.target.value)}
              />
              {errors.clinica && <p className={errorClass}>{errors.clinica}</p>}
            </div>

            <div>
              <label htmlFor="cidade" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                {FIELD_LABELS.cidade}
              </label>
              <input
                id="cidade"
                name="cidade"
                type="text"
                autoComplete="address-level2"
                className={inputClass}
                value={form.cidade}
                onChange={(e) => update("cidade", e.target.value)}
              />
              {errors.cidade && <p className={errorClass}>{errors.cidade}</p>}
            </div>

            <div>
              <label htmlFor="segmento" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                {FIELD_LABELS.segmento}
              </label>
              <select
                id="segmento"
                name="segmento"
                className={inputClass}
                value={form.segmento}
                onChange={(e) => update("segmento", e.target.value)}
              >
                <option value="">Selecione</option>
                {SEGMENT_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.segmento && <p className={errorClass}>{errors.segmento}</p>}
            </div>

            <div>
              <label htmlFor="faturamento" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                {FIELD_LABELS.faturamento}
              </label>
              <select
                id="faturamento"
                name="faturamento"
                className={inputClass}
                value={form.faturamento}
                onChange={(e) => update("faturamento", e.target.value)}
              >
                <option value="">Selecione</option>
                {REVENUE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.faturamento && <p className={errorClass}>{errors.faturamento}</p>}
            </div>

            <div>
              <label htmlFor="equipe" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                {FIELD_LABELS.equipe}
              </label>
              <select
                id="equipe"
                name="equipe"
                className={inputClass}
                value={form.equipe}
                onChange={(e) => update("equipe", e.target.value)}
              >
                <option value="">Selecione</option>
                {TEAM_SIZE_OPTIONS.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.equipe && <p className={errorClass}>{errors.equipe}</p>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="desafio" className="mb-2 block text-xs font-semibold uppercase tracking-wide text-ink/60">
                {FIELD_LABELS.desafio}
              </label>
              <textarea
                id="desafio"
                name="desafio"
                rows={4}
                className={`${inputClass} resize-none`}
                value={form.desafio}
                onChange={(e) => update("desafio", e.target.value)}
              />
              {errors.desafio && <p className={errorClass}>{errors.desafio}</p>}
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center bg-ink px-8 py-4 text-sm font-semibold tracking-wide text-paper transition-colors hover:bg-gold-deep disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "submitting" ? "Enviando..." : "Solicitar diagnóstico"}
              </button>

              {feedback && (
                <p
                  role="status"
                  className={`mt-4 text-sm ${
                    status === "success" ? "text-emerald-700" : "text-red-700"
                  }`}
                >
                  {feedback}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
      // Honeypot field -- left empty by humans, filled by bots
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Ocurrió un error inesperado."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-aqua/30 bg-aqua/5 p-8">
        <span className="smile-line block h-[2px] w-10" />
        <p className="mt-4 font-display text-xl text-ink">
          Mensaje enviado
        </p>
        <p className="mt-2 text-sm text-steel">
          Gracias por escribirnos. Te contactaremos muy pronto para
          confirmar tu cita.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-cobalt underline underline-offset-4 focus-ring rounded-sm"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot -- hidden from real visitors */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">No llenar este campo</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-xs font-medium text-steel"
          >
            Nombre completo
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Tu nombre"
            className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-aqua focus:outline-none focus-ring"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-xs font-medium text-steel"
          >
            Teléfono / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+57 300 000 0000"
            className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-aqua focus:outline-none focus-ring"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-1.5 block text-xs font-medium text-steel"
        >
          Correo electrónico
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="nombre@correo.com"
          className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-aqua focus:outline-none focus-ring"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="mb-1.5 block text-xs font-medium text-steel"
        >
          Servicio de interés
        </label>
        <select
          id="service"
          name="service"
          defaultValue="Odontología estética"
          className="w-full rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink focus:border-aqua focus:outline-none focus-ring"
        >
          <option>Odontología preventiva</option>
          <option>Odontología restaurativa</option>
          <option>Odontología estética</option>
          <option>Ortodoncia</option>
          <option>Rehabilitación oral</option>
          <option>Otro</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-medium text-steel"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Cuéntanos qué necesitas o el horario que prefieres"
          className="w-full resize-none rounded-xl border border-ink/15 bg-paper px-4 py-3 text-sm text-ink placeholder:text-mist focus:border-aqua focus:outline-none focus-ring"
        />
      </div>

      {status === "error" && (
        <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-cobalt disabled:opacity-60 focus-ring sm:w-auto"
      >
        {status === "loading" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}

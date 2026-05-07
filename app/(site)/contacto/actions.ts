"use server";

import { Resend } from "resend";
import {
  cityLabels,
  contactSchema,
  serviceLabels,
  urgencyLabels,
  type ContactInput,
} from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site-config";

export type ContactFormState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; fieldErrors?: Record<string, string[]> };

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = Object.fromEntries(formData.entries()) as Record<string, string>;

  const parsed = contactSchema.safeParse({
    ...raw,
    consent: raw.consent === "on" ? true : raw.consent,
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Revisa los campos marcados",
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
    };
  }

  const data = parsed.data as ContactInput;

  // Honeypot
  if (data.website) {
    return { status: "success", message: "Recibido. Te contactaremos pronto." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const inboxEnv = process.env.CONTACT_INBOX_EMAIL ?? siteConfig.contact.email;
  // Permite múltiples destinatarios separados por coma:
  //   CONTACT_INBOX_EMAIL=correo1@x.com,correo2@y.com
  const inbox = inboxEnv
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const from = process.env.CONTACT_FROM_EMAIL ?? "ServiPlusUltra <onboarding@resend.dev>";

  if (!apiKey) {
    console.error("[contacto] RESEND_API_KEY no configurada");
    return {
      status: "error",
      message: "El servicio de email no está configurado todavía. Llámanos al " + siteConfig.contact.phone,
    };
  }

  try {
    const resend = new Resend(apiKey);

    const subject = `[Web] ${serviceLabels[data.service]} · ${cityLabels[data.city]} · ${data.name}`;

    const html = renderEmailHtml(data);
    const text = renderEmailText(data);

    const { error } = await resend.emails.send({
      from,
      to: inbox,
      subject,
      replyTo: data.email || undefined,
      html,
      text,
    });

    if (error) {
      console.error("[contacto] Resend error:", error);
      return {
        status: "error",
        message:
          "No hemos podido enviar tu mensaje. Llámanos al " +
          siteConfig.contact.phone +
          " o escríbenos por WhatsApp.",
      };
    }

    return {
      status: "success",
      message:
        "Mensaje enviado correctamente. Te contactaremos lo antes posible — normalmente en menos de 24 horas en horario laboral.",
    };
  } catch (err) {
    console.error("[contacto] error inesperado:", err);
    return {
      status: "error",
      message:
        "Ha ocurrido un error inesperado. Llámanos al " + siteConfig.contact.phone + " y te atendemos al momento.",
    };
  }
}

function renderEmailHtml(d: ContactInput) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;color:#475569;font-size:13px;font-family:Inter,Arial">${label}</td><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;font-size:13px;font-family:Inter,Arial;color:#0f172a"><strong>${escapeHtml(
      value,
    )}</strong></td></tr>`;

  return `<!doctype html>
<html><body style="margin:0;padding:24px;background:#f5f5f4;font-family:Inter,Arial,sans-serif">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e7e5e4">
    <div style="padding:20px 24px;background:linear-gradient(135deg,#1E3A8A,#172554);color:#fff">
      <p style="margin:0;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#a5b4fc">Nuevo contacto · ServiPlusUltra</p>
      <h1 style="margin:8px 0 0;font-size:20px;font-weight:700">${escapeHtml(d.name)}</h1>
      <p style="margin:4px 0 0;font-size:13px;color:#cbd5e1">${cityLabels[d.city]} · ${serviceLabels[d.service]}</p>
    </div>
    <table style="width:100%;border-collapse:collapse">
      ${row("Teléfono", d.phone)}
      ${row("Email", d.email || "—")}
      ${row("Ciudad", cityLabels[d.city])}
      ${row("Servicio", serviceLabels[d.service])}
      ${row("Urgencia", urgencyLabels[d.urgency])}
    </table>
    <div style="padding:16px 24px;background:#fafaf9;border-top:1px solid #e7e5e4">
      <p style="margin:0 0 8px;font-size:12px;color:#78716c;text-transform:uppercase;letter-spacing:0.1em">Mensaje</p>
      <p style="margin:0;font-size:14px;line-height:1.5;color:#0f172a;white-space:pre-wrap">${escapeHtml(
        d.message,
      )}</p>
    </div>
    <div style="padding:14px 24px;background:#0f172a;color:#94a3b8;font-size:11px">
      Recibido vía formulario web · serviplusultra.es
    </div>
  </div>
</body></html>`;
}

function renderEmailText(d: ContactInput) {
  return [
    "Nuevo contacto desde la web ServiPlusUltra",
    "----------------------------------------",
    `Nombre:    ${d.name}`,
    `Teléfono:  ${d.phone}`,
    `Email:     ${d.email || "—"}`,
    `Ciudad:    ${cityLabels[d.city]}`,
    `Servicio:  ${serviceLabels[d.service]}`,
    `Urgencia:  ${urgencyLabels[d.urgency]}`,
    "",
    "Mensaje:",
    d.message,
    "",
    "—",
    "Recibido vía formulario web",
  ].join("\n");
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

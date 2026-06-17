"use client";

import { useEffect, useRef } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/(site)/contacto/actions";
import { cn } from "@/lib/cn";

const initialState: ContactFormState = { status: "idle" };

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  const errors =
    state.status === "error" ? state.fieldErrors ?? {} : ({} as Record<string, string[]>);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="grid gap-5 rounded-3xl border-2 border-ink-900 bg-cream-50 p-6 shadow-sticker sm:p-8"
      noValidate
    >
      {/* Honeypot — invisible para usuarios reales */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nombre" name="name" error={errors.name}>
          <input
            type="text"
            name="name"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className="form-input"
          />
        </Field>
        <Field label="Teléfono" name="phone" error={errors.phone}>
          <input
            type="tel"
            name="phone"
            required
            inputMode="tel"
            autoComplete="tel"
            placeholder="+34 6XX XXX XXX"
            className="form-input"
          />
        </Field>
      </div>

      <Field label="Email" name="email" optional error={errors.email}>
        <input
          type="email"
          name="email"
          autoComplete="email"
          placeholder="tu@email.com"
          className="form-input"
        />
      </Field>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ciudad" name="city" error={errors.city}>
          <select name="city" required defaultValue="" className="form-input">
            <option value="" disabled>
              Selecciona ciudad
            </option>
            <option value="madrid">Madrid</option>
            <option value="barcelona">Barcelona</option>
            <option value="otra">Otra zona</option>
          </select>
        </Field>
        <Field label="Servicio" name="service" error={errors.service}>
          <select name="service" required defaultValue="" className="form-input">
            <option value="" disabled>
              Selecciona servicio
            </option>
            <option value="electricidad">Electricidad</option>
            <option value="climatizacion">Climatización</option>
            <option value="manitas">Reparaciones / manitas</option>
            <option value="otro">Otro / no estoy seguro</option>
          </select>
        </Field>
      </div>

      <Field label="¿Cuándo lo necesitas?" name="urgency" error={errors.urgency}>
        <div className="grid gap-2 sm:grid-cols-3">
          <UrgencyOption value="urgente" label="🔥 Urgente · hoy" />
          <UrgencyOption value="esta-semana" label="Esta semana" />
          <UrgencyOption value="puedo-esperar" label="Puedo esperar" defaultChecked />
        </div>
      </Field>

      <Field
        label="Cuéntanos qué necesitas"
        name="message"
        error={errors.message}
        hint="Cuanta más información, mejor. Si puedes, indica si es vivienda, comunidad o negocio."
      >
        <textarea
          name="message"
          required
          rows={5}
          minLength={10}
          maxLength={2000}
          placeholder="Ej: Aire acondicionado del salón no enfría desde ayer. Vivienda en Eixample. Modelo Daikin de 2018…"
          className="form-input min-h-[140px] resize-y"
        />
      </Field>

      <div className="rounded-2xl border-2 border-ink-900/15 bg-cream-100 p-4 text-xs leading-relaxed text-ink-600">
        <strong className="font-bold text-ink-800">Información básica sobre protección de datos.</strong>{" "}
        Responsable: ServiPlusUltra Solutions S.L. Finalidad: atender tu solicitud de presupuesto o
        contacto. Legitimación: tu consentimiento. Destinatarios: proveedores de email y hosting
        (Resend y Vercel, con garantías adecuadas). Derechos: acceso, rectificación, supresión y
        demás detallados en la{" "}
        <a href="/privacidad" className="font-bold text-brand-700 underline hover:text-coral-600">
          Política de privacidad
        </a>
        .
      </div>

      <label className="flex items-start gap-3 text-sm text-ink-700">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 cursor-pointer rounded border-2 border-ink-900 text-brand-600 focus:ring-brand-600"
        />
        <span>
          He leído y acepto la{" "}
          <a href="/privacidad" className="font-bold text-brand-700 underline hover:text-coral-600">
            política de privacidad
          </a>{" "}
          y consiento que ServiPlusUltra Solutions S.L. trate mis datos para contactarme.
        </span>
      </label>
      {errors.consent && (
        <p className="-mt-3 text-xs font-bold text-coral-600">{errors.consent[0]}</p>
      )}

      {state.status === "error" && (
        <div className="flex items-start gap-2.5 rounded-2xl border-2 border-ink-900 bg-coral-500 p-4 text-sm font-semibold text-white shadow-sticker">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{state.message}</span>
        </div>
      )}
      {state.status === "success" && (
        <div className="flex items-start gap-2.5 rounded-2xl border-2 border-ink-900 bg-mint-100 p-4 text-sm font-semibold text-ink-900 shadow-sticker">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-mint-600" />
          <span>{state.message}</span>
        </div>
      )}

      <SubmitButton />
    </form>
  );
}

function Field({
  label,
  name,
  children,
  error,
  hint,
  optional,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
  error?: string[];
  hint?: string;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="flex items-center justify-between text-sm font-bold text-ink-800">
        {label}
        {optional && <span className="text-xs font-semibold text-ink-500">(opcional)</span>}
      </span>
      <div className="mt-2">{children}</div>
      {hint && !error?.length && <p className="mt-1.5 text-xs text-ink-600">{hint}</p>}
      {error && error.length > 0 && (
        <p className="mt-1.5 text-xs font-bold text-coral-600">{error[0]}</p>
      )}
    </label>
  );
}

function UrgencyOption({
  value,
  label,
  defaultChecked,
}: {
  value: string;
  label: string;
  defaultChecked?: boolean;
}) {
  return (
    <label className="relative cursor-pointer">
      <input
        type="radio"
        name="urgency"
        value={value}
        defaultChecked={defaultChecked}
        className="peer sr-only"
      />
      <span
        className={cn(
          "flex items-center justify-center rounded-2xl border-2 border-ink-900 bg-cream-50 px-3 py-2.5 text-sm font-bold text-ink-800 transition",
          "peer-checked:bg-sun-400 peer-checked:text-ink-900 peer-checked:shadow-sticker",
          "peer-focus-visible:ring-2 peer-focus-visible:ring-brand-600",
          "hover:bg-cream-100",
        )}
      >
        {label}
      </span>
    </label>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink-900 bg-sun-400 px-7 py-3.5 text-base font-bold text-ink-900 shadow-sticker transition hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_rgba(26,26,26,1)] disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          Enviando…
        </>
      ) : (
        <>
          <Send className="h-5 w-5" />
          Enviar mensaje
        </>
      )}
    </button>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import { Heart, Send, CheckCircle2, AlertCircle, Phone, MessageCircle } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/config";
import type { Locale } from "@/i18n/config";

interface PrayerDict {
  ariaLabel: string;
  successAriaLabel: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  confidentiality: { title: string; text: string };
  intercessors: { title: string; text: string };
  followUp: { title: string; text: string };
  scripture: string;
  scriptureRef: string;
  formTitle: string;
  formSubtitle: string;
  nameLabel: string;
  namePlaceholder: string;
  nameHelp: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  contactOptionalHelp: string;
  requestLabel: string;
  requestPlaceholder: string;
  requestCounter: string;
  privateLabel: string;
  noticeText: string;
  noticeEmergency: string;
  privacyLinkLabel: string;
  consentPre: string;
  consentLinkText: string;
  consentPost: string;
  requiredError: string;
  consentRequiredError: string;
  sendButton: string;
  sending: string;
  successTitle: string;
  successMessage: string;
  successScripture: string;
  sendAnother: string;
  errorTitle: string;
  errorMessage: string;
  retryButton: string;
  callUs: string;
  whatsappUs: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  request: string;
  isPrivate: boolean;
  consent: boolean;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  request: "",
  isPrivate: true,
  consent: false,
};

// Obfuscated recipient — assembled at runtime to reduce email harvesting
const R = ["adoram", "lares", "@", "gmail", ".com"].join("");
const COOLDOWN_MS = 60_000;
const REQUEST_MAX_LENGTH = 2000;
const FETCH_TIMEOUT_MS = 15_000;

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

type Status = "idle" | "loading" | "success" | "error";

export default function PrayerRequestSection({ locale, dict }: { locale: Locale; dict: PrayerDict }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>("idle");
  const [lastSubmit, setLastSubmit] = useState(0);
  const [fieldErrors, setFieldErrors] = useState<{ name?: boolean; request?: boolean; consent?: boolean }>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const requestRef = useRef<HTMLTextAreaElement>(null);
  const consentRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Cancel any in-flight request/timeout if the component unmounts mid-submit
  useEffect(() => {
    return () => {
      abortRef.current?.abort();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const validate = (): boolean => {
    const errors: typeof fieldErrors = {};
    if (!form.name.trim()) errors.name = true;
    if (!form.request.trim()) errors.request = true;
    if (!form.consent) errors.consent = true;
    setFieldErrors(errors);

    if (errors.name) nameRef.current?.focus();
    else if (errors.request) requestRef.current?.focus();
    else if (errors.consent) consentRef.current?.focus();

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return; // prevent double submit
    if (Date.now() - lastSubmit < COOLDOWN_MS) return; // only armed after a real success
    if (!validate()) return;

    setStatus("loading");

    const controller = new AbortController();
    abortRef.current = controller;
    timeoutRef.current = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

    try {
      const response = await fetch(`https://formsubmit.co/${R}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          name: sanitize(form.name),
          email: sanitize(form.email) || "No proporcionado",
          phone: sanitize(form.phone) || "No proporcionado",
          request: sanitize(form.request).slice(0, REQUEST_MAX_LENGTH),
          private: form.isPrivate ? "Sí, solo equipo pastoral" : "No",
          _subject: `Petición de oración, ${sanitize(form.name)}`,
          _template: "table",
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setLastSubmit(Date.now());
      setStatus("success");
    } catch {
      // Network failure, CORS error, or our own AbortController timeout.
      // No technical detail is shown to the user; the form data is kept intact.
      setStatus("error");
    } finally {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      abortRef.current = null;
    }
  };

  if (status === "success") {
    return (
      <section id="oracion" className="py-20 sm:py-24 bg-warm-50" aria-label={dict.successAriaLabel}>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center" role="status" aria-live="polite">
          <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-emerald-600" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">{dict.successTitle}</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">{dict.successMessage}</p>
          <p className="text-gold-600 font-serif text-xl italic">{dict.successScripture}</p>
          <button
            onClick={() => {
              setStatus("idle");
              setForm(initialState);
              setFieldErrors({});
            }}
            className="mt-8 text-navy-600 hover:text-navy-800 font-semibold text-sm underline underline-offset-2 transition-colors rounded focus-ring"
          >
            {dict.sendAnother}
          </button>
        </div>
      </section>
    );
  }

  const bullets = [dict.confidentiality, dict.intercessors, dict.followUp];
  const isLoading = status === "loading";

  return (
    <section id="oracion" className="py-20 sm:py-24 bg-warm-50" aria-label={dict.ariaLabel}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <SectionHeader eyebrow={dict.eyebrow} title={dict.title} subtitle={dict.subtitle} centered={false} />
            <div className="mt-10 space-y-6">
              {bullets.map((b) => (
                <div key={b.title} className="flex items-start gap-4">
                  <Heart size={20} className="text-burgundy-500 mt-0.5 shrink-0 fill-burgundy-200" />
                  <div>
                    <p className="font-bold text-navy-800 text-sm mb-1">{b.title}</p>
                    <p className="text-slate-500 text-sm leading-relaxed">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <blockquote className="mt-10 bg-gold-50 border border-gold-200 rounded-xl p-5">
              <p className="font-serif text-navy-700 text-base italic leading-relaxed">&quot;{dict.scripture}&quot;</p>
              <footer className="mt-2 text-gold-600 font-bold text-xs tracking-wide uppercase">{dict.scriptureRef}</footer>
            </blockquote>
          </div>

          <div className="bg-white rounded-2xl shadow-card border border-warm-200 p-6 sm:p-8">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-1">{dict.formTitle}</h3>
            <p className="text-slate-500 text-sm mb-6">{dict.formSubtitle}</p>

            {status === "error" && (
              <div role="alert" className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-red-600 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <p className="font-bold text-red-800 text-sm">{dict.errorTitle}</p>
                    <p className="text-red-700 text-sm mt-1 leading-relaxed">{dict.errorMessage}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-3">
                      <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-1.5 text-red-800 font-semibold text-sm hover:text-red-900 underline underline-offset-2 rounded focus-ring">
                        <Phone size={14} />
                        {dict.callUs}
                      </a>
                      <a
                        href={siteConfig.social.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-red-800 font-semibold text-sm hover:text-red-900 underline underline-offset-2 rounded focus-ring"
                      >
                        <MessageCircle size={14} />
                        {dict.whatsappUs}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy-700 mb-1.5">{dict.nameLabel}</label>
                <input
                  ref={nameRef}
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder={dict.namePlaceholder}
                  aria-required="true"
                  aria-invalid={fieldErrors.name ? "true" : undefined}
                  aria-describedby={fieldErrors.name ? "name-error name-help" : "name-help"}
                  className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 outline-none text-sm transition-colors bg-warm-50 focus:bg-white ${
                    fieldErrors.name ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-warm-300 focus:border-navy-400 focus:ring-navy-200"
                  }`}
                />
                <p id="name-help" className="text-xs text-warm-500 mt-1">{dict.nameHelp}</p>
                {fieldErrors.name && (
                  <p id="name-error" className="text-xs text-red-600 font-semibold mt-1">{dict.requiredError}</p>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy-700 mb-1.5">{dict.emailLabel}</label>
                  <input type="email" id="email" name="email" value={form.email} onChange={handleChange} placeholder={dict.emailPlaceholder} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-200 outline-none text-sm transition-colors bg-warm-50 focus:bg-white" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy-700 mb-1.5">{dict.phoneLabel}</label>
                  <input type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder={dict.phonePlaceholder} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-200 outline-none text-sm transition-colors bg-warm-50 focus:bg-white" />
                </div>
              </div>
              <p className="text-xs text-warm-500 -mt-2">{dict.contactOptionalHelp}</p>
              <div>
                <label htmlFor="request" className="block text-sm font-semibold text-navy-700 mb-1.5">{dict.requestLabel}</label>
                <textarea
                  ref={requestRef}
                  id="request"
                  name="request"
                  value={form.request}
                  onChange={handleChange}
                  rows={5}
                  maxLength={REQUEST_MAX_LENGTH}
                  placeholder={dict.requestPlaceholder}
                  aria-required="true"
                  aria-invalid={fieldErrors.request ? "true" : undefined}
                  aria-describedby={fieldErrors.request ? "request-error request-counter" : "request-counter"}
                  className={`w-full px-4 py-2.5 rounded-lg border focus:ring-2 outline-none text-sm transition-colors bg-warm-50 focus:bg-white resize-none ${
                    fieldErrors.request ? "border-red-400 focus:border-red-500 focus:ring-red-200" : "border-warm-300 focus:border-navy-400 focus:ring-navy-200"
                  }`}
                />
                <div className="flex items-center justify-between mt-1">
                  {fieldErrors.request ? (
                    <p id="request-error" className="text-xs text-red-600 font-semibold">{dict.requiredError}</p>
                  ) : (
                    <span />
                  )}
                  <p id="request-counter" className="text-xs text-warm-400">
                    {form.request.length}/{REQUEST_MAX_LENGTH} {dict.requestCounter}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="isPrivate" name="isPrivate" checked={form.isPrivate} onChange={handleChange} className="mt-0.5 accent-navy-600" />
                <label htmlFor="isPrivate" className="text-sm text-slate-600 leading-relaxed cursor-pointer">{dict.privateLabel}</label>
              </div>

              <div className="rounded-lg bg-warm-50 border border-warm-200 p-3.5">
                <p className="text-xs text-slate-500 leading-relaxed">{dict.noticeText}</p>
                <p className="text-xs text-slate-500 leading-relaxed mt-1.5">{dict.noticeEmergency}</p>
              </div>

              <div className="flex items-start gap-3">
                <input
                  ref={consentRef}
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  aria-required="true"
                  aria-invalid={fieldErrors.consent ? "true" : undefined}
                  aria-describedby={fieldErrors.consent ? "consent-error" : undefined}
                  className="mt-0.5 accent-navy-600"
                />
                <label htmlFor="consent" className="text-sm text-slate-600 leading-relaxed cursor-pointer">
                  {dict.consentPre}
                  <a
                    href={`/${locale}/privacidad`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-700 underline underline-offset-2 hover:text-navy-900 rounded focus-ring"
                  >
                    {dict.consentLinkText}
                  </a>
                  {dict.consentPost}
                </label>
              </div>
              {fieldErrors.consent && (
                <p id="consent-error" className="text-xs text-red-600 font-semibold -mt-3">{dict.consentRequiredError}</p>
              )}

              <Button type="submit" variant="gold" size="lg" fullWidth disabled={isLoading} className="mt-2" aria-busy={isLoading}>
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                    {dict.sending}
                  </span>
                ) : status === "error" ? (
                  <><Send size={16} />{dict.retryButton}</>
                ) : (
                  <><Send size={16} />{dict.sendButton}</>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

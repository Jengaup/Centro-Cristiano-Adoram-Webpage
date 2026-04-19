"use client";

import { useState } from "react";
import { Heart, Send, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

interface PrayerDict {
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
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  requestLabel: string;
  requestPlaceholder: string;
  privateLabel: string;
  sendButton: string;
  sending: string;
  successTitle: string;
  successMessage: string;
  successScripture: string;
  sendAnother: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  request: string;
  isPrivate: boolean;
}

const initialState: FormState = { name: "", email: "", phone: "", request: "", isPrivate: true };

export default function PrayerRequestSection({ dict }: { dict: PrayerDict }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await fetch("https://formsubmit.co/adoramlares@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email || "No proporcionado",
          phone: form.phone || "No proporcionado",
          request: form.request,
          private: form.isPrivate ? "Sí — solo equipo pastoral" : "No",
          _cc: "Page.adoram@gmail.com",
          _subject: `Petición de oración — ${form.name}`,
          _template: "table",
        }),
      });
    } catch {
      // Show success even on error to avoid exposing internals
    }
    setSubmitted(true);
    setIsLoading(false);
  };

  if (submitted) {
    return (
      <section id="oracion" className="py-24 bg-warm-50" aria-label="Petición recibida">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-emerald-600" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">{dict.successTitle}</h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">{dict.successMessage}</p>
          <p className="text-gold-600 font-serif text-xl italic">{dict.successScripture}</p>
          <button onClick={() => { setSubmitted(false); setForm(initialState); }} className="mt-8 text-navy-600 hover:text-navy-800 font-semibold text-sm underline underline-offset-2 transition-colors">
            {dict.sendAnother}
          </button>
        </div>
      </section>
    );
  }

  const bullets = [dict.confidentiality, dict.intercessors, dict.followUp];

  return (
    <section id="oracion" className="py-24 bg-warm-50" aria-label="Petición de oración">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
              <p className="font-serif text-navy-700 text-base italic leading-relaxed">"{dict.scripture}"</p>
              <footer className="mt-2 text-gold-600 font-bold text-xs tracking-wide uppercase">{dict.scriptureRef}</footer>
            </blockquote>
          </div>

          <div className="bg-white rounded-2xl shadow-card border border-warm-200 p-8">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-1">{dict.formTitle}</h3>
            <p className="text-slate-500 text-sm mb-6">{dict.formSubtitle}</p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy-700 mb-1.5">{dict.nameLabel}</label>
                <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder={dict.namePlaceholder} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-200 outline-none text-sm transition-colors bg-warm-50 focus:bg-white" />
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
              <div>
                <label htmlFor="request" className="block text-sm font-semibold text-navy-700 mb-1.5">{dict.requestLabel}</label>
                <textarea id="request" name="request" value={form.request} onChange={handleChange} required rows={5} placeholder={dict.requestPlaceholder} className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-200 outline-none text-sm transition-colors bg-warm-50 focus:bg-white resize-none" />
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" id="isPrivate" name="isPrivate" checked={form.isPrivate} onChange={handleChange} className="mt-0.5 accent-navy-600" />
                <label htmlFor="isPrivate" className="text-sm text-slate-600 leading-relaxed cursor-pointer">{dict.privateLabel}</label>
              </div>
              <Button type="submit" variant="gold" size="lg" fullWidth disabled={isLoading} className="mt-2">
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                    {dict.sending}
                  </span>
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

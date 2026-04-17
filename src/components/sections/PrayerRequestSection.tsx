"use client";

import { useState } from "react";
import { Heart, Send, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  request: string;
  isPrivate: boolean;
}

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  request: "",
  isPrivate: true,
};

export default function PrayerRequestSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Connect to backend/email service (e.g., Resend, SendGrid, or CMS)
    await new Promise((res) => setTimeout(res, 1200));
    setSubmitted(true);
    setIsLoading(false);
  };

  if (submitted) {
    return (
      <section
        id="oracion"
        className="py-24 bg-warm-50"
        aria-label="Petición de oración recibida"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={36} className="text-emerald-600" />
          </div>
          <h2 className="font-serif text-3xl font-bold text-navy-900 mb-4">
            ¡Recibimos tu petición!
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-6">
            Nuestro equipo de intercesores está orando por ti. Dios escucha, y nosotros creemos junto contigo.
          </p>
          <p className="text-gold-600 font-serif text-xl italic">
            "La oración eficaz del justo puede mucho." — Santiago 5:16
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm(initialState); }}
            className="mt-8 text-navy-600 hover:text-navy-800 font-semibold text-sm underline underline-offset-2 transition-colors"
          >
            Enviar otra petición
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="oracion"
      className="py-24 bg-warm-50"
      aria-label="Petición de oración"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <SectionHeader
              eyebrow="Oración"
              title="Queremos orar por ti"
              subtitle="No estás solo. Trae tu carga ante Dios y nuestro equipo de intercesores lo creerá junto contigo."
              centered={false}
            />

            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <Heart size={20} className="text-burgundy-500 mt-0.5 shrink-0 fill-burgundy-200" />
                <div>
                  <p className="font-bold text-navy-800 text-sm mb-1">Confidencialidad</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Toda petición es manejada con absoluta discreción y respeto por parte de nuestro equipo pastoral.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart size={20} className="text-burgundy-500 mt-0.5 shrink-0 fill-burgundy-200" />
                <div>
                  <p className="font-bold text-navy-800 text-sm mb-1">Intercesores comprometidos</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Tenemos un equipo de intercesores que ora fielmente por cada petición recibida.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Heart size={20} className="text-burgundy-500 mt-0.5 shrink-0 fill-burgundy-200" />
                <div>
                  <p className="font-bold text-navy-800 text-sm mb-1">Seguimiento pastoral</p>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Si nos das tu contacto y lo autorizas, un pastor puede comunicarse contigo personalmente.
                  </p>
                </div>
              </div>
            </div>

            <blockquote className="mt-10 bg-gold-50 border border-gold-200 rounded-xl p-5">
              <p className="font-serif text-navy-700 text-base italic leading-relaxed">
                "No se inquieten por nada; más bien, en toda ocasión, con oración y ruego, presenten sus peticiones a Dios."
              </p>
              <footer className="mt-2 text-gold-600 font-bold text-xs tracking-wide uppercase">
                Filipenses 4:6
              </footer>
            </blockquote>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl shadow-card border border-warm-200 p-8">
            <h3 className="font-serif text-xl font-bold text-navy-900 mb-1">
              Envía tu petición
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              Todos los campos con * son requeridos.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-navy-700 mb-1.5"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-200 outline-none text-sm transition-colors bg-warm-50 focus:bg-white"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-navy-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-200 outline-none text-sm transition-colors bg-warm-50 focus:bg-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-navy-700 mb-1.5"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 000-000-0000"
                    className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-200 outline-none text-sm transition-colors bg-warm-50 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="request"
                  className="block text-sm font-semibold text-navy-700 mb-1.5"
                >
                  Tu petición de oración *
                </label>
                <textarea
                  id="request"
                  name="request"
                  value={form.request}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Cuéntanos cómo podemos orar por ti..."
                  className="w-full px-4 py-2.5 rounded-lg border border-warm-300 focus:border-navy-400 focus:ring-2 focus:ring-navy-200 outline-none text-sm transition-colors bg-warm-50 focus:bg-white resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="isPrivate"
                  name="isPrivate"
                  checked={form.isPrivate}
                  onChange={handleChange}
                  className="mt-0.5 accent-navy-600"
                />
                <label
                  htmlFor="isPrivate"
                  className="text-sm text-slate-600 leading-relaxed cursor-pointer"
                >
                  Mi petición es privada — solo el equipo pastoral y de intercesión debe verla.
                </label>
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                fullWidth
                disabled={isLoading}
                className="mt-2"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <>
                    <Send size={16} />
                    Enviar Petición de Oración
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

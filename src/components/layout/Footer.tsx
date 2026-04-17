import Link from "next/link";
import { MapPin, Clock, Phone, Mail, Youtube, Facebook, Instagram, MessageCircle, Heart } from "lucide-react";
import { siteConfig } from "@/data/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      {/* Top divider wave */}
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500 flex items-center justify-center">
                <span className="text-navy-950 font-serif font-bold text-xl">A</span>
              </div>
              <div>
                <p className="text-white font-serif font-bold text-base leading-tight">
                  Centro Cristiano
                </p>
                <p className="text-gold-400 font-bold text-sm tracking-widest uppercase">
                  Adoram
                </p>
              </div>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed mb-5">
              Una familia de fe apostólica protestante comprometida con adorar a Dios, crecer en su Palabra y transformar nuestras comunidades.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-red-600 flex items-center justify-center transition-colors"
              >
                <Youtube size={16} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-pink-600 flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-green-600 flex items-center justify-center transition-colors"
              >
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Service times */}
          <div>
            <h3 className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">
              Horarios de Servicio
            </h3>
            <ul className="space-y-3">
              {siteConfig.serviceTimes.map((service) => (
                <li key={service.name} className="flex items-start gap-2.5">
                  <Clock size={14} className="mt-1 text-gold-500 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{service.name}</p>
                    <p className="text-navy-200 text-xs">
                      {service.day} — {service.time}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Inicio", href: "/" },
                { label: "Nosotros", href: "/#nosotros" },
                { label: "Ministerios", href: "/#ministerios" },
                { label: "Eventos", href: "/#eventos" },
                { label: "Devocionales", href: "/devocionales" },
                { label: "Planifica tu Visita", href: "/visitar" },
                { label: "Petición de Oración", href: "/#oracion" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-navy-200 hover:text-gold-300 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-1 text-gold-500 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Dirección</p>
                  <a
                    href={siteConfig.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy-200 text-xs hover:text-gold-300 transition-colors"
                  >
                    {siteConfig.address.street}<br />
                    {siteConfig.address.city}, {siteConfig.address.state}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="mt-1 text-gold-500 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Teléfono</p>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-navy-200 text-xs hover:text-gold-300 transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="mt-1 text-gold-500 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="text-navy-200 text-xs hover:text-gold-300 transition-colors"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-300">
          <p>
            © {currentYear} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5">
            Hecho con{" "}
            <Heart size={12} className="text-red-400 fill-red-400" />
            {" "}para la gloria de Dios
          </p>
        </div>
      </div>
    </footer>
  );
}

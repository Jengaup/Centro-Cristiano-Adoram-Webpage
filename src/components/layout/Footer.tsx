import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Phone, Mail, Youtube, Facebook, Instagram, MessageCircle, Heart } from "lucide-react";
import { siteConfig } from "@/data/config";
import type { Locale } from "@/i18n/config";

interface FooterDict {
  tagline: string;
  schedulesTitle: string;
  navigationTitle: string;
  contactTitle: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
  copyright: string;
  madeWith: string;
  madeWithEnd: string;
  links: {
    home: string;
    about: string;
    ministries: string;
    events: string;
    devotionals: string;
    planVisit: string;
    prayerRequest: string;
  };
}

interface Props {
  locale: Locale;
  dict: FooterDict;
}

export default function Footer({ locale, dict }: Props) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white">
      <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-40" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <Image
                src="/logo.png"
                alt="Centro Cristiano Adoram"
                width={48}
                height={48}
                className="rounded-lg object-contain"
              />
              <div>
                <p className="text-white font-serif font-bold text-base leading-tight">Centro Cristiano</p>
                <p className="text-gold-400 font-bold text-sm tracking-widest uppercase">Adoram</p>
              </div>
            </div>
            <p className="text-navy-200 text-sm leading-relaxed mb-5">{dict.tagline}</p>
            <div className="flex items-center gap-3">
              {[
                { href: siteConfig.social.youtube, label: "YouTube", icon: Youtube, hover: "hover:bg-red-600" },
                { href: siteConfig.social.facebook, label: "Facebook", icon: Facebook, hover: "hover:bg-blue-600" },
                { href: siteConfig.social.instagram, label: "Instagram", icon: Instagram, hover: "hover:bg-pink-600" },
                { href: siteConfig.social.whatsapp, label: "WhatsApp", icon: MessageCircle, hover: "hover:bg-green-600" },
              ].map(({ href, label, icon: Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg bg-white/10 ${hover} flex items-center justify-center transition-colors`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Service times */}
          <div>
            <h3 className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">{dict.schedulesTitle}</h3>
            <ul className="space-y-3">
              {siteConfig.serviceTimes.map((service) => (
                <li key={service.name} className="flex items-start gap-2.5">
                  <Clock size={14} className="mt-1 text-gold-500 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium">{service.name}</p>
                    <p className="text-navy-200 text-xs">{service.day} — {service.time}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">{dict.navigationTitle}</h3>
            <ul className="space-y-2">
              {[
                { label: dict.links.home, href: `/${locale}` },
                { label: dict.links.about, href: `/${locale}#nosotros` },
                { label: dict.links.ministries, href: `/${locale}#ministerios` },
                { label: dict.links.events, href: `/${locale}#eventos` },
                { label: dict.links.devotionals, href: `/${locale}/devocionales` },
                { label: dict.links.planVisit, href: `/${locale}/visitar` },
                { label: dict.links.prayerRequest, href: `/${locale}#oracion` },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-navy-200 hover:text-gold-300 text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold-400 font-bold text-xs tracking-widest uppercase mb-4">{dict.contactTitle}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="mt-1 text-gold-500 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">{dict.addressLabel}</p>
                  <a href={siteConfig.address.mapsUrl} target="_blank" rel="noopener noreferrer" className="text-navy-200 text-xs hover:text-gold-300 transition-colors">
                    {siteConfig.address.street}<br />{siteConfig.address.city}, {siteConfig.address.state}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="mt-1 text-gold-500 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">{dict.phoneLabel}</p>
                  <a href={`tel:${siteConfig.phone}`} className="text-navy-200 text-xs hover:text-gold-300 transition-colors">{siteConfig.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="mt-1 text-gold-500 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium">{dict.emailLabel}</p>
                  <a href={`mailto:${siteConfig.contactEmail}`} className="text-navy-200 text-xs hover:text-gold-300 transition-colors">{siteConfig.contactEmail}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-navy-300">
          <p>© {currentYear} {siteConfig.name}. {dict.copyright}</p>
          <p className="flex items-center gap-1.5">
            {dict.madeWith} <Heart size={12} className="text-red-400 fill-red-400" /> {dict.madeWithEnd}
          </p>
        </div>
      </div>
    </footer>
  );
}

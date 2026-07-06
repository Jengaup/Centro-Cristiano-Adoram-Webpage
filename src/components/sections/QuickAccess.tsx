import Link from "next/link";
import { Clock, MapPin, Youtube, Heart, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";
import type { Locale } from "@/i18n/config";

interface QuickDict {
  ariaLabel: string;
  schedules: string;
  schedulesDesc: string;
  location: string;
  locationDesc: string;
  stream: string;
  streamDesc: string;
  prayer: string;
  prayerDesc: string;
  whatsapp: string;
  whatsappDesc: string;
}

interface Props {
  locale: Locale;
  dict: QuickDict;
}

export default function QuickAccess({ locale, dict }: Props) {
  const items = [
    { icon: Clock, label: dict.schedules, description: dict.schedulesDesc, href: `/${locale}#eventos`, bgColor: "bg-navy-600", hoverColor: "hover:bg-navy-700" },
    { icon: MapPin, label: dict.location, description: dict.locationDesc, href: siteConfig.address.mapsUrl, external: true, bgColor: "bg-navy-700", hoverColor: "hover:bg-navy-800" },
    { icon: Youtube, label: dict.stream, description: dict.streamDesc, href: siteConfig.social.youtube, external: true, bgColor: "bg-red-600", hoverColor: "hover:bg-red-700" },
    { icon: Heart, label: dict.prayer, description: dict.prayerDesc, href: `/${locale}#oracion`, bgColor: "bg-burgundy-500", hoverColor: "hover:bg-burgundy-600" },
    { icon: MessageCircle, label: dict.whatsapp, description: dict.whatsappDesc, href: siteConfig.social.whatsapp, external: true, bgColor: "bg-green-600", hoverColor: "hover:bg-green-700" },
  ] as const;

  return (
    <section className="relative z-20 -mt-8 mb-0 px-4 sm:px-6 lg:px-8" aria-label={dict.ariaLabel}>
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl shadow-navy overflow-hidden border border-warm-200">
          {/* gap-px sobre fondo warm crea divisores finos que funcionan en cualquier grid */}
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-warm-200">
            {items.map((item, idx) => {
              const Icon = item.icon;
              const isLast = idx === items.length - 1;
              const tileClasses = `group block bg-white ${isLast ? "col-span-2 lg:col-span-1" : ""} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-inset`;
              const inner = (
                <div className="flex flex-col items-center text-center p-5 gap-3 group-hover:bg-warm-50 transition-colors h-full">
                  <div className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.hoverColor} flex items-center justify-center shadow-sm transition-all duration-200 group-hover:scale-110`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-800 text-sm">{item.label}</p>
                    <p className="text-warm-500 text-xs mt-0.5">{item.description}</p>
                  </div>
                </div>
              );
              if ("external" in item && item.external) {
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={tileClasses}>
                    {inner}
                  </a>
                );
              }
              return (
                <Link key={item.label} href={item.href} className={tileClasses}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

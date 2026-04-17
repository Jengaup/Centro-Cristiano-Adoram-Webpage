import Link from "next/link";
import { Clock, MapPin, Youtube, Heart, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/config";

const items = [
  {
    icon: Clock,
    label: "Horarios",
    description: "Dom 10 AM · Mié 7 PM",
    href: "/#servicios",
    bgColor: "bg-navy-600",
    hoverColor: "hover:bg-navy-700",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    description: "Cómo llegar",
    href: siteConfig.address.mapsUrl,
    external: true,
    bgColor: "bg-navy-700",
    hoverColor: "hover:bg-navy-800",
  },
  {
    icon: Youtube,
    label: "Ver Transmisión",
    description: "En vivo y grabaciones",
    href: siteConfig.social.youtube,
    external: true,
    bgColor: "bg-red-600",
    hoverColor: "hover:bg-red-700",
  },
  {
    icon: Heart,
    label: "Petición de Oración",
    description: "Queremos orar por ti",
    href: "/#oracion",
    bgColor: "bg-burgundy-500",
    hoverColor: "hover:bg-burgundy-600",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description: "Escríbenos ahora",
    href: siteConfig.social.whatsapp,
    external: true,
    bgColor: "bg-green-600",
    hoverColor: "hover:bg-green-700",
  },
];

export default function QuickAccess() {
  return (
    <section
      className="relative z-20 -mt-8 mb-0 px-4 sm:px-6 lg:px-8"
      aria-label="Acceso rápido"
    >
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-navy overflow-hidden border border-warm-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-x divide-y sm:divide-y-0 divide-warm-200">
            {items.map((item) => {
              const Icon = item.icon;
              const inner = (
                <div className="flex flex-col items-center text-center p-5 gap-3 h-full group-hover:bg-warm-50 transition-colors">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.bgColor} ${item.hoverColor} flex items-center justify-center shadow-sm transition-all duration-200 group-hover:scale-110`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-navy-800 text-sm">{item.label}</p>
                    <p className="text-warm-500 text-xs mt-0.5">{item.description}</p>
                  </div>
                </div>
              );

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-inset"
                    aria-label={item.label}
                  >
                    {inner}
                  </a>
                );
              }
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-500 focus-visible:ring-inset"
                >
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

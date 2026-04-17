import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4 text-white">
      <div className="text-center max-w-lg">
        <Compass size={56} className="text-gold-400 mx-auto mb-6 opacity-80" />
        <h1 className="font-serif text-5xl font-bold mb-4">404</h1>
        <h2 className="font-serif text-2xl font-bold text-gold-300 mb-4">
          Página no encontrada
        </h2>
        <p className="text-navy-200 text-lg leading-relaxed mb-8">
          Parece que esta página no existe. Pero no estás perdido — Dios sabe exactamente dónde estás.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-lg transition-colors"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

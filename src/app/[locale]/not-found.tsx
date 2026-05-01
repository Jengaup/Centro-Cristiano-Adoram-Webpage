import Link from "next/link";
import { Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-4">
      <div className="text-center text-white max-w-lg">
        <div className="w-20 h-20 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center mx-auto mb-6">
          <Compass size={36} className="text-gold-400" />
        </div>
        <p className="text-gold-400 text-xs font-bold tracking-widest uppercase mb-4">404</p>
        <h1 className="font-serif text-4xl font-bold mb-4">Página no encontrada</h1>
        <p className="text-navy-200 text-lg leading-relaxed mb-8">
          Parece que esta página no existe. Pero no estás perdido, Dios sabe exactamente dónde estás.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-navy-950 font-bold rounded-lg transition-colors"
        >
          <Home size={18} />
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

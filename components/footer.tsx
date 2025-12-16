import { Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <div className="w-12 h-12 border-2 border-neon-green rounded-lg flex items-center justify-center bg-black">
                <span className="text-neon-green text-xs font-bold">NOX</span>
              </div>
              <h3 className="text-xl font-bold text-white">NOX HOUSE</h3>
            </div>
            <p className="text-white/60 text-sm">
              Experiencia nocturna única en San Rafael, Mendoza
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-neon-green font-semibold mb-3">Contacto</h4>
            <div className="space-y-2 text-white/70 text-sm">
              <a
                href="tel:+541112345678"
                className="flex items-center justify-center gap-2 hover:text-neon-green transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+54 11 1234-5678</span>
              </a>
              <a
                href="https://instagram.com/nox.house"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 hover:text-neon-pink transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@nox.house</span>
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="text-neon-green font-semibold mb-3">Ubicación</h4>
            <a
              href="https://maps.google.com/?q=Av.+Hipólito+Yrigoyen+2717,+San+Rafael,+Mendoza"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 text-sm hover:text-neon-green transition-colors inline-flex items-start justify-center md:justify-end gap-2"
            >
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span className="text-left md:text-right">
                Av. Hipólito Yrigoyen 2717
                <br />
                M5600 San Rafael, Mendoza
              </span>
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-white/50 text-sm">
            {new Date().getFullYear()} NOX HOUSE. Todos los derechos reservados.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-neon-green/10 blur-[80px] rounded-full pointer-events-none" />
    </footer>
  );
}

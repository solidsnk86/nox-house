"use client";

import { MapPin, Phone, Instagram, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="text-neon-pink">Contacto</span> & Ubicación
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            ¿Tenés alguna consulta? ¡Estamos para ayudarte! 
            Contactanos por cualquiera de nuestros canales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info de contacto */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-neon-green mb-4">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+541112345678"
                  className="flex items-center gap-3 text-white/70 hover:text-neon-green transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+54 11 1234-5678</span>
                </a>
                <a
                  href="mailto:info@noxhouse.com"
                  className="flex items-center gap-3 text-white/70 hover:text-neon-green transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@noxhouse.com</span>
                </a>
                <a
                  href="https://instagram.com/nox.house"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-neon-pink transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>@nox.house</span>
                </a>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-neon-green mb-4">
                Horarios de Atención
              </h3>
              <div className="flex items-start gap-3 text-white/70">
                <Clock className="w-5 h-5 mt-0.5" />
                <div>
                  <p>Jueves a Sábado: 23:00 - 06:00</p>
                  <p>Domingos a Miércoles: Cerrado</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-neon-green mb-4">
                Dirección
              </h3>
              <a
                href="https://maps.google.com/?q=Av.+Hipólito+Yrigoyen+2717,+San+Rafael,+Mendoza"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/70 hover:text-neon-green transition-colors"
              >
                <MapPin className="w-5 h-5 mt-0.5" />
                <div>
                  <p>Av. Hipólito Yrigoyen 2717</p>
                  <p>M5600 San Rafael, Mendoza, Argentina</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden h-100 lg:h-full min-h-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d690.3661614890602!2d-68.36321008226874!3d-34.60533973790875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967909007d922485%3A0x895f6295ccf51799!2sLa%20previa%20resto%20bar%20(Centro%20de%20San%20Rafael)!5e0!3m2!1ses-419!2sus!4v1766190882789!5m2!1ses-419!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación NOX HOUSE"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

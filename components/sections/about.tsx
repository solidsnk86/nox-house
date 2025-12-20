"use client";

import { Music, Users, Sparkles, Clock } from "lucide-react";

export function About() {
  const features = [
    {
      icon: Music,
      title: "Música en Vivo",
      description: "Los mejores DJs y artistas locales cada fin de semana"
    },
    {
      icon: Users,
      title: "Ambiente Único",
      description: "Un espacio diseñado para vivir experiencias inolvidables"
    },
    {
      icon: Sparkles,
      title: "Shows Especiales",
      description: "Eventos temáticos y fiestas exclusivas"
    },
    {
      icon: Clock,
      title: "Horarios",
      description: "Jueves a Sábado de 23:00 a 06:00"
    }
  ];

  return (
    <section id="about" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Acerca de <span className="text-neon-pink">NOX HOUSE</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Somos el punto de encuentro de la noche sanrafaelina. Un espacio donde 
            la música, las luces y la energía se fusionan para crear momentos únicos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:border-neon-green/50 transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-neon-green/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-neon-green" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

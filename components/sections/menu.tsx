"use client";

import { MenuSection } from "@/components/menu-section";

export function Menu() {
  return (
    <section id="menu" className="py-16 px-4">
      <div className="w-full sm:max-w-[620px] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Nuestra <span className="text-neon-green">Carta</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Descubrí nuestra selección de tragos clásicos y medidas premium. 
            ¡La mejor coctelería de San Rafael!
          </p>
        </div>
        <MenuSection />
      </div>
    </section>
  );
}

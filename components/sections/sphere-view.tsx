"use client";

import { PhotoSphereViewer } from "@/components/photo-sphere-viewer";

export function SphereView() {
  return (
    <section id="sphere-view" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Explora en <span className="text-neon-green">360°</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Conocé nuestro espacio desde cualquier lugar. Navegá por NOX HOUSE 
            y descubrí cada rincón de nuestra discoteca.
          </p>
        </div>
        <div className="h-[500px] sm:h-[600px] w-full rounded-xl overflow-hidden border border-white/10">
          <PhotoSphereViewer />
        </div>
      </div>
    </section>
  );
}

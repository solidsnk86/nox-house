"use client";

export function Hero() {
  return (
    <section className="relative w-full py-6">
      <div className="w-full relative rounded-xl z-50">
        <div className="p-4">
          <img
            src="/images/nox-house.webp"
            alt="Nox Header"
            className="w-full h-40 sm:h-56 md:h-72 object-cover rounded-2xl"
          />
        </div>
        <div className="absolute top-[80%] left-[50%] translate-x-[-50%] z-50">
          <div className="w-24 h-24 border-4 border-white rounded-xl flex items-center justify-center bg-black">
            <img
              src="/images/nox_house_logo.webp"
              width={200}
              height={200}
              alt="Nox House Logo"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="mt-16 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          NOX <span className="text-neon-green">HOUSE</span>
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          La experiencia nocturna más exclusiva de San Rafael, Mendoza
        </p>
      </div>
    </section>
  );
}

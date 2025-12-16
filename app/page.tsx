"use client";

import { useState } from "react";
import { MenuIcon, Info, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PhotoSphereViewer } from "@/components/photo-sphere-viewer";
import { MenuSection } from "@/components/menu-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <main className="relative min-h-screen bg-black">
        <div className="w-full h-40 sm:h-40 relative rounded-xl">
          <img
            src="/images/nox-hose.webp"
            alt="Nox Header"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute top-[60%] left-[50%] translate-x-[-50%] z-50">
            <div className="w-24 h-24 border-4 border-white rounded-xl flex items-center justify-center">
              <img
                src="/images/nox_house_logo.webp"
                width={200}
                height={200}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="relative backdrop-blur-lg py-8 px-4 -translate-y-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-white/70 flex items-center justify-center gap-2 text-sm mt-12">
              <MapPin size={16} />
              Av. Hipólito Yrigoyen 2717, M5600 San Rafael, Mendoza, Argentina
            </p>
          </div>

          <div className="absolute top-4 right-4 flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-black/80 border-2 border-neon-green text-white hover:text-black backdrop-blur-md transition-all duration-300 font-semibold"
                >
                  <Info className="mr-2 h-5 w-5" />
                  INFO
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black border-neon-green text-white max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-neon-green">
                    Información
                  </DialogTitle>
                  <DialogDescription className="text-white/80 space-y-4 pt-4">
                    <div>
                      <h3 className="text-neon-pink font-semibold text-lg mb-2">
                        Horarios
                      </h3>
                      <p>Jueves a Sábado: 23:00 - 06:00</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                    <div>
                      <h3 className="text-neon-pink font-semibold text-lg mb-2">
                        Ubicación
                      </h3>
                      <p>Av. Hipólito Yrigoyen 2717</p>
                      <p>M5600 San Rafael, Mendoza, Argentina</p>
                    </div>
                    <div>
                      <h3 className="text-neon-pink font-semibold text-lg mb-2">
                        Contacto
                      </h3>
                      <p>Tel: +54 11 1234-5678</p>
                      <p>Instagram: @nox.house</p>
                    </div>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  size="lg"
                  className="bg-neon-green text-black hover:bg-neon-green/80 font-bold transition-all duration-300"
                >
                  <MenuIcon className="mr-2 h-5 w-5" />
                  MENÚ
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black border-neon-green w-full sm:max-w-xl overflow-y-auto p-0"
              >
                <div className="p-6">
                  <SheetHeader className="mb-6">
                    <SheetTitle className="text-3xl text-neon-green font-bold">
                      MENÚ NOX
                    </SheetTitle>
                  </SheetHeader>
                  <MenuSection />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="h-dvh w-full -mt-12">
          <PhotoSphereViewer />
        </div>

        {/* Decorative glow effects */}
        <div className="fixed bottom-0 left-0 w-96 h-96 bg-neon-green/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed top-1/4 right-0 w-96 h-96 bg-neon-pink/20 blur-[120px] rounded-full pointer-events-none" />
      </main>
      <Footer />
    </>
  );
}

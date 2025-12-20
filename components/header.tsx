import { MenuIcon, Info } from "lucide-react";
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
import { MenuSection } from "./menu-section";
import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="relative backdrop-blur-lg py-8 px-4">
      <div className="flex items-center gap-3">
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
              <DialogDescription asChild>
                <div className="text-white/80 space-y-4 pt-4">
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
  );
};

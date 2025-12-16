"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type FilterType = "all" | "clasicos" | "medidas"

const menuItems = {
  clasicos: [
    { name: "Mojito", price: "$8.000", description: "Ron, menta, lima, azúcar" },
    {
      name: "Daiquiri",
      price: "$7.500",
      description: "Ron blanco, lima, jarabe",
    },
    { name: "Piña Colada", price: "$9.000", description: "Ron, piña, coco" },
    {
      name: "Margarita",
      price: "$8.500",
      description: "Tequila, triple sec, lima",
    },
    {
      name: "Caipirinha",
      price: "$8.000",
      description: "Cachaça, lima, azúcar",
    },
    {
      name: "Cosmopolitan",
      price: "$9.500",
      description: "Vodka, cointreau, cranberry",
    },
  ],
  medidas: [
    {
      name: "Fernet Branca",
      price: "$6.000",
      description: "750ml - Amargo italiano",
    },
    {
      name: "Gin Beefeater",
      price: "$12.000",
      description: "750ml - London Dry",
    },
    { name: "Vodka Absolut", price: "$11.000", description: "750ml - Sueco" },
    { name: "Ron Havana Club", price: "$10.000", description: "750ml - Añejo" },
    {
      name: "Whisky Johnnie Walker Red",
      price: "$13.000",
      description: "750ml",
    },
    {
      name: "Tequila Jose Cuervo",
      price: "$11.500",
      description: "750ml - Reposado",
    },
  ],
}

export function MenuSection() {
  const [filter, setFilter] = useState<FilterType>("all")

  const getFilteredItems = () => {
    if (filter === "all") {
      return [
        ...menuItems.clasicos.map((item) => ({ ...item, category: "Clásicos" })),
        ...menuItems.medidas.map((item) => ({ ...item, category: "Medidas" })),
      ]
    }
    return filter === "clasicos"
      ? menuItems.clasicos.map((item) => ({ ...item, category: "Clásicos" }))
      : menuItems.medidas.map((item) => ({ ...item, category: "Medidas" }))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          onClick={() => setFilter("all")}
          className={
            filter === "all"
              ? "bg-neon-green text-black hover:bg-neon-green/90 font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-green/50"
              : "border-2 border-neon-green text-neon-green hover:bg-neon-green hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-neon-green/50 font-semibold"
          }
        >
          TODOS
        </Button>
        <Button
          variant={filter === "clasicos" ? "default" : "outline"}
          onClick={() => setFilter("clasicos")}
          className={
            filter === "clasicos"
              ? "bg-neon-pink text-black hover:bg-neon-pink/90 font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-pink/50"
              : "border-2 border-neon-pink text-neon-pink hover:bg-neon-pink hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/50 font-semibold"
          }
        >
          TRAGOS CLÁSICOS
        </Button>
        <Button
          variant={filter === "medidas" ? "default" : "outline"}
          onClick={() => setFilter("medidas")}
          className={
            filter === "medidas"
              ? "bg-neon-orange text-black hover:bg-neon-orange/90 font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-orange/50"
              : "border-2 border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-black transition-all duration-300 hover:shadow-lg hover:shadow-neon-orange/50 font-semibold"
          }
        >
          MEDIDAS
        </Button>
      </div>

      <div className="grid gap-4">
        {getFilteredItems().map((item, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="bg-black/50 border-2 border-neon-green/30 backdrop-blur-sm p-5 hover:border-neon-green transition-all duration-300 cursor-pointer hover:bg-neon-green/10 hover:shadow-lg hover:shadow-neon-green/30 hover:scale-[1.02]">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                    <p className="text-white/60 text-sm line-clamp-1">{item.description}</p>
                  </div>
                  <Badge className="bg-neon-green text-black font-bold shrink-0 text-base px-3 py-1">
                    {item.price}
                  </Badge>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="bg-black border-neon-green text-white max-w-md">
              <DialogHeader>
                <DialogTitle className="text-2xl text-neon-green">{item.name}</DialogTitle>
                <DialogDescription className="text-white/80 space-y-4 pt-4">
                  <div>
                    <h3 className="text-neon-pink font-semibold text-lg mb-2">Descripción</h3>
                    <p className="text-base">{item.description}</p>
                  </div>
                  <div>
                    <h3 className="text-neon-pink font-semibold text-lg mb-2">Precio</h3>
                    <p className="text-3xl font-bold text-neon-green">{item.price}</p>
                  </div>
                  <div>
                    <Badge
                      variant="outline"
                      className={
                        item.category === "Clásicos"
                          ? "border-neon-pink text-neon-pink text-base px-4 py-1"
                          : "border-neon-orange text-neon-orange text-base px-4 py-1"
                      }
                    >
                      {item.category}
                    </Badge>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

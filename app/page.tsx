"use client";

import { Header } from "@/components/header";
import { Hero, Menu, About, SphereView, Contact } from "@/components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Header />
      <Hero />
      <Menu />
      <About />
      <SphereView />
      <Contact />
    </main>
  );
}

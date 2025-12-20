"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero, About, SphereView, Contact } from "@/components/sections";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black">
      <Header />
      <Hero />
      <About />
      <SphereView />
      <Contact />
    </main>
  );
}

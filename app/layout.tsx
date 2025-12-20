import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";

const geistMono = Poppins({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "NOX - Nightclub",
  description: "Experiencia inmersiva en el boliche NOX",
  icons: {
    icon: [
      {
        url: "/favicon.webp",
      },
    ],
    apple: "/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.min.css"
        />
        <script src="https://cdn.jsdelivr.net/npm/three@0.158.0/build/three.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.min.js"></script>
      </head>
      <body className={`${geistMono.className} font-sans antialiased`}>
        {children}
         {/* Decorative glow effects */}
        <div className="fixed bottom-0 left-0 w-96 h-96 bg-neon-green/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="fixed top-1/4 right-0 w-96 h-96 bg-neon-pink/20 blur-[120px] rounded-full pointer-events-none" />
        <Footer />
      </body>
    </html>
  );
}

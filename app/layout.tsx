import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const font = Montserrat({ subsets: ["latin"], weight: ["300", "400", "600", "700"] });

export const metadata: Metadata = {
  title: "HG Aberturas | Ventanas de PVC y aluminio en CABA y GBA",
  description:
    "Distribuidora de aberturas de PVC de alta prestación y aluminio. Instalación en el día sobre marcos existentes, CABA, GBA y envíos al interior.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={font.className}>{children}</body>
    </html>
  );
}

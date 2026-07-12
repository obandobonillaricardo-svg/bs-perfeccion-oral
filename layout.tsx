import type { Metadata } from "next";
import { Fraunces, Manrope, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bsperfeccionoral.com"),
  title: "B&S Perfección Oral | Odontología Estética y Funcional en Bogotá",
  description:
    "Clínica odontológica B&S Perfección Oral: odontología preventiva, restaurativa y estética en Bogotá. Agenda tu cita con Dr. Andrés Barragán y equipo.",
  keywords: [
    "odontología Bogotá",
    "diseño de sonrisa",
    "blanqueamiento dental",
    "B&S Perfección Oral",
    "odontólogo Bogotá",
  ],
  openGraph: {
    title: "B&S Perfección Oral | Odontología Estética y Funcional",
    description:
      "Estética dental y funcional que mejora tu vida. Tratamientos preventivos, restaurativos y estéticos con un equipo altamente calificado.",
    locale: "es_CO",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${fraunces.variable} ${manrope.variable} ${plexMono.variable} font-sans bg-paper text-ink antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

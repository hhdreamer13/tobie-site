import "@/styles/globals.css";
import localFont from "next/font/local";
import {
  Caveat,
  Nunito_Sans,
  Literata,
  Sue_Ellen_Francisco,
} from "next/font/google";

import Providers from "./providers";
import HomeButton from "@/components/common/HomeButton";
import UtilityButton from "@/components/common/UtilityButton";

const caveatFont = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

const sueEllenFont = Sue_Ellen_Francisco({
  weight: "400",
  preload: false,
  display: "swap",
  variable: "--font-sue-ellen",
});

const nunitoFont = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
});

const literataFont = Literata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-literata",
});

const mottonaFont = localFont({
  src: "fonts/mottona.woff2",
  display: "swap",
  variable: "--font-mottona",
});

const newspaperFont = localFont({
  src: "fonts/OldNewspaperTypes.woff2",
  display: "swap",
  variable: "--font-newspaper",
});

export const metadata = {
  title: "Les Amis de Tobie",
  description:
    "Bienvenue dans l'univers de Tobie et ses amis, où les histoires inspirent jeu et imagination.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="fr" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${caveatFont.variable} ${nunitoFont.variable} ${mottonaFont.variable} ${newspaperFont.variable} ${literataFont.variable} ${sueEllenFont.variable} " flex flex-col min-h-screen"`}
      >
        <Providers>
          <div className="fixed z-50 text-slate-50 left-4 top-4">
            <HomeButton />
          </div>
          <div className="fixed z-50 text-slate-50 right-4 top-4">
            <UtilityButton />
          </div>

          <main className="flex flex-grow justify-center items-center">
            {children}
            {modal}
          </main>
        </Providers>
      </body>
    </html>
  );
}

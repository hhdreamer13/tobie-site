import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import { Caveat } from "next/font/google";
import { Nunito_Sans } from "next/font/google";
import Providers from "./providers";

const caveatFont = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

const nunitoFont = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito-sans",
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
  description: "Site officiel des amis de Tobie.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({ children, modal }) {
  return (
    <html lang="fr" className="light" style={{ colorScheme: "light" }}>
      <body
        className={`${caveatFont.variable} ${nunitoFont.variable} ${mottonaFont.variable} ${newspaperFont.variable} " flex flex-col min-h-screen"`}
      >
        <Providers>
          <Navbar />

          <main className="flex flex-grow justify-center items-center">
            {children}
            {modal}
          </main>
        </Providers>
      </body>
    </html>
  );
}

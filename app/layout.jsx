import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import { Caveat } from "next/font/google";
import { Nunito_Sans } from "next/font/google";

const caveatFont = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

const nunitoFont = Nunito_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

const mottonaFont = localFont({
  src: "fonts/mottona.otf",
  display: "swap",
  variable: "--font-mottona",
});

const newspaperFont = localFont({
  src: "fonts/OldNewspaperTypes.ttf",
  display: "swap",
  variable: "--font-newspaper",
});

export const metadata = {
  title: "Les Amis de Tobie",
  description: "Site officiel des amis de Tobie.",
};

export default function RootLayout({ children, modal }) {
  return (
    <html
      lang="fr"
      className={`${caveatFont.variable} ${nunitoFont.variable} ${mottonaFont.variable} ${newspaperFont.variable}`}
    >
      <body className={"flex flex-col min-h-screen"}>
        <Navbar />
        <main className="flex flex-grow justify-center items-center">
          {children}
          {modal}
        </main>
      </body>
    </html>
  );
}

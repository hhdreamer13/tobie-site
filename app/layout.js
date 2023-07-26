import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Caveat } from "next/font/google";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });

export const metadata = {
  title: "Les Amis de Tobie",
  description: "Site officiel des amis de Tobie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={caveat.className + " flex flex-col min-h-screen"}>
        <Navbar />
        <main className="flex flex-grow justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { Caveat } from "next/font/google";
import { Indie_Flower } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const caveat = Caveat({ subsets: ["latin"] });
const indieFlower = Indie_Flower({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Les Amis de Tobie",
  description: "Site officiel des amis de Tobie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={caveat.className}>{children}</body>
    </html>
  );
}

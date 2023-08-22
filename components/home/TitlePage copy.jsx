"use client";

import Image from "next/image";

import tobieLight from "../../public/photos/tobieText-themeLight.webp";
import tobieDark from "../../public/photos/tobieText-themeDark.webp";
import { useTheme } from "next-themes";
import Link from "next/link";

const TitlePage = () => {
  const { theme } = useTheme();
  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="flex flex-col w-full min-h-screen justify-center items-center gap-16">
        <div className="flex flex-col justify-center items-center">
          <h1 className="font-mottona text-7xl sm:text-9xl text-main">
            Les Amis de <span hidden>Tobie</span>
          </h1>
          <Image
            src={theme === "dark" ? tobieDark : tobieLight}
            alt="Tobie text"
            className="object-contain w-44 sm:w-52"
            width={200}
            height={200}
            quality={100}
            property
          />
        </div>
        <div className="w-full h-full flex flex-col items-center justify-center relative z-10 pointer-events-none">
          <Link href="/sections">
            <button className="start-button">
              <span className="font-newspaper dark:text-slate-100">
                Découvrez
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;

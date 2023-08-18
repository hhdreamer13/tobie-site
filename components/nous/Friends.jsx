/* eslint-disable react/no-unescaped-entities */
"use client";

import "@/styles/gridFriends.css";

import { useRef } from "react";
import { generateImagePaths, generateGridStyles } from "./imageCalculations";
import useGridAnimations from "./useGridAnimations";
import Image from "next/image";
import ContactForm from "./ContactForm";

const Friends = () => {
  const gridRef = useRef(null);

  const imagePaths = generateImagePaths();
  const gridStyles = generateGridStyles();

  useGridAnimations(gridRef);

  return (
    <div className="grid-wrapper w-full">
      <div className="w-full h-screen pt-20 flex flex-col gap-5 items-center justify-center">
        <h2 className="font-mottona text-3xl sm:text-7xl m-0 drop-shadow-xl">
          Nous Sommes
        </h2>
        <h2 className="font-mottona text-5xl sm:text-9xl m-0 drop-shadow-xl">
          Les Amis de Tobie
        </h2>
        <h2 className="font-mottona text-3xl sm:text-7xl m-0 drop-shadow-xl">
          Comme Toi
        </h2>
      </div>

      {/* Contact Us Section */}
      <div className="min-h-screen text-slate-100 relative flex items-center justify-center">
        <Image
          src="/photos/02.webp"
          alt="Contact-us Background"
          className="object-cover"
          fill={true}
          sizes="100vw"
        />
        <ContactForm />
      </div>

      {/* Partenaires Section */}

      <div
        className="grid-container bg-slate-100 relative w-full grid-col-5 grid-row-[38, minmax(0, 1fr)]"
        ref={gridRef}
      >
        {imagePaths.map((path, index) => (
          <div
            key={index}
            className="grid__item"
            style={gridStyles[index % 19]}
          >
            <div
              className="grid__item-img"
              style={{ backgroundImage: `url(${path})` }}
            ></div>
          </div>
        ))}
      </div>
      {/* Notre mission */}
      <div className="min-h-screen bg-main text-main text-2xl leading-5 relative w-full flex justify-center items-center">
        <article className="prose dark:prose-invert">
          <h3 className="">
            L’arbre comme alternative au merchandising de la série d’animation
          </h3>
          <p className="text-justify">
            Nous le savons, les barrières psychologiques à l'action contre le
            changement climatique sont puissantes. Nous sommes de plus en plus
            lucides, documentés, et pourtant toujours aussi impuissants.
            L'information ne suffit pas, il faut être touchés dans nos émotions
            pour se sentir concerné. Nous sommes convaincus que les récits
            inspirants et vraisemblables peuvent transformer l'eco-anxiété en
            éco-empathie et permettre aux gens de passer à l'action Nous pouvons
            contribuer, à notre échelle, à limiter la surconsommation et à
            sensibiliser les générations futures aux merveilles qui garantiront
            leur survie. C'est le cœur du projet Les amis de Tobie.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Friends;

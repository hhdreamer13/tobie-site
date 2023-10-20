/* eslint-disable react/no-unescaped-entities */
"use client";

import "@/styles/gridFriends.css";

import { useRef } from "react";
import { generateImagePaths, generateGridStyles } from "./imageCalculations";
import useGridAnimations from "./useGridAnimations";
import Image from "next/image";
import ContactForm from "./ContactForm";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({ ignoreMobileResize: true });

gsap.config({
  autoSleep: 30,
  force3D: true,
});

const AboutUs = ({ content, partnersLogos }) => {
  const gridRef = useRef(null);

  const builder = imageUrlBuilder(client);

  // Dynamic count based on fetched data
  const uniqueImagesCount = partnersLogos.length;
  const totalDisplayImagesCount = uniqueImagesCount * 3; // Number of repetition

  // Generate paths and styles dynamically
  const imagePaths = generateImagePaths(
    uniqueImagesCount,
    totalDisplayImagesCount,
    partnersLogos,
  );
  const gridStyles = generateGridStyles(32, 4, uniqueImagesCount); // Rows and columns

  useGridAnimations(gridRef);

  return (
    <div className="grid-wrapper w-full transform-gpu">
      {/* Contact Us Section */}
      <div className="min-h-screen text-slate-100 relative flex flex-col gap-4 items-center justify-center">
        <Image
          src={builder.image(content.imageSrc).url()}
          alt="Contact-us Background"
          className="object-cover"
          fill={true}
          priority
          sizes="100vw"
        />
        <div className="mt-20 w-full flex justify-center items-center">
          <ContactForm />
        </div>

        <div className="relative flex justify-center items-center gap-5 bg-gray-100 dark:bg-gray-300 rounded-lg">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/instagram.svg"
              alt="instagram"
              width={45}
              height={45}
            />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/facebook.svg"
              alt="facebook"
              width={45}
              height={45}
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/twitter.svg"
              alt="twitter"
              width={45}
              height={45}
            />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/assets/youtube.svg"
              alt="youtube"
              width={45}
              height={45}
            />
          </a>
        </div>
        <div className="scroll-down">
          <Image
            className="relative"
            src="/assets/down.svg"
            alt="scroll down"
            width={40}
            height={40}
          />
        </div>
      </div>

      <div className="w-full h-screen pt-20 flex flex-col gap-5 items-center justify-center">
        <h2 className="font-mottona text-4xl sm:text-7xl m-0 drop-shadow-xl">
          Nous Sommes
        </h2>
        <h2 className="font-mottona text-6xl sm:text-9xl m-0 drop-shadow-xl">
          Les Amis de Tobie
        </h2>
        <h2 className="font-mottona text-4xl sm:text-7xl m-0 drop-shadow-xl">
          Comme Toi
        </h2>
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
        <article className="prose dark:prose-invert w-5/6 sm:w-full m-4 p-5 sm:m-1">
          <h3 className="mb-5 text-xl sm:text-3xl">{content?.heading}</h3>
          <p className="text-justify">{content?.subheading}</p>
        </article>
      </div>
    </div>
  );
};

export default AboutUs;

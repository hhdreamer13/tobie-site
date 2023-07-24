"use client";
import { useState } from "react";
import Image from "next/image";

const NavEx = () => {
  const [bgImage, setBgImage] = useState("");

  const items = [
    { title: "Item 01", src: "/photos/01.png" },
    { title: "Item 02", src: "/photos/02.png" },
    { title: "Item 03", src: "/photos/03.png" },
    { title: "Item 04", src: "/photos/04.jpg" },
    { title: "Item 05", src: "/photos/05.jpg" },
    { title: "Item 06", src: "/photos/06.jpg" },
    { title: "Item 07", src: "/photos/07.jpg" },
  ];

  return (
    <div className="w-full h-screen flex justify-center items-center transition-all duration-1000">
      <div
        className="absolute w-full h-screen bg-cover transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${bgImage})`,
          opacity: bgImage ? 0.5 : 0,
        }}
      />
      <div className="w-96 h-[450px] flex justify-between drop-shadow-lg">
        {items.map((item, index) => (
          <div
            key={index}
            className="group transition-all flex flex-col items-center justify-center gap-2"
            onMouseEnter={() => setBgImage(item.src)}
            onMouseLeave={() => setBgImage("")}
          >
            <p className="opacity-0 duration-500 text-slate-950 group-hover:opacity-100 group-hover:-translate-y-8">
              {item.title}
            </p>
            <div className="relative w-12 h-full rounded-xl overflow-hidden duration-500 group-hover:-translate-y-8">
              <Image
                src={item.src}
                alt={item.title}
                objectFit="cover"
                layout="fill"
                fill="true"
              />
            </div>
            <div className="w-4 h-4 opacity-0 duration-700 group-hover:opacity-100 group-hover:-translate-y-8">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#ffffff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavEx;

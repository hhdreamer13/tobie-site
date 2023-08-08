"use client";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import pdfs from "@/utils/downloads";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function DownloadSection() {
  const [imageRefs, setImageRefs] = useState([]);

  // Function to update refs array
  const addToRefs = (el) => {
    if (el && !imageRefs.includes(el)) {
      setImageRefs((prevRefs) => [...prevRefs, el]);
    }
  };

  useEffect(() => {
    imageRefs.forEach((imgEl) => {
      gsap.fromTo(
        imgEl,
        { scale: 1 },
        {
          scale: 1.2,
          scrollTrigger: {
            trigger: imageRefs,
            start: "left center", // when the left edge of the element hits the center
            end: "right center", // when the right edge of the element hits the center
            scrub: 1,
            markers: true, // for visual debug
            horizontal: true,
          },
        },
      );
    });
  }, [imageRefs]);

  return (
    <div className="data-scroll-container">
      <div className="flex overflow-x-scroll hide-scrollbar">
        {pdfs.map((pdf, index) => (
          <div
            key={index}
            className="pdf-item transform transition-transform duration-300"
          >
            <Image
              src={pdf.imageSrc}
              alt={pdf.title}
              width={150}
              height={200}
              ref={addToRefs}
            />
            <h3 className="text-center">{pdf.title}</h3>
            <p className="text-sm text-center">{pdf.description}</p>
            <a
              href={pdf.downloadLink}
              className="block mt-2 text-blue-500 underline"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DownloadSection;

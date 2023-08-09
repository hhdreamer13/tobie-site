"use client";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import pdfs from "@/utils/downloads";
import "./locomotiveStyle.css";

const DownloadSection = () => {
  // utils functions
  const clamp = (num, min, max) => (num <= min ? min : num >= max ? max : num);
  const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c;

  const containerRef = useRef();

  useEffect(() => {
    const lscroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      direction: "horizontal",
    });

    lscroll.on("scroll", (obj) => {
      for (const key of Object.keys(obj.currentElements)) {
        if (
          obj.currentElements[key].el.classList.contains(
            "gallery__item-imginner",
          )
        ) {
          let progress = obj.currentElements[key].progress;
          const scaleVal =
            progress < 0.5
              ? clamp(map(progress, 0, 0.5, 0.2, 1), 0.2, 1)
              : clamp(map(progress, 0.5, 1, 1, 0.2), 0.2, 1);
          obj.currentElements[
            key
          ].el.parentNode.style.transform = `scale(${scaleVal})`;
        }
      }
    });
    lscroll.update();

    return () => {
      lscroll.destroy();
    };
  }, []);

  return (
    <div className="body-replacement ">
      <div className="compensating-div"></div>
      <div className="">
        <main ref={containerRef} data-scroll-container>
          <div className="content">
            <div className="gallery">
              <div className="gallery__text">
                <span
                  className="gallery__text-inner"
                  data-scroll
                  data-scroll-speed="1"
                >
                  Tobie
                </span>
                <span
                  data-scroll
                  data-scroll-speed="-1.5"
                  className="gallery__text-inner"
                >
                  Lolness
                </span>
              </div>
              {pdfs.map((pdf, index) => (
                <figure key={index} className="gallery__item">
                  <div className="gallery__item-img rounded-2xl overflow-hidden">
                    <div
                      className="gallery__item-imginner"
                      style={{ backgroundImage: `url(${pdf.imageSrc})` }}
                      data-scroll
                      data-scroll-speed="-0.8"
                    ></div>
                  </div>
                  <figcaption className="gallery__item-caption">
                    <h2
                      className="gallery__item-title"
                      data-scroll
                      data-scroll-speed="1"
                    >
                      {pdf.title}
                    </h2>
                    <span
                      className="gallery__item-number"
                      data-scroll
                      data-scroll-speed="1.5"
                    >
                      {`0${index + 1}`}
                    </span>
                    <a href={pdf.downloadLink} className="gallery__item-link">
                      Télécharger
                    </a>
                  </figcaption>
                </figure>
              ))}

              <div className="gallery__text">
                <span
                  className="gallery__text-inner"
                  data-scroll
                  data-scroll-speed="1"
                >
                  Tobie
                </span>
                <span
                  data-scroll
                  data-scroll-speed="3"
                  className="gallery__text-inner"
                >
                  Lolness
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DownloadSection;

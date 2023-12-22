import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import useDeviceType from "@/hooks/useDeviceType";

const CarouselGallery = (props) => {
  const isDesktop = useDeviceType();

  const paddingDesktop = { top: 30, bottom: 30, left: 100, right: 100 };
  const paddingMobile = { top: 10, bottom: 10, left: 30, right: 30 };

  const imagePadding = isDesktop ? paddingDesktop : paddingMobile;

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
      padding: imagePadding,
    });

    lightbox.on("uiRegister", () => {
      lightbox.pswp.ui.registerElement({
        name: "custom-caption",
        order: 9,
        isButton: false,
        appendTo: "root",
        html: "",
        onInit: (el) => {
          lightbox.pswp.on("change", () => {
            const currIndex = lightbox.pswp.currIndex;
            const captionText = props.images[currIndex].text;
            el.innerHTML = captionText || "";
          });
        },
      });
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  const masonryStyle = {
    columnCount: 3,
    columnGap: "1rem",
  };

  const imageWrapperStyle = {
    marginBottom: "1rem",
    breakInside: "avoid",
    display: "block",
  };

  return (
    <div className="pswp-gallery" id={props.galleryID} style={masonryStyle}>
      {props.images.map((image, index) => {
        return (
          <a
            href={image.largeURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            data-cropped="true"
            key={props.galleryID + "-" + index}
            target="_blank"
            rel="noreferrer"
            style={imageWrapperStyle}
          >
            <img
              src={image.thumbnailURL}
              alt=""
              className="rounded-md hover:shadow-lg dark:hover:shadow-emerald-200/20 duration-200 hover:scale-105 w-full m-0 p-0"
            />
          </a>
        );
      })}
    </div>
  );
};

export default CarouselGallery;

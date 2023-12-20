import React, { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

const CarouselGallery = (props) => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + props.galleryID,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  const masonryStyle = {
    columnCount: 4,
    columnGap: "1rem",
  };

  const imageWrapperStyle = {
    marginBottom: "1rem",
    breakInside: "avoid",
    display: "block",
  };

  return (
    <div className="pswp-gallery" id={props.galleryID} style={masonryStyle}>
      {props.images.map((image, index) => (
        <a
          href={image.largeURL}
          data-pswp-width={image.width}
          data-pswp-height={image.height}
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
      ))}
    </div>
  );
};

export default CarouselGallery;

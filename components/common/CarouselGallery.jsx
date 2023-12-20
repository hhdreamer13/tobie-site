import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";
import Image from "next/image";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const CarouselGallery = ({ value }) => {
  const builder = imageUrlBuilder(client);

  return (
    <AwesomeSlider>
      {value.images.map((image) => (
        <div key={image._key}>
          <Image
            src={builder.image(image).url()}
            alt={image.alt || "Fan Art"}
            sizes="500px"
            fill
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      ))}
    </AwesomeSlider>
  );
};

export default CarouselGallery;

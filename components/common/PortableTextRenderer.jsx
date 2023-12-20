import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { client } from "@/sanity/clientConfig";
import Image from "next/image";
import ReactPlayer from "react-player";
import CarouselGallery from "./CarouselGallery";

const builder = imageUrlBuilder(client);

const ImageComponent = ({ value, isInline }) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      src={builder
        .image(value)
        .width(isInline ? 100 : 800)
        .fit("max")
        .auto("format")
        .url()}
      alt={value.alt || " "}
      className="rounded-md overflow-hidden object-cover"
      width={600}
      height={400}
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block",

        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  );
};

const VideoComponent = ({ value }) => {
  return (
    <div className="rounded-md overflow-hidden">
      <ReactPlayer
        url={value.url}
        width="100%"
        height="360px"
        controls={true}
        className="object-cover"
      />
    </div>
  );
};

const CarouselComponent = ({ value }) => {
  return (
    <div>
      <CarouselGallery
        galleryID="my-test-gallery"
        images={value.images.map((image) => {
          const { width, height } = getImageDimensions(image);

          return {
            largeURL: builder.image(image).url(),
            thumbnailURL: builder
              .image(image)
              .width(100)
              .fit("max")
              .auto("format")
              .url(),
            width: width,
            height: height,
          };
        })}
      />
    </div>
  );
};

const components = {
  types: {
    image: ImageComponent,
    video: VideoComponent,
    carousel: CarouselComponent,
    // Any other custom types you have in your content
  },
};

const PortableTextRenderer = ({ content }) => {
  return <PortableText value={content} components={components} />;
};

export default PortableTextRenderer;

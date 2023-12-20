import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { client } from "@/sanity/clientConfig";
import Image from "next/image";
import ReactPlayer from "react-player";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const ImageComponent = ({ value, isInline }) => {
  const builder = imageUrlBuilder(client);

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

import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils";
import { client } from "@/sanity/clientConfig";
import Image from "next/image";

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

const components = {
  types: {
    image: ImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

const PortableTextRenderer = ({ content }) => {

  return <PortableText value={content} components={components} />;
};

export default PortableTextRenderer;

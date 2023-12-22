import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";

const CarouselPreview = ({ image }) => {
  if (!image) {
    return <p>Ajouter des images pour le Carousel</p>;
  }

  const imageUrl = imageUrlBuilder(client)
    .image(image)
    .width(100)
    .height(100)
    .url();

  return (
    <div className="flex items-center space-x-2">
      <img src={imageUrl} alt="Aperçu" className="w-20 h-20 object-cover" />
      <p>Carousel</p>
    </div>
  );
};

export default CarouselPreview;

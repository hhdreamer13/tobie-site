import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/clientConfig';

const CarouselPreview = ({ images }) => {
  if (!images || !images || images.length === 0) {
    return <p>Ajouter des images pour le Carousel</p>;
  }


  const firstImage = images[0];
  const imageUrl = imageUrlBuilder(client).image(firstImage).width(100).height(100).url();

  return (
    <div className="flex items-center space-x-2">
      <img src={imageUrl} alt="Aperçu" className="w-20 h-20 object-cover" />
      <p>{images.title || 'Carousel'}</p>
    </div>
  );
};

export default CarouselPreview;

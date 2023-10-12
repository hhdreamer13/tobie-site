import Image from "next/image";
import tobie from "@/public/tobie-icon.webp";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";

const Card = ({ onClick, card, index, isInactive, isFlipped, isDisabled }) => {
  const builder = imageUrlBuilder(client);

  const handleClick = () => {
    !isFlipped && !isDisabled && onClick(index);
  };

  return (
    <div
      className={`relative w-full h-full shadow-md rounded-md transition-all duration-500 cursor-pointer ${
        isInactive ? "opacity-0" : ""
      }`}
      onClick={handleClick}
      style={{
        transformStyle: "preserve-3d",
        transform: isFlipped ? "rotateY(180deg)" : "none",
      }}
    >
      <div
        className="absolute w-full h-full flex items-center bg-white p-2 rounded-md overflow-hidden"
        style={{ backfaceVisibility: "hidden" }}
      >
        <Image
          className="object-contain"
          src={tobie}
          alt="cover"
          width={100}
          height={100}
        />
      </div>
      <div
        className="absolute w-full h-full flex items-center bg-white p-2 rounded-md overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <Image
          className="object-contain"
          src={builder.image(card?.imageSrc).width(200).height(200).url()}
          alt="card"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Card;

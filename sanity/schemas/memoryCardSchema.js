const memoryCard = {
  name: "memoryCard",
  type: "object",
  title: "Carte",
  fields: [
    {
      name: "type",
      type: "string",
      title: "Titre",
    },
    {
      name: "imageSrc",
      type: "image",
      title: "Image Principale",
    },
    {
      name: "imageDetailSrc",
      type: "image",
      title: "Image de la description",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
    },
  ],
};

export default memoryCard;

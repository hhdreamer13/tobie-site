const memoryCard = {
  name: "memoryCard",
  type: "object",
  title: "Carte",
  fields: [
    {
      name: "type",
      type: "string",
      title: "Titre",
      description: "Le nom de la carte qui sera montré dans le jeu de mémoire.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imageSrc",
      type: "image",
      title: "Image Principale",
      description: "L'image qui sera affichée sur la carte dans le jeu.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imageDetailSrc",
      type: "image",
      title: "Image de la description",
      description:
        "Image supplémentaire, optionnelle, qui sera montrée dans la fenêtre modale lors de la découverte de la paire.",
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description:
        "Texte qui sera affiché dans la fenêtre modale lors de la découverte de la paire.",
    },
  ],
};

export default memoryCard;

const download = {
  name: "downloadPost",
  title: "Téléchargement",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      description: "Le titre du fichier à télécharger.",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "Une brève description du contenu du fichier.",
    },
    {
      name: "imageSrc",
      title: "Image",
      type: "image",
      description: "Une image représentative du fichier.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Catégorie",
      type: "string",
      description:
        "Sélectionnez une catégorie qui correspond au type de fichier.",
      options: {
        list: [
          { title: "Fond d'écran", value: "fond d'écran" },
          { title: "Livret", value: "livret" },
        ],
        layout: "radio", // or 'dropdown'
      },
    },
    {
      name: "downloadLink",
      title: "Fichier",
      type: "file",
      description: "Ajoutez ici le fichier à télécharger.",
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "imageSrc",
    },
  },
};

export default download;

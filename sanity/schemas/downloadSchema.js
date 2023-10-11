const download = {
  name: "downloadPost",
  title: "Téléchargement",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "imageSrc",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Catégorie",
      type: "string",
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

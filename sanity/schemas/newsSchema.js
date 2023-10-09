const news = {
  name: "newsPost",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "slug",
      title: "Lien",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "imageSrc",
      title: "Image d'En-tête",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "body",
      title: "Corps",
      type: "blockContent",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "tags",
      title: "Étiquettes",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "imageSrc",
    },
  },
};

export default news;

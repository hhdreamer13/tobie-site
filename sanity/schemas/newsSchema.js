const news = {
  name: "newsPost",
  title: "Articles",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      description: "Titre de l'article. Obligatoire et unique.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Lien",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      description:
        "Lien SEO-amical basé sur le titre. Merci de cliquer sur le bouton 'Generate'.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imageSrc",
      title: "Image d'En-tête",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Image principale de l'article.",
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
          description: "Texte alternatif pour l'image.",
        },
      ],
    },
    {
      name: "body",
      title: "Corps",
      type: "blockContent",
      description: "Contenu principal de l'article.",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      initialValue: () => {
        const today = new Date();
        return today.toISOString().substring(0, 10);
      },
      description: "Date de publication.",
    },
    {
      name: "tags",
      type: "array",
      title: "Étiquettes",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Mots-clés associés à l'article.",
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

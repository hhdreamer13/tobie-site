const page = {
  name: "pageTexts",
  type: "document",
  title: "Textes de section",
  fields: [
    {
      name: "section",
      type: "reference",
      to: [{ type: "section" }],
      title: "Section",
      description: "À quelle section ce texte appartient-il ?",
    },
    {
      name: "heading",
      type: "string",
      title: "Titre",
    },
    {
      name: "subheading",
      type: "text",
      title: "Sous-titre",
    },
    {
      name: "extraText",
      type: "text",
      title: "Textes Supplémentaires",
    },
  ],
  preview: {
    select: {
      title: "section.title",
    },
  },
};

export default page;

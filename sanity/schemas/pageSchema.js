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
      description: "Sélectionnez la section à laquelle ce texte est associé.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "heading",
      type: "string",
      title: "Titre",
      description: "Le titre principal pour cette partie de la section.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "subheading",
      type: "text",
      title: "Sous-titre",
      description: "Sous-titre qui apparaîtra en dessous du titre principal.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "extraText",
      type: "text",
      title: "Textes Supplémentaires",
    },
    {
      name: "imageSrc",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: "section.title",
    },
  },
};

export default page;

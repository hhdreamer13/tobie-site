const atelier = {
  name: "atelierPost",
  type: "document",
  title: "Atelier",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titre",
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
    },
    {
      name: "latitude",
      type: "number",
      title: "Latitude",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "longitude",
      type: "number",
      title: "Longitude",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imageSrc",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Corps",
      type: "blockContent",
    },

    {
      name: "date",
      type: "date",
      title: "Date",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "tags",
      type: "array",
      title: "Étiquettes",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "imageSrc",
    },
  },
};

export default atelier;

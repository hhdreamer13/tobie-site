const section = {
  name: "section",
  title: "Sections",
  type: "document",
  fields: [
    {
      name: "position",
      title: "Position",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(1),
    },
    {
      name: "title",
      title: "Titre",
      type: "string",
    },
    {
      name: "slug",
      title: "Lien",
      type: "slug",
      readOnly: true,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "imageSrcJour",
      title: "Image - Jour",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "imageSrcNuit",
      title: "Image - Soir",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
  ],
};

export default section;

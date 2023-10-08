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
      title: "Title",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "string",
      readOnly: true,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "imageSrcJour",
      title: "Image Source Day",
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
      title: "Image Source Night",
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

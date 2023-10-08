const page = {
  name: "pageTexts",
  type: "document",
  title: "Page Texts",
  fields: [
    {
      name: "section",
      type: "reference",
      to: [{ type: "section" }],
      title: "Section",
      description: "Which section does this text belong to?",
    },
    {
      name: "heading",
      type: "string",
      title: "Heading",
    },
    {
      name: "subheading",
      type: "text",
      title: "Subheading",
    },
    {
      name: "extraText",
      type: "array",
      title: "Extra Texts",
      of: [{ type: "block" }],
    },
  ],
};

export default page;

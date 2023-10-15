const story = {
  name: "storyVerse",
  type: "document",
  title: "Conte",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titre",
      readOnly: true,
    },
    {
      name: "verseAndImage",
      type: "array",
      title: "Vers et Images",
      description: "Veuillez ajouter exactement 7 couples de vers et images.",
      of: [{ type: "verseImage" }],
      validation: (Rule) =>
        Rule.length(7).error(
          "Veuillez ajouter exactement 7 couples de vers et images.",
        ),
    },
  ],
};

export default story;

const verseImage = {
  name: "verseImage",
  type: "object",
  title: "Vers-Image",
  fields: [
    {
      name: "number",
      type: "number",
      title: "Numéro",
    },
    {
      name: "imageSrc",
      type: "image",
      title: "Image de Fond",
    },
    {
      name: "verse",
      type: "array",
      title: "Vers du Poème",
      of: [
        {
          type: "string",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "number",
      media: "imageSrc",
    },
  },
};

export default verseImage;

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
      description: "L'image qui servira de fond pour ce vers.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "verse",
      type: "array",
      title: "Vers du Poème",
      description:
        "Les vers du poème associés à cette image. Entrez deux vers du poème.",
      validation: (Rule) =>
        Rule.required().min(2).max(2).error("Deux vers sont attendus."),
      of: [
        {
          type: "string",
        },
      ],
    },
    {
      name: "audioSrc",
      type: "file",
      title: "Audio de la Lecture",
      description: "L'audio contenant la lecture du vers correspondant.",
      options: {
        accept: "audio/*",
      },
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

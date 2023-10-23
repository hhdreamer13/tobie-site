const section = {
  name: "section",
  title: "Sections",
  type: "document",
  fields: [
    {
      name: "position",
      title: "Position",
      type: "number",
      description: "Ordre d'affichage de la section.",
      validation: (Rule) => Rule.required().integer().min(1),
    },
    {
      name: "title",
      title: "Titre",
      type: "string",
      description: "Le titre de la section.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Lien",
      type: "slug",
      description: "Ce champ est généré automatiquement.",
      readOnly: true,
    },
    {
      name: "description",
      title: "Description",
      description: "Description détaillée de la section.",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "imageSrcJour",
      title: "Image - Jour",
      description: "Image à utiliser pour le mode jour.",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          description: "Texte alternatif pour l'image en mode jour.",
          type: "string",
        },
      ],
    },
    {
      name: "imageSrcNuit",
      title: "Image - Nuit",
      description: "Image à utiliser pour le mode nuit.",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          description: "Texte alternatif pour l'image en mode nuit.",
          type: "string",
        },
      ],
    },
  ],
};

export default section;

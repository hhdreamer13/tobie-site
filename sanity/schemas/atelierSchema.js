const atelier = {
  name: "atelierPost",
  type: "document",
  title: "Ateliers",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Titre",
      description: "Le titre de l'atelier.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Lien",
      type: "slug",
      description:
        "Lien SEO-amical basé sur le titre. Merci de cliquer sur le bouton 'Generate'.",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "place",
      type: "string",
      title: "Lieu",
      description: "Emplacement où se déroulera l'atelier.",
    },
    {
      name: "latitude",
      type: "number",
      title: "Latitude",
      description:
        "Pour obtenir la latitude d'un lieu, vous pouvez utiliser latlong.net.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "longitude",
      type: "number",
      title: "Longitude",
      description:
        "Pour obtenir la latitude d'un lieu, vous pouvez utiliser latlong.net.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "workshopDate",
      type: "date",
      title: "Date de l'atelier",
      description: "La date à laquelle l'atelier aura lieu.",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
    },
    {
      name: "status",
      type: "string",
      title: "Statut",
      description: "L'état actuel de l'atelier.",
      options: {
        list: ["À venir", "Complet", "Annulé", "Reporté"],
      },
    },
    {
      name: "imageSrc",
      type: "image",
      title: "Image",
      description: "Image représentative de l'atelier.",
      options: {
        hotspot: true,
      },
    },
    {
      name: "body",
      title: "Corps",
      description: "Contenu détaillé de l'atelier.",
      type: "blockContent",
    },
    {
      name: "date",
      type: "date",
      title: "Date",
      description: "Date de publication.",
      options: {
        dateFormat: "YYYY-MM-DD",
      },
      initialValue: () => {
        const today = new Date();
        return today.toISOString().substring(0, 10);
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tags",
      type: "array",
      title: "Étiquettes",
      description: "Mots-clés associés à l'article.",
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

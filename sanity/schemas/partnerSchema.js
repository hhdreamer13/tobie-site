const partner = {
  name: "partner",
  title: "Partenaire",
  type: "document",
  fields: [
    { name: "name", title: "Nom", type: "string" },
    {
      name: "image",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required(),
      description:
        "Veuillez télécharger un logo avec un arrière-plan transparent, de préférence au format PNG ou WebP.",
    },
  ],
};

export default partner;

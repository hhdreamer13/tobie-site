const carousel = {
  name: "carousel",
  type: "object",
  title: "Carrousel d'images",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [
        {
          name: "image",
          type: "image",
          title: "Image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Texte",
            },
          ],
        },
      ],
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      images: "images",
    },
    prepare(selection) {
      const { images } = selection;
      console.log(images);
      return {
        title: `Carrousel avec ${Object.keys(images).length} images`,
        media: images[0],
      };
    },
  },
};

export default carousel;

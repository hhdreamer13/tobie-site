const carousel = {
  name: "carousel",
  type: "object",
  title: "Galerie d'images",
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

      // Check if the images array has at least one image
      if (images && images.length > 0) {
        return {
          title: `Galerie avec ${images.length} images`,
          media: images[0],
        };
      } else {
        // Handle the case where there are no images
        return {
          title: "Galerie sans images",
          media: null,
        };
      }
    },
  },
};

export default carousel;

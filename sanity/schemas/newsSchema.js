const news = {
  name: "newsPost",
  title: "News Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Link URL",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "imageSrc",
      title: "Header Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "date",
      title: "Date",
      type: "datetime",
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "imageSrc",
    },
  },
};

export default news;

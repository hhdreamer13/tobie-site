import CarouselPreview from "@/components/common/CarouselPreview"
const carousel = {
  name: "carousel",
  type: "object",
  title: "Image Carousel",
  fields: [
    {
      name: "images",
      type: "array",
      title: "Images",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    },
  ],
  preview: {
    select: {
      images: "images",
    },
  },
  components: {
    preview: CarouselPreview,
  }
};

export default carousel;

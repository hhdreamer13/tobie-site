import VideoPreview from "@/components/common/VideoPreview";

const videoSchema = {
  name: "video",
  type: "object",
  title: "Vidéo",
  fields: [
    {
      name: "url",
      type: "url",
      title: "YouTube / Vimeo URL",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
  },
  components: {
    preview: VideoPreview,
  },
};

export default videoSchema;

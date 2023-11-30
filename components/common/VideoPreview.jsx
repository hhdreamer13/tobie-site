import ReactPlayer from "react-player";

const VideoPreview = ({ url }) => {
  console.log(url);
  return (
    <div className="p-4 flex justify-center">
      {url ? (
        <ReactPlayer url={url} controls={true} className="object-cover" />
      ) : (
        <p>Add a YouTube / Vimeo URL</p>
      )}
    </div>
  );
};

export default VideoPreview;

import ReactPlayer from "react-player";

const VideoPreview = ({ url }) => {
  return (
    <div className="p-4 flex justify-center">
      {url ? (
        <ReactPlayer url={url} controls={true} className="object-cover" />
      ) : (
        <p>Ajouter un lien YouTube / Vimeo</p>
      )}
    </div>
  );
};

export default VideoPreview;

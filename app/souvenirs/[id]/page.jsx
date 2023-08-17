import downloads from "@/utils/downloads";
import DownloadFrame from "@/components/frames/DownloadFrame";

export default function NewsPage({ params }) {
  const { id } = params;

  const item = downloads.find((n) => n.id === parseInt(id));

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        <DownloadFrame item={item} />
      </div>
    </div>
  );
}

import NewsFrame from "@/components/frames/NewsFrame";
import news from "@/utils/news";

export default function NewsPage({ params }) {
  const { id } = params;

  const item = news.find((n) => n.id === parseInt(id));

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto">
        This is not modal
        <NewsFrame item={item} />
      </div>
    </div>
  );
}

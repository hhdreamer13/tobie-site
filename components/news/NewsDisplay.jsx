import NewsCard from "./NewsCard";

const NewsDisplay = ({ news }) => {
  return (
    <ul className="w-2/3 flex flex-col sm:grid-cols-2 gap-6 p-2">
      {news.map((newsItem) => (
        <div key={newsItem.id}>
          <NewsCard newsItem={newsItem} />
        </div>
      ))}
    </ul>
  );
};

export default NewsDisplay;

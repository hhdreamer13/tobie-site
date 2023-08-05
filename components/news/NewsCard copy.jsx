import Image from "next/image";

const NewsCard = ({ newsItem }) => {
  return (
    <li className="group flex flex-col sm:flex-row gap-4 mb-8 pb-4 border-b-2 border-rose-300">
      <div className="flex-none sm:w-1/3">
        <Image
          className="rounded-lg shadow-lg w-full object-cover"
          src={newsItem.imageSrc}
          alt={newsItem.title}
          width={300}
          height={400}
        />
      </div>
      <div className="flex-auto sm:w-2/3">
        <h3 className="text-2xl font-bold font-nunito">{newsItem.title}</h3>
        <div className="mb-2">
          <span className="text-slate-500">{newsItem.date}</span>
          {newsItem.tags.map((tag, index) => (
            <span
              key={index}
              className="ml-2 text-xs text-white bg-green-500 rounded-full px-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-4">
          <p className="text-slate-500 text-justify line-clamp-3 sm:line-clamp-2 lg:line-clamp-3 xl:line-clamp-4 font-nunito">
            {newsItem.description}
          </p>
        </div>
        <a href={newsItem.linkUrl} className="text-blue-500 hover:underline">
          Lire la suite
        </a>
      </div>
    </li>
  );
};

export default NewsCard;

import Image from "next/image";

const NewsCard = ({ newsItem }) => {
  return (
    <li className="group flex flex-col sm:flex-row gap-4 mb-8 border border-rose-200 px-10 py-8 h-60 shadow-lg rounded-2xl">
      <div className="flex-none sm:w-1/4 relative">
        <Image
          className="rounded-lg shadow-lg w-full object-cover absolute h-40 -left-16 top-1/2 -translate-y-1/2 border border-rose-200 transition-all group-hover:scale-110"
          src={newsItem.imageSrc}
          alt={newsItem.title}
          width={300}
          height={300}
        />
      </div>
      <div className="flex-auto sm:w-3/4">
        <h3 className="text-2xl font-bold font-nunito">{newsItem.title}</h3>
        <div className="mb-2">
          <span className="text-slate-500">{newsItem.date}</span>
          {newsItem.tags.map((tag, index) => (
            <span
              key={index}
              className="ml-2 text-sm text-white bg-green-500 rounded-full px-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-4">
          <p className="text-main text-justify line-clamp-3 sm:line-clamp-2 lg:line-clamp-3 font-nunito">
            {newsItem.description}
          </p>
        </div>
        <a href={newsItem.linkUrl} className="hover:underline">
          Lire la suite
        </a>
      </div>
    </li>
  );
};

export default NewsCard;

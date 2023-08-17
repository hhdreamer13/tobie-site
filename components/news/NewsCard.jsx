import Image from "next/image";
import Link from "next/link";
import MaximizeIcon from "../common/MaximizeIcon";

const NewsCard = ({ newsItem }) => {
  return (
    <li className="relative flex flex-col sm:flex-row h-auto mb-8 pb-8 transform transition-transform duration-300 ease-in-out">
      <div className="relative flex-none sm:w-1/3 z-0 sm:z-10">
        <Image
          className="absolute rounded-lg rounded-br-none rounded-bl-none sm:rounded-bl-lg shadow-lg w-full h-52 object-cover hover:saturate-150 transition-opacity duration-200 ease-in-out"
          src={newsItem.imageSrc}
          alt={newsItem.title}
          width={300}
          height={400}
        />
      </div>
      <div className="group relative dark:bg-opacity-75 rounded-lg rounded-tl-lg sm:rounded-tl-none shadow-lg flex-auto sm:w-2/3 mt-16 sm:mt-8">
        <div className="absolute -inset-1 bg-gradient-to-br from-slate-50 dark:from-slate-950 to-teal-100 dark:to-teal-800 rounded-lg blur opacity-25 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex flex-col gap-3 w-full h-full p-4 bg-white/75 dark:bg-slate-950/80 rounded-lg rounded-tl-lg sm:rounded-tl-none">
          <Link href={newsItem.linkUrl} className="absolute top-0 right-0 m-2">
            <MaximizeIcon />
          </Link>
          <h3 className="text-xl font-semibold font-literata w-11/12">
            {newsItem.title}
          </h3>
          <div className="mb-2 flex flex-col gap-1 sm:block">
            <span className="text-slate-500 font-caveat">{newsItem.date}</span>
            <div className="block sm:inline-block">
              {newsItem.tags.map((tag, index) => (
                <span
                  key={index}
                  className="ml-2 text-xs text-white font-caveat bg-green-500 rounded-full px-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <p className="text-main text-sm text-justify line-clamp-3">
              {newsItem.description}
            </p>
          </div>
          <a
            href={newsItem.linkUrl}
            className="text-sky-500 hover:underline font-caveat hover:text-sky-600 transition-colors duration-200 ease-in-out"
          >
            Lire la suite
          </a>
        </div>
      </div>
    </li>
  );
};

export default NewsCard;

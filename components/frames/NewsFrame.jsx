import Image from "next/image";
import { getShimmerPlaceholder } from "@/utils/getShimmerPlaceholder";
import MinimizeIcon from "../common/MinimizeIcon";

const NewsFrame = async ({ item, setIsOpen }) => {
  return (
    <div className="relative flex flex-col border-[1px] dark:border-slate-800 border-slate-300 justify-start w-full max-h-fit bg-main items-center rounded-xl p-5">
      {/* Close */}
      <button
        className="absolute top-0 right-0 m-2"
        onClick={() => setIsOpen(false)}
      >
        <div className="w-7 h-7 rounded-lg bg-slate-100/40 dark:bg-slate-950/30 flex justify-center items-center">
          <MinimizeIcon className="w-6 h-6 hover:scale-105" />
        </div>
      </button>

      {/* Principal Image */}
      <div className="max-h-44 sm:max-h-60 w-full mb-8 rounded-lg shadow-xl overflow-hidden">
        <Image
          alt={item.title}
          src={item.imageSrc}
          height={400}
          width={600}
          className="object-cover w-full"
          placeholder="blur"
          blurDataURL={getShimmerPlaceholder(600, 400)}
        />
      </div>

      {/* Content */}
      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center line-clamp-3">
        {item.title}
      </h3>

      <div className="mb-4">
        <span className="text-slate-500 font-caveat">{item.date}</span>
        {item.tags.map((tag, index) => (
          <span
            key={index}
            className="ml-2 text-sm text-white font-caveat bg-green-500 rounded-full px-2"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="text-justify text-main text-sm w-full font-nunito p-3 max-h-36 sm:max-h-40 overflow-y-scroll border rounded-lg">
        <p>{item.description}</p>
      </div>

      <button
        onClick={() => {
          setIsOpen(false);
          window.location.reload();
        }}
        className="mt-6 px-4 py-2 bg-sky-500 font-caveat text-white rounded hover:bg-sky-700 shadow-[inset_0_0_20px_rgba(255,255,255,0)] outline-[rgba(255,255,255,0.5)] outline-offset-0 transition-all duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] border-transparent hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.2)] hover:border-solid;"
      >
        Lire intégralement
      </button>
    </div>
  );
};

export default NewsFrame;

import Image from "next/image";
import { getShimmerPlaceholder } from "@/utils/getShimmerPlaceholder";
import MinimizeIcon from "../common/icons/MinimizeIcon";
import imageUrlBuilder from "@sanity/image-url";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/clientConfig";

const NewsFrame = async ({ post, setIsOpen }) => {
  const builder = imageUrlBuilder(client);

  const formattedDate = post.date
    ? new Date(post?.date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="relative flex flex-col border-[1px] dark:border-slate-800 border-slate-300 justify-start max-w-[600px] mx-auto max-h-fit bg-main items-center rounded-xl p-5">
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
      {post?.imageSrc ? (
        <div className="max-h-44 sm:max-h-60 w-full max-w-fit mb-8 rounded-lg shadow-xl overflow-hidden">
          <Image
            src={builder.image(post.imageSrc).width(600).height(400).url()}
            alt={post?.imageSrc?.alt || post?.title}
            height={400}
            width={600}
            className="object-cover"
            placeholder="blur"
            blurDataURL={getShimmerPlaceholder(600, 400)}
          />
        </div>
      ) : null}

      {/* Content */}
      <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center line-clamp-3">
        {post?.title}
      </h3>

      <div className="mb-2 flex flex-col justify-center items-center gap-1 sm:block">
        <span className="text-slate-500 font-caveat">{formattedDate}</span>
        {post?.tags && (
          <div className="block sm:inline-block">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="ml-2 text-sm text-main font-caveat bg-slate-100 dark:bg-slate-900 border border-slate-400 dark:border-slate-400 rounded-full px-1.5 py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="text-justify text-main text-sm font-nunito p-3 max-h-36 sm:max-h-40 overflow-y-scroll border rounded-lg">
        {post?.body ? <PortableText value={post.body} /> : null}
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

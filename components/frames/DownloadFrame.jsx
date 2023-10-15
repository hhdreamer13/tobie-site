"use client";

import Image from "next/image";
import { getShimmerPlaceholder } from "@/utils/getShimmerPlaceholder";
import MinimizeIcon from "../common/MinimizeIcon";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";

const DownloadFrame = ({ post, setIsOpen }) => {
  const builder = imageUrlBuilder(client);

  return (
    <div className="relative flex flex-col justify-start max-w-[600px] mx-auto h-10/12 bg-main items-center rounded-xl p-5">
      {/* Close */}
      {setIsOpen && (
        <button
          className="absolute top-0 right-0 m-2"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-7 h-7 rounded-lg bg-slate-100/40 dark:bg-slate-950/30 flex justify-center items-center">
            <MinimizeIcon className="w-6 h-6 hover:scale-105" />
          </div>
        </button>
      )}

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
      <h3 className="text-2xl font-semibold mb-2 text-center">{post?.title}</h3>

      <div className="mb-4">
        <span className="text-main text-lg font-caveat bg-slate-100 dark:bg-slate-900 border border-slate-400 dark:border-slate-400 rounded-md px-1.5 py-0.5">
          {post?.category}
        </span>
      </div>

      <div className="text-justify text-main text-sm w-full p-3 max-h-40 overflow-y-scroll border rounded-lg">
        <p>{post?.description}</p>
      </div>
      <a
        href={post?.fileUrl} // This should be the link to your download file.
        download
        onClick={() => {
          setIsOpen(false);
        }}
        target="_blank"
        rel="noreferrer"
        className="mt-6 px-4 py-2 bg-sky-500 font-caveat text-white rounded hover:bg-sky-700 shadow-[inset_0_0_20px_rgba(255,255,255,0)] outline-[rgba(255,255,255,0.5)] outline-offset-0 transition-all duration-[1250ms] ease-[cubic-bezier(0.19,1,0.22,1)] border-transparent hover:shadow-[inset_0_0_20px_rgba(0,0,0,0.5),0_0_20px_rgba(0,0,0,0.2)] hover:border-solid;"
      >
        Télécharger
      </a>
    </div>
  );
};

export default DownloadFrame;

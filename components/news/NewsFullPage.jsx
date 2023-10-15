"use client";

import Image from "next/image";
import { getShimmerPlaceholder } from "@/utils/getShimmerPlaceholder";
import Link from "next/link";
import BackIcon from "../common/BackIcon";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";
import PortableTextRenderer from "../common/PortableTextRenderer";

const NewsFullPage = ({ post }) => {
  const builder = imageUrlBuilder(client);

  const formattedDate = post.date
    ? new Date(post?.date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="relative flex flex-col justify-start w-full h-full min-h-screen bg-main items-center px-8 pb-12">
      {/* Back */}
      <Link
        href={"/sections/actualites"}
        className="absolute lg:sticky lg:top-32 top-0 self-start left-0 sm:left-6 md:left-12 lg:left-16 xl:left-24 2xl:left-48 -mt-16 ml-2 "
      >
        <span>
          <BackIcon className="w-14 h-14 p-2 border border-gray-300 dark:border-gray-500 rounded-full -rotate-90 transition-all duration-300 hover:scale-105 hover:border-slate-950 dark:hover:border-slate-50 drop-shadow-md" />
        </span>
      </Link>

      {/* Title */}
      <h3 className="text-2xl md:text-4xl font-semibold mb-5 sm:mb-10 text-center">
        {post?.title}
      </h3>

      {/* Principal Image */}
      {post?.imageSrc ? (
        <div className="max-h-full w-full md:max-w-3xl mb-8 rounded-lg shadow-xl overflow-hidden">
          <Image
            src={builder.image(post.imageSrc).url()}
            alt={post?.imageSrc?.alt || post?.title}
            height={400}
            width={600}
            className="object-cover w-full"
            placeholder="blur"
            blurDataURL={getShimmerPlaceholder(600, 400)}
          />
        </div>
      ) : null}

      {/* Content */}

      <div className="mb-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5">
        <span className="text-slate-500 font-caveat">{formattedDate}</span>
        {post?.tags && (
          <div>
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

      <div className="text-justify text-main w-full md:w-3/4 xl:w-2/3 font-nunito p-3 rounded-lg prose dark:prose-invert">
        {post?.body ? <PortableTextRenderer content={post.body} /> : null}
      </div>
    </div>
  );
};

export default NewsFullPage;

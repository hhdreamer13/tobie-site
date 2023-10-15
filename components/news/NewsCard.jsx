import Image from "next/image";
import Link from "next/link";
import MaximizeIcon from "../common/MaximizeIcon";

import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";
import { PortableText } from "@portabletext/react";

const emptyComponent = () => null;

const cardComponents = {
  types: {
    image: emptyComponent,
  },
};

const NewsCard = ({ post }) => {
  const builder = imageUrlBuilder(client);

  const formattedDate = post.date
    ? new Date(post?.date).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <li className="relative flex flex-col sm:flex-row h-auto mb-8 pb-8 transform transition-transform duration-300 ease-in-out">
      {post?.imageSrc ? (
        <div className="relative flex-none sm:w-1/3 z-0 sm:z-10">
          <Image
            className="absolute rounded-lg rounded-br-none rounded-bl-none sm:rounded-bl-lg shadow-lg w-full h-52 object-cover"
            src={builder.image(post.imageSrc).width(600).height(400).url()}
            alt={post?.imageSrc?.alt || post?.title}
            width={600}
            height={400}
          />
        </div>
      ) : null}
      <div className="group relative dark:bg-opacity-75 rounded-lg rounded-tl-lg sm:rounded-tl-none shadow-lg flex-auto sm:w-2/3 mt-16 sm:mt-8">
        <div className="absolute -inset-1 bg-gradient-to-br from-slate-50 dark:from-slate-950 to-teal-100 dark:to-teal-900 rounded-lg blur opacity-25 group-hover:opacity-80 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex flex-col gap-3 w-full h-full p-4 bg-white/75 dark:bg-slate-950/80 rounded-lg rounded-tl-lg sm:rounded-tl-none">
          <Link
            href={`/news/${post?._id}`}
            className="absolute top-0 right-0 m-2"
          >
            <MaximizeIcon className="w-6 h-6 hover:scale-105" />
          </Link>
          <h3 className="text-xl font-semibold font-literata w-11/12">
            {post.title}
          </h3>
          <div className="mb-2 flex flex-col gap-1 sm:block">
            <span className="text-slate-500 font-caveat">{formattedDate}</span>
            {post?.tags && (
              <div className="block sm:inline-block">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="ml-2 text-xs text-white font-caveat bg-green-500 rounded-full px-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="mb-2">
            <div className="text-main text-sm text-justify line-clamp-3">
              {post?.body ? (
                <PortableText value={post.body} components={cardComponents} />
              ) : null}
            </div>
          </div>
          <Link
            href={`/sections/actualites/${post?.slug?.current}`}
            className="font-caveat hover:text-sky-600 text-sky-500 transition-colors duration-200 ease-in-out text-lg"
          >
            <span className="relative no-underline before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded before:bg-sky-500 before:origin-right before:transition-transform before:duration-[0.3s] before:ease-[ease-in-out] before:scale-x-0 before:left-0 before:bottom-0 hover:before:origin-left hover:before:scale-x-100">
              Lire la suite
            </span>
          </Link>
        </div>
      </div>
    </li>
  );
};

export default NewsCard;

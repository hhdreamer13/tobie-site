import slugify from "@/utils/slugify";
import Image from "next/image";
import Link from "next/link";

const ImageBar = ({ section, index, currentSection, handleMouseEnter }) => {
  return (
    <div
      key={index}
      className="relative transition-all flex flex-col items-center justify-center gap-2"
      onMouseEnter={() => handleMouseEnter(index)}
    >
      <p
        className={`absolute -top-8 opacity-0 duration-500 text-center w-20 text-slate-100 ${
          currentSection === index ? "-translate-y-8 opacity-100" : ""
        }`}
      >
        {section.title}
      </p>

      <div
        className={`relative w-9 md:w-11 h-full rounded-xl overflow-hidden duration-500 drop-shadow-md ${
          currentSection === index ? "-translate-y-8" : ""
        }`}
      >
        <Link href={`/sections/${slugify(section.title)}`}>
          <Image
            src={section.imageSrc}
            alt={section.title}
            fill="true"
            priority={true}
            sizes="100vh"
            className="object-cover"
          />
        </Link>
      </div>
      <div
        className={`w-5 h-5 opacity-0 duration-700 ${
          currentSection === index ? "-translate-y-8 opacity-100" : ""
        }`}
      >
        <Image src="/assets/circle.svg" width={100} height={100} alt="circle" />
      </div>
    </div>
  );
};

export default ImageBar;

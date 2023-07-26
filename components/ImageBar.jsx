import Image from "next/image";

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
        <Image
          src={section.imageSrc}
          alt={section.title}
          fill="true"
          className="object-cover"
        />
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

import Image from "next/image";

const SectionFrame = ({ section }) => {
  if (!section) {
    return null;
  }
  return (
    <div className="w-full mx-auto rounded-2xl p-1 flex flex-col justify-start items-center">
      <Image
        alt=""
        src={section.imageSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2 rounded-t-2xl overflow-hidden"
      />

      <div className="bg-white p-4 px-6 text-center">
        <h3>{section.title}</h3>
        <p>{section.description}</p>
      </div>
    </div>
  );
};
export default SectionFrame;

import Image from "next/image";

const Frame = ({ section }) => {
  console.log(section);
  return (
    <>
      <Image
        alt=""
        src={section.imgSrc}
        height={600}
        width={600}
        className="w-full object-cover aspect-square col-span-2"
      />

      <div className="bg-white p-4 px-6">
        <h3>{section.title}</h3>
        <p>{section.description}</p>
      </div>
    </>
  );
};
export default Frame;

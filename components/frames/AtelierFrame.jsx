"use client";

import Image from "next/image";

const AtelierFrame = ({ item, isOpen, setIsOpen }) => {
  if (!item) {
    return null;
  }
  return (
    <div className="relative w-full h-full rounded-xl p-5 flex flex-col sm:flex-row gap-5 justify-start items-center bg-main">
      {/* Enlarge Button */}
      <button
        className="absolute top-0 right-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image
          className="relative w-8 h-8 sm:w-9 sm:h-9"
          src="/assets/enlarge.svg"
          width={100}
          height={100}
          alt="close"
        />
      </button>
      <div className="">
        <Image
          className="w-full h-60 object-cover rounded-2xl overflow-hidden"
          alt=""
          src={item.imageSrc}
          height={400}
          width={400}
        />
      </div>

      <div className="w-full sm:w-1/2">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="mb-4">{item.description}</p>

        <form className="gap-4">
          <input
            type="text"
            placeholder="Nom"
            className="w-full p-2 border-2 border-gray-300 rounded-md"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border-2 border-gray-300 rounded-md"
            required
          />
          <textarea
            placeholder="Commentaire"
            className="w-full p-2 border-2 border-gray-300 rounded-md h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 px-4 text-main rounded-md border hover:underline"
          >
            Inscrire
          </button>
        </form>
      </div>
    </div>
  );
};

export default AtelierFrame;

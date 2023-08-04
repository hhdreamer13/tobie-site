import Image from "next/image";

const LocationFrame = ({ item }) => {
  if (!item) {
    return null;
  }
  return (
    <div className="w-full rounded-2xl p-5 flex flex-col md:flex-row gap-5 justify-start items-center bg-main">
      <div className="">
        <Image
          className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl overflow-hidden"
          alt=""
          src={item.imageSrc}
          height={400}
          width={400}
        />
      </div>

      <div className="w-full md:w-1/2">
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

export default LocationFrame;

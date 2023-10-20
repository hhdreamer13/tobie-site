import { motion } from "framer-motion";
import MinimizeIcon from "../common/MinimizeIcon";
import { useRef } from "react";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/clientConfig";

const overlayVariants = {
  hidden: { scaleY: 0, originY: 0.5 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.3 },
  },
  exit: {
    scaleY: 0,
    transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.4 },
  },
};

const modalVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.43, 0.13, 0.23, 0.96],
      when: "beforeChildren",
      delay: 0.6,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    transition: { duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const ModalGameCard = ({ item, setShowModal }) => {
  const overlayRef = useRef(null);

  const builder = imageUrlBuilder(client);

  const handleOverlayClick = (event) => {
    if (event.target === overlayRef.current) {
      setShowModal(false);
    }
  };

  return (
    <motion.div
      ref={overlayRef}
      className="fixed w-full h-full inset-0 flex items-center justify-center bg-black bg-opacity-50 dark:bg-opacity-70 z-10"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={overlayVariants}
      onClick={handleOverlayClick}
    >
      <motion.div
        className="relative w-80 sm:w-96 flex flex-col border-[1px] dark:border-slate-800 border-slate-300 justify-start bg-main items-center rounded-xl p-5 z-20"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        {/* Close */}
        <button
          className="absolute top-0 right-0 m-2"
          onClick={() => setShowModal(false)}
        >
          <div className="w-7 h-7 rounded-lg bg-slate-100/40 dark:bg-slate-950/30 flex justify-center items-center">
            <MinimizeIcon className="w-6 h-6 hover:scale-105" />
          </div>
        </button>

        {/* Principal Image */}
        <div className="w-full max-h-60 mb-8 rounded-lg shadow-xl overflow-hidden bg-white">
          <Image
            className="relative object-contain mx-auto w-fit"
            alt={item?.type}
            src={
              item?.imageDetailSrc
                ? builder
                    .image(item.imageDetailSrc)
                    .width(500)
                    .height(500)
                    .url()
                : builder.image(item?.imageSrc).width(500).height(500).url()
            }
            height={500}
            width={500}
            // fill={true}
          />
        </div>

        {/* Content */}
        <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-center line-clamp-3">
          {/* {item.title} */}
        </h3>

        <div className="text-justify text-main text-sm w-full font-nunito p-3 max-h-36 sm:max-h-40 overflow-y-scroll border rounded-lg">
          <p className="whitespace-pre-wrap">{item?.description}</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ModalGameCard;

import NextImage from "next/image";
import group1LeafLeftBottom from "public/leaf/group1-leaf-left-bottom.webp";
import group1LeafLeftTop from "public/leaf/group1-leaf-left-top.webp";
import group1LeafRightBottom from "public/leaf/group1-leaf-right-bottom.webp";
import group1LeafRightTop from "public/leaf/group1-leaf-right-top.webp";

const DesktopGroupLeaf = ({ group1Refs }) => (
  <>
    <NextImage
      width={960}
      height={540}
      ref={(el) => group1Refs.current.push(el)}
      className="fullscreenImage absolute"
      src={group1LeafLeftBottom}
      alt="Decor Tobie"
      data-group="1"
      data-position="left-bottom"
    />
    <NextImage
      width={960}
      height={540}
      ref={(el) => group1Refs.current.push(el)}
      className="fullscreenImage absolute"
      src={group1LeafLeftTop}
      alt="Decor Tobie"
      data-group="1"
      data-position="left-top"
    />
    <NextImage
      width={960}
      height={540}
      ref={(el) => group1Refs.current.push(el)}
      className="fullscreenImage absolute"
      src={group1LeafRightBottom}
      alt="Decor Tobie"
      data-group="1"
      data-position="right-bottom"
    />
    <NextImage
      width={960}
      height={540}
      ref={(el) => group1Refs.current.push(el)}
      className="fullscreenImage absolute"
      src={group1LeafRightTop}
      alt="Decor Tobie"
      data-group="1"
      data-position="right-top"
    />
  </>
);

export default DesktopGroupLeaf;

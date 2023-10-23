import { useEffect, useRef } from "react";
import gsap from "gsap";

const RestartIcon = ({ className }) => {
  const path1Ref = useRef(null);
  const path2Ref = useRef(null);

  useEffect(() => {
    const path1Length = path1Ref.current.getTotalLength();
    const path2Length = path2Ref.current.getTotalLength();

    gsap.set(path1Ref.current, {
      strokeDasharray: path1Length,
      strokeDashoffset: path1Length,
      opacity: 0,
    });
    gsap.set(path2Ref.current, {
      strokeDasharray: path2Length,
      strokeDashoffset: path2Length,
      opacity: 0,
    });

    gsap.fromTo(
      path1Ref.current,
      {
        opacity: 0,
      },
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2,
        ease: "bounce.out",
        delay: 3,
      },
    );

    gsap.fromTo(
      path2Ref.current,
      {
        opacity: 0,
      },
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 2,
        ease: "bounce.out",
        delay: 3,
      },
    );
  }, []);

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={path1Ref}
        d="M15.9775 8.71452L15.5355 8.2621C13.5829 6.26318 10.4171 6.26318 8.46447 8.2621C6.51184 10.261 6.51184 13.5019 8.46447 15.5008C10.4171 17.4997 13.5829 17.4997 15.5355 15.5008C16.671 14.3384 17.1462 12.7559 16.9611 11.242M15.9775 8.71452H13.3258M15.9775 8.71452V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        ref={path2Ref}
        d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default RestartIcon;

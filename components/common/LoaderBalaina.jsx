import Lottie from "lottie-react";
import balaina from "@/public/balaina-test.json";

const LoaderBalaina = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-950 text-main w-full h-screen text-4xl flex justify-center items-center">
      <Lottie animationData={balaina} />
    </div>
  );
};

export default LoaderBalaina;

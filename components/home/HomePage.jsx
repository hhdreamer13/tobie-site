"use client";

import { useEffect } from "react";
import TitlePage from "@/components/home/TitlePage";
import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/sections");
    }, 60000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="w-full bg-main flex flex-col justify-center items-center overflow-hidden">
      <TitlePage key="title" />
    </div>
  );
};

export default HomePage;

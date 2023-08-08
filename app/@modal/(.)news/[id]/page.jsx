"use client";

import { useState, useEffect } from "react";
import NewsFrame from "@/components/frames/NewsFrame";
import InterceptModal from "@/components/modals/InterceptModal";
import news from "@/utils/news";

export default function SectionModalPage({ params }) {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = params;

  useEffect(() => {
    setIsOpen(true);
  }, [id]);

  const item = news.find((n) => n.id === parseInt(id));

  return (
    <InterceptModal item={item} isOpen={isOpen} setIsOpen={setIsOpen}>
      <NewsFrame item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
    </InterceptModal>
  );
}

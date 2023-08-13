"use client";

import { useState, useEffect } from "react";
import InterceptModal from "@/components/modals/InterceptModal";
import downloads from "@/utils/downloads";
import DownloadFrame from "@/components/frames/DownloadFrame";

export default function SectionModalPage({ params }) {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = params;

  useEffect(() => {
    setIsOpen(true);
  }, [id]);

  const item = downloads.find((n) => n.id === parseInt(id));

  return (
    <InterceptModal item={item} isOpen={isOpen} setIsOpen={setIsOpen}>
      <DownloadFrame item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
    </InterceptModal>
  );
}

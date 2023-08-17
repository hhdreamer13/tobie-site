"use client";

import { useState, useEffect } from "react";
import AtelierFrame from "@/components/frames/AtelierFrame";
import InterceptModal from "@/components/modals/InterceptModal";
import ateliers from "@/utils/ateliers";

export default function SectionModalPage({ params }) {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = params;

  useEffect(() => {
    setIsOpen(true);
  }, [id]);

  const item = ateliers.find((atelier) => atelier.id === parseInt(id));

  return (
    <InterceptModal item={item} isOpen={isOpen} setIsOpen={setIsOpen}>
      <AtelierFrame item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
    </InterceptModal>
  );
}

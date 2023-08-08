"use client";

import { useState, useEffect } from "react";
import LocationFrame from "@/components/frames/LocationFrame";
import InterceptModal from "@/components/modals/InterceptModal";
import locations from "@/utils/locations";

export default function SectionModalPage({ params }) {
  const [isOpen, setIsOpen] = useState(false);

  const { id } = params;

  useEffect(() => {
    setIsOpen(true);
  }, [id]);

  const item = locations.find((location) => location.id === parseInt(id));

  return (
    <InterceptModal item={item} isOpen={isOpen} setIsOpen={setIsOpen}>
      <LocationFrame item={item} isOpen={isOpen} setIsOpen={setIsOpen} />
    </InterceptModal>
  );
}

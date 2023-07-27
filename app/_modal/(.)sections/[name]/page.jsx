"use client";

import { useState, useEffect } from "react";
import SectionFrame from "@/components/frames/SectionFrame";
import SectionModal from "@/components/modals/SectionModal";
import sections from "@/utils/sections";
import slugify from "@/utils/slugify";

export default function SectionModalPage({ params }) {
  const [isOpen, setIsOpen] = useState(false);

  const { name } = params;

  useEffect(() => {
    setIsOpen(true);
  }, [name]);

  const section = sections.find((s) => slugify(s.title) === name);

  return (
    <SectionModal section={section} isOpen={isOpen} setIsOpen={setIsOpen}>
      <SectionFrame section={section} />
    </SectionModal>
  );
}

import SectionFrame from "@/components/frames/SectionFrame";
import sections from "@/utils/sections";
import slugify from "@/utils/slugify";

export default function SectionPage({ params }) {
  const { name } = params;

  const section = sections.find((s) => slugify(s.title) === name);

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <SectionFrame section={section} />
      </div>
    </div>
  );
}

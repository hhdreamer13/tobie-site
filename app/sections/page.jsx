import SectionMenu from "@/components/section-menu/SectionMenu";
import { getSections } from "@/sanity/sanity-utils";

export default async function Home() {
  const sections = await getSections();
  console.log(sections);

  return (
    <div className="w-full min-h-screen justify-center items-center">
      <SectionMenu sections={sections} />
    </div>
  );
}

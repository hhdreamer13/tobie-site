import { sanityFetch } from "@/sanity/sanityFetch";
import AboutUs from "../../../components/contact/AboutUs";
import { allPartnersQuery, pageTextsQuery } from "@/sanity/sanityQueries";

export default async function SectionPage() {
  const pageText = await sanityFetch({
    query: pageTextsQuery,
    params: {
      sectionUrl: "/sections/contact", // we're using a query for all pages with a dynamic param
    },
    tags: ["pageTexts"],
  });

  const partners = await sanityFetch({
    query: allPartnersQuery,
    tags: ["partner"],
  });

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-main">
        <div className="flex justify-center items-start w-full h-full ">
          <AboutUs content={pageText} partnersLogos={partners} />
        </div>
      </div>
    </>
  );
}

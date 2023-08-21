import AboutUs from "../../../components/contact/AboutUs";

export default function SectionPage() {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-main">
        <div className="flex justify-center items-start w-full h-full ">
          <AboutUs />
        </div>
      </div>
    </>
  );
}

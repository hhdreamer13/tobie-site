import SectionHeader from "@/components/common/SectionHeader";
import MapDisplay from "@/components/maps/MapDisplay";

// Hardcoded data
const locations = [
  {
    id: 1,
    name: "Location 1",
    latitude: 48.8516666,
    longitude: 2.3132107,
    description: "This is a description of location 1.",
    imageUrl: "/photos/01.webp",
    linkUrl: "https://example.com/location1",
  },
  {
    id: 2,
    name: "Location 2",
    latitude: 48.8628631,
    longitude: 2.4047319,
    description: "This is a description of location 2.",
    imageUrl: "/photos/02.webp",
    linkUrl: "https://example.com/location2",
  },
  {
    id: 3,
    name: "Location 3",
    latitude: 44.8628631,
    longitude: 2.2047319,
    description: "This is a description of location 3.",
    imageUrl: "/photos/03.webp",
    linkUrl: "https://example.com/location2",
  },
  {
    id: 4,
    name: "Location 4",
    latitude: 43.8628631,
    longitude: 2.4047319,
    description: "This is a description of location 4.",
    imageUrl: "/photos/04.webp",
    linkUrl: "https://example.com/location2",
  },
  {
    id: 5,
    name: "Location 5",
    latitude: 48.8628631,
    longitude: 1.4047319,
    description: "This is a description of location 5.",
    imageUrl: "/photos/05.webp",
    linkUrl: "https://example.com/location2",
  },
];

export default function SectionPage() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-main">
      <div className="z-10">
        <SectionHeader />
      </div>
      <div className="mt-40 mb-10">
        <h2>This is the top of the page Text</h2>
      </div>
      <div className="flex justify-center items-start w-full h-full">
        <MapDisplay locations={locations} />
      </div>
    </div>
  );
}

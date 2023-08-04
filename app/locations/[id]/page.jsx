import LocationFrame from "@/components/frames/LocationFrame";
import locations from "@/utils/locations";

export default function LocationPage({ params }) {
  const { id } = params;

  const item = locations.find((location) => location.id === parseInt(id));

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <LocationFrame item={item} />
      </div>
    </div>
  );
}

import SectionHeading from "../components/SectionHeading";
import PropertyCard from "../components/PropertyCard";
import { PROPERTIES } from "../data/properties";

export default function Cottages() {
  return (
    <div className="section-pad px-5 md:px-16 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Stay"
        title="Our Cottages"
        description="Three hand-built sanctuaries above Jibhi — each with its own character, all sharing the same quiet."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROPERTIES.map((property) => (
          <PropertyCard key={property.slug} property={property} />
        ))}
      </div>
    </div>
  );
}

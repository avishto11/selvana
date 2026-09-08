import SectionHeading from "../components/SectionHeading";
import PackageCard from "../components/PackageCard";
import { PACKAGES } from "../data/packages";

export default function Packages() {
  return (
    <div className="section-pad px-5 md:px-16 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Experiences"
        title="Curated Packages"
        description="Immersive experiences designed to help you connect with the soul of the mountains. Pricing depends on season and party size — enquire for a tailored quote."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PACKAGES.map((pkg) => (
          <PackageCard key={pkg.slug} pkg={pkg} />
        ))}
      </div>
    </div>
  );
}

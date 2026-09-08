import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <div className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <Link to={`/cottages/${property.slug}`} className="h-64 overflow-hidden block">
        <img
          src={property.heroImage}
          alt={property.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </Link>
      <div className="p-6 flex flex-col gap-4 flex-1">
        <h3 className="font-display text-headline-sm text-primary">{property.shortName}</h3>
        <p className="font-body text-body-md text-on-surface-variant">{property.summary}</p>
        <div className="grid grid-cols-2 gap-2 mt-auto">
          {property.highlights.slice(0, 4).map((h) => (
            <span key={h} className="font-body text-label-sm text-on-surface-variant">
              {h}
            </span>
          ))}
        </div>
        <Link
          to={`/cottages/${property.slug}`}
          className="mt-2 text-primary font-body text-label-lg flex items-center gap-2 hover:gap-4 transition-all"
        >
          View Details <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

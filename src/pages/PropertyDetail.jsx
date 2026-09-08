import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { getPropertyBySlug, PROPERTIES } from "../data/properties";
import { AMENITY_GROUPS, UNAVAILABLE_AMENITIES } from "../data/amenities";
import { whatsappLink } from "../data/site";
import Lightbox from "../components/Lightbox";
import PropertyCard from "../components/PropertyCard";
import SectionHeading from "../components/SectionHeading";

export default function PropertyDetail() {
  const { slug } = useParams();
  const property = getPropertyBySlug(slug);

  const categoryEntries = property ? Object.entries(property.gallery) : [];
  const [activeCategory, setActiveCategory] = useState(categoryEntries[0]?.[0]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!property) return <Navigate to="/cottages" replace />;

  const activeImages = property.gallery[activeCategory]?.images ?? [];
  const otherProperties = PROPERTIES.filter((p) => p.slug !== property.slug);

  return (
    <div>
      {/* Hero */}
      <header className="relative h-[60vh] min-h-[420px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img src={property.heroImage} alt={property.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
        <div className="relative z-10 px-5 md:px-16 max-w-7xl mx-auto w-full pb-10 text-white">
          <Link to="/cottages" className="font-body text-label-sm text-white/80 hover:text-white inline-flex items-center gap-1 mb-4">
            <span className="material-symbols-outlined text-base">arrow_back</span> All Cottages
          </Link>
          <h1 className="font-display text-headline-lg">{property.name}</h1>
          <p className="font-body text-body-lg text-white/90 mt-2">{property.tagline}</p>
        </div>
      </header>

      {/* Overview */}
      <section className="section-pad px-5 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h2 className="font-display text-headline-md text-primary">Overview</h2>
            {property.description.map((paragraph, i) => (
              <p key={i} className="font-body text-body-lg text-on-surface-variant">
                {paragraph}
              </p>
            ))}

            <div className="flex flex-wrap gap-3 mt-2">
              {property.highlights.map((h) => (
                <span
                  key={h}
                  className="font-body text-label-sm bg-secondary-container text-on-secondary-container px-4 py-2 rounded-full"
                >
                  {h}
                </span>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-4 bg-surface-container-low rounded-xl p-8 h-max">
            <h3 className="font-display text-headline-sm text-primary">Good to Know</h3>
            <div className="flex flex-col gap-3 font-body text-body-md text-on-surface-variant">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">bed</span>
                <span>{property.layout}</span>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">directions_walk</span>
                <span>{property.parkingNote}</span>
              </div>
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-primary">info</span>
                <span>{property.inclusionNote}</span>
              </div>
            </div>
            <a
              href={whatsappLink(`Hi Selvana, I'd like to enquire about ${property.name}.`)}
              target="_blank"
              rel="noreferrer"
              className="mt-2 bg-primary text-on-primary font-body text-label-lg px-6 py-3 rounded-lg text-center hover:bg-primary-container transition-colors"
            >
              Enquire About This Cottage
            </a>
          </aside>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-pad bg-surface-container-low">
        <div className="px-5 md:px-16 max-w-7xl mx-auto">
          <SectionHeading align="left" title="Amenities" description="Everything provided across our Selvana cottages." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
            {AMENITY_GROUPS.map((group) => (
              <div key={group.group} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined">{group.icon}</span>
                  <h4 className="font-body text-label-lg">{group.group}</h4>
                </div>
                <ul className="flex flex-col gap-1.5 pl-1">
                  {group.items.map((item) => (
                    <li key={item} className="font-body text-body-md text-on-surface-variant">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-surface-variant">
            <h4 className="font-body text-label-lg text-on-surface-variant mb-3">Not Available</h4>
            <div className="flex flex-wrap gap-3">
              {UNAVAILABLE_AMENITIES.map((item) => (
                <span key={item} className="font-body text-label-sm text-on-surface-variant/70 line-through">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad px-5 md:px-16 max-w-7xl mx-auto">
        <SectionHeading align="left" title="Photo Gallery" />
        <div className="flex flex-wrap gap-3 mb-8">
          {categoryEntries.map(([catSlug, cat]) => (
            <button
              key={catSlug}
              type="button"
              onClick={() => setActiveCategory(catSlug)}
              className={`font-body text-label-sm px-4 py-2 rounded-full border transition-colors ${
                activeCategory === catSlug
                  ? "bg-primary text-on-primary border-primary"
                  : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {activeImages.map((src, i) => (
            <button
              key={src}
              type="button"
              className="relative aspect-square overflow-hidden rounded-xl shadow-sm group"
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={src}
                alt={`${property.name} — ${property.gallery[activeCategory].label}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>

      <Lightbox images={activeImages} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />

      {/* Other cottages */}
      <section className="section-pad bg-surface-container-low">
        <div className="px-5 md:px-16 max-w-7xl mx-auto">
          <SectionHeading title="Other Sanctuaries" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProperties.map((p) => (
              <PropertyCard key={p.slug} property={p} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

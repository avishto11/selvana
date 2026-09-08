import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Lightbox from "../components/Lightbox";
import { PROPERTIES } from "../data/properties";

const ALL_KEY = "all";

export default function Gallery() {
  const photosByProperty = useMemo(() => {
    return PROPERTIES.map((property) => ({
      slug: property.slug,
      label: property.shortName,
      images: Object.values(property.gallery).flatMap((cat) => cat.images),
    }));
  }, []);

  const allImages = useMemo(() => photosByProperty.flatMap((p) => p.images), [photosByProperty]);

  const [filter, setFilter] = useState(ALL_KEY);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const visibleImages = filter === ALL_KEY ? allImages : photosByProperty.find((p) => p.slug === filter)?.images ?? [];

  return (
    <div className="section-pad px-5 md:px-16 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Gallery"
        title="The Selvana Gallery"
        description="Capturing the soul of Jibhi through every lens."
      />

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        <button
          type="button"
          onClick={() => setFilter(ALL_KEY)}
          className={`font-body text-label-sm px-4 py-2 rounded-full border transition-colors ${
            filter === ALL_KEY ? "bg-primary text-on-primary border-primary" : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
          }`}
        >
          All Cottages
        </button>
        {photosByProperty.map((p) => (
          <button
            key={p.slug}
            type="button"
            onClick={() => setFilter(p.slug)}
            className={`font-body text-label-sm px-4 py-2 rounded-full border transition-colors ${
              filter === p.slug ? "bg-primary text-on-primary border-primary" : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div className="columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {visibleImages.map((src, i) => (
          <button
            key={src}
            type="button"
            className="mb-4 block w-full overflow-hidden rounded-xl shadow-sm group break-inside-avoid"
            onClick={() => setLightboxIndex(i)}
          >
            <img
              src={src}
              alt="Selvana cottage"
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Lightbox images={visibleImages} index={lightboxIndex} onClose={() => setLightboxIndex(null)} onNavigate={setLightboxIndex} />
    </div>
  );
}

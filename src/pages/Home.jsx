import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import PropertyCard from "../components/PropertyCard";
import PackageCard from "../components/PackageCard";
import { PROPERTIES } from "../data/properties";
import { PACKAGES } from "../data/packages";
import { TESTIMONIALS } from "../data/testimonials";
import { SITE, EXPERIENCE_PILLARS, whatsappLink } from "../data/site";
import { assetUrl } from "../lib/assetUrl";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header id="home" className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img src={assetUrl("/images/site/hero.jpg")} alt="Selvana boutique cottage overlooking a snow-covered Jibhi valley" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-4 w-full max-w-3xl mx-auto min-w-0 flex flex-col items-center gap-6">
          <h1 className="font-display text-display-lg text-white w-full">{SITE.name}</h1>
          <p className="font-body text-body-lg text-white/90 w-full">{SITE.tagline}</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 bg-primary text-on-primary font-body text-label-lg px-8 py-4 rounded-lg hover:bg-primary-container transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
          >
            Plan Your Visit
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="section-pad px-5 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-headline-lg text-primary">About Jibhi &amp; The Resort</h2>
            <p className="font-body text-body-lg text-on-surface-variant">
              Nestled in the serene Tirthan Valley, Selvana is a testament to mindful luxury. We&apos;ve woven
              contemporary design into the fabric of the Himalayan landscape, offering a retreat that feels both
              grounded and elevated. Here, time slows down, allowing you to reconnect with nature without
              compromising on comfort.
            </p>
            <p className="font-body text-body-lg text-on-surface-variant">
              Every element, from the locally sourced woodwork to the panoramic windows framing the ancient
              deodars, is designed to bring the outside in. Experience a sanctuary where silence is a luxury and
              the mountain air rejuvenates the soul.
            </p>
          </div>
          <div className="relative h-[420px] md:h-[500px] rounded-xl overflow-hidden shadow-sm shadow-primary/10">
            <img src={assetUrl("/images/site/about.jpg")} alt="Selvana cottage exterior amid snow-covered pines" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Sanctuaries */}
      <section id="properties" className="section-pad px-5 md:px-16 max-w-7xl mx-auto">
        <SectionHeading title="Our Sanctuaries" description="Thoughtfully designed cottages for rest and rejuvenation." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROPERTIES.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </section>

      {/* Curated Packages */}
      <section id="packages" className="section-pad bg-surface-container-low">
        <div className="px-5 md:px-16 max-w-7xl mx-auto">
          <SectionHeading
            title="Curated Packages"
            description="Immersive experiences designed to help you connect with the soul of the mountains."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/packages" className="text-primary font-body text-label-lg inline-flex items-center gap-2 hover:gap-4 transition-all">
              View All Packages <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Experience pillars */}
      <section className="section-pad">
        <div className="px-5 md:px-16 max-w-7xl mx-auto">
          <SectionHeading title="The Selvana Experience" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {EXPERIENCE_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-surface-container-lowest p-8 rounded-xl flex flex-col items-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300 shadow-sm"
              >
                <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-3xl">{pillar.icon}</span>
                </div>
                <h3 className="font-display text-headline-sm text-primary">{pillar.title}</h3>
                <p className="font-body text-body-md text-on-surface-variant">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section-pad bg-surface-container-low">
        <div className="px-5 md:px-16 max-w-7xl mx-auto">
          <SectionHeading title="Guest Stories" description="Moments of peace and connection from our visitors." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="bg-surface-container-lowest p-8 rounded-xl flex flex-col gap-4 shadow-sm border border-surface-variant">
                <div className="flex text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-icon">
                      star
                    </span>
                  ))}
                </div>
                <p className="font-body text-body-md text-on-surface-variant italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-body text-label-lg text-primary mt-2">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="section-pad">
        <div className="px-5 md:px-16 max-w-7xl mx-auto">
          <SectionHeading title="Find Your Way to Serenity" description="Located in the heart of Jibhi, where the mountains meet the sky." />
          <div className="relative w-full h-[450px] rounded-xl overflow-hidden shadow-sm border border-surface-variant">
            <iframe
              title="Selvana location map"
              src={SITE.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}

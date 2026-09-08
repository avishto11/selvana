import { whatsappLink } from "../data/site";

export default function PackageCard({ pkg }) {
  return (
    <div className="flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-surface-container-lowest/90 flex items-center justify-center text-primary shadow-sm">
          <span className="material-symbols-outlined text-xl">{pkg.icon}</span>
        </div>
      </div>
      <div className="p-8 flex flex-col gap-4 flex-1">
        <h3 className="font-display text-headline-sm text-primary">{pkg.name}</h3>
        <p className="font-body text-body-md text-on-surface-variant">{pkg.description}</p>
        <ul className="flex flex-col gap-2">
          {pkg.inclusions.map((item) => (
            <li key={item} className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              <span className="font-body text-label-sm">{item}</span>
            </li>
          ))}
        </ul>
        <a
          href={whatsappLink(`Hi Selvana, I'd like to enquire about the ${pkg.name} package.`)}
          target="_blank"
          rel="noreferrer"
          className="mt-auto pt-2 text-primary font-body text-label-lg flex items-center gap-2 hover:gap-4 transition-all w-max"
        >
          Enquire Now <span className="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}

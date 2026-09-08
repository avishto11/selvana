import rawImageManifest from "./imageManifest.json";
import { assetUrl } from "../lib/assetUrl";

// public-folder paths in the manifest are root-relative and need the
// configured base path prefixed (see src/lib/assetUrl.js).
const imageManifest = Object.fromEntries(
  Object.entries(rawImageManifest).map(([slug, entry]) => [
    slug,
    {
      hero: assetUrl(entry.hero),
      categories: Object.fromEntries(
        Object.entries(entry.categories).map(([catSlug, cat]) => [
          catSlug,
          { ...cat, images: cat.images.map(assetUrl) },
        ]),
      ),
    },
  ]),
);

// Content sourced from "Property Details.docx". Pine & Cedar are a pair of
// identical twin duplex chalets, sold and shown here as one cottage type.
export const PROPERTIES = [
  {
    slug: "pine-cedar",
    name: "Twin Cottages — Pine & Cedar",
    shortName: "Pine & Cedar",
    tagline: "Duplex Chalets with Private Jacuzzi & Valley Views",
    heroImage: imageManifest["pine-cedar"].hero,
    summary:
      "A pair of charming duplex chalets tucked amid serene pine forest, each with a balcony jacuzzi framed by valley views.",
    description: [
      "Nestled amidst serene pine forests, Pine and Cedar are a pair of charming duplex chalets offering a peaceful escape in the lap of nature. Each chalet features a master bedroom and a cozy attic with two beds — one on the ground floor and another on the first floor — a private living area, an attached washroom, and a balcony Jacuzzi with beautiful valley views.",
      "Enjoy Wi-Fi, power backup, in-house food service, bonfire evenings, and nearby jungle trails for refreshing morning hikes.",
    ],
    highlights: ["Balcony Jacuzzi", "Valley Views", "Master Bedroom + Attic Loft", "Wi-Fi", "Bonfire Evenings", "In-House Dining"],
    sleeps: "Up to 4 guests per chalet",
    layout: "Master bedroom + attic loft with 2 beds, private living area, attached washroom",
    parkingNote:
      "On-road parking is available approximately 200 metres from the chalet. A short scenic trek leads to the property, and our team will carry your luggage to and from the parking spot.",
    inclusionNote:
      "Breakfast, room heaters, bonfire and other additional services are not included in the stay price and are chargeable separately.",
    gallery: imageManifest["pine-cedar"].categories,
  },
  {
    slug: "valley-view-maple",
    name: "Valley View Cottage — Maple",
    shortName: "Maple",
    tagline: "Private Hot Tub Amid Pine Forests & Apple Orchards",
    heroImage: imageManifest["valley-view-maple"].hero,
    summary:
      "A peaceful cottage surrounded by pine forest and apple orchards, with a private hot tub and full run of the garden.",
    description: [
      "Escape to Maple, a peaceful chalet surrounded by pine forests, apple orchards and beautiful valley views. The cottage features a private bedroom with an attached washroom, an additional bed in the attic, spacious balconies, and a private hot tub — perfect for a relaxing mountain getaway.",
      "Guests have access to the entire cottage, garden and apple orchards, along with a bonfire area. Amenities include Wi-Fi, power backup and in-house food service.",
    ],
    highlights: ["Private Hot Tub", "Apple Orchard Access", "Attic Bed", "Bonfire Area", "Wi-Fi", "Spacious Balconies"],
    sleeps: "Private bedroom + attic bed",
    layout: "Private bedroom with attached washroom, additional attic bed, spacious balconies",
    parkingNote:
      "On-road parking is available approximately 100 metres from the property, followed by a short trek to the chalet. Our team will carry your luggage from the parking spot.",
    inclusionNote:
      "Breakfast, room heaters, bonfire and other additional services are not included in the stay price and are chargeable separately.",
    gallery: imageManifest["valley-view-maple"].categories,
  },
  {
    slug: "premium-magnolia",
    name: "Premium Cottage — Magnolia",
    shortName: "Magnolia",
    tagline: "Two-Level Sanctuary with Private Hot Tub & Sky Bed",
    heroImage: imageManifest["premium-magnolia"].hero,
    summary:
      "Selvana's premium cottage — two private levels, a hot tub, and a balcony Sky Bed made for stargazing.",
    description: [
      "Escape to Magnolia, our premium mountain cottage, surrounded by peaceful pine forests, apple orchards and beautiful valley views. Designed for comfort, privacy and relaxation, Magnolia offers the perfect setting for a memorable mountain getaway.",
      "The cottage features two comfortable beds on separate levels — one on the ground floor and another on the first floor — along with an attached washroom and spacious balconies.",
      "One of Magnolia's highlights is its private hot tub, perfect for unwinding while enjoying the peaceful mountain surroundings. The balcony also features a beautiful Sky Bed, where you can relax, read, stargaze or simply soak in the breathtaking valley views.",
    ],
    highlights: ["Private Hot Tub", "Balcony Sky Bed", "Two Private Levels", "Valley Views", "Wi-Fi", "In-House Dining"],
    sleeps: "Two beds on separate levels",
    layout: "Two beds on separate levels, attached washroom, spacious balconies with Sky Bed",
    parkingNote:
      "On-road parking is available approximately 200 metres from the property, followed by a short trek to the cottage. Our team will carry your luggage from the parking area to Magnolia.",
    inclusionNote:
      "Breakfast, room heaters, bonfire and other additional services are not included in the stay price and are chargeable separately.",
    gallery: imageManifest["premium-magnolia"].categories,
  },
];

export function getPropertyBySlug(slug) {
  return PROPERTIES.find((p) => p.slug === slug);
}

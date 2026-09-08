// Sourced from "Property Amenities.docx" — applies resort-wide across all Selvana cottages.
export const AMENITY_GROUPS = [
  {
    group: "Scenic Views",
    icon: "landscape",
    items: ["Mountain View", "Valley View"],
  },
  {
    group: "Bathroom",
    icon: "bathtub",
    items: ["Bathtub", "Hot Water", "Hairdryer", "Shampoo", "Body Soap", "Shower Gel", "Towels & Toiletries"],
  },
  {
    group: "Bedroom & Comfort",
    icon: "bed",
    items: [
      "Premium Bed Linen",
      "Extra Pillows & Blankets",
      "Room-Darkening Blinds",
      "Clothes Storage",
      "Essentials — towels, bed sheets, soap & toilet paper",
    ],
  },
  {
    group: "Heating & Cooling",
    icon: "mode_fan",
    items: ["Air Conditioning", "Heating"],
  },
  {
    group: "Internet",
    icon: "wifi",
    items: ["Wi-Fi"],
  },
  {
    group: "Dining Essentials",
    icon: "coffee_maker",
    items: ["Electric Kettle", "Wine Glasses", "Dining Table"],
  },
  {
    group: "Private Outdoor Spaces",
    icon: "deck",
    items: ["Private Patio / Balcony", "Firepit", "BBQ Grill"],
  },
  {
    group: "Relaxation",
    icon: "hot_tub",
    items: ["Private Hot Tub / Jacuzzi"],
  },
  {
    group: "Parking & Access",
    icon: "local_parking",
    items: ["Free On-Street Parking", "Private Entrance", "Separate Property Entrance"],
  },
  {
    group: "Safety",
    icon: "health_and_safety",
    items: ["Smoke Alarm", "Carbon Monoxide Alarm", "Fire Extinguisher", "First Aid Kit"],
  },
  {
    group: "Guest Services",
    icon: "concierge",
    items: [
      "Self Check-In",
      "24-Hour Building Staff",
      "Luggage Drop-Off Available",
      "Cleaning Available During Stay",
      "Long-Term Stays Allowed (28+ days)",
      "Smoking Allowed",
    ],
  },
];

export const UNAVAILABLE_AMENITIES = ["Kitchen", "TV", "Washing Machine", "Tumble Dryer", "Exterior Security Cameras"];

export const SITE = {
  name: "Selvana",
  tagline: "A Modern Sanctuary in the Heart of Jibhi",
  location: "Jibhi, Tirthan Valley, Himachal Pradesh",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  email: "hello@selvana.com",
  whatsappNumber: "919876543210",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13614.444444444444!2d77.3456789!3d31.6345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905000000000001%3A0x0!2sJibhi%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1715850000000!5m2!1sen!2sin",
};

export function whatsappLink(message) {
  const text = encodeURIComponent(message || `Hi Selvana, I'd like to know more about staying at Jibhi.`);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

export function mailtoLink(subject) {
  const s = encodeURIComponent(subject || "Enquiry — Selvana Jibhi");
  return `mailto:${SITE.email}?subject=${s}`;
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Cottages", href: "/cottages" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Testimonials", href: "/#testimonials" },
];

export const EXPERIENCE_PILLARS = [
  {
    icon: "landscape",
    title: "Scenic Location",
    description: "Uninterrupted views of the majestic Himalayan ranges from every vantage point.",
  },
  {
    icon: "cabin",
    title: "Cozy Cottages",
    description: "Meticulously crafted wood interiors offering warmth and minimalist elegance.",
  },
  {
    icon: "explore",
    title: "Curated Experiences",
    description: "Tailored treks, riverside picnics, and cultural immersions designed for you.",
  },
  {
    icon: "favorite",
    title: "Warm Hospitality",
    description: "Attentive, personalized service that makes you feel truly at home in the hills.",
  },
];

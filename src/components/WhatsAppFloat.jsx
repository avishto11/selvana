import { whatsappLink } from "../data/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Selvana on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-primary text-on-primary shadow-lg shadow-primary/30 hover:bg-primary-container hover:scale-105 active:scale-95 transition-all"
    >
      <span className="material-symbols-outlined fill-icon text-3xl">chat</span>
    </a>
  );
}

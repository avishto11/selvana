import { useCallback, useEffect } from "react";

export default function Lightbox({ images, index, onClose, onNavigate }) {
  const goNext = useCallback(() => onNavigate((index + 1) % images.length), [index, images.length, onNavigate]);
  const goPrev = useCallback(() => onNavigate((index - 1 + images.length) % images.length), [index, images.length, onNavigate]);

  useEffect(() => {
    if (index == null) return;

    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, onClose, goNext, goPrev]);

  if (index == null) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute top-6 right-6 text-white/80 hover:text-white"
        onClick={onClose}
      >
        <span className="material-symbols-outlined text-4xl">close</span>
      </button>

      <button
        type="button"
        aria-label="Previous image"
        className="absolute left-2 md:left-6 text-white/80 hover:text-white"
        onClick={(e) => {
          e.stopPropagation();
          goPrev();
        }}
      >
        <span className="material-symbols-outlined text-4xl">chevron_left</span>
      </button>

      <img
        src={images[index]}
        alt=""
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      <button
        type="button"
        aria-label="Next image"
        className="absolute right-2 md:right-6 text-white/80 hover:text-white"
        onClick={(e) => {
          e.stopPropagation();
          goNext();
        }}
      >
        <span className="material-symbols-outlined text-4xl">chevron_right</span>
      </button>

      <div className="absolute bottom-6 text-white/70 font-body text-label-sm">
        {index + 1} / {images.length}
      </div>
    </div>
  );
}

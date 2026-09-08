import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SITE, whatsappLink } from "../data/site";

const LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/#about" },
  { label: "Cottages", to: "/cottages" },
  { label: "Packages", to: "/packages" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-surface/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-5 md:px-16 py-4">
        <Link to="/" className="font-display text-headline-sm text-primary tracking-wide">
          {SITE.name}
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {LINKS.map((link) =>
            link.to.includes("#") ? (
              <Link
                key={link.label}
                to={link.to}
                className="font-body text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `font-body text-label-lg transition-colors duration-300 ${
                    isActive ? "text-primary border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </div>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex bg-primary text-on-primary font-body text-label-lg px-8 py-3 rounded-lg hover:bg-primary-container transition-all active:scale-95"
        >
          Enquire
        </a>

        <button
          type="button"
          className="md:hidden text-primary"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="material-symbols-outlined text-3xl">{open ? "close" : "menu"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-surface border-t border-surface-variant px-5 py-6 flex flex-col gap-5">
          {LINKS.map((link) =>
            link.to.includes("#") ? (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="font-body text-label-lg text-on-surface-variant"
              >
                {link.label}
              </Link>
            ) : (
              <NavLink
                key={link.label}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-body text-label-lg ${isActive ? "text-primary" : "text-on-surface-variant"}`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="bg-primary text-on-primary font-body text-label-lg px-6 py-3 rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Enquire
          </a>
        </div>
      )}
    </nav>
  );
}

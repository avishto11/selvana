import { Link } from "react-router-dom";
import { SITE, whatsappLink } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-tertiary-fixed text-on-background" id="contact">
      <div className="max-w-7xl mx-auto px-5 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <span className="font-display text-headline-sm text-primary">{SITE.name}</span>
            <p className="font-body text-body-md text-on-surface-variant">
              A modern sanctuary designed for mindful connection with nature in the heart of Jibhi.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-body text-label-lg text-primary font-bold">Quick Links</h4>
            <Link className="font-body text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/">
              Home
            </Link>
            <Link className="font-body text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/cottages">
              Cottages
            </Link>
            <Link className="font-body text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/packages">
              Packages
            </Link>
            <Link className="font-body text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/gallery">
              Gallery
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="font-body text-label-lg text-primary font-bold">Policies</h4>
            <Link
              className="font-body text-body-md text-on-surface-variant hover:text-primary transition-colors"
              to="/cancellation-policy"
            >
              Cancellation Policy
            </Link>
            <Link className="font-body text-body-md text-on-surface-variant hover:text-primary transition-colors" to="/terms">
              Terms & Conditions
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-body text-label-lg text-primary font-bold">Contact Us</h4>
            <div className="flex flex-col gap-3 font-body text-body-md text-on-surface-variant">
              <a href={`tel:${SITE.phoneHref}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary">call</span>
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-primary">mail</span>
                {SITE.email}
              </a>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                {SITE.location}
              </div>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-2 bg-primary text-on-primary font-body text-label-lg px-6 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors w-max"
              >
                <span className="material-symbols-outlined">chat</span> WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-surface-variant text-center">
          <p className="font-body text-body-md text-on-surface-variant">
            © {new Date().getFullYear()} {SITE.name} Jibhi. All rights reserved. Designed for the Modern Sanctuary.
          </p>
        </div>
      </div>
    </footer>
  );
}

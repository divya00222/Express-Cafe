import { Link } from "react-router-dom";
import { Coffee, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { CAFE_CONFIG } from "../data/cafeData";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-white border-t border-white/10">
      {/* Upper footer grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Logo & Tagline */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white">
              <Coffee className="w-5 h-5 shrink-0" />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-wide">
              {CAFE_CONFIG.brandName}
            </span>
          </Link>
          <p className="text-white/70 text-sm leading-relaxed max-w-sm">
            Experience premium specialty coffee, warm Nepalese hospitality, and industry-standard hands-on barista training. Built around pure coffee passion.
          </p>
        </div>

        {/* Column 2: Quick links */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-primary-light mb-6">
            Quick Navigation
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Home", to: "/" },
              { label: "About Us", to: "/about" },
              { label: "Our Menu", to: "/menu" },
              { label: "Barista Training", to: "/training" },
              { label: "Photo Gallery", to: "/gallery" },
              { label: "Contact Us", to: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-white/85 hover:text-primary-light text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-primary-light mb-6">
            Get In Touch
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
              <span className="text-white/85 text-sm">{CAFE_CONFIG.locationName}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-primary-light shrink-0" />
              <a href={CAFE_CONFIG.phoneRaw} className="text-white/85 hover:text-primary-light text-sm transition-colors">
                {CAFE_CONFIG.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-primary-light shrink-0" />
              <a href={`mailto:${CAFE_CONFIG.email}`} className="text-white/85 hover:text-primary-light text-sm transition-colors break-all">
                {CAFE_CONFIG.email}
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social links */}
        <div>
          <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-primary-light mb-6">
            Follow Our Updates
          </h4>
          <p className="text-white/70 text-sm mb-5 leading-relaxed">
            Stay updated with our latest offers, recipes, coffee events, and training cohort schedules.
          </p>
          <div className="flex gap-3">
            <a
              href={CAFE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-teal-deep hover:bg-primary text-white transition-all duration-300 flex items-center justify-center border border-teal-dark/30"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={CAFE_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-teal-deep hover:bg-primary text-white transition-all duration-300 flex items-center justify-center border border-teal-dark/30"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Lower footer copyright */}
      <div className="border-t border-white/5 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} Express Cafe. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-light transition-colors" onClick={(e) => e.preventDefault()}>
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-light transition-colors" onClick={(e) => e.preventDefault()}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

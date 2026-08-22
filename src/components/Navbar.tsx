import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Coffee, PhoneCall } from "lucide-react";
import { CAFE_CONFIG } from "../data/cafeData";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle transparent -> solid on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Barista Training", path: "/training" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const isHome = location.pathname === "/";
  const showSolidNav = isScrolled || !isHome;

  const isCurrent = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showSolidNav
          ? "bg-white/92 backdrop-blur-md border-b border-border-light shadow-lux py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo and Brand Title */}
        <Link to="/" className="flex items-center gap-2.5 group select-none">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
            showSolidNav ? "bg-primary text-white" : "bg-white text-primary-dark"
          }`}>
            <Coffee className="w-5.5 h-5.5 shrink-0" />
          </div>
          <div>
            <span className={`font-display font-bold text-xl md:text-2xl tracking-wide block transition-colors ${
              showSolidNav ? "text-teal-dark group-hover:text-primary" : "text-white group-hover:text-white/90"
            }`}>
              {CAFE_CONFIG.brandName}
            </span>
            <span className={`text-[9px] font-sans font-bold tracking-widest uppercase block -mt-1 transition-colors ${
              showSolidNav ? "text-text-secondary" : "text-white/80"
            }`}>
              Imadol • Lalitpur
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-sans text-sm font-semibold tracking-wide transition-all py-1.5 border-b-2 ${
                isCurrent(link.path)
                  ? showSolidNav
                    ? "border-primary text-primary"
                    : "border-white text-white"
                  : showSolidNav
                    ? "border-transparent text-teal-dark hover:text-primary hover:border-primary/30"
                    : "border-transparent text-white/80 hover:text-white hover:border-white/30"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Action CTA Button */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className={`inline-flex items-center gap-2 px-5 py-2.5 font-sans text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-300 shadow-md ${
              showSolidNav
                ? "bg-primary hover:bg-primary-light text-white"
                : "bg-white hover:bg-white/90 text-primary-dark"
            }`}
          >
            <PhoneCall className="w-3.5 h-3.5" />
            Enquire Now
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-primary rounded-md ${
            showSolidNav ? "text-teal-dark hover:text-primary" : "text-white hover:text-white/85"
          }`}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer (Slides down dynamically) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`lg:hidden border-b overflow-hidden ${
              showSolidNav ? "bg-white border-border-light" : "bg-teal-deep border-teal-dark/25"
            }`}
            ref={mobileMenuRef}
          >
            <div className="px-4 py-6 space-y-4 max-w-md mx-auto">
              <nav className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block font-sans text-base font-bold px-4 py-3 rounded-lg transition-colors ${
                      isCurrent(link.path)
                        ? showSolidNav
                          ? "bg-primary/10 text-primary border-l-4 border-primary pl-3"
                          : "bg-white/10 text-white border-l-4 border-white pl-3"
                        : showSolidNav
                          ? "text-text-secondary hover:bg-background-soft hover:text-primary"
                          : "text-white/80 hover:bg-teal-dark hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="pt-4 border-t border-border-light/20">
                <Link
                  to="/contact"
                  className={`w-full py-3.5 font-sans text-sm font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 ${
                    showSolidNav ? "bg-primary text-white" : "bg-white text-primary-dark"
                  }`}
                >
                  <PhoneCall className="w-4 h-4" />
                  Enquire Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

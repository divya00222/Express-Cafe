import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS, GalleryItem, FALLBACK_IMAGE } from "../data/cafeData";
import { X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

interface GalleryProps {
  limit?: number;
  initialFilter?: "all" | "cafe" | "training" | "beverage";
}

export default function Gallery({ limit, initialFilter = "all" }: GalleryProps) {
  const [filter, setFilter] = useState<"all" | "cafe" | "training" | "beverage">(initialFilter);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items
  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  // Limit items if requested
  const itemsToDisplay = limit ? filteredItems.slice(0, limit) : filteredItems;

  // Handle keyboard events (Escape, Left, Right)
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, itemsToDisplay]);

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === 0 ? itemsToDisplay.length - 1 : prevIndex - 1;
    });
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prevIndex) => {
      if (prevIndex === null) return null;
      return prevIndex === itemsToDisplay.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const categories = [
    { value: "all", label: "All Photos" },
    { value: "cafe", label: "Cafe Atmosphere" },
    { value: "training", label: "Barista Training" },
    { value: "beverage", label: "Specialty Drinks" },
  ] as const;

  return (
    <div>
      {/* Category Tabs (Interactive) */}
      {!limit && (
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setFilter(cat.value);
                setLightboxIndex(null); // Reset lightbox active state just in case
              }}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${
                filter === cat.value
                  ? "bg-primary text-white shadow-md"
                  : "bg-background-soft text-text-secondary border border-border-light hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grid Composition: Responsive Masonry-Style Layout */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
      >
        <AnimatePresence mode="popLayout">
          {itemsToDisplay.map((item, index) => {
            // Find global index in currently displayed list
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group shadow-lux hover:shadow-lux-hover bg-background-soft border border-border-light"
              >
                <img
                  src={item.src || FALLBACK_IMAGE}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== FALLBACK_IMAGE) {
                      target.src = FALLBACK_IMAGE;
                    }
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-text-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-white text-xs md:text-sm font-medium line-clamp-1">
                      {item.alt}
                    </p>
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-md ml-2">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-text-primary/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
          >
            {/* Close trigger clicking background */}
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setLightboxIndex(null)}
            />

            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 z-51 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-6 z-51 p-3 bg-white/5 hover:bg-white/15 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-6 z-51 p-3 bg-white/5 hover:bg-white/15 text-white rounded-full transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <div className="relative max-w-5xl max-h-[80vh] flex flex-col items-center justify-center z-51 select-none">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={itemsToDisplay[lightboxIndex].src || FALLBACK_IMAGE}
                alt={itemsToDisplay[lightboxIndex].alt}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== FALLBACK_IMAGE) {
                    target.src = FALLBACK_IMAGE;
                  }
                }}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
              />

              {/* Caption & Counter */}
              <div className="mt-4 text-center text-white">
                <p className="text-sm font-sans text-white/90 font-medium px-4">
                  {itemsToDisplay[lightboxIndex].alt}
                </p>
                <p className="text-xs text-primary font-semibold mt-1 uppercase tracking-widest">
                  {lightboxIndex + 1} of {itemsToDisplay.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

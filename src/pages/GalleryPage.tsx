import { useEffect } from "react";
import Gallery from "../components/Gallery";

export default function GalleryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">
            VISUAL PORTFOLIO
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
            Cafe & Academy Moments
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Browse through captured slices of daily coffee servings, intricate barista latte art training, student practice cohorts, and our comfortable wooden indoor lounge located in Imadol, Lalitpur.
          </p>
        </div>

        {/* Gallery interactive layout (Full - no limit parameter) */}
        <div className="max-w-7xl mx-auto">
          <Gallery />
        </div>

      </div>
    </div>
  );
}

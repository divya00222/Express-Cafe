import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_ITEMS, MenuItem } from "../data/cafeData";
import SectionHeading from "../components/SectionHeading";
import MenuCard from "../components/MenuCard";
import Button from "../components/Button";

interface MenuSectionProps {
  isPreview?: boolean;
}

export default function Menu({ isPreview = false }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "coffee" | "iced" | "tea" | "snacks" | "specials">(
    isPreview ? "coffee" : "all"
  );

  const categories = [
    { value: "all", label: "Full Menu", showInPreview: false },
    { value: "coffee", label: "Hot Coffee", showInPreview: true },
    { value: "iced", label: "Iced Coffee", showInPreview: true },
    { value: "tea", label: "Teas & Brews", showInPreview: true },
    { value: "snacks", label: "Quick Snacks", showInPreview: true },
    { value: "specials", label: "Our Specials", showInPreview: true },
  ] as const;

  // Filter items based on active category
  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  // If preview mode, show max 6 items for clean spacing
  const itemsToDisplay = isPreview ? filteredItems.slice(0, 4) : filteredItems;

  return (
    <section className="py-20 md:py-28 bg-white border-y border-border-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Heading */}
        <SectionHeading
          eyebrow="MENU PREVIEW"
          heading="Our Coffee, Your Moment"
          description="From classic rich espresso favorites to hand-crafted iced creations, discover delicious beverage recipes made for every coffee lover."
        />

        {/* Category Selection Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {categories
            .filter((cat) => !isPreview || cat.showInPreview)
            .map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.value
                    ? "bg-primary text-white shadow-md"
                    : "bg-background-soft text-text-secondary hover:bg-primary/10 hover:text-primary border border-border-light"
                }`}
              >
                {cat.label}
              </button>
            ))}
        </div>

        {/* Grid of cards */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {itemsToDisplay.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA (Show only in homepage preview mode) */}
        {isPreview && (
          <div className="mt-12 text-center">
            <Button to="/menu" variant="outline">
              View Full Menu
            </Button>
          </div>
        )}

      </div>
    </section>
  );
}

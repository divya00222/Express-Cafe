import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MENU_ITEMS, MenuItem } from "../data/cafeData";
import MenuCard from "../components/MenuCard";
import { Coffee, Info } from "lucide-react";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "coffee" | "iced" | "tea" | "snacks" | "specials">("all");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { value: "all", label: "Full Menu" },
    { value: "coffee", label: "Hot Espresso" },
    { value: "iced", label: "Iced Drinks" },
    { value: "tea", label: "Teas & Infusions" },
    { value: "snacks", label: "Fresh Bakery" },
    { value: "specials", label: "Signatures" },
  ] as const;

  const filteredItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">
            CRAFTED WITH PRECISION
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-text-primary">
            Our Coffee House Menu
          </h1>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Every beverage is pulled by trained baristas using certified organic Himalayan and specialty beans. Check our fresh list of house hot espresso blends, cold refreshments, and fresh bakeries.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto border-b border-border-light pb-6">
          {categories.map((cat) => (
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

        {/* Notice Info Strip */}
        <div className="max-w-4xl mx-auto mb-10 bg-primary/5 border border-primary/25 p-4 rounded-xl flex items-start gap-3">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-xs text-text-primary/90 leading-relaxed font-medium">
            <strong>Dietary Notice:</strong> Dairy milk in our lattes, cappuccinos, and hot/iced beverages can be substituted with high-quality lactose-free or almond milk alternatives upon request at the counter. Please consult our duty baristas for today's bakery allergen details.
          </p>
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <Coffee className="w-12 h-12 text-caramel/40 mx-auto mb-4" />
            <p className="text-espresso/60 text-sm">No items found in this category.</p>
          </div>
        )}

      </div>
    </div>
  );
}

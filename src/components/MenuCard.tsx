import { motion } from "motion/react";
import { MenuItem, FALLBACK_IMAGE } from "../data/cafeData";
import { Award } from "lucide-react";

interface MenuCardProps {
  item: MenuItem;
  key?: string | number;
}

export default function MenuCard({ item }: MenuCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-border-light rounded-xl overflow-hidden shadow-lux hover:shadow-lux-hover hover:border-primary transition-all duration-300 group flex flex-col h-full"
    >
      {/* Image container */}
      <div className="relative aspect-video overflow-hidden bg-background-soft">
        <img
          src={item.image || FALLBACK_IMAGE}
          alt={item.name}
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
        {item.isPopular && (
          <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <Award className="w-3.5 h-3.5" />
            Popular
          </div>
        )}
      </div>

      {/* Item info */}
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start gap-4 mb-2">
          <h3 className="font-display font-bold text-lg text-text-primary group-hover:text-primary transition-colors duration-200">
            {item.name}
          </h3>
          <span className="font-sans font-bold text-primary whitespace-nowrap text-base">
            {item.price}
          </span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed flex-grow">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

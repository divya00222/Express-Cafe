import { motion } from "motion/react";
import Button from "../components/Button";
import { CAFE_CONFIG, CAFE_IMAGES, FALLBACK_IMAGE } from "../data/cafeData";
import { Coffee, Map } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-24 md:py-32 bg-teal-deep overflow-hidden text-white">
      {/* Background cover image with heavy overlay for maximum readability contrast */}
      <div className="absolute inset-0 z-0">
        <img
          src={CAFE_IMAGES.ctaBackground || FALLBACK_IMAGE}
          alt="Warm steaming coffee beans backdrop"
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== FALLBACK_IMAGE) {
              target.src = FALLBACK_IMAGE;
            }
          }}
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-teal-deep via-teal-deep/95 to-teal-deep" />
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Animated coffee icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-14 h-14 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center mx-auto text-primary-light"
        >
          <Coffee className="w-7 h-7" />
        </motion.div>

        {/* Text Area */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-3xl md:text-5xl font-display font-bold leading-tight"
          >
            Your Next Coffee Experience <br className="hidden sm:inline" />
            Starts Here.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/80 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Visit Express Cafe in Imadol, Lalitpur for fresh specialty hand-brews, warm smiles, and certified vocational barista modules.
          </motion.p>
        </div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <Button to={CAFE_CONFIG.googleMapsDirectionsUrl} isExternal variant="primary" size="lg">
            <Map className="w-4 h-4 mr-2" />
            Get Directions
          </Button>
          <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-teal-dark">
            Contact Express Cafe
          </Button>
        </motion.div>

      </div>
    </section>
  );
}

import { motion } from "motion/react";
import Button from "./Button";
import { CAFE_IMAGES } from "../data/cafeData";
import { Award, ChevronRight, Coffee } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-32 pb-16 overflow-hidden text-white"
      style={{
        background: "linear-gradient(135deg, #12B8CC 0%, #0BA9BD 55%, #008F9F 100%)"
      }}
    >
      {/* Background radial soft aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text copy and CTA buttons (7/12 on large screen) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Small eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-white rounded-full"
            >
              <Award className="w-4 h-4 text-accent-coffee" />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest font-sans">
                COFFEE • CAFE • TRAINING
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1]"
            >
              Crafted Coffee. <br />
              <span className="text-white/90">Built Around Passion.</span>
            </motion.h1>

            {/* Supporting description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/85 text-base md:text-lg max-w-xl leading-relaxed font-sans"
            >
              Experience hand-poured specialty coffee, cozy neighborhood vibes, and industry-accredited hands-on barista training in Imadol, Lalitpur.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button to="/menu" variant="white" size="lg">
                Explore Our Menu
              </Button>
              <Button to="/training" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-dark group">
                <span>Barista Training</span>
                <ChevronRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Right: Large rounded imagery with subtle abstract accents (5/12) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Soft decorative shadow background */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-white/10 to-transparent blur-2xl rounded-3xl opacity-50 pointer-events-none" />

            {/* Large rounded image container */}
            <div className="relative aspect-square md:aspect-4/3 lg:aspect-square bg-teal-dark rounded-3xl overflow-hidden border border-white/10 shadow-lux">
              <img
                src={CAFE_IMAGES.hero}
                alt="Express Cafe coffee extraction barista work"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-deep/30 to-transparent" />
            </div>

            {/* Small floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 bg-teal-deep/95 backdrop-blur-md border border-teal-dark/30 rounded-2xl p-4 shadow-lux hidden sm:flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-accent-coffee shrink-0">
                <Coffee className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[10px] font-bold text-primary-light uppercase tracking-wider block">
                  SPECIALTY ESPRESSO
                </span>
                <span className="text-sm font-bold text-white block">
                  100% Organic Beans
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

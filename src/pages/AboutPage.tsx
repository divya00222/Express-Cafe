import { useEffect } from "react";
import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading";
import { CAFE_IMAGES, CAFE_CONFIG } from "../data/cafeData";
import { Coffee, GraduationCap, Compass, Users } from "lucide-react";
import Button from "../components/Button";

export default function AboutPage() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const chapters = [
    {
      icon: Coffee,
      title: "Our Sourcing Promise",
      desc: "Every single cherry of coffee we roast is grown under shade at altitudes above 1,200 meters in the scenic hills of Nepal. This cold climate ensures a slower maturation process, packing the coffee beans with rich mountain notes and balanced natural sweetness. We pay fair premiums to local farmers to encourage sustainable agriculture."
    },
    {
      icon: GraduationCap,
      title: "Vocational Empowerment",
      desc: "Lalitpur boasts a vibrant young workforce. We noticed a major vocational gap: many desire to work in hospitality but lack hands-on, practical expertise. Our training academy is designed specifically to fill this gap. By certifying baristas on standard commercial machines, we help them secure local employment and prepare them for international specialty fields."
    },
    {
      icon: Compass,
      title: "Our Precision Brews",
      desc: "Coffee is part art, part engineering. We calibrate our grinders multiple times daily to adapt to room humidity and pressure changes. From monitoring TDS (Total Dissolved Solids) to steaming milk to precise sweet-spot microfoam temperatures, we aim to serve the single most balanced cup in Imadol."
    },
    {
      icon: Users,
      title: "The Community Space",
      desc: "We designed Express Cafe to feel like an extension of your own living room. With spacious wooden tables, fast internet access, gentle background acoustics, and an accommodating, polite barista crew, we support local designers, remote writers, and friends meeting up for deep conversations."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-16 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">
            DISCOVER OUR HERITAGE
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary leading-tight">
            Built Around Coffee Passion & Vocational Craft.
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Nestled in the heart of Imadol, Lalitpur, Express Cafe has grown from a local coffee counter into a premier hub for premium specialty brews and standard barista training.
          </p>
        </div>

        {/* Big Banner Graphic */}
        <div className="aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-lux mb-16 border border-border-light">
          <img
            src={CAFE_IMAGES.aboutAlt}
            alt="Warm atmosphere inside Express Cafe Imadol"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Detailed Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-20">
          {chapters.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-background-soft border border-border-light p-6 md:p-8 rounded-2xl shadow-lux hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-xl text-text-primary mb-3">
                  {ch.title}
                </h3>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                  {ch.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action card */}
        <div className="bg-teal-deep rounded-3xl p-8 md:p-12 text-white max-w-5xl mx-auto text-center relative overflow-hidden border border-teal-dark/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_60%)]" />
          <div className="relative z-10 space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              We Savor Every Bean. Learn with Us.
            </h2>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              If you share our coffee obsession, whether as an amateur customer who wants to appreciate latte extractions or as an apprentice barista looking for certified global skills, we have a stool ready for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Button to="/training" variant="white" size="md">
                Browse Barista Training
              </Button>
              <Button to="/contact" variant="outline" size="md" className="border-white text-white hover:bg-white hover:text-teal-dark">
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

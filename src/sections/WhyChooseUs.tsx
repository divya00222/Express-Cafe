import { motion } from "motion/react";
import { WHY_CHOOSE_ITEMS } from "../data/cafeData";
import SectionHeading from "../components/SectionHeading";
import { Coffee, Award, Sparkles, Smile } from "lucide-react";

export default function WhyChooseUs() {
  const iconMap = [Award, Coffee, Smile, Sparkles];

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="WHY CHOOSE US"
          heading="Built Around Excellence & Care"
          description="We take coffee seriously. From roasting beans to calibrating machines and educating student baristas, see why we are Imadol's preferred coffee center."
        />

        {/* Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, index) => {
            const Icon = iconMap[index] || Coffee;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-soft border border-border-light p-6 md:p-8 rounded-2xl shadow-lux hover:shadow-lux-hover hover:border-primary/40 transition-all duration-300 group flex flex-col items-start"
              >
                {/* Minimal line icon container */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-display font-bold text-lg text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

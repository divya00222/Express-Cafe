import { motion } from "motion/react";
import { CAFE_IMAGES } from "../data/cafeData";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { Award, ShieldCheck, Heart } from "lucide-react";

export default function About() {
  const points = [
    {
      icon: Award,
      title: "Quality Coffee",
      desc: "Fresh, premium high-altitude organic beans sourced locally and brewed carefully.",
    },
    {
      icon: ShieldCheck,
      title: "Professional Barista Skills",
      desc: "Hands-on, accredited vocational training for beginners and specialty operators.",
    },
    {
      icon: Heart,
      title: "Friendly Cafe Experience",
      desc: "Warm Nepalese hospitality, safe space, and an engaging team in Imadol.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-background-soft overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Image Collage (5/12 on desktop) */}
          <div className="lg:col-span-5 relative">
            <div className="relative">
              {/* Decorative accent blob */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl pointer-events-none" />

              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative z-10 aspect-3/4 md:aspect-4/3 lg:aspect-3/4 rounded-3xl overflow-hidden shadow-lux border border-border-light"
              >
                <img
                   src={CAFE_IMAGES.about}
                   alt="Espresso shot pulling from high grade espresso machine"
                   referrerPolicy="no-referrer"
                   className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Secondary Layered Image */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -bottom-8 -right-8 w-2/3 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block z-20"
              >
                <img
                  src={CAFE_IMAGES.aboutAlt}
                  alt="Cozy interior cafe setting at Express Cafe Imadol"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>

          {/* Right Column: Copy & Value Points (7/12 on desktop) */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold tracking-widest text-primary uppercase block">
                ABOUT EXPRESS CAFE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary leading-tight">
                More Than Coffee.<br />It's a Place to Connect.
              </h2>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                Express Cafe is a modern specialty hub and standard barista training center located in Imadol, Lalitpur, Nepal. We focus on premium cup selections, community connection, and vocational training workflows.
              </p>
            </div>

            {/* Core Feature Points */}
            <div className="space-y-6">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-sans font-extrabold text-sm text-text-primary uppercase tracking-wider mb-1">
                        {pt.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Discover Link */}
            <div className="pt-2">
              <Button to="/about" variant="primary" size="md">
                Discover Our Story
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

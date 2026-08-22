import { motion } from "motion/react";
import { TRAINING_MODULES, CAFE_CONFIG } from "../data/cafeData";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import { Phone, MessageSquare, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TrainingProps {
  isPreview?: boolean;
}

export default function Training({ isPreview = false }: TrainingProps) {
  const navigate = useNavigate();

  const handleEnquire = (moduleTitle: string) => {
    // Navigate to Contact with state prefilled
    navigate("/contact", { state: { subject: `Barista Course: ${moduleTitle}` } });
  };

  const modulesToDisplay = isPreview ? TRAINING_MODULES.slice(0, 2) : TRAINING_MODULES;

  return (
    <section 
      className="py-20 md:py-28 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #008F9F, #0B6F78)"
      }}
    >
      {/* Background elegant pattern or aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <SectionHeading
          theme="dark"
          eyebrow="BARISTA TRAINING CENTER"
          heading="Learn the Craft. Become a Barista."
          description="Build practical coffee-brewing skills with hands-on vocational barista training designed for beginners, hobbyists, and aspiring specialty cafe operators."
        />

        {/* Training Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {modulesToDisplay.map((module) => (
            <ServiceCard
              key={module.id}
              module={module}
              onEnquire={handleEnquire}
            />
          ))}
        </div>

        {/* CTA Banner Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-teal-deep/50 border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto text-center space-y-6"
        >
          <h3 className="font-display font-bold text-2xl text-white">
            Ready to Begin Your Barista Journey?
          </h3>
          <p className="text-white/80 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Our student intakes are limited to ensure complete machine focus. Enquire immediately to reserve your spot on our next weekly cohort in Imadol, Lalitpur.
          </p>

          {/* Detailed CTA triggers */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {/* Call */}
            <a
              href={CAFE_CONFIG.phoneRaw}
              className="px-5 py-3.5 bg-white text-teal-dark hover:bg-background-soft font-sans text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer rounded-lg shadow-sm"
            >
              <Phone className="w-4 h-4 text-primary" />
              Call 984-1296759
            </a>

            {/* WhatsApp */}
            <a
              href={CAFE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              WhatsApp Enquiry
            </a>

            {/* Custom routing link */}
            {isPreview && (
              <button
                onClick={() => navigate("/training")}
                className="px-5 py-3.5 bg-transparent hover:bg-white hover:text-teal-dark border-2 border-white text-white rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer font-sans"
              >
                View Full Curriculum
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

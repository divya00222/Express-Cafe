import { motion } from "motion/react";
import { TrainingModule } from "../data/cafeData";
import { CheckCircle, Clock } from "lucide-react";

interface ServiceCardProps {
  module: TrainingModule;
  onEnquire: (moduleTitle: string) => void;
  key?: string | number;
}

export default function ServiceCard({ module, onEnquire }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-teal-deep/50 border border-teal-dark/40 rounded-2xl overflow-hidden shadow-lux group hover:border-primary-light/50 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image header with Level badge */}
      <div className="relative aspect-video overflow-hidden bg-teal-dark">
        <img
          src={module.image}
          alt={module.title}
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute top-4 right-4 bg-primary text-white text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
          <Clock className="w-3.5 h-3.5" />
          {module.duration}
        </div>
      </div>

      {/* Info and Curriculum details */}
      <div className="p-6 flex flex-col flex-grow text-white">
        <h3 className="font-display font-bold text-xl mb-3 text-white group-hover:text-accent-coffee transition-colors duration-200">
          {module.title}
        </h3>
        <p className="text-white/80 text-sm leading-relaxed mb-6 flex-grow">
          {module.description}
        </p>

        {/* Skills checklist */}
        <div className="mb-6">
          <h4 className="text-xs uppercase tracking-widest text-accent-coffee font-bold mb-3">
            Core Learning Path
          </h4>
          <ul className="space-y-2">
            {module.skillsLearned.map((skill, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-white/85">
                <CheckCircle className="w-4 h-4 text-accent-coffee shrink-0 mt-0.5" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action button inside the card */}
        <button
          onClick={() => onEnquire(module.title)}
          className="w-full py-3 bg-transparent border border-teal-dark/60 group-hover:border-primary group-hover:bg-primary text-white font-sans text-xs font-bold uppercase tracking-widest rounded-lg transition-all duration-300 cursor-pointer text-center"
        >
          Enquire Module
        </button>
      </div>
    </motion.div>
  );
}

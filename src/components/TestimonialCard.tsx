import { motion } from "motion/react";
import { Testimonial } from "../data/cafeData";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
  key?: string | number;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="bg-white border border-border-light p-6 md:p-8 rounded-2xl shadow-lux flex flex-col justify-between h-full relative"
    >
      <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
      
      <div>
        {/* Stars */}
        <div className="flex gap-1 mb-4" aria-label={`Rated ${testimonial.rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`w-4 h-4 ${
                index < testimonial.rating ? "text-accent-coffee fill-accent-coffee" : "text-border-light"
              }`}
            />
          ))}
        </div>

        {/* Testimonial text */}
        <p className="text-text-secondary text-sm md:text-base italic leading-relaxed mb-6 font-sans">
          "{testimonial.text}"
        </p>
      </div>

      {/* User Info */}
      <div className="border-t border-border-light pt-4 flex items-center justify-between">
        <div>
          <h4 className="font-display font-bold text-sm text-text-primary">
            {testimonial.name}
          </h4>
          <span className="text-xs text-primary font-semibold">
            {testimonial.role}
          </span>
        </div>
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-xs font-bold text-primary font-display uppercase">
          {testimonial.name.charAt(0)}
        </div>
      </div>
    </motion.div>
  );
}

import { motion } from "motion/react";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  id?: string;
}

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "center",
  theme = "light",
  id,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      id={id}
      className={`max-w-3xl mb-12 ${isCenter ? "mx-auto text-center" : "text-left"} ${
        isDark ? "text-cream" : "text-espresso"
      }`}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={`inline-block text-xs font-bold tracking-widest uppercase mb-3 ${
            isDark ? "text-caramel-light" : "text-caramel"
          }`}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight"
      >
        {heading}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            isDark ? "text-cream-dark/80" : "text-espresso/70"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

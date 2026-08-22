import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Typically the hero section takes ~80-100vh.
      // Showing the button after scrolling past 400px is safe and provides immediate value.
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-caramel hover:bg-caramel-light text-espresso rounded-full shadow-lux hover:shadow-lux-hover border border-caramel-light/20 cursor-pointer focus-visible:ring-2 focus-visible:ring-espresso focus-visible:ring-offset-2 flex items-center justify-center"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-5 h-5 shrink-0" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

import { motion } from "motion/react";
import Hero from "../components/Hero";
import InfoStrip from "../components/InfoStrip";
import About from "../sections/About";
import Menu from "../sections/Menu";
import Training from "../sections/Training";
import WhyChooseUs from "../sections/WhyChooseUs";
import GallerySection from "../sections/GallerySection";
import TestimonialCard from "../components/TestimonialCard";
import SectionHeading from "../components/SectionHeading";
import CTA from "../sections/CTA";
import { TESTIMONIALS } from "../data/cafeData";
import { useEffect } from "react";

export default function Home() {
  // Always scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white animate-fade-in">
      {/* Hero Section */}
      <Hero />

      {/* Quick Business Info Strip */}
      <InfoStrip />

      {/* About Section */}
      <About />

      {/* Interactive Menu Preview */}
      <Menu isPreview={true} />

      {/* Barista Training Showcase */}
      <Training isPreview={true} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Live Gallery Showcase */}
      <GallerySection />

      {/* Customer Testimonials Grid */}
      <section className="py-20 md:py-28 bg-white border-t border-border-light">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <SectionHeading
            eyebrow="REVIEWS & FEEDBACK"
            heading="Loved by Locals, Sourced with Pride"
            description="Read what our daily coffee lovers and barista training alumni have to say about their experience with Express Cafe."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final Action CTA Block */}
      <CTA />
    </div>
  );
}

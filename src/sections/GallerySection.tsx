import SectionHeading from "../components/SectionHeading";
import Gallery from "../components/Gallery";
import Button from "../components/Button";

export default function GallerySection() {
  return (
    <section className="py-20 md:py-28 bg-background-soft border-t border-border-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Heading */}
        <SectionHeading
          eyebrow="LIFE AT EXPRESS CAFE"
          heading="Captured Moments"
          description="A glimpse into our daily cafe atmosphere, specialty beverage creations, and practical training classes in action."
        />

        {/* Gallery grid component (pre-set filter, showing first 4 photos for preview) */}
        <div className="mb-12">
          <Gallery limit={4} />
        </div>

        {/* Action Link to full gallery page */}
        <div className="text-center">
          <Button to="/gallery" variant="outline">
            View All Photos
          </Button>
        </div>

      </div>
    </section>
  );
}

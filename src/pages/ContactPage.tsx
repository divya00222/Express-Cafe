import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import { CAFE_CONFIG } from "../data/cafeData";
import { Map, Clock, ShieldAlert } from "lucide-react";
import Button from "../components/Button";

export default function ContactPage() {
  const location = useLocation();
  // Read state prefilledSubject from navigation state, fallback to empty
  const stateSubject = (location.state as { subject?: string })?.subject || "";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "7:00 AM - 7:00 PM" },
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 space-y-20">
        
        {/* Contact Form Wrapper */}
        <div className="max-w-6xl mx-auto">
          <ContactSection prefilledSubject={stateSubject} />
        </div>

        {/* Business Hours & Map Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto pt-10 border-t border-border-light">
          
          {/* Left Column: Map details & opening times (5/12) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold text-primary uppercase tracking-widest block">
                VISIT THE HOUSE
              </span>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                Visit Express Cafe
              </h2>
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                We are conveniently located along the main road in Imadol, Lalitpur, Nepal. Spot our elegant wooden coffee bar sign and step right in.
              </p>
            </div>

            {/* Business Hours List */}
            <div className="bg-background-soft border border-border-light p-6 rounded-2xl space-y-4 shadow-lux">
              <h3 className="font-sans font-bold text-sm text-text-primary uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Cafe & Desk Hours
              </h3>
              <div className="divide-y divide-border-light">
                {businessHours.map((bh, i) => (
                  <div key={i} className="flex justify-between items-center py-2.5 text-xs md:text-sm font-medium">
                    <span className="text-text-secondary">{bh.day}</span>
                    <span className="text-text-primary font-bold">{bh.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Map Route Trigger */}
            <div>
              <Button
                to={CAFE_CONFIG.googleMapsDirectionsUrl}
                isExternal
                variant="primary"
                className="w-full sm:w-auto"
              >
                <Map className="w-4 h-4 mr-2" />
                Get Directions on Google Maps
              </Button>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7/12) */}
          <div className="lg:col-span-7 aspect-video lg:h-[380px] bg-background-soft rounded-3xl overflow-hidden shadow-lux border border-border-light relative">
            <iframe
              src={CAFE_CONFIG.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Express Cafe Google Maps Location"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

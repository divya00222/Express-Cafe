import { MapPin, Coffee, GraduationCap, Phone } from "lucide-react";
import { CAFE_CONFIG } from "../data/cafeData";

export default function InfoStrip() {
  const items = [
    {
      icon: MapPin,
      title: "Our Location",
      desc: "Imadol, Lalitpur, Nepal",
      link: CAFE_CONFIG.googleMapsDirectionsUrl,
    },
    {
      icon: Coffee,
      title: "Fresh Cafe Brews",
      desc: "Specialty Hot & Cold Cups",
      link: "/menu",
    },
    {
      icon: GraduationCap,
      title: "Barista Academy",
      desc: "Hands-on Practical Training",
      link: "/training",
    },
    {
      icon: Phone,
      title: "Hotline Support",
      desc: "984-1296759",
      link: CAFE_CONFIG.phoneRaw,
    },
  ];

  return (
    <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
      <div className="bg-white border border-border-light shadow-lux rounded-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border-light overflow-hidden">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isRoute = item.link.startsWith("/");

          const content = (
            <div className="p-6 flex items-center gap-4 hover:bg-background-soft transition-all duration-300 h-full">
              <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Icon className="w-5.5 h-5.5" />
              </div>
              <div className="text-left">
                <h3 className="font-sans font-extrabold text-xs text-text-primary uppercase tracking-wider mb-1">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm font-semibold leading-none">
                  {item.desc}
                </p>
              </div>
            </div>
          );

          if (isRoute) {
            return (
              <a key={index} href={item.link} className="block">
                {content}
              </a>
            );
          }

          return (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
              className="block"
            >
              {content}
            </a>
          );
        })}
      </div>
    </section>
  );
}

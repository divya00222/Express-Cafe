// Express Cafe - Site Configuration and Static Content Data

export const CAFE_CONFIG = {
  brandName: "Express Cafe",
  tagline: "Crafted Coffee. Built Around Passion.",
  locationName: "Imadol, Lalitpur, Nepal",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.722564245974!2d85.340003!3d27.664032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f8e40101b7%3A0xe67db5bb6585cc50!2sImadol%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp",
  googleMapsDirectionsUrl: "https://maps.google.com/?q=Express+Cafe+Imadol+Lalitpur+Nepal",
  phone: "984-1296759",
  phoneRaw: "tel:+9779841296759",
  email: "expresscafe2026@gmail.com",
  instagramUrl: "https://www.instagram.com/expresscafe_imadol", // Configurable Instagram URL
  facebookUrl: "https://www.facebook.com/expresscafeimadol",   // Reference Facebook Presence
  whatsappUrl: "https://wa.me/9779841296759?text=Hello%20Express%20Cafe%2C%20I%20would%20like%20to%20enquire%20about%20your%20Barista%20Training%20or%20Menu.",
};

export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80";

// High-quality Unsplash image assets directly related to coffee/baristas
export const CAFE_IMAGES = {
  hero: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80", // Espresso table
  about: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80", // Espresso shot closeup
  aboutAlt: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80", // Elegant Cafe Interior
  trainingHero: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&w=1200&q=80", // Steaming Milk on Espresso Machine
  ctaBackground: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=80", // Soft, warm steam coffee cup
};

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; // Rs. --- style placeholder as per guideline
  category: "coffee" | "iced" | "tea" | "snacks" | "specials";
  image: string;
  isPopular?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  // Coffee (Hot)
  {
    id: "hot-1",
    name: "Espresso",
    description: "Rich, intense, and full-bodied double shot of our house espresso blend.",
    price: "Rs. 130",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=500&auto=format&fit=crop",
    isPopular: false
  },
  {
    id: "hot-2",
    name: "Americano",
    description: "Double shot of espresso diluted with hot water, smooth and bold.",
    price: "Rs. 150",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1551046713-bc47f9f2ed0c?q=80&w=500&auto=format&fit=crop",
    isPopular: false
  },
  {
    id: "hot-3",
    name: "Cappuccino",
    description: "Equal parts espresso, steamed milk, and rich thick milk foam, dusted with cacao.",
    price: "Rs. 190",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=500&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "hot-4",
    name: "Cafe Latte",
    description: "Espresso combined with a generous pour of velvety steamed milk and a thin layer of foam.",
    price: "Rs. 190",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=500&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "hot-5",
    name: "Cafe Mocha",
    description: "Espresso with premium dark chocolate sauce and steamed milk, topped with light foam.",
    price: "Rs. 220",
    category: "coffee",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?q=80&w=500&auto=format&fit=crop",
    isPopular: false
  },

  // Iced Coffee
  {
    id: "iced-1",
    name: "Iced Latte",
    description: "Chilled milk and double espresso served over ice for a smooth refreshing drink.",
    price: "Rs. 200",
    category: "iced",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "iced-2",
    name: "Iced Americano",
    description: "Espresso poured over iced water, perfect for clean, crisp, cold stimulation.",
    price: "Rs. 160",
    category: "iced",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=500&auto=format&fit=crop",
    isPopular: false
  },
  {
    id: "iced-3",
    name: "Iced Caramel Macchiato",
    description: "Chilled vanilla-flavored milk, marked with rich espresso, finished with premium caramel drizzle.",
    price: "Rs. 240",
    category: "iced",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=500&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "iced-4",
    name: "Iced Mocha",
    description: "Cold espresso and milk swirled with rich cocoa, served over ice cube layer.",
    price: "Rs. 230",
    category: "iced",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=500&auto=format&fit=crop",
    isPopular: false
  },

  // Tea & Infusions
  {
    id: "tea-1",
    name: "Special Masala Tea",
    description: "Traditional Nepalese black tea brewed with dynamic aromatic spices and fresh milk.",
    price: "Rs. 100",
    category: "tea",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=500&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "tea-2",
    name: "Lemon Honey Ginger Tea",
    description: "Soothing infusion of fresh mountain ginger, honey, and a splash of freshly squeezed lemon.",
    price: "Rs. 120",
    category: "tea",
    image: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?q=80&w=500&auto=format&fit=crop",
    isPopular: false
  },
  {
    id: "tea-3",
    name: "Premium Green Tea",
    description: "Pure, high-grown organic green tea leaves steeped to golden perfection.",
    price: "Rs. 90",
    category: "tea",
    image: "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?q=80&w=500&auto=format&fit=crop",
    isPopular: false
  },

  // Snacks & Bakery
  {
    id: "snack-1",
    name: "Butter Croissant",
    description: "Flaky, buttery, golden-brown freshly baked French pastry, served warm.",
    price: "Rs. 150",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=500&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "snack-2",
    name: "Chocolate Muffin",
    description: "Rich, moist cocoa muffin studded with melt-in-mouth dark chocolate chips.",
    price: "Rs. 140",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=500&auto=format&fit=crop",
    isPopular: false
  },
  {
    id: "snack-3",
    name: "Chicken Sandwich",
    description: "Grilled sandwich featuring succulent chicken, crisp lettuce, cheese, and house pesto spread.",
    price: "Rs. 250",
    category: "snacks",
    image: "https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?q=80&w=500&auto=format&fit=crop",
    isPopular: true
  },

  // Specials
  {
    id: "special-1",
    name: "Express Signature Cold Brew",
    description: "Slow-steeped for 18 hours using high-altitude specialty beans, delivering an exceptionally smooth sip.",
    price: "Rs. 250",
    category: "specials",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=500&auto=format&fit=crop",
    isPopular: true
  },
  {
    id: "special-2",
    name: "Himalayan Honey Latte",
    description: "Espresso with organic wild honey from Nepalese hills, steamed milk, and a dusting of cinnamon.",
    price: "Rs. 240",
    category: "specials",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=500&auto=format&fit=crop",
    isPopular: true
  }
];

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  skillsLearned: string[];
  image: string;
}

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: "tm-1",
    title: "Espresso Fundamentals",
    description: "Learn the absolute essentials of coffee brewing: dialing in your grind, measuring exact dose, extraction variables, and espresso sensory analysis.",
    duration: "Level 1",
    skillsLearned: ["Grinder Settings & Calibration", "Tamping Techniques", "Extraction Time Optimization", "Brewing Ratio Science"],
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tm-2",
    title: "Milk Steaming & Latte Art",
    description: "Master the art of creating glossy, sweet microfoam and pouring breathtaking, symmetrical latte art including hearts, rosettas, and tulips.",
    duration: "Level 2",
    skillsLearned: ["Microfoam Aeration Control", "Temperature Balancing", "Pouring Heights & Speed Flow", "Basic to Complex Pour Designs"],
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tm-3",
    title: "Machine Operations & Maintenance",
    description: "Gain confidence operating commercial 2-group espresso machines, understanding pressure profiles, and daily backflushing/hygiene standards.",
    duration: "Level 3",
    skillsLearned: ["Commercial Steam Wand Operations", "Water Filtration & Pressures", "Daily Machine Backflushing", "Group Head Gasket Maintenance"],
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tm-4",
    title: "Practical Barista Speed & Workflows",
    description: "Synthesize everything into high-velocity real-world barista work: managing multiple tickets, serving drinks under time limits, and working behind a live bar.",
    duration: "Advanced",
    skillsLearned: ["Multi-Order Ticket Sequencing", "Bar Cleanliness & Organization", "Customer Hospitality Etiquette", "High-Volume Speed Workflows"],
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?auto=format&fit=crop&w=800&q=80"
  }
];

export interface WhyChooseItem {
  id: string;
  title: string;
  description: string;
}

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: "wc-1",
    title: "Quality First",
    description: "We procure premium high-altitude beans, precision roasting profiles, and serve under rigorous taste-testing protocols."
  },
  {
    id: "wc-2",
    title: "Hands-on Training",
    description: "Our student-to-machine ratio is strictly capped. You learn on professional-grade commercial machines, not toys."
  },
  {
    id: "wc-3",
    title: "Friendly Atmosphere",
    description: "A cozy neighborhood cafe designed for warm connection, productive remote work, and positive vibes."
  },
  {
    id: "wc-4",
    title: "Local Hospitality",
    description: "Proudly serving Imadol and Lalitpur, building authentic connections with our youth, coffee-drinkers, and trainees."
  }
];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "cafe" | "training" | "beverage";
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800&auto=format&fit=crop",
    alt: "Express Cafe cozy interior and ambient lighting",
    category: "cafe"
  },
  {
    id: "g-2",
    src: "https://images.unsplash.com/photo-1570968915860-54d5c301fc9f?q=80&w=800&auto=format&fit=crop",
    alt: "Espresso extraction calibration and pour training",
    category: "training"
  },
  {
    id: "g-3",
    src: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=800&auto=format&fit=crop",
    alt: "Symmetrical rosette latte art creation in progress",
    category: "beverage"
  },
  {
    id: "g-4",
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800&auto=format&fit=crop",
    alt: "Drip coffee brewing and beans selection showcase",
    category: "beverage"
  },
  {
    id: "g-5",
    src: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=800&auto=format&fit=crop",
    alt: "Signature double-iced latte ready for serving",
    category: "beverage"
  },
  {
    id: "g-6",
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=800&auto=format&fit=crop",
    alt: "Barista candidate adjusting portafilter pressure settings",
    category: "training"
  },
  {
    id: "g-7",
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=800&auto=format&fit=crop",
    alt: "Active coffee bar during a busy afternoon in Imadol",
    category: "cafe"
  },
  {
    id: "g-8",
    src: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?q=80&w=800&auto=format&fit=crop",
    alt: "Rich cream and espresso crema shot pulls",
    category: "training"
  }
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Saurav Shrestha",
    role: "Local Coffee Enthusiast",
    text: "The best latte and Americano in Imadol! The team is incredibly polite and welcoming, and the atmosphere makes it the perfect spot for studying and reading.",
    rating: 5
  },
  {
    id: "t-2",
    name: "Priyanka Thapa",
    role: "Barista Training Graduate",
    text: "Completed my basic and advanced barista courses here. The hands-on machine practice helped me land a job at a specialty cafe in Kathmandu almost immediately. Recommend to anyone starting out!",
    rating: 5
  },
  {
    id: "t-3",
    name: "Anil Gurung",
    role: "Freelance Designer",
    text: "A genuine gem in Lalitpur. Excellent high-altitude beans, very clean workspace, fast Wi-Fi, and consistent high-quality coffee. Truly built around pure passion.",
    rating: 5
  }
];

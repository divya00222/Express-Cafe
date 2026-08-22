import { useState, useEffect } from "react";
import { TRAINING_MODULES, CAFE_CONFIG } from "../data/cafeData";
import ServiceCard from "../components/ServiceCard";
import SectionHeading from "../components/SectionHeading";
import { GraduationCap, Award, CheckSquare, Plus, Minus, MessageCircle, Phone, Sparkles } from "lucide-react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

interface FAQItem {
  question: string;
  answer: string;
}

export default function TrainingPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleEnquire = (moduleTitle: string) => {
    navigate("/contact", { state: { subject: `Barista Course: ${moduleTitle}` } });
  };

  const academyFeatures = [
    {
      title: "1-on-1 Focused Time",
      desc: "Our machine-to-student ratio is kept strictly at 1:2 to ensure you spend maximum hours brewing espresso, not just watching."
    },
    {
      title: "Commercial Gear",
      desc: "Train on professional double-group multi-boiler commercial machines, high-speed burr grinders, and steam wands."
    },
    {
      title: "Local Certification",
      desc: "Receive a professional certificate of completion recognized by specialty coffee shops and hospitality outlets across Nepal."
    },
    {
      title: "Job Placement Support",
      desc: "Our alumni network directly bridges qualified students with open barista positions in Kathmandu, Lalitpur, and global venues."
    }
  ];

  const faqs: FAQItem[] = [
    {
      question: "Who is this barista training course designed for?",
      answer: "We accommodate complete beginners, home espresso hobbyists, and aspiring professional baristas aiming for local employment or jobs abroad. No prior coffee brewing experience is required."
    },
    {
      question: "What is the duration and weekly schedule?",
      answer: "We run flexible weekly batches. Classes are typically held 2 hours per day from Monday to Friday, offering both morning and afternoon schedules. The basic syllabus is completed in 2-3 weeks."
    },
    {
      question: "Do we get hands-on experience with commercial coffee machines?",
      answer: "Yes, 100%. We believe barista skills can only be developed by doing. More than 80% of your training time is spent operating professional commercial machines, dialing in grinders, and steaming milk."
    },
    {
      question: "Are certificates provided upon completion?",
      answer: "Yes. Every student who successfully clears the practical evaluation (brewing standard espresso shots, steaming silky microfoam, pouring latte art, and passing workflow speeds) receives our official certificate."
    },
    {
      question: "How can I book a seat or enquire about fees?",
      answer: "You can submit an online enquiry using our Contact Form, call our head office at 984-1296759, or send us an instant chat message via WhatsApp. We will provide fee structures and upcoming batch start dates."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white min-h-screen pt-32 pb-20 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block">
            EXPRESS BARISTA ACADEMY
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-text-primary leading-tight">
            Learn the Craft.<br />Become a Specialty Barista.
          </h1>
          <p className="text-text-secondary text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Acquire practical commercial coffee skills, master latte art, and calibrate machinery like a professional. Designed to bridge beginners into specialty industry-ready operators.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto mb-20">
          {academyFeatures.map((feat, i) => (
            <div key={i} className="bg-background-soft border border-border-light p-6 rounded-2xl shadow-lux hover:border-primary/40 transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-base text-text-primary mb-2">
                {feat.title}
              </h3>
              <p className="text-text-secondary text-xs leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Training Syllabus (Dark Theme background card grid) */}
        <div className="bg-teal-deep text-white rounded-3xl p-8 md:p-12 mb-20 border border-teal-dark/30 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]" />
          <div className="relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-accent-coffee tracking-widest uppercase block mb-2">
                ACADEMY CURRICULUM
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
                Structured Training Modules
              </h2>
              <p className="text-white/80 text-sm md:text-base mt-3 leading-relaxed">
                Our syllabus consists of 4 focused learning paths, progressing systematically from raw bean calibration to live coffee shop workflows.
              </p>
            </div>

            {/* Modules Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {TRAINING_MODULES.map((module) => (
                <ServiceCard
                  key={module.id}
                  module={module}
                  onEnquire={handleEnquire}
                />
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-primary tracking-widest uppercase block mb-1">
              HAVE QUESTIONS?
            </span>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-border-light rounded-xl overflow-hidden shadow-lux"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4 font-display font-bold text-base text-text-primary cursor-pointer select-none"
                >
                  <span>{faq.question}</span>
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {openFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 md:px-6 md:pb-6 text-text-secondary text-sm md:text-base leading-relaxed border-t border-border-light pt-4 animate-fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="bg-background-soft border border-border-light rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-lux space-y-6">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-text-primary">
            Enroll for Next Batch Today
          </h2>
          <p className="text-text-secondary text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Class schedules fill up quickly. Give us a phone call or click the WhatsApp button below to enquire about seat availability, cohort fees, and schedules.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={CAFE_CONFIG.phoneRaw}
              className="px-6 py-4 bg-primary hover:bg-primary-dark text-white rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-sm"
            >
              <Phone className="w-4 h-4 text-white" />
              Call Hotline: 984-1296759
            </a>
            <a
              href={CAFE_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-lg text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Instant Chat
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

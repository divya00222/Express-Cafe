import React, { useState } from "react";
import { motion } from "motion/react";
import { CAFE_CONFIG } from "../data/cafeData";
import { MapPin, Phone, Mail, Instagram, Facebook, Send, CheckCircle2, MessageSquare } from "lucide-react";
import Button from "./Button";

interface ContactSectionProps {
  prefilledSubject?: string;
}

export default function ContactSection({ prefilledSubject = "" }: ContactSectionProps) {
  // Form States
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: prefilledSubject,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validate inputs
  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Name must be at least 3 characters long.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please provide a valid email address.";
    }

    // Nepal phone validation (starts with 9, 10 digits) or general length
    const cleanPhone = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (cleanPhone.length < 7 || cleanPhone.length > 15) {
      newErrors.phone = "Please enter a valid phone number (7-15 digits).";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message content is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically as the user types
    if (errors[name]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Express Cafe Form Submitted successfully!", formData);
    
    // Success state
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form except subject
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: prefilledSubject || "General Enquiry",
      message: "",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Contact Info Column (Left 5/12) */}
      <div className="lg:col-span-5 space-y-8">
        <div>
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">
            GET IN TOUCH
          </span>
          <h3 className="font-display font-bold text-3xl md:text-4xl text-text-primary mb-4 leading-tight">
            Let's Connect
          </h3>
          <p className="text-text-secondary text-sm md:text-base leading-relaxed">
            Whether you want to order fresh-roasted coffee, book training modules, or just share a feedback, we would love to hear from you.
          </p>
        </div>

        {/* Info list */}
        <div className="space-y-6">
          {/* Location */}
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-text-primary uppercase tracking-wider mb-1">
                Our Location
              </h4>
              <p className="text-text-secondary text-sm font-medium">
                {CAFE_CONFIG.locationName}
              </p>
            </div>
          </div>

          {/* Phone */}
          <a href={CAFE_CONFIG.phoneRaw} className="flex gap-4 items-start group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex items-center justify-center text-primary shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-text-primary group-hover:text-primary uppercase tracking-wider mb-1 transition-colors">
                Call Us Directly
              </h4>
              <p className="text-text-secondary text-sm font-medium transition-colors group-hover:text-primary-dark">
                {CAFE_CONFIG.phone}
              </p>
            </div>
          </a>

          {/* Email */}
          <a href={`mailto:${CAFE_CONFIG.email}`} className="flex gap-4 items-start group">
            <div className="w-10 h-10 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex items-center justify-center text-primary shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm text-text-primary group-hover:text-primary uppercase tracking-wider mb-1 transition-colors">
                Email Address
              </h4>
              <p className="text-text-secondary text-sm font-medium transition-colors group-hover:text-primary-dark break-all">
                {CAFE_CONFIG.email}
              </p>
            </div>
          </a>
        </div>

        {/* Social Presence */}
        <div className="border-t border-border-light pt-8">
          <h4 className="font-sans font-bold text-xs text-text-primary uppercase tracking-widest mb-4">
            Follow our Social Feed
          </h4>
          <div className="flex gap-3">
            <a
              href={CAFE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border-light hover:border-primary text-text-primary hover:text-primary flex items-center justify-center transition-all duration-300"
              aria-label="Instagram Page"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={CAFE_CONFIG.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg border border-border-light hover:border-primary text-text-primary hover:text-primary flex items-center justify-center transition-all duration-300"
              aria-label="Facebook Page"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Contact Form Column (Right 7/12) */}
      <div className="lg:col-span-7 bg-background-soft border border-border-light p-6 md:p-8 rounded-2xl shadow-lux">
        {submitSuccess ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-10"
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="font-display font-bold text-2xl text-text-primary mb-2">
              Message Sent Successfully!
            </h4>
            <p className="text-text-secondary text-sm max-w-md mx-auto mb-8">
              Thank you for writing to Express Cafe. Our team in Imadol, Lalitpur will review your enquiry and respond shortly.
            </p>
            <Button
              type="button"
              variant="outline"
              onClick={() => setSubmitSuccess(false)}
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Full Name */}
              <div className="flex-1 space-y-2">
                <label htmlFor="fullName" className="block text-xs font-bold text-text-primary uppercase tracking-wider">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. Robin Shrestha"
                  className={`w-full px-4 py-3 bg-white border rounded-lg text-sm transition-colors focus:outline-hidden ${
                    errors.fullName ? "border-red-400 focus:border-red-500" : "border-border-light focus:border-primary"
                  }`}
                  maxLength={60}
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="flex-1 space-y-2">
                <label htmlFor="email" className="block text-xs font-bold text-text-primary uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. robin@gmail.com"
                  className={`w-full px-4 py-3 bg-white border rounded-lg text-sm transition-colors focus:outline-hidden ${
                    errors.email ? "border-red-400 focus:border-red-500" : "border-border-light focus:border-primary"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Phone */}
              <div className="flex-1 space-y-2">
                <label htmlFor="phone" className="block text-xs font-bold text-text-primary uppercase tracking-wider">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 9841296759"
                  className={`w-full px-4 py-3 bg-white border rounded-lg text-sm transition-colors focus:outline-hidden ${
                    errors.phone ? "border-red-400 focus:border-red-500" : "border-border-light focus:border-primary"
                  }`}
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
              </div>

              {/* Subject */}
              <div className="flex-1 space-y-2">
                <label htmlFor="subject" className="block text-xs font-bold text-text-primary uppercase tracking-wider">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Barista Training Enquiry"
                  className={`w-full px-4 py-3 bg-white border rounded-lg text-sm transition-colors focus:outline-hidden ${
                    errors.subject ? "border-red-400 focus:border-red-500" : "border-border-light focus:border-primary"
                  }`}
                />
                {errors.subject && <p className="text-red-500 text-xs mt-1 font-medium">{errors.subject}</p>}
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs font-bold text-text-primary uppercase tracking-wider">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className={`w-full px-4 py-3 bg-white border rounded-lg text-sm transition-colors focus:outline-hidden resize-none ${
                  errors.message ? "border-red-400 focus:border-red-500" : "border-border-light focus:border-primary"
                }`}
                maxLength={1000}
              />
              <div className="flex justify-between items-center text-xs text-text-secondary mt-1 font-medium">
                {errors.message ? (
                  <p className="text-red-500">{errors.message}</p>
                ) : (
                  <span>Minimum 10 characters</span>
                )}
                <span>{formData.message.length}/1000</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary-light text-white font-sans font-bold uppercase tracking-widest text-xs py-4 rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer select-none disabled:opacity-75 disabled:cursor-wait"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

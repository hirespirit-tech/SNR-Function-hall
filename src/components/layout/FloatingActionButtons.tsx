import { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingActionButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-foreground transition-all duration-300 hover:bg-muted ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      {/* Call Button */}
      <a
        href={CONTACT_INFO.phoneLink}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group relative"
        aria-label="Call Us"
      >
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20"></div>
        <Phone className="w-6 h-6" />
      </a>

      {/* WhatsApp Button */}
      <a
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 group"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp className="w-8 h-8" />
      </a>
    </div>
  );
}

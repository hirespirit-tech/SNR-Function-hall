import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import heroImg1 from "@assets/ChatGPT_Image_Jun_27,_2026,_03_50_08_PM_1782555630400.png";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg1}
          alt="SNR Function Hall Exterior at Night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 text-sm font-medium tracking-wider uppercase mb-6 backdrop-blur-sm">
            Welcome to Visakhapatnam's Premier Venue
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white font-bold tracking-tight mb-6 drop-shadow-lg">
            Celebrate Your Special Moments at <br />
            <span className="gold-gradient-text">SNR Function Hall & Guest Rooms</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 font-medium mb-10 max-w-3xl mx-auto drop-shadow-md">
            Spacious Wedding Venue • Guest Rooms • Parking Facility • Beautiful Lighting • 24/7 Availability
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 group">
              <a href="#booking">
                Book Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <a href={CONTACT_INFO.phoneLink}>
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 rounded-full bg-[#25D366]/10 hover:bg-[#25D366]/20 text-white border-[#25D366]/30 backdrop-blur-sm">
              <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp Inquiry
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

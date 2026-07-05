import { MapPin, Phone, Clock, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-8">
              We're Here to Help
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Location</h4>
                  <p className="text-foreground/80 leading-relaxed max-w-md">
                    {CONTACT_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Call Us</h4>
                  <a href={CONTACT_INFO.phoneLink} className="text-foreground/80 hover:text-primary transition-colors text-lg font-medium">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">Availability</h4>
                  <p className="text-foreground/80">{CONTACT_INFO.hours}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground">
                <a href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noreferrer">
                  <MapPin className="mr-2 w-5 h-5" />
                  Get Directions
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noreferrer">
                  <FaWhatsapp className="mr-2 w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="h-[500px] w-full rounded-3xl overflow-hidden shadow-xl border border-border">
            <iframe 
              src={CONTACT_INFO.mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SNR Function Hall Map Location"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}

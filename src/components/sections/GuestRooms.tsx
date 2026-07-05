import { BedDouble, Wind, Wifi, Coffee, Users, ShieldCheck } from "lucide-react";
import roomImg from "@assets/ChatGPT_Image_Jun_27,_2026,_02_19_50_PM_1782627413056.png";
import { Button } from "@/components/ui/button";

export default function GuestRooms() {
  const highlights = [
    { icon: BedDouble, text: "16 Comfortable AC Rooms" },
    { icon: Users, text: "Suitable for Family Stay" },
    { icon: Wind, text: "Air Conditioned" },
    { icon: Coffee, text: "Budget Friendly" },
    { icon: ShieldCheck, text: "24-Hour Availability" },
    { icon: Wifi, text: "Wedding Guest Ready" }
  ];

  return (
    <section id="rooms" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Accommodation</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Comfortable Stay for Your Guests
            </h2>
            <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
              Ensure your outstation guests and close family members have a comfortable stay. We offer 16 well-maintained AC rooms right at the venue, making event logistics effortless.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <highlight.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium text-sm md:text-base">{highlight.text}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href="#booking">Reserve Rooms</a>
            </Button>
          </div>

          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl gold-border border-[6px]">
              <img
                src={roomImg}
                alt="SNR AC Guest Room"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

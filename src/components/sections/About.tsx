import aboutImg1 from "@assets/ChatGPT_Image_Jun_27,_2026,_01_24_49_PM_1783143352477.jpg";
import aboutImg2 from "@assets/ChatGPT_Image_Jun_27,_2026,_01_11_57_PM_1783143370672.jpg";

import { Users, Building, Clock, Star } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function About() {
  const stats = [
    { icon: Users, label: "Dining Capacity", value: CONTACT_INFO.capacity },
    { icon: Building, label: "AC Guest Rooms", value: CONTACT_INFO.rooms },
    { icon: Clock, label: "Availability", value: "24/7" },
    { icon: Star, label: "Google Reviews", value: CONTACT_INFO.reviews }
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img src={aboutImg1} alt="SNR Function Hall exterior at dusk" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
            </div>
            <div className="space-y-4">
              <img src={aboutImg2} alt="SNR Function Hall daytime" className="rounded-2xl shadow-xl w-full h-64 object-cover" />
              <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20 flex flex-col items-center justify-center text-center h-48">
                <span className="text-4xl font-serif font-bold text-primary mb-2">{CONTACT_INFO.rating}</span>
                <div className="flex text-[#BF953F] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-foreground/80 font-medium">Trusted by {CONTACT_INFO.reviews} families</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">About Our Venue</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              A Legacy of Grand Celebrations in Simhachalam
            </h2>
            <p className="text-foreground/80 text-lg mb-8 leading-relaxed">
              SNR Function Hall and Guest Rooms is a legendary wedding venue where tradition meets modern elegance. Trusted by generations, we provide the perfect majestic setting for your most important life moments.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h4>
                    <p className="text-sm text-foreground/70 font-medium">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

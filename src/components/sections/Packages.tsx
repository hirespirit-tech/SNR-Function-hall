import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Packages() {
  const packages = [
    {
      name: "Basic Package",
      highlighted: false,
      features: [
        "Hall Booking",
        "Basic Decoration",
        "Standard Lighting",
        "Parking Space"
      ]
    },
    {
      name: "Premium Package",
      highlighted: true,
      features: [
        "Hall Booking",
        "Premium Decoration",
        "Stage Setup",
        "Beautiful Lighting",
        "Sound System",
        "Parking Space",
        "Support Staff"
      ]
    },
    {
      name: "Grand Wedding",
      highlighted: false,
      features: [
        "Hall Booking",
        "Grand Decoration",
        "Stage Setup",
        "Premium Lighting",
        "Sound System",
        "Catering Area",
        "Guest Room Support",
        "Full Staff Support",
        "Parking Space"
      ]
    },
    {
      name: "Guest Room Only",
      highlighted: false,
      features: [
        "Up to 16 AC Guest Rooms",
        "Suitable for Outstation Guests",
        "Budget-Friendly Rates",
        "24-Hour Availability"
      ]
    }
  ];

  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Packages Tailored For You
          </h2>
          <p className="text-foreground/80 text-lg">
            Choose from our carefully curated packages to suit your event's scale and requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 max-w-7xl mx-auto">
          {packages.map((pkg, idx) => (
            <div 
              key={idx} 
              className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 ${
                pkg.highlighted 
                  ? "bg-secondary text-secondary-foreground shadow-2xl scale-100 lg:scale-105 z-10 border border-secondary" 
                  : "bg-card border border-border shadow-md hover:shadow-lg"
              }`}
            >
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full shadow-md whitespace-nowrap">
                  Most Popular
                </div>
              )}
              
              <h3 className={`text-2xl font-serif font-bold mb-4 ${pkg.highlighted ? "text-white" : "text-foreground"}`}>
                {pkg.name}
              </h3>
              
              <div className="mb-6 pb-6 border-b border-border/50">
                <span className={`text-sm font-medium ${pkg.highlighted ? "text-secondary-foreground/80" : "text-muted-foreground"}`}>
                  Contact Us for Best Price
                </span>
              </div>
              
              <ul className="flex-1 space-y-4 mb-8">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 shrink-0 ${pkg.highlighted ? "text-primary" : "text-primary"}`} />
                    <span className={pkg.highlighted ? "text-secondary-foreground/90" : "text-foreground/80"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                asChild 
                className={`w-full rounded-full ${
                  pkg.highlighted 
                    ? "bg-primary text-primary-foreground hover:bg-white hover:text-secondary" 
                    : "bg-secondary/10 text-secondary hover:bg-secondary hover:text-white"
                }`}
              >
                <a href="#booking">Enquire Now</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

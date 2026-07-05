import {
  Building2,
  BedDouble,
  Wind,
  Utensils,
  CarFront,
  Car,
  Flower2,
  Lightbulb,
  Speaker,
  ChefHat,
  Users,
  Bath,
  ArrowUpSquare,
  Zap,
  Briefcase,
  Clock
} from "lucide-react";

const amenities = [
  { icon: Building2, label: "Spacious Function Hall" },
  { icon: BedDouble, label: "Guest Rooms" },
  { icon: Wind, label: "AC Rooms" },
  { icon: Utensils, label: "Large Dining Area" },
  { icon: CarFront, label: "Basement Parking" },
  { icon: Car, label: "Vehicle Parking" },
  { icon: Flower2, label: "Stage Decoration" },
  { icon: Lightbulb, label: "Beautiful Lighting" },
  { icon: Speaker, label: "Sound System" },
  { icon: ChefHat, label: "Catering Area" },
  { icon: Users, label: "Reception Area" },
  { icon: Bath, label: "Clean Washrooms" },
  { icon: ArrowUpSquare, label: "Lift Access" },
  { icon: Zap, label: "Power Backup" },
  { icon: Briefcase, label: "Event Management Support" },
  { icon: Clock, label: "24 Hours Availability" },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">World Class Amenities</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Everything You Need For A Grand Celebration
          </h2>
          <p className="text-foreground/80 text-lg">
            We've thought of every detail to ensure your event runs flawlessly, from power backup to professional event support.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {amenities.map((amenity, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <amenity.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-foreground">{amenity.label}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

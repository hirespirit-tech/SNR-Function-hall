import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { SERVICES } from "@/data/services";

export default function Events() {
  return (
    <section id="events" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Perfect For Every Occasion
          </h2>
          <p className="text-foreground/80 text-lg">
            From intimate gatherings to grand celebrations, our versatile spaces can be transformed to match your dream event perfectly.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <AspectRatio ratio={4 / 5}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-2 md:p-3">
                  <h3 className="text-white font-serif font-semibold text-[13px] md:text-sm leading-tight mb-1.5 md:mb-2">
                    {service.title}
                  </h3>
                  <Button
                    asChild
                    size="sm"
                    className="w-full h-8 text-xs bg-primary/90 hover:bg-primary text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <a href="#booking">Book Now</a>
                  </Button>
                </div>
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

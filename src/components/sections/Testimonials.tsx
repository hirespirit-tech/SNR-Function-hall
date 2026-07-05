import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { CONTACT_INFO } from "@/lib/constants";

const testimonials = [
  {
    name: "Ravi Kumar",
    rating: 5,
    event: "Wedding",
    text: "Good and well-maintained big space for marriage functions and large gatherings."
  },
  {
    name: "Priya Sharma",
    rating: 5,
    event: "Wedding Reception",
    text: "My sister's marriage was held here. Around 700-800 people dinner was managed well, and guest rooms were available."
  },
  {
    name: "Suresh Babu",
    rating: 5,
    event: "Family Function",
    text: "Very large hall for big family functions with beautiful lights and good arrangements."
  },
  {
    name: "Anitha Devi",
    rating: 4,
    event: "Birthday Party",
    text: "Excellent venue with great parking facility. Staff was very cooperative and helpful."
  },
  {
    name: "Venkat Rao",
    rating: 5,
    event: "Reception",
    text: "Perfect place for large gatherings. The lighting and decoration were spectacular."
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    
    // Auto scroll
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="md:w-1/3 text-center md:text-left">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
              Words From Happy Families
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <div className="flex text-[#BF953F]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold">{CONTACT_INFO.rating} / 5</span>
            </div>
            <p className="text-foreground/70 mb-8">
              Based on {CONTACT_INFO.reviews} Google Reviews
            </p>
            
            <div className="flex gap-2 justify-center md:justify-start hidden md:flex">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollTo(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === selectedIndex ? "bg-primary w-8" : "bg-border"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="md:w-2/3 w-full overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_80%] lg:flex-[0_0_60%] pl-4 md:pl-6">
                  <div className="bg-background rounded-3xl p-8 border border-border shadow-lg h-full flex flex-col justify-between">
                    <div>
                      <div className="flex text-[#BF953F] mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-lg italic text-foreground/80 mb-6 font-serif">"{testimonial.text}"</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{testimonial.name}</h4>
                      <p className="text-sm text-primary font-medium">{testimonial.event}</p>
                    </div>
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

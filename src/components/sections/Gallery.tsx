import { useState, useMemo } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { GALLERY_IMAGES, type GalleryItem } from "@/data/gallery";
import { CONTACT_INFO } from "@/lib/constants";

function sendToWhatsApp(e: React.MouseEvent, img: GalleryItem) {
  e.stopPropagation();
  const absoluteUrl = img.url.startsWith("http")
    ? img.url
    : `${window.location.origin}${img.url}`;
  const caption = encodeURIComponent(
    `Hi, I want to share this photo from SNR Function Hall & Guest Rooms: "${img.title}"\n${absoluteUrl}`
  );
  const waUrl = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${caption}`;
  window.open(waUrl, "_blank", "noopener,noreferrer");
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(GALLERY_IMAGES.map((img) => img.category)));
    return ["All", ...unique];
  }, []);

  const filteredImages = useMemo(() => {
    if (activeCategory === "All") return GALLERY_IMAGES;
    return GALLERY_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const selectedImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const prev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const next = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Gallery</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Glimpses of Grandeur
          </h2>
          <p className="text-foreground/80 text-lg">
            Explore our magnificent venue setups, elegant decorations, and memorable moments celebrated at SNR.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              className={`rounded-full text-sm ${activeCategory === cat ? "bg-primary text-primary-foreground" : "text-foreground hover:text-primary"}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              className="relative overflow-hidden rounded-xl cursor-pointer group aspect-[4/3]"
              onClick={() => setSelectedIndex(idx)}
            >
              {img.type === "video" ? (
                <video
                  src={img.url}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={img.url}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              )}
              <span className="absolute top-2 left-2 z-10 bg-black/60 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full backdrop-blur-sm pointer-events-none">
                {idx + 1}
              </span>
              <div className="absolute inset-0 bg-black/40 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <span className="text-white text-sm font-medium px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm">View</span>
                <button
                  onClick={(e) => sendToWhatsApp(e, img)}
                  className="flex items-center gap-2 text-white text-sm font-medium px-4 py-2 border border-white/50 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
                  aria-label="Send to WhatsApp"
                >
                  <Send className="w-4 h-4" />
                  Send
                </button>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={selectedIndex !== null} onOpenChange={() => setSelectedIndex(null)}>
          <DialogContent className="max-w-5xl p-2 bg-black/95 border-none shadow-none">
            <div className="relative flex items-center justify-center">
              <button
                onClick={prev}
                className="absolute left-0 z-10 bg-white/10 hover:bg-white/25 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                &#8249;
              </button>
              {selectedImage &&
                (selectedImage.type === "video" ? (
                  <video
                    src={selectedImage.url}
                    controls
                    autoPlay
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                ) : (
                  <img
                    src={selectedImage.url}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  />
                ))}
              <button
                onClick={next}
                className="absolute right-0 z-10 bg-white/10 hover:bg-white/25 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                &#8250;
              </button>
            </div>
            <p className="text-center text-white/60 text-sm mt-2">
              {(selectedIndex ?? 0) + 1} / {filteredImages.length}
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

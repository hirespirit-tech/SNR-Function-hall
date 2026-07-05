import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActionButtons from "@/components/layout/FloatingActionButtons";
import Gallery from "@/components/sections/Gallery";

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
      <FloatingActionButtons />
    </main>
  );
}

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActionButtons from "@/components/layout/FloatingActionButtons";
import Facilities from "@/components/sections/Facilities";

export default function FacilitiesPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="pt-20">
        <Facilities />
      </div>
      <Footer />
      <FloatingActionButtons />
    </main>
  );
}

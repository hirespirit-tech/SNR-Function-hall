import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActionButtons from "@/components/layout/FloatingActionButtons";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <Navbar />
      <div className="pt-20">
        <About />
        <Testimonials />
      </div>
      <Footer />
      <FloatingActionButtons />
    </main>
  );
}

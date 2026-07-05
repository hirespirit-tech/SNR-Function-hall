import Navbar from "@/components/layout/Navbar";
import FloatingActionButtons from "@/components/layout/FloatingActionButtons";
import Footer from "@/components/layout/Footer";

// Sections
import Hero from "@/components/sections/Hero";
import GuestRooms from "@/components/sections/GuestRooms";
import BookingForm from "@/components/sections/BookingForm";
import Contact from "@/components/sections/Contact";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background font-sans selection:bg-primary/30 selection:text-foreground">
      <Navbar />

      <Hero />
      <GuestRooms />
      <BookingForm />
      <Contact />

      <Footer />
      <FloatingActionButtons />
    </main>
  );
}

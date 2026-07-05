import { CONTACT_INFO } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          <div className="space-y-4">
            <h3 className="font-serif text-3xl font-bold text-primary mb-6">SNR</h3>
            <p className="text-white/80 max-w-sm">
              Visakhapatnam's premier destination for grand weddings and memorable celebrations. Where tradition meets elegance.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/80 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#events" className="text-white/80 hover:text-primary transition-colors">Events</a></li>
              <li><a href="#facilities" className="text-white/80 hover:text-primary transition-colors">Facilities</a></li>
              <li><a href="#gallery" className="text-white/80 hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="#packages" className="text-white/80 hover:text-primary transition-colors">Packages</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-white/80">
              <li>{CONTACT_INFO.address}</li>
              <li>
                <a href={CONTACT_INFO.phoneLink} className="hover:text-primary transition-colors block">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>{CONTACT_INFO.hours}</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>&copy; {currentYear} SNR Function Hall & Guest Rooms. All rights reserved.</p>
          <p className="flex items-center gap-4">
            Designed for memorable celebrations.
          </p>
        </div>
      </div>
    </footer>
  );
}

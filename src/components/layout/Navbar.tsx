import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import logoImg from "@assets/ChatGPT_Image_Jun_28,_2026,_12_04_57_PM_1782628815385.png";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", external: true },
    { name: "About", href: "/about", external: true },
    { name: "Facilities", href: "/facilities", external: true },
    { name: "Gallery", href: "/gallery", external: true },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const linkClass = (scrolled: boolean) =>
    `text-sm font-medium hover:text-primary transition-colors ${scrolled ? "text-foreground/80" : "text-white/90"}`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <img
                src={logoImg}
                alt="SNR Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shrink-0"
              />
              <div className="flex flex-col">
                <span className={`font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors ${isScrolled ? "text-primary" : "text-white"}`}>
                  SNR
                </span>
                <span className={`text-[10px] md:text-xs font-medium tracking-widest uppercase transition-colors ${isScrolled ? "text-foreground" : "text-white/80"}`}>
                  Function Hall
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <Link href={link.href} className={linkClass(isScrolled)}>
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className={linkClass(isScrolled)}>
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
            <Button
              asChild
              className={`rounded-full ${
                isScrolled
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              <a href="/#booking">Book Venue</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg transition-all duration-300 origin-top ${
          isMobileMenuOpen
            ? "scale-y-100 opacity-100 visible"
            : "scale-y-0 opacity-0 invisible"
        }`}
      >
        <div className="px-4 py-6 space-y-6">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.external ? (
                  <Link
                    href={link.href}
                    onClick={handleNavClick}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <Button asChild className="w-full rounded-full bg-primary text-primary-foreground">
              <a href="/#booking" onClick={handleNavClick}>
                Book Venue
              </a>
            </Button>
            <Button asChild variant="outline" className="w-full rounded-full border-primary text-primary">
              <a href={CONTACT_INFO.phoneLink}>
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

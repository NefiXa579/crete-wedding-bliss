import { Link } from "react-router-dom";
import { Heart, MapPin, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    venues: [
      { label: "Beach Weddings", href: "/venues/beach" },
      { label: "Luxury Hotels", href: "/venues/luxury-hotels" },
      { label: "Traditional Villages", href: "/venues/traditional" },
      { label: "All Venues", href: "/venues" },
    ],
    services: [
      { label: "Wedding Dresses", href: "/wedding-dresses" },
      { label: "Decor & Rentals", href: "/decor-rentals" },
      { label: "Catering", href: "/catering" },
      { label: "Wedding Planners", href: "/wedding-planners" },
    ],
    resources: [
      { label: "Planning Guide", href: "/blog" },
      { label: "Legal Requirements", href: "/blog" },
      { label: "Cost Calculator", href: "/blog" },
      { label: "Photo Spots", href: "/blog" },
    ],
  };

  return (
    <footer className="bg-foreground text-background/90">
      {/* Main Footer */}
      <div className="container-wedding py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-serif font-semibold text-background">
                Crete <span className="text-champagne">Weddings</span>
              </span>
            </Link>
            <p className="mt-4 text-background/70 max-w-sm leading-relaxed">
              Your complete guide to planning a dream destination wedding in Crete, Greece. 
              Discover venues, vendors, and inspiration for your special day.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-champagne hover:text-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-champagne hover:text-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-champagne hover:text-foreground transition-colors"
                aria-label="Pinterest"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.406.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Venues Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-4">Venues</h4>
            <ul className="space-y-3">
              {footerLinks.venues.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-champagne transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-wedding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-background/60 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Crete, Greece</span>
          </div>
          <p className="text-background/60 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-champagne fill-champagne" /> for couples dreaming of Crete
          </p>
          <p className="text-background/60 text-sm">
            © {currentYear} Crete Weddings. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

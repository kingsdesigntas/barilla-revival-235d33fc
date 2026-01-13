import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-barilla-footer text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>75 Richmond Road,<br />Cambridge 7170<br />Tasmania, Australia</span>
              </div>
              <a href="tel:1800465453" className="flex items-center gap-3 footer-link">
                <Phone size={18} />
                <span>Freecall: 1800 465 453</span>
              </a>
              <a href="mailto:stay@barilla.com.au" className="flex items-center gap-3 footer-link">
                <Mail size={18} />
                <span>stay@barilla.com.au</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accommodation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/accommodation/cabins" className="footer-link">Cabin Accommodation</Link>
              </li>
              <li>
                <Link to="/accommodation/caravans" className="footer-link">Caravan Accommodation</Link>
              </li>
              <li>
                <Link to="/accommodation/camping" className="footer-link">Camping Grounds</Link>
              </li>
              <li>
                <Link to="/accommodation/airport" className="footer-link">Hobart Airport Stay</Link>
              </li>
            </ul>
          </div>

          {/* Things to Do */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Things to Do</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/things-to-do/at-barilla" className="footer-link">At Barilla</Link>
              </li>
              <li>
                <Link to="/things-to-do/attractions" className="footer-link">Tourist Attractions</Link>
              </li>
              <li>
                <Link to="/things-to-do/mini-golf" className="footer-link">Mini Golf</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Find Us on Map</Link>
              </li>
            </ul>
          </div>

          {/* Ratings & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 footer-link"
              >
                <Facebook size={20} />
                <span>Like us on Facebook</span>
              </a>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                  <Star size={16} className="text-accent" />
                </div>
                <p className="text-sm text-white/70">4.6/5 from 160+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-4">
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} Barilla Holiday Park. All rights reserved.</p>
          <p>
            Website by <span className="text-accent">Your Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Star, Map } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { SITE_SETTINGS_QUERY } from "@/lib/sanity-queries";
import { defaultSiteSettings } from "@/lib/default-content";
import logo from "@/assets/barilla-holiday-park-logo.png";

const Footer = () => {
  const { content: settings } = useSanityContent("siteSettings", SITE_SETTINGS_QUERY, defaultSiteSettings);

  return (
    <footer className="bg-barilla-footer text-primary-foreground">
      <div className="container py-12">
        <div className="mb-10 flex justify-center md:justify-start">
          <div className="bg-white rounded-lg px-5 py-3 inline-block">
            <img src={logo} alt="Barilla Holiday Park" className="h-12 w-auto" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0" />
                <span>{settings.address}</span>
              </div>
              <a
                href="https://maps.google.com/?q=75+Richmond+Road+Cambridge+Tasmania+7170"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 footer-link text-accent font-medium"
              >
                <Map size={16} /> Get Directions on Google Maps
              </a>
              <a href={`tel:${settings.freeCallPhone?.replace(/\s/g, "")}`} className="flex items-center gap-3 footer-link">
                <Phone size={18} />
                <span>Freecall: {settings.freeCallPhone}</span>
              </a>
              <a href={`mailto:${settings.email}`} className="flex items-center gap-3 footer-link">
                <Mail size={18} />
                <span>{settings.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Links - Accommodation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Accommodation</h3>
            <ul className="space-y-2 text-sm">
              {(settings.navigationItems?.find(n => n.label === "Accommodation")?.children || []).map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Things to Do */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Things to Do</h3>
            <ul className="space-y-2 text-sm">
              {(settings.navigationItems?.find(n => n.label === "Things to Do")?.children || []).map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="footer-link">{link.label}</Link>
                </li>
              ))}
              <li>
                <Link to="/contact" className="footer-link">Find Us on Map</Link>
              </li>
            </ul>
          </div>

          {/* Ratings & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="space-y-4">
              {settings.socialLinks?.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 footer-link"
                >
                  <Facebook size={20} />
                  <span>Like us on Facebook</span>
                </a>
              ))}
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
          <p>Website by <span className="text-accent">Your Team</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

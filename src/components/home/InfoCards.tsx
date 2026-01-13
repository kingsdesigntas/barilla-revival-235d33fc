import { Link } from "react-router-dom";
import { Phone, MapPin, Star, Facebook, ExternalLink } from "lucide-react";

const InfoCards = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="section-heading">More About Barilla Holiday Park</h2>
        <p className="text-center text-muted-foreground mb-4">
          We are conveniently located near tourist attractions, Hobart city and the Hobart Airport.
        </p>
        <div className="section-underline" />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Contact Card */}
          <div className="contact-card">
            <div className="contact-card-header">Contact Us</div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>75 Richmond Road, Cambridge 7170</span>
              </div>
              <a href="tel:1800465453" className="flex items-center gap-3 text-sm text-primary hover:text-accent transition-colors">
                <Phone size={18} />
                <span>Freecall: 1800 465 453</span>
              </a>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline flex items-center gap-1"
              >
                Find us on the map <ExternalLink size={14} />
              </a>
              <Link to="/contact" className="btn-cta block text-center text-sm mt-4">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Ratings Card */}
          <div className="contact-card">
            <div className="contact-card-header">Ratings</div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                Barilla Holiday Park has a 4 star rating on Tripadvisor and a certificate of excellence.
              </p>
              <a 
                href="https://tripadvisor.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline flex items-center gap-1"
              >
                View our Rating on Tripadvisor <ExternalLink size={14} />
              </a>
              <a 
                href="#" 
                className="text-sm text-accent hover:underline flex items-center gap-1"
              >
                View our Take A Star Rating <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Social Card */}
          <div className="contact-card">
            <div className="contact-card-header">Like Us on Facebook</div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                Like us on Facebook to get access to exclusive specials and promotions.
              </p>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-accent hover:underline flex items-center gap-1"
              >
                <Facebook size={16} /> Like us Today
              </a>
            </div>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={28} 
                className={i < 4 ? "fill-accent text-accent" : "text-accent"} 
              />
            ))}
          </div>
          <a href="#" className="text-accent hover:underline text-sm">
            4.6/5 from 160 reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;

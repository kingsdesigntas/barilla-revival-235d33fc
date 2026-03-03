import { Link } from "react-router-dom";
import { Phone, MapPin, Star, Facebook, ExternalLink } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { HOME_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultHomePage } from "@/lib/default-content";

const InfoCards = () => {
  const { content } = useSanityContent("homePage", HOME_PAGE_QUERY, defaultHomePage);
  const section = content.infoSection;

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <h2 className="section-heading">{section.heading}</h2>
        <p className="text-center text-muted-foreground mb-4">{section.description}</p>
        <div className="section-underline" />

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Contact Card */}
          <div className="contact-card">
            <div className="contact-card-header">{section.contactCard?.heading}</div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>{section.contactCard?.address}</span>
              </div>
              <a href="tel:1800465453" className="flex items-center gap-3 text-sm text-primary hover:text-accent transition-colors">
                <Phone size={18} />
                <span>{section.contactCard?.phone}</span>
              </a>
              <a href={section.contactCard?.mapLink} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-1">
                Find us on the map <ExternalLink size={14} />
              </a>
              <Link to="/contact" className="btn-cta block text-center text-sm mt-4">Contact Us</Link>
            </div>
          </div>

          {/* Ratings Card */}
          <div className="contact-card">
            <div className="contact-card-header">{section.ratingsCard?.heading}</div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground">{section.ratingsCard?.description}</p>
              <a href={section.ratingsCard?.tripadvisorLink} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-1">
                View our Rating on Tripadvisor <ExternalLink size={14} />
              </a>
              <a href="#" className="text-sm text-accent hover:underline flex items-center gap-1">
                View our Take A Star Rating <ExternalLink size={14} />
              </a>
            </div>
          </div>

          {/* Social Card */}
          <div className="contact-card">
            <div className="contact-card-header">{section.socialCard?.heading}</div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground">{section.socialCard?.description}</p>
              <a href={section.socialCard?.facebookLink} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline flex items-center gap-1">
                <Facebook size={16} /> Like us Today
              </a>
            </div>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={28} className={i < Math.floor(section.ratingsCard?.rating || 4) ? "fill-accent text-accent" : "text-accent"} />
            ))}
          </div>
          <a href="#" className="text-accent hover:underline text-sm">
            {section.ratingsCard?.rating}/5 from {section.ratingsCard?.reviewCount} reviews
          </a>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;

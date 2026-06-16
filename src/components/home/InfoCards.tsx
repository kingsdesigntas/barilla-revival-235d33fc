import { Link } from "react-router-dom";
import { Phone, MapPin, Star, Facebook, ExternalLink, Map } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { HOME_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultHomePage } from "@/lib/default-content";

const InfoCards = () => {
  const { content } = useSanityContent("homePage", HOME_PAGE_QUERY, defaultHomePage);
  const section = content.infoSection;

  return (
    <section className="py-16 md:py-24" style={{ backgroundColor: "#f1f5f3" }}>
      <div className="container">
        <h2 className="section-heading">{section.heading}</h2>
        <div className="section-underline" />
        <p className="text-left text-muted-foreground mb-4">{section.description}</p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {/* Contact Card */}
          <div className="contact-card h-full flex flex-col">
            <div className="contact-card-header">{section.contactCard?.heading}</div>
            <div className="p-6 space-y-4 flex flex-col flex-1">
              <div className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>{section.contactCard?.address}</span>
              </div>
              <a href="tel:1800465453" className="flex items-center gap-3 text-sm text-primary hover:text-accent transition-colors">
                <Phone size={18} />
                <span>{section.contactCard?.phone}</span>
              </a>
              <a
                href={section.contactCard?.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                <Map size={16} /> Get Directions on Google Maps
              </a>
              <Link to="/contact" className="btn-cta block text-center text-sm mt-auto">Contact Us</Link>
            </div>
          </div>

          {/* Ratings Card */}
          <div className="contact-card h-full flex flex-col">
            <div className="contact-card-header">{section.ratingsCard?.heading}</div>
            <div className="p-6 space-y-4 flex flex-col">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => {
                  const rating = section.ratingsCard?.rating || 4.4;
                  const fillPercent = Math.max(0, Math.min(1, rating - i)) * 100;
                  return (
                    <div key={i} className="relative" style={{ width: 24, height: 24 }}>
                      <Star size={24} className="absolute inset-0 text-accent" />
                      <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercent}%` }}>
                        <Star size={24} className="text-accent fill-accent" />
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-sm font-semibold text-foreground">
                {section.ratingsCard?.rating}/5 from {section.ratingsCard?.reviewCount} Google reviews
              </p>
              <p className="text-sm text-muted-foreground">{section.ratingsCard?.description}</p>
              <a
                href={section.ratingsCard?.googleReviewsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta block text-center text-sm mt-auto"
              >
                See All Reviews on Google
              </a>
            </div>
          </div>

          {/* Social Card */}
          <div className="contact-card h-full flex flex-col">
            <div className="contact-card-header">{section.socialCard?.heading}</div>
            <div className="p-6 space-y-4 flex flex-col">
              <p className="text-sm text-muted-foreground">{section.socialCard?.description}</p>
              <a
                href={section.socialCard?.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta inline-flex items-center justify-center gap-2 text-center text-sm mt-auto"
              >
                <Facebook size={16} /> Like us on Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCards;

import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import AccommodationHighlights from "@/components/shared/AccommodationHighlights";
import { Link } from "react-router-dom";
import { BOOKING_URL } from "@/lib/booking";
import { Plane, Clock, Car, Bed, MapPin, Sun } from "lucide-react";
import { CabinIcon, CaravanIcon, iconForAccommodationTitle } from "@/components/icons/AccommodationIcons";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACCOMMODATION_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultAirportPage } from "@/lib/default-content";

const iconMap: Record<string, any> = { Plane, Clock, Car, Bed, MapPin, Sun };

const AirportAccommodation = () => {
  const { content } = useSanityContent("airport-page", ACCOMMODATION_PAGE_QUERY, defaultAirportPage, { slug: "airport" });

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <AccommodationHighlights />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <div className="section-underline" />
          <p className="text-muted-foreground mb-4 text-left">{content.sectionDescription}</p>

          {/* Accommodation Options + Benefits */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:col-span-2">
              {content.items?.map((item) => {
                const ItemIcon = iconForAccommodationTitle(item.name);
                return (
                  <div key={item.name} className="card-accommodation bg-[#f1f6f3] flex flex-col">
                    <div className="card-header">{item.name}</div>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-barilla-cream flex items-center justify-center">
                          <ItemIcon className="text-primary" size={64} />
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-center items-center mb-4" style={{ height: 36 }}>
                        <ItemIcon className="text-accent" size={36} />
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-cta block text-center text-sm mt-auto">
                        {item.buttonText || "Book"}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Benefits */}
            {(content as any).benefits && (
              <div className="flex flex-col md:flex-row lg:flex-col gap-8 lg:col-span-1">
                {(content as any).benefits.map((benefit: any) => {
                  const Icon = iconMap[benefit.icon] || Sun;
                  return (
                    <div key={benefit.heading} className="p-6 bg-barilla-cream rounded-lg text-center flex flex-col items-center flex-1 justify-center">
                      <div className="flex items-center justify-center mb-4" style={{ height: 36 }}>
                        <Icon className="text-primary" size={36} />
                      </div>
                      <h3 className="font-semibold text-primary mb-2">{benefit.heading}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Location Info */}
          {(content as any).locationInfo && (
            <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center flex flex-col items-center">
              <MapPin className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Easy to Find</h3>
              <p className="mb-4">
                {(content as any).locationInfo.address}<br />
                {(content as any).locationInfo.note}
              </p>
              <Link to="/contact" className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-md inline-block hover:opacity-90 transition-opacity">
                Get Directions
              </Link>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default AirportAccommodation;

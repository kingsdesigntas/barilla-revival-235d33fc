import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import AccommodationHighlights from "@/components/shared/AccommodationHighlights";
import PromoBlock from "@/components/shared/PromoBlock";
import { Zap, ShowerHead, Wifi, Car, Trees, Sun, Caravan, Tent } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACCOMMODATION_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultCaravanPage } from "@/lib/default-content";
import { BOOKING_URL } from "@/lib/booking";

const iconMap: Record<string, any> = { Zap, ShowerHead, Wifi, Car, Trees, Sun, Caravan };

const siteIconMap: Record<string, any> = {
  "Powered Site": Zap,
  "Unpowered Site": Tent,
};

const CaravanAccommodation = () => {
  const { content } = useSanityContent("caravan-page", ACCOMMODATION_PAGE_QUERY, defaultCaravanPage, { slug: "caravans" });

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <AccommodationHighlights />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <div className="section-underline" />
          <p className="text-muted-foreground max-w-2xl mb-4 text-left">{content.sectionDescription}</p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {content.items?.map((site) => {
              const SiteIcon = siteIconMap[site.name] || Sun;
              return (
              <div key={site.name} className="card-accommodation bg-barilla-cream flex flex-col">
                <div className="card-header">{site.name}</div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={site.image} alt={site.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-center items-center mb-4" style={{ height: 36 }}>
                    <SiteIcon className="text-accent" size={36} />
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 text-center">{site.description}</p>
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-cta block text-center text-sm mt-auto">
                    {site.buttonText || "Book Now"}
                  </a>
                </div>
              </div>
              );
            })}
          </div>

          {content.amenities?.length > 0 && (
            <div className="mt-16 bg-barilla-cream rounded-lg p-8 md:p-12">
              <h3 className="section-heading mb-8">{content.amenitiesHeading}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                {content.amenities.map((amenity) => {
                  const Icon = iconMap[amenity.icon] || Sun;
                  return (
                    <div key={amenity.label} className="flex flex-col items-center gap-2">
                      <Icon className="text-primary" size={32} />
                      <span className="text-sm font-medium">{amenity.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>
      <PromoBlock />
    </Layout>
  );
};

export default CaravanAccommodation;

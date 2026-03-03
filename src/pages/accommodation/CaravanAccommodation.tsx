import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Zap, ShowerHead, Wifi, Car, Trees, Sun } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACCOMMODATION_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultCaravanPage } from "@/lib/default-content";

const iconMap: Record<string, any> = { Zap, ShowerHead, Wifi, Car, Trees, Sun };

const CaravanAccommodation = () => {
  const { content } = useSanityContent("caravan-page", ACCOMMODATION_PAGE_QUERY, defaultCaravanPage, { slug: "caravans" });

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">{content.sectionDescription}</p>
          <div className="section-underline" />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {content.items?.map((site) => (
              <div key={site.name} className="card-accommodation">
                <div className="card-header">{site.name}</div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={site.image} alt={site.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <Sun className="text-accent" size={24} />
                  </div>
                  <p className="text-muted-foreground text-center text-sm mb-6">{site.description}</p>
                  <Link to={site.buttonLink || "/contact"} className="btn-cta block text-center text-sm">
                    {site.buttonText || "Book Now"}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {content.amenities?.length > 0 && (
            <div className="mt-16 bg-barilla-cream rounded-lg p-8 md:p-12">
              <h3 className="section-heading mb-8">{content.amenitiesHeading}</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
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
    </Layout>
  );
};

export default CaravanAccommodation;

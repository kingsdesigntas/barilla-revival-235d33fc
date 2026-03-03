import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Link } from "react-router-dom";
import { Tent, ShowerHead, Wifi, Flame, Trees, Sun } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACCOMMODATION_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultCampingPage } from "@/lib/default-content";

const iconMap: Record<string, any> = { Tent, ShowerHead, Wifi, Flame, Trees, Sun };

const CampingGrounds = () => {
  const { content } = useSanityContent("camping-page", ACCOMMODATION_PAGE_QUERY, defaultCampingPage, { slug: "camping" });

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-4xl">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">{content.sectionDescription}</p>
          <div className="section-underline" />

          <div className="mt-12">
            {content.items?.map((item) => (
              <div key={item.name} className="card-accommodation max-w-2xl mx-auto">
                <div className="card-header">{item.name}</div>
                {item.image && (
                  <div className="relative aspect-video overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="p-6">
                  <p className="text-muted-foreground text-center mb-6">{item.description}</p>
                  {item.features && (
                    <ul className="space-y-3 mb-6">
                      {item.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                          <Trees className="text-accent shrink-0" size={20} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to={item.buttonLink || "/contact"} className="btn-cta block text-center">
                    {item.buttonText || "Book Your Campsite"}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {content.amenities?.length > 0 && (
            <div className="mt-16 bg-barilla-cream rounded-lg p-8 md:p-12">
              <h3 className="section-heading mb-8">{content.amenitiesHeading}</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
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

export default CampingGrounds;

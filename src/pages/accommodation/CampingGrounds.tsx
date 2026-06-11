import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import AccommodationHighlights from "@/components/shared/AccommodationHighlights";
import { Tent, ShowerHead, Wifi, Flame, Trees, Sun, LandPlot, CheckCircle2 } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACCOMMODATION_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultCampingPage } from "@/lib/default-content";
import { BOOKING_URL } from "@/lib/booking";

const iconMap: Record<string, any> = { Tent, ShowerHead, Wifi, Flame, Trees, Sun };

const getFeatureIcon = (feature: string) => {
  const f = feature.toLowerCase();
  if (f.includes("wifi")) return Wifi;
  if (f.includes("bbq") || f.includes("campfire") || f.includes("fire")) return Flame;
  if (f.includes("amenity") || f.includes("shower") || f.includes("bathroom")) return ShowerHead;
  if (f.includes("shaded") || f.includes("shelter") || f.includes("tree")) return Trees;
  if (f.includes("flat") || f.includes("spacious") || f.includes("site")) return LandPlot;
  return CheckCircle2;
};


const CampingGrounds = () => {
  const { content } = useSanityContent("camping-page", ACCOMMODATION_PAGE_QUERY, defaultCampingPage, { slug: "camping" });

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <AccommodationHighlights />
      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <p className="text-muted-foreground max-w-2xl mb-4 text-left">{content.sectionDescription}</p>
          <div className="section-underline" />

          <div className="mt-12 space-y-12">
            {content.items?.map((item) => (
              <div key={item.name} className="grid md:grid-cols-2 gap-8 items-center">
                {item.image && (
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{item.name}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
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
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-center">
                    {item.buttonText || "Book Your Campsite"}
                  </a>
                </div>
              </div>
            ))}
          </div>


          {content.amenities?.length > 0 && (
            <div className="mt-16 bg-barilla-cream rounded-lg p-8 md:p-12">
              <h3 className="section-heading mb-8">{content.amenitiesHeading}</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
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

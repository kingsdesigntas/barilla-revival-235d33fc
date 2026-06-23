import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import AccommodationHighlights from "@/components/shared/AccommodationHighlights";
import { Tent, ShowerHead, Wifi, Flame, Trees, Sun, LandPlot, CheckCircle2 } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACCOMMODATION_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultCampingPage } from "@/lib/default-content";
import { BOOKING_URL } from "@/lib/booking";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} backgroundPosition="bg-top" />
      <AccommodationHighlights />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <div className="section-underline" />
          <p className="text-muted-foreground max-w-2xl mb-4 text-left">{content.sectionDescription}</p>

          <div className="mt-12 space-y-12">
            {content.items?.map((item) => {
              const slides = item.images && item.images.length > 0 ? item.images : item.image ? [item.image] : [];
              return (
              <div key={item.name} className="grid md:grid-cols-2 gap-8 items-stretch">
                {slides.length > 0 && (
                  <div className="relative overflow-hidden rounded-lg min-h-[300px]">
                    {slides.length === 1 ? (
                      <img src={slides[0]} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
                    ) : (
                      <Carousel opts={{ align: "start", loop: true }} className="w-full h-full">
                        <CarouselContent className="h-full ml-0">
                          {slides.map((src, i) => (
                            <CarouselItem key={`${src}-${i}`} className="h-full pl-0">
                              <div className="relative w-full h-full min-h-[300px]">
                                <img src={src} alt={`${item.name} ${i + 1}`} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-3 right-auto" />
                        <CarouselNext className="right-3 left-auto" />
                      </Carousel>
                    )}
                  </div>
                )}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-barilla-blue-dark">{item.name}</h3>
                  <p className="text-muted-foreground mb-6">{item.description}</p>
                  {item.features && (
                    <ul className="space-y-3 mb-6">
                      {item.features.map((feature) => {
                        const FeatureIcon = getFeatureIcon(feature);
                        return (
                          <li key={feature} className="flex items-center gap-3 text-muted-foreground">
                            <FeatureIcon className="text-accent shrink-0" size={20} />
                            {feature}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn-cta inline-block text-center">
                    {item.buttonText || "Book Your Campsite"}
                  </a>
                </div>
              </div>

            ))}
          </div>


        </div>
      </section>
    </Layout>
  );
};

export default CampingGrounds;

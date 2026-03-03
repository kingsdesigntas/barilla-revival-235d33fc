import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import { Clock, MapPin, ExternalLink, Mountain, Castle, Wine, Waves, TreePine } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACTIVITY_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultTouristAttractionsPage } from "@/lib/default-content";

const iconMap: Record<string, any> = { Castle, Mountain, Wine, Waves, TreePine, Clock, MapPin };

const TouristAttractions = () => {
  const { content } = useSanityContent("tourist-attractions-page", ACTIVITY_PAGE_QUERY, defaultTouristAttractionsPage, { slug: "attractions" });

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">{content.sectionDescription}</p>
          <div className="section-underline" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {content.activities?.map((attraction) => {
              const Icon = iconMap[attraction.icon] || Castle;
              return (
                <div key={attraction.title} className="bg-card rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-barilla-cream rounded-full p-3 shrink-0">
                      <Icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">{attraction.title}</h3>
                      {attraction.distance && (
                        <div className="flex items-center gap-1 text-sm text-accent mb-2">
                          <Clock size={14} />
                          {attraction.distance}
                        </div>
                      )}
                      <p className="text-sm text-muted-foreground">{attraction.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Feature Section */}
          {content.featureSection && (
            <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-8 text-center">
              <MapPin className="mx-auto mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">{content.featureSection.heading}</h3>
              <p className="max-w-2xl mx-auto mb-6">{content.featureSection.description}</p>
              <a
                href={content.featureSection.buttonLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground font-semibold px-6 py-3 rounded-md inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                {content.featureSection.buttonText} <ExternalLink size={16} />
              </a>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default TouristAttractions;

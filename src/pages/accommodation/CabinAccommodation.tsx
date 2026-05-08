import Layout from "@/components/layout/Layout";
import PageHero from "@/components/shared/PageHero";
import AccommodationHighlights from "@/components/shared/AccommodationHighlights";
import { Link } from "react-router-dom";
import { Bed, Users, Wifi, Tv, UtensilsCrossed, Car, Sun, Check } from "lucide-react";
import { useSanityContent } from "@/hooks/useSanityContent";
import { ACCOMMODATION_PAGE_QUERY } from "@/lib/sanity-queries";
import { defaultCabinPage } from "@/lib/default-content";

const iconMap: Record<string, any> = { Bed, Users, Wifi, Tv, UtensilsCrossed, Car, Sun };

const CabinAccommodation = () => {
  const { content } = useSanityContent("cabin-page", ACCOMMODATION_PAGE_QUERY, defaultCabinPage, { slug: "cabins" });
  const shared = (content as any).sharedFeatures as { icon: string; label: string }[] | undefined;
  const sharedHeading = (content as any).sharedFeaturesHeading || "Included in Every Cabin";
  const sharedDescription = (content as any).sharedFeaturesDescription;

  return (
    <Layout>
      <PageHero title={content.title} subtitle={content.subtitle} backgroundImage={content.heroImage} />
      <AccommodationHighlights />

      <section className="py-16 md:py-24 bg-background">
        <div className="container max-w-5xl">
          <h2 className="section-heading">{content.sectionHeading}</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-4">{content.sectionDescription}</p>
          <div className="section-underline" />
        </div>
      </section>

      {/* Shared / standard features */}
      {shared && shared.length > 0 && (
        <section className="pb-16 md:pb-20 bg-background">
          <div className="container max-w-5xl">
            <div className="bg-barilla-cream rounded-lg p-8 md:p-12">
              <h3 className="section-heading mb-3">{sharedHeading}</h3>
              {sharedDescription && (
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8">{sharedDescription}</p>
              )}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {shared.map((f) => {
                  const Icon = iconMap[f.icon] || Check;
                  return (
                    <div key={f.label} className="flex items-center gap-3">
                      <Icon className="text-primary shrink-0" size={24} />
                      <span className="text-sm font-medium">{f.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Cabin type tiles */}
      <section className="pb-16 md:pb-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.items?.map((cabin: any) => (
              <div key={cabin.name} className="card-accommodation flex flex-col">
                <div className="card-header">{cabin.name}</div>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={cabin.image} alt={cabin.name} className="w-full h-full object-cover" />
                  {cabin.tagline && (
                    <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow">
                      {cabin.tagline}
                    </span>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  {cabin.sleeps && (
                    <div className="flex items-center justify-center gap-2 mb-4 text-primary">
                      <Users size={18} />
                      <span className="text-sm font-medium">{cabin.sleeps}</span>
                    </div>
                  )}
                  <p className="text-muted-foreground text-sm mb-5">{cabin.description}</p>
                  {cabin.features && (
                    <ul className="space-y-2 mb-6">
                      {cabin.features.map((feature: string) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check size={16} className="text-accent mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to={cabin.buttonLink || "/contact"} className="btn-cta block text-center text-sm mt-auto">
                    {cabin.buttonText || "Book Now"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CabinAccommodation;
